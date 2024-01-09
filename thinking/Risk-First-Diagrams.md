---
title: Risk-First Diagrams Explained
description: A quick primer to help parse a Risk-First diagram. 
url: https://riskfirst.org/overview/Risk-First-Diagrams

categories: 
 - Thinking Risk-First
order: 2
featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/maze.svg">Risk-First Diagrams</image-artifact>'
redirect_from: 
 - /Risk-First-Diagrams
 - /overview/Risk-First-Diagrams
tweet: yes
---


# Risk-First Diagrams Explained

Throughout [A Simple Scenario](A-Simple-Scenario.md) we used diagrams to explain the risks we faced and the choices we were making.  These are called "Risk-First Diagrams".  Here, we're going to look at what is going on in these diagrams so that when we come to apply them to _software development_, they're not totally confusing.

![Goal In Mind and Attendant Risks](../images/generated/introduction/goal_in_mind.png)

The diagram above is taken from the [dinner party](A-Simple-Scenario.md) example: we want to host a successful party, but in doing so, we know there are [Attendant Risks](Glossary.md#attendant-risk). 

![Nothing To Eat](../images/generated/introduction/diagram_example.png)

Here's another.  In the diagram above we are dealing with the risk of not having enough food at the party by considering buying lots of snacks. 

What’s going on in these diagrams?  How should we interpret them? Let’s work left-to-right.

## On The Left

![A Goal To Reach, A Risk To Avoid](../images/generated/introduction/stimulus1.png)

On the left in the first example we can see our goal, of having a successful party.  This is the goal we want to reach, it's _within our grasp_ to achieve this, if we only take the right actions.  

Equally, we could have a risk that we wish to avoid, such as having nothing to eat at the party.  To achieve that, we _also_ need to take the right actions.

## Cause and Effect

In _biological terms_ the items on the left of the diagram are the _stimulus_ part of the [Stimulus-Response Model](https://en.wikipedia.org/wiki/Stimulus–response_model).  They're the thing that makes us [Take Action](Glossary.md#taking-action) in the world.   

There are [all kinds of risks](../risks/Risk-Landscape.md) we face in life and we attach different value or _criticality_ to them.  Most people will want to take action against the worst risks they face in their lives and maybe put up with some of the lesser ones.  Equally, we should also try and achieve our _most critical_ goals and let the lesser ones slide (at least, from a rational standpoint). 

## In The Middle

![Taking Action](../images/generated/introduction/response.png)

In the middle of a Risk-First diagram we see the actions you could take.  In the diagram above, echoing the examples, they are "Hosting a Party" and "Buying Snacks".  One is moving us towards the goal of "A Successful Party", the other, moving us away from the risk of "Not Enough Food".   

## On The Right

_Nothing comes for free._  On the right, you can see the consequences of the actions you've taken:  [Attendant Risks](../thinking/Glossary.md#attendant-risk) are the _new_ risks you now have as a result of taking the action.

Hosting a dinner party opens you up to attendant risks like "Not Enough to Eat".  As a result of that risk, we consider buying lots of snacks.  As a result of _that_ risk, we start to consider whether our guests will be impressed with that.

## A Balance

It's worth pointing out that sometimes _the cure is worse than the disease_.  

By [Taking Action](../thinking/Glossary.md#taking-action) you might end up in a worse predicament than you started.  For example, cutting your legs off _would definitely cure your in-growing toenail_.  We have to use our judgement to decide on the right course of action!

So Risk-First diagrams represent a [balance of risk](../thinking/Glossary.md#balance-of-risk): whether or not you choose to take the action will depend on your evaluation of this balance.  Are the things on the left worse or better than the things on the right?  

## Functions

As well as considering Risk First diagrams to be like the [Stimulus-Response Model](https://en.wikipedia.org/wiki/Stimulus–response_model), you could also think in terms of [functional programming](https://en.wikipedia.org/wiki/Functional_programming), which might be more familiar to us as software developers.  

We are _tranforming_ an input condition (on the left) into an _output_ condition (on the right) by way of a function (the action we take, in the middle).  

## Containers For _Internal Models_

The risks on the left and right are contained in rounded-boxes.  That's because risks live in our [Internal Models](../thinking/Glossary.md#internal-model) - they're not real-world things you can reach out and touch.  They're _contained_ in things like brains, spreadsheets, reports and programs.  

### Example: Blaming Others

![Blame Game](../images/generated/introduction/blame.png)

In the above diagram, you can see how Jim is worried about his job security, probably because he's made a mistake at work.  Therefore, in his [Internal Model](../thinking/Glossary.md#internal-model) he has [Funding Risks](../risks/Scarcity-Risk.md#funding-risk), i.e. he's worried about money.

What does he do?  His [Action](../thinking/Glossary.md#taking-action) is to blame Bob.  If all goes according to plan, Jim has dealt with his risk and now Bob has the problems instead.

## What Else?

![Mitigated and Hidden](../images/generated/introduction/hidden-mitigated.png)

The diagram above shows two other marks we use quite commonly:  we put a "strike" through a risk to show that it's been dealt with in some way and the "cloud" icon denotes [Hidden Risks](../thinking/Glossary.md#hidden-risk)- those _unknown unknowns_ that we couldn't have predicted in advance.

# Next

Risk-First is about understanding risk in software development, so next let's examine the scenario of a new software project.  Instead of a single person organising a dinner party, we are likely to have a team, and our [Internal Model](Glossary.md#internal-model) will not just exist in our heads, but in the code we write.  

On to [Development Process](Development-Process.md)...


