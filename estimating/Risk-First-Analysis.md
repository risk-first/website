---
title: Risk-First Analysis
description: Part of the 'Estimating' Risk-First Series, looking at an alternative to Scrum's Planning Poker
url: https://riskfirst.org/estimating/Risk-First-Analysis

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/logo/R1_logo_black.svg">Risk-First Analysis</image-artifact>'
categories:
 - Estimating
order: 8
---

# Risk-First Analysis: An Example

The previous article, [Fixing Scrum](Fixing-Scrum.md), examined Scrum's idea of "Sprints" and concluded:

- The main purpose of a Sprint is to ensure there is a **feedback loop**.  Every two weeks (or however long the Sprint is) we have a Sprint Review, and review the code that has been completed during the Sprint.  In Risk-First parlance, we call this [Meeting Reality](../thinking/Glossary.md#meet-reality).  It is the process of _testing your ideas against reality_ to make sure they stand up. 

- This Sprint Review is performed by the whole team.  All the code must be completed by the end of the sprint in order that it can be reviewed.  This introduces an artificial deadline to be met.

- In order to meet this deadline (and because estimating is so hard) the Sprint must be planned carefully by the whole team, in a session of **Planning Poker**.

![Scrum: Consequences Of Time-Boxing](/images/generated/estimating/planner/scrum-consequences.png)

The diagram above shows this behaviour in the form of a [Risk-First Diagram](../overview/Risk-First-Diagrams.md).  Put briefly:  _risks_ ([Schedule Risk](), [Feature Risk]()) are addressed by actions such as "Development", "Review" or "Planning Poker".  

##### On a Risk-First diagram, when you address a risk by taking an action, you draw a line through the risk.

## Estimating Is A Poor Tool

Seen like this, **Planning Poker** is a tool to avoid the [Coordination Risk]() problem of everyone needing to complete their work for the end of the Sprint.  But estimating is _really hard_:  In this series so far we've looked at three different ways in which software estimation deviates from the straightforward extrapolation (a.k.a, [Fill-The-Bucket](Fill-The-Bucket.md)) we learnt about in maths classes at school:

- [Kitchen Cabinet](Kitchen-Cabinet.md):  In this domain, there is _hidden work_.  We don't know how much there might be.  If we can break down tasks into smaller units, then by the _law of averages_ and the _central limit theorem_, we can apply some statistics to figure out when we might finish.
- [Journeys](Journeys.md):  In this domain, work is heterogeneous and interconnected.  Different parts depend on each other, and a failure in one part might mean going back to the drawing board entirely.  The way to estimate in this domain is to _know the landscape_ and to build in _buffers_.  
- [Fractals](Fractals.md):  In this domain, [Parkinson's Law](../risks/Process-Risk.md#bureaucracy) is king.  There is always more work to be done.  The best thing we can do is try and apply ourselves to the _highest value_ work at any given point, and frequently refer back to reality to find out if we're building the right thing.

![Three Dimensions From Fill-The-Bucket](/images/estimates/dimensions.png)

As a result, Sprints can often get derailed by poor estimating.  

##### Lesson 1: The _cure_ of estimating is worse than the _disease_ of wasting stake-holder time.

## Unintended Consequences

![Scrum: Consequences Of Time-Boxing](/images/generated/estimating/planner/poker.png)

As shown in the above diagram, the emphasis on _estimating as a way to plan sprints_ means that our measure of success is at the mercy of our ability to estimate.  Trust in a team can be _eroded_ not by their failure to "do engineering" but their failure to meet self-imposed deadlines.  As a result, we end up with some unintended consequences, as shown in the table below. 

|Planning Poker Focuses us on....                          |At the expense of...                                      |
|----------------------------------------------------------|----------------------------------------------------------|
|What can we commit to in a two-week window                |Where we _should_ be headed in the long-term.             |
|Narrow goals, such as _what we estimated could be done in a given time_|The wider goals of the product or project in general|
|Ability to estimate                                       |Concerns _aside_ from estimation (such as, are we making the software too complex, too hard to understand, to difficult to change).|

## Fixing It
 
How can we convert a planning session away from being estimate-focused and back to delivering us useful insights about what we are building?  We want a tool that promotes the following:

- Consideration for what is going on longer-term in the project.
- Consideration of risks besides how long something takes.  Sure, that's important, because it affects _value_, but it's not the only thing to worry about.
- _Deciding what is important_ above _what can fit into a sprint_.
- Making [Bets](../bets/Purpose-Development-Team.md):  what actions give the biggest [Payoff](../thinking/Glossary.md#payoff) for the smallest [Stake](../thinking/Glossary.md#stake)?

## A Scenario

I'm going to suggest a different approach to planning, which allows you to focus both on short-term goals and long term ones at the same time.  

I'll walk through what this looks like by example to show how it works and then we can see if it addresses some of the issues with Scrum planning we've looked at.  

![Use-Cases](/images/generated/estimating/planner/use-cases.png)

In the diagram above, there are four tasks pulled off the backlog for consideration.  (Obviously, we're keeping this simple - you might be looking at plenty more than this in a big team).  We've got four simple ones for our product here:  
 
 - **Fix a rendering bug** that showed up when doing a demo a week or so back.
 - **Building a search function into the product**, something the users have been asking for for a while.
 - **Refactoring the subscription** system, after some stats revealed that a lot of users don't make it all the way through the process of upgrading from the free tier to the premium tier.
 - **Fix the Continuous Integration Pipeline**:  developers are complaining that the state of the build isn't being reported correctly, and some tests are failing randomly.
 
As it stands, it is impossible to say what we should be tackling next.  In order to get to that, we have to answer four questions first.  Let's look at those.

## Question 1: What Is The Payoff?

For each of the tasks listed, there is some kind of [Payoff](../thinking/Glossary.md#payoff) for performing them.   That is, our circumstances improve from doing the task.  On a Risk-First diagram, actions are shown in "sign-post" style boxes.

![Rendering Bug](/images/generated/estimating/planner/rendering.png)

By fixing the rendering bug, we are trying to deal the problem that the software _demos badly_, and the risk that the potential customers don't trust that it will be worth their money.  Risk-First diagrams show chronology from left-to-right.  That is, on the left of the diagram is the world as it is now, whereas on the right is the world as it will be _after_ taking some actions.  To show that our action will eliminate some existing risk, we can strike it out by drawing a line through it.

## Question 2: What Is At Stake?

Let's move on to task 2, the **Search Function**.  

Again, there is a definite [Payoff](../thinking/Glossary.md#payoff) for implementing this:  we're going to remove some [Feature Risk](../risks/Feature-Risk.md), which is the risk (to us) that the features our product is supplying don't meet the client's (or the market's) requirements.  Writing code is all about identifying and removing [Feature Risk](../risks/Feature-Risk.md), and building products that fit the needs of their users.

![Search Function](/images/generated/estimating/planner/search.png)

As in the Rendering Bug example, we can show [Feature Risk](../risks/Feature-Risk.md) being eliminated by showing it on the left with a strike-out line.   However, it's been established during analysis that the way to implement this feature is to introduce [ElasticSearch](https://www.elastic.co), a third-party piece of software.  This in itself is a risk:  

- Are we going to find that easy to deploy and maintain?  
- What impact will this have on hosting charges?  
- Will it return useful results, or require endless "tuning"?  
- Will we be "tied in" to this dependency going forwards?

##### If an action leads to new risks, show them on the right side of the diagram.

To decide whether that's a bet worth taking, we need to ask the next question.

## Question 3:  What Is Our Goal?

The third question you need to always be asking is:  _what is our goal?_

Considered individually, the tasks on our backlog clearly are operations which change the risks we are facing, but unless we understand the _goal_ or _goals_ of the product, we're not really in a position to make judgements about whether some set of risks is better or worse.

![One Goal](/images/generated/estimating/planner/one-goal.png)

If we are a startup with some investors, they might have set us the goal themselves.  Perhaps the future funding of the business is predicated on our ability to generate a certain number of subscribers?  Then the business goal might look like that in the diagram above.

##### The rounded-corner containers with bold titles show _who a risk affects_.  

As you can see in this diagram _goals_ look very similar to _risks_.  This is by design:  a _goal_ is really an "upside risk":  it's a possible future, but one we'd like to _move towards_ instead of _away from_.

Risk-First diagrams show Actions _moving us away_ from one set of risks, and _moving to_ others on a "[Risk Landscape](../risks/Risk-Landscape.md)".

![Refactoring Subscriptions](/images/generated/estimating/planner/refactoring.png)

In the above diagram, we are showing that by removing [Communication Risk](../risks/Communication-Risk.md) around our product, we are _improving_ our chances of reaching the goal of 50K subscribers.  Also, we are showing in the diagram (via the arrow) that our _[Communication Risk](../risks/Communication-Risk.md)_ issues are impeding that goal.  That's a big assumption - it could well be that the users don't complete the upgrade for other reasons.  Maybe they find out the price during the upgrade and are put off, or they are being forced onto the upgrade screen by some dark patterns, but actually have no intention of upgrading the product at all.

![Refactoring Subscriptions](/images/generated/estimating/planner/arrows.png)

##### Show risks causing or preventing other risks using arrows

## Question 4: Judging Impact

So far, we've been looking at each task individually, working out which risks we're addressing, and which ones we're exposed to as a result.  But we need to consider the _impact_ (or size) of those risks, in order to work out whether a given action is worth our while.

![Continuous Integration Task With Impacts](/images/generated/estimating/planner/ci-impact.png)

In the above diagram, I've added stars to each risk to indicate the relative impacts of risks.   Since the (probable) impact of the [Coordination Risk]() is greater than impact on our [Schedule]() from the time we'll spend on it, this task represents a positive [Payoff]().

If you have plenty of spare talent and only a few tasks, then maybe that's enough and you can get to work on all the tasks that have a positive effect.   But if you're resource-constrained, then you should be hunting for the Actions with the biggest [Payoff](), and doing those.  

In order to do this, let's put all the risks and tasks into a planner grid.

![Use-Cases With Risk Profiles](/images/generated/estimating/planner/planner.png)

In the diagram above, we've simply put all of the actions and risks into a _planner grid_, according to which actions have the biggest [Payoff]().  

In the planning process, this is likely to be where most of the discussion and argument lies:  judging impact is highly subjective.   Different teams might end up with different ways of doing that:  a product owner or key stake-holder might make this decision _autocratically_, or perhaps the team will "vote" in some way for the relative sizes.   

We've talked about [Decision Making](../risks/Coordination-Risk#decision-making) before, but we'll get into ways to approach this in more detail in the [next section]().  But for now, let's talk about in which ways this is better or worse than Planning Poker.

## Advantages

- **We've made explicit the trade-offs for carrying out pieces of work**.  If _building the right thing_ is the most important thing we can do, then making sure the whole team are on the same page with respect to 

## Objections

### Hard Work?

At this point, you might be thinking "this is a lot of work compared to Planning Poker, where I just have to pull a number out of my a**e every few minutes, representing how hard something is to do".  Well, yes.  I'm not going to sugar-coat this:  _product planning is actually really hard_.  What we've developed here is a way to visually represent the trade-offs in the decision making process, so that we can engage the whole team.

### The Participation Problem

One argument made _for_ the planning game is that it gives everyone on the development team a voice.  In fact, this might be the biggest contribution of Planning Poker, and we definitely don't want to lose that.

In fact, we've not looked at how Risk-First Analysis can be _gamified_ in the way that Planning Poker is, and that is the subject of the next article, in which we show how this process can be made _fun to do_.

 


This s

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


Risk First Planning Game:  

X: time 
Y: importance  

Place risks on the board (as well as goals).   Try and mitigate risks with actions.  Consider whether 


# This is Just Design

The model we are describing here is just a graphic representation
