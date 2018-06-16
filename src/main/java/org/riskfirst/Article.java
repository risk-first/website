package org.riskfirst;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Article {

	private final ArticleState state;
	private final String text;
	private final File f;
	private transient List<Link> links;
	
	public File getFile() {
		return f;
	}

	public Article(ArticleState state, String text, File f) {
		super();
		this.state = state;
		this.text = text;
		this.f = f;
	}

	public ArticleState getState() {
		return state;
	}

	public String getText() {
		return text;
	}
	
	static Pattern p = Pattern.compile("(\\!)?\\[([^\\]]*?)\\]\\((.*?)\\)(\\{(.*?)\\})?");

	public List<Link> getLinks() {
		if (links == null) {
			
		}
		
		return links;
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
	
	private static void processLinks(String line) {
		Matcher m = p.matcher(line);
		int place = 0;
		while (m.find()) {
			int s = m.start();
			int e = m.end();
			
			System.out.print(line.substring(place, s));
			
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
			
			if (!isExternal(url)) {
				if (!isImage(url)) {
					// these are links in the same document.
					if (LINKS_AS_BOLD) {
						System.out.print("**"+text+"**");
					} else {
						// something else.
					}
				} else {
					processImage(link, text, url, m);
				}
			} else {
				System.out.print(link);
			}
			
			
			place = e;
		}
		
		System.out.println(line.substring(place));
	}
	
}
