---
title: Process Risk
description: When you depend on a business process, human process or software process to give you something you need.

slug: /risks/Process-Risk
featured: 
  class: c
  element: '<risk class="process" />'
sidebar_position: 10
tweet: yes
tags: 
 - Risks
 - Process Risk
part_of: Dependency Risks
---

<RiskIntro fm={frontMatter} />

[Process Risk](/tags/Process-Risk) is the risk you are exposed to when depending on the completion of an activity or process.  

> "**Process**: a process is a set of activities that interact to achieve a result." - [Process, _Wikipedia_](https://en.wikipedia.org/wiki/Process)

Process Risk intersects with several other types of risk we've covered so far:

- [Agency Risk](/tags/Agency-Risk): Processes have their own agency - they often involve decision making (a loan application or passport renewal).
- [Reliability Risk](/tags/Reliability-Risk): Processes can fail for various reasons (a payment process for example) or unavailable when they lack resources (think of CPU bottlenecks or queues at the post-office counter)..
- [Communication Risk](/tags/Communication-Risk): You need to communicate intent to the process, and have it report back its status (think of buying something on the Internet, and the delivery company communicating where the parcel is in transit).
- [Feature Fit Risk](/tags/Feature-Fit-Risk): A Process should be supplying some useful _features_ to you in order for you to use it.  Is it fit for purpose? (An example might be starting to fill out a form but then realising you're filling out the wrong form).

So clearly there is a degree overlap here with other types of risk we've looked at:  a good process should be reliable, available (i.e. not scarce), transparent in its communications and obedient to our wishes.  In fact, Process Risk really should be thought of as just a wrapper for other things.  Nevertheless, it's a useful pattern to talk about as it comes up repeatedly.

## Worked Example

A team in a large organisation is struggling to deal with the complexity and variety of requests made to it.  They are also struggling to justify poor response times, accusations of favouritism and lack of communication to other internal customers they work for.  In order to establish some control, the manager of the team introduces an [Issue Management system](/tags/Issue-Management) so that work is done in the order it arrives and there is a clear audit of how long requests took to process and who in the team is dealing with them.  Issues are raised via an online form.

There are two ways to look at how this action changes the risk profile for the team:  the team's internal risk profile and that of the customers of the team.  Let's look at each in turn.

### Team's Risk Perspective

![Process Risk - Team](/img/generated/risks/posters/process-risk1.svg)

In this case, the team is using a process to help with the following risks:

 - **[Coordination Risk](/tags/Coordination-Risk)**:  you can often use process to help people coordinate.  For example, a [Production Line](https://en.wikipedia.org/wiki/Production_line) is a process where work being done by one person is pushed to the next person when it's done.  A room booking process is designed to efficiently allocate meeting rooms. 

 - **[Communication Risk](/tags/Communication-Risk)**: processes can be used as a means to communicate.  Here, it might be possible for the team leader to see what staff are working on at any given moment, or track the rate at which work is being completed each week.
 
 - **[Agency Risk](/tags/Agency-Risk)**: by using the issue management system, decisions about what to work on are being taken out of the team's control, hopefully addressing the concerns of favouritism.

On the downside, the team adopts a level of [Process Risk](/tags/Process-Risk):   Should the issue management system be unavailable, they may not be able to track what it is they're supposed to do next and it may not be apparent whether work is being prioritised in the right order.   

### Customer's Risk Perspective

![Process Risk - Customer](/img/generated/risks/posters/process-risk2.svg)

For the customers of the team, the introduction of the issue management system changes the way they interact with the team:

 - The nature of the **[Communication Risk](/tags/Communication-Risk)** is changed.  Work status may be more visible to customers but they may find it harder to be precise about what they want done, but...
 
 - The introduced **[Process Risk](/tags/Process-Risk)** may be that customers can't urgent work addressed quickly, find it hard to request the right kind of work through the ticketing interface or find that their work is no longer "paired" to the members of the team who understood their needs best, reducing the overall quality of the service.


## Example Threats


### 1.  Poor Fit

- **Threat**: Processes can become over-complicated and take too long to initiate.  

- **Threat**: Processes are often over-rigid and don't fit to individual circumstances.

- **Threat**: Processes are often introduced to cut costs and damage service quality as a side-effect.

### 2.  Resistance to Change

- **Threat**: Often processes are imposed without regard to whether or not the people impacted by the process (in the above example, the customers and the team members) are going to be happy with the change.  

   **See:** [Change Management](https://en.wikipedia.org/wiki/Change_management)

- **Threat**: Once embedded, processes can be _hard to change_ in much the same way as they are hard to implement in the first place.  This can be especially true as the world around them changes and they are inflexible to new demands.

### 3.  Lost Accountability

- **Threat**: Processes can reduce accountability.   _Following a process_ instead of making decisions as you go gives people (and systems) allows for scape-goating the process when things go wrong.

### 4. Bureaucratic Creep

- **Threat**: Its easier for processes to accrete rather than be decommissioned.  This is an implication of Parkinson's Law (work expands so as to fill the time available for its completion) and slowly ratchets up inefficiency.

:::tip Anecdote Corner

Over the years I have worked in the Finance Industry it's given me time to observe how, across an entire industry, process can evolve both in response to regulatory pressure, organisational maturity and mitigating risk:

1. Initially, I could release software by logging onto the production accounts with a shared password that everyone knew, and deploy software or change data in the database.  
2. The first issue with this is [Agency Risk from bad actors](/tags/Agency-Risk):  how could you know that the numbers weren't being altered in the databases? _Production Auditing_ was introduced so that at least you could tell what was being changed and when, in order to point the blame later.
3. But there was still plenty of scope for deliberate or accidental damage.  Next, passwords were taken out of the hands of developers and you needed approval to "break glass" to get onto production.  
4. The increasing complexity (and therefore [Complexity Risk](/tags/Complexity-Risk)) in production environments meant that sometimes changes collided with each other, or were performed at inopportune times.  Change Requests were introduced.  This is an approval process which asks you to describe what you want to change in production, and why you want to change it.  
5. The change request software is generally awful, making the job of raising change requests tedious and time-consuming.  Therefore, in one workplace, developers _automated_ the processes for release, including the process to write the change request.  This allowed them to improve release cadence at the expense of owning more code.
6. Auditors didn't like the fact that this automation existed: effectively, that meant that developers could get access to production with the press of a button, taking you back to step 1...

::: 
