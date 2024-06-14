---
title: Consider Payoff
description: To work out what to do next, consider the upside and downside risks you're addressing, and also what risks you introduce.


featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/cash.svg">Payoff</image-artifact>'
tags:
 - Thinking Risk-First
 - Goal
 - Attendant Risk
 - Risk Landscape
 - Bet
 - Payoff
 - Balance Of Risk
 - Language (Track)
sidebar_position: 6
tweet: yes
---

# Consider Payoff

How do you choose what to work on next?

![What's the Payoff](/img/generated/principles/payoff.png)

Sometimes, there will be multiple _actions_ you could take on a project and you have to choose the best one: 

- There's the risk you'll decide wrongly.
- And, making a decision takes time, which could add risk to your schedule.
- And what's the risk if the decision doesn't get made?

We can't know in advance how well any action we take will work out.  Therefore, [Taking Action](../thinking/Glossary.md#taking-action) is a lot like placing a [bet](/bets/Start).  

[Payoff](../thinking/Glossary.md#payoff) then is our judgement about whether we expect an action to be worthwhile:  are the risks we escape _worth_ the attendant risks we will encounter?  We should be able to _weigh these separate risks in our hands_ and judge whether the [Payoff](../thinking/Glossary.md#payoff) makes a given [Action](../thinking/Glossary.md#taking-action) worthwhile.  

The fruits of this gambling are revealed when we [meet reality](../thinking/Glossary.md#meet-reality) and we can see whether our bets were worthwhile.

Very occasionally, you'll be in a place where your hand is forced and you have to take one of only a handful of actions, or there is a binary decision.  A so called "rock and a hard place".  But as we'll see in the third example below, even here you can usually change the action (and therefore the payoff) in your favour.   

## Considering Payoff: Examples

### Example 1: YAGNI 

As a flavour of what's to come, let's look at YAGNI, an acronym for "You Aren't Gonna Need It":

> YAGNI originally is an acronym that stands for "You Aren't Gonna Need It". It is a mantra from Extreme Programming that's often used generally in agile software teams. It's a statement that some capability we presume our software needs in the future should not be built now because "you aren't gonna need it".  - [YAGNI, _Martin Fowler_](https://www.martinfowler.com/bliki/Yagni.html)

The idea makes sense:  if you take on extra work that you don't need, _of course_ you'll be accreting risk - you're taking time away from sorting out the real problems!  You'll also have a greater body of code to manage, which is [also a risk](../risks/Complexity-Risk.md).

But, there is always the opposite opinion:  [You _Are_ Gonna Need It](http://wiki.c2.com/?YouAreGonnaNeedIt).  As a simple example, we often add log statements in our code as we write it (so we can trace what happened when things go wrong), though following YAGNI strictly says we shouldn't.  

So which is right?  We should conclude that we do the work _if there is a worthwhile [Payoff](../thinking/Glossary.md#payoff)_.  

 - Logging statements are _good_, because otherwise, you're increasing the risk that in production, no one will be able to understand [how the software went wrong](../risks/Dependency-Risk#invisibility-risk).
 - However, adding them takes time, which might [risk us not hitting our schedule](../risks/Scarcity-Risk.md#schedule-risk).
 - Also, we have to manage larger log files on our production systems.  _Too much logging_ is just noise, and makes it harder to figure out what went wrong.  This increases the risk that our software is [less transparent in how it works](../risks/Complexity-Risk.md).
 
So, it's a trade-off: continue adding logging statements so long as you feel that overall, the activity [pays off](../thinking/Glossary.md#payoff) reducing overall risk.

### Example 2: Do The Simplest Thing That Could Possibly Work

Another mantra from Kent Beck (originator of the [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming) methodology), is "Do The Simplest Thing That Could Possibly Work", which is closely related to YAGNI and is an excellent razor for avoiding over-engineering.  

At the same time, by adding "Could Possibly", Beck is encouraging us to go beyond straightforward iteration and use our brains to pick apart the simple solutions, avoiding them if we can logically determine when they would fail. 

Our risk-centric view of this strategy would be:

- Every action you take on a project has its own [Attendant Risks](../thinking/Glossary.md#attendant-risk).
- The bigger or more complex the action, the more [Attendant Risk](../thinking/Glossary.md#attendant-risk) it'll have.
- The reason you're taking action _at all_ is because you're trying to reduce risk elsewhere on the project.
- Therefore, the biggest [Payoff](../thinking/Glossary.md#payoff) is likely to be the one with the least [Attendant Risk](../thinking/Glossary.md#attendant-risk).
- So, usually this is going to be the simplest thing.

So, "Do The Simplest Thing That Could Possibly Work" is really a helpful guideline for Navigating the [Risk Landscape](../risks/Risk-Landscape.md), but this analysis shows clearly where it's left wanting:

 - _Don't_ do the simplest thing if there are other things with a better [Payoff](../thinking/Glossary.md#payoff) available.

An example of where this might be the case, think about how you might write a big, complex function (I'm thinking of a function to process interest accrual), but pick your own example).  The _simplest thing_ might be to just write a single function and a few unit tests for it.  However, a slightly _less simple thing_ that would work might be to decompose the function into multiple steps, each with its own unit tests.  Perhaps you might have a step which calculates the number of days where interest is due (working days, avoiding bank holidays), another step that considers repayments, a step that works out different interest rates and so on.   

![Different payoff for doing the simplest thing vs something slightly less simple with more effort](/img/generated/introduction/risk_landscape_4_simplest.png)

Functional decomposition and extra testing might not be the _simplest thing_, but it might reduce risks in other ways - making the code easier to understand, easier to test and easier to modify in the future.  So deciding up-front to accept this extra complexity and effort in exchange for the other benefits might seem like a better [Payoff](../thinking/Glossary.md#payoff) than the simplest thing. 
 
### Example 3: Continue Testing or Release?

You're on a project and you're faced with the decision - release now or do more User Acceptance Testing (UAT)?  

Obviously, in the ideal world, we want to get to the place on the [Risk Landscape](../thinking/Glossary.md#risk-landscape) where we have a tested, bug-free system in production.  But we're not there yet, and we have funding pressure to get the software into the hands of some paying customers.  But what if we disappoint the customers and create bad feeling?   The table below shows an example: 

|Risk Managed          |Action                       |Attendant Risk                           |Payoff             | 
|----------------------|-----------------------------|-----------------------------------------|-------------------|
|Funding Risk          |**Go Live**                  |Reputational Risk, Operational Risk      |MEDIUM             |
|Implementation Risk   |**Another Round of UAT**     |Worse Funding Risk, Operational Risk     |LOW                |

This is (a simplification of) the dilemma of lots of software projects - _test further_, to reduce the risk of users discovering bugs ([Implementation Risk](../risks/Feature-Risk.md#implementation-risk)) which would cause us reputational damage, or _get the release done_ and reduce our [Funding Risk](../risks/Scarcity-Risk.md#funding-risk) by getting paying clients sooner. 

Lots of software projects end up in a phase of "release paralysis" - wanting things to be perfect before you show them to customers.  But sometimes this places too much emphasis on preserving reputation over getting paying customers.  Also, getting real customers is [meeting reality](Glossary.md#meet-reality) and will probably surface new [hidden risks](Glossary.md#hidden-risk) that are missing from the analysis.  

The important take-away here is that you don't have to accept the dilemma as stated.  You can change the actions to improve the payoff, and [meet reality more gradually](Meeting-Reality#the-cost-of-meeting-reality):  

 - Start a closed [beta test](../practices/Glossary-Of-Practices.md#beta-test) with a group of friendly customers
 - Use [feature toggles](../practices/Glossary-Of-Practices.md#feature-toggle) to release only some components of the software
 - [Dog-food](../practices/Glossary-Of-Practices.md#dog-fooding) the software internally so you can find out whether it's useful in its current state.

The diagram above shows our decision as _moves on the [Risk Landscape](../thinking/Glossary.md#risk-landscape)_.  Whether you "Go Live" first, or "UAT" first makes a difference to where you will end up.  Is there a further action you can take to get you from the "Dead End" to the "Goal"?  Perhaps. 
 
## Parting Ways With Agile

In reality, payoff is made more tricky because often the actions you take might depend on each other, the payoff might not be immediate and (unlike making a bet in the real world) you can't be certain what the payoff will be in advance.  Nevertheless, this is a really useful concept in software engineering because it clarifies the decision you're making.

Many Agile frameworks such as [Scrum](../bets/Purpose-Development-Team#case-2-scrum) place a lot of emphasis on estimating and time-boxing work:  trying to work out when you're going to deliver something and sticking to it.  But Risk-First is suggesting a totally different focus:  factors like _time taken to deliver_ and _coordinating the completion of work_ are just risks to consider along with all the others.  

The most valuable project management skill is being able to chart a course which minimises risk.  Sometimes, that will mean [hitting a deadline](../risks/Deadline-Risk.md), but equally it could be [reducing codebase complexity](../risks/Complexity-Risk.md), [making a feature more accessible](../risks/Feature-Risk.md#feature-access-risk) or [removing problematic dependencies](../risks/Software-Dependency-Risk.md).

The most important skill is to be able to _weigh up the risks_ and decide which course of action gives you the greatest payoff.

And in order to make the most of payoff, first you need to make sure you're [tracking those risks](Track-Risk.md) in the first place.
