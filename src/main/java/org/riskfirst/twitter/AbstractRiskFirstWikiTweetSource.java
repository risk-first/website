package org.riskfirst.twitter;

import java.net.URI;
import java.util.List;
import java.util.Random;

import org.riskfirst.Article;

import twitter4j.StatusUpdate;

public abstract class AbstractRiskFirstWikiTweetSource implements TweetSource {
	
	protected List<Article> articles;
	protected URI baseUri;
	
	public AbstractRiskFirstWikiTweetSource(List<Article> articles, URI baseUri) {
		this.baseUri = baseUri;
		this.articles = articles;
	}

	@Override
	public List<StatusUpdate> getRandomTweets(int n) {
		List<StatusUpdate> allTweets = getAllTweets();
		Random r = new Random();
		while (allTweets.size() > n) {
			allTweets.remove(r.nextInt(allTweets.size()));
		}

		return allTweets;
	}
	
	
}
