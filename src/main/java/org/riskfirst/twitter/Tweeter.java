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
		List<StatusUpdate> tweets;
		List<Long> potentialRetweets = new ArrayList<>();
		
//		// work out some tweet sources
//		TweetSource imageTweetSource = new ImageTweetSource(articles, baseURI, riskFirstWikiDir);
//		List<StatusUpdate> tweets = imageTweetSource.getRandomTweets(5);
//		potentialTweets.addAll(tweets);
		
//		TweetSource articleTweetSource = new ArticleTweetSource(articles, baseURI);
//		tweets = articleTweetSource.getRandomTweets(5);
//		potentialTweets.addAll(tweets);
	
		RetweetSource followerSource = new FollowerRetweetSource(twitter);
		List<Long> retweets = followerSource.getRandomTweets(5);
		potentialRetweets.addAll(retweets);

		RetweetSource themeSource = new ThemeRetweetSource(twitter, "softwaretesting");
		List<Long> retweets = followerSource.getRandomTweets(5);
		potentialRetweets.addAll(retweets);
		
		for (StatusUpdate statusUpdate : potentialTweets) {
			try {
				twitter.updateStatus(statusUpdate);
			} catch (Exception e) {
				System.err.println("Couldn't tweet: "+statusUpdate);
				e.printStackTrace();
			}
			Thread.sleep(1000);
		}	
		
		for (Long l : potentialRetweets) {
			try {
				twitter.retweetStatus(l);
			} catch (Exception e) {
				System.err.println("Couldn't re-tweet: "+l);
				e.printStackTrace();
			}
			Thread.sleep(1000);
		}	
	}
}
