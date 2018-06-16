package org.riskfirst.twitter;

import java.util.List;

import twitter4j.StatusUpdate;

/**
 * Figures out where to get some tweets from.
 * @author robmoffat
 *
 */
public interface TweetSource {

	public List<StatusUpdate> getAllTweets();
	
	public List<StatusUpdate> getRandomTweets(int n);
	
	
}
