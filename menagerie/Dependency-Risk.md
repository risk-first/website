![Draft](images/state/draft.png)

[Dependency Risk](Dependency-Risk) is the risk you take on whenever you have a dependency on something (or someone) else.   One simple example could be that the software service you write might depend on a server to run on.  If the server goes down, the service goes down too.  In turn, the server depends on electricity from a supplier, as well as a network connection from a provider.  If either of these dependencies aren't met, the service is out of commission.

Dependencies can be on _events_, _people_, _teams_, _processes_, _software_, _services_, _money_: pretty much _any resource_.  Dependencies add risk to any project because the reliability of the project itself is now a function involving the reliability of the dependency.  

In order to avoid repetition, and also to break down this large topic, we're going to look at this over 6 sections:   
 - In this first section will look at dependencies _in general_, and specifically on _events_, and some of the variations on [Dependency Risk](Dependency-Risk).
 - Next, we'll look at [Schedule Risk](Schedule-Risk), because time and money are key dependencies in any project.
 - Then, we'll move on to look specifically at [Software Dependency Risk](Software-Dependency-Risk), covering using libraries, software services and building on top of the work of others.
 - Next, we'll take a closer look at [Boundary Risk](Boundary-Risk) and [Dead-End Risk](Boundary-Risk#dead-end-risk).  These are the risks you face in choosing the wrong things to depend on.  
 - After, we'll take a look at [Process Risk](Process-Risk), which is still [Dependency Risk](Dependency-Risk), but we'll be considering more organisational factors and how bureaucracy comes into the picture.  
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

## Simple Made Easy

In Rich Hickey's talk, [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy) he discusses the difference between _simple_ software systems and _easy_ (to use) ones, heavily stressing the virtues of simple over easy.  It's an incredible talk and well worth watching.  

But.  Living systems are not simple.  Not anymore.  They evolved in the direction of increasing complexity because life was _easier_ that way.  In the "simpler" direction, life is first _harder_ and then _impossible_, and then an evolutionary dead-end.

Depending on things makes _your job easier_.  It's just [division of labour](https://en.wikipedia.org/wiki/Division_of_labour) and dependency hiearchies, as we saw in [Hierarchies and Modularization](Complexity-Risk#Hierarchies-and-Modularization).

Our economic system and our software systems exhibit the same tendency-towards-complexity.  For example, the television in my house now is _vastly more complicated_ than the one in my home when I was a child.  But, it contains much more functionality and consumes much less power and space.  

## Event Dependencies

Let's start with dependencies on _events_.  

We rely on events occuring all the time in our lives, and so this is a good place to start in our analysis of [Dependency Risk](Dependency-Risk) generally.   And, as we will see, all the risks that apply to events pretty much apply to all the other kinds of dependencies we'll look at.    

Arguably, the event dependencies are the simplest to express, too: usually, a _time_ and a _place_.   For example:
- "I can't start shopping until the supermarket opens at 9am", or
- "I must catch my bus to work at 7:30am".  

In the first example, you can't _start_ something until a particular event happens.  In the latter example, you must _be ready_ for an event at a particular time.

### Events Mitigate Risk...

Having an event occur in a fixed time and place is [mitigating risk](Glossary#Mitigated-Risk):

- By taking the bus, we are mitigating our own [Schedule Risk](Schedule-Risk):  we're (hopefully) reducing the amount of time we're going to spend on the activity of getting to work.  
- Events are a mitigation for [Coordination Risk](Coordination-Risk): A bus needn't necessarily _have_ a fixed timetable: it could wait for each passenger until they turned up, and then go.  (A bit like ride-sharing works).  This would be a total disaster from a [Coordination Risk](Coordination-Risk) perspective, as one person could cause everyone else to be really really late.  Having a fixed time for doing something mitigates [Coordination Risk](Coordination-Risk) by turning it into [Schedule Risk](Schedule-Risk).  Agreeing a date for a product launch, for example, allows lots of teams to coordinate their activities.
- It's not entirely necessary to even take the bus:  you could walk, or go by another form of transport.  But, effectively, this just swaps one dependency for another:  if you walk, this might well take longer and use more energy, so you're just picking up [Schedule Risk]() in another way.  If you drive, you have a dependency on your car instead.  So, there is often an _opportunity cost_ with dependencies.  Using the bus might be a cheap way to travel.  You're therefore imposing less [Dependency Risk]() on a different scarce resource - your money.

### But, Events Lead To Attendant Risk

By _deciding to use the bus_ we've [Taken Action](Glossary#Take-Action).  

![Action Diagram showing risks mitigated by having an _event_](images/kite9/dependency-risk-event.png)

However, as we saw in [A Simple Scenario](A-Simple-Scenario), this means we pick up [Attendant Risks](Glossary#attendant-risk).  

So, we're going to look at [Dependency Risk](Dependency-Risk) for our toy events (bus, supermarket) from 7 different perspectives, many of which we've already touched on in the other sections.

 - [Schedule Risk](Schedule-Risk)
 - [Reliability Risk](Operational-Risk#reliability-risk)
 - [Scarcity Risk](Dependency-Risk#scarcity-risk)
 - [Communication Risk](Communication-Risk)
 - [Complexity Risk](Complexity-Risk)
 - [Feature Fit Risk](Feature-Risk#feature-fit-risk)
 - [Dead-End Risk](Boundary-Risk#dead-end-risk) and [Boundary Risk](Boundary-Risk)  
 
(Although you might be able to think of a few more.) 
 
Let's look at each of these in turn.

## Schedule Risk

![Schedule Risk](images/generated/schedule-risk.png)

By agreeing a _time_ and _place_ for something to happen, you're introducing [Deadline Risk](Schedule-Risk#Deadline-Risk).  Miss the deadline, and you miss the bus, or the start of the meeting or get fined for not filling your tax return on time.  

As discussed above, _schedules_ (such as bus timetables) exist so that _two or more parties can coordinate_, and [Deadline Risk](Schedule-Risk#Deadline-Risk) is on _all_ of the parties.  While there's a risk I am late, there's also a risk the bus is late.  I might miss the start of a concert, or the band might keep everyone waiting.   
 
Each party can mitigate [Deadline Risk](Schedule-Risk#Deadline-Risk) with _slack_.  That is, ensuring that the exact time of the event isn't critical to your plans:   
- Don't build into your plans a _need_ to start shopping at 9am.   
- Arrive at the bus-stop _early_.   

The amount of slack you build into the schedule is likely dependent on the level of risk you face:  I tend to arrive a few minutes early for a bus, because the risk is _low_ (there'll be another bus along soon), however I try to arrive over an hour early for a flight, because I can't simply get on the next flight straight away, and I've already paid for it, so the risk is _high_.
 
[Deadline Risk](Schedule-Risk#Deadline-Risk) becomes very hard to manage when you have to coordinate actions with lots of tightly-constrained events.  So what else can give?  We can reduce the number of _parties_ involved in the event, which reduces risk, or, we can make sure all the parties are in the same _place_ to begin with.  

## Reliability Risk

![Reliability Risk](images/generated/reliability-risk.png)

[Deadline Risk](Schedule-Risk#Deadline-Risk) is really a kind of reliability issue: if you can understand which parties are unreliable, you have a much better handle on your [Deadline Risk](Schedule-Risk#Deadline-Risk). 

Luckily, there is quite a lot of existing science around reliability.  For example:  
 - If a component **A** depends on component **B**, unless there is some extra redundancy around **B**, then **A** _can't_ be more reliable than **B**. 
 - Is **A** or **B** a [Single Point Of Failure](https://en.wikipedia.org/wiki/Single_point_of_failure) in a system?
 - Are there bugs in **B** that are going to prevent it working correctly in all circumstances?

This kind of stuff is encapsulated in the science of [Reliability Engineering](https://en.wikipedia.org/wiki/Reliability_engineering).   For example, [Failure mode and effects analysis (FEMA)](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis):

> "...was one of the first highly structured, systematic techniques for failure analysis. It was developed by reliability engineers in the late 1950s to study problems that might arise from malfunctions of military systems. " - [FEMA, _Wikipedia_](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis)

This was applied on NASA missions, and then more recently in the 1970's to car design following the [Ford Pinto exploding car](https://en.wikipedia.org/wiki/Ford_Pinto#Design_flaws_and_ensuing_lawsuits) affair.

## Scarcity Risk

![Scarcity Risk](images/generated/scarcity-risk.png)

Let's get back to the bus (which, hopefully, is still working).  What if, when it arrives, it's already full of passengers?  Let's term this, [Scarcity Risk](Dependency-Risk#Scarcity-Risk) - the chance that a dependency is over-subscribed and you can't use it the way you want.  This is clearly an issue for nearly every kind of dependency: buses, supermarkets, concerts, teams, services and people.  

You could also call this _availability risk_ or _capacity risk_ of the resource.  Here are a selection of mitigations:
 - **Buffers**: Smoothing out peaks and troughs in utilisation.
 - **Reservation Systems**: giving clients information _ahead_ of the dependency usage about whether the resource will be available to them.
 - **Graceful degradation**: Ensuring _some_ service in the event of over-subscription.  It would be no use allowing people to cram onto the bus until it can't move.
 - **Demand Management**:  Having different prices during busy periods helps to reduce demand.  Having "first class" seats means that higher-paying clients can get service even when the train is full.  [Uber](https://www.uber.com) adjust prices in real-time by so-called [Surge Pricing](https://www.uber.com/en-GB/drive/partner-app/how-surge-works/).  This is basically turning [Scarcity Risk](Dependency-Risk#Scarcity-Risk) into a [Market Risk](Feature-Risk#market-risk) problem.
 - **Queues**: Again, these provide a "fair" way of dealing with scarcity by exposing some mechanism for prioritising use of the resource.  Buses operate a first-come-first-served system, whereas emergency departments in hospitals triage according to need.
 - **Pools**: Reserving parts of a resource for particular customers. 
 - **Horizontal Scaling**: allowing a scarce resource to flexibly scale according to how much demand there is.   (For example, putting on extra buses when the trains are on strike, or opening extra check-outs at the supermarket.)
 
Much like [Reliability Risk](#reliability-risk), there is science for it:
 - [Queue Theory](https://en.wikipedia.org/wiki/Queueing_theory) is all about building mathematical models of buffers, queues, pools and so forth.  
 - [Logistics](https://en.wikipedia.org/wiki/Logistics) is the practical organisation of the flows of materials and goods around things like [Supply Chains](https://en.wikipedia.org/wiki/Supply_chain).  
 - And [Project Management](https://en.wikipedia.org/wiki/Project_management) is in large part about ensuring the right resources are avaiable at the right times.  We'll be taking a closer look at that in the Part 3 sections on [Prioritisation](Prioritisation) and the [Project Managment Body Of Knowledge](PMBoK).

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

> "In management the term silo mentality often refers to information silos in organizations. Silo mentality is caused by divergent goals of different organizational units." - [Silo Mentality, _Wikipedia_](https://en.wikipedia.org/wiki/Information_silo#Silo_mentality)

Ironically, _more communication_ might not be the answer - if channels are provided to discover functionality in other teams you can still run into [Trust Risk](Communication-Risk#trust-risk) (why should I believe in the quality of this dependency?)  Or [Channel Risk](Communication-Risk#channel-risk) in terms of too low a signal-to-noise ratio, or desperate self-promotion.

Silo Mentality is exacerbated by the problems you would face in _budgeting_ if suddenly all the divisions in an organisation started providing dependencies for each other.  This starts to require a change to organisational structure towards being a set of individual businesses marketing services to one another, rather than a division-based one.  We'll look more closely at these kind of organisational issues in the [Coordination Risk](Coordination-Risk) section. 

## Complexity Risk

Dependencies are usually a mitigation for [Complexity Risk](Complexity-Risk), and we'll investigate that in much more detail in [Software Dependency Risk](Software-Dependency-Risk).  The reason for this is that a dependency gives you an [abstraction](Glossary#abstraction): you no longer need to know _how_ to do something, (that's the job of the dependency), you just need to interact with the dependency properly to get the job done.  Buses are _perfect_ for people who can't drive, after all.

But this means that all of the issues of abstractions that we covered in [Communication Risk]() apply:
 - There is [Invisiblity Risk](Communication-Risk#invisibility-risk) because you probably don't have a full view of what the dependency is doing.  Nowadays, bus stops have a digital "arrivals" board which gives you details of when the bus will arrive, and shops publish their opening hours online.  But, abstraction always means the loss of some detail.
 - There is [Misinterpretation Risk](Communication-Risk#misinterpretation-risk), because often the dependency might mistake your instructions.  This is endemic in software, where it's nearly impossible to describe exactly what you want up-front.  
 
## Fit Risk

![Feature Fit Risk](images/generated/fit-risk.png) 

Sometimes, the bus will take you to lots of in-between places you _didn't_ want to go.   This is [Fit Risk](Feature-Risk#feature-fit-risk) and we saw this already in the section on [Feature Risk](Feature Risk).  There, we considered two problems:
 - The feature (or now, dependency) doesn't provide all the functionality you need.  This was [Fit Risk](Feature-Risk#feature-fit-risk).  An example might be the supermarket not stocking everything you wanted.
 - The feature / dependency provides far too much, and you have to accept more complexity than you need.  This was [Conceptual Integrity Risk](Feature-Risk#conceptual-integrity-risk).  An example of this might be the supermarket being _too big_, and you spend a lot longer navigating it than you wanted to.
 
![Feature Fit:  A Two-Dimensional Problem (at least)](images/kite9/dependency-risk-fit.png)

## Dead-End Risk and Boundary Risk

When you choose something to depend on, you can't be certain that it's going to work out in your favour.  Sometimes, the path from your starting point to your goal on the [Risk Landscape](Risk-Landscape) will take you to dead ends:  places where the only way towards your destination is to lose something, and do it again another way.  This is [Dead End Risk](Complexity-Risk#Dead-End-Risk), which we looked at before. 

[Boundary Risk](Boundary-Risk) is another feature of the risk landscape:  when you make a decision to use one dependency over another, you are picking a path on the risk landscape that _precludes_ other choices.  After all, there's not really much cost in a [Dead End](Complexity-Risk#Dead-End-Risk) if you've not had to follow a path to get to it.  

We're also going to look at [Boundary Risk](Boundary-Risk) in more detail later, but I want to introduce it here. Here are some examples: 
- If I choose to program some software in Java, I will find it hard to integrate libraries from other languages.  The dependencies available to Java software are different to those in Javascript, or C#.  Having gone down a Java route, there are _higher risks_ associated with choosing incompatible technologies.  Yes, I can pick dependencies that use C# (still), but I am now facing greater complexity risk than if I'd just chosen to do everything in C# in the first place.
- If I choose one database over another, I am _limited to the features of that database_.  This is not the same as a dead-end:  I can probably build what I want to build, but the solution will be "bounded" by the dependency choices I make.    One of the reasons we have standards like [Java Database Connectivity (JDBC)](https://en.wikipedia.org/wiki/Java_Database_Connectivity) is to mitigate [Dead End Risk](Complexity-Risk#dead-end-risk) around databases, so that we can move to a different database later.
- If I choose to buy a bus ticket, I've made a decision not to travel by train, even though later on it might turn out that the train was a better option.  Buying the bus ticket is [Boundary Risk](Boundary-Risk):  I may be able to get a refund, but having chosen the dependency I've set down a path on the risk landscape.

## Managing Dependency Risk

Arguably, managing [Dependency Risk](Dependency-Risk) is _what Project Managers do_.  Their job is to meet the [Goal](Glossary#goal-in-mind) by organising the available dependencies into some kind of useful order.  

There are _some_ tools for managing dependency risk:  [Gantt Charts](https://en.wikipedia.org/wiki/Gantt_chart) for example, arrange work according to the capacity of the resources (i.e. dependencies) available, but also the _dependencies between the tasks_.   If task **B** requires the outputs of task **A**, then clearly task **A** comes first and task **B** starts after it finishes.  We'll look at this more in [Process Risk](Process-Risk). 

We'll look in more detail at project management in the _practices_ part, later.   But now let's get into the specifics with [Schedule Risk](Schedule-Risk).



