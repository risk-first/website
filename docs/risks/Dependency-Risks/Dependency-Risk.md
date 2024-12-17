---
title: Dependency Risks
description: Risk faced by depending on something else,  e.g. an event, process, person, piece of software or an organisation. 

featured: 
  class: c
  element: '<risk class="dependency" />'
sidebar_position: 6
tags:
 - Dependency Risk
 - Fit Risk
 - Reliability Risk
 - Invisibility Risk
 - Risks
tweet: yes
slug: /risks/Dependency-Risks
part_of: Operational Risk
---

# Dependency Risks

[Dependency Risk](/tags/Dependency-Risk) is the risk you take on whenever you have a dependency on something (or someone) else.   <!-- tweet-end -->

One simple example could be that the software service you write might depend on hardware to run on:  if the server goes down, the service goes down too.  In turn, the server depends on electricity from a supplier, as well as a network connection from a provider.  If either of these dependencies aren't met, the service is out of commission.

Dependencies can be on _events_, _people_, _teams_, _work_, _processes_, _software_, _services_, _money_ and pretty much _any resource_, and while every project will need some of these, they also _add risk_ to any project because the reliability of the project itself is now a function involving the reliability of the dependency.  

In order to avoid repetition, and also to break down this large topic, we're going to look at this over 7 sections:   

 - This first section will look at dependencies _in general_, and some of the variations of [Dependency Risk](/tags/Dependency-Risk).
 - Next, we'll look at [Scarcity Risk](/tags/Scarcity-Risk), because time, money and staff are scarce resources in every project.
 - We'll cover [Deadline Risk](/tags/Deadline-Risk), and discuss the purpose of Events and Deadlines, and how they enable us to coordinate around dependency use.
 - Then, we'll move on to look specifically at [Software Dependency Risk](/tags/Software-Dependency-Risk), covering using libraries, software services and building on top of the work of others.
 - Then, we'll take a look at [Process Risk](/tags/Process-Risk), which is still [Dependency Risk](/tags/Dependency-Risk), but we'll be considering more organisational factors and how bureaucracy comes into the picture.
 - After that, we'll take a closer look at [Boundary Risk](/tags/Boundary-Risk) and [Dead-End Risk](/tags/Dead-End-Risk).  These are the risks you face in making choices about what to depend on.
 - Finally, we'll wrap up this analysis with a look at some of the specific problems around depending on other people or businesses in [Agency Risk](/tags/Agency-Risk).
  
## Why Have Dependencies?

Luckily for us, the things we depend on in life are, for the most part, abundant:  water to drink, air to breathe, light, heat and most of the time, food for energy.  

This isn't even lucky though: life has adapted to build dependencies on things that it can _rely_ on.  

Although life exists at the bottom of the ocean around [hydrothermal vents](https://en.wikipedia.org/wiki/Hydrothermal_vent), it is a very different kind of life to ours and has a different set of dependencies given its circumstances. 

This tells us a lot about [Dependency Risk](/tags/Dependency-Risk) right here:

 - On the one hand, _depending on something_ is very often helpful, and quite often essential.  (For example, all life seem to depend on water).
 - Successful organisms _adapt_ to the dependencies available to them (like the thermal vent creatures).
 - However, as soon as you have dependencies, you need to take into account their _reliability_. (Living near a river or stream gives you access to fresh water, for example).
So, dependencies are a trade-off.  They give with one hand and take with the other.  Our modern lives are full of dependency (just think of the chains of dependency needed for putting a packet of biscuits on a supermarket shelf, for example), but we accept this risk because it makes life _easier_. 
 - There is likely to be _competition_ for a dependency when it is scarce (think of droughts and famine).


Let's look at four types of risk that apply to every dependency:  Fit, Reliability, Invisibility and Complexity.

## Fit Risk

In order to illustrate some of the different [Dependency Risks](/tags/Dependency-Risk), let's introduce a running example:  trying to get to work each day.  There are probably a few alternative ways to make your journey each day, such as _by car_, _walking_ or _by bus_.  These are all alternative dependencies but give you the same _feature_: they'll get you there.

Normally, we'll use the same dependency each day.  This speaks to the fact that each of these approaches has different [Feature Fit Risk](/tags/Feature-Fit-Risk).   Perhaps you choose going by bus over going by car because of the risk that owning the car is expensive, or that you might not be able to find somewhere to park it.

![Two-Dimensions of Feature Fit for the bus-ride](/img/generated/risks/dependency/dependency-risk-fit.svg)

But there are a couple of problems with buses you don't have with your own car, as shown in the above diagram. A bus might take you to lots of in-between places you _didn't_ want to go, which is [Conceptual Integrity Risk](/tags/Conceptual-Integrity-Risk) and we saw this already in the section on [Feature Risk](/tags/Feature-Risk).  Also, it might not go at the time you want it to, which is [Feature-Fit-Risk](/tags/Feature-Fit-Risk).  

What this shows us is that [Fit Risks](/tags/Feature-Fit-Risk) are as much a problem for the suppliers of the dependency (the people running the bus service) as they are for the people (like you or I) _using_ the dependency.


## Invisibility Risk

Dependencies (like the bus) make life simpler for you by taking on complexity for you.

In software, dependencies are a way to manage [Complexity Risk](/tags/Complexity-Risk).  The reason for this is that a dependency gives you an [abstraction](/tags/Abstraction): you no longer need to know _how_ to do something, (that's the job of the dependency), you just need to interact with the dependency properly to get the job done.  Buses are _perfect_ for people who can't drive, after all.

![Dependencies help with complexity risk, but come with their own attendant risks](/img/generated/risks/dependency/dependency-risk.svg)

But (as shown in the above diagram) this means that all of the issues of abstractions that we covered in [Communication Risk](/tags/Communication-Risk) apply.  For example, there is [Invisibility Risk](/tags/Invisibility-Risk) because you probably don't have a full view of what the dependency is doing.  Nowadays, bus stops have a digital "arrivals" board which gives you details of when the bus will arrive, and shops publish their opening hours online.  But, abstraction always means the loss of detail (the bus might be two minutes away but could already be full).

## Dependencies And Complexity

In Rich Hickey's talk, [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy) he discusses the difference between _simple_ software systems and _easy_ (to use) ones, heavily stressing the virtues of simple over easy.  It's an incredible talk and well worth watching.  

But: living systems are not simple.  Not anymore.  They evolved in the direction of increasing complexity because life was _easier_ that way.  In the "simpler" direction, life is first _harder_ and then _impossible_, and then an evolutionary dead-end.  

Depending on things makes _your job easier_.  But the [Complexity Risk](/tags/Complexity-Risk) hasn't gone away: it's just _transferred_ to the dependency.  It's just [division of labour](https://en.wikipedia.org/wiki/Division_of_labour) and dependency hierarchies, as we saw in [Complexity Risk](/risks/Complexity-Risk#hierarchies-and-modularisation).

Our economic system and our software systems exhibit the same tendency-towards-complexity.  For example, the television in my house now is _vastly more complicated_ than the one in my home when I was a child.  But, it contains much more functionality and consumes much less power and space.  

## Managing Dependency Risk

Arguably, managing [Dependency Risk](/tags/Dependency-Risk) is _what Project Managers do_.  Their job is to meet the project's [Goal](/tags/Goal) by organising the available dependencies into some kind of useful order.  

There are some tools for managing dependency risk:  [Gantt Charts](https://en.wikipedia.org/wiki/Gantt_chart) for example, arrange work according to the capacity of the resources (i.e. dependencies) available, but also the _dependencies between the tasks_.   If task **B** requires the outputs of task **A**, then clearly task **A** comes first and task **B** starts after it finishes.  We'll look at this more in [Process Risk](/tags/Process-Risk). 

We'll look in more detail at project management in Part 3, later.   But now, let's get into specifics with [Scarcity Risk](/tags/Scarcity-Risk).

## Types Of Dependency Risk

<TagList tag="Dependency Risk" filter="risks/Dependency-Risks" /> 

