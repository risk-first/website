package org.riskfirst.twitter;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.riskfirst.Article;
import org.riskfirst.ArticleLoader;

import twitter4j.StatusUpdate;
import twitter4j.Twitter;
import twitter4j.TwitterFactory;

public class Tweeter {

    static String riskFirstWikiDir = "../website.wiki"; 
    static URI baseURI;

	public static void main(String[] args) throws Exception {
		URI baseURI = new URI("https://github.com/risk-first/website/wiki/");
	    Twitter twitter = TwitterFactory.getSingleton();
		List<Article> articles = new ArticleLoader().loadArticles(riskFirstWikiDir);
		List<StatusUpdate> potentialTweets = new ArrayList<>();
		
		// work out some tweet sources
		TweetSource imageTweetSource = new ImageTweetSource(articles, baseURI, riskFirstWikiDir);
		List<StatusUpdate> tweets = imageTweetSource.getRandomTweets(5);
		potentialTweets.addAll(tweets);
		
		TweetSource articleTweetSource = new ArticleTweetSource(articles, baseURI);
		tweets = articleTweetSource.getRandomTweets(5);
		potentialTweets.addAll(tweets);
		
		if (tweets.size() > 10) {
			throw new Exception("too many tweets");
		}
		
		for (StatusUpdate statusUpdate : potentialTweets) {
			twitter.updateStatus(statusUpdate);
			Thread.sleep(1000);
		}	
	}
}
