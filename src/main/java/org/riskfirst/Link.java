package org.riskfirst;

public class Link {

	private final boolean image;
	private final boolean external;
	private final String text;
	private final String url;
	private final String link;
	private final int line;
	private final Article a;
	
	public Link(boolean image, String text, String url, String link, int line, Article a) {
		super();
		this.image = image;
		this.external = url.startsWith("http");
		this.text = text;
		this.url = url;
		this.link = link;
		this.line = line;
		this.a = a;
	}
	
	public boolean isImage() {
		return image;
	}

	public boolean isExternal() {
		return external;
	}

	public String getText() {
		return text;
	}

	public String getUrl() {
		return url;
	}

	public String getLink() {
		return link;
	}

	public int getLine() {
		return line;
	}

	@Override
	public String toString() {
		return "Link [image=" + image + ", external=" + external + ", text=" + text + ", url=" + url + ", link=" + link + ", line=" + line + "]";
	}

	public Article getArticle() {
		return a;
	}
	
}
