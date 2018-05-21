[Feature Risk](Feature-Risk) is the category of risks to do with features that have to be in your software.   
You could also call it **Functionality Risk**.  It is the risk that you face by _not having features that your clients need_.  

![Feature Risk](images/generated/feature-risk.png) 

Eventually, this will come down to lost money, business, acclaim, or whatever else reason you are doing your project for.

In a way, [Feature Risk](Feature-Risk) is very fundamental:  if there were _no_ feature risk, the job would be done already, either by you, or by another product.  

As a simple example, if your needs are served perfectly by Microsoft Excel, then you don't have any [Feature Risk](Feature-Risk).  However, the day you find Microsoft Excel wanting, and decide to build an Add-On is the day when you first appreciate some [Feature Risk](Feature-Risk).

## Variations

### Feature Fit Risk

![Feature Risk](images/generated/fit-risk.png) 

This is the one we've just discussed above: the feature that you (or your clients) want to use in the software _isn't there_.   Now, as usual, you could call this an issue, but we're calling it a [Risk](Risk) because it's not clear exactly _how many_ people are affected, or how badly. 

 - This might manifest itself as complete _absence_ of something you need, e.g "Where is the word count?"
 - It could be that the implementation isn't complete enough, e.g "why can't I add really long numbers in this calculator?"

### Features Don't Work Properly

[Feature Risk](Feature-Risk) also includes things that don't work as expected: That is to say, [bugs](https://en.wikipedia.org/wiki/Software_bug).   Although the distinction between "a missing feature" and "a broken feature" might be worth making in the development team, we can consider these both the same kind of risk:  _the software doesn't do what the user expects_.

![Implementation Risk](images/generated/implementation-risk.png) 

(At this point, it's worth pointing out that sometimes, _the user expects the wrong thing_.  This is a different but related risk, which could be down to [Training](Training) or [Documentation](Documentation) or simply [Poor User Interface](Communication-Risk) and we'll look at that more in [Communication Risk](Communication-Risk).)

### Regression Risk

![Regression Risk](images/generated/regression-risk.png) 

[Regression Risk](Feature-Risk#regression-risk) is basically risk of breaking existing features in your software when you add new ones.  As with the previous risks, the eventual result is the same; customers don't have the features they expect.  This can become a problem as your code-base [gains Complexity](Complexity-Risk), as it becomes impossible to keep a complete [Internal Model](Internal-Model) of the whole thing.

Also, while delivering new features can delight your customers, breaking existing ones will annoy them.  This is something we'll come back to in [Reputation Risk](Production-Risk).

### Market Risk

![Market Risk](images/generated/market-risk.png) 

On the [Risk Landscape](Risk-Landscape) page I introduced the idea of [Market Risk](Feature-Risk#market-risk) as being the value that the market places on a particular asset.  Since the product you are building is your asset, it makes sense that you'll face [Market Risk](Feature-Risk#market-risk) on it:

 > "Market risk is the risk of losses in positions arising from movements in market prices." - [Market Risk, _Wikipedia_](https://en.wikipedia.org/wiki/Market_risk)

I face market risk when I own (i.e. have a _position_ in) some [Apple](http://apple.com) stock.  [Apple's](http://apple.com)'s stock price will decline if a competitor brings out an amazing product, or if fashions change and people don't want their products any more.

In the same way, _you_ have [Market Risk](Feature-Risk#market-risk) on the product or service you are building:  the _market_ decides what it is prepared to pay for this, and it tends to be outside your control.     

### Conceptual Integrity Risk

![Conceptual Integrity Risk](images/generated/conceptual-integrity-risk.png) 

Sometimes, users _swear blind_ that they need some feature or other, but it runs at odds with the design of the system, and plain _doesn't make sense_.   Often, the development team can spot this kind of conceptual failure as soon as it enters the [Backlog](Prioritisation). Usually, it's in coding that this becomes apparent.  

Sometimes, it can go for a lot longer.  I once worked on some software that was built as a score-board within a chat application.  However, after we'd added much-asked-for commenting and reply features to our score-board, we realised we'd implemented a chat application _within a chat application_, and had wasted our time enormously.  

Which leads to Greenspun's 10th Rule:

> "Any sufficiently complicated C or Fortran program contains an ad-hoc, informally-specified, bug-ridden, slow implementation of half of Common Lisp." - [Greenspun's 10th Rule, _Wikipedia_](https://en.wikipedia.org/wiki/Greenspun's_tenth_rule)

This is a particularly pernicious kind of [Feature Risk](Feature-Risk) which can only be mitigated by good [Design](Design).  Human needs are fractal in nature: the more you examine them, the more differences you can find.  The aim of a product is to capture some needs at a *general* level:  you can't hope to "please all of the people all of the time".  

[Conceptual Integrity Risk](Feature-Risk#conceptual-integrity-risk) is the risk that chasing after features leaves the product making no sense, and therefore pleasing no-one.   

### Feature Access Risk

![Feature Access Risk](images/generated/feature-access-risk.png) 

Sometimes, features can work for some people and not others:  this could be down to [Accessibility](https://en.wikipedia.org/wiki/Accessibility) issues, language barriers or localization.   

You could argue that the choice of _platform_ is also going to limit access:  writing code for XBox-only leaves PlayStation owners out in the cold.   This is _largely_ [Feature Access Risk](Feature-Risk#feature-access-risk), though [Dependency Risk](Dependency-Risk) is related here.

### Feature Drift Risk

![Feature Drift Risk](images/generated/feature-drift-risk.png) 

**Feature Drift** is the tendency that the features people need _change over time_.   For example, at one point in time, supporting IE6 was right up there for website developers, but it's not really relevant anymore.  Although that change took _many_ years to materialize, other changes are more rapid.    

The point is:  [Requirements captured](Requirements-Capture) _today_ might not make it to _tomorrow_, especially in the fast-paced world of IT.  

[Feature Drift Risk](Feature-Risk#feature-drift-risk) is _not the same thing_ as **Requirements Drift**, which is the tendency projects have to expand in scope as they go along.  There are lots of reasons they do that, a key one being the [Hidden Risks](Risk) uncovered on the project as it progresses.

### Fashion

Fashion plays a big part in IT, as this [infographic on website design shows](https://designers.hubspot.com/blog/the-history-of-web-design-infographic).  True, websites have got easier to use as time has gone by, and users now expect this.  Also, bandwidth is greater now, which means we can afford more media and code on the client side.  However, _fashion_ has a part to play in this.  


By being _fashionable_, websites are communicating:   _this is a new thing_, _this is relevant_, _this is not terrible_:  all of which is mitigating a [Communication Risk](Communication-Risk).  Users are all-too-aware that the Internet is awash with terrible, abandon-ware sites that are going to waste their time.  How can you communicate that you're not one of them to your users?

### Delight

If this breakdown of [Feature Risk](Feature-Risk) seems reductive, then try not to think of it that way:  the aim _of course_ should be to delight users, and turn them into fans.  That's a laudable [Goal](Goal-In-Mind), but should be treated in the usual Risk-First way:  _pick the biggest risk you can mitigate next_.   

Consider [Feature Risk](Feature-Risk) from both the down-side and the up-side:  

 - What are we missing?
 - How can we be _even better_?

Hopefully, this has given you some ideas about what [Feature Risk](Feature-Risk) involves.   Hopefully, you might be able to identify a few more specific varieties.  But, it's time to move on and look in more detail at [Complexity Risk](Complexity-Risk) and how it affects what we build.
 
 
