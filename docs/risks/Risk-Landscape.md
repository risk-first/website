---
title: The Risk Landscape
description: A way to think about the risks you face on a software project.
url: https://riskfirst.org/risks/Risk-Landscape

featured: 
  class: c
  element: '<risk href="/public/templates/risk-first/redesign/risks/attendant_risk_v2.svg"><code>Attendant</code><title>Risk Landscape</title></risk>'
sidebar_position: 2
tags:
 - Risks
tweet: yes
---

# The Risk Landscape

What does the "Risk Landscape" look like on a software project?

Just as I can tell you that the landscape outside your window will probably will have some trees, fields and buildings, and that the buildings are likely to be joined together by roads, we can make generalisations about the landscape of risks on a software project too.  

This is the Risk Landscape: the kinds of risks you will encounter as you try and deliver some software.

A typical project might start in a position of having "No Functionality" and "No Users", ready to make a journey across the landscape to a place of "Sustainable Monthly Revenues" or "Meeting Key Requirements".  

To get there, we need to avoid the pitfalls dotted around the landscape like "Running out of Budget" or "Drowning In Complexity".  Each of these are types of risks we face on the Risk Landscape.    

Our job as developers is to _navigate_ across this landscape, testing the way as we go, trying to get to a position of _more favourable risk_.

It's tempting to think of the [Risk Landscape](Risk-Landscape.md) as being like a [Fitness Landscape](https://en.wikipedia.org/wiki/Fitness_landscape).  That is, you have a "cost function" which is your height above the landscape, and you try and optimise by moving downhill in a [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent) fashion.  

However, there's a problem with this:  we don't have that cost function.  We can only _guess_ at what risks there are.  We have to go on our _experience_. For this reason, I prefer to think of the [Risk Landscape](Risk-Landscape.md) as a terrain which contains various categories of _fauna_ or _obstacles_ which we will find as we explore it.

## Why Should We Categorise The Risks?

A lot of knowledge and understanding of the world starts by naming and categorising things.  

If we were studying insects, this might be a guide giving you a description and a picture of each insect, telling you where to find it and how it lives.  That doesn't mean that this is _all_ there is to know, but it's a start.  Just as a scientist could spend an entire lifetime studying a particular species of bee, each of the risks we'll look at really has a whole sub-discipline of Computer Science attached to it, which we can't possibly hope to cover in any great depth.  

As software developers, we can't hope to know the specifics of the whole discipline of [Complexity Theory](https://en.wikipedia.org/wiki/Complexity_theory), or [Concurrency Theory](https://en.wikipedia.org/wiki/Concurrency_(computer_science)).  But, we're still required to operate in a world where these things exist.  So, we may as well get used to them and ensure that we respect their primacy.  We are operating in _their_ world, so we need to know the rules.

Once we can spot and name different types of risk we can then think about their characteristics and how to manage or avoid them.

This is a "spotters' guide" to software risks: where to find them and what to do about them.

## Our Tour Itinerary

Below is a table outlining the different risks we'll see.  There _is_ an order to this:  the later risks are written assuming a familiarity with the earlier ones.  Hopefully, you'll stay to the end and see everything, but you're free to choose your own tour if you want to.

|Risk            |          Description           |      
|----------------|--------------------------|
|[Feature Risk](Feature-Risk.md)                        |When you haven't built features the market needs, or the features you have built contain bugs, or the market changes underneath you.    |
|[Communication Risk](Communication-Risk.md)            |Risks associated with getting messages heard and understood.|             
|[Complexity Risk](Complexity-Risk.md)                  |Your software is so complex it makes it hard to change, understand, or run.             |        
|[Dependency Risk](Dependency-Risk.md)                  |Risks of depending on other people, products, software, functions, etc. This is a general look at dependencies, before diving into specifics like...|  
|[Scarcity Risk](Scarcity-Risk.md)                      |Risks associated with having limited time, money or some other resource.|    
|[Deadline Risk](Deadline-Risk.md)                      |The risk of having a date to hit.|
|[Software Dependency Risk](Software-Dependency-Risk.md)|The risk of depending on a software library, service or function.|    
|[Process Risk](Process-Risk.md)                        |When you depend on a business process, or human process to give you something you need.|
|[Boundary Risk](Boundary-Risk.md)                      |Risks due to making decisions that limit your choices later on.  Sometimes, you go the wrong way on the [Risk Landscape](Risk-Landscape.md) and it's hard to get back to where you want to be.|            
|[Agency Risk](Agency-Risk.md)                          |Risks that staff have their own [Goals](../thinking/Glossary.md#goal), which might not align with those of the project or team.|
|[Coordination Risk](Coordination-Risk.md)              |Risks due to the fact that systems contain multiple agents, which need to work together.|       
|[Map And Territory Risk](Map-And-Territory-Risk.md)    |Risks due to the fact that people don't see the world as it really is. (After all, they're working off different, imperfect [Internal Models](../thinking/Glossary.md#internal-model).)|  
|[Operational Risk](Operational-Risk.md)                |Software is embedded in a system containing people, buildings, machines and other services.  Operational risk considers this wider picture of risk associated with running a software service or business in the real world.|
       
After the last stop on the tour, in [Staging and Classifying](Staging-And-Classifying.md) we'll have a recap about what we've seen and make some guesses about how things fit together.

Also on that page is a [periodic table](Staging-And-Classifying.md#towards-a-periodic-table-of-risks) showing a diagrammatic view of how all these risks fit together.  

## Causation & Correlation 

Although we're going to try and categorise the kinds of things we see on this [Risk Landscape](Risk-Landscape.md), this isn't going to be perfect, because: 

 - One risk can "blend" into another just like sometimes a "field" is also a "car-park", or a building might contain some trees (but isn't a forest).
 - Ameliorating one risk probably means accepting another (hopefully lesser) risk.
 - There can be _causation_ and _correlation_ between different risks:  one risk may cause another, or two risks might have the same underlying cause.
  
### Example: The Financial Crisis

Risk is messy.  It's not always easy to tease apart the different components of risk and look at them individually. 

In the [Financial Services](https://en.wikipedia.org/wiki/Financial_services) industry, whole departments exist to calculate different risks like:

- **[Market Risk](https://en.wikipedia.org/wiki/Market_risk)**, the risk that the amount some asset is going to change in value.
- **[Credit Risk](https://en.wikipedia.org/wiki/Credit_risk)**, the risk that someone who owes you a payment at a specific point in time might not pay it back.
- **[Liquidity Risk](https://en.wikipedia.org/wiki/Liquidity_risk)**, the risk that you can't find a market to sell/buy something, usually leading to a shortage of ready cash.

![Correlation of Risks in the Financial Crisis](/img/generated/risks/landscape/causation2.png)

In the financial crisis of 2007, these models of risk didn't turn out to be much use.   Although there are lots of conflicting explanations of what happened, one way to look at it is this:

 - Liquidity difficulties (i.e. amount of cash you have for the day-to-day running of the bank) caused some banks to not be able to cover their short term payment obligations.
 - This caused credit defaults (the thing that [Credit Risk](https://en.wikipedia.org/wiki/Credit_risk) measures were meant to guard against) even though the banks _technically_ were solvent.
 - Once credit defaults started, this worried investors in the banks, which had massive [Market Risk](https://en.wikipedia.org/wiki/Market_risk) impacts that none of the models foresaw.

All the [Risks](../thinking/Glossary.md#risk) were [correlated](https://www.investopedia.com/terms/c/correlation.asp).  That is, they were affected by the _same underlying events_, or _each other_.

![Causation shown on a Risk-First Diagram.  More complexity is likely to lead to more Operational Risk](/img/generated/risks/landscape/causation.png)

It's like this with software risks, too, sadly.  For example, [Operational Risk](Operational-Risk.md) is going to be heavily correlated with [Complexity Risk](Complexity-Risk.md).  Just like a machine, the more complex it is, the more likely it is to fail, and the more likely it will fail in some unexpected, difficult-to-diagnose way.  

In the Risk-First diagrams, we will sometimes show correlation or causation with an arrow, like in the diagram above.

## We're all Naturalists Now

Just as naturalists are able to head out and find new species of insects and plants, we should expect to do the same. Risk-First is by no means a complete picture - it's barely a sketch.   

It's a big, crazy, evolving world of software.  Help to fill in the details.   Report back what you find.
                                                      
So, let's get started with [Feature Risk](Feature-Risk.md).
