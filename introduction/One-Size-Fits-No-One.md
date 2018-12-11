![Under Construction](images/state/uc.png)

In [All Risk Management](All-Risk-Management) we made the case that [any action you take](Glossary#taking-action) on a software project is to do with managing risk, and the last section, [A Conversation](A-Conversation) was an example of this happening. 

Therefore, it stands to reason that software methodologies are all about risk management too.  Since they are prescribing a particular day-to-day process, or set of actions to take, they are also prescribing a particular approach to managing the risks on the project.  

Back in the [Development Process](Development-Process) section, we introduced an example software methodology that a development team might follow when building software.  It included steps like _analysis_, _coding_ and _testing_.  And, we looked at how each of these actions reduces risk in the software delivery process.  

We looked at how following a process would expose risks that might be hidden to the members of the team:  it doesn't matter if a developer doesn't know that he's going to break "Feature Y", because the _Integration Testing_ part of the process will mitigate this risk in the testing stage, rather than in production (where it becomes more expensive).  

In this section, we're going to have a brief look at some different software methodologies, and see how different methodologies prioritise different risks.

## Waterfall

> "The waterfall development model originated in the manufacturing and construction industries; where the highly structured physical environments meant that design changes became prohibitively expensive much sooner in the development process. When first adopted for software development, there were no recognized alternatives for knowledge-based creative work." - [Waterfall Model, _Wikipedia_](https://en.wikipedia.org/wiki/Waterfall_model)

![Waterfall Actions](images/generated/introduction/waterfall.png) 

Waterfall is a family of methodologies advocating a linear, stepwise approach to the processes involved in delivering a software system.  The basic idea behind Waterfall-style methodologies was that the software process is broken into distinct stages, usually including:

- [Requirements Capture](Requirements-Capture)
- [Specification](Design)
- [Implementation](Development)
- [Verification](Testing)
- [Delivery](Delivery) and [Operations](Support)
- [Sign Offs](Sign-Off) at each stage

Because Waterfall methodologies are borrowed from _the construction industry_, they manage the risks that you would care about in a construction project.  Specifically, minimising the risk of rework, and the risk of costs spiralling during the physical phase of the project.  For example, pouring concrete is significantly easier than digging it out again after it sets.  

![Waterfall, Specifications and Requirements Capture](images/generated/introduction/waterfall2.png)

Construction projects are often done by tender.  This means that the supplier will bid for the job of completing the project, and deliver it to a fixed price.   This is a risk-management strategy for the client:  they are transferring the risk of construction difficulties to the supplier, and avoiding the [Agency Risk](Agency-Risk) that the supplier will "pad" the project and take longer to implement it than necessary, charging them more in the process.  In order for this to work, both sides need to have a fairly close understanding of what will be delivered, and this is why a specification is created.

In a construction scenario, this makes a lot of sense.  But, _software projects are not the same as building projects_.  There are two key criticisms of the Waterfall approach when applied to software:  

> "1.  Clients may not know exactly what their requirements are before they see working software and so change their requirements, leading to redesign, redevelopment, and re-testing, and increased costs."

> "2.  Designers may not be aware of future difficulties when designing a new software product or feature. " - [Waterfall Model, _Wikipedia_](https://en.wikipedia.org/wiki/Waterfall_model#Supporting_arguments)

So, the same actions Waterfall prescribes to mitigate rework and cost-overruns in the building industry do not address (and perhaps exacerbate) the two issues raised above when applied to software.

![Waterfall, Applied to a Software Project](images/generated/introduction/waterfall3.png)

As you can see in the diagram above, some of the risks on the left _are the same_ as the ones on the right:  the actions taken to manage them made no difference (or made things worse).  The inability to manage these risks led to the identification of a "Software Crisis", in the 1970's:

> "Software crisis is a term used in the early days of computing science for the difficulty of writing useful and efficient computer programs in the required time...   The software crisis was due to the rapid increases in computer power and the complexity of the problems that could not be tackled. " - [Software Crisis, _Wikipedia_](https://en.wikipedia.org/wiki/Software_crisis)

## Alternative Methodologies

The software crisis showed that, a lot of the time, up-front requirements-capture, specification and fixed-price bids did little to manage risk on software projects.  So it's not surprising that by the 1990's, various different groups of software engineers were advocating "Agile" techniques, which did away with these actions.

![Risks, and the practices that manage them in Extreme Programming](images/generated/introduction/xp.png)

In [Extreme Programming Explained](http://amzn.eu/d/1vSqAWa), Kent Beck breaks down his methodology, Extreme Programming, listing the risks he wants to address and the actions he proposes to address them with.  The diagram above summarises the main risks and actions he talks about.   These are _different_ risks to those addressed by Waterfall, and unsurprisingly, this leads to different actions too.

Here are some high-level differences we see in some other popular methodologies:

 - **[Lean Software Development](https://en.wikipedia.org/wiki/Lean_software_development)**: While Waterfall borrows from risk management techniques in the construction industry, Lean Software Development applies the principles from [Lean Manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing), which was developed at Toyota in the last century.  Lean takes the view that the biggest risk in manufacturing is from _waste_, where waste is inventory, over-production, work-in-progress, time spent waiting or defects in production.  Applying this approach to software means minimising work-in-progress, frequent releases and continuous improvement.  

 - **[Project Management Body Of Knowledge (PMBoK)](https://en.wikipedia.org/wiki/Project_Management_Body_of_Knowledge)**:  This is a formalisation of traditional project management practice.  It prescribes best practices for managing scope, schedule, resources, communications, dependencies, stakeholders etc. on a project.  Although "risk" is seen as a separate entity to be managed, all of the above areas are sources of risk within a project, as we will see in Part 2.

 - **[Scrum](https://en.wikipedia.org/wiki/Scrum)**: Is a popular Agile methodology.  Arguably, it is less "extreme" than Extreme Programming, as it promotes a limited set, more achievable set of agile practices, such as frequent releases, daily meetings, a product owner and retrospectives.  This simplicity arguably makes it [simpler to learn and adapt to](Communication-Risk#learning-curve-risk) and probably contributes to Scrum's popularity over XP.  
 
 - **[DevOps](https://en.wikipedia.org/wiki/DevOps)**: Many software systems struggle at the boundary between "in development" and "in production".  DevOps is an acknowledgement of this, and is about more closely aligning the feedback loops between the developers and the production system.  It champions activities such as continuous deployment, automated releases and automated monitoring.

## Effectiveness

> "All methodologies are based on fear.  You try to set up habits to prevent your fears from becoming reality." - [Extreme Programming Explained, _Kent Beck_](http://amzn.eu/d/1vSqAWa)

The promise of any methodology is that it will help you manage certain [Hidden Risks](Glossary#hidden-risk).  But this comes at the expense of the _effort_ you put into the practices of the methodology.  As we've said many times, a lot of the problems on a software project are [Hidden Risks](Glossary#hidden-risk), and so there is an act of faith here:  we are following a methodology because it purports to avoid risks we don't actually know about.

A methodology offers us a route through the [Risk Landscape](Glossary#risk-landscape), based on the risks that the designers of the methodology care about.  When we use the methodology, it means that we are baking into our behaviour actions to avoid those risks.  
 
When we [take action](Glossary#taking-action) according to a methodology, we expect the [Pay-Off](Glossary#pay-off), and if this doesn't materialise, then we feel the methodology is failing us.   But it could just be that it is inappropriate to the _type of project_ we are running.  Our [Risk Landscape](Glossary#risk-landscape) may not be the one the designers of the methodology envisaged.   For example:

 - NASA can't do Agile when launching space craft:  there's no two-weekly launch that they can iterate over, and the the risks of losing a rocket or satellite are simply too great to allow for iteration in production.   The risk profile is just all wrong for Agile: you need to manage the risk of _losing hardware_ over the risk of _requirements changing_.  

 - Equally, regulatory projects often require big, up-front, waterfall-style design:  keeping regulators happy is often about showing  that you have a well-planned path to achieving the regulation.  Often, the changes need to be reviewed and approved by regulators and other stakeholders in advance of their implementation.  This can't be done with an approach of "iterate for a few months".  

 - At the other end of the spectrum, [Facebook used to have](https://mashable.com/2014/04/30/facebooks-new-mantra-move-fast-with-stability/?europe=true) an approach of "move fast and break things".  This may have been optimal when they were trying mitigate the risk of being out-innovated by competitors within the fast-evolving sphere of social networking. 
 
![Inappropriate Methodologies create their own risks](images/generated/introduction/one_size.png)

## Choosing A Methodology

There is value in adopting a methodology as a complete collection of processes:  Choosing a methodology (or any process) reduces the amount of thinking individuals have to do.  Following a process may avoid the risks, whether the implementer knows about them or not.  And, it becomes the process that is responsible for failure, not the individual (as shown in the above diagram).  

If we genuinely care about our projects, then it's critical that we match the choice of methodology to the risk profile of the project.  We need to understand exactly what risks our methodology will help us with, and which it won't; where it is appropriate, and where it isn't.

An off-the-shelf methodology is unlikely to fit the risks of our project exactly.  Sometimes, we need to break down methodologies into their component practices, and apply just the practices we need.  This requires a much more fine-grained understanding of how the practices work, and what they bring.  

So different methodologies advocate different practices, and different practices manage different risks.   If we want to understand methodologies, or even choose the right practices from one, we really need to understand the _types of risks_ we face on software projects.  This is where we go next in [Part 2](Risk-Landscape). 
