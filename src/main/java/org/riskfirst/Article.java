package org.riskfirst;

import java.io.File;

public class Article {

	private final ArticleState state;
	private final String text;
	private final File f;
	
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
	
}
