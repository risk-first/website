---
title: One Size Fits No-One
description: Explanation of why there can't be a perfect software methodology.
url: https://riskfirst.org/thinking/One-Size-Fits-No-One

featured: 
  class: bg3
  element: '<internal-model-artifact>One Size</internal-model-artifact>'
categories:
 - Thinking Risk-First
 - Popular
order: 8
date: 2019-01-22 16:32:03 +0000
redirect_from: 
 - /One-Size-Fits-No-One
---

# One Size Fits No-One

Why are [Software Methodologies](https://en.wikipedia.org/wiki/Software_development_process) all different? 

[Previously](Just-Risk.md), we made the case that [any action you take](../thinking/Glossary.md#taking-action) on a software project is to do with managing [risk](../thinking/Glossary.md#risk), and the last section, [A Conversation](A-Conversation.md) was an example of this happening. 

Therefore, it stands to reason that software methodologies are all about handling risk too.  Since they are prescribing a particular day-to-day process, or set of actions to take, they are also prescribing a particular approach to managing the risks on software projects.  

## Methodologies Surface Hidden Risks...

Back in the [Development Process](Development-Process.md) section we introduced a toy software methodology that a development team might follow when building software.  It included steps like _analysis_, _coding_ and _testing_.  We looked at how the purpose of each of these actions was to manage risk in the software delivery process.  For example, it doesn't matter if a developer doesn't know that he's going to break "Feature Y", because the _Integration Testing_ part of the methodology will expose this [hidden risk](../thinking/Glossary.md#hidden-risk) in the testing stage, rather than in let it surface in production (where it becomes more expensive).  

## ... But Replace Judgement

But, following a methodology means that you are trusting something _other_ than your own judgement to make decisions on what actions to take: perhaps the methodology recommends some activity which wastes time, money or introduces some new risk?

Following a software methodology is therefore an act of _trust_:  

- Why should we place trust in any _one_ methodology, given there are so many alternatives?  
- Should there not be more agreement between them, and if not, why not?
- How can a methodology _possibly_ take into account the risks on _my_ project?

In this section, we're going to have a brief look at some different software methodologies, and try to explain _why_ they are different.  Let's start with Waterfall.

## Waterfall

> "The waterfall development model originated in the manufacturing and construction industries; where the highly structured physical environments meant that design changes became prohibitively expensive much sooner in the development process. When first adopted for software development, there were no recognized alternatives for knowledge-based creative work." - [Waterfall Model, _Wikipedia_](https://en.wikipedia.org/wiki/Waterfall_model)

![Waterfall Actions](/images/generated/introduction/waterfall.png) 

Waterfall is a family of methodologies advocating a linear, stepwise approach to the processes involved in delivering a software system.  The basic idea behind Waterfall-style methodologies is that the software process is broken into distinct stages, as shown in the diagram above.  These usually include:

- [Requirements Capture](../practices/Requirements-Capture.md)
- [Specification](../practices/Design.md)
- [Implementation](../practices/Development.md)
- [Verification](../practices/Testing.md)
- [Delivery](../practices/Delivery.md) and [Operations](../practices/Support.md)
- [Sign Offs](../practices/Sign-Off.md) at each stage

Because Waterfall methodologies are borrowed from _the construction industry_, they manage the risks that you would care about in a construction project, specifically, minimising the risk of rework, and the risk of costs spiralling during the physical phase of the project.  For example, pouring concrete is significantly easier than digging it out again after it sets.  

![Waterfall, Specifications and Requirements Capture](/images/generated/introduction/waterfall2.png)

Construction projects are often done by tender which means that the supplier will bid for the job of completing the project, and deliver it to a fixed price.   This is a risk-management strategy for the client:  they are transferring the risk of construction difficulties to the supplier, and avoiding the [Agency Risk](../risks/Agency-Risk.md) that the supplier will "pad" the project and take longer to implement it than necessary, charging them more in the process.  In order for this to work, both sides need to have a fairly close understanding of what will be delivered, and this is why a specification is created.

### The Wrong Risks?

In construction this makes a lot of sense.  But _software projects are not the same as building projects_.  There are two key criticisms of the Waterfall approach when applied to software:  

> "1.  Clients may not know exactly what their requirements are before they see working software and so change their requirements, leading to redesign, redevelopment, and re-testing, and increased costs."

> "2.  Designers may not be aware of future difficulties when designing a new software product or feature. " - [Waterfall Model, _Wikipedia_](https://en.wikipedia.org/wiki/Waterfall_model#Supporting_arguments)

So, the same actions Waterfall prescribes to mitigate rework and cost-overruns in the building industry do not address (and perhaps exacerbate) the two issues raised above when applied to software.

![Waterfall, Applied to a Software Project](/images/generated/introduction/waterfall3.png)

As you can see in the diagram above, some of the risks on the left _are the same_ as the ones on the right:  the actions taken to manage them made no difference (or made things worse).  The inability to manage these risks led to the identification of a "Software Crisis", in the 1970's:

> "Software crisis is a term used in the early days of computing science for the difficulty of writing useful and efficient computer programs in the required time...   The software crisis was due to the rapid increases in computer power and the complexity of the problems that could not be tackled. " - [Software Crisis, _Wikipedia_](https://en.wikipedia.org/wiki/Software_crisis)

## Agile

The Software Crisis showed that, a lot of the time, up-front requirements-capture, specification and fixed-price bids did little to manage cost and schedule risks on software projects.  So it's not surprising that by the 1990's, various different groups of software engineers were advocating "Agile" techniques which did away with those actions.

![Risks, and the practices that manage them in Extreme Programming](/images/generated/introduction/xp.png)

In [Extreme Programming Explained](http://amzn.eu/d/1vSqAWa), Kent Beck breaks down his methodology, 'Extreme Programming', listing the risks he wants to address and the actions with which he proposes to address them.  The diagram above summarises the main risks and actions he talks about.   These are _different_ risks to those addressed by Waterfall, so unsurprisingly, they lead to different actions.

## Different Methodologies For Different Risks

Here are some high-level differences we see in some other popular methodologies:

 - **[Lean Software Development](https://en.wikipedia.org/wiki/Lean_software_development)**. While Waterfall borrows from risk management techniques in the construction industry, Lean Software Development applies the principles from [Lean Manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing), which was developed at Toyota in the last century.  Lean takes the view that the biggest risk in manufacturing is from _waste_, where waste is inventory, over-production, work-in-progress, time spent waiting or defects in production.  Applying this approach to software means minimising work-in-progress, frequent releases and continuous improvement.  

 - **[Project Management Body Of Knowledge (PMBoK)](https://en.wikipedia.org/wiki/Project_Management_Body_of_Knowledge)**.  This is a formalisation of traditional project management practice.  It prescribes best practices for managing scope, schedule, resources, communications, dependencies, stakeholders etc. on a project.  Although "risk" is seen as a separate entity to be managed, all of the above areas are sources of risk within a project, as we will see in [Part 4](../wip/PM.md).

 - **[Scrum](https://en.wikipedia.org/wiki/Scrum)**. Is a popular Agile methodology.  Arguably, it is less "extreme" than Extreme Programming, as it promotes a limited set, more achievable set of agile practices, such as frequent releases, daily meetings, a product owner and retrospectives.  This simplicity arguably makes it [simpler to learn and adapt to](../risks/Communication-Risk.md#learning-curve-risk) and probably contributes to Scrum's popularity over XP. 
 
 - **[DevOps](https://en.wikipedia.org/wiki/DevOps)**. Many software systems struggle at the [boundary](../risks/Boundary-Risk.md) between "in development" and "in production".  DevOps is an acknowledgement of this, and is about more closely aligning the feedback loops between the developers and the production system.  It champions activities such as continuous deployment, automated releases and automated monitoring.

While this is a limited set of examples, you should be able to observe that the [actions](../thinking/Glossary.md#taking-action) promoted by a methodology are contingent on the risks it considers important.

## Effectiveness

> "All methodologies are based on fear.  You try to set up habits to prevent your fears from becoming reality." - [Extreme Programming Explained, _Kent Beck_](http://amzn.eu/d/1vSqAWa)

The promise of any methodology is that it will help you manage certain [Hidden Risks](../thinking/Glossary.md#hidden-risk).  But this comes at the expense of the _effort_ you put into the practices of the methodology. 

A methodology offers us a route through the [Risk Landscape](../thinking/Glossary.md#risk-landscape), based on the risks that the designers of the methodology care about.  When we use the methodology, it means that we are baking into our behaviour actions to avoid those risks.  

### Methodological Failure
 
When we [take action](../thinking/Glossary.md#taking-action) according to a methodology, we expect the [Payoff](../thinking/Glossary.md#payoff), and if this doesn't materialise, then we feel the methodology is failing us.   It could just be that it is inappropriate to the _type of project_ we are running.  Our [Risk Landscape](../thinking/Glossary.md#risk-landscape) may not be the one the designers of the methodology envisaged.   For example:

 - NASA [don't follow an agile methodology](https://standards.nasa.gov/standard/nasa/nasa-std-87398) when launching space craft:  there's no two-weekly launch that they can iterate over, and the the risks of losing a rocket or satellite are simply too great to allow for iteration in production.   The risk profile is just all wrong: you need to manage the risk of _losing hardware_ over the risk of _requirements changing_.  

 - Equally, regulatory projects often require big, up-front, waterfall-style design:  keeping regulators happy is often about showing that you have a well-planned path to achieving the regulation.  Often, the changes need to be reviewed and approved by regulators and other stakeholders in advance of their implementation.  This can't be done with an approach of "iterate for a few months".  

 - At the other end of the spectrum, [Facebook used to have](https://mashable.com/2014/04/30/facebooks-new-mantra-move-fast-with-stability/?europe=true) an approach of "move fast and break things".  This may have been optimal when they were trying mitigate the risk of being out-innovated by competitors within the fast-evolving sphere of social networking.  _Used to have_, because now they have modified this to ["move fast with stable infrastructure"](https://www.cnet.com/news/zuckerberg-move-fast-and-break-things-isnt-how-we-operate-anymore/), perhaps as a reflection of the fact that their biggest risk is no longer competition, but bad publicity.    

## Choosing A Methodology

![Inappropriate Methodologies create their own risks](/images/generated/introduction/one_size.png)

There is value in adopting a methodology as a complete collection of processes:  choosing a methodology (or any process) reduces the amount of thinking individuals have to do, and it becomes _the process_ that is responsible for failure, not the individual (as shown in the above diagram).  

It's nice to lay the blame somewhere else.  But, if we genuinely care about our projects, then it's critical that we match the choice of methodology to the risk profile of the project.  We need to understand exactly what risks our methodology will help us with, which it won't, where it is appropriate, and where it isn't.

> "Given any rule, however 'fundamental' or 'necessary' for science, there are always circumstances when it is advisable not only to ignore the rule, but to adopt its opposite." - [Paul Feyerabend](https://www.azquotes.com/author/4773-Paul_Feyerabend)

An off-the-shelf methodology is unlikely to fit the risks of any project exactly.  Sometimes, we need to break down methodologies into their component practices, and apply just the practices we need.  This requires a much more fine-grained understanding of how the individual practices work, and what they bring.  

![Methodologies, Actions, Risks, Goals](/images/generated/executive-summary/pattern_language.png)

As the above diagram shows, different methodologies advocate different practices, and different practices manage different risks.   If we want to understand methodologies, or choose practices from one, we really need to understand the _types of risks_ we face on software projects.  This is where we go next in [Part 2](../risks/Risk-Landscape.md). 
