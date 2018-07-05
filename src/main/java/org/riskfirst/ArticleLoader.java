package org.riskfirst;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.kite9.framework.common.RepositoryHelp;

public class ArticleLoader {

	public List<Article> loadArticles(String dir) throws FileNotFoundException, IOException {
		List<Article> out = new ArrayList<>();
		File f = new File(dir);
		recurse(f, out);
		return out;
	}

	private void recurse(File f, List<Article> out) throws FileNotFoundException, IOException {
		if (f.isDirectory()) {
			File[] contents = f.listFiles();
			for (int i = 0; i < contents.length; i++) {
				File f2 = contents[i];
				recurse(f2, out);
			}
		} else if (f.getName().endsWith(".md")) {
			String contents = RepositoryHelp.stream(new FileInputStream(f));
			ArticleState as = getStateFor(contents);
			
			Article art = new Article(as, contents, f);
			out.add(art);
			System.out.println("Loaded: "+art);
			
		}
	}

	private ArticleState getStateFor(String contents) {
		contents = contents.substring(0, contents.indexOf('\n')+1);
		if (contents.contains("state/uc.png")) {
			return ArticleState.UNDER_CONSTRUCTION;
		} else if (contents.contains("state/draft.png")) {
			return ArticleState.DRAFT;
		} else if (contents.contains("state/for-review.png")) {
			return ArticleState.FOR_REVIEW;
		} else if (contents.contains("state/reviewed.png")) {
			return ArticleState.REVIEWED;
		} else {
			return ArticleState.NONE;
		}
	}
	
	
}
