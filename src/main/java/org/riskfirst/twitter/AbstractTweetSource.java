package org.riskfirst.twitter;

import java.util.List;
import java.util.Random;

import twitter4j.StatusUpdate;

public abstract class AbstractTweetSource implements TweetSource {

	public AbstractTweetSource() {
		super();
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