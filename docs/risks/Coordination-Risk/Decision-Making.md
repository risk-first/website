---
title: Decision Making
sidebar_position: 2
slug: /risks/Decision-Making

tags:
  - Coordination Risk
---

Within a team, [Coordination Risk](/tags/Coordination-Risk) is at its core about resolving [Internal Model](/tags/Internal-Model) conflicts in order that everyone can agree on a [Goal](/tags/Goal) and cooperate on getting it done.  Therefore, [Coordination Risk](/tags/Coordination-Risk) is worse on projects with more members, and worse in organisations with more staff.  

As an individual, do you suffer from [Coordination Risk](/tags/Coordination-Risk) at all?  Maybe:  sometimes, you can feel "conflicted" about the best way to solve a problem.  And weirdly, usually _not thinking about it_ helps.  Sleeping too.  (Rich Hickey calls this "[Hammock Driven Development](https://www.youtube.com/watch?v=f84n5oFoZBc)").  This is probably because, unbeknownst to you, your subconscious is furiously communicating internally, trying to resolve these conflicts itself, and will let you know when it has come to a resolution.  

![Vroom And Yetton Decision Making Styles.  "d" indicates authority in making a decision, circles are subordinates.  Thin lines with arrow-heads show information flow, whilst thick lines show _opinions_ being passed around.](/img/generated/risks/coordination/vroom-yetton.svg)

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

At the top, you have the _least_ consultative styles, and at the bottom, the _most_.   At the top, decisions are made with just the leader's [Internal Model](/tags/Internal-Model), but moving down, the [Internal Models](/tags/Internal-Model) of the _subordinates_ are increasingly brought into play.  

The decisions at the top are faster, but don't do much for mitigating [Coordination Risk](/tags/Coordination-Risk).  The ones below take longer (incurring [Schedule Risk](/tags/Schedule-Risk)) but mitigate more [Coordination Risk](/tags/Coordination-Risk).   Group decision-making inevitably involves everyone _learning_ and improving their [Internal Models](/tags/Internal-Model).   

The trick is to be able to tell which approach is suitable at which time.   Everyone is expected to make decisions _within their realm of expertise_: you can't have developers continually calling meetings to discuss whether they should be using an [Abstract Factory](https://en.wikipedia.org/wiki/Abstract_factory_pattern) or a [Factory Method](https://en.wikipedia.org/wiki/Factory_method_pattern): it would waste time.  The critical question is therefore, "what's the biggest risk?"

 - Is the [Coordination Risk](/tags/Coordination-Risk) greater?   Are we going to suffer [Dead End Risk](/tags/Complexity-Risk) if the decision is made wrongly?  What if people don't agree with it?  Poor leadership has an impact on [morale](Human-Agency-Risk#6-morale-failure) too.  
 - Is the [Schedule Risk](/tags/Schedule-Risk) greater?  If you have a 1-hour meeting with eight people to decide a decision, that's _one person day_ gone right there:  group decision making is _expensive_.  
 
So _organisation_ can reduce [Coordination Risk](/tags/Coordination-Risk) but to make this work we need more _communication_, and this has attendant complexity and time costs.  

## In Living Organisms

Vroom and Yetton's organisational model isn't relevant to just teams of people.  We can see it in the natural world too.  Although _the majority_ of cellular life on earth (by weight) is [single celled organisms](http://archive.today/2012.12.05-091021/http://www.stephenjaygould.org/library/gould_bacteria.html), the existence of _humans_ (to pick a single example) demonstrates that sometimes it's better for cells to try to mitigate [Coordination Risk](/tags/Coordination-Risk) and work as a team, accepting the [Complexity Risk](/tags/Complexity-Risk) and [Communication Risk](/tags/Communication-Risk) this entails.  For example, in the human body, we have:

 - **Various [systems](https://en.wikipedia.org/wiki/List_of_systems_of_the_human_body)**: such as the [Respiratory System](https://en.wikipedia.org/wiki/Respiratory_system) or the [Digestive System](https://en.wikipedia.org/wiki/Human_digestive_system).  Each of these systems contains...
 - **Organs**, such as the heart or lungs, which contain..
 - **Tissues**, which contain...
 - **Cells** of different types.  (Even cells are complex systems containing multiple different, communicating sub-systems.)  
 
There is huge attendant [Coordination Risk](/tags/Coordination-Risk) to running a complex multi-cellular system like the human body, but given the success of humanity as a species, you must conclude that these steps on the _evolutionary_ [Risk Landscape](/risks/Risk-Landscape) have benefited us in our ecological niche.

The key observation from looking at biology is this:  most of the cells in the human body _don't get a vote_.   Muscles in the motor system have an **AI** or **AII** relationship with the brain - they do what they are told, but there are often nerves to report pain back.   The only place where **CII** or **GII** _could_ occur is in our brains, when we try to make a decision and weigh up the pros and cons.  

This means that there is a deal:  _most_ of the cells in our body accede control of their destiny to "the system".  Living within the system of the human body is a better option than going it alone as a single-celled organism.  Occasionally, due to mutation, we can end up with [Cancer](https://en.wikipedia.org/wiki/Cancer), which is where one cell genetically "forgets" its purpose in the whole system and goes back to selfish individual self-replication (**UI**).  We have [White Blood Cells](https://en.wikipedia.org/wiki/White_blood_cell) in the body to shut down this kind of behaviour and try to kill the rogue cells.  In the same way, societies have police forces to stop undesirable behaviour amongst their citizens. 
 
## In Large Organisations

Working in a large organisation often feels like being a cell in a larger organism.  Cells live and die and the organism goes on.  Workers come and go from a large company but the organisation goes on.  By working in an organisation, we give up self-control and competition and accept **AI** and **AII** power structures above us, but we trust that there is symbiotic value creation on both sides of the employment deal.
 
_Less_ consultative decision making styles are more appropriate then when we don't have the luxury of high-bandwidth channels for discussion. When the number of parties rises above a room-full of people it's not possible to hear everyone's voice.   As you can see from the table above, for **CII** and **GII** decision-making styles, the amount of communication increases non-linearly with the number of participants, so we need something simpler.  

As we saw in the [Complexity Risk](/tags/Complexity-Risk) section, hierarchies are an excellent way of economising on number of different communication channels, and we use these frequently when there are lots of parties to coordinate.

In large organisations, teams are created and leaders chosen for those teams precisely to mitigate this [Communication Risk](/tags/Communication-Risk).  We're all familiar with this: control of the team is ceded to the leader, who takes on the role of 'handing down' direction from above, but also 'reporting up' issues that cannot be resolved within the team.   In Vroom and Yetton's model, this is moving from a **GII** or **CII** to an **AI** or **AII** style of leadership.  

Clearly, this is just a _model_, it's not set in stone and decision making styles usually change from day-to-day and decision-to-decision.  The same is not true in our software - _rules are rules_.

## Staff As Agents

Staff in a team have a dual nature:  they are **Agents** and **Resources** at the same time.  The team [depends](/tags/Dependency-Risks) on staff for their resource of _labour_, but they're also part of the decision making process of the team, because they have [_agency_](/tags/Agency-Risk) over their own actions.  

Part of [Coordination Risk](/tags/Coordination-Risk) is about trying to mitigate differences in [Internal Models](/tags/Internal-Model). So it's worth considering how varied people's models can be:

 - Different skill levels
 - Different experiences
 - Expertise in different areas
 - Preferences
 - Personalities
 
The job of harmonising this on a project would seem to fall to the team leader, but actually people are self-organising to some extent.  This process is called [Team Development](https://en.wikipedia.org/wiki/Tuckman%27s_stages_of_group_development):

> "The forming–storming–norming–performing model of group development was first proposed by Bruce Tuckman in 1965, who said that these phases are all necessary and inevitable in order for the team to grow, face up to challenges, tackle problems, find solutions, plan work, and deliver results." - [Tuckman's Stages Of Group Development, _Wikipedia_](https://en.wikipedia.org/wiki/Tuckman%27s_stages_of_group_development)

Specifically this describes a process whereby a new group will form and then be required to work together. In the process, they will have many _disputes_.  Ideally, the group will resolve these disputes internally and emerge as a team, with a common [Goal](/tags/Goal).

Since [Coordination](/tags/Coordination-Risk) is about resource allocation, the skills of staff can potentially be looked at as resources to allocate.  This means handling [Coordination Risk](/tags/Coordination-Risk) issues like:

 - People leaving, taking their [Internal Models](/tags/Internal-Model) and expertise with them ([Key Person Risk](/tags/Reliability-Risk)).
 - People requiring external training, to understand new tools and techniques ([Internal Model](/tags/Internal-Model-Risk)).
 - People being protective about their knowledge in order to protect their jobs ([Agency Risk](/tags/Agency-Risk)). 
 
> "As a rough rule, three programmers organised into a team can do only twice the work of a single programmer of the same ability - because of time spent on coordination problems." - [Gerald Wienberg, _The Psychology of Computer Programming_](https://en.wikipedia.org/wiki/Gerald_Weinberg) 
  

## In Software Processes

It should be pretty clear that we are applying our [Scale Invariance](/thinking/Crisis-Mode#invariance-3-scale-invariance) rule to [Coordination Risk](/tags/Coordination-Risk):  all of the problems we've described as affecting teams and organisations also affect software, although the scale and terrain are different.  Software processes have limited _agency_ - in most cases they follow fixed rules set down by the programmers, rather than self-organising like people can (so far).

As before, in order to face [Coordination Risk](/tags/Coordination-Risk) in software, we need multiple agents all working together. [Coordination Risks](/tags/Coordination-Risk) (such as race conditions or deadlock) only really occur where _more than one agent working at the same time_.  This means we are considering _at least_ multi-threaded software, and anything above that (multiple CPUs, servers, data-centres and so on). 


