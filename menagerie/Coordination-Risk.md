![Draft](images/state/draft.png)

[Coordination Risk](Coordination-Risk) is the risk that, a group of people (or processes), maybe with a similar [Goal In Mind](Goal-In-Mind) they can fail to coordinate on a way to meet this goal and end up making things worse.  [Coordination Risk](Coordination-Risk) is embodied in the phrase "Too Many Cooks Spoil The Broth":  more people, opinions or agents often make results worse.

As in [Agency Risk](Agency-Risk), we are going to use the term _agent_, which refers to anything with [agency](https://github.com/risk-first/website/wiki/Agency-Risk#software-processes-and-teams) in a system to decide it's own fate.  That is, an [Agent](Agency-Risk) has an [Internal Model](Glossary#Internal-Model),  and can [take actions](Glossary#take-action) based on it.  Here, we're going to work on the assumption that the Agents _are_ working towards a common [Goal](Gaol-In-Mind), even though in reality it's not always the case, as we saw in the section on [Agency Risk](Agency-Risk).

 In this section, we'll first build up [A Model Of Coordination Risk](#a-model-of-coordination-risk) and what exactly coordination means and why we do it.  Then, we'll look at some classic [Problems of Coordination](#problems-of-coordination).  Then, we're going to consider Agents at several different levels (because of [Scale Invariance](Risk-Theory#scale-invariance)) .  We'll look at:
 - [Team Decision Making](#team-decision-making)
 - [Living Organisms](#in-living-organisms)
 - [Larger Organisations, and Staff In Them](#large-organisations)
 - and [Software Processes](#in-software-processes)
 
... and we'll consider how [Coordination Risk](Coordination-Risk) is a problem at each scale.

Following this, in the section on [Map And Territory Risk](Map-And-Territory-Risk), we'll look at how, even when [Coordination](Coordination-Risk) issues are solved, we can end up with less-than-optimal results.  

But for now, let's crack on and examine where [Coordination Risk](Coordination-Risk) comes from.

## A Model Of Coordination Risk

![Coordination Risk](images/generated/coordination-risk.png)

Earlier, in [Dependency Risk](Dependency-Risk), we looked at various resources (time, money, people, events etc) and showed how we could [Depend On Them](Dependency-Risk), taking on risk.  Here, however, we're looking at the situation where there is competition for those dependencies ([Scarcity Risk](Dependency-Risk#Scarcity-Risk):   other parties want to use them in a different way.  

### Competition

The basic problem of [Coordination Risk](Coordination-Risk), then, is _competition_.  Sometimes, competition is desireable (such as in sports and in markets), but sometimes competition is a waste and cooperation would be more efficient.   Without coordination, we would deliberately or accidentally compete for the same [Dependencies](Dependency-Risk), which is wasteful.  

Why is this wasteful?  

One argument could come from [Diminishing Returns](https://en.wikipedia.org/wiki/Diminishing_returns), which says that the earlier units of a resource (say, chocolate bars) give you more benefit than later ones.  

We can see this in the graph below.  Let's say A and B compete over a resource, of which there are 5 units available.  For every extra A takes, B loses one.  The X axis shows A's consumption of the resource, so the biggest benefit to A is in the consumption of the first unit. 

![Sharing Resources.  5 units are available, and the X axis shows A's consumption of the resource.  B gets whatever remains.  Total benefit is maximised somewhere in the middle](images/sharing.png)

As you can see, by _sharing_, it's possible that the _total benefit_ is greater than it can be for either individual.  But sharing requires coordination.

Just two things are needed for competition to occur:

 - Individual Agents, trying to achieve [Goals](Glossary#Goal-In-Mind).
 - Scarce Resources, which the Agents want to use as [Dependencies](Dependency-Risk).
 
![A model of competition:  scarce resources, and individual agents competing for them.](images/kite9/coordination-2.png)

### Coordination via Communication

The only way that the Agents can move away from competition towards coordination is via [Communication](Communication-Risk), and this is where their problems begin.  

You might think, therefore, that this is just another type of [Communication Risk](Communication-Risk) problem, and that's often a part of it, but even with synchronized [Internal Models](Glossary#Internal-Model), coordination risk can occur.  Imagine the example of people all trying to madly leave a burning building.  They all have the same information (the building is on fire).  If they coordinate, and leave in an orderly fashion, they might all get out.  If they don't, and there's a scramble for the door, more people might die.

But commonly, [Coordination Risk](Coordination-Risk) occurs where people have different ideas about how to achieve a [goal](Glossary#Goal-In-Mind), and they have different ideas because they have different evaluations of the [Attendant Risk](Glossary#attendant-risk).  As we saw in the section on [Communication Risk](Communication-Risk), we can only hope to synchronize [Internal Models](Glossary#Internal-Model) if there are high-bandwidth [Channels]() available for communication. 

## Problems Of Coordination

Here are some classic problems of coordination, none of which can be addressed without good communication:

1. **Merging Data**.  If you are familiar with the source code control system, [Git](https://en.wikipedia.org/wiki/Git), you will know that this is a _distributed_ version control system.  That means that two or more people can propose changes to the same files without knowing about each other.  This means that at some later time, [Git](https://en.wikipedia.org/wiki/Git) then has to merge (or reconcile) these changes together.  Git is very good at doing this automatically, but sometimes, different people can independently change the same lines of code and these will have to be merged manually.  In this case, a human arbitrator "resolves" the difference, either by combining the two changes or picking a winner.

2. **Consensus**.  Making group decisions (as in elections) is often decided by votes.  But having a vote is a coordination issue:  
  - How long do you provide for the vote?  
  - What do you do about absentees?  
  - What if people change their minds in the light of new information?
  - How do you ensure everyone has enough information to make a good decision?
  
3. **Factions**.  Sometimes, it's hard to coordinate large groups at the same time, and "factions" can occur.  That the world isn't a single big country is probably partly a testament to this.  Organizing on huge scales becomes self-defeating, and so instead at some level we end up with competition instead of coordination.   We can also see this in distributed systems, with the ["split brain"](https://en.wikipedia.org/wiki/Split-brain_(computing)) problem.   This is where a network of processes becomes disconnected (usually due to a network failure between data centers), and you end up with two, smaller networks.  We'll address in more depth later.

4. [Resource Allocation](https://en.wikipedia.org/wiki/Race_condition):  Ensuring that the right people are doing the right work, or the right resources are given to the right people is a coordination issue.  On a grand scale, we have [Logistics](https://en.wikipedia.org/wiki/Logistics), and [Economic Systems](https://en.wikipedia.org/wiki/Economic_system).  On a small scale, the office's _room booking system_ solves the coordination issue of who gets a meeting room using a first-come-first-served booking algorithm.

5. [Deadlock](https://en.wikipedia.org/wiki/Deadlock):  Deadlock refers to a situation where, in an environment where multiple parallel processes are running, the processing stops and no-one can make progress because the resources each process needs are being reserved by another process.  This is a specific issue in **Resource Allocation**, but it's one we're familiar with in the computer science industry.  Compare with [Gridlock](https://en.wikipedia.org/wiki/Gridlock), where traffic can't move because other traffic is occupying the space it wants to move to already. 

6.  [Race Conditions](https://en.wikipedia.org/wiki/Race_condition):  A race condition is where we can't be sure of the result of a calculation, because it is dependent on the ordering of events within a system.  For example, two separate threads writing the same memory at the same time (one losing the work of the other) is a race.  

7.  **Contention**: Where there is [Scarcity Risk](Dependency-Risk#Scarcity-Risk) for a [Dependency](Dependency-Risk), we might want to make sure that everyone gets fair use of it, by taking turns, booking, queueing and so on.  As we saw in [Scarcity Risk](Dependency-Risk#scarcity-risk), sometimes, this is handled for us by the [Dependency](Dependency-Risk) itself.  However if it isn't, it's the _users_ of the dependency who'll need to coordinate to use the resource fairly.

## Team Decision Making

Within a team, [Coordination Risk](Coordination-Risk) is at it's core about resolving [Internal Model](Glossary#Internal-Model) conflicts in order that everyone can agree on a [Goal In Mind](Glossary#Goal-In-Mind) and cooperate on getting it done.  

Therefore, [Coordination Risk](Coordination-Risk) is worse on projects with more members, and worse in organizations with more staff.  If you are engaged in a solo project, do you suffer from [Coordination Risk](Coordination-Risk) at all?  Maybe:  sometimes, you can feel "conflicted" about the best way to solve a problem.  And weirdly, usually _not thinking about it_ helps.  Sleeping too.  (Rich Hickey calls this "[Hammock Driven Development](https://www.youtube.com/watch?v=f84n5oFoZBc)").  This is probably because, unbeknownst to you, your subconscious is furiously communicating internally, trying to resolve these conflicts itself, and will let you know when it's come to a resolution.  

[Vroom and Yetton](https://en.wikipedia.org/wiki/Vroom–Yetton_decision_model) introduced a model of group decision making which delineated five different styles of decision making within a team. These are summarised in the table below (**AI, AII, CI, CII, GII**).  To this, I have added a sixth (**UI**), which is the _uncoordinated_ option, where everyone competes.   In the accompanying diagram I have adopted the following convention:
 - Thin lines with arrow-heads show a flow of _information_, either one-way or two-way.
 - Thick lines show a flow of _opinion_.
 - Squares with "d" are decision makers, whereas circles don't have a part in the decision.

![Vroom And Yetton Decision Making Styles.  "d" indicates authority in making a decision.  Thin lines with arrow-heads show information flow, whilst thick lines show _opinions_ being passed around.](images/kite9/vroom-yetton.png)

|Type           |People Involved In Decision|Opinions         |Channels Of Communication                             |Coordination Risk                |Description
|---------------|---------------------------|-----------------|-----------------------------------                   |---------------------------------|----------
|**UI**         |1                          |1                |0                                                     |Competition                      |_No Coordination_
|**AI**         |1                          |1                |**s** (One message to each **subordinate**)           |Maximum [Coordination Risk][co1] |Autocratic, top-down
|**AII**        |1                          |1                |2 x **s** (Messages from/to each **subordinate**)     |                                 |Autocratic, with information flow up.
|**CI**         |1                          |1 + **s**        |> 2 x **s**                                           |                                 |Individual Consultations
|**CII**        |1                          |1 + **s**        |> **s**<sup>2</sup>                                   |                                 |Group Consultation
|**GII**        |1 + **s**                  |1 + **s**        |> **s**<sup>2</sup>                                   |Maximum [Communication Risk][co2], [Schedule Risk][co3]|Group Consultation with voting

[co1]: (Coordination-Risk)
[co2]: (Communication-Risk)
[co3]: (Schedule-Risk)

At the top, you have the _least_ consultative styles, and at the bottom, the _most_.   At the top, decisions are made with just the leader's [Internal Model](Glossary#Internal-Model) but moving down, the [Internal Models](Glossary#Internal-Model) of the rest of the team are increasingly brought into play.  

The decisions at the top are faster, but don't do much for mitigating **Coordination Risk**.  The ones below take longer, (incurring [Schedule Risk](Schedule-Risk)) but mitigate more **Coordination Risk**.   Group decision-making inevitably involves everyone _learning_, and improving their [Internal Models](Glossary#Internal-Model).   

The trick is to be able to tell which approach is suitable at which time.   Everyone is expected to make decisions _within their realm of expertise_: you can't have developers continually calling meetings to discuss whether they should be using an [Abstract Factory]() or a [Factory Method](), this would waste time.  The critical question is therefore, "what's the biggest risk?"
 - Is the **Coordination Risk** greater?   Are we going to suffer [Dead End Risk](Complexity-Risk) if the decision is made wrongly?  What if people don't agree with it?  Poor leadership has an impact on [Morale](Agency-Risk) too.  
 - Is the **Schedule Risk** greater?  If you have a 1-hour meeting with eight people to decide a decision, that's _one man day_ gone right there:  group decision making is _expensive_.  
 
Hopefully, this model shows how _organisation_ can reduce [Coordination Risk](Coordination-Risk).  But, to make this work, we need more _communication_, and this has attendant complexity and time costs.  So, we can draw this diagram of our move on the [Risk Landscape](Glossary#Risk-Landscape):

![Coordination Risk traded for Complexity Risk, Schedule Risk and Communication Risk](images/kite9/coordination-1.png)
 
## In Living Organisms

[Vroom and Yetton's]() organisational style isn't relevant to just teams of people.  We can see it in the natural world too.  Although _the majority_ of cellular life on earth (by weight) is [single celled organisms](http://www.stephenjaygould.org/library/gould_bacteria.html), the existence of _humans_ (to pick a single example) demonstrates that sometimes it's better to try to mitigate [Coordination Risk](Coordination-Risk) and work as a team, accepting the [Complexity Risk](Complexity-Risk) and [Communication Risk](Communication-Risk) this entails.  As soon as cells start working together, they either need to pass _resources_ between them, or _control_ and _feedback_.  In the human body, we have various [systems](https://en.wikipedia.org/wiki/List_of_systems_of_the_human_body):

 - The [Respiratory System](https://en.wikipedia.org/wiki/Respiratory_system) which is responsible for ensuring that [Red Blood Cells](https://en.wikipedia.org/wiki/Red_blood_cell) are replenished with Oxygen, as well as disposing of Carbon Dioxide.  
 - The [Digestive System](https://en.wikipedia.org/wiki/Human_digestive_system) which is responsible for extracting nutrition from food and putting them in our [Blood Plasma](https://en.wikipedia.org/wiki/Blood_plasma).
 - The [Circulatory System](https://en.wikipedia.org/wiki/Circulatory_system) which is responsible for moving blood cells to all the rest of the body.
 - The [Nervous System](https://en.wikipedia.org/wiki/Nervous_system) which is responsible for collecting information from all the parts of the body, dealing with it in the [Brain](https://en.wikipedia.org/wiki/Brain) and issuing commands.
 - The [Motor System](https://en.wikipedia.org/wiki/Motor_system) which contains muscles and bones, and allows us to move about.

... and many others.  Each of these systems contains organs, which contain tissues, which contain cells of different types.  (Even cells are complex systems containing multiple different, communicating sub-systems.)  There is huge [Complexity Risk](Complexity-Risk) here:  the entire organism fails if one of these systems fail (they are [Single Points Of Failure](https://en.wikipedia.org/wiki/Single_point_of_failure), although we can get by despite the failure of one lung or one leg say).  

![Hierarchy of Function in the Human Body](images/kite9/coordination-organism.png)

[Some argue](https://www.quora.com/What-is-the-most-complex-object-in-the-universe) that the human nervous system is the most complex known artifact in the universe: there is huge attendant [Communication Risk](Communication-Risk) to running the human body.  But, given the success of humanity as a species, you must conclude that these steps on the evolutionary [Risk Landscape](Glossary#Risk-Landscape) have benefitted us in our ecological niche.

The key observation from looking at biology is this:  most of the cells in the human body _don't get a vote_.   Muscles in the motor system have an **AI** or **AII** relationship with the brain - they do what they are told, but there are often nerves to report pain back.   The only place where **CII** or **GII** _could_ occur is in our brains, when we try to make a decision and weigh up the pros and cons.  

This means that there is a deal:  _most_ of the cells in our body accede control of their destiny to "the system".  Living within the system of the human body is a better option than going it alone.  Occasionally, due to mutation, we can end up with [Cancer](https://en.wikipedia.org/wiki/Cancer), which is where one cell genetically "forgets" its purpose in the whole system and goes back to selfish individual self-replication (**UI**).  We have [White Blood Cells](https://en.wikipedia.org/wiki/White_blood_cell) in the body to shut down this kind of behaviour and try to kill the rogue cells.  In the same way, society has a police force to stop undesireable behaviour amongst its citizens. 
 
## Large Organisations

Working in a large organisation often feels like being a cell in a larger organism.  Cells live and die, but the organism goes on.  In the same way, workers come and go from a large company but the organisation goes on.  By working in an organisation, we give up self-control and competition and accept **AI** and **AII** power structures above us, but we trust that there is symbiotic value creation on both sides of the employment deal.
 
_Less_ consultative decision making styles are more appropriate then when we don't have the luxury of high-bandwidth channels for discussion, or when the number of parties rises above a room-full of people.   As you can see from the table above, for **CII** and **GII** decision-making styles, the amount of communication increases non-linearly with the number of participants, so we need something simpler.  As we saw in the [Complexity Risk](Complexity-Risk) section, hierarchies are an excellent way of economizing on number of different communication channels, and we use these frequently when there are lots of parties to coordinate.

![Hierarchy of Function in an Organisation](images/kite9/coordination-organisation.png)

In large organisations, teams are created and leaders chosen for those teams precisely to mitigate [Communication Risk](Communication-Risk).  We're all familiar with this: control of the team is ceded to the leader, who takes on the role of 'handing down' direction from above, but also 'reporting up' issues that cannot be resolved within the team.   In Vroom and Yetton's model, this is moving from a **GII** or **CII** to an **AI** or **AII** style of leadership.  So we end up with a hierarchy of groups, as shown in the diagram.
 
### Staff Risk

Staff in a team are both **Agents** and **Resources** at the same time.  The team [depends](Dependency-Risk) on them for their resource of _labour_, but they're also part of the decision making process of the team, because they have [agency](Agency-Risk) over their own actions.  

Part of [Coordination Risk](Coordination-Risk) is about trying to mitigate differences in [Internal Models](Glossary#Internal-Model). So it's worth considering how varied people's models can be:
 - Different skill levels
 - Different experiences
 - Expertise in different areas
 - Preferences
 - Personalities
 
The job of harmonzing this on a project would seem to fall to the team leader, but actually people are self-organising to some extent.  This process is called [Team Development]():

>  after [Tuckman](), 

They can be encouraged with orthogonal practices such as [Team Building exercises]() (generally, submitting everyone to extreme experiences in order to bond them together).  With enough communication bandwidth and entente, a motivated team will self-organise code reviews, information exchange and improve their practices.  But **Staff Risks** sometimes cannot be resolved without escalation:

 - People leave, taking their [Internal Models](Glossary#Internal-Model) and expertise with them [Key Man Risk](Schedule-Risk#Staff-Risk).
 - People often require external training, to understand new tools and techniques [Learning-Curve Risk](Communiciation-Risk)
 - People can get protective about their knowledge in order to protect their jobs [Agency Risk](Agency-Risk). 
 - Where there are mixed ability levels, senior developers might not help juniors as it "slows them down"
 - People don't get on. 
 
... and so on.

new starters

norming, storming etc.


## In Software Processes

It should be pretty clear that we are applying the [Scale Invariance](Risk-Theory#scale-invariance) rule to [Coordination Risk](Coordination-Risk):  all of the problems we've described as affecting teams, also affect software, although the scale and terrain are different.  Software processes have limited _agency_ - in most cases they follow fixed rules set down by the programmers, rather than self-organising like people can.

As before, in order to face [Coordination Risk](Coordination-Risk) in software, we need multiple Agents all working together, so [Coordination Risks](Coordination-Risk) (such as race conditions or deadlock) only really occurs in multi-threaded software where there is resource competition.  

### CAP Theorem

The [CAP Theorem]() has a lot to say about [Coordination Risk](Coordination-Risk).  Imagine talking to a distributed database, where your request (read or write) can be handled by one of many agents.  

There are three properties we could desire in such a system:

- **Consistency**: Every read receives the most recent value from the last write.
- **Availability**: Every request receives a response.
- **Partition tolerance**: The system can operate despite the isolation (lack of communication with) some of it's agents.

Since _any_ agent can receive the read or write, it's a **GII** decision making system, because all the agents are going to need to coordinate to figure out what the right value is to return for a read, and what the last value written was.

[CAP Theory]() states that this is a [Trilemma]().  That is, you can only have two out of the three properties.   There are plenty of resources on the internet that discuss this in depth, but let's just illustrate with a diagram how this plays out.  In this, the last write (3) was sent to a node which is now _isolated_, and can't be communicated with, due to network failure.  What do you get back?

tbd image

CA:  show how the system wouldn't be partition tolerant if the last write was on an isolated node.
CP:  waits until the isolated node comes back
AP:  you can return some value back, but it won't necessarily be the last one.

This sets an upper bound on [Coordination Risk](Coordination-Risk):  we _can't get rid of it completely in a software system, -or- a system on any other scale.  This explains in part why _countries_ are often created along geographic bounds:    

### Immutability

Immutability (or write-only data structures) are often presented as a solution to many of the problems of multi-agent systems.  After all, if values in the system aren't _changing_, then memory is not a scarce resource, and we avoid [race conditions]().  However, we _still_ have to contend with [Coordination Risk](Coordination-Risk). Let's look at two examples.

First, [BitCoin]() (BTC) is a write-only [distributed ledger](), where agents _compete_ to mine BTC, but also at the same time record transactions on the ledger.  But there is _huge_ [Coordination Risk](Coordination-Risk) in BTC, because it is pretty much outright competition.  If someone beats you to completing a piece of work, then your work is wasted.   For this reason, BTC agents _coordinate_ into [mining consortia](), so they can avoid working on the same problems at the same time.  Nevertheless, the performance of BTC is [highly questionable](), and this is because it is entirely competitive.  In **CAP** terms, BitCoin is tbd.

Second, [git]() is a write-only ledger of source changes.  However, as we already discussed, where different agents make incompatible changes, someone has to decide how to resolve the conflicts so that we have a single source of truth.  The [Coordination Risk](Coordination-Risk) just _doesn't go away_.  Git is an AP system.

### Monitoring

tbd. talk about invisibility risk again.

## Communication Is For Coordination

Earlier in this section, we questioned whether [Coordination Risk](Coordination-Risk) was just another type of [Communication Risk](Communication-Risk).  However, it should be clear after looking at the examples of competition, cellular life and [Vroom and Yetton's Model]() that this is exactly _backwards_:  

- Most single-celled life has no need for communication: it simply competes for the available resources.  If it lacks anything it needs, it dies.  
- There are _no_ lines of communication on the **UI** decision-type.  It's only when we want to avoid competition, by sharing resources and working towards common goals that we needs to communicate.  

The whole point of communication is for coordination.  

In the next section, [Map And Territory Risk](Map-And-Territory-Risk), we're going to look at some new ways in which systems can fail, despite their attempts to coordinate.
 
 