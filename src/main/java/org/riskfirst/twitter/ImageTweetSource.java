package org.riskfirst.twitter;

import java.net.URI;
import java.util.Collections;
import java.util.List;

import org.riskfirst.Article;

import twitter4j.StatusUpdate;

public class ImageTweetSource extends AbstractRiskFirstWikiTweetSource implements TweetSource {

	public ImageTweetSource(List<Article> articles, URI baseUri) {
		super(articles, baseUri);
	}

	@Override
	public List<StatusUpdate> getAllTweets() {
		// first, get back articles 
		
		
		StatusUpdate su = new StatusUpdate("Testing");
		return Collections.singletonList(su);
	}
	
	public List<Image> getImagesFromArticle(Article a) {
		
		
	}

}
