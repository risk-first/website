package org.riskfirst.twitter;

import java.net.URI;
import java.util.EnumSet;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.riskfirst.Article;
import org.riskfirst.ArticleState;

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
	
	public List<Article> getArticlesInState(EnumSet<ArticleState> states) {
		List<Article> out =  articles.stream().filter(a -> states.contains(a.getState())).collect(Collectors.toList());
		return out;
	}
	
}
