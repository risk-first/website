
In the previous section on [Codebase Risk](Complexity-Risk) we tackled Kolmogorov Complexity, and the idea that your codebase had some kind of minimal level of complexity based on the output it was trying to create.  This is a neat idea, but in a way, we cheated.  Let's look at how.

We were trying to figure out the shortest (Javascript) program to generate this output:

```
abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd
```

And we came up with this:

```javascript
const ABCD="ABCD";                                           (11 symbols)

function out() {                                             (7 symbols)
    return ABCD.repeat(10)                                   (7 symbols)
}                                                            (1 symbol)
```

Which had **26** symbols in it.  

Now, here's the cheat:  The `repeat()` function was built into Javascript in 2015 in [ECMAScript 6.0](http://www.ecma-international.org/ecma-262/6.0/).  If we'd had to program it ourselves, we might have added this:

```javascript
function repeat(s,n) {                                       (10 symbols)
    var a=[];                                                (7 symbols)
    while(a.length<n){                                       (9 symbols)  
        a.push(s)                                            (6 symbols)
    }                                                        (1 symbol)
    return a.join('');                                       (10 symbols)
}                                                            (1 symbol)
```
... which would be an extra **44** symbols (in total **70**), and push us completely over the original string encoding of **53** symbols.   So, encoding language is important.   

Conversely, if ECMAScript 6.0 had introduced a function called `abcdRepeater(n)` we'd have been able to do this:

```javascript
function out() {                                             (7 symbols)
    return abcdRepeater(10)                                  (6 symbols)
}                                                            (1 symbol)
``` 

.. and re-encode to **14** symbols.  Now, clearly there are some problems with all this:

1.  Clearly, _language matters_:  the Kolmogorov complexity is dependent on the language, and the features the language has built in.  
2.  The exact Kolmogorov complexity is uncomputable anyway.  It's just a fairly abstract idea, so we shouldn't get too hung up on this.  There is no function to be able to say, "what's the Kolmogorov complexity of string X"
3.  What is this new library function we've created?   Is `abcdRepeater` going to be part of _every_ Javascript?  If so, then we've shifted [Codebase Risk](Complexity-Risk) away from ourselves, but we've pushed [Communication Risk](Communication-Risk) and [Dependency Risk](Dependency-Risk) onto every _other_ user of Javascript.
4.  Are there equivalent functions for every single other string?  If so, then compilation is no longer a tractable problem: is `return abcdRepeater(10)` correct code?  Well, now we have an infinite list of different `XXXRepeater` functions to check against to see if it is...  So, what we _lose_ in [Kolmogorov Complexity](Complexity-Risk) we gain in [Big-O Complexity](Complexity-Risk).  

## Are Libraries a Free Lunch?

[npmjs](http://npmjs.com) currently boasts of having over 650,000 different libraries, so although we're unlikely to find an `abcdRepeater` function this suggests that we can "win" against Kolmogorov complexity by using them.  But actually, this is really a problem with the metric itself.  

In reality, using libraries allows us a "Kolmogorov tradeoff": our [Codebase Risk](Complexity-Risk) for other kinds of risk instead.

To be fair to Andrey Kolmogorov, who first published on the subject in 1963, reusable libraries were not really a thing back then, or was the Internet, where I can quickly search for a library that serves my purposes.  And sadly, since he died in 1987, he missed out on seeing the concept of "web services" (dependencies served via the Internet).  

For example, there's a service called [Fill Murray](http://www.fillmurray.com) where  can ask for random, sized images of Bill Murray (to use as placeholders for web design purposes, obviously).  

Today, choosing libraries looks like a "bounded rationality"-type process:

> "Bounded rationality is the idea that when individuals make decisions, their rationality is limited by the tractability of the decision problem, the cognitive limitations of their minds, and the time available to make the decision. " - [Bounded Rationality, _Wikipedia_](https://en.wikipedia.org/wiki/Bounded_rationality)

We're going to dig down into some of the risks associated with this, in order to build a model of what this decision making process should involve.

## Types Of Dependency Risk

So, let's look at the different kinds of **Dependency Risk** we meet.  Luckily, we've actually already come across most of this stuff before: there's a lot of overlap between the risks due to dependencies, and the risks we've already seen.   It looks something like this:

![Venn Dependency Risk](images/venn_dependency_risk.jpg)



### Communication Risk

 - The concept that there is a module **D** which solves my problem isn't something I'd even considered.    
 - I'd like to have a dependency on some module **D**, but I don't even know what to search for.  
 - I'd like to have a dependency on some module **D**, but there are multiple candidates for this dependency, and I don't know the "best" one.
 - Or, I know **D**, but I can't figure out how to solve my problem in it.
 - Or, given that I've chosen **D**, I now need to persuade my team that **D** is the correct solution...
 - ... and then they also need to understand **D** to do their job too.
 
(But:  is understanding **D** more trouble than understanding <yourcode>?)  

I didn't even know I was missing Redux until I'd heard of it.

### Reliability Risk

 - If a component **A** uses component **B**, unless there is some extra redundancy around **B**, then **A** _can't be more reliable than **B**. 
 - Further, you can't always be sure that a dependency now will always have the same guarantees in the future:  what if the ownership changes, or the licensing costs change?  Or security fixes don't get applied?  Or some other package becomes better than the one you use?    (Future Reliability Risk)
 - Are there bugs in **B** that are going to prevent it working correclty in all circumstances?
 
(This might sound unlikely, but I've made several career decisions off the back of this)

Dependency and reliability

Pinto
https://en.wikipedia.org/wiki/Reliability_engineering

FECMA FEMA https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis

Diagram of a distributed software system - where can failures hide?

SPOFs.

### Scheduling Risk

 - If a component **A** _depends_ on **B** for some kind of processing, you can't really complete **A** before writing **B**.   This makes _scheduling_ the project harder.  Sure, you can knock out some interfaces, but these are likely to be "leaky abstractions" [Schedule Risk](Schedule-Risk)
 -  3rd parties / outsourcing
 
 - this is even true if you are writing the dependencies yourself.
 
### Dead-End Risk

 - When you choose a new component, **D** to depend on, you can't be certain that it's going to work out in your favour.  There's [Dead End Risk](Complexity Risk] that you've chosen the wrong thing.   I don't know whether a library is actually going to reduce my [Codebase Risk](Complexity-Risk) or make it worse. 
 
 - Or they produce a new version which is incompatible with your old version, forcing you to upgrade?  (libraries, webservices)
 
 - Dependency Change - REST endpoints, etc.   Semantic versioning .  Hickey


### Complexity Risk

These stem from  
 
 - Jar hell:  are you bringing in more stuff than is helping you?   Are you really overall decreasing complexity on the project or making it worse?  [Versioning Risk](
 (testing jars vs runtime jars.  how integrated is the jar in question?  Is it everywhere, or is it behind an interface?
 
 - Shipped size complexity - Spring.  Sometimes, you just end up with a ton of jars, even when they don't collide on version numbers.

 - Big O Complexity Again (Complexity-Risk)


Example

In a project at work, coming across use of Hazlecast to cache the session IDs.   But, the app is only used once every month, and session IDs can be obtained in milliseconds.   Why cache them?  By doing this, you have introduced extra dependency risk, cache invalidation risks, networking risks, synchronisation risks and so on, for actually no benefit at all.  Unless, it’s CV building.  


Sometimes, the amount of code and complexity _goes up_:  Spring Templates example:  really hard to debug, more code.  But, better?  No chance of injection attacks.



## Choosing And Using A Library

-- we don't use bounded rationality.


how to choose libraries

-- the dependency you already have (e.g. spring)

## Choosing Libraries






