---
title: Health
description: Looking at risks as dangers to the health of a system
url: https://riskfirst.org/thinking/Health

featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/8bit-heart.svg">Health</image-artifact>'
categories: 
 - Misc
order: 14
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
 
 - On a larger scale, **Human Civilisation** is a system, the health of which is threatened by various (TODO) risks such as climate change, nuclear war, pandemics and so on.
  
## What Is Health?

Health is a really universal property: it seems like you can talk about the health of nearly everything!  For example, I can talk about the health of soil (how likely things are to grow in it), of a table (whether it might collapse or not), a tree (whether it looks nice and is growing) or a political party (whether it's membership is strong and growing).  

However, in all these cases, health refers to something slightly different, often depending on our own point-of-view.  So, it's generally an overloaded term, so let's look at some different meanings for health.

### Alive vs Dead

The most obvious indicator of health in living things is their capacity to be alive or dead.  There is no clear definition of exactly what [a living thing _is_](https://en.wikipedia.org/wiki/Life), so often scientists fall back to describing the _behaviours_ of living things, such as _metabolism_ (taking in energy or other inputs, and using it to self-organise), _homeostasis_ (having some kind of feedback loops to maintain an internal state) or _adaptation_ (responding to changes in the environment).

When a living thing is no longer exhibiting these behaviours, it is dead.  But, the same is true of the other examples on our list too:  people die, businesses go bust, projects get cancelled, dinner parties end.  At the larger end of this scale, we can say that a civilisation or a project is alive so long as there are people participating in it:  to be alive, the constituent components must be alive too.

The problem with "Alive" vs "Dead" is that it is binary - there is no scope for "improving" or "worsening" health.  So we need to look further.

### Fitness

A different approach to judging the health of a thing might be to take measurements, and compare it to other things.  For example, we could say the health of a battery is related to the amount of charge it contains, or the health of soil by the quantity and quality of crops it produces.  

For people, you can measure health by looking at things like resting heart rate, blood pressure, lung capacity and so on.  There are tools like the [SF-36](https://en.wikipedia.org/wiki/SF-36) which aim to capture (via survey) the general health of people.  

For a business like a car factory say, you could create metrics for the number of units completed, the defect rate, the number of accidents per year and so on.  






### Risk Exposure



For **commercial entities**, Accounting requires a certain set of measurements, which are the same for all companies:

 - A **Balance Sheet**, showing what the company owns and owes.  This is used for managing [Funding Risk]() - does the company have too much debt?  
 - A **Cash Flow Statement**, showing the company's cash position and how much cash is entering and leaving the company.  This is important for managing [Liquidity Risk]() - the short-term requirement of cash on-hand to keep the business running.
 - A **Profit and Loss Statement**, showing whether the company is making or losing money from the deals it does.  That is, is the health of the company improving or worsening with time?

[Evaluating Risk](Evaluating-Risk.md) showed how we can use [Net-Present Value](Evaluating-Risk.md#discounting) to discount future risks so that they can be compared against today's risks.  However, from an accounting perspective, not all risks affect a commercial entity in the same way.   You could have an activity that generates a lot of profit in the future, but at the expense of cash-flow today.  

In fact, a lot of business is like this:  up-front costs now for profit later on.   The reason [Northern Rock](https://en.wikipedia.org/wiki/Northern_Rock) failed in the 2007 financial crisis and [LTCM](https://en.wikipedia.org/wiki/Long-Term_Capital_Management) before them was cash flow, and the ability to keep operations running day-to-day.

For this reason, company accounts contain multiple different views on the risks to the company:

All of these are measured in monetary amounts, but each addresses a different risk.   A healthy commercial entity will be managing all of these kinds of monetary risks.



 



Health Isn't One-Dimensional











### Health Of An Organism






In the same way, we can't judge the health of any other system in a simple one-dimensional way, either.   I might go to the doctor and receive a clean bill of physical health, but simultaneously  be suffering from depression or facing personal bankruptcy, either of which affects the health of me-as-a-system.

There are two implications of this:
 
- First, we need to account for all risks in order to judge the health of any system.   However, we already know that there are [Hidden Risks]() that we're not going to be aware of.
- Second, it isn't possible to "add up" all the risks in any meaningful way to arrive at a single "health score".  Risk-First espouses the idea that most of the time, you should be able to say "this risk is worse than this risk", at the end of the day, this is judgement, not maths:  because the systems we're talking about here are complex systems, and it's hard to see how they will play out.

## Health Failure


- Breakage

- Fitness


https://en.wikipedia.org/wiki/Critical_transition
https://en.wikipedia.org/wiki/Hysteresis  (observed in nearly all complex systems)
 


All of the above are examples of what mathematicians call "Complex Systems":

> "A complex system is a system composed of many components which may interact with each other. Examples of complex systems are Earth's global climate, organisms, the human brain, infrastructure such as power grid, transportation or communication systems, social and economic organizations (like cities), an ecosystem, a living cell, and ultimately the entire universe." - [Complex Systems, _Wikipedia_](https://en.wikipedia.org/wiki/Complex_system)



- software development as a complex system
- computer software as a complex system
- hierarchies of complex systems. 
- agency risk
  














 