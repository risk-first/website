package preprocessor;

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
		while (line != null) {
			if (line.trim().equals("```include")) {
				processIncludes(br, origin);
			} else {
				processLinks(line);
			}
			line = br.readLine();
		}
	}
	
	static Pattern p = Pattern.compile("\\[[^\\]]*?\\]\\(.*?\\)");

	private static void processLinks(String line) {
		Matcher m = p.matcher(line);
		int place = 0;
		while (m.find()) {
			int s = m.start();
			int e = m.end();
			
			System.out.print(line.substring(place, s));
			
			String link = line.substring(s, e);
			
			String text = link.substring(1, link.indexOf("]"));
			String url = link.substring(link.indexOf("](")+2, link.length()-1);
			
			if (!link.equals("["+text+"]("+url+")")) {
				System.err.println("BAD: "+link+"    "+text+"    "+url);
			} else {
				System.err.println("OK: " + link+"    "+text+"    "+url);
			}
			
			if (!isExternal(url)) {
				if (!isImage(url)) {
					// these are links in the same document.
					if (LINKS_AS_BOLD) {
						System.out.print("**"+text+"**");
					} else {
						// something else.
					}
				} else {
					System.out.print(link);
				}
			} else {
				System.out.print(link);
			}
			
			
			place = e;
		}
		
		System.out.println(line.substring(place));
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
