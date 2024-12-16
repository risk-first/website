---
title: CAP Theorem
sidebar_position: 3
---

Imagine talking to a distributed database, where your request (_read_ or _write_) can be handled by one of many agents.

![User A and User B are both using a distributed database, managed by Agents 1 and 2, whom each have their own Internal Model](/img/generated/risks/coordination/cap1.svg)

In the diagram above, we have just two agents `1` and `2`, in order to keep things simple.  `User A` _writes something_ to the database, then `User B` _reads it back_ afterwards.     

According to the [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem), there are three properties we could desire in such a system:

- **Consistency (C)**: Every read receives the most recent value from the last write.
- **Availability (A)**: Every request receives a response.
- **Partition tolerance (P)**: The system can operate despite the isolation (lack of communication with) some of its agents.

The [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem) states that this is a [Trilemma](https://en.wikipedia.org/wiki/Trilemma).  That is, you can only have two out of the three properties.   

There are plenty of resources on the Internet that discuss this in depth, but let's just illustrate with some diagrams to show how this plays out.  In the diagram above, we can see a 2-agent distributed database.   Either agent can receive a read or write.  So this might be a **GII** decision making system, because all the agents are going to need to coordinate to figure out what the right value is to return for a read, and what the last value written was.  

In the above diagram, you can already see that there is a _race condition_:  if A and B both make their requests at the same time, what will B get back?   The original value of X, or the new value?

## With an AP System

![In an AP system, the User B may get back a _stale value_ for X](/img/generated/risks/coordination/cap-ap.svg)

Here, we are going to consider what happens when communication breaks down between Agents 1 and 2.  That is, they are _isolated_ from communicating with each other.  As shown in the above diagram, in an `AP` system, we have a database that is able to survive partitioning, and always returns a response, but may not be consistent.  The value `B` will get back will depend on whether they talk with Agent 1 or Agent 2.  

## With an CP System

![In an CP system, the User B won't get anything back for X, because Agent 2 can't be sure it has the latest value](/img/generated/risks/coordination/cap-cp.svg).  

To be consistent, Agent 2 needs to check with Agent 1 to make sure it has the latest value for X.  Where Agent 2 is left waiting for Agent 1 to re-appear, we are _blocked_.  So CP systems will block when partitioned.

## With an CA System

![In an CA system, we can't have partition tolerance, so in order to be consistent a single Agent has to do all the work](/img/generated/risks/coordination/cap-ca.svg)

Finally, if we have a CA system, we are essentially saying that _only one agent is doing the work_.  (You can't partition a single agent, after all).  But this leads to [Resource Allocation](https://en.wikipedia.org/wiki/Resource_allocation) and **Contention** around use of the scarce resource of `Agent 2`'s attention. (Both [Coordination Risk](/tags/Coordination-Risk) issues we met earlier.)  

## Some Real-Life Examples

This sets a lower bound on [Coordination Risk](/tags/Coordination-Risk):  we _can't_ get rid of it completely in a software system, -or- a system on any other scale. Fundamentally, coordination problems are inescapable at some level.  The best we can do is mitigate it by agreeing on protocols and doing lots of communication.   

Let's look at some real-life examples of how this manifests in software.

### ZooKeeper

First, [ZooKeeper](https://zookeeper.apache.org) is an Open-Source datastore, which is used in building distributed systems (like the one above) and ensuring things like configuration information are consistent across all agents.  

This _seems_ trivial, but it quickly gets out-of-hand:  what happens if only some of the agents receive the new information? What happens if a datacentre gets disconnected while the update is happening?  There are lots of edge-cases.  

ZooKeeper handles this by communicating inter-agent with its own protocol.  It elects a **master agent** (via **GII**-style voting), turning it into an **AI**-style team.  If the master is lost for some reason, a new leader is elected.  _Writes_ are then coordinated via the **master agent** who makes sure that a _majority of agents_ have received and stored the configuration change before telling the user that the transaction is complete.  Therefore, ZooKeeper is a `CP` system.  

### Git

Second, [Git](https://en.wikipedia.org/wiki/Git) is a (mainly) write-only ledger of source changes.  However, as we already discussed above, where different agents make incompatible changes, someone has to decide how to resolve the conflicts so that we have a single source of truth.  

The [Coordination Risk](/tags/Coordination-Risk) just _doesn't go away_.  

Since multiple users can make all the changes they like locally, and merge them later, Git is an `AP` system where everyone's opinion counts (**GII**):  individual users may have _wildly_ different ideas about what the source looks like until the merge is complete.

### Bitcoin

Finally, [Bitcoin (BTC)](https://en.wikipedia.org/wiki/Bitcoin) is a write-only [distributed ledger](https://en.wikipedia.org/wiki/Distributed_ledger), where agents _compete_ to mine BTC (a **UI** style organisation), but also at the same time record transactions on the ledger.  BTC is also `AP`, in a similar way to Git.  But new changes can only be appended if you have the latest version of the ledger.  If you append to an out-of-date ledger, your work will be lost.  

Because it's based on outright competition, if someone beats you to completing a mining task, then your work is wasted.  So, there is  _huge_ [Coordination Risk](/tags/Coordination-Risk).

For this reason, BTC agents [coordinate](/tags/Coordination-Risk) into [mining consortia](https://en.bitcoin.it/wiki/Comparison_of_mining_pools), so they can avoid working on the same tasks at the same time, turning it into a **CI**-type organisation.  

This in itself is a problem because the whole _point_ of BTC is that it's competitive and no one entity has control.  So, mining pools  tend to stop growing before they reach 50% of the BTC network's processing power.  Taking control would be [politically disastrous](https://www.reddit.com/r/Bitcoin/comments/5fe9vz/in_the_last_24hrs_three_mining_pools_have_control/) and confidence in the currency (such as there is) would likely be lost.

## Communication Is For Coordination

CAP theory gives us a fundamental limit on how much [Coordination Risk](/tags/Coordination-Risk) we can mitigate.  We've looked at different organisational structures used to manage [Coordination Risk](/tags/Coordination-Risk) within teams of people, organisations or living organisms, so it's the case in software.   

At the start of this section, we questioned whether [Coordination Risk](/tags/Coordination-Risk) was just another type of [Communication Risk](/tags/Communication-Risk).  However, it should be clear after looking at the examples of competition, cellular life and Vroom and Yetton's Model that this is exactly _backwards_.  

- Most single-celled life has no need for communication: it simply competes for the available resources.  If it lacks anything it needs, it dies.  
- There are _no_ lines of communication on the **UI** decision-type.  It's only when we want to avoid competition, by sharing resources and working towards common goals that we need to communicate.  
- Therefore, the whole point of communication _is for coordination_.  

In the next section, [Map And Territory Risk](/tags/Map-And-Territory-Risk), we're going to look at some new ways in which systems can fail, despite their attempts to coordinate.
 