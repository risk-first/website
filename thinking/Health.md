---
title: Health
description: Looking at risks as dangers to the health of a system
url: https://riskfirst.org/thinking/Health

featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/8bit-heart.svg">Health</image-artifact>'
categories: 
 - Thinking Risk-First
order: 7
redirect_from: 
 - /Health
---


# Health and Risk

In [A Simple Scenario](A-Simple-Scenario.md) we looked at risks to a dinner party, before moving to risks to a software product in [Development Process](Development Process.md).  In the last section, [Evaluating Risk](Evaluating-Risk.md) we looked at various _monetary_ measures we can use for measuring risk, like discounting and NPV.  That's largely because in the past, this is how people (largely in industries like banking and insurance) have thought about risk.  

But risk isn't just money.  Life is filled with non-monetary risks:

> "If someone says, 'You can make it!' down a vertical mountain when you don't ski very well, think about it before launching. This can be a turning point in your life. It sure was in mine when I slammed into the mountain.   I wish I'd said, 'F'getabout it, sucka,' and gone to the Kiddie Corral. Would have saved a lot of pain and surgery.  Think about this. What are you really up for? Is the thrill worth the cost?"  — Sandy Nathan

I am going to argue in this section that _risks_ are things that affect the health of a thing, where the thing could be:

 - **An organism**, such as the human body, which is exposed to _health risks_, such as [Cardiovascular Disease](https://en.wikipedia.org/wiki/Cardiovascular_disease) or [Parkinson's Disease](https://en.wikipedia.org/wiki/Parkinson's_disease).  
 
 - **A Commercial Entity**, such as a business, which is exposed to various [Operational Risks](../risks/Operational-Risk.md) in order to continue to function.  Businesses face different health risks than organisms:  key staff leaving, reputation damage, running out of money and so on.
 
 - **A Software Product** is a system we interact with, built out of code.  As we saw in [Development Process](Development Process.md), the health of that software system is damaged by the existence of bugs. 
 
 - Even **The Dinner Party** is a system - it has inputs of people and ingredients, a process whereby everyone comes together at a particular time to eat and talk.  As we saw in [A Simple Scenario](A-Simple-Scenario.md) it is very easy to damage the health of this system by not providing the right food at the right time.  
 
 - On a larger scale, **The United Kingdom** is a system, the health of which is threatened by various existential risks such as climate change, nuclear war, pandemics and so on.
  
## What Is Health?

Health is a really universal property: it seems like you can talk about the health of nearly everything!  For example, I can talk about the health of soil (how likely things are to grow in it), of a table (whether it might collapse or not), a tree (whether it looks nice and is growing) or a political party (whether it's membership is strong and growing).  

However, in all these cases, health refers to something slightly different, often depending on our own point-of-view.  So, it's generally an overloaded term, so let's look at some different meanings for health.

### Alive vs Dead

The most obvious indicator of health in living things is their capacity to be alive or dead.  There is no clear definition of exactly what [a living thing _is_](https://en.wikipedia.org/wiki/Life), so often scientists fall back to describing the _behaviours_ of living things, such as _metabolism_ (taking in energy or other inputs, and using it to self-organise), _homeostasis_ (having some kind of feedback loops to maintain an internal state) or _adaptation_ (responding to changes in the environment).

When a living thing is no longer exhibiting these behaviours, it is dead.  But, the same is true of the other examples on our list too:  people die, businesses go bust, projects get cancelled, dinner parties end.  At the larger end of this scale, we can say that a country or a project is alive so long as there are people participating in it:  to be alive, the constituent components must be alive too.

The problem with "Alive" vs "Dead" is that it is binary - there is no scope for "improving" or "worsening" health.  I could be involved in an accident that severely limits my capability, but leaves me alive.   My health is definitely worse though.   So, let's look further.

### Fitness

A different approach to judging the health of a thing might be to take measurements of it and compare it to other things.  For example, we could say the health of a battery is related to the amount of charge it contains compared to a new battery, or the health of soil by the quantity and quality of crops it produces compared to some baseline.  

For **people**, you can measure health by looking at things like resting heart rate, blood pressure, lung capacity and so on.  Also, there are tools like the [SF-36](https://en.wikipedia.org/wiki/SF-36) which aim to capture (via survey) the general health of people, by asking them about their physical functioning, emotional well-being and so on.

For **a business** like a car factory, say, you could create metrics for the number of units completed, the defect rate, the number of accidents per year and so on.  For **a software product** you could look at things like number of users, or some other metric.  If you're in a **development team** which is working on new software, you could look at something like [Burn Rate](https://en.wikipedia.org/wiki/Burn_rate).

Metrics are difficult though.  Choosing the right metrics, and knowing their weaknesses is further discussion which we look at in [Map And Territory Risk](https://riskfirst.org/risks/Map-And-Territory-Risk).

### Risk Exposure

Simply looking at "Fitness" isn't the whole story of health.   Personally, I might be perfectly happy and (apparently) healthy one moment, but then fall down dead from heart failure the next due to some inherited heart condition.  Was I, in fact, healthy?  

We have to go further and consider - what are the health risks I am exposed to?   What are the risks due to my environment, my diet, my behaviour?   If I live in a high-crime area, in a high-fire-risk house, engaging in lots of dangerous activities then this should be taken into account when judging my health.

#### ... For A Commercial Entity

It is the same for a **commercial entity** too.  Looking at metrics doesn't tell you whether your business is about to be obsoleted by a new invention, or whether your factory is about to turn into a human tragedy (such as in the [Bhopal Disaster](https://en.wikipedia.org/wiki/Bhopal_disaster).

Just as human health-risks are relatively well-known and documented, an understanding of the risks to **commercial entities** has been built up over time. Accounting requires a certain set of measurements (all measured in monetary units), which are the same for all companies:

 - A **Balance Sheet**, showing what the company owns and owes.  This is used for reporting [Funding Risk](https://financial-dictionary.thefreedictionary.com/Funding+risk) - that is, does the company have too much debt, given its assets?  
 - A **Profit and Loss Statement**, showing whether the company is making or losing money from the deals it does.  Companies that consistently lose money will die, so this is a statement that helps investors know what risks they face.  This kind of transparency helps reduce [Agency Risk](../risks/Agency-Risk.md) for investors.
 - A **Cash Flow Statement**, showing the company's cash position and how much cash is entering and leaving the company.  This is important for managing [Liquidity Risk](https://en.wikipedia.org/wiki/Liquidity_risk) - the short-term requirement of cash on-hand to keep the business running.  Some companies can be hugely profitable, but nevertheless fail due to lack of cash. For example, [Northern Rock](https://en.wikipedia.org/wiki/Northern_Rock) failed in the 2007 financial crisis as it was unable to cover short-term payments.

All of these are measured in monetary amounts, but each addresses a different risk.   A healthy commercial entity will be managing all of these kinds of monetary risks, as well as the [Operational Risks](../risks/Operational-Risk.md) of running.

#### Software

Over time, as a species, we have built up a detailed body of knowledge on the risks that afflict _human_ health, as well as the ones that affect the health of _commercial entities_.  

The purpose of [Risk First](https://riskfirst.org) is to try to build that body of knowledge for software development.  Risks are in general _not_ unique on software projects - they are the same ones over and over again, such as [Communication Risk](../risks/Communication-Risk.md) or [Dependency Risk](../risks/Dependency-Risk.md).  Every project faces these.  

A complete [Pattern Language](https://riskfirst.org/risks/A-Pattern-Language) covering all the main categories of risks you face on a software project starts [here](https://riskfirst.org/risks/Start).

#### The United Kingdom

On to the last example: how healthy is the United Kingdom?  It might seem unlikely, but as well as producing the _fitness metrics_ (such as GDP, employment, education level, health indicators for the inhabitants) the UK government also produces a [National Risk Register](https://www.gov.uk/government/publications/national-risk-register-2020), which considers various risks (flooding, fires, pandemics, nuclear attack) and produces a matrix comparing:

 - **Impact**  This is an `A-E` scale. `A` means a risk costing < £10m and killing < 8 people.   An `E` impact (the largest), meanwhile has a > £10b cost and > 1000 deaths.  According to this reckoning, pandemics and CBRN (chemical, biological, radiological and nuclear) attacks have the greatest impact.
 - **Likelihood**: This is based on a probability out of 500, again banded into sections.  The lowest risks (1/500) only contains a major transport accident, whilst lots of terrorist attacks exist in the 25-125/500 band.

![UK Government 2020 Risk Matrix](/images/thinking/uk-risk-matrix-2020.png)

Why would they produce such a report?  From their introduction:

> "The 2020 National Risk Register sets out the range of risks and challenges we face which have the potential to cause significant disruption to the UK, and explains what the government and partners are doing to mitigate these risks and how we all can prepare for and respond to them"

This is about the health of a nation:  _tracking the risks you face_ and then _managing them_ are an important way to stay healthy.

The next two sections focus on how to do this.  In the next section, [Cadence](Cadence.md) we will look at the importance of feedback loops on tracking the risks you face.  Then in [De-Risking](De-Risking.md) we will look at general strategies for managing risks on software projects.

On to [Cadence](Cadence.md)...

  














 