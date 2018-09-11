![For Review](images/state/for-review.png)

[Feature Risk](Feature-Risk) is the category of software risk to do with features that have to be in your software.  It is the risk that you face by _not having features that your clients need_.<!-- tweet-end -->  

In a way, [Feature Risk](Feature-Risk) is very fundamental:  if there were _no_ feature risk, the job would be done already, either by you, or by another product, and the product would be perfect!

As a simple example, <!-- tweet-start -->if your needs are served perfectly by Microsoft Excel, then you don't have any [Feature Risk](Feature-Risk).<!-- tweet-end -->  However, the day you find Microsoft Excel wanting, and decide to build an Add-On is the day when you first appreciate some [Feature Risk](Feature-Risk).

Not considering [Feature Risk](Feature-Risk) means that you might be building the wrong functionality, for the wrong audience or at the wrong time.  And eventually, this will come down to lost money, business, acclaim, or whatever else reason you are doing your project for.  So let's unpack this concept into some of it's variations.

## Variations

### Feature Fit Risk

![Feature Risk](images/generated/fit-risk.png) 

This is the one we've just discussed above: the feature that you (or your clients) want to use in the software _isn't there_.   Now, as usual, you could call this an issue, but we're calling it a [Risk](Glossary#Risk) because it's not clear exactly _how many_ people are affected, or how badly. 

 - This might manifest itself as complete _absence_ of something you need, e.g "Where is the word count?"
 - It could be that the implementation isn't complete enough, e.g "why can't I add really long numbers in this calculator?"
 
### Features Don't Work Properly

[Feature Risk](Feature-Risk) also includes things that don't work as expected<!-- tweet-end -->: That is to say, [bugs](https://en.wikipedia.org/wiki/Software_bug).   Although the distinction between "a missing feature" and "a broken feature" might be worth making in the development team, we can consider these both the same kind of risk:  _the software doesn't do what the user expects_.

![Implementation Risk](images/generated/implementation-risk.png) 

(At this point, it's worth pointing out that sometimes, _the user expects the wrong thing_.  This is a different but related risk, which could be down to [Training](Training) or [Documentation](Documentation) or simply [Poor User Interface](Communication-Risk) and we'll look at that more in [Communication Risk](Communication-Risk).)

### Regression Risk

![Regression Risk](images/generated/regression-risk.png) 

[Regression Risk](Feature-Risk#regression-risk) is basically risk of breaking existing features in your software when you add new ones.  <!-- tweet-end -->As with the previous risks, the eventual result is the same; customers don't have the features they expect.  This can become a problem as your code-base [gains Complexity](Complexity-Risk), as it becomes impossible to keep a complete [Internal Model](Glossary#Internal-Model) of the whole thing.

Also, while delivering new features can delight your customers, breaking existing ones will annoy them.  This is something we'll come back to in [Reputation Risk](Operational-Risk#reputational-risk).

### Conceptual Integrity Risk

![Conceptual Integrity Risk](images/generated/conceptual-integrity-risk.png) 

Sometimes, users _swear blind_ that they need some feature or other, but it runs at odds with the design of the system, and plain _doesn't make sense_.   Often, the development team can spot this kind of conceptual failure as soon as it enters the [Backlog](Prioritisation). Usually, it's in coding that this becomes apparent.  

tbd: feature phones.

Sometimes, it can go for a lot longer.  I once worked on some software that was built as a score-board within a chat application.  However, after we'd added much-asked-for commenting and reply features to our score-board, we realised we'd implemented a chat application _within a chat application_, and had wasted our time enormously.  

Which leads to Greenspun's 10th Rule:

> "Any sufficiently complicated C or Fortran program contains an ad-hoc, informally-specified, bug-ridden, slow implementation of half of Common Lisp." - [Greenspun's 10th Rule, _Wikipedia_](https://en.wikipedia.org/wiki/Greenspun's_tenth_rule)

This is a particularly pernicious kind of [Feature Risk](Feature-Risk) which can only be mitigated by good [Design](Design).  Human needs are fractal in nature: the more you examine them, the more differences you can find.  The aim of a product is to capture some needs at a *general* level:  you can't hope to "please all of the people all of the time".  

[Conceptual Integrity Risk](Feature-Risk#conceptual-integrity-risk) is the risk that chasing after features leaves the product making no sense, and therefore pleasing no-one.   

### Feature Access Risk

![Feature Access Risk](images/generated/feature-access-risk.png) 

Sometimes, features can work for some people and not others:  this could be down to [Accessibility](https://en.wikipedia.org/wiki/Accessibility) issues, language barriers or localization.   <!-- tweet-end -->

You could argue that the choice of _platform_ is also going to limit access:  <!-- tweet-start -->writing code for XBox-only leaves PlayStation owners out in the cold.   This is _largely_ [Feature Access Risk](Feature-Risk#feature-access-risk), though [Dependency Risk](Dependency-Risk) is related here.<!-- tweet-end -->

In Marketing, minimizing [Feature Access Risk]() is all about [Segmentation]():  trying to work out _who_ your product appeals to, and tailoring it to that particular market, but for technologists, increasing [Feature Access]() means increasing complexity:  you have to deliver the software on more platforms, localized in more languages, with different configurations of features at different price-points.  Mitigating [Feature Acccess Risk]() therefore means increased effort and complexity (which we'll come to later).

### Market Risk

[Feature Access Risk]() is related, of course, to [Market Risk](Feature-Risk#market-risk), which I introduced on the [Risk Landscape](Risk-Landscape) page as being the value that the market places on a particular asset.  <!-- tweet-end -->Since the product you are building is your asset, it makes sense that you'll face [Market Risk](Feature-Risk#market-risk) on it:

![Market Risk](images/generated/market-risk.png) 

 > "Market risk is the risk of losses in positions arising from movements in market prices." - [Market Risk, _Wikipedia_](https://en.wikipedia.org/wiki/Market_risk)

I face market risk when I own (i.e. have a _position_ in) some [Apple](http://apple.com) stock. <!-- tweet-end --> [Apple's](http://apple.com)'s stock price will decline if a competitor brings out an amazing product, or if fashions change and people don't want their products any more.

In the same way, _you_ have [Market Risk](Feature-Risk#market-risk) on the product or service you are building:  the _market_ decides what it is prepared to pay for this, and it tends to be outside your control.     

### Feature Drift Risk

![Feature Drift Risk](images/generated/feature-drift-risk.png) 

**Feature Drift** is the tendency that the features people need _change over time_.   For example, at one point in time, supporting IE6 was right up there for website developers, but it's not really relevant anymore.  <!-- tweet-end --> Although that change took _many_ years to materialize, other changes are more rapid.    

The point is:  [Requirements captured](Requirements-Capture) _today_ might not make it to _tomorrow_, especially in the fast-paced world of IT.  This is partly because the market _evolves_ and becomes more discerning.  This happens in several ways:
 - Features present in competitor's versions of the software become _the baseline_, and they're expected to be available in your version.
 - Certain ways of interacting become the norm (e.g. [querty]() keyboards, or the control layout in cars: these don't change with time).
 - Features decline in usefulness: _Printing_ is less important now than it was,  for example.

[Feature Drift Risk](Feature-Risk#feature-drift-risk) is _not the same thing_ as **Requirements Drift**, which is the tendency projects have to expand in scope as they go along.  There are lots of reasons they do that, a key one being the [Hidden Risks](Glossary#hidden-risk) uncovered on the project as it progresses.

### Fashion

Fashion plays a big part in IT, as this [infographic on website design shows](https://designers.hubspot.com/blog/the-history-of-web-design-infographic).  True, websites have got easier to use as time has gone by, and users now expect this.  Also, bandwidth is greater now, which means we can afford more media and code on the client side.  However, _fashion_ has a part to play in this.  


By being _fashionable_, websites are communicating:   _this is a new thing_, _this is relevant_, _this is not terrible_:  all of which is mitigating a [Communication Risk](Communication-Risk).  <!-- tweet-start -->Users are all-too-aware that the Internet is awash with terrible, abandon-ware sites that are going to waste their time.  How can you communicate that you're not one of them to your users? <!-- tweet-end -->

### Delight

If this breakdown of [Feature Risk](Feature-Risk) seems reductive, then try not to think of it that way:  <!-- tweet-start --> the aim _of course_ should be to delight users, and turn them into fans.  That's a laudable [Goal](Glossary#Goal-In-Mind), but should be treated in the usual Risk-First way:  _pick the biggest risk you can mitigate next_.   <!-- tweet-end -->

Consider [Feature Risk](Feature-Risk) from both the down-side and the up-side:  

 - What are we missing?
 - How can we be _even better_?

Hopefully, this has given you some ideas about what [Feature Risk](Feature-Risk) involves.   Hopefully, you might be able to identify a few more specific varieties.  But, it's time to move on and look in more detail at [Complexity Risk](Complexity-Risk) and how it affects what we build. 

### Analysis

At this point, it would be easy to stop and say, look, here are a bunch of [Feature Risk]() issues that you could face.  But, it turns out that we're going to be relying heavily on [Feature Risk]() as we go on in order to build our understanding of other risks, so it's probably worth spending a bit of time up front to classify what we've found.  

The [Feature Risks]() identified here basically exist in a 3-dimensional space:
 - **Fit**: How well the features fit for a particular client.
 - **Audience**:  The range of clients (the _market_) that may be able to use this feature.
 - **Evolution**:  The way the fit and the audience changes and evolves as time goes by. 
 
#### Fit

 > "Survival Of The Fittest" - Darwin, tbd.
 
Darwin's conception of fitness was not one of athletic prowess, but how well an organism worked within the landscape.

tbd:  definition of biological fitness

 [Fit Risk](), [Conceptual Integrity Risk]() and [Implementation Risk]() all hint at different aspects of this "fitness".   We can conceive of the relationships between them in the following way:

![Feature Risks Assembled](images/kite9/all_feature_risk_1.png) 

For further reading, you can check out [The Service Quality Model](http://en.wikipedia.org/SERVQUAL), whcih this model is derived from.  This model analyses the types of _quality gaps_ in services, and how consumer expectations and perceptions of a service arise.  In [Staging And Classifying](Staging-And-Classifying#Your-Feature-Risk-is-Someone-Else-s-Dependency-Risk), we'll come back and build on this model further. 

#### Fit and Audience

Two risks, [Feature Access Risk](Feature-Risk#feature-access-risk) and [Market Risk](Feature-Risk#market-risk) considers _Fit_ for a whole _Audience_ of users.  They are different:  just as it's possible to have a small audience, but a large revenue, it's possible to have a product which has low [Feature Access Risk]() (i.e lots of users can access it without difficulty) but high [Market Risk]() (i.e. the market is highly volatile or capricious in it's demands).  _Online services_ often suffer from this [Market Risk]() rollercoaster, being one moment highly valued and the next irrelevant. 

#### Fit, Audience and Evolution

Two risks further consider how the **Fit** and **Audience** _change_: [Regression Risk]() and [Feature Drift Risk]().  We call this _evolution_ in the sense that:
 - Our product's features _evolve_ with time, and changes made by the development team.
 - Our audience changes and evolves as it is exposed to our product and competing products.
 - The world as a whole is an evolving system within which our product exists.
 
 tbd.  regression risk and feature drift risk.
 
### Applying Feature Risk

Consider [Feature Risk](Feature-Risk) carefully next time you are grooming the backlog:
 - Can you judge which tasks mitigate the most [Feature Risk](Feature-Risk)?
 - Are you delivering features that are valuable to a large audience?  How well do you understand your audience?  How does the size of the audience for a task impact it's importance in the backlog?
 - Does the audience _know_ that the features exist?  How do you communicate feature availability to them?  
 - How does writing a specification mitigate [Fit Risk](Feature-Risk#feature-fit-risk)?  For what other reasons are you writing specifications?
  
In the next section, we are going to unpack this third point further.  Somewhere between "what the customer wants" and "what you give them" is a _dialog_.  In using a software product, users are engaging in a _dialog_ with its features.  If the features don't exist, hopefully they will engage in a dialog with the development team to get them added.  

These dialogs are prone to risk, and this is the subject of the next section, [Communication-Risk](Communication-Risk).