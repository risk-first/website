---
title: Crisis Mode
description: Why 'Crisis Mode' shouldn't be a mode.
url: https://riskfirst.org/thinking/Crisis-Mode

featured: 
  class: bg3
  element: '<risk href="/public/templates/risk-first/redesign/risks/attendant_risk_v2.svg"><code>Panic</code><title>Crisis Mode</title></risk>'
categories:
 - Thinking Risk-First
sidebar_order: 8
tweet: yes
---

# Crisis Mode

![There's No Crisis](/img/generated/principles/crisis.png)

Let's look at a classic description of Risk Management:

> "Risk Management is the process of thinking out corrective actions before a problem occurs, while it's still an abstraction.  The opposite of risk management is crisis management, trying to figure out what to do about the problem after it happens." - [Waltzing With Bears, _De Marco, Lister_](http://amzn.eu/d/i0IDFA2)

This is not how Risk-First sees it. 

First, we have the notion that Risks are discrete events.  Some risks _are_ (like gambling on a horse race), but most _aren't_.  In the [Dinner Party](A-Simple-Scenario.md), for example, bad preparation is going to mean a _worse_ time for everyone, but how good a time you're having is a spectrum, it doesn't divide neatly into just "good" or "bad".  

Second, the opposite of "Risk Management" (or trying to minimise the "Down-side") is either "Upside Risk Management", (trying to maximise the good things happening), or it's trying to make as many bad things happen as possible.  

Third, Crisis Management is _still just Risk Management_:  the crisis (Earthquake, whatever) has _happened_.  You can't manage it because it's in the past.   All you can do is Risk Manage the future (minimize further casualties and human suffering, for example).    

Yes, it's fine to say "we're in crisis", but to assume there is a different strategy for dealing with it is a mistake:  this is the [Fallacy of Sunk Costs](https://en.wikipedia.org/wiki/Escalation_of_commitment). 

## Invariances #1: Panic Invariance

You would expect that any methods for managing software delivery should be _invariant_ to the degree of crisis in the project.  If, for example, a project proceeds using [Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)) for eight months and then the deadline looms and everyone agrees to throw Scrum out of the window and start hacking, then _this implies there is a problem with Scrum_ and that it is not **Panic Invariant**.  In fact, many tools like Scrum don't consider this:

- If there is a production outage during the working week, we don't wait for the next Scrum Sprint to plan and fix it.
- Although a 40-hour work-week _is a great idea_, this goes out of the window if the databases all crash on a Saturday morning.

In these cases, we (hopefully calmly) _evaluate the risks and Take Action_.  

This is **Panic Invariance**:  your methodology shouldn't need to change given the amount of pressure or importance on the table.

## Invariances #2: Scale Invariance

We are used to the idea that physical laws work at _any scale_: if they don't apply equally to big and small scenarios then that implies something is wrong.  For example, Newton's Laws of Motion work fine for artillery shells but fail to calculate the orbital period of Mercury, which led to Einstein trying to improve on them with the [Theory of Relativity](https://en.wikipedia.org/wiki/Theory_of_relativity).  

Ideally, a methodology should be applicable at _any_ scale too: 
 
 - A single class or function.
 - A collection of functions, or a library.
 - A project team.
 - A department.
 - An entire organisation.

In practice, however, we usually find methodologies are tuned for certain scales.  For example, [Extreme Programming (XP)](https://en.wikipedia.org/wiki/Extreme_programming) is designed for small, co-located teams and that's useful.  But the fact it doesn't scale tells us something about it:  chiefly, that it considers certain _kinds_ of risk, while ignoring others.  At small scales XP works ok, but at larger scales other risks (such as team [Coordination Risk](../risks/Coordination-Risk.md)) increase too fast for it to work.

If the methodology _fails at a particular scale_ this tells you something about the risks that the methodology isn't addressing.    One of the things Risk-First explores is trying to place methodologies and practices within a framework to say _when_ they are applicable.

## Urgent and Important

But often, the urgent _can_ crowd out the merely important.  Why does that happen, and what should we do about it? 

In the next section, [Evaluating Risk](Evaluating-Risk.md) we'll look at some approaches to choosing what to do. 
