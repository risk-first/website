package org.riskfirst.twitter;

import java.util.List;
import java.util.Random;

import twitter4j.Twitter;

public abstract class AbstractRetweetSource implements RetweetSource {

	protected Twitter t;

	public AbstractRetweetSource(Twitter t) {
		super();
		this.t = t;
	}

	@Override
	public List<Long> getRandomTweets(int n) {
		List<Long> allTweets = getAllTweets();
		Random r = new Random();
		while (allTweets.size() > n) {
			allTweets.remove(r.nextInt(allTweets.size()));
		}
	
		return allTweets;
	}

}