![Draft](images/state/draft.png)

[Dependency Risk](Dependency-Risk) is the risk you take on whenever you have a dependency on something (or someone) else.   One simple example could be that the software service you write might depend on a server to run on.  If the server goes down, the service goes down too.  In turn, the server depends on electricity from a supplier, as well as a network connection from a provider.  If either of these dependencies aren't met, the service is out of commission.

Dependencies can be on _events_, _people_, _teams_, _processes_, _software_, _services_, _money_: pretty much _any resource_.  Dependencies add risk to any project because the reliability of the project itself is now a function involving the reliability of the dependency.  

In order to avoid repetition, and also to break down this large topic, we're going to look at this over 6 sections:   

 - In this first section will look at dependencies _in general_, and apply our existing risk categorizations to understand [Dependency Risk](Dependency-Risk).
 - Next, we'll look at [Scarcity Risk](Scarcity-Risk), because time and money are scarce resources in every project.
 - We'll cover [Deadline Risk](Deadline-Risk), and discuss the purpose of Events and Deadlines, and how they enable us to co-ordinate around dependency use.
 - Then, we'll move on to look specifically at [Software Dependency Risk](Software-Dependency-Risk), covering using libraries, software services and building on top of the work of others.
 - After, we'll take a look at [Process Risk](Process-Risk), which is still [Dependency Risk](Dependency-Risk), but we'll be considering more organisational factors and how bureaucracy comes into the picture.
 - Next, we'll take a closer look at [Boundary Risk](Boundary-Risk) and [Dead-End Risk](Complexity-Risk#dead-end-risk).  These are the risks you face in choosing the wrong things to depend on.
 - Finally, we'll wrap up this analysis with a look at some of the specific problems around working with other people or businesses in [Agency Risk](Agency-Risk).
  
## Why Have Dependencies?

Luckily for us, the things we depend on in life are, for the most part, abundant:  water to drink, air to breathe, light, heat and most of the time, food for energy.  

This isn't even lucky though: life has adapted to build dependencies on things that it can _rely_ on.  

Although life exists at the bottom of the ocean around [hydrothermal vents](https://en.wikipedia.org/wiki/Hydrothermal_vent), it is a very different kind of life to us, and has a different set of dependencies given it's circumstances. 

This tells us a lot about [Dependency Risk](Dependency-Risk) right here:

 - On the one hand, depending on something else is very often helpful, and quite often essential.  (For example, all animals that _move_ seem to depend on oxygen).
 - However, as soon as you have dependencies, you need to take into account of their _reliability_. (Living near a river or stream gives you access to fresh water, for example).
 - Successful organisms _adapt_ to the dependencies available to them (like the thermal vent creatures).
 - There is likely to be _competition_ for a dependency when it is scarce (think of droughts and famine).

So, dependencies are a trade-off.  They give with one hand and take with the other.  Our modern lives are full of dependency (just think of the chains of dependency needed for putting a packet of biscuits on a supermarket shelf, for example), but we accept this extra complexity because it makes life _easier_.  

tbd.  diagram, mitigating feature risk with a dependency?


## Simple Made Easy

In Rich Hickey's talk, [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy) he discusses the difference between _simple_ software systems and _easy_ (to use) ones, heavily stressing the virtues of simple over easy.  It's an incredible talk and well worth watching.  

But.  Living systems are not simple.  Not anymore.  They evolved in the direction of increasing complexity because life was _easier_ that way.  In the "simpler" direction, life is first _harder_ and then _impossible_, and then an evolutionary dead-end.

Depending on things makes _your job easier_.  It's just [division of labour](https://en.wikipedia.org/wiki/Division_of_labour) and dependency hierarchies, as we saw in [Hierarchies and Modularisation](Complexity-Risk#Hierarchies-and-Modularisation).

Our economic system and our software systems exhibit the same tendency-towards-complexity.  For example, the television in my house now is _vastly more complicated_ than the one in my home when I was a child.  But, it contains much more functionality and consumes much less power and space.  

## Reliability Risk

![Reliability Risk](images/generated/reliability-risk.png)

[Deadline Risk](Scarcity-Risk#Deadline-Risk) is really a kind of reliability issue: if you can understand which parties are unreliable, you have a much better handle on your [Deadline Risk](Scarcity-Risk#Deadline-Risk). 

Luckily, there is quite a lot of existing science around reliability.  For example:
  
 - If a component **A** depends on component **B**, unless there is some extra redundancy around **B**, then **A** _can't_ be more reliable than **B**.
 - Is **A** or **B** a [Single Point Of Failure](https://en.wikipedia.org/wiki/Single_point_of_failure) in a system?
 - Are there bugs in **B** that are going to prevent it working correctly in all circumstances?

This kind of stuff is encapsulated in the science of [Reliability Engineering](https://en.wikipedia.org/wiki/Reliability_engineering).   For example, [Failure mode and effects analysis (FEMA)](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis):

> "...was one of the first highly structured, systematic techniques for failure analysis. It was developed by reliability engineers in the late 1950s to study problems that might arise from malfunctions of military systems. " - [FEMA, _Wikipedia_](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis)

This was applied on NASA missions, and then more recently in the 1970's to car design following the [Ford Pinto exploding car](https://en.wikipedia.org/wiki/Ford_Pinto#Design_flaws_and_ensuing_lawsuits) affair.



## Communication Risk

![Communication Risk](images/generated/communication-risk.png)

We've already looked at communication risk in a lot of depth, and we're going to go deeper still in [Software Dependency Risk](Software-Dependency-Risk), but let's look at some general issues around communicating dependencies.  In the [Communication Risk](Communication-Risk) section we looked at [Marketing Communications](Communication-Risk#Marketing-Communications) and talked about the levels of awareness that you could have with dependencies.  i.e.

 - The concept that there is such a thing as **D** which solves my problem isn't something I'd even considered.    
 - I'd like to use something like **D**, but how do I find it?  
 - There are multiple implementations of **D**, which is the best one for the task?
 - I know **D**, but I can't figure out how to solve my problem in it.
 
Let's apply this to our Bus scenario:

 - Am I aware that there is public transport in my area?
 - How do I find out about the different options?
 - How do I choose between buses, taxis, cars etc.
 - How do I understand the timetable, and apply it to my problem?
 
### Silo Mentality
 
Finding out about bus schedules is easy.  But in a large company, [Communication Risk](Communication-Risk) and especially [Invisibility Risk](Communication-Risk#invisibility-risk) are huge problems.  This tends to get called "[Silo Mentality](https://en.wikipedia.org/wiki/Information_silo#Silo_mentality)", that is, ignoring what else is going on in other divisions of the company or ["not invented here"](https://en.wikipedia.org/wiki/Not_invented_here) syndrome:

> "In management the term silo mentality often refers to information silos in organisations. Silo mentality is caused by divergent goals of different organisational units." - [Silo Mentality, _Wikipedia_](https://en.wikipedia.org/wiki/Information_silo#Silo_mentality)

Ironically, _more communication_ might not be the answer - if channels are provided to discover functionality in other teams you can still run into [Trust Risk](Communication-Risk#trust--belief-risk) (why should I believe in the quality of this dependency?)  Or [Channel Risk](Communication-Risk#channel-risk) in terms of too low a signal-to-noise ratio, or desperate self-promotion.

Silo Mentality is exacerbated by the problems you would face in _budgeting_ if suddenly all the divisions in an organisation started providing dependencies for each other.  This starts to require a change to organisational structure towards being a set of individual businesses marketing services to one another, rather than a division-based one.  We'll look more closely at these kind of organisational issues in the [Coordination Risk](Coordination-Risk) section. 

## Complexity Risk

Dependencies are usually a mitigation for [Complexity Risk](Complexity-Risk), and we'll investigate that in much more detail in [Software Dependency Risk](Software-Dependency-Risk).  The reason for this is that a dependency gives you an [abstraction](Glossary#abstraction): you no longer need to know _how_ to do something, (that's the job of the dependency), you just need to interact with the dependency properly to get the job done.  Buses are _perfect_ for people who can't drive, after all.

But this means that all of the issues of abstractions that we covered in [Communication Risk](Communication-Risk) apply:

 - There is [Invisibility Risk](Communication-Risk#invisibility-risk) because you probably don't have a full view of what the dependency is doing.  Nowadays, bus stops have a digital "arrivals" board which gives you details of when the bus will arrive, and shops publish their opening hours online.  But, abstraction always means the loss of some detail.
 - There is [Misinterpretation Risk](Communication-Risk#misinterpretation-risk), because often the dependency might mistake your instructions.  This is endemic in software, where it's nearly impossible to describe exactly what you want up-front.
 
## Fit Risk

Sometimes, the bus will take you to lots of in-between places you _didn't_ want to go.   This is [Fit Risk](Feature-Risk#feature-fit-risk) and we saw this already in the section on [Feature Risk](Feature-Risk).  There, we considered two problems:

 - The feature (or now, dependency) doesn't provide all the functionality you need.  This was [Fit Risk](Feature-Risk#feature-fit-risk).  An example might be the supermarket not stocking everything you wanted.
 - The feature / dependency provides far too much, and you have to accept more complexity than you need.  This was [Conceptual Integrity Risk](Feature-Risk#conceptual-integrity-risk).  An example of this might be the supermarket being _too big_, and you spend a lot longer navigating it than you wanted to.
 
![Feature Fit:  A Two-Dimensional Problem (at least)](images/kite9/dependency-risk-fit.png)

## Dead-End Risk and Boundary Risk

When you choose something to depend on, you can't be certain that it's going to work out in your favour.  Sometimes, the path from your starting point to your goal on the [Risk Landscape](Risk-Landscape) will take you to dead ends:  places where the only way towards your destination is to lose something, and do it again another way.  This is [Dead End Risk](Complexity-Risk#Dead-End-Risk), which we looked at before. 

[Boundary Risk](Boundary-Risk) is another feature of the [Risk Landscape](Risk-Landscape):  when you make a decision to use one dependency over another, you are picking a path on the risk landscape that _precludes_ other choices.  After all, there's not really much cost in a [Dead End](Complexity-Risk#Dead-End-Risk) if you've not had to follow a path to get to it.  

We're also going to look at [Boundary Risk](Boundary-Risk) in more detail later, but I want to introduce it here. Here are some examples:
 
- If I choose to program some software in Java, I will find it hard to integrate libraries from other languages.  The dependencies available to Java software are different to those in Javascript, or C#.  Having gone down a Java route, there are _higher risks_ associated with choosing incompatible technologies.  Yes, I can pick dependencies that use C# (still), but I am now facing greater complexity risk than if I'd just chosen to do everything in C# in the first place.
- If I choose one database over another, I am _limited to the features of that database_.  This is not the same as a dead-end:  I can probably build what I want to build, but the solution will be "bounded" by the dependency choices I make.    One of the reasons we have standards like [Java Database Connectivity (JDBC)](https://en.wikipedia.org/wiki/Java_Database_Connectivity) is to mitigate [Dead End Risk](Complexity-Risk#dead-end-risk) around databases, so that we can move to a different database later.
- If I choose to buy a bus ticket, I've made a decision not to travel by train, even though later on it might turn out that the train was a better option.  Buying the bus ticket is [Boundary Risk](Boundary-Risk):  I may be able to get a refund, but having chosen the dependency I've set down a path on the risk landscape.

## Managing Dependency Risk

Arguably, managing [Dependency Risk](Dependency-Risk) is _what Project Managers do_.  Their job is to meet the [Goal](Glossary#goal-in-mind) by organising the available dependencies into some kind of useful order.  

There are _some_ tools for managing dependency risk:  [Gantt Charts](https://en.wikipedia.org/wiki/Gantt_chart) for example, arrange work according to the capacity of the resources (i.e. dependencies) available, but also the _dependencies between the tasks_.   If task **B** requires the outputs of task **A**, then clearly task **A** comes first and task **B** starts after it finishes.  We'll look at this more in [Process Risk](Process-Risk). 

We'll look in more detail at project management in the _practices_ part, later.   But now let's get into the specifics with [Scarcity Risk](Scarcity-Risk).



