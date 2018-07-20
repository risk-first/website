package org.riskfirst.twitter;

import java.util.List;

import twitter4j.Twitter;

public class ThemeRetweetSource extends AbstractRetweetSource {

	private String tag;
	
	public ThemeRetweetSource(Twitter t, String tag) {
		super(t);
		this.tag = tag;
	}

	@Override
	public List<Long> getAllTweets() {
		// TODO Auto-generated method stub
		return null;
	}

}
