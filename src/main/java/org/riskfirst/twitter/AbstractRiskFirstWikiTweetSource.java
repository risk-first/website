package org.riskfirst.twitter;

import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.EnumSet;
import java.util.List;
import java.util.stream.Collectors;

import org.riskfirst.Article;
import org.riskfirst.ArticleState;

public abstract class AbstractRiskFirstWikiTweetSource extends AbstractTweetSource implements TweetSource {
	
	protected List<Article> articles;
	protected URI baseUri;
	protected List<String> hashtags;
	
	public AbstractRiskFirstWikiTweetSource(List<Article> articles, URI baseUri, List<String> hashtags) {
		this.baseUri = baseUri;
		this.articles = articles;
		this.hashtags = hashtags;
	}

	public List<Article> getArticlesInState(EnumSet<ArticleState> states) {
		List<Article> out =  articles.stream().filter(a -> states.contains(a.getState())).collect(Collectors.toList());
		return out;
	}
	
	public String suffix(int hashtags) {
		return "("+new SimpleDateFormat("dd/MM/yy").format(new Date())+") #riskfirst"; 
//		Collections.shuffle(hashtags);
//		List<String> sl = hashtags.subList(0, Math.min(c, hashtags.size()-1));
//		return " "+sl.stream().reduce((a, b) -> a+" "+b).orElse("");
	}
}
