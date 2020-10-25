---
title: Process Risk
description: Risks due to the following a particular protocol of communication with a dependency, which may not work out the way we want.
url: https://riskfirst.org/risks/Process-Risk

featured: 
  class: bg2
  element: '<risk class="process" />'
order: 9
categories:
 - Risks
redirect_from: 
 - /Process-Risk
---

# Process Risk

[Process Risk](Process-Risk.md) is the risk you take on whenever you embark on completing a _process_. <!-- tweet-end -->

> "**Process**: a process is a set of activities that interact to achieve a result." - [Process, _Wikipedia_](https://en.wikipedia.org/wiki/Process)

Processes commonly involve _forms_:  if you're filling out a form (whether on paper or on a computer) then you're involved in a process of some sort, whether an "Account Registration" process, "Loan Application" process or "Consumer Satisfaction Survey" process.  Sometimes, they involve events occurring:  a [build process](https://en.wikipedia.org/wiki/Software_build) might start after you commit some code, for example.  The _code we write_ is usually describing some kind of process we want performed.

## The Purpose Of Process

![Introducing process can mitigate many risks](/images/generated/risks/process/process-risk-introduction.png)

As the above diagram shows, process exists to mitigate other kinds of risk.  For example:

 - **[Coordination Risk](Coordination-Risk.md)**:  you can often use process to help people coordinate.  For example, a [Production Line](https://en.wikipedia.org/wiki/Production_line) is a process where work being done by one person is pushed to the next person when it's done.  A room booking process is designed to efficiently allocate meeting rooms. 
 - **[Operational Risk](Operational-Risk.md)**:  this encompasses the risk of people _not doing their job properly_.  But, by having a process, (and asking, did this person follow the process?) you can draw a distinction between a process failure and a personnel failure.  For example, accepting funds from a money launderer _could_ be a failure of a bank employee.   But, if they followed the _process_, it's a failure of the [Process](Process-Risk.md) itself. 
 - **[Complexity Risk](Complexity-Risk.md)**: working _within a process_ can reduce the amount of [Complexity](Complexity-Risk.md) you have to think about.  We accept that processes are going to slow us down, but we appreciate the reduction in risk this brings.  Clearly, the complexity hasn't gone away, but it's hidden within design of the process.  For example, [McDonalds](https://en.wikipedia.org/wiki/McDonald's) tries to design its operation so that preparing each food item is a simple process to follow, reducing complexity (and training time) for the staff.

These are all examples of [Risk Mitigation](../thinking/Glossary.md#Mitigated-risk) for the _owners_ of the process.  But often the _consumers_ of the process end up picking up [Process Risks](Process-Risk.md) as a result:

 - **[Invisibility Risk](Communication-Risk.md#invisibility-risk)**: it's often not possible to see how far along a process is to completion.  Sometimes, you can do this to an extent.  For example, when I send a package for delivery, I can see roughly how far it's got on the tracking website.  But this is still less-than-complete information and is a representation of reality.    
 - **[Dead-End Risk](Complexity-Risk.md#dead-end-risk)**: even if you have the right process, initiating a process has no guarantee that your efforts won't be wasted and you'll be back where you started from.  The chances of this happening increase as you get further from the standard use-case for the process, and the sunk cost increases with the length of time the process takes to complete.
 - **[Feature Access Risk](Feature-Risk.md#feature-access-risk)**: processes generally handle the common stuff, but ignore the edge cases.  For example, a form on a website might not be designed to be accessible to disabled people, or might only cater to some common subset of use-cases.
 
![Process Risk, and its consequences, compared with Agency Risk](/images/generated/risks/process/process-risk.png) 
 
When we talk about "[Process Risk](Process-Risk.md)" we are really referring to these types of risks, arising from "following a set of instructions."  Compare this with  [Agency Risk](Agency-Risk.md) (which we will review in a forthcoming section), which is risks due to _not_ following the instructions, <!-- tweet-end -->as shown in the above diagram .  Let's look at two examples, how [Process Risk](Process-Risk.md) can lead to [Invisibility Risks](Communication-Risk.md#invisibility-risk) and [Agency Risk](Agency-Risk.md).

### Processes And Invisibility Risk

Processes tend to work well for the common cases because *practice makes perfect*,  but they are really tested when unusual situations occur.  Expanding processes to deal with edge-cases incurs [Complexity Risk](Complexity-Risk.md), so often it's better to try and have clear boundaries of what is "in" and "out" of the process' domain.

Sometimes, processes are _not_ used commonly.  How can we rely on them anyway?  Usually, the answer is to build in extra [feedback loops](../thinking/Glossary.md#feedback-loop):

- Testing that backups work, even when no backup is needed.
- Running through a disaster recovery scenario at the weekend.
- Increasing the release cadence, so that we practice the release process more.

The feedback loops allow us to perform [Retrospectives and Reviews](../practices/Review.md) to improve our processes. 

### Processes, Sign-Offs and Agency Risk

Often, Processes will include sign-off steps.  The [Sign-Off](../practices/Sign-Off.md) is an interesting mechanism:  

 - By signing off on something for the business, people are usually in some part staking their reputation on something being right. 
 - Therefore, you would expect that sign-off involves a lot of [Agency Risk](Agency-Risk.md):  people don't want to expose themselves in career-limiting ways.  
 - Therefore, the bigger the risk they are being asked to swallow, the more cumbersome and protracted the sign-off process.  
 
Often, [Sign-Offs](../practices/Sign-Off.md) boil down to a balance of risk for the signer:  on the one hand, _personal, career risk_ from signing off, on the other, the risk of upsetting the rest of the staff waiting for the sign-off, and the [Dead End Risk](Complexity-Risk.md#dead-end-risk) of all the effort gone into getting the sign-off if they don't.  

This is a nasty situation, but there are a couple of ways to de-risk this: 

 - Break [Sign-Offs](../practices/Sign-Off.md) down into bite-size chunks of risk that are acceptable to those doing the signing-off.  
 - Agree far-in-advance the sign-off criteria.  As discussed in [Risk Theory](../thinking/Evaluating-Risk.md), people have a habit of heavily discounting future risk, and it's much easier to get agreement on the _criteria_ than it is to get the sign-off. 
 
## Evolution Of Process

Writing software and designing processes are often overlapping activities.  Often we build processes when we are writing software.  Since designing a process is an activity like any other on a project, you can expect that the Risk-First explanation for why we do this is _risk management_.  

Processes arise because of a desire to mitigate risk.  When whole organisations follow that desire independently, they end up following an evolutionary or gradient-descent approach to risk reduction (as we will see below).

Here, we are going to look at how a [Business Process](https://en.wikipedia.org/wiki/Business_process) might mature within an organisation.

> "**Business Process** or **Business Method** is a collection of related, structured activities or tasks that in a specific sequence produces a service or product (serves a particular business goal) for a particular customer or customers." - [Business Process, _Wikipedia_](https://en.wikipedia.org/wiki/Business_process)

Let's look at an example of how that can happen in a step-wise way.

![Step 1: clients `C` need `A` to do their jobs, incurring Complexity Risk.](/images/generated/risks/process/step1.png)

1.  As the above diagram shows, there exists a group of people inside a company `C`, which need a certain something `A` in order to get their jobs done.  Because they are organising, providing and creating `A` to do their jobs, they are responsible for all the [Complexity Risk](Complexity-Risk.md) of `A`. 

![Step 2: team `B` doing `A` for clients `C`.  Complexity Risk is transferred to B, but C pick up Staff Risk.](/images/generated/risks/process/step2.png)

2.  Because `A` is risky, a new team (`B`) is spun up to deal with the [Complexity Risk](Complexity-Risk.md), which might let `C` get on with their "proper" jobs.  As shown in the diagram above, this is really useful:  `C`'s is job much easier (reduced [Complexity Risk](Complexity-Risk.md)) as they have an easier path to `A` than before.  But the risk for `A` hasn't really gone - they're now just dependent on `B` instead.  When members of `B` fail to deliver, this is [Staff Risk](Scarcity-Risk.md#staff-risk) for `C`.   

![Step 3: team `B` formalises the dependency with a Process](/images/generated/risks/process/step3.png)

3. Problems are likely to occur eventually in the `B`/`C` relationship.  Perhaps some members of the `B` team give better service than others, or deal with more variety in requests?   In order to standardise the response from `B` and also to reduce scope-creep in requests from `C`, `B` organises bureaucratically so that there is a controlled process (`P`) by which `A` can be accessed.  Members of teams `B` and `C` now interact via some request mechanism like forms (or another protocol).  

  - As shown in the above diagram, because of `P`, `B` can now process requests on a first-come-first-served basis and deal with them all in the same way: the more unusual requests from `C` might not fit the model.  These [Process Risks](Process-Risk.md) are now the problem of the form-filler in `C`.   
  - Since this is [Abstraction](../thinking/Glossary.md#abstraction), `C` now has [Invisibility Risk](Communication-Risk.md#invisibility-risk) since it can't access team `B` and see how it works.
  - Team `B` may also use `P` to introduce other bureaucracy like authorisation and sign-off steps or payment barriers.   All of this increases [Process Risk](Process-Risk.md) for team C. 

![Person D acts as a middleman for customers needing some variant of `A`, transferring Complexity Risk](/images/generated/risks/process/step4.png)

4.  Teams like `B` can sometimes end up in "Monopoly" positions within a business.  This means that clients like `C` are forced to deal with whatever process `B` wishes to enforce.  Although they are unable to affect process `P`, `C` still have risks they want to transfer.  

 - In the above diagram, Person `D`, who has experience working with team `B` acts as a middleman for some of `C`, requiring some variant of `A` .  They are able to help navigate the bureaucracy (handle with [Process Risk](Process-Risk.md)).  
 - The cycle potentially starts again: will `D` end up becoming a new team, with a new process? 

In this example, you can see how the organisation evolves process to mitigate risk around the use (and misuse) of `A`.  This is an example of _Process following Strategy_: 

> In this conception, you can see how the structure of an organisation (the teams and processes within it, the hierarchy of control) will 'evolve' from the resources of the organisation and the strategy it pursues.  Processes evolve to meet the needs of the organisation." - [Henry Minzberg, _Strategy Safari_](http://www.mintzberg.org/books/strategy-safari)

Two key take-aways from this:

 - **The System Gets More Complex**: with different teams working to mitigate different risks in different ways, we end up with a more complex situation than when we started.  Although we've _evolved_ in this direction by mitigating risks, it's not necessarily the case that the end result is _more efficient_.  In fact, as we will see in [Map-And-Territory Risk](Map-And-Territory-Risk.md#markets), this evolution can lead to some very inadequate (but nonetheless stable) systems.
 - **Organisational process evolves to mitigate risk**: just as we've shown that [actions are about mitigating risk](../overview/All-About-Risk.md), we've now seen that these actions get taken in an evolutionary way.  That is, there is "pressure" on our internal processes to reduce risk.  The people maintaining these processes feel the risk, and modify their processes in response.  Let's look at a real-life example: 

## An Example - Release Processes

Over the years I have worked in the Finance Industry it's given me time to observe how, across an entire industry, process can evolve both in response to regulatory pressure, organisational maturity and mitigating risk:

1. Initially, I could release software by logging onto the production accounts with a shared password that everyone knew, and deploy software or change data in the database.  
2. The first issue with this is [Agency Risk from bad actors](Agency-Risk.md):  how could you know that the numbers weren't being altered in the databases? _Production Auditing_ was introduced so that at least you could tell what was being changed and when, in order to point the blame later.
3. But there was still plenty of scope for deliberate or accidental [Dead-End Risk](Complexity-Risk.md#dead-end-risk) damage.  Next, passwords were taken out of the hands of developers and you needed approval to "break glass" to get onto production.  
4. The increasing complexity (and therefore [Complexity Risk](Complexity-Risk.md)) in production environments meant that sometimes changes collided with each other, or were performed at inopportune times.  Change Requests were introduced.  This is an approval process which asks you to describe what you want to change in production, and why you want to change it.  
5. The change request software is generally awful, making the job of raising change requests tedious and time-consuming.  Therefore, developers would _automate_ the processes for release, sometimes including the process to write the change request.  This allowed them to improve release cadence at the expense of owning more code.
6. Auditors didn't like the fact that this automation existed, because effectively, that meant that developers could get access to production with the press of a button, taking you back to step 1...

## Bureaucracy

Where we've talked about process evolution above, the actors involved have been acting in good faith:   they are working to mitigate risk in the organisation.  The [Process Risk](Process-Risk.md) that accretes along the way is an _unintended consequence_:  There is no guarantee that the process that arises will be humane and intuitive.  Many organisational processes end up being baroque or Kafka-esque, forcing unintuitive behaviour on their users.  This is partly because process design is _hard_ and it's difficult to anticipate all the various ways a process will be used ahead-of-time.  

But [Parkinson's Law](https://en.wikipedia.org/wiki/Parkinsons_law) takes this one step further:  the human actors shaping the organisation will abuse their positions of power in order to further their own careers (this is [Agency Risk](Agency-Risk.md), which we will come to in a future section):

> "Parkinson's law is the adage that "work expands so as to fill the time available for its completion". It is sometimes applied to the growth of bureaucracy in an organisation... He explains this growth by two forces: (1) 'An official wants to multiply subordinates, not rivals' and (2) 'Officials make work for each other.'" - [Parkinson's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Parkinsons_law)  

This implies that there is a tendency for organisations to end up with _needless levels of [Process Risk](Process-Risk.md)_.

To fix this, design needs to happen at a higher level.  In our code, we would [Refactor](Complexity-Risk.md#Technical-Debt) these processes to remove the unwanted complexity.  In a business, it requires re-organisation at a higher level to redefine the boundaries and responsibilities between the teams.  

Next in the tour of [Dependency Risks](Dependency-Risk.md), it's time to look at [Boundary Risk](Boundary-Risk.md).


