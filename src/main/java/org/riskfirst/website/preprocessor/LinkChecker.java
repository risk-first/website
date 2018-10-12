package org.riskfirst.website.preprocessor;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
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
	
	static String websitePrefix = null;
	
	static class Target implements Comparable<Target>{
		
		final File file;
		final int line;
		final String link;
		final String text;
		final boolean image;
		
		public Target(File file, int line, String link, String text, boolean image) {
			super();
			this.file = file;
			this.line = line;
			this.image = image;
			
			if (link.startsWith("#")) {
				this.link = file.getName().substring(0, file.getName().lastIndexOf(".md")).toLowerCase()+link;
			} else {
				this.link = link;
			}
			
			this.text = text;
		}

		@Override
		public String toString() {
			return file + "," + line + "," + link + ","+ text;
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
		PrintStream bw = new PrintStream(new FileOutputStream(new File("links.csv")));
		PrintStream tbw = new PrintStream(new FileOutputStream(new File("targets.csv")));

		Kite9Log.setLogging(false);
		Set<String> links = new HashSet<>();
		
		
		SortedSet<Target> targets = new TreeSet<>();

		for (String arg : args) {
			if (websitePrefix == null) {
				websitePrefix = arg;
				File f = new File(arg);
				process(f, links, targets, bw, true);
			} else {
				File f = new File(arg);
				process(f, links, targets, bw, false);
			}
		}
		
		Set<Target> externals = new HashSet<>();
		
		// now, we can remove targets that are ok
		for (Iterator<Target> iterator = targets.iterator(); iterator.hasNext();) {
			Target target = iterator.next();
			if (links.contains(target.link)) {
				//bw.println("FOUND,"+target);
				iterator.remove();
			} else if (target.link.startsWith("http")) {
				externals.add(target);
				iterator.remove();
			} else {
				bw.println("NOT_FOUND,"+target);
			}
		}
		
		for (Target target : externals) {
			//bw.println("EXTERNAL,"+target);
		}
		
		List<String> sorted = new ArrayList<>(links);
		Collections.sort(sorted);
		for (String link : sorted) {
 			tbw.println(link);
		}
		
		System.out.println("Breaks: "+targets.size());
		bw.close();
		tbw.close();
	}
	
	public static void process(File f, Set<String> links, Set<Target> targets, PrintStream bw, boolean destinationsOnly) throws Exception {
		if (f.isDirectory()) {
			for (File f2 : f.listFiles()) {
				process(f2, links, targets, bw, destinationsOnly);
			}
			
		} else if (f.getName().endsWith(".md")) {
			BufferedReader br = createBufferedReader(f);
			links.add(createMDLink(f.getName(), null));
			int line = 0;
			String content = null;
			do {
				if (content != null) {
					// this only checks the one type of link like [dsfs](link).
					
					if (!destinationsOnly) {
						TextPreprocessor.processLinks(content, 
							(link, text, url, image, lineNo) -> {
								targets.add(new Target(f, lineNo, url.toLowerCase(), text, image));
							}, line, (s) -> {});
					}
					
					LinkChecker.processTargets(content, 
						(title, depth, lineNo) -> {
							String link = createMDLink(f.getName(), title);
							links.add(link);
						}, line, bw);
				}
				content = br.readLine();
				line++;
			} while (content!=null);
			
		} else if (f.getName().endsWith(".png")) {
			links.add(createImageLink(f.getPath()));
		}
	}
	
	private static String createImageLink(String name) {
		if (name.startsWith(websitePrefix)) {
			String out = name.substring(websitePrefix.length());
			return out.toLowerCase();
		} else {
			return name.toLowerCase();
		}
	}
	
	private static String createMDLink(String name, String title) {
		if (name.startsWith(websitePrefix)) {
			name = name.substring(websitePrefix.length());
		}
		
		String mainName = name.substring(0,  name.indexOf(".md"));
		if (title != null) {
			String titleLink = title.trim().replaceAll("[\\&\\:\\/\\#]*", "").replace(" ","-");
			mainName =  mainName+"#"+titleLink;
		}
		
		mainName = mainName.toLowerCase();

		//System.out.println("Link: "+mainName+" ");
		
		return mainName;
	}

	public static BufferedReader createBufferedReader(File f) throws FileNotFoundException {
		return new BufferedReader(new FileReader(f));
	}
	
	static Pattern p = Pattern.compile("^(\\#+) ([A-Za-z].*)");
	
	public interface TargetProcessor {
		
		void process(String title, int depth, int line);
		
	}

	public static void processTargets(String line, TargetProcessor lp, int lineNo, PrintStream bw) {
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
				System.err.println("BAD_TARGET,"+hashes+"    "+text+"   "+reconstructed);
			} else {
				System.out.println("TARGET," + hashes+"    "+text+"    "+reconstructed);
			}
			
			lp.process(text, hashes.length(), lineNo);
			
			place = e;
		}
	}

}
