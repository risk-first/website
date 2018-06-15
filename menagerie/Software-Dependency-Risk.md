![Under Construction](images/uc.png)

In this section, we're going to look specifically at _Software_ dependencies, although many of the concerns we'll raise here apply equally to all the other types of dependency we outlined in [Dependency Risk](Dependency-Risk). 


## Kolmogorov Complexity: How To Win

In the earlier section on [Codebase Risk](Complexity-Risk) we tackled [Kolmogorov Complexity], and the idea that your codebase had some kind of minimal level of complexity based on the output it was trying to create.  This is a neat idea, but in a way, we cheated.  Let's look at how.

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
4.  Are there equivalent functions for every single other string?  If so, then compilation is no longer a tractable problem: is `return abcdRepeater(10)` correct code?  Well, now we have an infinite list of different `XXXRepeater` functions to check against to see if it is...  So, what we _lose_ in [Kolmogorov Complexity](Complexity-Risk) we gain in [Big-O Complexity](Complexity-Risk).  tbd.  something fishy here. 
5.  Language design, then, is about expediency.  After you have passed the relatively low bar of providing [Turing Completeness], the key is to provide _useful_ features that enable problems to be solved, without over-burdening the user with features they _don't_ need.   (This is [Fit Risk] again.)

## Types Of Dependencies

The way to win, then, is to allow a language to be extensible as-needed with features written by third parties.  By supplying mechanisms for extension a language can provide insurances against the [Boundary Risk] of adopting it.  Although there are many ways of allowing such extension, we're going to consider 3 basic types of dependencies in this section:  tbd.
 - **Our own**: write some code ourselves to meet the dependency.
 - **Libraries**:  importing code from the Internet, and using it in our project.  Often, libraries are Open Source (this is what we'll consider here).
 - **Services**: calling a service on the Internet, (probably via `http`)  This is often known as [SaaS, or Software as a Service].
 
All 3 approaches involve a different risk-profile.  Let's look at each in turn, from the perspective of which risks get mitigated, and which risks are accentuated.  

### Code Your Own

Initially, writing our own code was the only game in town:  when I started programming, you had a user guide, BASIC and that was pretty much it.  Tool support was very thin-on-the-ground.  Programs and libraries could be distributed as code snippets _in magazines_ which could be transcribed and run, and added to your program.  This spirit lives on somewhat in StackOverflow and JSFiddle, where you are expected to "adopt" others' code into your own project.  

Even now, there's always the opportunity cost of depending on our own code, which may well be more appropriate and expedient for whatever is required.  

Diagram:  Feature risk being mitigated by complexity Risk.  

### Library Code

Using library code offers a [Schedule Risk](Schedule-Risk) shortcut:  Consider [npmjs](http://npmjs.com), which is the most popular package manager for the Javascript ecosystem.  It currently boasts of having over 650,000 different libraries, so although we're unlikely to find an `abcdRepeater` function this suggests that we can "win" against Kolmogorov complexity by using them.  But actually, this is really a problem with the metric itself.  

In reality, using libraries allows us a "Kolmogorov tradeoff": our [Codebase Risk](Complexity-Risk) for other kinds of risk instead.
tbd.  diagram of how this works out: feature risk being mitigated, but [Protocol Complexity Risk], [Fit Risk], [Dead End/Boundary Risk]


Today, choosing libraries looks like a "bounded rationality"-type process:

> "Bounded rationality is the idea that when individuals make decisions, their rationality is limited by the tractability of the decision problem, the cognitive limitations of their minds, and the time available to make the decision. " - [Bounded Rationality, _Wikipedia_](https://en.wikipedia.org/wiki/Bounded_rationality)

We're going to dig down into some of the risks associated with this, in order to build a model of what this decision making process should involve.





### Software as a Service (SaaS)

SaaS is now a very convenient way to provide _commercial_ software.   Popular examples of SaaS might be [SalesForce], or [GMail].  Both of which follow a [Freemium] model, where the basic service is provided free, but upgrading to a paid account gives extra benefits.  By providing the software on their own servers, the commercial organisation has a defence against _piracy_, as well as being able to control the complexity of the support environment.

The trade-off of SaaS looks a lot like library code:  

tbd.  diagram of how this works out: [feature risk], [communication risk] being mitigated, but [Protocol Complexity Risk], [Fit Risk], [Dead End/Boundary Risk], [Costs?], [Red Queen Risk].






To be fair to Andrey Kolmogorov, who first published on the subject in 1963, reusable libraries were not really a thing back then, or was the Internet, where I can quickly search for a library that serves my purposes.  And sadly, since he died in 1987, he missed out on seeing the concept of "web services" (dependencies served via the Internet).  

For example, there's a service called [Fill Murray](http://www.fillmurray.com) where  can ask for random, sized images of Bill Murray (to use as placeholders for web design purposes, obviously).  



## Choosing And Using A Dependency



m&t risk, obvs.  but
1.  Is it alive?
2.  Is it open source?
3.  Well trafficked
4.  Namespace
5.  Look at the source
6.  Alternatives available?
7.  Traction (vs. expected traction)

I: https://www.software.ac.uk/resources/guides/defending-your-code-against-dependency-problems
II: https://stackoverflow.com/questions/2960371/how-to-choose-an-open-source-library
III: https://www.forbes.com/sites/forbestechcouncil/2017/07/20/open-source-to-use-or-not-to-use-and-how-to-choose/2/#39e67e445a8c

Trying things out usually has a low Dead end Risk vs coding yourself, and you can usually try several

## Commercial Dependencies (SaaS)

I: https://www.zdnet.com/article/saas-checklist-nine-factors-to-consider-when-selecting-a-vendor/



## BAggage



Example

In a project at work, coming across use of Hazlecast to cache the session IDs.   But, the app is only used once every month, and session IDs can be obtained in milliseconds.   Why cache them?  By doing this, you have introduced extra dependency risk, cache invalidation risks, networking risks, synchronisation risks and so on, for actually no benefit at all.  Unless, it’s CV building.  


Sometimes, the amount of code and complexity _goes up_:  Spring Templates example:  really hard to debug, more code.  But, better?  No chance of injection attacks.


- number of dependencies it has



### Complexity Risk

I don't know whether a library is actually going to reduce my [Codebase Risk](Complexity-Risk) or make it worse. 

Although 

These stem from  
 
 - Jar hell:  are you bringing in more stuff than is helping you?   Are you really overall decreasing complexity on the project or making it worse?  [Versioning Risk](
 (testing jars vs runtime jars.  how integrated is the jar in question?  Is it everywhere, or is it behind an interface?
 
 - Shipped size complexity - Spring.  Sometimes, you just end up with a ton of jars, even when they don't collide on version numbers. (Kolmogorov Complexity?)

 - Big O Complexity Again (Complexity-Risk)


## VErsoining



Write as little code as possible.

-- we don't use bounded rationality.


how to choose libraries

-- the dependency you already have (e.g. spring)

## Choosing Libraries

- 3rd party contractors

dependencies between teams
 
dependencies between modules
Dependency Mismatch

interface complexity vs implementation complexity. (hazlecast example)


What Do I want to say?


- Kolmogorov complexity:  how to win.
- Types of Dependency:
  - Write it yourself    (reduced fit risk, increased schedule risk, more chance of bugs)
  - Libraries  (communication risks of all kinds, improved schedule risk)
  - Services  (networking risks (more communication risks), 
- Risk Profile
  - Payment, Licensing, extension.
  - The trade-off. ( Show as a diagram)
     - Types of risks
- Choosing Software Dependencies (and why)
  (find some useful articles on this and summarize them, explain why they mitigate the risks)
- Evolution
- Baggage
- Versioning
  


.. on to boundary risk
 
  
  

![Dependency](images/dependency_depends.png)

If a component **A** of our project _depends_ on **B** for some kind of processing, you might not be able to complete **A** before writing **B**.   This makes _scheduling_ the project harder, and if component **A** is a risky part of the project, then the chances are you'll want to mitigate risk there first.  There are a couple of ways to do this:

- **Standards**:  If component **B** is a database, a queue, mail gateway or something else with a standard interface, then you're in luck.   Write **A** to those standards, and find a cheap, simple implementation to test with.  This gives you time to sort out exactly what implementation of **B** you're going for.  This is not a great long-term solution, because obviously, you're not using the _real_ dependency- you might get surprised when the behaviour of the real component is subtly different.  But it can reduce [Schedule Risk](Schedule-Risk) in the short-term.
- **Coding To Interfaces**:  If standards aren't an option, but the surface area of **B** that **A** uses is quite small and obvious, you can write a small interface for it, and work behind that, using a [Mock](https://en.wikipedia.org/wiki/Mock_object) for **B** while you're waiting for finished component.  Write the interface to cover only what **A** _needs_, rather than everything that **B** _does_ in order to minimize the risk of [Leaky Abstractions](https://en.wikipedia.org/wiki/Leaky_abstraction).
- **Do The Homework**:  Accept that **B** is going to bite you and try to make the decision now.  Pick the best 3rd-party component you can find (preferably on a trial basis), whilst being aware that you might get it wrong and need to change later.   Write [Tests](Testing) to alleviate [Communication Risk](Communication-Risk) now, and then to use to evaluate alternatives if need be.

You can mitigate this somewhat by searching resources online like [StackOverflow]() to find other people using the dependency in the same way as you, or alternatively by  [Prototyping](Prototyping) hard in order to uncover as much of the [Hidden Risk](Risk) as possible.

Second, you can't always be sure that a dependency now will always have the same guarantees in the future: 
- **Ownership changes** (e.g. [Oracle](http://oracle.com) buys [Sun](http://sun.com) who own [Java](https://en.wikipedia.org/wiki/Java_%28programming_language%29) for example)
- **Licensing changes**.  (e.g. [Oracle](http://oracle.com) buys **Tangosol** who make [Coherence](https://en.wikipedia.org/wiki/Oracle_Coherence) for example)
- Security updates not applied.
- **Better alternatives become available**:  As a real example of this, I began a project in 2016 using [Apache Solr]().  However, in 2018, I would probably use [ElasticSearch](https://en.wikipedia.org/wiki/Elasticsearch).  In the past, I've built websites using [Drupal]() and then later converted them to use [Wordpress]().

Some predictors:
 

 
 - Or they produce a new version which is incompatible with your old version, forcing you to upgrade?  (libraries, webservices)
 
 - Dependency Change - REST endpoints, etc.   Semantic versioning .  Hickey



