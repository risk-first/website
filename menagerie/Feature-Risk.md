
**Feature Risk** is the category of risks to do with features that have to be in your software.   
You could also call it **Functionality Risk**.  

**Feature Risk** is the risk that you face by _not having features that your clients need_.  

Eventually, this will come down to lost money, business, acclaim, or whatever else reason you are doing your project for.

So, in a way, **Feature Risk** is very fundamental:  if there were _no_ feature risk, the job would be done already, either
by you, or by another product.  

As a simple example, if your needs are served perfectly by Microsoft Excel, then you don't have any **Feature Risk**.  

However, the day you find Microsoft Excel wanting, and decide to build an Add-On is the day when you first appreciate some **Feature Risk**.

## Variations

### Feature Not Present Risk

This is the one we've just discussed above: the feature that you (or your clients) want to use in the software _isn't there_.   Now, as usual, you could call this an issue, but we're calling it a [Risk](Risk) because it's not clear exactly _how many_ people are affected, or how badly. 

 - This might manifest itself as complete _absence_ of something you need, e.g "Where is the word count?"  
 - It could be that the implementation isn't complete enough, e.g "why can't I add really long numbers in this calculator?"

### Features Don't Work Properly

**Feature Risk** also includes things that don't work as expected: That is to say, [bugs](https://en.wikipedia.org/wiki/Software_bug).   Although the distinction between "a missing feature" and "a broken feature" might be worth making in the development team, we can consider these both the same kind of risk:  _the software doesn't do what the user expects_.

(At this point, it's worth pointing out that sometimes, _the user expects the wrong thing_.  This is a different but related risk, which could be down to [Training](Training) or [Documentation](Documentation) or simply [Poor User Interface](Communication-Risk) and we'll look at that more in [Communication Risk](Communication-Risk).)

### Conceptual Integrity Risk

Sometimes, users _swear blind_ that they need some feature or other, but it runs at odds with the design of the system, and plain _doesn't make sense_.   Often, the development team can spot this kind of conceptual failure as soon as it enters the [Backlog](Prioritisation), however, sometimes it's only during coding that this becomes apparent.  

Sometimes, it can go for a lot longer.  I once worked on some software that was built as a scoreboard within a chat application.  However, after we'd added much-asked-for commenting and reply features to our scoreboard, we realised we'd implemented a chat application _within a chat application_, and had wasted our time enormously.  

Which leads to [Greenspun's 10th Rule](https://en.wikipedia.org/wiki/Greenspun's_tenth_rule):

> Any sufficiently complicated C or Fortran program contains an ad-hoc, informally-specified, bug-ridden, slow implementation of half of Common Lisp.

This is a particularly pernicious kind of **Feature Risk** which can only be mitigated by good [Design](Design).

### Feature Access Risk

Sometimes, features can work for some people and not others:  this could be down to [Accessibility](https://en.wikipedia.org/wiki/Accessibility) issues, language barriers or localization.   

You could argue that the choice of _platform_ is also going to limit access:  writing code for XBox-only leaves PlayStation owners out in the cold.   This is _largely_ Feature Access Risk, though [Dependency Risk](Dependency-Risk) is related here.

### Feature Drift Risk

**Feature Drift** is the tendency that the features people need _change over time_.   At one point in time, supporting IE6 was right up there for website developers, but it's not really relevant anymore.  Although that change took _many_ years to materialize, other changes are more rapid.    

The point is:  [Requirements captured](Requirements-Capture) _today_ might not make it to _tomorrow_, especially in the fast-paced world of IT.  

**Feature Drift Risk** is _not the same thing_ as **Requirements Drift**, which is the tendency projects have to expand in scope as they go along.  There are lots of reasons they do that, a key one being the [Hidden Risks](Risk) uncovered on the project as it progresses.

### Fashion

Fashion plays a big part in IT, as this [infographic on website design shows](https://designers.hubspot.com/blog/the-history-of-web-design-infographic).  True, websites have got easier to use as time has gone by, and users now expect this.  Also, bandwidth is greater now, which means we can afford more media and code on the client side.  However, _fashion_ has a part to play in this.  


By being _fashionable_, websites are communicating:   _this is a new thing_, _this is relevant_, _this is not terrible_:  all of which is mitigating a [Communication Risk](Communication-Risk).  Users are all-too-aware that the Internet is awash with terrible, abandon-ware sites that are going to waste their time.  How can you communicate that you're not one of them to your users?

### Delight

If this breakdown of **Feature Risk** seems reductive, then try not to think of it that way:  the aim _of course_ should be to delight users, and turn them into fans.  That's a laudable [Goal](Goal-In-Mind), but should be treated in the usual Risk-First way:  _pick the biggest risk you can mitigate next_.   

Consider **Feature Risk** from both the up-side and the down-side:  
 - What are we missing?
 - How can we be _even better_?
 
 