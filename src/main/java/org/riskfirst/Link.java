package org.riskfirst;

public class Link {

	private final boolean image;
	private final boolean external;
	private final String text;
	private final String url;
	private final String link;
	private final int line;
	
	public Link(String link, int line) {
		this.link = link;
		this
		this.image = (link.startsWith("!"));
		
	}
}
