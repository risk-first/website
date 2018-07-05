package org.riskfirst.website.preprocessor;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Converts to a single markdown file for the whole site.
 * 
 * @author robmoffat
 *
 */
public class TextPreprocessor {
	
	public static final boolean LINKS_AS_BOLD = true;

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
			} else {
				processLinks(line, TextPreprocessor::processImageLink, lineNo);
			}
			line = br.readLine();
			lineNo++;
		}
	}
	
	static Pattern p = Pattern.compile("(\\!)?\\[([^\\]]*?)\\]\\((.*?)\\)(\\{(.*?)\\})?");
	
	public interface LinkProcessor {
		
		void process(String link, String text, String url, boolean image, int lineNo);
		
	}

	public static void processLinks(String line, LinkProcessor lp, int lineNo) {
		Matcher m = p.matcher(line);
		int place = 0;
		while (m.find()) {
			int s = m.start();
			int e = m.end();
			
			//System.out.print(line.substring(place, s));
			
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
		
		//System.out.println(line.substring(place));
	}

	private static void processImageLink(String link, String text, String url, boolean image, int lineNo) {
		
		if (!isExternal(url)) {
			if (!isImage(url)) {
				// these are links in the same document.
				if (LINKS_AS_BOLD) {
					System.out.print("**"+text+"**");
				} else {
					// something else.
				}
			} else {
				if (url.contains("generated")) {
					// need to replace with 400dpi version
					url = url.substring(0, url.length()-4) + "-400dpi.png";
				}
				
				if (link.contains("-risk.png")) {		// needs to be in margin
					System.out.println("\\marginpar{");
					System.out.println("  \\vspace*{0cm}\\includegraphics[width=2cm,height=5cm]{"+url+"}");
					System.out.println("}");
				} else {
					System.out.println("!["+text+"]("+url+")");
				}
			}
		} else {
			System.out.print(link);
		}
	}

	private static boolean isImage(String url) {
		return url.contains("images");
	}

	private static boolean isExternal(String url) {
		return url.contains("http");
	}

	private static void processIncludes(BufferedReader br, File origin) throws IOException {
		String line = br.readLine().trim();
		while (!line.equals("```")) {
			if (!line.startsWith("#")) {
				File f = new File(origin.getParentFile(), line);
				String title = "# " + line.substring(line.lastIndexOf("/")+1).replace("-", " ");
				title = title.replace(".md", "");
				System.out.println("\n\n");
				if (!line.contains("book")) {
					System.out.println(title);
				}
				process(createBufferedReader(f), f);
			}
			line = br.readLine().trim();
		}
	}
}
