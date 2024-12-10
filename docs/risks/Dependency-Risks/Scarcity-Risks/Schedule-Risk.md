---
title: Schedule Risk
description: The aspect of dependency risk related to variance around the time taken to complete tasks on a schedule.

slug: /risks/Schedule-Risk

featured: 
  class: c
  element: '<risk class="schedule" />'
sidebar_position: 2
tweet: yes
tags: 
 - Risks
 - Funding Risk
 - Schedule Risk
part_of: Scarcity Risk
---

<RiskIntro fm={frontMatter} />

[Schedule Risk](/tags/Schedule-Risk) is very pervasive, and really underlies _everything_ we do.  People _want_ things, but they want them _at a particular time_.   We need to eat and drink every day, for example.  We might value having a great meal, but less so if we don't have any idea when it might be served.

So [Schedule Risk](/tags/Schedule-Risk) is the risk around schedules we try to impose on our work, usually because we cannot know _a priori_ how long a piece of work will take.  Unrealistically low estimates are therefore the source of [Schedule Risk](/tags/Schedule-Risk): the more aggressive the estimate, the more risk you are running, even though every now and again you might win the estimation lottery and find _just the right piece_ of open source code to take a short-cut through time and hit the estimate.

Some developers take the view that [estimates aren't necessary](https://ronjeffries.com/xprog/articles/the-noestimates-movement/) and sometimes perhaps they aren't.  However at a basic level this doesn't stand up to scrutiny:  you do need to know whether a piece of work is worth embarking on.  Will it take a day?  A week?  A month?   A year?  The answer to this question fundamentally affects the value of the work that is being undertaken.  In the case where multiple alternative solutions are possible, using your [internal model](tags/Internal-Model) to estimate the cost of each may be a key way to decide which path to follow.  

**See:** This is a topic that is covered in depth in the section on [Estimating](/estimating/Start) in Risk-First.

:::note

You'll notice that I've split out [Schedule Risk](/tags/Schedule-Risk) from [Deadline Risk](/tags/Deadline-Risk).  They're slightly different things, and often, as scheduling and estimating will often generate a deadline to meet.  However, from my experience in software development _schedule slippage_ has a different quality to _missed deadlines_.  So it's worth looking at how these two things differ:   

- [Deadline Risk](/tags/Deadline-Risk) is the risk you face from missing a deadline.  

- [Schedule Risk](/tags/Schedule-Risk) occurs when things take longer to complete than you have scheduled for them.   We'll discuss reasons this happens below.

:::

## Worked Example

With [Schedule Risk](/tags/Schedule-Risk), the underlying measure is _time_ and our inability to be precise about how long things might take.

So many things affect schedule risk:  The more work you try to implement, the more complexity you take on, the more novelty you introduce, the more activities become dependent on one another.  

![Schedule Risk 1](/img/generated/risks/posters/schedule-risk1.svg)

In the example above, a team are working to produce new features for their clients, however there are complaints that the features aren't quite what is needed and the team is slow to deliver.   The team diagnose the problem down to some design choices in the codebase which have cascaded down into much more complex code than is necessary.  They decide to [refactor the code](/tags/Refactoring), aware that by doing this they are embarking on a hard-to-estimate task that may be much more long-winded than they anticipate.

![Schedule Risk 2](/img/generated/risks/posters/schedule-risk2.svg)

Conversely, a team might work to _reduce_ schedule risk:  In the diagram above, a team realises that it is terrible at estimating and lots of development tasks are running longer than expected.  In order to bring discipline to the team, the manager adds [Pressure](/tags/Pressure) (perhaps in the form of punishments for late delivery or bonuses for on-time delivery).  Suddenly, work _is_ completed according to the set schedule.  But corners are cut and [bugs](/tags/Implementation-Risk) creep in.

### Student Syndrome and Procrastination

An obvious way to reduce [Schedule Risk](/tags/Schedule-Risk) would appear to be to just pad the estimates.  However, there is a problem with this.  [Student Syndrome](https://en.wikipedia.org/wiki/Student_syndrome) is, according to Wikipedia:

> "Student syndrome refers to planned procrastination, when, for example, a student will only start to apply themselves to an assignment at the last possible moment before its deadline."   - _[Wikipedia](https://en.wikipedia.org/wiki/Student_syndrome)_

Arguably, there is good psychological, evolutionary and risk-based reasoning behind procrastination:  if there is apparently a lot of time to get a job done, then [Schedule Risk](/tags/Schedule-Risk) is low.  If we're only ever mitigating our _biggest risks_, then managing [Schedule Risk](/tags/Schedule-Risk) in the future doesn't matter so much.  Putting efforts into mitigating future risks that _might not arise_ is wasted effort.

![Schedule Risk 3](/img/generated/risks/posters/schedule-risk3.svg)

So, as the above diagram shows, the problem with Student Syndrome is that _allowing more time_ in order to reduce [Schedule Risk](/tags/Schedule-Risk)  is an [Attendant Risk](/tags/Attendant-Risk) that _causes_ [Schedule Risk](/tags/Schedule-Risk):  within the more generous time allocation wortk proceeds either more slowly and perhaps more thoroughly, or starts later, so you'll end up revealing [Hidden Risk](/tags/Hidden-Risk) _later_.  Discovering these hidden risks later pushes out the completion date anyway.

## Example Threats

### 1.  Optimism / Inadequate Risk Management

**Threat**: Estimates on pieces of work are too low, because the failed to account for the complexity of the problem. 

**Threat**: The estimating process is compromised by deadlines or social pressure, making it hard to  

### 2.  Hidden Risks / Technical Challenges

**Threat**:  You're working in a new area and therefore have an under-developed [Internal Model](/tags/Internal-Model) of the domain.

**Threat**:  You're necessarily working with cutting edge / novel technology and having to invent best practices as you go.

**See**: [Interference Checklist](/estimating/Interference-Checklist) For a long list of technical challenges that have high [Schedule Risk](/tags/Schedule-Risk)

### 3.  Long-Tail Delays

**Threat**:  Certain tasks have a much higher completion-time variance than others.  

**Mitigation**: Try to identify those up-front to begin them early.

### 4.  Slack and Procrastination

**Threat**: [Parkinson's Law](https://en.wikipedia.org/wiki/Parkinson's_law) says that work expands to fill the time available.  Therefore _padding estimates_ only works so long as there is the illusion that _there isn't time available_,   

**Mitigation**: Keep slack a secret, from yourself too if possible.

### 5.  Expanding The Team

**Threat**:  As Fred Brooks points out:

> _Adding manpower to a late software project makes it later._ - [The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month)

:::tip Anecdote Corner

I've worked on lots of very large, expensive IT projects.  A general rule is the bigger the project, the less under-control the Schedule Risk will be.  I believe this is because Schedule Risk thrives on complexity.  However in this case I want to talk about a rare case where things went _right_.  

I worked in part of a team trying to build what we called, "Data Access Service" or "DAS" for other parts of a bigger system of risk calculations.  There were various layers involved in the service - from loading data out of various databases, converting into different formats, batching, buffering, grouping and sending over HTTP connections.  Adding new functionality was time-consuming and a source of much grief for other, downstream teams depending on the service.  Oh, and there were lots of political challenges too.

However, at some point a lot of the political players moved on to something else, leaving just me and one other guy in the team.  We decided to roll up our sleeves and reimplement the DAS using off-the-shelf Spring libraries in Java which (claimed to) do a lot of this stuff out-of-the-box.  We converted DAS from being a service running on servers over HTTP to just a library that other services could just call, which removed the need for the batching, buffering and different data formats and Spring did the rest.  There was a bit of heavy lifting but we re-wrote the whole thing in about two months.  

This compares to being members of the original 7-strong team for well over a year beforehand and getting a lot less done. 

But the only reason this was allowed to happen was because we'd been bullish in our estimates:  the original DAS was over-encumbered with technical debt and was therefore too hard to change and improve.  We estimated it would take two months to implement the new design and it did.  This was both an educated guess - we knew the scope of the problem well and the tools we intended to use to solve it - plus some luck.


:::