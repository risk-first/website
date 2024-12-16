---
title: Coordination Risk
description: Risks due to the fact that systems contain multiple agents, which need to work together.


featured: 
  class: c
  element: '<risk class="coordination" />'
sidebar_position: 13
tags:
 - Risks
 - Coordination Risk
tweet: yes
part_of: Operational Risk
---

<RiskIntro fm={frontMatter} />

Whenever we have multiple [agents](/tags/Agency-Risk) working together we have [Coordination Risk](/tags/Coordination-Risk). This happens even where the agents goals are aligned and they don't suffer from [Communication Risk](/tags/Communication-Risk).

As in [Agency Risk](/tags/Agency-Risk), we are going to use the term _agent_, which refers to anything in a system with _agency_  to make decisions:  that is, an agent has an [Internal Model](/tags/Internal-Model) and can [take actions](/tags/Take-Action) based on it.  Here, we work on the assumption that the agents _are_ working towards a common [Goal](/tags/Goal), even though in reality it's not always the case, as we saw in the section on [Agency Risk](/tags/Agency-Risk).

[Coordination Risk](/tags/Coordination-Risk) is the risk that agents can fail to coordinate to meet their common goal and end up making things worse.  [Coordination Risk](/tags/Coordination-Risk) is embodied in the phrase "Too Many Cooks Spoil The Broth":  more people, opinions or _agents_ often make results worse.

In this section, we'll:

 - look at some classic problems of coordination,
 - build up [a model of Coordination Risk](A-Model-Of-Coordination-Risk), describing exactly coordination means and why we do it,
 - then, we're going to consider the general problem of [decision making](Decision-Making), and consider the problem of agency at several different levels (because of [Scale Invariance](/thinking/Crisis-Mode#invariance-3-scale-invariance)),
 - and finally, we'll look at the [CAP Theorem](CAP-Theorem) and how this is a general problem, rather than specific to software systems. 


## Worked Example

On an open source software project, the maintainers are often required to make architectural decisions about the way the software works.  Initially, they just applied a strategy of everyone makes their own decisions, but the codebase started to get chaotic with multiple competing abstractions.  Not only that, but different maintainers would find that their work had been partly subsumed or rendered obsolete by someone else.   In short, the project had devolved into competition and the maintainers were starting to fall out.

![Coordination Risk after introducing voting](/img/generated/risks/posters/coordination-risk1.svg)

As shown in the above diagram, they tried to remedy this by instituting [a governance process](/tags/Approval) wherein the maintainers voted on key architectural issues together.   However, the debates took up a lot of time and often ended in further argument and misunderstanding.  

One alternative suggested to them was to decide on a "[Benevolent Dictator for Life (BDFL)](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life)".  This was a title originally conferred on Guido van Rossum, creator of the Python Language, but other famous examples exist such as Rich Hickey (Clojure Language) and Linus Torvalds (the Linux Kernel).

![Coordination Risk after introducing a BDFL](/img/generated/risks/posters/coordination-risk2.svg)

As shown in the above diagram, this solution to coordination risk doesn't come with the downsides of increased communication risk and schedule risk (time spent debating and agreeing).   However: power is concentrated in the hands of the BDFL, for better or worse.  In open source projects there is a check on this power:  the community is free to [fork](https://en.wikipedia.org/wiki/Fork_%28software_development%29) the open source project away from its out-of-control dictator and take a different path.  An example of this happening is [MariaDB](https://mariadb.com) which was forked from [MySQL](https://www.mysql.com) after Oracle (who sell competing proprietary database software) bought Sun Microsystems and took control of the project.  


## Problems Of Coordination / Example Threats

Let's unpack this idea, and review some classic problems of coordination, none of which can be addressed without good communication.  Here are some examples:

### 1 Merging Data, Processes and Ideas

If you are familiar with the source code control system, [Git](https://en.wikipedia.org/wiki/Git), you will know that this is a _distributed_ version control system.  That means that two or more people can propose changes to the same files without knowing about each other.  This means that at some later time, [Git](https://en.wikipedia.org/wiki/Git) then has to merge (or reconcile) these changes together.  Git is very good at doing this automatically, but sometimes different people can independently change the same lines of code and these will have to be merged manually.  In this case, a human arbitrator "resolves" the difference, either by combining the two changes or picking a winner.

**Threat**: Two teams work on overlapping functionality in parallel, leading to integration conflicts.

### 2 Consensus

Making group decisions (as in elections) is often decided by votes.  But having a vote is a coordination issue and requires that everyone has been told the rules:

  - Where will the vote be held?  
  - How long do you provide for the vote?  
  - What do you do about absentees?  
  - What if people change their minds in the light of new information?
  - How do you ensure everyone has enough information to make a good decision?
  
**Threat**: Coordination issues arise in situations where communication is limited, ill-specified or there is insufficient visibility.
  
### 3. Factions and Silos

Sometimes, it's hard to coordinate large groups at the same time and "factions" can occur.  That the world isn't a single big country is probably partly a testament to this:  countries are frequently separated by geographic features that prevent the easy flow of communication (and force).   We can also see this in distributed systems, with the ["split brain"](https://en.wikipedia.org/wiki/Split-brain_(computing)) problem.   This is where subset of the total system becomes disconnected (usually due to a network failure) and you end up with two, smaller networks with different knowledge.  We'll address in more depth later.

**Threat**: Larger coordinating units break down and work independently, perhaps along cultural, geographic or functional boundaries.

### 4. Resource Allocation and Contention

Ensuring that the right people are doing the right work, or the right resources are given to the right people is a coordination issue.  On a grand scale we have [Logistics](https://en.wikipedia.org/wiki/Logistics) and [Economic Systems](https://en.wikipedia.org/wiki/Economic_system).  On a small scale the office's _room booking system_ solves the coordination issue of who gets a meeting room using a first-come-first-served booking algorithm.  

**Threat**: 

### 5. Deadlock

Refers to a situation where, in an environment where multiple parallel processes are running, the processing stops and no-one can make progress because the resources each process needs are being reserved by another process.  This is a specific issue in [Resource Allocation](https://en.wikipedia.org/wiki/Resource_allocation), but it's one we're familiar with in the computer science industry.  Compare with [Gridlock](https://en.wikipedia.org/wiki/Gridlock), where traffic can't move because other traffic is occupying the space it wants to move to already. 

**Threat**: Coordination issues involving time need to be carefully thought through to avoid deadlocks.

### 6. Race Conditions

[Race Conditions](https://en.wikipedia.org/wiki/Race_condition) are where we can't be sure of the result of a calculation, because it is dependent on the ordering of events within a system.  For example, two separate threads writing the same memory at the same time (one ignoring and over-writing the work of the other) is a race.  

**Threat**: Coordination issues involving time need to be carefully thought through to avoid races.

### 7. Scaling

[Amdahl's law](https://en.wikipedia.org/wiki/Amdahl's_law) and [Gunther's Universal Scalability Law](https://en.wikipedia.org/wiki/Neil_J._Gunther#Universal_Scalability_Law) both draw attention to the fact that as you increase the number of agents that need to coordinate, the more time needs to be spent on coordination.  These laws were originally drawn from observations on computer hardware, but they apply generally to problems of coordination.  While Amdahl's Law shows the diminishing returns of adding extra agents, Gunther's Law goes further to model how performance can get worse with extra agents involved - something we see when our computers thrash or when roads get really busy.

**Threat**: The more agents involved in coordinating, the harder and more time consuming it becomes.  


 