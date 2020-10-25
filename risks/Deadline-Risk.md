---
title: Deadline Risk
description: Risks due to coordinating via imposed deadlines.
url: https://riskfirst.org/risks/Deadline-Risk

featured: 
  class: bg2
  element: '<risk class="deadline" />'
order: 7
categories:
 - Risks
redirect_from: 
 - /Deadline-Risk
---

# Deadline Risk

Let's examine dependencies on _events_.  

We rely on events occuring all the time in our lives, and event dependencies are simple to express: usually, a _time_ and a _place_.   For example:

- "The bus to work leaves at 7:30am" or 
- "I can't start shopping until the supermarket opens at 9am".

In the first example, you can't _start_ something until a particular event happens.  In the latter example, you must _be ready_ for an event at a particular time.

## Events Mitigate Risk...

Having an event occur in a fixed time and place is [mitigating risk](../thinking/Glossary.md#Mitigated-Risk):

- By taking the bus, we are mitigating our own [Schedule Risk](Scarcity-Risk.md#schedule-risk):  we're (hopefully) reducing the amount of time we're going to spend on the activity of getting to work.  It's not entirely necessary to even take the bus:  you could walk, or go by another form of transport.  But, effectively, this just swaps one dependency for another:  if you walk, this might well take longer and use more energy, so you're just picking up [Schedule Risk](Scarcity-Risk.md#schedule-risk) in another way.
- Events are a mitigation for [Coordination Risk](Coordination-Risk.md): a bus needn't necessarily _have_ a fixed timetable. It could wait for each passenger until they turned up, and then go.  (A bit like ride-sharing works).  This would be a total disaster from a [Coordination Risk](Coordination-Risk.md) perspective, as one person could cause everyone else to be really really late.  
-  If you drive, you have a dependency on your car instead.  So, there is often an _opportunity cost_ with dependencies.  Using the bus might be a cheaper way to travel, so you're picking up less [Fuding Risk](Scarcity-Risk.md#funding-risk) by using it.

## But, Events Lead To Attendant Risk

![Action Diagram showing risks mitigated by having an _event_](/images/generated/risks/deadline/dependency-risk-event.png)

By _deciding to use the bus_ we've [Taken Action](../thinking/Glossary.md#Taking-Action).  By agreeing a _time_ and _place_ for something to happen (creating an _event_, as shown in the diagram above), you're introducing [Deadline Risk](Deadline-Risk.md).  Miss the deadline, and you miss the bus.

As discussed above, _schedules_ (such as bus timetables) exist so that _two or more parties can coordinate_<!-- tweet-end -->, and [Deadline Risk](Deadline-Risk.md) is on _all_ of the parties.  While there's a risk I am late, there's also a risk the bus is late.  I might miss the start of a concert, or the band might keep everyone waiting.

In software development, deadlines are set in order to _coordinate work between teams_.  For example, having a product ready in production at the same time as the marketing campaign starts.  Fixing on an agreed deadline mitigates inter-team [Coordination Risk](Coordination-Risk.md).


## Slack

Each party can mitigate [Deadline Risk](Deadline-Risk.md) with _slack_.  That is, ensuring that the exact time of the event isn't critical to your plans:   

 - Don't build into your plans a _need_ to start shopping at 9am.
 - Arrive at the bus-stop _early_.

The amount of slack you build into the schedule is likely dependent on the level of risk you face:  I tend to arrive a few minutes early for a bus, because the risk is _low_ (there'll be another bus along soon).  However, I try to arrive over an hour early for a flight, because I can't simply get on the next flight straight away and I've already paid for it, so the risk is _high_.
 
[Deadline Risk](Deadline-Risk.md) becomes very hard to manage when you have to coordinate actions with lots of tightly-constrained events.  So what else can give?  We can reduce the number of _parties_ involved in the event, which reduces risk, or, we can make sure all the parties are in the same _place_ to begin with.  

## Focus

Often when running a software project you're given a team of people and told to get something delivered by a certain date, i.e. you have an artificially-imposed deadline on delivery.

What happens if you miss the deadline?  It could be:

 - The funding on the project runs out, and it gets cancelled.
 - You have to go back to a budgeting committee to get more money.
 - Members of the team get replaced because of lack of faith.
 
.. or something else.  So [Deadline Risk](Deadline-Risk.md) can be introduced by an authority in order to _sharpen focus_.  This is how we arrive at tools like [SMART Objectives](https://en.wikipedia.org/wiki/SMART_criteria) and [KPI's (Key Performance Indicators)](https://en.wikipedia.org/wiki/Performance_indicator).  

Deadlines change the way we evaluate goals and the solutions we choose because they force us to reckon with [Deadline Risk](Deadline-Risk.md).  For example, in JFK's quote:

> "First, I believe that this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the moon and returning him safely to the Earth." -  John F. Kennedy, 1961

The 9-year timespan came from an authority figure (the president) and helped a huge team of people coordinate their efforts and arrive at a solution that would work within a given time-frame.  The [Deadline Risk](Deadline-Risk.md) allowed the team to focus on mitigating the risk of missing that deadline.

Compare with this quote:  

> “I love deadlines. I love the whooshing noise they make as they go by.” - [Douglas Adams](https://en.wikipedia.org/wiki/Douglas_Adams)

As a successful author, Douglas Adams _didn't really care_ about the deadlines his publisher's gave him.  The [Deadline Risk](Deadline-Risk.md) was minimal for him, because the publisher wouldn't be able to give his project to someone else to complete. 

## Deadline Risk and Schedule Risk

[Schedule Risk](Scarcity-Risk.md#schedule-risk) and [Deadline Risk](Deadline-Risk.md) are clearly related: they both refer to the risk of running out of time.  However, the _risk profile_ of each is very different:

 - [Schedule Risk](Scarcity-Risk.md#schedule-risk) is _continuous_, like money.  i.e. you want to waste as little of it as possible.  Every extra day you take compounds [Schedule Risk](Scarcity-Risk.md#schedule-risk) additively. A day wasted at the start of the project is much the same as a day wasted at the end.
 - [Deadline Risk](Deadline-Risk.md) is _binary_.  The impact of [Deadline Risk](Deadline-Risk.md) is either zero (you make it in time) or one (you are late and miss the flight).  You don't particularly get a reward for being early.
 
So, these are two separate concepts, both useful in software development and other fields.   Next up, something more specific: [Software Dependency Risk](Software-Dependency-Risk.md).
 
 



