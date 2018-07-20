package org.riskfirst.twitter;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import twitter4j.Paging;
import twitter4j.ResponseList;
import twitter4j.Status;
import twitter4j.Twitter;

public class FollowerRetweetSource extends AbstractRetweetSource {

	long id;
	
	public FollowerRetweetSource(Twitter twitter) throws Exception {
		super(twitter);
		this.id = t.getId();
	}
	
	@Override
	public List<Long> getAllTweets() {
		try {
			ResponseList<Status> timeline = t.getHomeTimeline(new Paging(1, 50));
			return timeline.stream()
					.filter(s -> s.getUser().getId() != id)
					.map(s -> s.getId()).collect(Collectors.toList());
		} catch (Exception e) {
			e.printStackTrace();
			return Collections.emptyList();
		}
	}

}
