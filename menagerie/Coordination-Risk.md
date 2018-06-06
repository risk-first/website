**Coordination Risk** is the risk that, despite a group of people (or processes) having the same [Goal In Mind]() they can fail to coordinate on a way to meet this goal and end up making things worse.  **Coordination Risk** is embodied in the phrase "Too Many Cooks Spoil The Broth":  more people, opinions or actors often make results worse.

In this section, we're going to work on the assumption that everyone has a common [Goal](), but in reality, people often have their own agendas.  We'll come to that in the section on [Agency Risk](Agency-Risk) later.

## More Communication Risk?

You might think that this is just another type of [Communication Risk](Communication-Risk) problem, and that's often a part of it, but even with synchronized [Internal Models](Internal-Model), coordination risk can occur.  Imagine the example of people all trying to madly leave a burning building.  They all have the same information (the building is on fire).  If they coordinate, and leave in an orderly fashion, they might all get out.  If they don't, and there's a scramble for the door, more people might die.

But generally, [Coordination Risk]() occurs most commonly where people have different ideas about how to achieve a goal, and they have different ideas because they have different evaluations of the [Attendant Risk](Risk).  As we saw in the section on [Communication Risk](Communication-Risk), we can only hope to synchronize [Internal Models]() if there are high-bandwidth [Channels]() available for communication.  

## Problems Of Coordination

Here are some classic problems of coordination:

1. **Merging Data**.  If you are familiar with the source code control system, [git], you will know that this is a _distributed_ version control system.  That means that two or more people can make source changes at the same time, completely unconnected to one another.  This means that at some later time, [git] then has to merge changes together.  Git is very good at doing this automatically, but sometimes, different people can independently change the same lines of code and these will have to be merged manually.  In this case, a human arbitrator "resolves" the difference, either by combining the two changes or picking a winner.

2. **Consensus**.  Making group decisions (as in elections) is often decided by votes.  But having a vote is a coordination issue:  
  - How long do you provide for the vote?  
  - What do you do about absentees?  
  - What if people change their minds in the light of new information?
  
3. **Factions**.  Sometimes, it's hard to coordinate large groups at the same time, and "factions" can occur.  That the world isn't a single big country is probably partly a testament to this - organising on such a huge scale becomes self-defeating, and so instead at some level we end up with competition instead of coordination.   We can also see this in distributed systems, with the "split brain" problem.   This is where a network of processes becomes disconnected (usually due to a network failure between data centers), and you end up with two, smaller networks.  We'll address in more depth later.

4.  **Resource Allocation**:  Ensuring that the right people are doing the right work, or the right resources are given to the right people is a coordination issue.  On a grand scale, we have Logistics tbd, and ensuring that packages get delivered around the world in good time.  On a small scale, the office's _room booking system_ solves the coordination issue of who gets a meeting room using a first-come-first-served booking algorithm.

5. **Deadlock**:  Deadlock refers to a situation where, in an environment where multiple parallel processes are running, the processing stops and no-one can make progress because the resources each process needs are being reserved by another process.  This is a specific issue in **Resource Allocation**, but it's one we're familiar with in the computer science industry.  Compare with [Gridlock], where traffic can't move because other traffic is occupying the space it wants to move to already. 

6.  **Race Conditions**:  A race condition is where tbd

The basic problem of [Coordination Risk] is _competition_.  Sometimes, competition is desireable (such as in sports and in markets), but sometimes competition is a waste and cooperation would be more efficient. 

## Team Decision Making

Within a team, **Coordination Risk** is at it's core about resolving [Internal Model]() conflicts in order that everyone can agree on a [Goal In Mind] and cooperate on getting it done.  

Therefore, **Coordination Risk** is worse on projects with more members, and worse in organizations with more staff.  If you are engaged in a solo project, do you suffer from **Coordination Risk** at all?  Maybe:  sometimes, you can feel "conflicted" about the best way to solve a problem.  And weirdly, usually _not thinking about it_ helps.  Sleeping too.  (Rich Hickey calls this "[Hammock Based Development]()").  This is probably because, unbeknownst to you, your subconscious is furiously communicating internally, trying to resolve these conflicts itself, and will let you know when it's come to a resolution.  

[Vroom and Yetton]() introduced a model of group decision making which looks something like this:

![Vroom And Yetton Decision Making Styles.  "d" indicates authority in making a decision.  Thin lines with arrow-heads show information flow, whilst thick lines show _opinions_ being passed around.](images/kite9/vroom-yetton.png)

In their original formulation, Vroom and Yetton introduced five different ways of making decisions as a team, which are summarised in the table below (AI, AII, CI, CII, GII).  To this, I have added a sixth (UI), which is the _uncoordinated_ option, where everyone competes.  

|Type       |People Involved In Decision   |Opinions         |Channels Of Communication    |Coordination Risk            |Description
|-----------|------------------------------|-----------------|-----------------------------|-----------------------------|----------
|UI         |1                             |1                |0                            |Competition                  |_No Coordination_
|AI         |1                             |1                |s                            |Maximum [Coordination Risk]  |Autocratic, top-down
|AII        |1                             |1                |s + i                        |                             |Autocratic, with information flow up.
|CI         |1                             |1 + r            |s + i + r                    |                             |Individual Consultations
|CII        |1                             |1 + r            |s + i + r<sup>2</sup>        |                             |Group Consultation
|GII        |r                             |1 + r            |s + i + r<sup>2</sup>        |Minimum [Coordination Risk]  |Group Consultation with voting

At the top, you have the _least_ consultative styles, and at the bottom, the _most_.   At the top, decisions are made with just the leader's [Internal Model]() but moving down, the [Internal Models]() of the rest of the team are increasingly brought into play.  

The decisions at the top are faster, but don't do much for mitigating **Coordination Risk**.  The ones below take longer, (incurring [Schedule Risk](Schedule-Risk)) but mitigate more **Coordination Risk**.   Group decision-making inevitably involves everyone _learning_, and improving their [Internal Models].  

The trick is to be able to tell which approach is suitable at which time.   Everyone is expected to make decisions _within their realm of expertise_: you can't have developers continually calling meetings to discuss whether they should be using an [Abstract Factory]() or a [Factory Method], this would waste time.  The critical question is therefore, "what's the biggest risk?"
 - Is the **Coordination Risk** greater?   Are we going to suffer [Dead End Risk](Complexity-Risk) if the decision is made wrongly?  What if people don't agree with it?  Poor leadership has an impact on [Morale](Agency-Risk) too.  
 - Is the **Schedule Risk** greater?  If you have a 1-hour meeting with eight people to decide a decision, that's _one man day_ gone right there:  group decision making is _expensive_.  
 
Hopefully, this model shows how _organisation_ can reduce [Coordination Risk].  But, to make this work, we need more _communication_, and this has attendant complexity and time costs.  So, we can draw this diagram of our move on the [Risk Landscape]:

![Coordination Risk traded for Complexity Risk, Schedule Risk and Communication Risk](images/kite9/coordination-1.png)

In a lot of cases, it's better to just suck it up and compete, but 
 
## In Living Organisms

[Vroom and Yetton's] organisational style isn't relevant to just teams of people.  We can see it in the natural world too.  _The majority_ of cellular life on earth (by weight) is [single celled organisms], but the existence of _humans_ (to pick a single example) demonstrates that sometimes, it's better to take the trade

survival of the fittest
 
organisations 
 
## Large Organisations
 
 
 
_Less_ consultative decision making styles are more appropriate then when we don't have the luxury of high-bandwidth channels for discussion, or when the number of parties rises above a room-full of people.   As we saw in the [Complexity Risk] section, hierarchies are an excellent way of economizing on number of different communication channels, and we use these frequently when there are lots of parties to coordinate.

In large organisations, teams are created and leaders chosen for those teams precisely to mitigate [Coordination Risk].  We're all familiar with this: control of the team is ceded to the leader, who takes on the role of 'handing down' direction from above, but also 'reporting up' issues that cannot be resolved within the team.   

tbd diagram of this.

By adopting this model, we reduce [Complexity], which 





  

Large Organisations


 
## Staff Risk

If **Coordination Risk** is about trying to mitigate differences in [Internal Models](Internal-Model), then it's worth considering how varied people's models can be:
 - Different skill levels
 - Different experiences
 - Expertise in different areas
 - Preferences
 - Personalities
 
The job of harmonzing this on a project would seem to fall to the team leader, but actually people are self-organising to some extent.  This process is called [Team Development](), after [Tuckman](), and can be encouraged with orthogonal practices such as [Team Building exercises]() (generally, submitting everyone to extreme experiences in order to bond them together).  

With enough communication bandwidth and entente, a team motivated will self-organise code reviews, information exchange and improve their practices.  But **Staff Risks** sometimes cannot be resolved without escalation:

 - People leave, taking their [Internal Models]() and expertise with them [Key Man Risk]().
 - People often require external training, to understand new tools and techniques [Learning-Curve Risk](Communciation-Risk)
 - People can get protective about their knowledge in order to protect their jobs [Agency Risk](Agency-Risk). 
 - Where there are mixed ability levels, senior developers might not help juniors as it "slows them down"
 - People don't get on. 
 
... and so on.

Experiments showed that rather than t


### With Processes 
 
Almost the same model can be used with software processes.  
 
tbd:  use bitcoin as an example here. 

## Specialization / Abstraction Risk

One common way groups and larger organizations aim to mitigate **Coordination Risk** is via [Abstraction](Communication-Risk):  teams and organizations can be arranged along functional lines, with _interfaces_ between their different parts.  This means the different functions can _use_ each other without _understanding_ each other.  

On a team level, this might mean that you have one developer doing "UI", another working on "billing" and so on.  In a larger organisation you might have a "marketing" team or "accounts" team, or divisions by product.

As we saw before [Abstraction brings it's own risks](Communication-Risk).  A key one being that if team members are specialized, you can end up with "bottlenecks" in an organisation (see [Critical Chain](Analysis)).  This is covered in more detail in the [Dependency Risk](Dependency-Risk) section.

Bottlenecks in one part of a team mean that other members will be under-utilised.  This is the trade-off between **Fungibility** (people are jack-of-all-trades) and **Specialization** (people understand one small area well).   Specialism pays off except in highly dynamic situations, where it becomes necessary for people to re-skill, with attendant [Learning Curve Risk](Communication-Risk).  But software is _often_ highly dynamic:  [Extreme Programming]() avoids specialization with it's insistence on [Pair Programming](), for example.

Specialization is a type of complexity too:  a homogeneous team of people presents fewer [Scheduling](Schedule-Risk) problems, and 

Another advantage to specialization is that people have domains of responsibility, which makes the **Decision Making** approach easier to choose.   Individuals and teams generally know when a decision can't be made at their level, and that they need to escalate. 

CAP theory

hierarchy and parallelism - depth first search vs concurrent


## General Problems In Coordination

 - Consensus 
 - Node Failure
 - Leadership
 - Resource Allocation
 - Split Brain / Geographic Risk
 - Deadlock / Race Conditions
 
 