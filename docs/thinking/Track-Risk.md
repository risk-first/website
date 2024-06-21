---
title: Tracking Risks
description: Ways to keep track of the risks you face.


featured: 
  class: bg3
  element: '<risk href="/public/templates/risk-first/redesign/risks/map_and_territory_risk_v2.svg"><code>Tracking</code><title>Tracking Risks</title></risk>'
tags:
 - Attendant Risk
 - Hidden Risk
sidebar_position: 6
tweet: yes
---

# Tracking Risks

In this section we're going to look at the importance of keeping track of risks.  In fact, I'll make the case that because this is so important, you're already doing it, whether you realise it or not. 

![Tracking Risks](/img/generated/principles/track-risks.png)

## Risk Registers

Most developers are familiar with recording issues in an issue tracker.  As we saw in [Just Risk](Just-Risk.md), _issues are a type of risk_, so it makes sense that issue trackers could be used for recording all project risks.   Within risk management, this is actually called a [Risk Register](https://en.wikipedia.org/wiki/Risk_register).  Typically, this will include for each risk:

 - The **name** of the risk, or other identifier.
 - A **categories** to which the risk belongs (this is the focus of the [Risk Landscape](/risks/Risk-Landscape.md) section in Part 2).
 - A **brief description** or name of the risk to make the risk easy to discuss.
 - Some estimate for the **Impact**, **Probability** or **Risk Score** of the risk.
 - Proposed actions and a log of the progress made to manage the risk.

If you work in software development and are familiar with [a product backlog](https://en.wikipedia.org/wiki/Product_backlog) this should be very familiar. However, there are four quick points I want to draw your attention to before moving on.

### 1. A Continuum of Formality

In the [planning-a-dinner-party example](Meeting-Reality.md) the Risk Register happened *entirely in your head*.  There is a continuum all the way from "in your head" through "using a spreadsheet" to dedicated Risk Management software.  

When you have a team of people trying to coordinate, then its very important that this stuff is written down in a "single source of truth" somewhere that everyone on the team can add to and view.  Having a list of named risks (tasks, whatever) becomes useful when trying to decide what to do next and for dividing up work within the team.  It's no good everyone having a different in-head risk register as you'll never find agreement on what things to tackle next.

### 2. Probability And Impact

Often, an issue tracking tool will allow you to arrange tasks in priority order.  Developers then pick the first (highest priority) item off the list and then work on it.  

But the description of the risk register refers to **Impact** and **Probability**:  

- **Probability** is how likely something is to happen, whilst 
- **Impact** is the cost (usually financial) when it does happen.

Let's look at an example.  In a financial context (or a gambling one), we can consider the overall **Risk Score** as being the product of the **Impact** of each outcome and its **Probability**.  For example, if you buy a 1-Euro ticket in a raffle, there are two outcomes:  win or lose.  The impact of _winning_ would be (say) a hundred Euros, but the **probability** might be 1 in 200.  The impact of _losing_ would be the loss of 1 Euro, as summarised in the table below. 

|Outcome        |Impact         |Probability        |Risk Score    |
|---------------|---------------|-------------------|--------------|
|Win            |+ 99 EUR       |1 in 200           |.5 EUR        |
|Lose           |-  1 EUR       |199 in 200         |-.99 EUR      |

Risk Management in the finance industry _starts_ here and gets more complex.  But often (especially on a software project), it's better to skip all this and just estimate a Risk Score.  This is because if you think about "impact", it implies a definite, discrete event occurring (or not occurring) and asks you then to consider the probability of that. 

So the second point to take away is - what is exactly happening when we set the priority of items in our backlog?  Are we arranging them by **Impact**, **Probability**, **Risk Score** or are we looking also at the [action we would take](Glossary.md#taking-action) and factoring in the [Payoff](Glossary.md#payoff)?  

We'll come back to this in a minute.

### 3. Risk And Uncertainty

Arguably, Risk-First uses the term 'Risk' wrongly:  most literature suggests [risk can be measured](https://keydifferences.com/difference-between-risk-and-uncertainty.html) whereas uncertainty represents things that cannot.  

I am using **risk** everywhere because later we will talk about specific risks (e.g. [Boundary Risk](/tags/Boundary-Risk) or [Complexity Risk](/tags/Complexity-Risk)) and it doesn't feel grammatically correct to talk about those as **uncertainties**.  

Additionally there is pre-existing usage in Banking of terms like [Operational Risk](https://en.wikipedia.org/wiki/Operational_risk) or [Reputational risk](https://www.investopedia.com/terms/r/reputational-risk.asp) which are also not really a-priori measurable.

Later, we'll dig into [Health](Health.md), which puts this on a better foundation.

### 4. An Issue Tracker Is Also A Risk Register

As covered in [Just Risk](Just-Risk.md), we know that _all work_ is managing risk.  So therefore it stands to reason that if you are using an issue tracker then actually you are tracking risks.  After all, issues are capturing the risk that:

 - your customers stop using your product
 - someone is harmed by your product
 - you suffer loss-of-reputation from some issue with your product
 
... and so on.  Sometimes, your issue tracker will have fields for Probability and Impact or allow you to set up custom fields which might help focus your team's mind on risks.  

Much more likely, it will have a field for _priority_, or allow the ordering of issues by priority.  This can lead to some interesting discussions, as it's often not clear what people mean by priority.  

 - When someone says "this should be low priority as it's very unlikely to occur" then they're making a statement about **Probability**. 
 - When someone says "this should be low priority because no one is going to care if we fix it" then they're making a statement about **Impact**.
 - When someone says "this should be high priority as its a quick win" then maybe they're talking about [Payoff](Glossary.md#payoff).

## Visualising Risks

![Risk Matrix of Dinner Party Risks](/img/generated/introduction/risk_matrix.png)

A risk matrix presents a graphical view on where risks exist.  The diagram above is an example, showing the risks from the dinner party in the [A Simple Scenario](A-Simple-Scenario.md) section.  The useful thing about this visualisation is it helps focus attention on the risks at the top and to the right - those with the biggest impact and probability.

Risks at the bottom or left side of the diagram are candidates for being ignored or simply "accepted" (which we'll come to in a [later section](De-Risking#retain)).  If you're using something like [Scrum](/practices/Glossary-Of-Practices.md#scrum), then these might be issues that you remove in the process of [backlog refinement](/practices/Glossary-Of-Practices.md#backlog-refinement).

## Incorporating Payoff

The diagram above is _helpful_ in deciding what to focus on next, but it doesn't consider [Payoff](/thinking/Glossary.md#payoff).  The reason for this is that up until this point, we've been tracking risks but not necessarily figuring out what to do about them.   Quite often when I raise an issue on a project I will also include the details of the fix for that issue, or maybe I'll _only_ include the details of the fix.    

For example, let's say I raise an issue saying that I want a button to sort an access control list by the surnames of the users in the list.  What am I really getting at here?   This could be a solution to the problem that _I'm wasting time looking for users in a list_.  Alternatively, it could be trying to solve the problem that _I'm struggling to keep the right people on the list_.  Or maybe both.  The risk of the former is around wasted time (for me) but the risk of the latter might be a security risk and might be higher priority.  

Although I'm asking for a sort button, there are other ways to solve this problem: a search feature might work even better and the ability to cut-and-paste the user list so that I can put it into a text editor (which would provide the sort and search features instead) might be a perfectly good work-around.   Coming up with effective solutions to risks is where design comes in.  

![Payoff of different actions to take against the risk of ruining the food](/img/generated/introduction/risk_matrix_2.png)

Going back to the dinner party example, the above diagram considers solutions to the problem of _ruining the food_.  There are a number of alternative solutions here:  Option 1 is deemed the best as it has the least attendant risk, but option 2 also improves things.  Option 5 might be prohibitively expensive, and option 4 might run the risk of being found out by the guests!   Option 3 doesn't change things in the slightest.  

If I added actions for all the other risks (maybe buying extra snacks, checking the guest's dietary restrictions etc) then this chart gets quite busy.  But clearly, actions to the top and left are the ones we should consider taking, since they have the best payoff.   Those below and to the right of the diagonal line are non-starters as they make our situation worse.

_Really good design_ would be coming up with a course of action that takes care of _multiple risks at the same time_ and creating a really good payoff. 

## Criticism

One of the criticisms of the [Risk Register](Track-Risk.md#risk-registers) approach is that of [mistaking the map for the territory](/tags/Map-And-Territory-Risk).  That is, mistakenly believing that what's on the Risk Register _is all there is_.  

In the preceding discussions, I have been careful to point out the existence of [Hidden Risks](/thinking/Glossary.md#hidden-risk) for that very reason. Or, to put another way:

> "What we don't know is what usually gets us killed" - [Petyr Baelish, _Game of Thrones_](https://medium.com/@TanyaMardi/petyr-baelishs-best-quotes-on-game-of-thrones-1ea92968db5c)

Donald Rumsfeld's famous [Known Knowns](https://en.wikipedia.org/wiki/There_are_known_knowns) is also a helpful conceptualisation:  

 - **A _known_ unknown** is an [Attendant Risk](/thinking/Glossary.md#attendant-risk).  i.e. something you are aware of, but where the precise degree of threat can't be established.
 - **An _unknown_ unknown** is a [Hidden Risk](/thinking/Glossary.md#hidden-risk). i.e a risk you haven't even thought to exist yet.

## Out of the Window

In this section, we've looked at a _continuum of formality_ of risk tracking.  Going from "in your head" (like the dinner party) through "using an issue tracker" and on to looking at visualisations to help understand which are the key risks to focus on.  If you are leading a development project, you will need to decide how formal a process you need for tracking risks and this will depend on the nature of the project.   Often, this will depend not just on your _own_ requirements but those of the project's stakeholders too, who will likely want to see that you are dealing with risk responsibly.

In the next section, [Health](Health.md) we'll be looking at the reason _why_ we need to track risks - to make sure that we keep our projects (and ourselves) healthy.

