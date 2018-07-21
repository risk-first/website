package org.riskfirst.twitter;

import java.io.File;
import java.net.URI;
import java.util.EnumSet;
import java.util.List;
import java.util.stream.Collectors;

import org.riskfirst.Article;
import org.riskfirst.ArticleState;
import org.riskfirst.Link;

import twitter4j.StatusUpdate;

public class ImageTweetSource extends AbstractRiskFirstWikiTweetSource implements TweetSource {
		
	private String riskFirstWikiDir;

	public ImageTweetSource(List<Article> articles, URI baseUri, String riskFirstWikiDir, List<String> hashtags) {
		super(articles, baseUri, hashtags);
		this.riskFirstWikiDir = riskFirstWikiDir;
	}

	@Override
	public List<StatusUpdate> getAllTweets() {
		return getArticlesInState(EnumSet.of(ArticleState.FOR_REVIEW, ArticleState.REVIEWED)).stream()
			.flatMap(a -> getImagesFromArticle(a).stream())
			.filter(l -> !l.isExternal())
			.filter(l -> l.isImage())
			.filter(l -> !l.getUrl().contains("/state/"))
			.map(l -> convertToStatusUpdate(l))
			.collect(Collectors.toList());
	}
	
	private StatusUpdate convertToStatusUpdate(Link l) {
		String articleUrl = l.getArticle().getUrl(baseUri.toString());
		StatusUpdate out = new StatusUpdate("\""+ l.getText()+"\" "+randomHashtags(4)+"- from "+articleUrl+" ");
		
		out.setMedia(getImageFile(l.getUrl()));
		return out;
	}
	
	private File getImageFile(String url) {
		File out = new File(riskFirstWikiDir+"/"+url);
		if (!out.exists()) {
			throw new RuntimeException("Image not found");
		}
		return out;
	}

	public List<Link> getImagesFromArticle(Article a) {
		return a.getLinks().stream().filter(l -> l.isImage()).collect(Collectors.toList());
	}

}
