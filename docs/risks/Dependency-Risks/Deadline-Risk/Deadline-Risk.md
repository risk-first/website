---
title: Deadline Risk
description: The risk of creating a dependency around a point in time.

slug: /risks/Deadline-Risk
featured: 
  class: c
  element: '<risk class="deadline" />'
sidebar_position: 8
tags:
 - Deadline Risk
 - Risks
tweet: yes
part_of: Dependency Risk
---

<RiskIntro fm={frontMatter} />

Deadline Risk is created by the need for events to occur at specific times.

We rely on events occurring all the time in our lives, and event dependencies are simple to express: usually, a _time_ and a _place_.   For example:

- "The bus to work leaves at 7:30am" or 
- "I can't start shopping until the supermarket opens at 9am".

In the first example, you can't _start_ something until a particular event happens.  In the latter example, you must _be ready_ for an event at a particular time.

Having an event occur in a fixed time and place reduces other kinds of risk:

- By taking the bus, we are mitigating our own [Schedule Risk](/tags/Schedule-Risk):  we're (hopefully) reducing the amount of time we're going to spend on the activity of getting to work.  It's not entirely necessary to even take the bus:  you could walk, or go by another form of transport.  But, effectively, this just swaps one dependency for another:  if you walk, this might well take longer and use more energy, so you're just picking up [Schedule Risk](/tags/Schedule-Risk) in another way.
- Events are a mitigation for [Coordination Risk](/tags/Coordination-Risk): a bus needn't necessarily _have_ a fixed timetable. It could wait for each passenger until they turned up, and then go.  (A bit like ride-sharing works).  This would be a total disaster from a [Coordination Risk](/tags/Coordination-Risk) perspective, as one person could cause everyone else to be really really late.  
-  If you drive, you have a dependency on your car instead.  So, there is often an _opportunity cost_ with dependencies.  Using the bus might be a cheaper way to travel, so you're picking up less [Fuding Risk](/tags/Funding-Risk) by using it.


## Worked Example 1

Your company is launching a new software product, currently in development.  At the point of launch, there will be a launch party, potential customers will be shown presentations and press will be invited to generate some media buzz.  But the company is low on funds and needs and can't wait for development to complete to start organising this event. 
 
![Deadline Risk](/img/generated/risks/posters/deadline-risk.svg)

Therefore, they decide on a date for the event, telling the development team that they must complete before it and telling the marketing team that the launch party must be organised for that day.  This adds [Deadline Risk](/tags/Deadline-Risk) to both those teams.

## Worked Example 2

The data processing team needs a new account report to be ready at the start of business every day, but the report takes a long time to run and relies on inputs from other departments.  The IT team have to decide what time to start the process running:

![Deadline Risk](/img/generated/risks/posters/deadline-risk2.svg)

 - The _earlier_ they start the process, the more [Deadline Risk](/tags/Deadline-Risk) they place on the systems providing the inputs.
 - The _later_ they start the process, the more [Deadline Risk](/tags/Deadline-Risk) the account reporting process faces to meet the start-of-business deadline.
 
## Deadline Risk and Schedule Risk

[Schedule Risk](/tags/Schedule-Risk) and [Deadline Risk](/tags/Deadline-Risk) are clearly related: they both refer to the risk of running out of time.  However, the _risk profile_ of each is very different:

 - [Schedule Risk](/tags/Schedule-Risk) is _continuous_, like money.  i.e. you want to waste as little of it as possible.  Every extra day you take compounds [Schedule Risk](/tags/Schedule-Risk) additively. A day wasted at the start of the project is much the same as a day wasted at the end.
 - [Deadline Risk](/tags/Deadline-Risk) is _binary_.  The impact of [Deadline Risk](/tags/Deadline-Risk) is either zero (you make it in time) or one (you are late and miss the flight).  You don't particularly get a reward for being early.
 
So, these are two separate concepts, both useful in software development and other fields.   Next up, something more specific: [Software Dependency Risk](/tags/Software-Dependency-Risk).
 
## Example Threats

### 1. Resource Constraints

**Threat**: Insufficient staff or unplanned illness can lead to people missing deadlines.

**Threat**: Unplanned outages, lack of bandwidth, disk or CPU resources can lead to software systems missing deadlines.

### 2. Change In Scope

**Threat**: Changes to existing requirements or realisations about new requirements risk deadlines - reducing this threat is a key insight of [Agile Software Development](/tags/Agile).
 
### 3. Upstream Dependencies

**Threat**:  The less reliable [Reliability Risk](/tags/Reliability-Risk) your dependencies are, the more likely you are to risk your deadlines.

:::tip Anecdote Corner

In July 2003, the second Tomb Raider film, "Lara Croft: Tomb Raider - The Cradle of Life" was being released.Eidos, the publishers of Tomb Raider games put pressure on their developers, Core Design, to release ["Tomb Raider- Angel of Darkness"](https://en.wikipedia.org/wiki/Tomb_Raider:_The_Angel_of_Darkness#Release) to tie in with this. Core Design met the deadline but the game buggy, badly received and regarded as a poor sequel despite having some interesting ideas.  Following this, Eidos transferred production of the franchise to a new developer.

For a software-based example, we can turn to the [Mars Pathfinder mission (1997)](https://en.wikipedia.org/wiki/Mars_Pathfinder#On-board_computer).  The mission was jeopardised by a long-running communications task which had higher priority than a bus management task.  If the communication task took too long, the lander computer reset itself.  This was debugged and fixed remotely by engineers on Earth.

:::
