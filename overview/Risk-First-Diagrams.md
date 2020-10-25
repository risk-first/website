---
title: Risk-First Diagrams Explained
description: A quick primer to help parse a Risk-First diagram. 
url: https://riskfirst.org/overview/Risk-First-Diagrams

categories: 
 - Overview
 - News
order: 6
featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/maze.svg">Risk-First Diagrams</image-artifact>'
date: 2019-10-02 16:32:03 +0000
redirect_from: 
 - /Risk-First-Diagrams
---


# Risk-First Diagrams Explained

What’s going on in a Risk-First diagram?    Let’s look at a quick example:

![Complexity Risk and some mitigations](/images/generated/risks/complexity/complexity-risk2.png)

This is taken from the [Technical Debt discussion in Complexity Risk](../risks/Complexity-Risk.md#technical-debt).

What’s going on here?  Let’s work left-to right.

## On The Left

![Codebase Risk](/images/generated/summary/risk.png)

On the left, we can see [Codebase Risk](../risks/Complexity-Risk.md#codebase-risk), which is _The risk to a project of having a large, complex codebase to manage_.

Codebase Risk is an example - it could be any risk you’ve identified in your project / work / life / whatever.  It’s something you want to fix.

There are [all kinds of risks](../risks/Risk-Landscape.md) we face in life, and we attach different value or _criticality_ to them.  Most people will want to take action against the worst risks they face in their lives, and maybe put up with some of the lesser ones.

## In The Middle

![Refactoring](/images/generated/summary/action.png)

In the middle, we see the actions you could take against the risk.  So for the problem of an unwieldy codebase we could try and reduce the size of our codebase with some refactoring, or alternatively,  replace the whole codebase with a commercial or open-source library.  

## On The Right

![Refactoring](/images/generated/summary/attendant-risks.png)

_Nothing comes for free_.  On the right, you can see the downside of the action you've taken:  [Attendant Risks](../thinking/Glossary.md#attendant-risk) are the _new_ risks you now have as a result of trying to deal with the first one.

In the first diagram, the _refactoring_ and _simplification_ actions lead to [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) (because they'll take time to do), [Feature-Fit Risk](../risks/Feature-Risk.md#feature-fit-risk) (because a simpler product might not meet the user's needs so well).

Meanwhile using new _libraries_ and _languages_ leads to [Dependency Risk](../risks/Dependency-Risk.md) (because these libraries are new points of failure) and [Boundary Risk](../risks/Boundary-Risk.md) (in the form of lock-in).

## A Balance

It's worth pointing out that sometimes _the cure is worse than the disease_.  

By [Taking Action](../thinking/Glossary.md#taking-action) you might end up in a worse predicament than you started.  For example, cutting your legs off _would definitely cure your in-growing toenail_.  We have to use our judgement to decide on the right course of action!

So Risk-First diagrams represent a [balance of risk](../thinking/Glossary.md#balance-of-risk): whether or not you choose to take the action will depend on your evaluation of this balance.

## Containers For _Internal Models_

The risks on the left and right are contained in rounded-boxes.  That's because risks live in our [Internal Models](../thinking/Glossary.md#internal-model) - they're not real-world things you can reach out and touch.  They're _contained_ in things like brains and spreadsheets.  

![Blame Game](/images/generated/summary/blame.png)

In the above diagram, you can see how Jim is worried about his job security, probably because he's made a mistake at work.  Therefore, in his [Internal Model](../thinking/Glossary.md#internal-model) he has [Funding Risks](../risks/Scarcity-Risk.md#funding-risk), i.e. he's worried about money.

What does he do?  His [Action](../thinking/Glossary.md#taking-action) is to blame Bob.  If all goes according to plan, Jim has dealt with his risk and now Bob has the problems instead.

## What Else?

![Mitigated and Hidden](/images/generated/summary/hidden-mitigated.png)

There are two other marks we use quite commonly.  

We put the strike through the risk to show that it's been dealt with, or mitigated, and the cloud icon denotes [Hidden Risks](../thinking/Glossary.md#hidden-risk)- those _unknown unknowns_ that we couldn't have predicted in advance.

