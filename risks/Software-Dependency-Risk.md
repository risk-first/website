---
title: Software Dependency Risk
description: Specific dependency risks due to relying on software.
url: https://riskfirst.org/risks/Software-Dependency-Risk

featured: 
  class: bg2
  element: '<risk class="software-dependency" />'
order: 8
categories:
 - Risks
redirect_from: 
 - /Software-Dependency-Risk
---

# Software Dependency Risk

In this section, we're going to look specifically at _Software_ dependencies, although many of the concerns we'll raise here apply equally to all the other types of dependency we outlined in [Dependency Risk](Dependency-Risk.md). 

## Kolmogorov Complexity: Cheating

In the earlier section on [Complexity Risk](Complexity-Risk.md) we tackled [Kolmogorov Complexity](Complexity-Risk.md#Kolmogorov-Complexity), and the idea that your codebase had some kind of minimal level of complexity based on the output it was trying to create.  This is a neat idea, but in a way, we cheated.  Let's look at how.

We were trying to figure out the shortest (Javascript) program to generate this output:

```
abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd
```

And we came up with this:

```javascript
const ABCD="ABCD";                         (11 symbols)

function out() {                           (7 symbols)
    return ABCD.repeat(10)                 (7 symbols)
}                                          (1 symbol)
```

Which had **26** symbols in it.  

Now, here's the cheat:  the `repeat()` function was built into Javascript in 2015 in [ECMAScript 6.0](http://www.ecma-international.org/ecma-262/6.0/).  If we'd had to program it ourselves, we might have added this:

```javascript
function repeat(s,n) {                     (10 symbols)
    var a=[];                              (7 symbols)
    while(a.length<n){                     (9 symbols)  
        a.push(s)                          (6 symbols)
    }                                      (1 symbol)
    return a.join('');                     (10 symbols)
}                                          (1 symbol)
```
... which would be an extra **44** symbols (in total **70**), and push us completely over the original string encoding of **53** symbols.   So, _encoding language is important_.   

Conversely, if ECMAScript 6.0 had introduced a function called `abcdRepeater(n)` we'd have been able to do this:

```javascript
function out() {                           (7 symbols)
    return abcdRepeater(10)                (6 symbols)
}                                          (1 symbol)
```

.. and re-encode to **14** symbols.  Now, clearly there are some problems with all this:

1.  **Language Matters**:  the Kolmogorov complexity is dependent on the language, and the features the language has built in. <!-- tweet-end --> 
2.  **Exact Kolmogorov complexity is uncomputable anyway:**  Since it's the _theoretical_ minimum program length, it's a fairly abstract idea, so we shouldn't get too hung up on this.  There is no function to be able to say, "What's the Kolmogorov complexity of string X?"
3.  **What is this new library function we've created?**   Is `abcdRepeater` going to be part of _every_ Javascript?  If so, then we've shifted [Codebase Risk](Complexity-Risk.md) away from ourselves, but we've pushed [Communication Risk](Communication-Risk.md) and [Dependency Risk](Dependency-Risk.md) onto every _other_ user of Javascript. (Why these?  Because `abcdRepeater` will be clogging up the JavaScript documentation for everyone, and other people will rely on it to function correctly.)
4.  **Are there equivalent functions for every single other string?**  If so, then compilation is no longer a tractable problem because now we have a massive library of different `XXXRepeater` functions to compile against.   So, what we _lose_ in [Codebase Risk](Complexity-Risk.md#codebase-risk) we gain in [Dependency Risk](Complexity-Risk.md#space-and-time-complexity).
5.  **Language design, then, is about _ergonomics_:** <!-- tweet-end --> After you have passed the relatively low bar of providing [Turing Completeness](https://en.wikipedia.org/wiki/Turing_completeness), the key is to provide _useful_ features that enable problems to be solved, without over-burdening the user with features they _don't_ need.  And in fact, all software is about this.

## Ergonomics Examined

Have a look at some physical tools, like a hammer, or spanner.  To look at them, they are probably _simple_ objects, obvious, strong and dependable.  Their entire behaviour is encapsulated in their form.  Now, if you have a drill or sander to hand, look at the design of this too.  If it's well-designed, then from the outside it is simple, perhaps with only one or two controls.  Inside, it is complex and contains a motor, perhaps a transformer, and is maybe made of a hundred different components.

But outside, the form is simple, and designed for humans to use.   This is _[ergonomics](https://en.wikipedia.org/wiki/Human_factors_and_ergonomics)_:

> "Human factors and ergonomics (commonly referred to as Human Factors), is the application of psychological and physiological principles to the (engineering and) design of products, processes, and systems. The goal of human factors is to reduce human error, increase productivity, and enhance safety and comfort with a specific focus on the interaction between the human and the thing of interest."  - [Human Factors and Ergonomics, _Wikipedia_](https://en.wikipedia.org/wiki/Human_factors_and_ergonomics)

### Protocols and Ergonomics

![Software Dependency Ergonomics:  finding the sweet spot between too many features and too few](/images/generated/risks/software-dependency/ergonomics.png)

The _interface_ of a tool is the part we touch and interact with, via its protocol.  By striving for an ergonomic sweet spot, the protocol reduces [Communication Risk](Communication-Risk.md).  <!-- tweet-end -->  You can see this trade-off in the diagram above.

The interface of a system expands when you ask it to do a wide variety of things. <!-- tweet-end -->  An easy-to-use drill does one thing well: it turns drill-bits at useful levels of torque for drilling holes and sinking screws.  But if you wanted it to also operate as a lathe, a sander or a strimmer (all basically mechanical things going round) you would have to sacrifice the conceptual integrity for a more complex protocol, probably including adapters, extensions, handles and so on.

So, we now have split complexity into two:

 - The inner complexity of the tool (how it works internally, its own [internal complexity](Complexity-Risk.md#Kolmogorov-Complexity)).
 - The complexity of the instructions that we need to write to make the tool work, [the protocol complexity](Communication-Risk.md#protocol-risk), which will be a function of the complexity of the tool itself.
 
![Types of Complexity For a Software Dependency](/images/generated/risks/software-dependency/protocol-complexity.png)

### Software Tools

In the same way as with a hand-tool, the bulk of the complexity of a software tool is hidden behind its interface.<!-- tweet-end -->  But, the more complex the _purpose_ of the tool, the more complex the interface will be.

Software is not constrained by _physical_ ergonomics in the same way as a tool is. <!-- tweet-end --> But ideally, it should have conceptual ergonomics: complexity is hidden away from the user behind the _User Interface_.  This is the familiar concept of [Abstraction](../thinking/Glossary.md#abstraction) we've already looked at.  As we saw in [Communication Risk](Communication-Risk.md#learning-curve-risk), when we use a new protocol, we face [Learning Curve Risk](Communication-Risk.md#learning-curve-risk).  To minimise this, we should apply the [Principal Of Least Astonishment](https://en.wikipedia.org/wiki/Principle_of_least_astonishment) when designing protocols: 

 - **The abstractions should map easily to how the user expects the tool to work.** For example, I _expect_ the trigger on a drill to start the drill turning.  
 - **The abstractions should leverage existing idioms and knowledge.** In a new car I _expect_ to know what the symbols on the dashboard mean because I've driven other cars.
 - **The abstractions provide me with only the functions I need.** Because everything else is confusing and gets in the way.  

## Types Of Software Dependencies

There are lots of ways you can depend on software.  Here though, we're going to focus on just three main types:  

 1. **Code Your Own**: write some code ourselves to meet the dependency.
 2. **Software Libraries**:  importing code from the Internet, and using it in our project.  Often, libraries are Open Source (this is what we'll consider here).
 3. **Software-as-a-Service (SaaS)**: calling a service on the Internet, (probably via `http`)  This is often known as [SaaS, or Software as a Service](https://en.wikipedia.org/wiki/Software_as_a_service).
 
All 3 approaches involve a different risk-profile.  Let's look at each in turn, from the perspective of which risks get mitigated, and which risks are exacerbated. 
 
### 1. Code Your Own

Way before the Internet, this was the only game in town.  Tool support was very thin-on-the-ground.  Algorithms could be distributed as code snippets _in books and magazines_ which could be transcribed and run, and added to your program.  This spirit lives on somewhat in StackOverflow and JSFiddle, where you are expected to "adopt" others' code into your own project. Code-your-own is still the best option if you have highly bespoke requirements, or are dealing with unusual environmental contexts.

One of the hidden risks of embarking on a code-your-own approach is that the features you need are _not_ apparent from the outset.  What might appear to be a trivial implementation of some piece of functionality can often turn into its own industry as more and more hidden [Feature Risk](Feature-Risk.md) is uncovered.  For example, as we discussed in our earlier treatment of [Dead-End Risk](Complexity-Risk.md#dead-end-risk), building log-in screens _seemed like a good idea_.  However, this gets out-of-hand fast when you need:

 - A password reset screen
 - To email the reset links to the user
 - An email verification screen
 - A lost account screen
 - Reminders to complete the sign up process
 - ... and so on.

![Code-Your-Own mitigates immediate feature risk, but at the expense of schedule risk, complexity risk and communication risk.  There is also a hidden risk of features you don't yet know you need.](/images/generated/risks/software-dependency/code-your-own.png) 

### Unwritten Software

Sometimes you will pick up [Dependency Risk](Dependency-Risk.md) from _unwritten software_.  This commonly happens when work is divided amongst team members, or teams.  <!-- tweet-end -->

![Sometimes, a module you're writing will depend on unwritten code](/images/generated/risks/software-dependency/unwritten.png)

If a component **A** of our project _depends_ on **B** for some kind of processing, you might not be able to complete **A** before writing **B**.   This makes _scheduling_ the project harder, and if component **A** is a risky part of the project, then the chances are you'll want to mitigate risk there first.  

But it also hugely increases [Communication Risk](Communication-Risk.md) because now you're being asked to communicate with a dependency that doesn't really exist yet, _let alone_ have any documentation.

There are a couple of ways of doing this:

 - **Standards**:  if component **B** is a database, a queue, mail gateway or something else with a standard interface, then you're in luck.   Write **A** to those standards, and find a cheap, simple implementation to test with.  This gives you time to sort out exactly what implementation of **B** you're going for.  This is not a great long-term solution, because obviously, you're not using the _real_ dependency- you might get surprised when the behaviour of the real component is subtly different.  But it can reduce [Schedule Risk](Scarcity-Risk.md#schedule-risk) in the short-term.

 - **Coding To Interfaces**:  if standards aren't an option, but the surface area of **B** that **A** uses is quite small and obvious, you can write a small interface for it, and work behind that, using a [Mock](https://en.wikipedia.org/wiki/Mock_object) for **B** while you're waiting for finished component.  Write the interface to cover only what **A** _needs_, rather than everything that **B** _does_ in order to minimise the risk of [Leaky Abstractions](https://en.wikipedia.org/wiki/Leaky_abstraction).

![Coding to a standard on an interface breaks the dependency on unwritten software](/images/generated/risks/software-dependency/unwritten-mitigation.png)

### Conway's Law

Due to channel bandwidth limitations, if the dependency is being written by another person, another team or in another country, [Communication Risk](Communication-Risk.md) piles up.<!-- tweet-end -->  When this happens, you will want to minimise the interface complexity _as much as possible_, since the more complex the interface, the worse the [Communication Risk](Communication-Risk.md) will be.  The tendency then is to make the interfaces between teams or people _as simple as possible_, modularising along these organisational boundaries.

In essence, this is Conway's Law:

> "organisations which design systems ... are constrained to produce designs which are copies of the communication structures of these organisations." - [Melvin Conway, _Conway's Law_](https://en.wikipedia.org/wiki/Conway%27s_law)

### 2.  Software Libraries

By choosing a particular software library, we are making a move on the [Risk Landscape](Risk-Landscape.md) in the hope of moving to a place with more favourable risks. <!-- tweet-end --> Typically, using library code offers a [Schedule Risk](Scarcity-Risk.md#schedule-risk) and [Complexity Risk](Complexity-Risk.md) [Silver Bullet](../practices/Silver-Bullets.md) - a high-speed route over the risk landscape to somewhere nearer where we want to be.  But, in return we expect to pick up:

- **[Communication Risk](Communication-Risk.md)**: because we now have to learn how to communicate with this new dependency.
- **[Boundary Risk](Boundary-Risk.md)**: - because now are limited to using the functionality provided by this dependency.  We have chosen it over alternatives and changing to something else would be more work and therefore costly.   

But, it's quite possible that we could wind up in a worse place than we started out, by using a library that's out-of-date, riddled with bugs or badly supported.  i.e. full of new, hidden [Feature Risk](Feature-Risk.md).  

It's _really easy_ to make bad decisions about which tools to use because the tools don't (generally) advertise their deficiencies. <!-- tweet-end --> After all, they don't generally know how _you_ will want to use them.  

### Software Libraries - Attendant Risks

Currently, choosing software dependencies looks like a "bounded rationality"-type process:

> "Bounded rationality is the idea that when individuals make decisions, their rationality is limited by the tractability of the decision problem, the cognitive limitations of their minds, and the time available to make the decision. " - [Bounded Rationality, _Wikipedia_](https://en.wikipedia.org/wiki/Bounded_rationality)

Unfortunately, we know that most decisions _don't_ really get made this way.  We have things like [Confirmation Bias](https://en.wikipedia.org/wiki/Confirmation_bias) (looking for evidence to support a decision you've already made) and [Cognitive Inertia](https://en.wikipedia.org/wiki/Cognitive_inertia) (ignoring evidence that would require you to change your mind) to contend with.   

But, leaving that aside, let's try to build a model of what this decision making process _should_ involve.  Luckily, other authors have already considered the problem of choosing good software libraries, so let's start there.

![Software Library Dependencies, Attendant Risks](/images/generated/risks/software-dependency/software_dependency_table_1_large.png)

In the table above, I am summarising three different sources (linked at the end of the section), which give descriptions of which factors to look for when choosing open-source libraries.  Here are some take-aways:

 - **[Feature Risk](Feature-Risk.md) is a big concern**:   How can you be sure that the project will do what you want it to do ahead of schedule?  Will it contain bugs or missing features?  By looking at factors like _release frequency_ and _size of the community_ you get a good feel for this which is difficult to fake.
 - **[Boundary Risk](Boundary-Risk.md) is also very important**:  You are going to have to _live_ with your choices for the duration of the project, so it's worth spending the effort to either ensure that you're not going to regret the decision, or that you can change direction later.
 - **Third is [Communication Risk](Communication-Risk.md)**:  how well does the project deal with its users?  If a project is "famous", then it has communicated its usefulness to a wide, appreciative audience.  Avoiding [Communication Risk](Communication-Risk.md) is also a good reason to pick _tools you are already familiar with_.
  
![Software Libraries Risk Tradeoff](/images/generated/risks/software-dependency/library.png) 

#### Sources

 - `sd1`: [Defending your code against dependency problems](https://www.software.ac.uk/resources/guides/defending-your-code-against-dependency-problems)
 - `sd2`: [How to choose an open source library](https://stackoverflow.com/questions/2960371/how-to-choose-an-open-source-library)
 - `sd3`: [Open Source - To use or not to use](https://www.forbes.com/sites/forbestechcouncil/2017/07/20/open-source-to-use-or-not-to-use-and-how-to-choose)
    
### Complexity Risk? 
 
One thing that none of the sources in the table consider (at least from the outset) is the [Complexity Risk](Complexity-Risk.md) of using a solution:   
 
 - Does it drag in lots of extra dependencies that seem unnecessary for the job in hand?  If so, you could end up in [Dependency Hell](https://en.wikipedia.org/wiki/Dependency_hell), with multiple, conflicting versions of libraries in the project.
 - Do you already have a dependency providing this functionality?  So many times, I've worked on projects that import a _new_ dependency when some existing (perhaps transitive) dependency has _already brought in the functionality_.  For example, there are plenty of libraries for [JSON](https://en.wikipedia.org/wiki/JSON) marshalling, but if I'm also using a web framework the chances are it already has a dependency on one already.
 - Does it contain lots of functionality that isn’t relevant to the task you want it to accomplish?  e.g. Using Java when a shell script would do (on a non-Java project)
 
Sometimes, the amount of complexity _goes up_ when you use a dependency for _good reason_.  <!-- tweet-end --> For example, in Java you can use [Java Database Connectivity (JDBC)](https://en.wikipedia.org/wiki/Java_Database_Connectivity) to interface with various types of database.  [Spring Framework](https://en.wikipedia.org/wiki/Spring_Framework) (a popular Java library) provides a thing called a `JDBCTemplate`.  This actually makes your code _more_ complex, and can prove very difficult to debug.  However, it prevents some security issues, handles resource disposal and makes database access more efficient.  None of those are essential to interfacing with the database, but not having them is [Operational Risk](Operational-Risk.md) that can bite you later on.   

### 3.  Software-as-a-Service

Businesses opt for Software-as-a-Service (SaaS) because:

- It promises to vastly reduce the [Complexity Risk](Complexity-Risk.md) they face in their organisations. e.g. managing the software or making changes to it.
- Payment is usually based on _usage_, mitigating [Funding Risk](Scarcity-Risk.md#funding-risk).  e.g. Instead of having to pay up-front for a license and hire in-house software administrators, they can leave this function to the experts.
- Potentially, you out-source the [Operational Risk](Operational-Risk.md) to a third party. e.g. ensuring availability, making sure data is secure and so on.

SaaS is now a very convenient way to provide _commercial_ software.   Popular examples of SaaS might be [SalesForce](https://en.wikipedia.org/wiki/Salesforce.com), or [GMail](https://en.wikipedia.org/wiki/Gmail).  Both of which follow the commonly-used [Freemium](https://en.wikipedia.org/wiki/Freemium) model, where the basic service is provided free but upgrading to a paid account gives extra benefits.  

![Software-as-a-Service (SaaS) Attendant Risks](/images/generated/risks/software-dependency/software_dependency_table_2_large.png)

The diagram above summarises the risks raised in some of the available literature (sources below).  Some take-aways:

- Clearly, [Operational Risk](Operational-Risk.md) is now a big concern.  By depending on a third-party organisation you are tying yourself to its success or failure in a much bigger way than just by using a piece of open-source software.   What happens to data security, both in the data centre and over the Internet?  Although you might choose a SaaS solution to mitigate _internal_ [Operational Risk](Operational-Risk.md), you might just be "throwing it over the wall" to a third party, who might do a worse job.
- With [Feature Risk](Feature-Risk.md) you now have to contend with the fact that the software will be upgraded _outside your control_, and you may have limited control over which features get added or changed. 
- [Boundary Risk](Boundary-Risk.md) is also a different proposition: you are tied to the software provider by _a contract_.  If the service changes in the future, or isn't to your liking, you can't simply fork the code (like you could with an open source project).

![Risk Tradeoff From Using Software as a Service (SaaS)](/images/generated/risks/software-dependency/saas.png)

#### Sources

 - `sd4`: [SaaS Checklist - Nine Factors to Consider](https://www.zdnet.com/article/saas-checklist-nine-factors-to-consider-when-selecting-a-vendor)
 - `sd5`: [How to Evaluate SaaS Vendors.](http://sandhill.com/article/how-to-evaluate-saas-vendors-five-key-considerations)

## A Matrix of Options

We've looked at just 3 different ways of providing a software dependency: Code-Your-Own, Libraries and SaaS.<!-- tweet-end -->

But these are not the only ways to do it, and there's clearly no one _right_ way.   Although here we have looked just at "Commercial SaaS" and "Free Open Source", in reality, these are just points in a two-dimensional space involving _Pricing_ and _Hosting_.   

Let's expand this view slightly and look at where different pieces of software sit on these axes:

![Software Dependencies, Pricing, Delivery Matrix Risk Profiles](/images/generated/risks/software-dependency/software_dependency_table_3_sideways.png)

- Where there is value in **the [Network Effect](https://en.wikipedia.org/wiki/Network_effect)** it's often a sign that the software will be free, or open source<!-- tweet-end -->:  programming languages and Linux are the obvious examples of this.  Bugs are easier to find when there are lots of eyes looking, and learning the skill to use the software has less [Boundary Risk](Boundary-Risk.md) if you know you'll be able to use it at any point in the future.
- At the other end of the spectrum, clients will happily pay for software if it clearly **reduces [Operational Risk](Operational-Risk.md)**.  Take [Amazon Web Services (AWS)](https://en.wikipedia.org/wiki/Amazon_Web_Services).  The essential trade here is that you substitute the complexity of hosting and maintaining various pieces of hardware, in exchange for metered payments ([Funding Risk](Scarcity-Risk.md#Funding-Risk) for you).  Since the AWS _interfaces_ are specific to Amazon, there is significant [Boundary Risk](Boundary-Risk.md) in choosing this option.
- In the middle there are lots of **substitute options** and therefore high competition.  Because of this prices are pushed towards zero and therefore often advertising is used to monetise the product.  [Angry Birds](https://en.wikipedia.org/wiki/Angry_Birds) is a classic example:  initially, it had demo and paid versions, however [Rovio](https://en.wikipedia.org/wiki/Rovio_Entertainment) discovered there was much more money to be made through advertising than from the [paid-for app](https://www.deconstructoroffun.com/blog/2017/6/11/how-angry-birds-2-multiplied-quadrupled-revenue-in-a-year).

## Software Dependencies as Features

So far we've looked at different _approaches_ to software dependencies and the risk profiles they present.  But the category is less important than the specifics:  we are choosing _specific tools for specific tasks_.  [Software Dependencies](Software-Dependency-Risk.md) allows us to construct dependency networks to give us all kinds of features and mitigate all kinds of risk.  That is, the features we are looking for in a dependency _are to mitigate some kind of risk_.

For example, I might start using [WhatsApp](https://en.wikipedia.org/wiki/WhatsApp) because I want to be able to send my friends photos and text messages.  However, it's likely that those same features allow us to mitigate [Coordination Risk](Coordination-Risk.md) when we're next trying to meet up. 

Let's look at some more examples:

|Risk                                                 |Software Mitigating That Risk                                             |
|-----------------------------------------------------|------------------------------------------------------------------------- |
|[Coordination Risk](Coordination-Risk.md)               |Calendar tools,  Bug Tracking, Distributed Databases                      |
|[Schedule-Risk](Scarcity-Risk.md#schedule-risk)         |Planning Software, Project Management Software                            |
|[Communication-Risk](Communication-Risk.md)             |Email, Chat tools, CRM tools like SalesForce, Forums, Twitter, Protocols  |
|[Process-Risk](Process-Risk.md)                         |Reporting tools, online forms, process tracking tools                     |
|[Agency-Risk](Agency-Risk.md)                           |Auditing tools, transaction logs, Time-Sheet software, HR Software        |  
|[Operational-Risk](Operational-Risk.md)                 |Support tools like ZenDesk, Grafana, InfluxDB, Geneos, Security Tools     |
|[Feature-Risk](Feature-Risk.md)                         |Every piece of software you use!                                          |
  
## Choice

Choosing dependencies can be extremely difficult.  As we discussed above, the usefulness of any tool depends on its fit for purpose, its _ergonomics within a given context_.  It's all too easy to pick a good tool for the wrong job:  

> "I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail." - [Abraham Maslow, _Toward a Psychology of Being_](https://en.wiktionary.org/wiki/if_all_you_have_is_a_hammer,_everything_looks_like_a_nail)

Having chosen a dependency, whether or not you end up in a more favourable position risk-wise is going to depend heavily on the quality of the execution and the skill of the implementor.  With software dependencies we often have to live with the decisions we make for a long time: _choosing_ the software dependency is far easier than _changing it later_.

Let's take a closer look at this problem in the section on [Boundary Risk](Boundary-Risk.md).  But first, lets looks at [processes](Process-Risk.md).
