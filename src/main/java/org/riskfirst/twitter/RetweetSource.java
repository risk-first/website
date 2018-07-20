package org.riskfirst.twitter;

import java.util.List;

import twitter4j.StatusUpdate;

public interface RetweetSource {

	public List<Long> getAllTweets();
	
	public List<Long> getRandomTweets(int n);
}
