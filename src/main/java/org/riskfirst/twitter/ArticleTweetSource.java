package org.riskfirst.twitter;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.riskfirst.Article;

import twitter4j.StatusUpdate;

public class ArticleTweetSource extends AbstractRiskFirstWikiTweetSource {
	
	public static final String STANDARD_HASHTAGS = "";

	public ArticleTweetSource(List<Article> articles, URI baseUri) {
		super(articles, baseUri);
	}
	
	static final Pattern p = Pattern.compile("\\<div class=\"tweet\"\\>(.*?)\\<");

	@Override
	public List<StatusUpdate> getAllTweets() {
		List<StatusUpdate> out = new ArrayList<>();
		articles.stream().forEach(a -> getTweetsFor(a, out));
		return out;
	}

	public void getTweetsFor(Article a, List<StatusUpdate> out) {
		String text = a.getText();
		Matcher m = p.matcher(text);
		while (m.find()) {
			String tweet = m.group(1);
			out.add(new StatusUpdate(tweet));
		}
	}
	
	

}
