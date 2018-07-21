package org.riskfirst.twitter;

import java.io.File;
import java.io.FileReader;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

import org.riskfirst.Article;
import org.riskfirst.ArticleLoader;

import twitter4j.ResponseList;
import twitter4j.SavedSearch;
import twitter4j.StatusUpdate;
import twitter4j.Twitter;
import twitter4j.TwitterFactory;

public class Tweeter {

    static Properties props = new Properties();
    static String riskFirstWikiDir;

	public static void main(String[] args) throws Exception {
		props.load(new FileReader(new File("tweeter.properties")));
		riskFirstWikiDir = props.getProperty("dir", "../website.wiki");
		
		URI baseURI = new URI(props.getProperty("baseURI", "https://github.com/risk-first/website/wiki/"));
		
		System.out.println("baseURI: "+baseURI);

		Twitter twitter = TwitterFactory.getSingleton();
		List<Article> allArticles = new ArticleLoader().loadArticles(riskFirstWikiDir);
		List<Article> articles = allArticles.stream().filter(a -> !tweetsArticle(a)).collect(Collectors.toList());
		List<Article> tweetsArticle = allArticles.stream().filter(a -> tweetsArticle(a)).collect(Collectors.toList());
		List<String> tags = twitter.getSavedSearches().stream().map(ss -> ss.getQuery()).collect(Collectors.toList());
		
		List<StatusUpdate> potentialTweets = new ArrayList<>();
		List<Long> retweets;
		List<Long> potentialRetweets = new ArrayList<>();
		
		collectTweets(baseURI, articles, potentialTweets, amount("articles", 3), tags);
		collectTweets(baseURI, tweetsArticle, potentialTweets, amount("tweets", 3), tags);

//		RetweetSource followerSource = new FollowerRetweetSource(twitter);
//		retweets = followerSource.getRandomTweets(amount("follow", 2));
//		potentialRetweets.addAll(retweets);

//		RetweetSource searchSource = new SavedSearchRetweetSource(twitter);
//		retweets = searchSource.getRandomTweets(amount("searches", 2));
//		potentialRetweets.addAll(retweets);
		
		for (StatusUpdate statusUpdate : potentialTweets) {
			try {
				System.out.println("Tweeting: "+statusUpdate);
				twitter.updateStatus(statusUpdate);
			} catch (Exception e) {
				System.err.println("Couldn't tweet: "+statusUpdate);
				e.printStackTrace();
			}
			Thread.sleep(1000);
		}	
		
		for (Long l : potentialRetweets) {
			try {
				System.out.println("Retweeting: "+l);
				twitter.retweetStatus(l);
			} catch (Exception e) {
				System.err.println("Couldn't re-tweet: "+l);
				e.printStackTrace();
			}
			Thread.sleep(1000);
		}	
	}

	private static int amount(String prop, int i) {
		return Integer.parseInt(props.getProperty(prop, ""+i));
	}

	public static void collectTweets(URI baseURI, List<Article> articles, List<StatusUpdate> potentialTweets, int count, List<String> tags) {
		List<StatusUpdate> tweets;
		TweetSource imageTweetSource = new ImageTweetSource(articles, baseURI, riskFirstWikiDir, tags);
		tweets = imageTweetSource.getRandomTweets(count);
		potentialTweets.addAll(tweets);
		
		TweetSource articleTweetSource = new ArticleTweetSource(articles, baseURI, tags);
		tweets = articleTweetSource.getRandomTweets(count);
		potentialTweets.addAll(tweets);
	}

	public static boolean tweetsArticle(Article a) {
		return a.getFile().getName().contains("Tweets");
	}
}
