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

- In order to meet this deadline (and because estimating is so hard) the Sprint must be planned carefully by the whole team, in a session of _planning poker_.

Analysing this behaviour using a Risk-First diagram looks like this:

[Scrum: Consequences Of Time-Boxing](/images/generated/estimating/planner/scrum6.png)

From left to right in the above diagram:

- The purpose of doing the Sprint at all is to mitigate [Feature Risk](../risks/Feature-Risk.md).  That is, the risk we _don't have the features our clients want_.
- We [Meet Reality](../thinking/Glossary.md#meet-reality) (i.e. have a Sprint Review) to check we've built the right thing.
- But the Sprint Review involves our Stakeholders, and wasting their time is a [Schedule Risk](../risks/Schedule-Risk.md).
- So, we **time-box** the work to mitigate that risk:  we only need involve the Stakeholders for a single Sprint Review every two weeks.
- But coordinating the whole development team to have working code to show _on the same day_ is risky - it's a [Coordination Risk](../risks/Coordination-Risk.md).
- So, we do **planning poker** to try and avoid the Coordination Risk problem of everyone needing to complete their work for the end of the Sprint.

## Unintended Consequences

But estimating is _really hard_:  In this series so far we've looked at four different dimensions of the software estimation problem:

- [Fill-The-Bucket](Fill-The-Bucket.md):  This is the easiest domain to work in.   All tasks are similar and uncorrelated.  We can _extrapolate_ to figure out how much time the next _n_ units will take to do.
- [Kitchen Cabinet](Kitchen-Cabinet.md):  In this domain, there is _hidden work_.  We don't know how much there might be.  If we can break down tasks into smaller units, then by the _law of averages_ and the _central limit theorem_, we can apply some statistics to figure out when we might finish.
- [Journeys](Journeys.md):  In this domain, work is heterogeneous and interconnected.  Different parts depend on each other, and a failure in one part might mean going back to the drawing board entirely.  The way to estimate in this domain is to _know the landscape_ and to build in _buffers_.  
- [Fractals](Fractals.md):  In this domain, [Parkinson's Law](../risks/Process-Risk.md#bureaucracy) is king.  There is always more work to be done.  The best thing we can do is try and apply ourselves to the _highest value_ work at any given point, and frequently refer back to reality to find out if we're building the right thing.

As a result, Sprints can often get derailed by poor estimating.  The _cure_ of estimating is worse than the _disease_ of wasting stakeholder time.

[Scrum: Consequences Of Time-Boxing](/images/generated/estimating/planner/poker.png)

As shown in the above diagram, the emphasis on estimating as a way to plan sprints leads to the following unintended consequences:

 - Focus attention on the success or failure of the Sprint to meet it's goals (that is - 
 - Focus attention on what can be completed in a two week window.
 - Draw attention away from what _should_ be completed in the long-term.
 - Draws attention away from other concerns _aside_ from estimation.
 - Introduces a disconnect between the long-term goal and the short term sprint.
 - Relies too heavily on estimating 

## Fixing It
 
OK, so how to fix it.

- Let's re-introduce into the planning game consideration for what is going on longer-term in the project.
- Let's also re-introduce consideration of _other risks_ besides how long something takes.  Sure, that's important, because it affects _value_, but it's not the only thing to worry about.

## Risk-First Planning

I'm going to suggest a different approach to planning, which allows you to focus both on short-term goals and long term ones at the same time.  

I'll walk through what this looks like, and show some examples of how it works, and then we can see if it addresses some of the issues with Scrum planning we've looked at.


 


 - Is velocity important?
 
 Scrum is constantly a race to get stuff done and meet estimates.  Quite often, the estimates turn out to be BS.
 
 Here's the rub: 90% of everything I've ever written has gone in the bin.
 
 This means, if I just concentrated on doing the _useful_ stuff, I would be 10X better than I am now.
 
What does that mean? 

> "Simplicity--the art of maximizing the amount of work not done--is essential."



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
