---
title: Just Risk
description: Are all tasks in software development just managing risk?


featured: 
  class: bg3
  element: '<risk class="internal-model" />'
tags:
 - Thinking Risk-First
 - Internal Model
 - Goal
 - Attendant Risk
 - Risk Landscape
sidebar_position: 5
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

| Category   | Description                     | Impact           | Priority |
|------------|---------------------------------|------------------|----------|
| Assumption | Documentation prior to approval |                  | HIGH     |
| Risk       | Supply Delivery Time            | Project Schedule | MEDIUM   |
| Issue      | Master data inconsistency       |                  | MEDIUM   |
| Decision   | Go/No Go with ABC Ltd.          | Internal Hiring  | LOW      |

The table above shows a sample RAID log.  A real one might well be more elaborate.  Let's keep things simple for now and put the following item into the RAID Log:

> "Debbie needs to visit the client to get them to choose the logo to use on the product, otherwise we can't size the screen areas exactly."

 - So, is this an **action**?   Certainly.  There's definitely something for Debbie to do here. 
 - Is it an **issue**?  Yes, because it's holding up the screen-areas sizing thing. 
 - Is it a **decision**?  Well, clearly, it's a decision for someone.
 - Is it a **risk**?  Probably.  Debbie might go to the client and they _still_ don't make a decision.  What then?

This example is deliberately chosen to be hard to categorise.  Normally, items are more one thing than another.  But often, you'll have to make a choice between two categories, if not all four.  

This _hints_ at the fact that at some level it's all about risk:

## Every Action Attempts to Manage Risk

The reason you are [taking an action](Glossary.md#taking-action) is to manage a risk.  For example: 

 - If you're coding up new features in the software, this is managing [Feature Risk](/tags/Feature-Risk) (which we'll explore in more detail later).  
 - If you're getting a business sign-off for something, this is managing the risk of everyone not agreeing on a course of action (a [Coordination Risk](/tags/Coordination-Risk)).  
 - If you're writing a test, then that's managing a type of [Implementation Risk](/tags/Implementation-Risk).  

## Every Action Has Attendant Risk

- How do you know if the action will get completed?  
- Will it overrun, or be on time?  
- Will it lead to yet more actions?
- What [Hidden Risk](/thinking/Glossary.md#hidden-risk) will it uncover?

Consider _coding a feature_.  The whole process of coding is an exercise in learning what we didn't know about the world, uncovering problems and improving our [Internal Model](/thinking/Glossary.md#internal-model).  That is, flushing out the [Attendant Risk](/thinking/Glossary.md#attendant-risk) of the [Goal](/thinking/Glossary.md#goal).

And, as we saw in the [Introduction](A-Simple-Scenario.md), even something _mundane_ like the Dinner Party had risks. 

## An Issue is Just A Type of Risk

- Because issues need to be fixed...  
- And fixing an issue is an action... 
- Which, as we just saw also carries risk.

One retort to this might be to say:  "an issue is a problem I have now, whereas a risk is a problem that _might_ occur. "  I am going to try and break that mind-set in the coming pages, but I'll just start with this:

- Do you know _exactly_ how much damage this will do?
- Can you be sure that the issue might not somehow go away?  

_Issues_ then, just seem more "definite" and "now" than _risks_, right?  This classification is arbitrary:  they're all just part of the same spectrum, they all have inherent uncertainty, so there should be no need to agonise over which column to put them in.

In a way, this is a blessing because it means if you are maintaining a [backlog](https://www.scrum.org/resources/what-is-a-product-backlog) (the Scrum term) or tracking work in an issue-tracking tool such as [GitHub Issues](https://github.com/features/issues) then you're tracking risks.

![A selection of issues from a GitHub project](/img/thinking/github-issues.png)

Let's look at a real-life example.  The above image shows a selection of issues logged in GitHub for an open source project called [FDC3](https://github.com/finos/FDC3).  The first one, "Adding debugging information to help app developers trace broadcast storms" is written as if it's a piece of work to be done (an action to take).   However, there's an implicit risk being addressed by this piece of work: the risk that developers using the project are under-served by the functionality of it, and will be dissatisfied by the project.  This issue was likely written by developers facing this problem, unable to move forward due to this lack of functionality around debugging information.  

## Goals Are Risks Too

[Earlier](Risk-First-Diagrams.md), we introduced something of a "diagram language" of risk. 

![The Risk-First Diagram Language, with _stimulus_ on the left, the action (or _response_) we take in the middle, and the results on the right.](/img/generated/introduction/all_risk_management_language.png)

The above diagram is an idealised example of this, showing how we take action to address the risks and goals on the left and end up with new risks on the right.  
 
[Goals](/thinking/Glossary.md#goal) live inside our [Internal Model](/thinking/Glossary.md#internal-model), just like Risks.  Functionally, Goals and Risks are equivalent.  For example, the Goal of "Implementing Feature X" is equivalent to mitigating "Risk of Feature X not being present".

Let's try and back up that assertion with a few more examples:

| **Risk**                                                              | **Goal**    | **Action**             |
|-----------------------------------------------------------------------|-------------|------------------------|
| Risk of someone breaking in                       | Feeling of safety      | Install a home security system           |
| Risk of looking technically inferior during the cold war | Feeling of technical superiority | Land a man on the moon |
| Risk of the market not requiring your skills             | Job security     | Retrain       |

There is a certain "interplay" between the concepts of risks, actions and goals. On the [Risk Landscape](/thinking/Glossary.md#risk-landscape), goals and risks correspond to  starting points and destinations, whilst the action is moving on the risk landscape.  

| **Starting Point** | **Movement** | **End Point**                  |
|--------------------|--------------|--------------------------------|
| Goal, risk         | Action       | Attendant risk, achieved goal  |

From a redundancy perspective, if you know any two of the start, end or movement you can figure out what the third would be.  At different times, people like to focus on different parts of this.  Sometimes, humans are very goal-driven:  they like to know where they're going, and are good at organising around a goal (like "landing a man on the moon").  However, by focusing on goals ("solutionizing") it's easy to ignore alternatives.  Sometimes, we focus on the risks.   As politicians know, fear is a great motivator for voting.  

But risks, goals and actions are deeply connected.  By focusing on "Risk-First", we don't ignore the reasons we're doing something.  

## On Opportunities

![Risks, Goals, Opportunities, Anti-goals](/img/generated/introduction/risks_opportunities.png)

Some literature talks about [Opportunities](Glossary.md#opportunity) as being the opposite of [Risks](Glossary.md#risk).  Here, we tend to call these [Upside Risks](Glossary.md#upside-risk).  Therefore, there is a related discipline of _opportunity management_.  

Here, we're not going to get into this except to say that sometimes it is worth also considering the idea of [Anti-Goals](../misc/Anti-Goals.md): that is, being clear about the things you really want to avoid happening, as shown in the figure above.

## Summary

A Risk-First diagram represents a starting point (a risk, a goal), some movement (an action to take) and a destination (mitigated risk, completed goals, new attendant risks).  But frequently our usual tools will only show us one of these parts:  the RAID log is focusing on the starting point, and some actions (decisions).  Issues (in an issue log) often focus on the action and possibly the risk.   In a way, this is fine as you can derive the third by knowing the other two.

However, where this becomes problematic is when trying to decide what work to do:  is the expected destination _worth_ the effort of the action?

So next, let's look at how we should [Track Risks](Track-Risk.md) in order to make sure we're not missing anything important.
