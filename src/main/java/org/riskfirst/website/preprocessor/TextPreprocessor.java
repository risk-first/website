package org.riskfirst.website.preprocessor;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Converts to a single markdown file for the whole site.
 * 
 * @author robmoffat
 *
 */
public class TextPreprocessor {
	
	public static final boolean LINKS_AS_BOLD = false;
	
	public static Set<String> seenUrls = new HashSet<>();

	public static void main(String[] args) throws IOException {
		String file = args[0];
		File f = new File(file);
		
		BufferedReader br = createBufferedReader(f);
		process(br, f);
	}

	public static BufferedReader createBufferedReader(File f) throws FileNotFoundException {
		return new BufferedReader(new FileReader(f));
	}

	private static void process(BufferedReader br, File origin) throws IOException {
		String line = br.readLine();
		int lineNo = 1;
		while (line != null) {
			if (line.trim().equals("```include")) {
				processIncludes(br, origin);
			} else if (line.trim().startsWith("> \"")) {
				outputQuote(line, lineNo);
			} else if (line.trim().startsWith("<!--latex")) {
				outputRawLatex(line);
			} else {
				line = handleReplace(line);		// tidy up
				processLinks(line, TextPreprocessor::processLink, lineNo, TextPreprocessor::handleSpecials);
			}
			System.out.println("");
			line = br.readLine();
			lineNo++;
		}
	}

	private static String handleReplace(String line) {
		line = line.replaceAll("\\s+$", "");	// trim end of line
		line = line.replaceAll(" section", " chapter"); // section -> chapter
		int replace = line.indexOf("<!--replace ");
		if (replace > -1) {
			int replaceContentIdx = line.indexOf("-->", replace);
			int endreplace = line.indexOf("<!--endreplace");
			int endReplaceContentIdx = line.indexOf("-->", endreplace)+3;
			String replaceContent = line.substring(replace+12, replaceContentIdx);
			String out = line.substring(0, replace) + replaceContent + line.substring(endReplaceContentIdx);
			return out;
		}
		
		return line;
	}

	public static void outputRawLatex(String line) {
		line = line.replaceAll("<!--latex", "").replaceAll("-->", "");
		System.out.println("```{=latex}");
		System.out.println(line);
		System.out.println("```");
	}

	public static void outputQuote(String line, int lineNo) {
		try {
			System.out.println("```{=latex}");
			System.out.println("\\begin{quotation}");
			System.out.println("```");
			int qs = line.lastIndexOf("- [");
			String quotation, source;
			if (qs > -1) {
				quotation = line.substring(2, qs); 
				source = line.substring(qs+2);
			} else {
				quotation = line;
				source = null;
			}
			quotation = handleReplace(quotation);
			processLinks(quotation, TextPreprocessor::processLink, lineNo, TextPreprocessor::handleSpecials);
			System.out.println("\n```{=latex}");
			if (source != null) {
				System.out.print("\\sourceatright{");
				processLinks(source.replace("\n", ""), TextPreprocessor::latexSourceLink, lineNo, TextPreprocessor::handleSpecials);
				System.out.println("}");
			}
			System.out.println("\\end{quotation}");
			System.out.println("```");
		} catch (Exception e) {
			throw new RuntimeException("Problem with line "+lineNo+":"+line, e);
		}
	}
	
	private static void handleSpecials(String in) {
		int x =0;
		for (int i = 0; i < in.length(); i++) {
			char c = in.charAt(i);
			if (c=='£') {
				System.out.print("\\pounds");
			} else if (c=='£'){
				
			} else {
				System.out.print(c);
			}
		}
	}

	static Pattern p = Pattern.compile("(\\!)?\\[([^\\]]*?)\\]\\((.*?)\\)(\\{(.*?)\\})?");
	
	public interface LinkProcessor {
		
		void process(String link, String text, String url, boolean image, int lineNo);
		
	}
	
	public interface TextOutputter {
		
		void process(String s);
	}
	
	private static void latexSourceLink(String link, String text, String url, boolean image, int lineNo) {
		if (text.indexOf("_") > -1) {
			text = "\\textemdash  " + text.substring(0, text.indexOf("_"))+"\\emph{"+text.substring(text.indexOf("_")+1, text.lastIndexOf("_"))+"}";
		}
		System.out.print("\\href{"+url.replace("#", "\\#")+"}{"+text+"}");
	}

	public static void processLinks(String line, LinkProcessor lp, int lineNo, TextOutputter tp) {
		Matcher m = p.matcher(line);
		int place = 0;
		while (m.find()) {
			int s = m.start();
			int e = m.end();
			
			tp.process(line.substring(place, s));
			
			String link = line.substring(s, e);
			
			String bang = m.group(1);
			String text = m.group(2);
			String url = m.group(3);
			String extra = m.group(4);
			String reconstructed = (bang==null ? "" : "!")+"["+text+"]("+url+")"+ (extra==null ? "" : extra);

			if (!link.equals(reconstructed)) {
				System.err.println("BAD: "+link+"    "+text+"    "+url+"   "+reconstructed);
			} else {
				System.err.println("OK: " + link+"    "+text+"    "+url);
			}
			
			lp.process(link, text, url, bang != null, lineNo);
			
			place = e;
		}
		
		tp.process(line.substring(place));
	}

	private static void processLink(String link, String text, String url, boolean image, int lineNo) {
		
		if (!isExternal(url)) {
			if (!isImage(url)) {
				// these are links in the same document.
				if (LINKS_AS_BOLD) {
					System.out.print("**"+text+"**");
				} else {
					System.out.print(text.trim());
				}
			} else if (!isState(url)) {
				if (url.contains("generated")) {
					// need to replace with 400dpi version
					url = url.substring(0, url.length()-4) + "-400dpi.png";
				}
				
				if (url.contains("sideways")) {
					System.out.println("```{=latex}");
					System.out.println("\\begin{sidewaysfigure}");
					System.out.println("\\centering");
					System.out.println("\\includegraphics{"+url+"}");
					System.out.println("\\caption{"+text+"}");
					System.out.println("\\end{sidewaysfigure}");
					System.out.println("```");

				} else {
					System.out.println("!["+text+"]("+url+")");
				}					
			}
		} else if (seenUrls.contains(url)) {
			// just output as text.
			System.out.print(text);
		} else {
			seenUrls.add(url);
			System.out.print(link);
		}
	}

	private static boolean isImage(String url) {
		return url.contains("images");
	}

	private static boolean isExternal(String url) {
		return url.contains("http");
	}
	
	private static boolean isState(String url) {
		return url.contains("/state/");
	}

	private static void processIncludes(BufferedReader br, File origin) throws IOException {
		String line = br.readLine().trim();
		while (!line.equals("```")) {
			if (!line.startsWith("#")) {
				File f = new File(origin.getParentFile(), line);
				String title = "# " + line.substring(line.lastIndexOf("/")+1).replace("-", " ");
				title = title.replace(".md", "");
				System.out.println("\n\n");
				if ((!line.contains("book")) && (!line.contains("snippets"))) {
					System.out.println(title);
				}
				process(createBufferedReader(f), f);
			}
			line = br.readLine().trim();
		}
	}
}
