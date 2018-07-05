package org.riskfirst.website.preprocessor;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.kite9.framework.logging.Kite9Log;

/**
 * This is going to scan the input directory and build a collection of targets, then scan all 
 * files and build a collection of targets, and check that one matches the other.
 * @author robmoffat
 *
 */
public class LinkChecker {
	
	static class Target implements Comparable<Target>{
		
		final String file;
		final int line;
		final String link;
		final String text;
		
		public Target(String file, int line, String link, String text) {
			super();
			this.file = file;
			this.line = line;
			
			if (link.startsWith("#")) {
				this.link = file.substring(0, file.lastIndexOf(".md"))+link;
			} else {
				this.link = link;
			}
			
			this.text = text;
		}

		@Override
		public String toString() {
			return "Target [file=" + file + ", line=" + line + ", link=" + link + ", text="+ text + "]";
		}

		@Override
		public int compareTo(Target o) {
			if (this.file.equals(o.file)) {
				if (this.link.equals(o.link)) {
					return ((Integer)this.line).compareTo(o.line);
				} else {
					return this.link.compareTo(o.link);
				}
			} else {
				return this.file.compareTo(o.file);
			}
		}
		
		
	}

	public static void main(String[] args) throws Exception {
		String file = args[0];
		File f = new File(file);
		
		Kite9Log.setLogging(false);
		
		Set<String> links = new HashSet<>();
		SortedSet<Target> targets = new TreeSet<>();
		
		process(f, links, targets);
		
		Set<Target> externals = new HashSet<>();
		
		// now, we can remove targets that are ok
		for (Iterator<Target> iterator = targets.iterator(); iterator.hasNext();) {
			Target target = iterator.next();
			if (links.contains(target.link)) {
				//System.out.println("FOUND: "+target);
				iterator.remove();
			} else if (target.link.startsWith("http")) {
				externals.add(target);
				iterator.remove();
			}
		}
		
		for (Target target : targets) {
			System.out.println("NOT_FOUND: "+target);
		}
		
//		for (Target target : externals) {
//			System.out.println("EXTERNAL: "+target);
//		}
		
		System.out.println("Breaks: "+targets.size());
	}
	
	public static void process(File f, Set<String> links, Set<Target> targets) throws Exception {
		if (f.isDirectory()) {
			for (File f2 : f.listFiles()) {
				process(f2, links, targets);
			}
			
		} else if (f.getName().endsWith(".md") && !f.getName().contains("compiled.md")) {
			BufferedReader br = createBufferedReader(f);
			links.add(createLink(f.getName(), null));
			int line = 0;
			String content = null;
			do {
				if (content != null) {
					// this only checks the one type of link like [dsfs](link).
					TextPreprocessor.processLinks(content, 
						(link, text, url, image, lineNo) -> {
							if (!image) {
								targets.add(new Target(f.getName(), lineNo, url.toLowerCase(), text));
							}
						}, line);
					
					LinkChecker.processTargets(content, 
						(title, depth, lineNo) -> {
							String link = createLink(f.getName(), title);
							links.add(link);
						}, line);
				}
				content = br.readLine();
				line++;
			} while (content!=null);
			
		}
	}
	
	private static String createLink(String name, String title) {
		String mainName = name.substring(0,  name.indexOf(".md"));
		if (title != null) {
			String titleLink = title.trim().replace("&","").replace(" ","-");
			mainName =  mainName+"#"+titleLink;
		}
		
		mainName = mainName.toLowerCase();

		System.out.println("Link: "+mainName+" ");
		
		return mainName;
	}

	public static BufferedReader createBufferedReader(File f) throws FileNotFoundException {
		return new BufferedReader(new FileReader(f));
	}
	
	static Pattern p = Pattern.compile("^(\\#+) ([A-Za-z].*)");
	
	public interface TargetProcessor {
		
		void process(String title, int depth, int line);
		
	}

	public static void processTargets(String line, TargetProcessor lp, int lineNo) {
		Matcher m = p.matcher(line);
		int place = 0;
		while (m.find()) {
			int s = m.start();
			int e = m.end();
						
			String link = line.substring(s, e);
			
			String hashes = m.group(1);
			String text = m.group(2);
			String reconstructed = hashes+" "+text;

			if (!link.equals(reconstructed)) {
				System.err.println("BAD: "+hashes+"    "+text+"   "+reconstructed);
			} else {
				System.err.println("OK: " + hashes+"    "+text+"    "+reconstructed);
			}
			
			lp.process(text, hashes.length(), lineNo);
			
			place = e;
		}
	}

}
