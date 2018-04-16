**Dependency Risk** is the risk you take on whenever you have a dependency on something else.   One simple example could be that the software service you write might depend on a server to run on.  If the server goes down, the service goes down too.  In turn, the server depends on electricity from a supplier, as well as a network connection from a provider.  If either of these dependencies aren't met, the service is out of commission.

Dependencies can be on _software_, _services_, _people_, _teams_, _events_ and so on.   Dependencies add risk to any project because the reliability of the project itself is now a function involving the reliability of the dependency.  

## Events 

The simplest type of **Dependency Risk** is around events.   For example, "I can't start shopping until the supermarket opens at 9am", or "I must catch my bus to work at 7:30am".  In the first example, you can't _start_ something until a particular event happens.  In the latter example, you must _be ready_ for an event at a particular time.

When we have a dependency on an event, we depend on the reliability of that event occurring when it says it will occur.  We pick up [Schedule Risk](Schedule-Risk) when it doesn't.  

Both of these types of risk can be mitigated with _slack_.  That is, ensuring that the exact time of the event isn't critical to your plans:   Don't build into your plans a _need_ to start shopping at 9am.  Arrive at the bus-stop _early_ in order to mitigate your own [Schedule Risk](Schedule-Risk). 

[Schedule Risk](Schedule-Risk) becomes very hard to manage when you have to coordinate actions  with lots of tightly-constrained events.  Rehearsal?

Sometimes, events are a mitigation for [Coordination Risk](Coordination-Risk).   Having a fixed time for doing something mitigates [Coordination Risk](Coordination-Risk) by turning it into [Schedule Risk](Schedule-Risk).  Agreeing a date for a product launch, for example, allows lots of teams to coordinate their activities.  


## People and Teams

Often, events are outside of our control, and we just have to plan around them.  But usually events occur at certain times because people have chosen them to, in order to manage [Coordination Risk](Coordination-Risk).




## Dependencies On Libraries

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

tbd.  something fishy here.


## Types Of Dependencies

We're going to consider 3 basic types of dependencies in this section:  
 - **Our own**: write some code ourselves to meet the dependency.
 - **Libraries**:  importing code from the internet, and using it in our project
 - **Services**: calling a service on the internet, (probably via `http`)
 
All 3 approaches involve a different risk-profile.  Initially, writing our own code was the only game in town:  when I started programming with a Commodore 64, you had a user guide, BASIC and that was pretty much it.  Tool support was very thin-on-the-ground.  Even now, there's always the opportunity cost of depending on our own code, which may well be more appropriate and expedient for whatever is required.  

Using library code offers a [Schedule Risk](Schedule-Risk) shortcut:  Consider [npmjs](http://npmjs.com), which is the most popular package manager for the Javascript ecosystem.  It currently boasts of having over 650,000 different libraries, so although we're unlikely to find an `abcdRepeater` function this suggests that we can "win" against Kolmogorov complexity by using them.  But actually, this is really a problem with the metric itself.  

In reality, using libraries allows us a "Kolmogorov tradeoff": our [Codebase Risk](Complexity-Risk) for other kinds of risk instead.

To be fair to Andrey Kolmogorov, who first published on the subject in 1963, reusable libraries were not really a thing back then, or was the Internet, where I can quickly search for a library that serves my purposes.  And sadly, since he died in 1987, he missed out on seeing the concept of "web services" (dependencies served via the Internet).  

For example, there's a service called [Fill Murray](http://www.fillmurray.com) where  can ask for random, sized images of Bill Murray (to use as placeholders for web design purposes, obviously).  

Today, choosing libraries looks like a "bounded rationality"-type process:

> "Bounded rationality is the idea that when individuals make decisions, their rationality is limited by the tractability of the decision problem, the cognitive limitations of their minds, and the time available to make the decision. " - [Bounded Rationality, _Wikipedia_](https://en.wikipedia.org/wiki/Bounded_rationality)

We're going to dig down into some of the risks associated with this, in order to build a model of what this decision making process should involve.

## Types Of Dependency Risk

So, let's look at the different kinds of **Dependency Risk** we meet.  Luckily, we've actually already come across most of this stuff before: there's a lot of overlap between the risks due to dependencies, and the risks we've already seen.   It looks something like this:

![Venn Dependency Risk](images/venn_dependency_risk.JPG)

So, we're going to focus on [Dependency Risk] from 5 different perspectives:

 - **Reliability Risk**
 - [Communication Risk](Communication-Risk)
 - [Scheduling Risk](Scheduling-Risk)
 - [Complexity Risk](Complexity-Risk)
 - [Dead-End Risk](Complexity-Risk)
 
**Reliability Risk** is the new one here, so let's look at that first.

### Reliability Risk

 - If a component **A** uses component **B**, unless there is some extra redundancy around **B**, then **A** _can't be more reliable than **B**. 
 
 - Are there bugs in **B** that are going to prevent it working correclty in all circumstances?
 
(This might sound unlikely, but I've made several career decisions off the back of this)

Dependency and reliability

Pinto
https://en.wikipedia.org/wiki/Reliability_engineering

FECMA FEMA https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis

Diagram of a distributed software system - where can failures hide?

SPOFs.


### Communication Risk

We've already looked at communication risk... tbd.

 - The concept that there is a module **D** which solves my problem isn't something I'd even considered.    
 - I'd like to have a dependency on some module **D**, but I don't even know what to search for.  
 - I'd like to have a dependency on some module **D**, but there are multiple candidates for this dependency, and I don't know the "best" one.
 - Or, I know **D**, but I can't figure out how to solve my problem in it.
 - Or, given that I've chosen **D**, I now need to persuade my team that **D** is the correct solution...
 - ... and then they also need to understand **D** to do their job too.
 
(But:  is understanding **D** more trouble than understanding <yourcode>?)  

I didn't even know I was missing Redux until I'd heard of it.

### Scheduling Risk

![Dependency](images/dependency_depends.png)

If a component **A** of our project _depends_ on **B** for some kind of processing, you can't really complete **A** before writing **B**.   This makes _scheduling_ the project harder, and if component **A** is a risky part of the project, then the chances are you'll want to mitigate risk there first.  There are a couple of ways to do this:

- **Standards**:  If component **B** is a database, a queue, mail gateway or something else with a standard interface, then you're in luck.   Write **A** to those standards, and find a cheap, simple implementation to test with.  This gives you time to sort out exactly what implementation of **B** you're going for.  This is not a great long-term solution, because obviously, you're not using the _real_ dependency- you might get surprised when the behaviour of the real component is subtly different.  But it can reduce [Schedule Risk](Schedule-Risk) in the short-term.
- **Coding To Interfaces**:  If standards aren't an option, but the surface area of **B** that **A** uses is quite small and obvious, you can write a small interface for it, and work behind that, using a [Mock](https://en.wikipedia.org/wiki/Mock_object) for **B** while you're waiting for finished component.  Write the interface to cover only what **A** _needs_, rather than everything that **B** _does_ in order to minimize the risk of [Leaky Abstractions](https://en.wikipedia.org/wiki/Leaky_abstraction).
- **Do The Homework**:  Accept that **B** is going to bite you and try to make the decision now.  Pick the best 3rd-party component you can find (preferably on a trial basis), whilst being aware that you might get it wrong and need to change later.   Write [Tests](Testing) to alleviate [Communication Risk](Communication-Risk) now, and then to use to evaluate alternatives if need be.
 
### Dead-End Risk

First, when you choose a new component to depend on, you can't be certain that it's going to work out in your favour.  There's [Dead End Risk](Complexity Risk] that you've chosen the wrong thing.  You can mitigate this somewhat by searching resources online like [StackOverflow]() to find other people using the dependency in the same way as you, or alternatively by  [Prototyping](Prototyping) hard in order to uncover as much of the [Hidden Risk](Risk) as possible.

Second, you can't always be sure that a dependency now will always have the same guarantees in the future: 
- **Ownership changes** (e.g. [Oracle](http://oracle.com) buys [Sun](http://sun.com) who own [Java](https://en.wikipedia.org/wiki/Java_%28programming_language%29) for example)
- **Licensing changes**.  (e.g. [Oracle](http://oracle.com) buys **Tangosol** who make [Coherence](https://en.wikipedia.org/wiki/Oracle_Coherence) for example)
- Security updates not applied.
- **Better alternatives become available**:  As a real example of this, I began a project in 2016 using [Apache Solr]().  However, in 2018, I would probably use [ElasticSearch](https://en.wikipedia.org/wiki/Elasticsearch).  In the past, I've built websites using [Drupal]() and then later converted them to use [Wordpress]().

Some predictors:
 

 
 - Or they produce a new version which is incompatible with your old version, forcing you to upgrade?  (libraries, webservices)
 
 - Dependency Change - REST endpoints, etc.   Semantic versioning .  Hickey


### Complexity Risk

I don't know whether a library is actually going to reduce my [Codebase Risk](Complexity-Risk) or make it worse. 

Although 

These stem from  
 
 - Jar hell:  are you bringing in more stuff than is helping you?   Are you really overall decreasing complexity on the project or making it worse?  [Versioning Risk](
 (testing jars vs runtime jars.  how integrated is the jar in question?  Is it everywhere, or is it behind an interface?
 
 - Shipped size complexity - Spring.  Sometimes, you just end up with a ton of jars, even when they don't collide on version numbers. (Kolmogorov Complexity?)

 - Big O Complexity Again (Complexity-Risk)


Example

In a project at work, coming across use of Hazlecast to cache the session IDs.   But, the app is only used once every month, and session IDs can be obtained in milliseconds.   Why cache them?  By doing this, you have introduced extra dependency risk, cache invalidation risks, networking risks, synchronisation risks and so on, for actually no benefit at all.  Unless, it’s CV building.  


Sometimes, the amount of code and complexity _goes up_:  Spring Templates example:  really hard to debug, more code.  But, better?  No chance of injection attacks.


## Choosing And Using A Library

-- we don't use bounded rationality.


how to choose libraries

-- the dependency you already have (e.g. spring)

## Choosing Libraries

- 3rd party contractors

dependencies between teams
 
dependencies between modules

gantt charts



Silo thinking 

