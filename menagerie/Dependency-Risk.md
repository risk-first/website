![Draft](images/state/for-review.png)

[Dependency Risk](Dependency-Risk) is the risk you take on whenever you have a dependency on something (or someone) else.   

One simple example could be that the software service you write might depend on hardware to run on:  If the server goes down, the service goes down too.  In turn, the server depends on electricity from a supplier, as well as a network connection from a provider.  If either of these dependencies aren't met, the service is out of commission.

Dependencies can be on _events_, _people_, _teams_, _processes_, _software_, _services_, _money_ and pretty much _any resource_, and while every project will need some of those, they also _add risk_ to any project because the reliability of the project itself is now a function involving the reliability of the dependency.  

In order to avoid repetition, and also to break down this large topic, we're going to look at this over 7 sections:   

 - In this first section will look at dependencies _in general_, and some of the variations of [Dependency Risk](Dependency-Risk).
 - Next, we'll look at [Scarcity Risk](Scarcity-Risk), because time and money are scarce resources in every project.
 - We'll cover [Deadline Risk](Deadline-Risk), and discuss the purpose of Events and Deadlines, and how they enable us to coordinate around dependency use.
 - Then, we'll move on to look specifically at [Software Dependency Risk](Software-Dependency-Risk), covering using libraries, software services and building on top of the work of others.
 - After, we'll take a look at [Process Risk](Process-Risk), which is still [Dependency Risk](Dependency-Risk), but we'll be considering more organisational factors and how bureaucracy comes into the picture.
 - Next, we'll take a closer look at [Boundary Risk](Boundary-Risk) and [Dead-End Risk](Complexity-Risk#dead-end-risk).  These are the risks you face in making choices about what to depend on.
 - Finally, we'll wrap up this analysis with a look at some of the specific problems around depending on other people or businesses in [Agency Risk](Agency-Risk).
  
## Why Have Dependencies?

Luckily for us, the things we depend on in life are, for the most part, abundant:  water to drink, air to breathe, light, heat and most of the time, food for energy.  

This isn't even lucky though: life has adapted to build dependencies on things that it can _rely_ on.  

Although life exists at the bottom of the ocean around [hydrothermal vents](https://en.wikipedia.org/wiki/Hydrothermal_vent), it is a very different kind of life to us, and has a different set of dependencies given it's circumstances. 

This tells us a lot about [Dependency Risk](Dependency-Risk) right here:

 - On the one hand, depending on something else is very often helpful, and quite often essential.  (For example, all life seem to depend on water).
 - However, as soon as you have dependencies, you need to take into account of their _reliability_. (Living near a river or stream gives you access to fresh water, for example).
 - Successful organisms _adapt_ to the dependencies available to them (like the thermal vent creatures).
 - There is likely to be _competition_ for a dependency when it is scarce (think of droughts and famine).

So, dependencies are a trade-off.  They give with one hand and take with the other.  Our modern lives are full of dependency (just think of the chains of dependency needed for putting a packet of biscuits on a supermarket shelf, for example), but we accept this risk because it makes life _easier_. 

## Dependency Fit Risk

In order to illustrate some of the different [Dependency Risks](Dependency-Risk), let's introduce a running example:  trying to get to work each day.  There are probably a few alternative ways to make your journey each day, such as _by car_, _walking_ or _by bus_.  These are all alternative dependencies but give you the same _feature_: they'll get you there.

Normally, we'll use the same dependency each day.  This speaks to the fact that each of these approaches has different [Fit Risk](Feature-Risk#fit-risk).   Perhaps you choose going by bus over going by car because of the risk that owning the car is expensive, or that you might not be able to find somewhere to park it.

But the bus will take you to lots of in-between places you _didn't_ want to go.   This is also [Fit Risk](Feature-Risk#feature-fit-risk) and we saw this already in the section on [Feature Risk](Feature-Risk).  There, we considered two problems:

 - The feature (or now, dependency) doesn't provide all the functionality you need.  This was [Fit Risk](Feature-Risk#feature-fit-risk).  An example might be your supermarket not stocking everything you want to buy.
 - The feature / dependency provides far too much, and you have to accept more complexity than you need.  This was [Conceptual Integrity Risk](Feature-Risk#conceptual-integrity-risk).  An example of this might be the supermarket being _too big_, and you spend a lot longer navigating it than you wanted to.
 
![Feature Fit:  A Two-Dimensional Problem (at least)](images/generated/risks/dependency/dependency-risk-fit.png)

## Reliability Risk

This points at the problem that when we use an external dependency, we are at the mercy of its reliability.   

> "... Reliability describes the ability of a system or component to function under stated conditions for a specified period of time." - [Reliability Engineering, _Wikipedia_](https://en.m.wikipedia.org/wiki/Reliability_engineering)

![Reliability Risk](images/generated/reliability-risk.png) 

Unreliability manifests itself when a dependency fails you under certain sets of circumstances.  It's easy to think about reliability for something like a bus:  sometimes, it's late due to weather, or cancelled due to driver sickness, or the route changes unexpectedly due to road works.  

In software, it's no different:  Unreliability is the flip-side of [Feature Implementation Risk](Feature-risk#implementation-risk).  It's caused in the gap between the real behaviour of the software and the expectations for it.

There is an upper bound on the reliability of the software you write, and this is based on the dependencies you use and (in turn) the reliability of those dependencies:
  
 - If a component **A** depends on component **B**, unless there is some extra redundancy around **B**, then **A** _can't_ be more reliable than **B**.
 - Is **A** or **B** a [Single Point Of Failure](https://en.wikipedia.org/wiki/Single_point_of_failure) in a system?
 - Are there bugs in **B** that are going to prevent it working correctly in all circumstances?

This kind of stuff is encapsulated in the science of [Reliability Engineering](https://en.wikipedia.org/wiki/Reliability_engineering).   For example, [Failure mode and effects analysis (FEMA)](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis):

> "...was one of the first highly structured, systematic techniques for failure analysis. It was developed by reliability engineers in the late 1950s to study problems that might arise from malfunctions of military systems. " - [FEMA, _Wikipedia_](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis)

This was applied on NASA missions, and then in the 1970's to car design following the [Ford Pinto exploding car](https://en.wikipedia.org/wiki/Ford_Pinto#Design_flaws_and_ensuing_lawsuits) affair.

## Proxies For Reliability

Because of [Trust Risk](Communication-Risk#trust--belief-risk) and [Invisibility Risk](Communication-Risk#invisibility-risk), we cannot always establish reliability for a dependency, and this is a huge area of concern in software when choosing dependencies, as we will see in the section on [Software Dependency Risk](Software-Dependency-Risk).

In the [Communication Risk](Communication-Risk) section we looked at [Marketing Communications](Communication-Risk#Marketing-Communications) and talked about the levels of awareness that you could have with a dependency. 

Let's apply this to our Bus scenario:

 - Am I aware that there is public transport in my area?
 - How do I find out about the different options?
 - How do I choose between buses, taxis, cars etc.
 - How do I understand the timetable, and apply it to my problem?
 - Is it a reliable enough solution?
 
### Silo Mentality
 
Finding out about bus schedules is easy.  But in a large company, [Communication Risk](Communication-Risk) and especially [Invisibility Risk](Communication-Risk#invisibility-risk) are huge problems.  This tends to get called "[Silo Mentality](https://en.wikipedia.org/wiki/Information_silo#Silo_mentality)", that is, ignoring what else is going on in other divisions of the company or ["not invented here"](https://en.wikipedia.org/wiki/Not_invented_here) syndrome:

> "In management the term silo mentality often refers to information silos in organisations. Silo mentality is caused by divergent goals of different organisational units." - [Silo Mentality, _Wikipedia_](https://en.wikipedia.org/wiki/Information_silo#Silo_mentality)

Ironically, _more communication_ might not be the answer, because even with more communication you still cannot determine reliability.  If channels are provided to discover functionality in other teams you can still run into [Trust Risk](Communication-Risk#trust--belief-risk) (why should I believe in the quality of this dependency?) or [Agency Risk](Agency-Risk) (unwarranted self-promotion).  

## Complexity Risk

While dependencies (like the bus, or the supermarket) make life simpler for you, they do this by taking on complexity for you.

In our software, Dependencies are a way to manage [Complexity Risk](Complexity-Risk), and we'll investigate that in much more detail in [Software Dependency Risk](Software-Dependency-Risk).  The reason for this is that a dependency gives you an [abstraction](Glossary#abstraction): you no longer need to know _how_ to do something, (that's the job of the dependency), you just need to interact with the dependency properly to get the job done.  Buses are _perfect_ for people who can't drive, after all.

But this means that all of the issues of abstractions that we covered in [Communication Risk](Communication-Risk) apply.  For example, there is [Invisibility Risk](Communication-Risk#invisibility-risk) because you probably don't have a full view of what the dependency is doing.  Nowadays, bus stops have a digital "arrivals" board which gives you details of when the bus will arrive, and shops publish their opening hours online.  But, abstraction always means the loss of some detail - the bus might be two minutes away but could already be full.

## Dependencies Are Complex

In Rich Hickey's talk, [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy) he discusses the difference between _simple_ software systems and _easy_ (to use) ones, heavily stressing the virtues of simple over easy.  It's an incredible talk and well worth watching.  

But: living systems are not simple.  Not anymore.  They evolved in the direction of increasing complexity because life was _easier_ that way.  In the "simpler" direction, life is first _harder_ and then _impossible_, and then an evolutionary dead-end.  

Depending on things makes _your job easier_.  It's just [division of labour](https://en.wikipedia.org/wiki/Division_of_labour) and dependency hierarchies, as we saw in [Complexity Risk](Complexity-Risk#Hierarchies-and-Modularisation).

Our economic system and our software systems exhibit the same tendency-towards-complexity.  For example, the television in my house now is _vastly more complicated_ than the one in my home when I was a child.  But, it contains much more functionality and consumes much less power and space.  

## Managing Dependency Risk

Arguably, managing [Dependency Risk](Dependency-Risk) is _what Project Managers do_.  Their job is to meet the [Goal](Glossary#goal-in-mind) by organising the available dependencies into some kind of useful order.  

There are _some_ tools for managing dependency risk:  [Gantt Charts](https://en.wikipedia.org/wiki/Gantt_chart) for example, arrange work according to the capacity of the resources (i.e. dependencies) available, but also the _dependencies between the tasks_.   If task **B** requires the outputs of task **A**, then clearly task **A** comes first and task **B** starts after it finishes.  We'll look at this more in [Process Risk](Process-Risk). 

We'll look in more detail at project management in the _practices_ part, later.   But now let's get into the specifics with [Scarcity Risk](Scarcity-Risk).



