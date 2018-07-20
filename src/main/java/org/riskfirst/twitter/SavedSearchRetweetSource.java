package org.riskfirst.twitter;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import twitter4j.Query;
import twitter4j.QueryResult;
import twitter4j.ResponseList;
import twitter4j.SavedSearch;
import twitter4j.Twitter;
import twitter4j.TwitterException;

public class SavedSearchRetweetSource extends AbstractRetweetSource {
	
	public SavedSearchRetweetSource(Twitter t) {
		super(t);
	}

	@Override
	public List<Long> getAllTweets() {
		try {
			// first, get saved searches
			ResponseList<SavedSearch> searches = t.getSavedSearches();
			
			List<Long> out = new ArrayList<>();
			
			for (SavedSearch ss : searches) {
				System.out.println("Saved Search: "+ss);
				QueryResult qr = t.search(new Query(ss.getQuery()));
				qr.getTweets().stream().map(s -> s.getId()).forEach(id -> out.add(id));
			}
			
			return out;
		} catch (TwitterException e) {
			e.printStackTrace();
			return Collections.emptyList();
		}
	}

}
