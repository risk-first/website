---
title: Just Risk
description: Are all tasks in software development just managing risk?
url: https://riskfirst.org/thinking/Just-Risk

featured: 
  class: bg3
  element: '<risk class="internal-model" />'
categories:
 - Thinking Risk-First
sidebar_order: 5
redirect_from: 
 - /Just-Risk
tweet: yes
---

# Just Risk

In this section, I am going to propose the idea that _everything_ productive you do on a software project is Risk Management.

![All Work is Managing Risk](/img/generated/principles/all-work.png)

Think about your development process at work.  Maybe it involves weekly releases, a continuous-integration system, unit-testing and beta-testing.  All these activities have a part to play in managing different risks.  They work to manage risks before they create bigger problems in production.

Can we go further?  Is it just those parts of our development process that manage risk, or is it actually _all_ of them?  

Lets look at one of the tools in the Project Manager's tool-box, the [RAID Log](http://pmtips.net/blog-new/raid-logs-introduction), and observe how risk-centric it is.  Then, we'll generalise from there.

## RAID Log

Many project managers will be familiar with the [RAID Log](http://pmtips.net/blog-new/raid-logs-introduction).  It's simply four columns on a spreadsheet:  **Risks**, **Actions**, **Issues** and **Decisions**.
 
Let's try and put the following item into the RAID Log:

> "Debbie needs to visit the client to get them to choose the logo to use on the product, otherwise we can't size the screen areas exactly."

 - So, is this an **action**?   Certainly.  There's definitely something for Debbie to do here. 
 - Is it an **issue**?  Yes, because it's holding up the screen-areas sizing thing. 
 - Is it a **decision**?  Well, clearly, it's a decision for someone.
 - Is it a **risk**?  Probably.  Debbie might go to the client and they _still_ don't make a decision.  What then?

This example is deliberately chosen to be hard to categorise.  Normally, items are more one thing than another.  But often, you'll have to make a choice between two categories, if not all four.  

This _hints_ at the fact that at some level it's all about risk:

## Every Action Attempts to Manage Risk

The reason you are _taking_ an action is to manage a risk.  For example: 

 - If you're coding up new features in the software, this is managing [Feature Risk](../risks/Feature-Risk.md) (which we'll explore in more detail later).  
 - If you're getting a business sign-off for something, this is managing the risk of everyone not agreeing on a course of action (a [Coordination Risk](../risks/Coordination-Risk.md)).  
 - If you're writing a test, then that's managing a type of [Implementation Risk](../risks/Feature-Risk.md#implementation-risk).  

## Every Action Has Attendant Risk

- How do you know if the action will get completed?  
- Will it overrun, or be on time?  
- Will it lead to yet more actions?
- What [Hidden Risk](../thinking/Glossary.md#hidden-risk) will it uncover?

Consider _coding a feature_.  The whole process of coding is an exercise in learning what we didn't know about the world, uncovering problems and improving our [Internal Model](../thinking/Glossary.md#Internal-Model).  That is, flushing out the [Attendant Risk](../thinking/Glossary.md#attendant-risk) of the [Goal In Mind](../thinking/Glossary.md#Goal-In-Mind).

And, as we saw in the [Introduction](A-Simple-Scenario.md), even something _mundane_ like the Dinner Party had risks. 

## An Issue is Just A Type of Risk

- Because issues need to be fixed...  
- And fixing an issue is an action... 
- Which, as we just saw also carries risk.

One retort to this might be to say:  "an issue is a problem I have now, whereas a risk is a problem that _might_ occur. "  I am going to try and break that mind-set in the coming pages, but I'll just start with this:

- Do you know _exactly_ how much damage this will do?
- Can you be sure that the issue might not somehow go away?  

_Issues_ then, just seem more "definite" and "now" than _risks_, right?  This classification is arbitrary:  they're all just part of the same spectrum, they all have inherent uncertainty, so there should be no need to agonise over which column to put them in.

## Goals Are Risks Too

In the previous sections, we introduced something of a "diagram language" of risk.  Let's review it:

![Risk-First Diagram Language](/img/generated/introduction/all_risk_management_language.png)
 
[Goals](../thinking/Glossary.md#goal-in-mind) live inside our [Internal Model](../thinking/Glossary.md#internal-model), just like Risks.  It turns out, that functionally, Goals and Risks are equivalent.  For example, The Goal of "Implementing Feature X" is equivalent to mitigating "Risk of Feature X not being present".

Let's try and back up that assertion with a few more examples:

|Goal                                |Restated As A Risk                                                   |
|------------------------------------|---------------------------------------------------------------------|
|Build a Wall                        |Mitigate the risk of something getting in / out                      |
|Land a man on the  moon             |Mitigate the risk of looking technically inferior during the cold war| 
|Move House                          |Mitigate the risks/problems of where you currently live              |

There is a certain "interplay" between the concepts of risks, actions and goals.  After all, on the [Risk Landscape](../thinking/Glossary.md#risk-landscape) they correspond to a starting point, a movement, and a destination.  From a redundancy perspective, any one of these can be determined by knowing the other two.  

Psychologically, humans are very goal-driven:  they like to know where they're going, and are good at organising around a goal.  However, by focusing on goals ("solutionizing") it's easy to ignore alternatives.  

By focusing on "Risk-First", we don't ignore the reasons we're doing something.  

Next, let's look at how we should [Consider Payoff](Consider-Payoff.md) when we choose what to do next.
