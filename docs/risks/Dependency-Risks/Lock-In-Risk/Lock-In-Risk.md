---
title: Lock-In Risk
description: Risks due to the commitments we make around dependencies, and the limitations they place on our ability to change.

slug: /risks/Lock-In-Risk
featured: 
  class: c
  element: '<risk class="lock-in" />'
sidebar_position: 6
tags:
 - Risks
 - Lock-In Risk
tweet: yes
part_of: Dependency Risks
---

<RiskIntro fm={frontMatter} />

![Lock-In Risk is due to Dependency Risk and commitment](/img/generated/risks/posters/lock-in-risk.svg)

As shown in the above diagram, [Lock-In Risk](/tags/Lock-In-Risk) is the risk we face due to _commitments_ around dependencies and the limitations they place on our ability to change.  To illustrate, lets consider two examples:
 
- Although I eat cereals for breakfast, I don't have [Lock-In Risk](/tags/Lock-In-Risk) on them.  If the supermarket runs out of cereals when I go, I can just buy some other food and eat that.
- However the hot water system in my house uses gas.  If that's not available I can't just switch to using oil or solar without cost.  There is [Lock-In Risk](/tags/Lock-In-Risk), but it's low because the supply of gas is plentiful and seems like it will stay that way.

When we have to make _commitments_ around dependencies our future paths are constrained by the decisions we make. In terms of the [Risk Landscape](/risks/Risk-Landscape), [Lock-In Risk](/tags/Lock-In-Risk) is a _boundary_, _wall_ or other kind of obstacle in your way to making a move you want to make.  This changes the nature of the [Risk Landscape](/tags/Risk-Landscape), and introduces a maze-like component to it. 

## Worked Example

In software development, although we might face [Lock-In Risk](/tags/Lock-In-Risk) choosing staff or offices, most of the everyday dependency commitments we have to make are around _abstractions_. 

![Our System receives data from the `input`, translates it and sends it to the `output`.  But which dependency should we use for the translation, if any?](/img/generated/risks/boundary/choices.svg)

Let's take a look at a hypothetical system structure, in the diagram above.  In this design, we are transforming data from the `input` to the `output`.  But how should we do it?

 - We could transform via library 'a', using the [Protocols](/tags/Protocol-Risk) of 'a', and having a dependency on 'a' (the top dotted path).
 - We could use library 'b', using the [Protocols](/tags/Protocol-Risk) of 'b', and having a dependency on 'b' (the bottom dotted path).
 - We could use neither, and avoid the dependency, but potentially pick up lots more [Complexity Risk](/tags/Complexity-Risk) and [Schedule Risk](/tags/Schedule-Risk) because we have to code our own alternative to 'a' and 'b' (the dotted route through the middle).

The choice of approach presents us with [Lock-In Risk](/tags/Lock-In-Risk) options because we don't know that we'll necessarily be successful with any of these options until we _go down the path_ of committing to one:

 - Maybe 'a' has some undocumented drawbacks that are going to hold us up.
 - Maybe 'b' works on some streaming API basis, that is incompatible with the input protocol.
 - Maybe 'a' runs on Windows, whereas our code runs on Linux
 
... and so on.

After having chosen either 'a', 'b' or even our own approach, we have significant sunk costs and are committed to the implementation - changing to another option is going to be expensive and means we have to re-trace our steps.

This is a toy example, but in real life this dilemma occurs when we choose between database vendors, cloud hosting platforms, operating systems, software libraries etc. and is a big factor in our analysis of [Software Dependency Risks](/tags/Software-Dependency-Risk).

## Everyday Lock-In Risks

Although ecosystems are one very pernicious type of boundary in software development, it's worth pointing out that [Lock-In Risk](/tags/Lock-In-Risk) occurs all the time.  Let's look at some ways:

- **Configuration**.  When software has to be deployed onto a server, there has to be configuration (usually on the command line, or via configuration property files) in order to bridge the boundary between the _environment it's running in_ and the _software being run_.  Often this is setting up file locations, security keys and passwords, and telling it where to find other files and services.  

- **Integration Testing**.  Building a unit test is easy.  You are generally testing some code you have written, aided with a testing framework.  Your code and the framework are both written in the same language, which means low [Lock-In Risk](/tags/Lock-In-Risk).  But to _integration test_ you need to step outside this boundary and so it becomes much harder.  This is true whether you are integrating with other systems (providing or supplying them with data) or parts of your own system (say testing the client-side and server parts together).  

- **User Interface Testing**.  The interface with the user is a complex, under-specified risky [protocol](/tags/Protocol-Risk).  Although tools exist to automate UI testing (such as [Selenium](https://en.wikipedia.org/wiki/Selenium_(software)), these rarely satisfactorily mitigate this [protocol risk](/tags/Protocol-Risk):  can you be sure that the screen hasn't got strange glitches, that the mouse moves correctly, that the proportions on the screen are correct on all browsers?  

- **Jobs**.  When you pick a new technology to learn and add to your CV, it's worth keeping in mind how useful this will be to you in the future.   It's career-limiting to be stuck in a dying ecosystem with the need to retrain.

- **Teams**.  if you're asked to build software, do you use the tools familiar to your team, or choose unfamiliar but perhaps more appropriate tools?   If the latter, are you creating [Lock-In Risk](/tags/Lock-In-Risk) by using tools that the team aren't familiar with?

- **Organisations**. Getting teams or departments to work with each other often involves breaking down [Lock-In Risk](/tags/Lock-In-Risk).  Often the departments use different tool-sets or processes, and have different goals making the translation from one department to another harder (the so-called [Silo](https://en.wikipedia.org/wiki/Information_silo) effect). 



## Factors Affecting Lock-In Risk
 
### 1. Sunk Costs

The Sunk Cost of the [Learning Curve](/tags/Learning-Curve-Risk) we've overcome to integrate the dependency, which may fail to live up to expectations (_cf._ [Feature Fit Risks](/tags/Feature-Fit-Risk)).   We can avoid accreting this by choosing the _simplest_ and _fewest_ dependencies for any task, and trying to [Meet Reality](/thinking/Meeting-Reality) quickly.

**Threat**: Although you can anticipate the level of commitment, choosing a dependency in advance is a [bet](/tags/Bet) where you have limited information.

### 2. Life Expectancy

Softare libraries and products come and go.  A choice that was popular when it was made may be superseded in the future by something better.  (_cf._ [Market Risk](/tags/Market-Risk)).  This may not be a problem until you try to renew a support contract, or try to do an operating system update. Although no-one can predict how long a technology will last, [The Lindy Effect](https://en.wikipedia.org/wiki/Lindy_effect) suggests that _future life expectancy is proportional to current age_.  So, you might expect a technology that has been around for ten years to be around for a further ten.

**Threat**: Committing to new technologies when they have an unproven track record.

### 3. Extent Of Lock-In

[The level of Lock In](Ecosystems), where the cost of switching to a new dependency in the future is some function of the level of commitment to the current dependency.  As an example, consider the level of commitment you have to your mother tongue.  If you have spent your entire life committed to learning and communicating in English, there is a massive level of lock-in.  Overcoming this to become fluent in Chinese may be an overwhelming task.

**Threat**: Pervasive commitments (e.g. around language choices) have much higher levels of Lock-In Risk.

### 4. Future-Proofing

Will the dependency satisfy your expanding requirements going forward? It's often dangerous to make commitments based on the status quo when a project is evolving.

**Threat**: Making a commitment may limit _flexibility_ for changing needs in the future.

### 5. Ownership Changes

**Example:** Microsoft buys [GitHub](https://en.wikipedia.org/wiki/GitHub).  What will happen to the ecosystem around GitHub now?  Is it improved or worsened by new ownership?

**Threat**: Making commitments to dependencies where the ownership of the dependency can change increases risk.

### 6. Licensing Changes

**Example:**  Earlier in my career, [Oracle](https://oracle.com) bought Tangosol, a small consultancy that made [Coherence](https://en.wikipedia.org/wiki/Oracle_Coherence).   Having done this, they increase the licensing costs of Coherence to huge levels, milking the [Cash Cow](https://en.wikipedia.org/wiki/Cash_cow) of the installed user-base, but ensuring no-one else is likely to commit to it in the future.

**Threat**: The owner of the dependency has the opportunity to unilaterally change the licensing conditions for your dependency.  (Compare to [Open Source](../Software-Dependency-Risk)).
  
:::tip Anecdote Corner

The IT industry is replete with examples of where Lock-In Risk is used as a key business strategy.  In the 1980's and 1990's Microsoft were able to use proprietary file formats as a way to lock-in users of the Microsoft Windows and Office ecosystems, nearly bankrupting Apple in the process.  

However in 2007/2008 Apple were able to use the same strategy to build a locked-in ecosystem around the iPhone, relegating Blackberry, Nokia and Microsoft's offerings to being minor, incompatible players and leaving them locked out of the ecosystem.

Amazon Web Services (AWS), started in 2006, is another example of a proprietary, locked-in ecosystem, with Microsoft and Google providing their own alternatives. It's easy to see the same strategic patterns being repeated again in different sections of the IT industry (Desktop, Mobile, Cloud).     

It's worth pointing out Google's strategy here of creating (arguably) _open source_ alternatives for all of the above.  On the desktop, Chrome, on mobile, Android and in the Cloud, Kubernetes.  All of these are aimed at attracting users and developers interested in building out ecosystems which minimise lock-in.  Google's [strategy](https://opensource.google/documentation/reference/why/) here is that sacrificing some potential lock-in leads to a bigger overall ecosystem as a result.     