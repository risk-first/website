---
title: Coordination Risk
description: Risks that a group of agents cannot work together and their behaviour devolves into competition.
url: https://riskfirst.org/risks/Coordination-Risk

featured: 
  class: bg2
  element: '<risk class="coordination" />'
order: 12
categories:
 - Risks
redirect_from: 
 - /Coordination-Risk
---

# Coordination Risk

As in [Agency Risk](Agency-Risk.md), we are going to use the term _agent_, which refers to anything with [agency](Agency-Risk.md#software-processes) in a system to make decisions:  that is, an agent has an [Internal Model](../thinking/Glossary.md#Internal-Model) and can [take actions](../thinking/Glossary.md#taking-action) based on it.  Here, we work on the assumption that the agents _are_ working towards a common [Goal](../thinking/Glossary.md#Goal-In-Mind), even though in reality it's not always the case, as we saw in the section on [Agency Risk](Agency-Risk.md).

[Coordination Risk](Coordination-Risk.md) is the risk that agents can fail to coordinate to meet their common goal and end up making things worse.<!-- tweet-end -->  [Coordination Risk](Coordination-Risk.md) is embodied in the phrase "Too Many Cooks Spoil The Broth":  more people, opinions or _agents_ often make results worse.

In this section, we'll first build up [a model of Coordination Risk](#a-model-of-coordination-risk), describing exactly coordination means and why we do it.  Then, we'll look at some classic [problems of coordination](#problems-of-coordination).  Then, we're going to consider agency at several different levels (because of [Scale Invariance](../thinking/Evaluating-Risk.md#invariances-2-scale-invariance)) .  We'll look at:

 - [Team Decision Making](#decision-making),
 - [Living Organisms](#in-living-organisms),
 - [Larger Organisations](#large-organisations) and the staff within them,
 - and [Software Processes](#in-software-processes).
 
... and we'll consider how [Coordination Risk](Coordination-Risk.md) is a problem at each of these scales.

But for now, let's crack on and examine where [Coordination Risk](Coordination-Risk.md) comes from.

## A Model Of Coordination Risk

Earlier, in [Dependency Risk](Dependency-Risk.md), we looked at various resources (time, money, people, events etc) and showed how we could [depend on them](Dependency-Risk.md) taking on risk.<!-- tweet-end -->  Here, let's consider the situation where there is _competition for those dependencies_ due to [Scarcity Risk](Scarcity-Risk.md):   other agents want to use them in a different way.  

### Law Of Diminishing Returns

![Sharing Resources.  5 units are available, and the X axis shows A's consumption of the resource.  B gets whatever remains.  Total benefit is maximised somewhere in the middle](/images/numbers/sharing.png)

One argument for coordination could come from [Diminishing Returns](https://en.wikipedia.org/wiki/Diminishing_returns), which says that the earlier units of a resource (say, chocolate bars) give you more benefit than later ones.  

We can see this in the chart above.  Let's say A and B compete over a resource, of which there are 5 units available.  For every extra A takes, B loses one.  The X axis shows A's consumption of the resource. While the biggest benefit to A is in taking _all_ of the resources, the greatest _increase_ in benefit comes from the consumption of the first unit. 

As you can see, by _sharing_, it's possible that the _total benefit_ is greater than it can be for either individual.  But sharing requires coordination.  Further, the more competitors involved, the _worse_ a winner-take-all outcome is for total benefit.

Just two things are needed for competition to occur:

 - Multiple, Individual agents, trying to achieve [Goals](../thinking/Glossary.md#Goal-In-Mind).
 - Scarce Resources, which the agents want to use as [Dependencies](Dependency-Risk.md).

### Coordination via Communication

The only way that the agents can move away from competition towards coordination is via [Communication](Communication-Risk.md), and this is where their coordination problems begin.  

[Coordination Risk](Coordination-Risk.md) commonly occurs where people have different ideas about how to achieve a [goal](../thinking/Glossary.md#Goal-In-Mind), and they have different ideas because they have different [Internal Models](../thinking/Glossary.md#internal-model).  As we saw in the section on [Communication Risk](Communication-Risk.md), we can only hope to synchronise [Internal Models](../thinking/Glossary.md#Internal-Model) if there are high-bandwidth [Channels](Communication-Risk.md#channels) available for communication. 

You might think, therefore, that this is just another type of [Communication Risk](Communication-Risk.md) problem, and that's often a part of it, but even with synchronized [Internal Models](../thinking/Glossary.md#Internal-Model), coordination risk can occur.  Imagine the example of people all trying to madly leave a burning building.  They all have the same information (the building is on fire).  If they coordinate, and leave in an orderly fashion, they might all get out.  If they don't, and there's a scramble for the door, more people might die.

![Coordination Risk - Mitigated by Communication](/images/generated/risks/coordination/coordination-risk.png)

## Problems Of Coordination

Let's unpack this idea, and review some classic problems of coordination, none of which can be addressed without good communication.  Here are some examples:

1. **Merging Data**:  if you are familiar with the source code control system, [Git](https://en.wikipedia.org/wiki/Git), you will know that this is a _distributed_ version control system.  That means that two or more people can propose changes to the same files without knowing about each other.  This means that at some later time, [Git](https://en.wikipedia.org/wiki/Git) then has to merge (or reconcile) these changes together.  Git is very good at doing this automatically, but sometimes different people can independently change the same lines of code and these will have to be merged manually.  In this case, a human arbitrator "resolves" the difference, either by combining the two changes or picking a winner.

2. **Consensus**:  making group decisions (as in elections) is often decided by votes.  But having a vote is a coordination issue and requires that everyone has been told the rules:
  - Where will the vote be held?  
  - How long do you provide for the vote?  
  - What do you do about absentees?  
  - What if people change their minds in the light of new information?
  - How do you ensure everyone has enough information to make a good decision?
  
3. **Factions**: sometimes, it's hard to coordinate large groups at the same time and "factions" can occur.  That the world isn't a single big country is probably partly a testament to this:  countries are frequently separated by geographic features that prevent the easy flow of communication (and force).   We can also see this in distributed systems, with the ["split brain"](https://en.wikipedia.org/wiki/Split-brain_(computing) problem.   This is where subset of the total system becomes disconnected (usually due to a network failure) and you end up with two, smaller networks with different knowledge.  We'll address in more depth later.

4. **[Resource Allocation](https://en.wikipedia.org/wiki/Resource_allocation)**:  ensuring that the right people are doing the right work, or the right resources are given to the right people is a coordination issue.  On a grand scale we have [Logistics](https://en.wikipedia.org/wiki/Logistics) and [Economic Systems](https://en.wikipedia.org/wiki/Economic_system).  On a small scale the office's _room booking system_ solves the coordination issue of who gets a meeting room using a first-come-first-served booking algorithm.  

5. **[Deadlock](https://en.wikipedia.org/wiki/Deadlock)** refers to a situation where, in an environment where multiple parallel processes are running, the processing stops and no-one can make progress because the resources each process needs are being reserved by another process.  This is a specific issue in [Resource Allocation](https://en.wikipedia.org/wiki/Resource_allocation), but it's one we're familiar with in the computer science industry.  Compare with [Gridlock](https://en.wikipedia.org/wiki/Gridlock), where traffic can't move because other traffic is occupying the space it wants to move to already. 

6. **[Race Conditions](https://en.wikipedia.org/wiki/Race_condition)** are where we can't be sure of the result of a calculation, because it is dependent on the ordering of events within a system.  For example, two separate threads writing the same memory at the same time (one ignoring and over-writing the work of the other) is a race.  

7. **Contention**: where there is [Scarcity Risk](Scarcity-Risk.md) for a [dependency](Dependency-Risk.md), we might want to make sure that everyone gets fair use of it, by taking turns, booking, queueing and so on.  As we saw in [Scarcity Risk](Scarcity-Risk.md), sometimes this is handled for us by the [Dependency](Dependency-Risk.md) itself.  However if it isn't, it's the _users_ of the dependency who'll need to coordinate to use the resource fairly, again, by communicating with each other.

## Decision Making

Within a team, [Coordination Risk](Coordination-Risk.md) is at its core about resolving [Internal Model](../thinking/Glossary.md#Internal-Model) conflicts in order that everyone can agree on a [Goal In Mind](../thinking/Glossary.md#Goal-In-Mind) and cooperate on getting it done.  Therefore, [Coordination Risk](Coordination-Risk.md) is worse on projects with more members, and worse in organisations with more staff.  

As an individual, do you suffer from [Coordination Risk](Coordination-Risk.md) at all?  Maybe:  sometimes, you can feel "conflicted" about the best way to solve a problem.  And weirdly, usually _not thinking about it_ helps.  Sleeping too.  (Rich Hickey calls this "[Hammock Driven Development](https://www.youtube.com/watch?v=f84n5oFoZBc)").  This is probably because, unbeknownst to you, your subconscious is furiously communicating internally, trying to resolve these conflicts itself, and will let you know when it has come to a resolution.  

![Vroom And Yetton Decision Making Styles.  "d" indicates authority in making a decision, circles are subordinates.  Thin lines with arrow-heads show information flow, whilst thick lines show _opinions_ being passed around.](/images/generated/risks/coordination/vroom-yetton.png)

[Vroom and Yetton](https://en.wikipedia.org/wiki/Vroom-Yetton_decision_model) introduced a model of group decision making which delineated five different styles of decision making within a team. These are summarised in the table below (**AI, AII, CI, CII, GII**).  To this, I have added a sixth (**UI**), which is the _uncoordinated_ option, where everyone competes.   The diagram above illustrates these, with the following conventions:

 - Thin lines with arrow-heads show a flow of _information_, either one-way or two-way.
 - Thick lines show a flow of _opinion_.
 - "d" boxes are _decision makers_, whereas circles don't have a part in the decision.

| Type    | Description                  | Decision Makers | Opinions    | Channels       | Risk                                      |
|---------|------------------------------|-----------------|-------------|----------------|-------------------------------------------|
| **UI**  | Uncoordinated                             | 1               | 1         | 0                                                      | Competition                               |
| **AI**  | Autocratic (with upward information flow) | 1               | 1         | **s**                                                  | Maximum Coordination Risk                 |
| **AII** | Autocratic (up and down information flow) | 1               | 1         | **s**                                                  |                                           |
| **CI**  | Consultative (Individual)                 | 1               | 1 + **s** | 2**s**                                                 |                                           |
| **CII** | Consultative (Group)                      | 1               | 1 + **s** | <!--replace $\mathbf{s}^2$ -->**s**²<!--endreplace --> |                                           |
| **GII** | Group Consultation and Voting             | 1 + **s**       | 1 + **s** | <!--replace $\mathbf{s}^2$ -->**s**²<!--endreplace --> | Maximum Communication Risk, Schedule Risk |

**s** = subordinate

At the top, you have the _least_ consultative styles, and at the bottom, the _most_.   At the top, decisions are made with just the leader's [Internal Model](../thinking/Glossary.md#Internal-Model), but moving down, the [Internal Models](../thinking/Glossary.md#Internal-Model) of the _subordinates_ are increasingly brought into play.  

The decisions at the top are faster, but don't do much for mitigating [Coordination Risk](Coordination-Risk.md).  The ones below take longer (incurring [Schedule Risk](Scarcity-Risk.md#schedule-risk)) but mitigate more [Coordination Risk](Coordination-Risk.md).   Group decision-making inevitably involves everyone _learning_ and improving their [Internal Models](../thinking/Glossary.md#Internal-Model).   

The trick is to be able to tell which approach is suitable at which time.   Everyone is expected to make decisions _within their realm of expertise_: you can't have developers continually calling meetings to discuss whether they should be using an [Abstract Factory](https://en.wikipedia.org/wiki/Abstract_factory_pattern) or a [Factory Method](https://en.wikipedia.org/wiki/Factory_method_pattern): it would waste time.  The critical question is therefore, "what's the biggest risk?"

 - Is the [Coordination Risk](Coordination-Risk.md) greater?   Are we going to suffer [Dead End Risk](Complexity-Risk.md) if the decision is made wrongly?  What if people don't agree with it?  Poor leadership has an impact on [Morale](Agency-Risk.md#morale-risk) too.  
 - Is the [Schedule Risk](Scarcity-Risk.md#schedule-risk) greater?  If you have a 1-hour meeting with eight people to decide a decision, that's _one person day_ gone right there:  group decision making is _expensive_.  
 
So _organisation_ can reduce [Coordination Risk](Coordination-Risk.md) but to make this work we need more _communication_, and this has attendant complexity and time costs.  

### Staff As Agents

Staff in a team have a dual nature:  they are **Agents** and **Resources** at the same time.  The team [depends](Dependency-Risk.md) on staff for their resource of _labour_, but they're also part of the decision making process of the team, because they have [_agency_](Agency-Risk.md) over their own actions.  

Part of [Coordination Risk](Coordination-Risk.md) is about trying to mitigate differences in [Internal Models](../thinking/Glossary.md#Internal-Model). So it's worth considering how varied people's models can be:

 - Different skill levels
 - Different experiences
 - Expertise in different areas
 - Preferences
 - Personalities
 
The job of harmonising this on a project would seem to fall to the team leader, but actually people are self-organising to some extent.  This process is called [Team Development](https://en.wikipedia.org/wiki/Tuckman%27s_stages_of_group_development):

> "The forming–storming–norming–performing model of group development was first proposed by Bruce Tuckman in 1965, who said that these phases are all necessary and inevitable in order for the team to grow, face up to challenges, tackle problems, find solutions, plan work, and deliver results." - [Tuckman's Stages Of Group Development, _Wikipedia_](https://en.wikipedia.org/wiki/Tuckmans_stages_of_group_development)

Specifically this describes a process whereby a new group will form and then be required to work together. In the process, they will have many _disputes_.  Ideally, the group will resolve these disputes internally and emerge as a team, with a common [Goal In Mind](../thinking/Glossary.md#goal-in-mind).

Since [Coordination](Coordination-Risk.md) is about [Resource Allocation](Coordination-Risk.md#problems-of-coordination) the skills of staff can potentially be looked at as resources to allocate.  This means handling [Coordination Risk](Coordination-Risk.md) issues like:

 - People leaving, taking their [Internal Models](../thinking/Glossary.md#Internal-Model) and expertise with them ([Key Person Risk](Scarcity-Risk.md#Staff-Risk)).
 - People requiring external training, to understand new tools and techniques ([Learning Curve Risk](Communication-Risk.md#learning-curve-risk)).
 - People being protective about their knowledge in order to protect their jobs ([Agency Risk](Agency-Risk.md)). 
 
> "As a rough rule, three programmers organised into a team can do only twice the work of a single programmer of the same ability - because of time spent on coordination problems." - [Gerald Wienberg, _The Psychology of Computer Programming_](https://en.wikipedia.org/wiki/Gerald_Weinberg) 
 
## In Living Organisms

Vroom and Yetton's organisational model isn't relevant to just teams of people.  We can see it in the natural world too.  Although _the majority_ of cellular life on earth (by weight) is [single celled organisms](http://www.stephenjaygould.org/library/gould_bacteria.html), the existence of _humans_ (to pick a single example) demonstrates that sometimes it's better for cells to try to mitigate [Coordination Risk](Coordination-Risk.md) and work as a team, accepting the [Complexity Risk](Complexity-Risk.md) and [Communication Risk](Communication-Risk.md) this entails.  For example, in the human body, we have:

 - **Various [systems](https://en.wikipedia.org/wiki/List_of_systems_of_the_human_body)**: such as the [Respiratory System](https://en.wikipedia.org/wiki/Respiratory_system) or the [Digestive System](https://en.wikipedia.org/wiki/Human_digestive_system).  Each of these systems contains...
 - **Organs**, such as the heart or lungs, which contain..
 - **Tissues**, which contain...
 - **Cells** of different types.  (Even cells are complex systems containing multiple different, communicating sub-systems.)  
 
There is huge attendant [Coordination Risk](Coordination-Risk.md) to running a complex multi-cellular system like the human body, but given the success of humanity as a species, you must conclude that these steps on the _evolutionary_ [Risk Landscape](Risk-Landscape.md) have benefited us in our ecological niche.

### Decision Making

The key observation from looking at biology is this:  most of the cells in the human body _don't get a vote_.   Muscles in the motor system have an **AI** or **AII** relationship with the brain - they do what they are told, but there are often nerves to report pain back.   The only place where **CII** or **GII** _could_ occur is in our brains, when we try to make a decision and weigh up the pros and cons.  

This means that there is a deal:  _most_ of the cells in our body accede control of their destiny to "the system".  Living within the system of the human body is a better option than going it alone as a single-celled organism.  Occasionally, due to mutation, we can end up with [Cancer](https://en.wikipedia.org/wiki/Cancer), which is where one cell genetically "forgets" its purpose in the whole system and goes back to selfish individual self-replication (**UI**).  We have [White Blood Cells](https://en.wikipedia.org/wiki/White_blood_cell) in the body to shut down this kind of behaviour and try to kill the rogue cells.  In the same way, societies have police forces to stop undesirable behaviour amongst their citizens. 
 
## Large Organisations

Working in a large organisation often feels like being a cell in a larger organism.  Cells live and die and the organism goes on.  Workers come and go from a large company but the organisation goes on.  By working in an organisation, we give up self-control and competition and accept **AI** and **AII** power structures above us, but we trust that there is symbiotic value creation on both sides of the employment deal.
 
_Less_ consultative decision making styles are more appropriate then when we don't have the luxury of high-bandwidth channels for discussion. When the number of parties rises above a room-full of people it's not possible to hear everyone's voice.   As you can see from the table above, for **CII** and **GII** decision-making styles, the amount of communication increases non-linearly with the number of participants, so we need something simpler.  

As we saw in the [Complexity Risk](Complexity-Risk.md) section, hierarchies are an excellent way of economising on number of different communication channels, and we use these frequently when there are lots of parties to coordinate.

In large organisations, teams are created and leaders chosen for those teams precisely to mitigate this [Communication Risk](Communication-Risk.md).  We're all familiar with this: control of the team is ceded to the leader, who takes on the role of 'handing down' direction from above, but also 'reporting up' issues that cannot be resolved within the team.   In Vroom and Yetton's model, this is moving from a **GII** or **CII** to an **AI** or **AII** style of leadership.  

Clearly, this is just a _model_, it's not set in stone and decision making styles usually change from day-to-day and decision-to-decision.  The same is not true in our software - _rules are rules_.

## In Software Processes

It should be pretty clear that we are applying our [Scale Invariance](../thinking/Evaluating-Risk.md#invariances-2-scale-invariance) rule to [Coordination Risk](Coordination-Risk.md):  all of the problems we've described as affecting teams and organisations also affect software, although the scale and terrain are different.  Software processes have limited _agency_ - in most cases they follow fixed rules set down by the programmers, rather than self-organising like people can (so far).

As before, in order to face [Coordination Risk](Coordination-Risk.md) in software, we need multiple agents all working together. [Coordination Risks](Coordination-Risk.md) (such as race conditions or deadlock) only really occur where _more than one agent working at the same time_.  This means we are considering _at least_ multi-threaded software, and anything above that (multiple CPUs, servers, data-centres and so on).  

### CAP Theorem

Imagine talking to a distributed database, where your request (_read_ or _write_) can be handled by one of many agents.

![User A and User B are both using a distributed database, managed by Agents 1 and 2, whom each have their own Internal Model](/images/generated/risks/coordination/cap1.png)

In the diagram above, we have just two agents `1` and `2`, in order to keep things simple.  `User A` _writes something_ to the database, then `User B` _reads it back_ afterwards.     

According to the [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem), there are three properties we could desire in such a system:

- **Consistency (C)**: Every read receives the most recent value from the last write.
- **Availability (A)**: Every request receives a response.
- **Partition tolerance (P)**: The system can operate despite the isolation (lack of communication with) some of its agents.

The [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem) states that this is a [Trilemma](https://en.wikipedia.org/wiki/Trilemma).  That is, you can only have two out of the three properties.   

There are plenty of resources on the Internet that discuss this in depth, but let's just illustrate with some diagrams to show how this plays out.  In the diagram above, we can see a 2-agent distributed database.   Either agent can receive a read or write.  So this might be a **GII** decision making system, because all the agents are going to need to coordinate to figure out what the right value is to return for a read, and what the last value written was.  

In the above diagram, you can already see that there is a _race condition_:  if A and B both make their requests at the same time, what will B get back?   The original value of X, or the new value?

#### With an AP System

![In an AP system, the User B may get back a _stale value_ for X](/images/generated/risks/coordination/cap-ap.png)

Here, we are going to consider what happens when communication breaks down between Agents 1 and 2.  That is, they are _isolated_ from communicating with each other.  As shown in the above diagram, in an `AP` system, we have a database that is able to survive partitioning, and always returns a response, but may not be consistent.  The value `B` will get back will depend on whether they talk with Agent 1 or Agent 2.  

#### With an CP System

![In an CP system, the User B won't get anything back for X, because Agent 2 can't be sure it has the latest value](/images/generated/risks/coordination/cap-cp.png).  

To be consistent, Agent 2 needs to check with Agent 1 to make sure it has the latest value for X.  Where Agent 2 is left waiting for Agent 1 to re-appear, we are _blocked_.  So CP systems will block when partitioned.

#### With an CA System

![In an CA system, we can't have partition tolerance, so in order to be consistent a single Agent has to do all the work](/images/generated/risks/coordination/cap-ca.png)

Finally, if we have a CA system, we are essentially saying that _only one agent is doing the work_.  (You can't partition a single agent, after all).  But this leads to [Resource Allocation](https://en.wikipedia.org/wiki/Resource_allocation) and **Contention** around use of the scarce resource of `Agent 2`'s attention. (Both [Coordination Risk](Coordination-Risk.md) issues we met earlier.)  

### Some Real-Life Examples

This sets a lower bound on [Coordination Risk](Coordination-Risk.md):  we _can't_ get rid of it completely in a software system, -or- a system on any other scale. Fundamentally, coordination problems are inescapable at some level.  The best we can do is mitigate it by agreeing on protocols and doing lots of communication.   

Let's look at some real-life examples of how this manifests in software.

#### ZooKeeper

First, [ZooKeeper](https://zookeeper.apache.org) is an Open-Source datastore, which is used in building distributed systems (like the one above) and ensuring things like configuration information are consistent across all agents.  

This _seems_ trivial, but it quickly gets out-of-hand:  what happens if only some of the agents receive the new information? What happens if a datacentre gets disconnected while the update is happening?  There are lots of edge-cases.  

ZooKeeper handles this by communicating inter-agent with its own protocol.  It elects a **master agent** (via **GII**-style voting), turning it into an **AI**-style team.  If the master is lost for some reason, a new leader is elected.  _Writes_ are then coordinated via the **master agent** who makes sure that a _majority of agents_ have received and stored the configuration change before telling the user that the transaction is complete.  Therefore, ZooKeeper is a `CP` system.  

#### Git

Second, [Git](https://en.wikipedia.org/wiki/Git) is a (mainly) write-only ledger of source changes.  However, as we already discussed above, where different agents make incompatible changes, someone has to decide how to resolve the conflicts so that we have a single source of truth.  

The [Coordination Risk](Coordination-Risk.md) just _doesn't go away_.  

Since multiple users can make all the changes they like locally, and merge them later, Git is an `AP` system where everyone's opinion counts (**GII**):  individual users may have _wildly_ different ideas about what the source looks like until the merge is complete.

#### Bitcoin

Finally, [Bitcoin (BTC)](https://en.wikipedia.org/wiki/Bitcoin) is a write-only [distributed ledger](https://en.wikipedia.org/wiki/Distributed_ledger), where agents _compete_ to mine BTC (a **UI** style organisation), but also at the same time record transactions on the ledger.  BTC is also `AP`, in a similar way to Git.  But new changes can only be appended if you have the latest version of the ledger.  If you append to an out-of-date ledger, your work will be lost.  

Because it's based on outright competition, if someone beats you to completing a mining task, then your work is wasted.  So, there is  _huge_ [Coordination Risk](Coordination-Risk.md).

For this reason, BTC agents [coordinate](Coordination-Risk.md) into [mining consortia](https://en.bitcoin.it/wiki/Comparison_of_mining_pools), so they can avoid working on the same tasks at the same time, turning it into a **CI**-type organisation.  

This in itself is a problem because the whole _point_ of BTC is that it's competitive and no one entity has control.  So, mining pools  tend to stop growing before they reach 50% of the BTC network's processing power.  Taking control would be [politically disastrous](https://www.reddit.com/r/Bitcoin/comments/5fe9vz/in_the_last_24hrs_three_mining_pools_have_control/) and confidence in the currency (such as there is) would likely be lost.

## Communication Is For Coordination

CAP theory gives us a fundamental limit on how much [Coordination Risk](Coordination-Risk.md) we can mitigate.  We've looked at different organisational structures used to manage [Coordination Risk](Coordination-Risk.md) within teams of people, organisations or living organisms, so it's the case in software.   

At the start of this section, we questioned whether [Coordination Risk](Coordination-Risk.md) was just another type of [Communication Risk](Communication-Risk.md).  However, it should be clear after looking at the examples of competition, cellular life and Vroom and Yetton's Model that this is exactly _backwards_.  

- Most single-celled life has no need for communication: it simply competes for the available resources.  If it lacks anything it needs, it dies.  
- There are _no_ lines of communication on the **UI** decision-type.  It's only when we want to avoid competition, by sharing resources and working towards common goals that we need to communicate.  
- Therefore, the whole point of communication _is for coordination_.  

In the next section, [Map And Territory Risk](Map-And-Territory-Risk.md), we're going to look at some new ways in which systems can fail, despite their attempts to coordinate.
 
 