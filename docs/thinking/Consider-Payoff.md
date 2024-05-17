---
title: Consider Payoff
description: Good software developers place shrewd bets.
url: https://riskfirst.org/thinking/Consider-Payoff

featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/cash.svg">Payoff</image-artifact>'
tags:
 - Thinking Risk-First
 - Goal
 - Attendant Risk
 - Risk Landscape
 - Bets
 - Payoff
 - Balance Of Risk
 - Language (Track)
sidebar_position: 10
tweet: yes
---

# Consider Payoff

Good software developers are actually good gamblers.  Perhaps not at the poker table, but in the sense that whenever you start a piece of development work you can't be sure exactly how long it'll take, what you'll end up with or whether the audience will be happy with it.  If you manage to get this right then you've made a bet and won.  

![What's the Payoff](/img/generated/principles/payoff.png)

So in this section, we're going to look at _bets_, starting with some of the math around making good bets (in the idealised, gambling sense) and then looking at how software development is different from real gambling, and how we can use that to our advantage.

## The Structure of a Bet

First, let's cover some commonly used terms to describe bets and betting which we'll find useful later on.

![Different Payoffs](/img/generated/introduction/payoffs.png)

In the diagram above is a simple example of a bet with just two outcomes: win and lose.  It could be a coin flip, or a two horse race or the winner of an evenly-matched tennis game.  Let's talk about some gambling terms: 

 - **Stake**: This is the amount you have to pay to take the bet.  In this case, £10.
 - **Payoff**: The _payoff_ (or gross winnings) from winning this bet is £40.  This bet has a great payoff (given the probability of winning).  Ideally, we should be looking for bets with high payoff.  The payoff of losing is £0.
  - **Value**:  The value (or _net winnings_) of winning this bet is £30.  That is, you'll make back your original stake of £10 and be given £30 more.  
 - **Odds**: For this bet, the _odds_ are in your favour: although the probability of winning is 50%, the winning payoff is four times the stake.  There are various ways of presenting odds used in different places in the world, so I am not going to get into the vagaries of this except to say the odds and the probability of winning are different.   Another way to look at this is...
 - **Return on Investment (ROI)**: Assuming you win the bet, the return on your investment is 300%.   This is the outcome divided by the stake to give a ratio or percentage.  This is a handy calculation because often bets have different sizes, and the ROI calculation controls for that.  Often, firms will look for projects to invest in where the return on investment is greater than some figure (perhaps 100%).  So the above bet seems like a great investment!

| Term                                 | Win  | Lose |
|:-------------------------------------|-----:|-----:|
| Stake                                | £10  | £10  |
| Payoff                               | £40  | £0   |
| Value (Payoff - Stake)               | £30  | £-10 |
| Return On Investment (Value / Stake) | 300% | 0%   |

The table above summarises these terms.  It's important that as developers, we try to invest our time into activities that will have a good payoff for the project we're on.  So we need to consider the winning and losing scenarios _together_.  So I want to introduce two more terms. 

| Result                           | Stake   | Value | Expected Value  (Value&nbsp;x&nbsp;Probability) | Expected Return (Expected&nbsp;Value&nbsp;/&nbsp;Stake) |
|:--------------------------------:|--------:|------:|--------------------------------------:|-----------------------------------------:|
| Win <br />(.5&nbsp;probability)  |         | £30   | £15 (£30 x .5)                        |                                          |
| Lose <br />(.5&nbsp;probability) |         | -£10  | -£5 (-£10 x .5)                       |                                          |
| **Total**                        | **£10** |       | **£10**                               | **100%**                                 |

- **Expected Value**: The probability-weighted average value of the outcome.  That is, the values of each outcome multiplied by their probabilities, added up.  The table above shows this calculation for our bet coming out at £10.
- **Expected Return**: The probability-weighted return of the bet.  That is, the expected value divided by the stake.

It's worth noting that these terms come from mathematicians working in the 19th century, when _expectation_ meant chance but nevertheless the name has stuck and is commonly used across the finance industry.  
 
## Should You Go All-In?

Faced with a bet having an expected return of 100% it might be tempting to go "all in" - that is, bet everything you have.  However, this would risk being wiped out!   Fund managers practice _diversification_. That is, holding a variety of different stocks in their portfolio, rather than betting big on a single stock.  Deciding how much to bet and which _portfolio_ of bets to take is an area of considerable [theory](https://en.wikipedia.org/wiki/Modern_portfolio_theory) and debate, but nevertheless this seems like good advice in other areas such as for running a software project or career development too.  

One final note on sizing bets:  [The Kelly Criterion](https://en.wikipedia.org/wiki/Kelly_criterion) suggests that what you're trying to do is not maximise the result of _one bet,_ but your lifelong series of bets.  Faced with our example bet over and over again, you'll win and lose many times.  But the way to maximise the growth over that series is to stake one third of your pot each time.

:::tip

In the film [The Martian](https://www.imdb.com/title/tt3659388), NASA scientists are trying to decide the best way to recover a stranded Matt Damon from the surface of Mars, where he'd been lost and presumed dead.  In order to get a $500 million dollar supply probe out to Mars in a hurry, Jeff Daniels' character, Teddy, the director of NASA, decides to skip the testing phase and predictably, the probe explodes during launch.  The whole sequence is there to demonstrate the _incompetence_ of Teddy as a risk manager.  And while he's putatively on their team,  Teddy is the film's antagonist: the other characters are constantly fighting against his poor risk management skills to get the job done. 

While this fictional, it is a great example of going "All In" and risking everything on a short-term technical bet.  Yes, the [Payoff](Glossary.md#payoff) would have been great if this had worked, but the stakes were very high and the probability of success was really low.  Don't be Teddy.

:::

## Back To Software

As with NASA, the bets we are making in software development aren't directly about money.   We want to make bets that reduce the risks to our project's [Health](Health.md), whether that's reducing security risks, increasing sales opportunities, making our software more robust or making it easier to adopt and use.  So, the bets we make need to be framed in those terms.

Sometimes, there will be multiple _actions_ you could take on a project and you have to choose the best one: 

- There's the risk you'll decide wrongly.
- And, making a decision takes time, which could add risk to your schedule.
- And what's the risk if the decision doesn't get made?

The fruits of this gambling are revealed when we [meet reality](../thinking/Glossary.md#meet-reality) and we can see whether our bets were worthwhile.

Very occasionally, you'll be in a place where your hand is forced and you have to take one of only a handful of actions, or there is a binary decision.  A so called "rock and a hard place".  But as we'll see in the third example below, even here you can usually change the action (and therefore the payoff) in your favour.   

### Example 1: YAGNI 

YAGNI is an acronym for "You Aren't Gonna Need It":

> YAGNI originally is an acronym that stands for "You Aren't Gonna Need It". It is a mantra from Extreme Programming that's often used generally in agile software teams. It's a statement that some capability we presume our software needs in the future should not be built now because "you aren't gonna need it".  - [YAGNI, _Martin Fowler_](https://www.martinfowler.com/bliki/Yagni.html)

The idea makes sense:  if you take on extra work that you don't need, _of course_ you'll be accreting risk - you're taking time away from sorting out the real problems!  You'll also have a greater body of code to manage, which is [also a risk](../risks/Complexity-Risk.md).

But, there is always the opposite opinion:  [You _Are_ Gonna Need It](http://wiki.c2.com/?YouAreGonnaNeedIt).  As a simple example, we often add log statements in our code as we write it (so we can trace what happened when things go wrong), though following YAGNI strictly says we shouldn't.  

So which is right?  We should conclude that we do the work _if there is a worthwhile [Payoff](../thinking/Glossary.md#payoff)_.  

 - Logging statements are _good_, because otherwise, you're increasing the risk that in production, no one will be able to understand [how the software went wrong](../risks/Dependency-Risk#invisibility-risk).
 - However, adding them takes time, which might [risk us not hitting our schedule](../risks/Scarcity-Risk.md#schedule-risk).
 - Also, we have to manage larger log files on our production systems.  _Too much logging_ is just noise, and makes it harder to figure out what went wrong.  This increases the risk that our software is [less transparent in how it works](../risks/Complexity-Risk.md).
 
So, it's a trade-off: continue adding logging statements so long as you feel that overall, the activity [pays off](../thinking/Glossary.md#payoff) reducing overall risk.

### Example 2: Over-Engineering

Some people would argue that YAGNI is really a weapon to combat over-engineering.  In a software project this often materialises as developers...

 - introducing too many abstractions, parameters, options into the code they're building.
 - becoming obsessed with the "beauty" or "purity" of the code they're writing.
 - obsessing over metric perfection, such as going from 99% to 100% code-coverage.
 - reaching for heavyweight libraries or tools to solve trivial issues.

It's important to reflect on the fact that there are other factors at play here:  people know they'll be judged on the quality of their work, don't want to make mistakes and might want to add tools or new skills to their CVs (all of which we'll cover in [Agency Risk](../risks/Agency-Risk.md).  If you are running the development team, you need to be aware of this risk and work hard to minimise it.

| Example                  | Argument In Favour                                      | "Do It Now" Expected Value                                                                                                                | "Do It Later" Option Expected Value                                                      |
|--------------------------|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Introducing Abstractions | "Feels like better engineering and future-proofing"        | <ul><li>Doesn't get used immediately</li> <li>Up-front development time</li> <li>Adds complexity</li> <li>Harder to maintain</li><li>Unlikely to anticipate right abstractions</li> </ul> | <ul><li>Some re-work </li><li>Will reed to re-familiarise with the code</li></ul>                                    |
| Beauty                   | "As software artiste, I'm searching for perfection..."     | <ul> <li>Up-front development time</li> <li>Hard to decide the end point</li> </ul>                                         | <ul><li>Code less well factored</li><li>Might be harder to work with and change</li> </ul> |
| 100% Coverage            | "Feels perfect.  I don't like to see the red."             | <ul> <li>Up-front development time</li> </ul>                                                                               |                                     |
| Using Heavyweight tools  | "We'll have to replace our simple version sooner or later" | <ul> <li>Learning curve time</li> <li>Adds complexity</li> <li>Harder to maintain</li> </ul>                                | <ul><li>Some re-engineering </li> </ul>                                    |

With that caveat aside, it should be clear that the way to escape the over-engineering trap is to think hard about [Expected Value](Glossary.md#expected-value).   The above table tries to capture the difference in [Expected Value](Glossary.md#expected-value) between "Doing it Now" versus having the _option to_ "Do it Later".   

There is no hard and fast right answer here.  Sometimes, it is correct to strive for 100% coverage or polish the code factorisation.  But hopefully thinking about the choice in terms of these two alternatives is helpful.

### Example 3: "Do The Simplest Thing That Could Possibly Work"

The previous example applied [Expected Value](Glossary.md#expected-value) to avoid over-engineering.  Let's now consider an example of where [Expected Value](Glossary.md#expected-value) suggests we do _more_ work.

Another mantra from Kent Beck (originator of the [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming) methodology), is "Do The Simplest Thing That Could Possibly Work", which is closely related to YAGNI and is an excellent razor for avoiding over-engineering.  

At the same time, by adding "Could Possibly", Beck is encouraging us to go beyond straightforward iteration and use our brains to pick apart the simple solutions, avoiding them if we can logically determine when they would fail. 

Our risk-centric view of this strategy would be:

- Every action you take on a project has its own [Attendant Risks](../thinking/Glossary.md#attendant-risk).
- The bigger or more complex the action, the more [Attendant Risk](../thinking/Glossary.md#attendant-risk) it'll have.
- The reason you're taking action _at all_ is because you're trying to reduce risk elsewhere on the project.
- Therefore, the best [Expected Value](Glossary.md#expected-value) is likely to be the action with the least [Attendant Risk](../thinking/Glossary.md#attendant-risk).
- So, usually this is going to be the simplest thing.

So, "Do The Simplest Thing That Could Possibly Work" is really a helpful guideline for Navigating the [Risk Landscape](../risks/Risk-Landscape.md), but this analysis shows clearly where it's left wanting:

 - _Don't_ do the simplest thing if there are other things with a better [Expected Value](../thinking/Glossary.md#expected-value) available.

An example of where this might be the case, think about how you might write a big, complex function (for example, processing interest accrual on a loan).  The _simplest thing_ might be to just write a single function and a few unit tests for it.  However, a slightly _less simple thing_ that would work might be to decompose the function into multiple steps, each with its own unit tests.  Perhaps you might have a step which calculates the number of days where interest is due (working days, avoiding bank holidays), another step that considers repayments, a step that works out different interest rates and so on.   

![Different payoff for doing the simplest thing vs something slightly less simple with more effort](/img/generated/introduction/risk_landscape_4_simplest.png)

Functional decomposition and extra testing might not be the _simplest thing_, but it might reduce risks in other ways - making the code easier to understand, easier to test and easier to modify in the future.  So deciding up-front to accept this extra complexity and effort in exchange for the other benefits might seem like a better [Payoff](../thinking/Glossary.md#payoff) than the simplest thing. 
 
### Example 4: Continue Testing or Release?

You're on a project and you're faced with the decision - release now or do more User Acceptance Testing (UAT)?  

Obviously, in the ideal world, we want to get to the place on the [Risk Landscape](../thinking/Glossary.md#risk-landscape) where we have a tested, bug-free system in production.  But we're not there yet, and we have funding pressure to get the software into the hands of some paying customers.  But what if we disappoint the customers and create bad feeling?   The table below shows an example: 

|Risk Managed          |Action                       |Attendant Risk                           |Payoff             | 
|----------------------|-----------------------------|-----------------------------------------|-------------------|
|Funding Risk          |**Go Live**                  |Reputational Risk, Operational Risk      |MEDIUM             |
|Implementation Risk   |**Another Round of UAT**     |Worse Funding Risk, Operational Risk     |LOW                |

This is (a simplification of) the dilemma of lots of software projects - _test further_, to reduce the risk of users discovering bugs ([Implementation Risk](../risks/Feature-Risk.md#implementation-risk)) which would cause us reputational damage, or _get the release done_ and reduce our [Funding Risk](../risks/Scarcity-Risk.md#funding-risk) by getting paying clients sooner. 

Lots of software projects end up in a phase of "release paralysis" - wanting things to be perfect before you show them to customers.  But sometimes this places too much emphasis on preserving reputation over getting paying customers.  Also, getting real customers is [meeting reality](Glossary.md#meet-reality) and will probably surface new [hidden risks](Glossary.md#hidden-risk) that are missing from the analysis.  

## Manipulating The Payoff

An important take-away here is that you don't have to accept the dilemma as stated.  You can change the actions to improve the payoff, and [meet reality more gradually](Meeting-Reality#the-cost-of-meeting-reality):  

 - Start a closed [beta test](../practices/Glossary-Of-Practices.md#beta-test) with a group of friendly customers
 - Use [feature toggles](../practices/Glossary-Of-Practices.md#feature-toggle) to release only some components of the software
 - [Dog-food](../practices/Glossary-Of-Practices.md#dog-fooding) the software internally so you can find out whether it's useful in its current state.

A second approach is to improve the payoff of the losing outcomes.  Here are some examples:

 - Even if my Software-as-a-Service business goes bust, ideally I'll have learnt a lot for my next business and made some important industry contacts.
 - If I take a job on a project using React, then even if the job doesn't work out, I'll have learnt React. 
 - TODO - another example.

**See:** The [Purpose of the Development Team](../bets/Purpose-Development-Team.md) article contains further examples of software bets.

## Summing Up

In this section, we've looked at how bets worked, discussed terms like _stake_, _payoff_ and _expected value_ and applied them to software development.

As we've seen, figuring out payoff is made more tricky because often the actions you take might depend on each other, the payoff might not be immediate and (unlike making a bet in the real world) you can't be certain what the payoff will be in advance.   But unlike gambling, you are able to manipulate the stakes and the payoff by coming up with your own approach.

Many Agile frameworks such as [Scrum](../bets/Purpose-Development-Team#case-2-scrum) place a lot of emphasis on estimating and time-boxing work:  trying to work out when you're going to deliver something and sticking to it.  But Risk-First is suggesting a totally different focus:  factors like _time taken to deliver_ and _coordinating the completion of work_ are just risks to consider along with all the others.  

The most valuable project management skill is being able to chart a course which minimises risk.  Sometimes, that will mean [hitting a deadline](../risks/Deadline-Risk.md), but equally it could be [reducing codebase complexity](../risks/Complexity-Risk.md), [making a feature more accessible](../risks/Feature-Risk.md#feature-access-risk) or [removing problematic dependencies](../risks/Software-Dependency-Risk.md).

The most important skill is to be able to _weigh up the risks_, decide on a course of action that gives you the greatest expected value and look for ways of increasing the payoff of winning and losing.

Often, urgent risks _can_ crowd out the merely important.  Why does that happen, and what should we do about it?  In the next section, we'll look at how you can account for different levels of _urgency_ in your payoff considerations.   

On to [Evaluating Risk](Evaluating-Risk.md).


