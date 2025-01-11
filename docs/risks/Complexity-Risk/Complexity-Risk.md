---
title: Complexity Risk
description: Risks caused by the weight of complexity in the systems we create, and their resistance to change and comprehension.

slug: /risks/Complexity-Risk
featured: 
  class: c
  element: '<risk class="complexity" />'
sidebar_position: 5
tags:
 - Risks
 - Refactoring
 - Complexity Risk
 - Codebase Risk
 - Dead End Risk
 - Abstraction
definitions:
 - name: Abstraction
   description: blah
part_of: Operational Risk
---

<RiskIntro fm={frontMatter} />

[Complexity Risk](/tags/Complexity-Risk) is the [risk](/tags/Risk) to your project due to its underlying "complexity" - the amount of code, documentation, issues, features, different types of user and so on and, crucially, the [relationships between those elements](./Complexity-Risk/Connectivity).   

Looking at the living world, society or software in general, we can see that -over time- complexity increases.  There is a trade-off wherein we can capture more resources, more value or more user requirements (respectively) through increasing complexity.  The downside of this is that complex systems are more brittle and harder to change.  

In this section we will:

 - Look at two ways in which complexity is measured, via [Kolmogorov Complexity](/risks/Complexity-Risk#kolmogorov-complexity) and [Graph-Connectivity](/risks/Complexity-Risk#connectivity).
 - Define [Complexity Risk](/tags/Complexity-Risk), and the related risks of [Codebase Risk](/tags/Codebase-Risk) (complexity in your codebase) and [Dead-End Risk](/tags/Dead-End-Risk) (risk of implementations getting "stuck").
 - Discuss ways to think about complexity:  as [mass](/risks/Complexity-Risk#complexity-is-mass), [technical debt](/risks/Complexity-Risk#technical-debt) and [mess](/risks/Complexity-Risk#kitchen-analogy).
 - Discuss ways to manage complexity risk, such as modularisation, hierarchy, use of languages and libraries and by avoiding feature creep.
 - Discuss places where Complexity Risk [manifests](/risks/Complexity-Risk#where-complexity-hides) in computing.  

## Worked Example

![Increasing the Complexity To Reduce Operational Risks](/img/generated/risks/posters/complexity-risk1.svg) 


It's the early 2000s: your Pokémon website is becoming really popular and profitable and has a large, enthusiastic customer base.  But you're worried that you're carrying too much [Operational Risk](/tags/Operational-Risk) as the whole thing is run on a single server and database that you've rented from a hosting provider.  What if it goes down?  Or the disk crashes?   The provider isn't interested in helping you, so you hire [a second server and database](/tags/Redundancy) and work out a process for load balancing between the two of them.  You write scripts that keep the databases in sync and implement sticky sessions so that users only see their own version.  There are lots of corner cases you have to work through and it is a major headache.

![Increasing the Cost To Reduce Operational Risks](/img/generated/risks/posters/complexity-risk2.svg) 

It's the early 2020s: your Pokémon website is becoming really popular and profitable but you're worried that you're carrying too much [Operational Risk](tags/Operational-Risk).  You're able to turn on some backup features, load balancing and increase the instances via the console provided by your Cloud Service Provider, handing off the [Complexity Risk](/tags/Complexity-Risk) to them at some expense.  As well as helping with [Demand Management](/tags/Demand-Management), CSPs have allowed software developers to shift a lot of [Complexity Risk](/tags/Complexity-Risk) to them, the downsides being [cost](/tags/Funding-Risk) and [lock-in](/tags/Lock-In-Risk).

## Example Threats

### 1. Space and Time Complexity

There is a whole branch of complexity theory devoted to how the software _runs_, namely [Big O Complexity](https://en.wikipedia.org/wiki/Big_O_notation).  

**Threat**: Once running, an algorithm or data structure will consume space or runtime dependent on its performance characteristics, which may well have an impact on the [Operational Risk](/tags/Operational-Risk) of the software.  Using off-the-shelf data structures and algorithms helps, but you still need to know their performance characteristics. 

The [Big O Cheat Sheet](https://bigocheatsheet.com) is a wonderful resource to investigate this further.  

### 2. Memory Management

**Threat**: Memory Management (and more generally, all resource management in software) is another place where [Complexity Risk](/tags/Complexity-Risk) hides:

> "Memory leaks are a common error in programming, especially when using languages that have no built in automatic garbage collection, such as C and C++." - [Memory Leak, _Wikipedia_](https://en.wikipedia.org/wiki/Memory_leak)

[Garbage Collectors](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) (as found in Javascript or Java) offer you the deal that they will mitigate the [Complexity Risk](/tags/Complexity-Risk) of you having to manage your own memory, but in return perhaps give you fewer guarantees about the _performance_ of your software.  Again, there are times when you can't accommodate this [Operational Risk](/tags/Operational-Risk), but these are rare and usually only affect a small portion of an entire software-system.  
 
### 3. Protocols And Types

As we saw in [Communication Risk](/tags/Communication-Risk), whenever two components of a software system need to interact, they have to establish a protocol for doing so.  

**Threat**: As systems become more complex, and the connectedness increases, it becomes harder to manage the risk around versioning protocols.  This becomes especially true when operating beyond the edge of the compiler's domain. 

Although type-checking helps mitigate [Communication Risk](/tags/Communication-Risk), when software systems grow large it becomes hard to communicate intent and keep connectivity low.  You  can end up with "The Big Ball Of Mud":

> "A big ball of mud is a software system that lacks a perceivable architecture. Although undesirable from a software engineering point of view, such systems are common in practice due to business pressures, developer turnover and code entropy. " - [Big Ball Of Mud, _Wikipedia_](https://en.wikipedia.org/wiki/Big_ball_of_mud)

### 4. Concurrency / Mutability

Although modern languages include plenty of concurrency primitives (such as the [java.util.concurrent](https://docs.oracle.com/javase/9/docs/api/java/util/concurrent/package-summary.html) libraries), concurrency is _still_ hard to get right.  

**Threat**: [Race conditions](https://en.wikipedia.org/wiki/Race_condition) and [Deadlocks](https://en.wikipedia.org/wiki/Deadlock) abound in over-complicated concurrency designs:  complexity issues are magnified by concurrency concerns, and are also hard to test and debug.  

Languages such as [Clojure](https://clojure.org) introduce [persistent collections](https://en.wikipedia.org/wiki/Persistent_data_structure) to alleviate concurrency issues.  The basic premise is that any time you want to _change_ the contents of a collection, you get given back a _new collection_.  So, any collection instance is immutable once created.  The trade-off is again speed to mitigate [Complexity Risk](/tags/Complexity-Risk).  

An important lesson here is that choice of language can reduce complexity: and we'll come back to this in [On Software Dependencies](/risks/On-Software-Dependencies).
 
### 5. Networking / Security

There are plenty of [Complexity Risk](/tags/Complexity-Risk) perils in _anything_ to do with networked code, chief amongst them being error handling and (again) [protocol evolution](/tags/Protocol-Risk). 

**Threat**: In the case of security considerations, exploits _thrive_ on the complexity of your code, and the weaknesses that occur because of it.  In particular, Schneier's Law says, never implement your own cryptographic scheme:

> "Anyone, from the most clueless amateur to the best cryptographer, can create an algorithm that he himself can't break. It's not even hard. What is hard is creating an algorithm that no one else can break, even after years of analysis." - [Bruce Schneier, 1998](https://en.wikipedia.org/wiki/Bruce_Schneier#Cryptography) 

Luckily, most good languages include cryptographic libraries that you can include to mitigate these [Complexity Risks](/tags/Complexity-Risk) from your own code-base.  

This is a strong argument for the use of libraries.  But when should you use a library and when should you code-your-own?  This is covered further in the section on [On Software Dependencies](/risks/On-Software-Dependencies).  

### 6.  The Pursuit Of Perfection

Complexity arises in software projects in a number of different ways.  Sometimes, a quick-and-dirty solution is a better option than one that deals with every corner-case but adds excessively to the complexity budget.  Aside from _bragging rights_, no-one is interested in having a large codebase:

> “Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” - Bill Gates

The size of your codebase, the amount of code, the number of modules, the interconnectedness of the modules and how well-factored the code is all contribute to [Complexity Risk](/tags/Complexity-Risk).


:::tip Anecdote Corner

[In 2012, Knight Capital Group](https://en.wikipedia.org/wiki/Knight_Capital_Group#2012_stock_trading_disruption), lost $440 million in 45 minutes because of a software deployment error caused by legacy code and unnecessary complexity.  Knight was deploying new trading software designed to handle their market-making operations and made use of [Feature Flags](/tags/Configuration-Management) to enable or disable versions of their code. However, during deployment, they neglected to properly unflag some of the old functionality in one of the servers.

The old code, known internally as “Power Peg,” (unused for eight years) was essentially a ticking time bomb. Instead of simplifying the system by [removing dead code](/tags/Refactoring), they had layered new features on top of it. 

When the new deployment went live in started buying and selling millions of shares at lightning speed, generating massive unintended trades. Within minutes, Knight's system had created enormous market disruptions, and by the time the error was caught, the firm had incurred $440 million of losses. 

:::

