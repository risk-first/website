---
title: Crisis Mode
description: Why 'Crisis Mode' shouldn't be a mode.

tags:
 - Upside Risk

featured: 
  class: bg3
  element: '<risk href="/public/templates/risk-first/redesign/risks/attendant_risk_v2.svg"><code>Panic</code><title>Crisis Mode</title></risk>'
sidebar_position: 13
tweet: yes
---

# Crisis Mode

In this section we're going to explore the assertion that good risk management principles apply irrespective of how much pressure you're under.   

![There's No Crisis](/img/generated/principles/crisis.svg)

As software developers, we face crises of different sorts. Perhaps there's a production outage and we're up at 3am scrambling around to recover data from backups, or a sudden meeting with clients or investors arises in which we have to scramble to put together a prototype in short order.  Agile software development doesn't have much to say about what we should do in these situations:  Scrum's rigorous 2-week sprint model doesn't account for the sprint being interrupted by urgent events.

## Testing For Invariances

In this section, we are going to look at how a risk management approach to software development is invariant to a number of different things:  the size of the project, the level of pressure and the technology being used.  For example, I am an advocate of [Extreme Programming](../methods/Extreme-Programming).  However, as you scale the size of the project, it breaks down.  This is well understood and explains why methodologies like [Scaled Agile](../methods/SAFe) arose which attempt to fix this.  

Why would we want to do this?  Einstein's ideas around relativistic gravity were proven because people discovered that the Newtonian model of gravity [failed to predict the orbit of Mercury](https://en.wikipedia.org/wiki/Tests_of_general_relativity#Classical_tests).  So it's important to explore and understand the limits of our ideas and practices.  

## Invariance 1: Is It A Crisis?

First though, let's talk specifically about "Crisis Management".  A lot of literature on Crisis Management suggests that when a crisis occurs, you abandon your normal approach and switch to a different, crisis management approach.  For example:

> "Risk Management is the process of thinking out corrective actions before a problem occurs, while it's still an abstraction.  The opposite of risk management is crisis management, trying to figure out what to do about the problem after it happens." - [Waltzing With Bears, _De Marco, Lister_](http://amzn.eu/d/i0IDFA2)

This is not how Risk-First sees it. 

First, we have the notion that Risks are discrete events.  Some risks _are_ (like betting on a horse race), but most _aren't._  In the [Dinner Party](A-Simple-Scenario), bad preparation is going to mean a _worse_ time for everyone, but how good a time you're having is a spectrum, it doesn't divide neatly into just "good" or "bad" or "crisis" and "non-crisis": there are just _different levels of pressure_, which we'll address below.

Second, the opposite of "Risk Management" (or trying to minimise the "Down-side") is either "Upside Risk Management" or "Opportunity Management", (trying to maximise the good things happening), or it's trying to make as many bad things happen as possible.  

Third, Crisis Management is _still just Risk Management_:  the crisis (Earthquake, whatever) has _happened_.  You can't manage it because it's in the past.   All you can do is Risk Manage the future impacts of it (trying to minimise further casualties and human suffering, for example).    

Yes, it's fine to say "we're in crisis", but to assume there is a different strategy for dealing with it is a mistake:  this is the [Fallacy of Sunk Costs](https://en.wikipedia.org/wiki/Escalation_of_commitment). 

## Invariance #2: Pressure Invariance

You would expect that ideally, any methods for managing software delivery should be _invariant_ to the degree of crisis in the project.  If, for example, a project proceeds using [Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)) for eight months and then the deadline looms and everyone agrees to throw Scrum out of the window and start hacking, then _this implies there is a problem with Scrum_ and that it is not **Pressure Invariant**.  In fact, many tools like Scrum don't consider this:

- If there is a production outage during the working week, we don't wait for the next Scrum Sprint to plan and fix it.
- Although a 40-hour, Monday-to-Friday work-week _is a great idea_, this goes out of the window if the databases all crash on a Saturday morning.

In these cases, we (hopefully calmly) _evaluate the risks and [Take Action](/tags/Take-Action)_.  

This is **Pressure Invariance**:  ideally, your methodology shouldn't need to change given the amount of pressure or importance on the table.  


## Invariance #3: Scale Invariance

We are used to the idea that physical laws work at _any scale_: if they don't apply equally to big and small scenarios then that implies something is wrong.  For example, Newton's Laws of Motion work fine for artillery shells but fail to calculate the orbital period of Mercury, which led to Einstein trying to improve on them with the [Theory of Relativity](https://en.wikipedia.org/wiki/Theory_of_relativity).  

Ideally, a methodology should be applicable at _any_ scale too: 
 
 - A single class or function.
 - A collection of functions, or a library.
 - A project team.
 - A department.
 - An entire organisation.

In practice, however, we usually find methodologies are tuned for certain scales.  For example, [Extreme Programming (XP)](https://en.wikipedia.org/wiki/Extreme_programming) is designed for small, co-located teams and that's useful.  But the fact it doesn't scale tells us something about it:  chiefly, that it considers certain _kinds_ of risk, while ignoring others.  At small scales XP works ok, but at larger scales other risks (such as team [Coordination Risk](/tags/Coordination-Risk)) increase too fast for it to work.

If the methodology _fails at a particular scale_ this tells you something about the risks that the methodology isn't addressing.    One of the things Risk-First explores is trying to place methodologies and practices within a framework to say _when_ they are applicable.

In the previous section on [Health](Health) we looked at how risk management was used by the UK government at the scale of _the whole country_. 

## Invariance #4: Technology Invariance

In 2020 the world was plunged into pandemic.  Everything changed very quickly, including the nature of software development.  Lots of the practices we'd grown used to (such as XP's small, co-located teams) had to be jettisoned and replaced with Zoom calls and instant messaging apps.   This was a very sudden, rapid change in the technology we use to do our jobs, but in a more general sense we need to understand that Agile, XP and Scrum were invented at the turn of the 21st century.  The [Lean Manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing) movement originated post-WW2.  

The general ideas they espouse have stood the test of time but where they recommend particular technologies things are looking more shaky.  [Pair Programming](/tags/Pair-Programming) where two developers share the same keyboard doesn't work so well anymore.   However, it can be made to work over video conferencing and when we all move to augmented reality headsets perhaps there will be another configuration of this.  We can now do Pair Programming with our artificial intelligence "co-pilots" - but is that managing the same risks?

The point I am making here is that while there are [technology tools to support risk management](Track-Risk) the idea itself is not wedded to a particular technology, culture or way of working.  And, it is as old as the hills.

> "We've survived 200,000 years as humans.  Don't you think there's a reason why we survived? We're good at risk management." - [Nassim Nicholas Taleb, _Author of "The Black Swan" in the New Statesman](https://www.newstatesman.com/encounter/2018/03/i-hope-goldman-sachs-bankruptcy-nassim-nicholas-taleb-skin-game)

## Summing Up

Humans have a built-in fight-or-flight mechanism which makes it hard for us to act rationally in times of stress.  And as we'll explore in [Agency Risk](../risks/Agency-Risk), firms are able to abuse their staff's loyalty or enthusiasm in order to get them to work much longer than is healthy for either them or their projects.  

Risk management, like everything else, can be abused or misunderstood.  

In this section, we've looked at an important "proof" - the idea that risk management applies irrespective of pressure, scale or technology trends (so far, at least).  This is really important as we need to know whether there's a point at which our tools won't apply anymore.

In the next section, we'll start to look at how risk management can fit into working in our organisations, starting with discussing risk in a project team.  On to [A Conversation](A-Conversation)

