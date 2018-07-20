package org.riskfirst.twitter;

import java.net.URI;
import java.util.EnumSet;
import java.util.List;
import java.util.stream.Collectors;

import org.riskfirst.Article;
import org.riskfirst.ArticleState;

public abstract class AbstractRiskFirstWikiTweetSource extends AbstractTweetSource implements TweetSource {
	
	protected List<Article> articles;
	protected URI baseUri;
	
	public AbstractRiskFirstWikiTweetSource(List<Article> articles, URI baseUri) {
		this.baseUri = baseUri;
		this.articles = articles;
	}

	public List<Article> getArticlesInState(EnumSet<ArticleState> states) {
		List<Article> out =  articles.stream().filter(a -> states.contains(a.getState())).collect(Collectors.toList());
		return out;
	}
}
