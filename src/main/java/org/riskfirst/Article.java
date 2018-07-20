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
	
	public static final String URL_BASE = "https://github.com/risk-first/website/wiki/";

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
			processLine(line, number, l -> links.add(l), System.out::println);
			line = br.readLine();
			number++;
		}
	}
	
	public interface TextCollector {
		
		void addText(String text);
		
	}
	
	public interface LinkCollector {
		
		void addLink(Link l);
		
	}
	
	public static void processLine(String line, int number, LinkCollector lc, TextCollector tc) {
		Matcher m = p.matcher(line);
		int place = 0;
		while (m.find()) {
			int s = m.start();
			int e = m.end();
			
			tc.addText(line.substring(place, s));
			
			String link = line.substring(s, e);
			
			String bang = m.group(1);
			String text = m.group(2);
			String url = m.group(3);
			lc.addLink(new Link(bang != null, text, url, link, number));
			place = e;
		}
		
		tc.addText(line.substring(place));
	}

	@Override
	public String toString() {
		return "Article [state=" + state + ", f=" + f + "]";
	}
	
	public String getUrl() {
		return URL_BASE+f.getName().replace(".md", "");
	}
	
}
