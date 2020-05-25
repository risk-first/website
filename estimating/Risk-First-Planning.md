---
title: Risk-First Planning
description: Part of the 'Estimating' Risk-First Series, looking at an alternative to Scrum's PLanning Poker
url: https://riskfirst.org/estimating/Risk-First-Planning
image: /images/generated/titles/Risk-First-Planning.png
featuredimage: images/generated/single/Risk-First-Planning.png
categories:
 - Estimating
order: 8
---

# Risk-First Planning

In the previous article, [Fixing Scrum](Fixing-Scrum.md), examined Scrum's idea of "Sprints" and concluded:

- The main purpose of a Sprint is to ensure there is a **feedback loop**.  Every two weeks (or however long the Sprint is) we have a Sprint Review, and review the code that has been completed during the Sprint.  In Risk-First parlance, we call this [Meeting Reality](../thinking/Glossary.md#meet-reality).  It is the process of _testing your ideas against reality_ to make sure they stand up. 

- This Sprint Review is performed by the whole team.  All the code must be completed by the end of the sprint in order that it can be reviewed.  This introduces an artificial deadline to be met.

- In order to meet this deadline (and because estimating is so hard) the Sprint must be planned carefully by the whole team, in a session of **Planning Poker**.

![Scrum: Consequences Of Time-Boxing](/images/generated/estimating/planner/scrum6.png)

The diagram above shows this behaviour in the form of a [Risk-First Diagram](../overview/Risk-First-Diagrams.md).

## Estimating Is A Poor Tool

Seen like this, **Planning Poker** is a tool to avoid the [Coordination Risk]() problem of everyone needing to complete their work for the end of the Sprint.  But estimating is _really hard_:  In this series so far we've looked at three different ways in which software estimation deviates from the straightforward extrapolation we learnt about in maths classes at school:

- [Fill-The-Bucket](Fill-The-Bucket.md):  This is the easiest domain to work in.   All tasks are similar and uncorrelated.  We can _extrapolate_ to figure out how much time the next _n_ units will take to do.
- [Kitchen Cabinet](Kitchen-Cabinet.md):  In this domain, there is _hidden work_.  We don't know how much there might be.  If we can break down tasks into smaller units, then by the _law of averages_ and the _central limit theorem_, we can apply some statistics to figure out when we might finish.
- [Journeys](Journeys.md):  In this domain, work is heterogeneous and interconnected.  Different parts depend on each other, and a failure in one part might mean going back to the drawing board entirely.  The way to estimate in this domain is to _know the landscape_ and to build in _buffers_.  
- [Fractals](Fractals.md):  In this domain, [Parkinson's Law](../risks/Process-Risk.md#bureaucracy) is king.  There is always more work to be done.  The best thing we can do is try and apply ourselves to the _highest value_ work at any given point, and frequently refer back to reality to find out if we're building the right thing.

As a result, Sprints can often get derailed by poor estimating.  The _cure_ of estimating is worse than the _disease_ of wasting stakeholder time.

## Unintended Consequences

![Scrum: Consequences Of Time-Boxing](/images/generated/estimating/planner/poker.png)

As shown in the above diagram, the emphasis on _estimating as a way to plan sprints_ leads to the following unintended consequences:

|Planning Poker Focuses us on....                               |At the expense of...                                      |
|---------------------------------------------------------------|----------------------------------------------------------|
|What can we commit to in a two week window                     |Where we _should_ be headed in the long-term.             |
|Narrow goals, such as _what we estimated could be done in a given time_|The wider goals of the product or project in general|
|Ability to estimate                                            |Concerns _aside_ from estimation (such as, are we making the software too complex, too hard to understand, to difficult to change).|

## Fixing It
 
How can we convert a planning session away from being estimate-focused and back to delivering us useful insights about what we are building?  We want a tool that promotes the following:

- Consideration for what is going on longer-term in the project.
- Consideration of risks besides how long something takes.  Sure, that's important, because it affects _value_, but it's not the only thing to worry about.
- _Deciding what is important_ above _what can fit into a sprint_.
- Making [Bets](../bets/Purpose-Development-Team.md):  what actions give the biggest [Payoff](../thinking/Glossary.md#payoff) for the least outlay?

## Risk-First Planning: An Example

I'm going to suggest a different approach to planning, which allows you to focus both on short-term goals and long term ones at the same time.  

I'll walk through what this looks like by example to show how it works and then we can see if it addresses some of the issues with Scrum planning we've looked at.  

![Use-Cases](/images/generated/estimating/planner/example1.png)

In the diagram above, there are four tasks pulled off the backlog for consideration.  (Obviously, we're keeping this simple - you might be looking at plenty more than this in a big team).  We've got four simple ones for our product here:  
 
 - **Fix a rendering bug** that showed up when doing a demo a week or so back.
 - **Building a search function into the product**, something the users have been asking for for a while.
 - **Refactoring the subscription** system, after some stats revealed that a lot of users don't make it all the way through the process of upgrading from the free tier to the premium tier.
 - **Fix the Continuous Integration Pipeline**:  developers are complaining that the state of the build isn't being reported correctly, and some tests are failing randomly.
 
As it stands, it is impossible to say what we should be tackling next.  In order to get to that, we have to answer four questions first.  Let's look at those.

## Question 1: What Is The Payoff?

For each of the tasks listed, there is some kind of [Payoff](../thinking/Glossary.md#payoff) for performing them.   That is, our circumstances improve from doing the task.  On a Risk-First diagram, actions are shown in "sign-post" style boxes.

![Rendering Bug](/images/generated/estimating/planner/example1-4.png)

By fixing the rendering bug, we are trying to deal the problem that the software _demos badly_, and the risk that the potential customers don't trust that it will be worth their money.  Risk-First diagrams show chronology from left-to-right.  That is, on the left of the diagram is the world as it is now, whereas on the right is the world as it will be _after_ taking some actions.  To show that our action will eliminate some existing risk, we can strike it out by drawing a line through it.

###### On a Risk-First diagram, if you are removing an existing risk by taking an action, you draw a line through the risk.

## Question 2: What Is At Stake?

Let's move on to task 2, the Search Function.  Again, there is a definite [Payoff](../thinking/Glossary.md#payoff) for implementing this:  we're going to remove some [Feature Risk](../risks/Feature-Risk.md), which is the risk (to us) that the features our product is supplying don't meet the client's (or the market's) requirements.  Writing code is all about identifying and removing [Feature Risk](../risks/Feature-Risk.md), and building products that fit the needs of their users.

![Search Function](/images/generated/estimating/planner/example1-5.png)

As in the Rendering Bug example, we can show [Feature Risk](../risks/Feature-Risk.md) being eliminated by showing it on the left with a strike-out line.   However, it's been established during analysis that the way to implement this feature is to introduce [ElasticSearch](https://www.elastic.co), a third-party piece of software.  This in itself is a risk:  are we going to find that easy to deploy and maintain?  What impact will this have on hosting charges?  Will it return useful results?  Will we be "tied in" to this dependency going forwards?

###### If an action leads to new risks, show them on the right side of the diagram.

## Question 3:  What Is Our Goal?

The third question you need to always be asking is:  _what is our goal?_

Considered individually, the tasks on our backlog clearly are operations which change the risks we are facing, but unless we understand the _goal_ or _goals_ of the product, we're not really in a position to make judgements about whether some set of risks is better or worse.

![One Goal](/images/generated/estimating/planner/one-goal.png)

If we are a startup with some investors, they might have set us the goal themselves.  Perhaps the future funding of the business is predicated on our ability to generate a certain number of subscribers?  Then the business goal might look like that in the diagram above.

As you can see in this diagram _goals_ look very similar to _risks_.  This is by design:  a _goal_ is really an "upside risk":  it's a possible future, but one we'd like to _move towards_ instead of _away from_.

![Refactoring Subscriptions](/images/generated/estimating/planner/example1-6.png)

In the above diagram, we are showing that by removing [Communication Risk](../risks/Communication-Risk.md) around our product, we are _improving_ our chances of reaching the goal of 50K subscribers.  Also, we are showing in the diagram (via the arrow) that our _[Communication Risk](../risks/Communication-Risk.md)_ issues are impeding that goal.  That's a big assumption - it could well be that the users don't complete the upgrade for other reasons.  Maybe they find out the price during the upgrade and are put off, or they are being forced onto the upgrade screen by some dark patterns, but actually have no intention of upgrading the product at all.

![Refactoring Subscriptions](/images/generated/estimating/planner/arrows.png)

###### Show risks causing or preventing other risks using arrows

## Competing Goals


![Goals](/images/generated/estimating/planner/goals.png)

A confounding problem with goals is that _everyone has their own_.  While the business might be there to _make money_, everyone else on the project will have their own _personal_ goals (as you can see on the diagram above).  Where these are not aligned, we have the problem of [Agency Risk]().

Let's consider the third task: refactoring the subscription model.



![Use-Cases With Risk Profiles](/images/generated/estimating/planner/example2.png)

The above diagram gives us some indication _why_ the tasks are on the backlog:

 - **Refactoring subscriptions** is all about the bottom line: there's a risk that the company _isn't profitable enough_.  That might translate into management being replaced, or bankruptcy, or something.
 - 

 - **The Search Function** addresses a risk that our _clients may go elsewhere_:  they're annoyed with the product's lack of functionality.


 


 - Is velocity important?
 
 Scrum is constantly a race to get stuff done and meet estimates.  Quite often, the estimates turn out to be BS.
 
 Here's the rub: 90% of everything I've ever written has gone in the bin.
 
 This means, if I just concentrated on doing the _useful_ stuff, I would be 10X better than I am now.
 
What does that mean? 

> "Simplicity--the art of maximizing the amount of work not done--is essential."

## Going Meta




The problem is that estimation only addresses a single risk:  runway risk/time resource.  It says nothing about other risks that you might bump into.

Why is all my code in the bin?  I guess either it was badly written (which, probably it isn't, given that it's probably not objectively worse than the 10% that is in production) or, more likely, it didn't address _Feature RIsk_ properly, or, it was useful, but people didn't find out about how amazing it was.  Or, it was built to work on top of X, but then X was decomissioned (Dependency Risk) or, the budget was cut from the department and there was no funding (Dependency Risk... but maybe caused by Feature RIsk)?

No estimates says forget about trying to get the numbers right, because you can't.  What's better than that?  Let's try and focus on reducing that 90% of waste by thinking about _risks other than time_.

> "Ian: Your scientists were so preoccupied with whether or not they could, they didn’t stop to think if they should. " - [Jurassic Park]().


Risk First PLanning Game:  

X: time 
Y: importance  

Place risks on the board (as well as goals).   Try and mitigate risks with actions.  Consider whether 


# This is Just Design

The model we are describing here is just a graphic representation
