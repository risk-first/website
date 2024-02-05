---
title: Tracking Risks
description: Ways to keep track of the risks you face.
url: https://riskfirst.org/thinking/Track-Risk

featured: 
  class: bg3
  element: '<risk href="/public/templates/risk-first/redesign/risks/map_and_territory_risk_v2.svg"><code>Tracking</code><title>Tracking Risks</title></risk>'
categories:
 - Thinking Risk-First
sidebar_position: 7
tweet: yes
---

# Tracking Risks

Here, I am going to re-cap on some pre-existing risk management theory in order to set the scene for the next section which heads back to looking at risk on software projects.  

![Discount](/img/generated/principles/track-risks.png)

## Risk Registers

Most developers are familiar with recording issues in an issue tracker.  For all of the same reasons, it's good practice to record the risks you face running a project or an operation in a [Risk Register](https://en.wikipedia.org/wiki/Risk_register).  Typically, this will include for each risk:

 - The **name** of the risk, or other identifier.
 - A **categories** to which the risk belongs (this is the focus of the [Risk Landscape](../risks/Risk-Landscape.md) section in Part 2).
 - A **brief description** or name of the risk to make the risk easy to discuss.
 - Some estimate for the **Impact**, **Probability** or **Risk Score** of the risk.
 - Proposed actions and a log of the progress made to manage the risk.

Four quick points about this description:

### 1. A Continuum of Formality

In the [planning-a-dinner-party example](Meeting-Reality.md) the Risk Register happened *entirely in your head*.  There is a continuum all the way from "in your head" through "using a spreadsheet" to dedicated Risk Management software.    

It's also going to be useful _in conversation_ and this is where the value of the Risk-First approach is: providing a vocabulary to _talk about risks_ with your team.  

### 2. Probability And Impact

**Probability** is how likely something is to happen, whilst **Impact** is the cost (usually financial) when it does happen.

In a financial context (or a gambling one), we can consider the overall **Risk Score** as being the sum of the **Impact** of each outcome multiplied by its **Probability**.  For example, if you buy a 1-Euro ticket in a raffle, there are two outcomes:  win or lose.  The impact of _winning_ would be (say) a hundred Euros, but the **probability** might be 1 in 200.  The impact of _losing_ would be the loss of 1 Euro, with 


|Outcome        |Impact         |Probabilty        |Risk Score    |
|---------------|---------------|------------------|--------------|
|Win            |+ 99 EUR       |1 in 200          |.5 EUR        |
|Lose           |-  1 EUR       |199 in 200        |-.99 EUR      |

Risk Management in the finance industry _starts_ here and gets more complex.  But often (especially on a software project), it's better to skip all this and just estimate a Risk Score.  This is because if you think about "impact", it implies a definite, discrete event occurring (or not occurring) and asks you then to consider the probability of that. 

### 3. Risk And Uncertainty

Arguably, Risk-First uses the term 'Risk' wrongly:  most literature suggests [risk can be measured](https://keydifferences.com/difference-between-risk-and-uncertainty.html) whereas uncertainty represents things that cannot.  

I am using **risk** everywhere because later we will talk about specific risks (e.g. [Boundary Risk](../risks/Boundary-Risk.md) or [Complexity Risk](../risks/Complexity-Risk.md)) and it doesn't feel grammatically correct to talk about those as **uncertainties**.  

Additionally there is pre-existing usage in Banking of terms like [Operational Risk](https://en.wikipedia.org/wiki/Operational_risk) or [Reputational risk](https://www.investopedia.com/terms/r/reputational-risk.asp) which are also not really a-priori measurable.

(Later, we'll dig into [Health](Health.md), which puts this on a better foundation.)

### 4. A Bug Tracker Is Also A Risk Register

As covered in [Just Risk](Just-Risk.md), we know that _all work_ is managing risk.  So therefore it stands to reason that if you are using a bug tracker then actually you are tracking risks.  After all, bugs are capturing the risk that:

 - your customers stop using your product
 - someone is harmed by your product
 - you suffer loss-of-reputation from some issue with your product
 
... and so on.  Prioritising the bugs in the tracker is a prioritisation _by risk_.

## Risk Matrices

![Risk Matrix of Dinner Party Risks](/img/generated/introduction/risk_matrix.png)

A risk matrix presents a graphical view on where risks exist.  The diagram above is an example, showing the risks from the dinner party in the [A Simple Scenario](A-Simple-Scenario.md) section.

This type of graphic is _helpful_ in deciding what to do next, although alternatively, you can graph the overall **Risk Score** against the [Payoff](../thinking/Glossary.md#payoff).  Easily mitigated risk (on the right) and worse risks (at the top) can therefore be dealt with first (hopefully).

![Risk Register of Dinner Party Risks, Considering Payoff](/img/generated/introduction/risk_matrix_2.png)

## Unknown Unknowns

One of the criticisms of the [Risk Register](Track-Risk.md#risk-registers) approach is that of [mistaking the map for the territory](../risks/Map-And-Territory-Risk.md).  That is, mistakenly believing that what's on the Risk Register _is all there is_.  

In the preceding discussions, I have been careful to point out the existence of [Hidden Risks](../thinking/Glossary.md#hidden-risk) for that very reason. Or, to put another way:

> "What we don't know is what usually gets us killed" - [Petyr Baelish, _Game of Thrones_](https://medium.com/@TanyaMardi/petyr-baelishs-best-quotes-on-game-of-thrones-1ea92968db5c)

Donald Rumsfeld's famous [Known Knowns](https://en.wikipedia.org/wiki/There_are_known_knowns) is also a helpful conceptualisation:  

 - **A _known_ unknown** is an [Attendant Risk](../thinking/Glossary.md#attendant-risk).  i.e. something you are aware of, but where the precise degree of threat can't be established.
 - **An _unknown_ unknown** is a [Hidden Risk](../thinking/Glossary.md#hidden-risk). i.e a risk you haven't even thought to exist yet.

## Out of the Window

Carefully tracking risks with a matrix or in a risk register is great when the going is good.  

But all this goes south when you hit [Crisis Mode](Crisis-Mode.md), right?
