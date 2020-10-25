---
title: Coding Bets
description: How Coding, Investing and Gambling are similar undertakings.
url: https://riskfirst.org/bets/Coding-Bets

date: 2019-06-04 16:32:03 +0000
featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/cards.svg">Coding Bets</image-artifact>'
categories:
 - Practices
 - News
order: 2
---

# Coding Bets

As developers, it might seem surprising that entrepreneurship and risk-taking are embedded in the work we do.  Any time you start coding a new feature, accept a new task, or go hunting for a bug on a software project, you're actually gambling on achieving a certain outcome.  That is, _making a bet_.

To make this case we'll look at just three different types of coding you can do (there are probably lots of others),  examining the nature of the stakes and the rewards for each type of bet.  Then, we'll look at how this insight might inform the development process.

So let's look at some examples...

## Refactoring: The Technical Debt Bet

##### "Making our codebase easier to reason about is worth the outlay of time."

[Complexity Risk](../risks/Complexity-Risk.md) is the risk of your project failing due to the weight of complexity in the codebase, and its resistance to change and comprehension.  Fred Brooks' calls this mode of failure _the tar pit_:

> " Large and small, massive or wiry, team after team has become entangled in the tar. No one thing seems to cause the difficulty - any particular paw can be pulled away. But the accumulation of simultaneous and interacting factors brings slower and slower motion. " - [Frederick P. Brooks, _The Mythical Man-Month_](https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959)

Refactoring is the notion that we can escape the tar pit by making our codebase simpler: If _project agility_ is some function of [Complexity Risk](../risks/Complexity-Risk.md) and your team's talent, the bet here is that you can trade some time _now_ on to move to a place of lower [Complexity Risk](../risks/Complexity-Risk.md), making it easier for the developers to _get stuff done_ in the future.

Refactoring requires that you have some _simplifying realisation_:

> "We don't need this extra parameter to this function"

> "Class A and Class B are actually different implementations of the same functionality"

> "We can encapsulate more behaviour by introducing the command pattern".

It looks like this:

![Stake and Reward for Fixing Technical Debt](/images/generated/practices/coding/refactoring.png)

**When you win** the codebase becomes easier to think about, and you delay the tar-pit.  
 
**When you lose** the [Complexity Risk](../risks/Complexity-Risk.md) improvement is less than you hoped, it takes longer than expected, or the _simplifying realisation_ doesn't pan out and you've lost a week.

## Spike Solutions: A New Technology Bet

##### "This new technology is a better fit for our problem than the one we're currently using."

> "Sometimes a user story is generated that cannot be well estimated until the development team does some actual work to resolve a technical question or a design problem. The solution is to create a “spike,” which is some work whose purpose is to provide the answer or solution. " - [Spike Solution, _Agile Dictionary_](http://agiledictionary.com/209/spike/) 

You might want to use a Spike Solution to test out replacing a badly-fitting technology for a more appropriate one.  That is, addressing [Software Dependency](../risks/Software-Dependency-Risk.md) problems.  For example:

> "Let's explore using [ElasticSearch](https://en.wikipedia.org/wiki/Elasticsearch) for searching instead of SQL Statements."

Alternatively, someone will suggest using an existing technology to eradicate lots of home-grown code.  Devoting parts of your code-base to solving problems that are already solved elsewhere is a source of [Complexity Risk](../risks/Complexity-Risk.md), because that code needs maintaining.

> "Let's throw away all these scripts and start using [Kubernetes](https://en.wikipedia.org/wiki/Kubernetes) to manage our components."

But will the new technology fit?  The answer is to try to "prove" the bet as quickly as possible using a time-boxed "Spike Solution".

![Stake and Reward for A Spike Solution](/images/generated/practices/coding/spike.png)

**When you win**, either the spike solution demonstrates clearly that it's definitely a good fit, or definitely _isn't_, for reasons that weren't apparent before starting.  The team learns something in the process. 
 
**When you lose** the developer can't get the spike solution working in the given time.  It won't be clear whether the technology is no good, too complex, the developer needed more time, or that they're not skilled enough?  Alternatively, they get the spike solution working for a specific use case, which is taken as success, but later other down-sides appear and it's apparent that the solution is more trouble than it's worth.
 
**Reduce the stakes by:**
 - Searching the Internet for stories of teams who've made the same bet.
 - Tackling the hardest use-case first.
 - Skipping writing tests: if it doesn't work out, they're waste.
 - Ruthlessly rejecting any work that isn't adding to the proof.

## New Feature Bets

##### "This new feature may be exactly what our users are looking for."

Often you get user-stories like these:

> "We need to provide an export-to-Excel function, as our competitors have one."

> "Users need to be able to customise the workflow, otherwise they'll go elsewhere."

> "We need a global search because people spend too much time menu-diving."

New features might help sell your software to new markets and please existing power users.  But too many features confuse users, obscuring the essential purpose of the software.  This is [Conceptual Integrity Risk](../risks/Feature-Risk.md#conceptual-integrity-risk) - trying to please everyone means you please no-one.  

![Stake and Reward for Adding New Features](/images/generated/practices/coding/new-feature.png)

**When you win** existing users welcome the change with open arms and maybe new markets open up.
 
**When you lose** the feature is just a diversion from the main purpose of the project, or it makes little impact. It might be used often enough to remain, but adds [Complexity Risk](../risks/Complexity-Risk.md) to the codebase.  A worse scenario is that excessive features confuse the user-base and lead to dissatisfaction.

**Reduce the stakes by:** 
 - Thoroughly triaging new features.
 - Building mock-ups.
 - Opening up channels of feedback.
 - Testing with trial populations.

## MVP: The New Market Bet

##### "Building a Minimum Viable Product is a bet on the market"

A product may not necessarily be a set of individual features that can be delivered one-at-a-time.   Sometimes there are multiple parts that only make sense as a whole.  You can't prove the parts individually, but you can prove a _minimal set of them_:

> "A minimum viable product (MVP) is a product with just enough features to satisfy early customers, and to provide feedback for future product development." - [Minimum Viable Product, _Wikipedia_](https://en.wikipedia.org/wiki/Minimum_viable_product)

The idea here is to make a bet that a market exists for a certain product, _and that there's money to be made from it_. 

> "People will use the search engine and we can monetise it with advertising".

> "People will buy pet food online"

> "Bots are the future: let's write one for the insurance business"

**When you win** a new business is started.
 
**When you lose**  you suffer a loss of credibility, and funding dries up.

![New Market Bet](/images/generated/practices/coding/new-market.png)
 
**Reduce the stakes by:** 
- Failing fast.  Implement the riskiest functionality first.
- Doing things that don't scale.  You can prove the market by doing a lot of processes manually.
- Relying on Dependencies:  for everything that isn't completely unique.

## Entrepreneurship

We're used to the idea of entrepreneurs taking risks on new business ideas (like in the MVP example, above).  But it's not really so different when you are developing in a team, or on a personal project.  So if you start by taking the view that every piece of work you do is a bet then it really helps to put into perspective what is at stake and what is to gain.  

The best gamblers (the ones who win over time) don't necessarily take bets they'll always win.  But they are always judging risk, stake and reward.  They try to place bets where the [Balance of Risk](../thinking/Glossary.md#balance-of-risk) is in their favour.   As developers, we should adopt the same mind-set:

 - What are the likely stakes?
 - What is the [Payoff](../thinking/Glossary.md#payoff)?
 - What are the odds?
 - Is the bet worth it?  Do the stakes justify the [Payoff](../thinking/Glossary.md#payoff)?
 - How can you maximise the stakes while minimising pay-off?  How long will it take for the pay-off to be worthwhile?
 - Are you making a long bet, or lots of small, short bets?  You can reduce the overall stakes by splitting work up and doing the riskiest part first.

## Raising The Stakes

A lot of businesses thrive by lowering the stakes.  For example, the houses being constructed near me have only eight or so different basic models.  By building the same thing over and over they really minimise the risk of doing it wrong.  _Novelty_ is a source of risk.

But software isn't like this.  Largely, we aren't building the exact same thing over and over.  Computers handle the repetition - coders are there for the novelty.  

What if you _are_ building the same cookie-cutter things over-and-over?   Perhaps it's time to change the bet?   By using new tools or techniques you would increase the risk, but also the reward would be to learn something new.  Alternatively, _build the library_ that automates the drudge-work so you can re-focus on the areas of risk.

[The Purpose Of The Development Team](Purpose-Development-Team.md) article takes this idea further: that everything we do in a development team is about managing a balance of risks across the portfolio of an entire team's efforts.
