**Coordination Risk** is the risk that, despite a group of people (or processes) having the same [Goal In Mind]() they can fail to coordinate on a way to meet this goal and end up making things worse.  **Coordination Risk** is embodied in the phrase "Too Many Cooks Spoil The Broth":  more people, opinions or actors often make results worse.

In this section, we're going to work on the assumption that everyone has a common [Goal](), but in reality, people often have their own agendas.  We'll come to that in the section on [Agency Risk](Agency-Risk) later.

## More Communication Risk?

You might think that this is just another type of [Communication Risk](Communication-Risk) problem, and that's often a part of it, but even with synchronized [Internal Models](Internal-Model), coordination risk can occur.  Imagine the example of people all trying to madly leave a burning building.  They all have the same information (the building is on fire).  If they coordinate, and leave in an orderly fashion, they might all get out.  If they don't, and there's a scramble for the door, more people might die.

Alternatively, even with a cluster of stateless server processes, some coordination is required to decide which server processes which request. 

But generally, [Coordination Risk]() occurs most commonly where people have different ideas about how to achieve a goal, and they have different ideas because they have different evaluations of the [Attendant Risk](Risk).  As we saw in the section on [Communication Risk](Communication-Risk), we can only hope to synchronize [Internal Models]() if there are high-bandwidth [Channels]() available for communication.  

## Decision Making

So **Coordination Risk** is worse on projects with more members, and worse in organizations with more staff.  If you are engaged in a solo project, do you suffer from **Coordination Risk** at all?  Maybe:  sometimes, you can feel "conflicted" about the best way to solve a problem.  And weirdly, usually _not thinking about it_ helps.  Sleeping too.  (Rich Hickey calls this "[Hammock Based Development]()").  This is probably because, unbeknownst to you, your subconscious is furiously communicating internally, trying to resolve these conflicts itself, and will let you know when it's come to a resolution.  

So, **Coordination Risk** is at it's core about resolving [Internal Model]() conflicts, and arriving at consensus.

[Vroom and Yetton]() introduced a model of group decision making which looks something like this:

!image tbd

On the left, you have the _least_ consultative styles, and on the right, the _most_.   On the left, decisions are made with just the leader's [Internal Model]() but moving right, the [Internal Models]() of the rest of the team are increasingly brought into play.  

The decisions on the left are faster, but don't do much for mitigating **Coordination Risk**.  The ones on the right take longer, (incurring [Schedule Risk](Schedule-Risk)) but mitigate more **Coordination Risk**.   Group decision-making inevitably involves everyone _learning_, and improving their [Internal Models]().

The trick is to be able to tell which approach is suitable at which time.   Everyone is expected to make decisions _within their realm of expertise_: you can't have developers continually calling meetings to discuss whether they should be using an [Abstract Factory]() or a [Factory Method], this would waste time.  The critical question is therefore, "what's the biggest risk?"
 - Is the **Coordination Risk** greater?   Are we going to suffer [Dead End Risk](Complexity-Risk) if the decision is made wrongly?  What if people don't agree with it?  Poor leadership has an impact on [Morale](Agency-Risk) too.
 - Is the **Schedule Risk** greater?  If you have a 1-hour meeting with eight people to decide a decision, that's _one man day_ gone right there:  group decision making is _expensive_.
 
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

Resource Coordination Risk

split brain (left hand right hand)
 
 People change their minds when they have evidence of new information, and quickly forget what they _previously thought_ about things.
 
 geographic risk
 
large organisation risks?
 