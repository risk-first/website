package org.riskfirst;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
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
			links = new ArrayList<>();
			try {
				BufferedReader br = new BufferedReader(new FileReader(f));
				process(br, links);
				br.close();
			} catch (IOException e) {
				throw new RuntimeException("Couldn't get links:", e);
			}
		}
		
		return links;
	}
	
	private static void process(BufferedReader br, List<Link> links) throws IOException {
		String line = br.readLine();
		int number = 1;
		while (line != null) {
			processLinks(line, number, links);
			line = br.readLine();
			number++;
		}
	}
	
	private static void processLinks(String line, int number, List<Link> links) {
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
			links.add(new Link(bang != null, text, url, link, number));
			place = e;
		}
		
	}
	
}
