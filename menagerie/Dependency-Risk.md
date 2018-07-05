![Draft](images/state/draft.png)

[Dependency Risk](Dependency-Risk) is the risk you take on whenever you have a dependency on something (or someone) else.   One simple example could be that the software service you write might depend on a server to run on.  If the server goes down, the service goes down too.  In turn, the server depends on electricity from a supplier, as well as a network connection from a provider.  If either of these dependencies aren't met, the service is out of commission.

Dependencies can be on _events_, _people_, _teams_, _processes_, _software_, _services_, _money_: pretty much _any resource_.  Dependencies add risk to any project because the reliability of the project itself is now a function involving the reliability of the dependency.  

In order to avoid repetition, and also to break down this large topic, we're going to look at this over 6 sections:   
 - In this first section will look at dependencies _in general_, and specifically on _events_, and some of the variations on [Dependency Risk](Dependency-Risk).
 - Next, we'll look at [Schedule Risk](Schedule-Risk), because time and money are key dependencies in any project.
 - Then, we'll move on to look specifically at [Software Dependency Risk](Software-Dependency-Risk), covering using libraries, software services and building on top of the work of others.
 - Next, we'll take a closer look at [Boundary Risk](Boundary-Risk) and [Dead-End Risk](Boundary-Risk#dead-end-risk).  These are the risks you face in choosing the wrong things to depend on.  
 - After, we'll take a look at [Process Risk](Process-Risk), which is still [Dependency Risk](Dependency-Risk), but we'll be considering more organisational factors and how bureaucracy comes into the picture.  
 - Finally, we'll wrap up this analysis with a look at some of the specific problems around working with other people or businesses in [Agency Risk](Agency Risk).
  
## Why Have Dependencies?

Luckily for us, the things we depend on in life are, for the most part, abundant:  water to drink, air to breathe, light, heat and most of the time, food for energy.  This isn't even lucky though: life has adapted to build dependencies on things that it can _rely_ on.  Although life exists at the bottom of the ocean around thermal vents (tbd), it is a very different kind of life to us, and has a different set of dependencies given it's circumstances. 

This tells us a lot about dependency risk right here:
 - On the one hand, depending on something else is very often helpful, and quite often essential.  (For example, all animals that _move_ seem to depend on oxygen).
 - However, as soon as you have dependencies, you need to take into account of their _reliability_. (Living near a river or stream gives ou access to fresh water, for example).  
 - Successful organisms _adapt_ to the dependencies available to them (like the thermal vent creatures).
 - There is likely to be _competition_ for a dependency when it is scarce (think of droughts and famine).

So, dependencies are a trade-off.  They give with one hand and take with the other.  Our modern lives are full of dependency (just think of the chains of dependency needed for putting a packet of biscuits on a supermarket shelf, for example), but we accept this extra complexity because it allows tbd.

## Event Dependencies

We rely on events occuring all the time in our lives, and so this is a good place to start in our analysis of [Dependency Risk]() generally.   And, as we will see, all the risks that apply to events pretty much apply to all the other kinds of dependencies we'll look at.    

Arguably, the event dependencies are the simplest to express, too: usually, a _time_ and a _place_.   For example, "I can't start shopping until the supermarket opens at 9am", or "I must catch my bus to work at 7:30am".  In the first example, you can't _start_ something until a particular event happens.  In the latter example, you must _be ready_ for an event at a particular time.

### Events Mitigate Risk...

Having an event occur in a fixed time and place is _mitigating risk_:

- By taking the bus, we are mitigating our own [Schedule Risk](Schedule-Risk):  we're (hopefully) reducing the amount of time we're going to spend on the activity of getting to work.  
- A bus needn't necessarily _have_ a fixed timetable: it could wait for each passenger until they turned up, and then go.  (A bit like ride-sharing works).  This would be a total disaster from a [Coordination Risk](Coordination-Risk) perspective, as one person could cause everyone else to be really really late.  Events are a mitigation for [Coordination Risk](Coordination-Risk).   Having a fixed time for doing something mitigates [Coordination Risk](Coordination-Risk) by turning it into [Schedule Risk](Schedule-Risk).  Agreeing a date for a product launch, for example, allows lots of teams to coordinate their activities.
- It's not entirely necessary to even take the bus:  you could walk, or go by another form of transport.  But, effectively, this just swaps one dependency for another:  if you walk, this might well take longer and use more energy, so you're just picking up [Schedule Risk]() in another way.  If you drive, you have a dependency on your car instead.  So, there is often an _opportunity cost_ with dependencies.  Using the bus might be a cheap way to travel.  You're therefore imposing less [Dependency Risk]() on a different scarce resource - your money.

### But, Events Lead To Attendant Risk

By _deciding to use the bus_ we've **Taken Action**.  However, as we saw in [A Simple Scenario](A-Simple-Scenario), this means we pick up [Attendant Risks](Glossary#attendant-risk).  Although you might be able to think of a few more, in this section, we're going to look at the following ones:

So, we're going to look at [Dependency Risk]() for our toy events from 7 different perspectives, many of which we've already touched on in the other sections:

 - [Schedule Risk](Schedule-Risk)
 - [Reliability Risk](Operational-Risk#reliability-risk)
 - [Scarcity Risk](Feature-Risk#market-risk)
 - [Communication Risk](Communication-Risk)
 - [Complexity Risk](Complexity-Risk)
 - [Fit Risk](Feature-Risk#feature-fit-risk) and Baggage
 - [Dead-End Risk](Boundary-Risk#dead-end-risk) and [Boundary Risk](Boundary-Risk)  
 
tbd tree diagram of this.
 
Let's look at each of these in turn.

## Schedule Risk

By agreeing a _time_ and _place_ for something to happen, you're introducing [Deadline Risk](Schedule-Risk#Deadline-Risk).  Miss the deadline, and you miss the bus, miss the start of the meeting or get fined for not filling your tax return on time.  

As discussed above schedules (such as bus timetables) exist so that _two or more parties can coordinate_, and [Deadline Risk](Schedule-Risk#Deadline-Risk) is on _all_ of the parties.  While there's a risk I am late, there's also a risk the bus is late.  I might miss the start of a concert, or the band might keep everyone waiting.   
 
Each party can mitigate [Deadline Risk](Schedule-Risk#Deadline-Risk) with _slack_.  That is, ensuring that the exact time of the event isn't critical to your plans:   Don't build into your plans a _need_ to start shopping at 9am.   Arrive at the bus-stop _early_.   The amount of slack you build into the schedule is likely dependent on the level of risk you face:  I tend to arrive a few minutes early for a bus, because the risk is _low_ (there'll be another bus along soon), however I try to arrive over an hour early for a flight, because I can't simply get on the next flight straight away, and anyway, I've already paid for it.
 
[Deadline Risk](Schedule-Risk#Deadline-Risk) becomes very hard to manage when you have to coordinate actions with lots of tightly-constrained events.  So what else can give?  We can reduce the number of _parties_ involved in the event, which reduces risk, or, we can make sure all the parties are in the same _place_ to begin with.  

## Reliability Risk

[Deadline Risk](Schedule-Risk#Deadline-Risk) is really a kind of reliability issue: if you can understand which parties are unreliable, you have a much better handle on your [Deadline Risk](Schedule-Risk#Deadline-Risk). 

Luckily, there is quite a lot of existing science around reliability.  For example:  
 - If a component **A** depends on component **B**, unless there is some extra redundancy around **B**, then **A** _can't be more reliable than **B**. 
 - A [Single Point Of Failure]() in a system 
 - Are there bugs in **B** that are going to prevent it working correctly in all circumstances?

Reliability of an overall system is constrained by the reliability.  How does re

Is it a known unknown?  You know you might be going the wrong way.

(This might sound unlikely, but I've made several career decisions off the back of this)

Dependency and reliability
Pinto
https://en.wikipedia.org/wiki/Reliability_engineering
FECMA FEMA https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis
Diagram of a distributed software system - where can failures hide?
SPOFs.

## Scarcity Risk

Let's get back to the bus:  what if, when it arrives, it's already full of passengers?  Let's term this, [Scarcity Risk]() - the chance that a dependency is over-subscribed and you can't use it the way you want.  This is clearly an issue for nearly every kind of dependency: buses, supermarkets, concerts, teams, services and people.  

You could also call this _availability risk_ or _capacity risk_ of the resource.  Here are a selection of mitigations:
 - **Buffers**: Smoothing out peaks and troughs in utilisation tbd.
 - **Reservation Systems**: giving clients information _ahead_ of the dependency usage about whether the resource will be available to them.
 - **Graceful degradation**: Ensuring _some_ service in the event of over-subscription.  It would be no use allowing people to cram onto the bus until it can't move.
 - **Demand Management**:  Having different prices during busy periods helps to reduce demand.  Having "first class" seats means that higher-paying clients can get service even when the train is full.  [Uber]() adjust prices in real-time by so-called [Surge Pricing].
 - **Queues**: Again, these provide a "fair" way of dealing with scarcity by exposing some mechanism for prioritising use of the resource.  Buses operate a first-come-first-served system, whereas emergency departments in hospitals triage according to need.
 - **Pools**: Reserving parts of a resource for particular customers.  For exampl
 - **Horizontal Scaling**: allowing a scarce resource to flexibly scale according to how much demand there is.   (For example, putting on extra buses when the trains are on strike, or opening extra check-outs at the supermarket.)

## Communication Risk

We've already looked at communication risk in a lot of depth, and we're going to go deeper still in [Software Dependency Risk](Software-Dependency-Risk), but let's look at some general issues around communicating dependencies.  Recall from the discussion on [Marketing Communications](Communication-Risk#Marketing-Communications) which started like this:

 - The concept that there is such a thing as **D** which solves my problem isn't something I'd even considered.    
 - I'd like to use something like **D**, but how do I find it?  
 - There are multiple implementations of **D**, which is the best one for the task?
 - I know **D**, but I can't figure out how to solve my problem in it.
 
Let's apply this to our Bus scenario:

 - Am I aware that there is public transport in my area?
 - How do I find out about the different options?
 - How do I choose between buses, taxis, cars etc.
 - How do I understand the timetable, and apply it to my problem?
 
Finding out about bus schedules is easy.  But in a large company, [Communication Risk]() and especially [Invisibility Risk]() are huge problems:  this tends to get called "Silo Thinking", that is, ignoring what else is going on in other parts of the company or "not invented here" syndrome.   These are all varieties of communication risk.   

Ironically, _more communication_ might not be the answer - if channels are provided where 

Silo thinking 

Lots of beginners don't see dependency risk:  they have the dependencies round the wrong way in their heads.  eg. sunny with jenkins and environment variables.  You can't solve a problem if you are working down the line of dependencies but your issue is with an earlier one

dependency ijection - invisibile dependencies

### Dependencies Are Abstractions

Dependencies are usually a mitigation for complexity risk, and we'll investigate that in much more detail in [Software Dependency Risk].  The reason for this is that a dependency gives you an _abstraction_: you no longer need to know _how_ to do something, (that's the job of the dependency), you just need to interact with the dependency properly to get the job done.  Buses are _perfect_ for people who can't drive, after all.

But this means that all of the issues of abstractions that we covered in [Communication Risk]() apply:
 - There is [Invisiblity Risk]() because you probably don't have a full view of what the dependency is doing.  Nowadays, bus stops have a digital "arrivals" board which gives you details of when the bus will arrive, and shops publish their opening hours online.  But, abstraction always means the loss of some detail.
 - There is [Misinterpretation Risk], because often the dependency might mistake your instructions.  This is endemic in software, where it's nearly impossible to describe exactly what you want up-front.  
 
## Fit Risk

Sometimes, the bus will take you to lots of in-between places you _didn't_ want to go.   This is [Fit Risk]() and we saw this already in the page on [Feature Risk].  There, we considered two problems:
 - The feature (or now, dependency) doesn't provide all the functinality you need.  This was [Fit Risk].  An example might be the supermarket not stocking everything you wanted.
 - The feature / dependency provides far too much, and you have to accept more complexity than you need.  This was [Conceptual Integrity Risk].  An example of this might be the supermarket being _too big_, and you spend a lot longer navigating it than you wanted to.
 
 
diagram tbd


## Dead-End Risk and Boundary Risk

When you choose something to depend on, you can't be certain that it's going to work out in your favour.  Sometimes, the path from your starting point to your goal on the [Risk Landscape](Risk-Landscape) will take you to dead ends:  places where the only way towards your destination is to lose something, and do it again another way.  This is [Dead End Risk](Complexity-Risk#Dead-End-Risk], which we looked at before. 

[Boundary Risk]() is another feature of the risk landscape:  when you make a decision to use one dependency over another, you are picking a path on the risk landscape that _precludes_ other choices.  After all, there's not really much cost in a [Dead End]() if you've not had to follow a path to get to it.  

We're also going to look at [Boundary Risk]() in more detail later, but I want to introduce it here. Here are some examples: 
- If I choose to program some software in Java, I will find it hard to integrate libraries from other languages.  The dependencies available to Java software are different to those in Javascript, or C#.  Having gone down a Java route, there are _higher risks_ associated with choosing incompatible technologies.  Yes, I can pick dependencies that use C# (still), but I am now facing greater complexity risk than if I'd just chosen to do everything in C# in the first place.
- If I choose one database over another, I am _limited to the features of that database_.  This is not the same as a dead-end:  I can probably build what I want to build, but the solution will be "bounded" by the dependency choices I make.    One of the reasons we have standards like [JDBC]() is to mitigate [Dead End Risk]() around databases, so that we can move to a different datbase later.
- If I choose to buy a bus ticket, I've made a decision not to travel by train, even though later on it might turn out that the train was a better option.  Buying the bus ticket is [Boundary Risk]:  I may be able to get a refund, but having chosen the dependency I've set down a path on the risk landscape.

## Managing Dependency Risk

Arguably, managing dependency risk is _what Project Managers do_.  Their job is to meet the [Goal]() by organising the available dependencies into some kind of useful order.  

There are _some_ tools for managing dependency risk:  [Gantt Charts]() for example, arrange work according to the capacity of the resources (i.e. dependencies) available, but also the _dependencies between the tasks_.   If task B requires the outputs of task A, then clearly task A comes first and task B starts after it finishes.  We'll look at this more in [Process Risk](Process-Risk). 

We'll look in more detail in the _practices_ part, later.   But now let's get into the specifics with [Software Dependency Risk](Software-Dependency-Risk).



