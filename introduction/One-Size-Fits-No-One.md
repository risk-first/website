![Under Construction](images/state/uc.png)

In [All Risk Management](All-Risk-Management) we made the case that [any action you take](Glossary#taking-action) on a software project is to do with managing risk, and the last section, [A Conversation](A-Conversation) was an example of this happening. 

Therefore, it stands to reason that software methodologies are all about risk management too.  Since they are prescribing a particular day-to-day process, or set of actions to take, they are also prescribing a particular approach to managing the risks on the project.  

Back in the [Development Process](Development-Process) section, we introduced an example software methodology that a development team might follow when building software.  It included steps like _analysis_, _coding_ and _testing_.  And, we looked at how each of these actions reduces risk in the software delivery process.  

We looked at how following a process would expose risks that might be hidden to the members of the team:  it doesn't matter if a developer doesn't know that he's going to break "Feature Y", because the _Integration Testing_ part of the process will mitigate this risk in the testing stage, rather than in production (where it becomes more expensive).  

In this section, we're going to have a brief look at some different software methodologies, and see how different methodologies prioritise different risks.

## Waterfall

> "The waterfall development model originated in the manufacturing and construction industries; where the highly structured physical environments meant that design changes became prohibitively expensive much sooner in the development process. When first adopted for software development, there were no recognized alternatives for knowledge-based creative work." - [Waterfall Model, _Wikipedia_](https://en.wikipedia.org/wiki/Waterfall_model)

![Waterfall Actions](images/generated/introduction/waterfall.png) 

[Waterfall](https://en.wikipedia.org/wiki/Waterfall_model) is a family of methodologies advocating a linear, stepwise approach to the processes involved in delivering a software system.  The basic idea behind Waterfall-style methodologies was that the software process is broken into distinct stages, usually including:

- [Requirements Capture](Requirements-Capture)
- [Specification](Big-Design-Up-Front)
- [Implementation](Development)
- [Verification](Testing)
- [Delivery](Delivery) and [Operations](Support)
- [Sign Offs](Sign-Offs) at each stage

Because Waterfall methodologies are borrowed from _the construction industry_, they manage the risks that you would care about in a construction project.  Specifically, minimising the risk of rework, and the risk of costs spiralling during the physical phase of the project.  For example, pouring concrete is significantly easier than digging it out again after it sets.  

![Waterfall, Specifications and Requirements Capture](images/generated/introduction/waterfall2.png)

Construction projects are often done by tender.  This means that the supplier will bid for the job of completing the project, and deliver it to a fixed price.   This is a risk-management strategy for the client:  they are transferring the risk of construction difficulties to the supplier, and avoiding the [Agency Risk](Agency-Risk) that the supplier will "pad" the project and take longer to implement it than necessary, charging them more in the process.  In order for this to work, both sides need to have a fairly close understanding of what will be delivered, and this is why a specification is created.

In a construction scenario, this makes a lot of sense.  But, _software projects are not the same as building projects_.  There are two key criticisms of the Waterfall approach when applied to software:  

> "1.  Clients may not know exactly what their requirements are before they see working software and so change their requirements, leading to redesign, redevelopment, and re-testing, and increased costs."

> "2.  Designers may not be aware of future difficulties when designing a new software product or feature. " - [Waterfall Model, _Wikipedia_](https://en.wikipedia.org/wiki/Waterfall_model#Supporting_arguments)

So, the same actions Waterfall prescribes to mitigate rework and cost-overruns in the building industry do not address (and perhaps exacerbate) the two issues raised above when applied to software, as shown in the diagram above.

![Waterfall, Applied to a Software Project](images/generated/introduction/waterfall2.png)

As you can see in the above diagram, some of the risks on the left _are the same_ as the ones on the right:  the actions taken to manage them made no difference (or made things worse).  The inability to manage these risks led to the identification of a "Software Crisis", in the 1970's:

> "Software crisis is a term used in the early days of computing science for the difficulty of writing useful and efficient computer programs in the required time...   The software crisis was due to the rapid increases in computer power and the complexity of the problems that could not be tackled. " - [Software Crisis, _Wikipedia_](https://en.wikipedia.org/wiki/Software_crisis)

## Agile

As the diagram above shows, a lot of the time, up-front requirements-capture, specification and fixed-price bids did little to manage risk on software projects.  So it's not surprising that by the 1990's, various different groups of software engineers were advocating "Agile" techniques, which did away with these actions.

In "Extreme Programming Explained", Kent Beck breaks down Extreme Programming, listing the risks he wants to address with his methodology, and the actions he proposes to address them with.

TBD diagram

## Other Methodologies

Later in Risk-First, we will be going deeper on methodologies, examining them using a Risk-First perspective to understand what makes each one work, what they value and how they treat different risks.  To get there, we need to have a model of the risks we face on a software project, and this is the subject of Part 2, in the next section.  

Until then though, let's cover at a high-level the basic differences we see in some of the methodologies:

 - **[Lean](https://en.wikipedia.org/wiki/Lean_software_development)**: Applies the principles used in [Lean Manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing), which was developed at Toyota in the last century.  Lean takes the view that the biggest risk in manufacturing is from waste, where waste is inventory, over-production, work-in-progress, time spent waiting or imperfectly made product.  

 - **[Project Management Body Of Knowledge (PMBoK)](https://en.wikipedia.org/wiki/Project_Management_Body_of_Knowledge)**:  This is a formalisation of the project management approach of individually managing scope, schedule, resources, communications, dependencies, stakeholders etc. on the project.  Although "risk" is seen as a separate entity to be managed, all of the above areas are sources of risk within a project, as we will see in Part 2.

 - **[Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development))**: Is a popular Agile methodology, although arguably less "extreme" than [Extreme Programming]() discussed above.  Scrum promotes only a few agile practices, such as frequent releases, daily meetings, a product owner and retrospectives.  This simplicity arguably reduces [Learning Curve Risk](Communication-Risk#learning-curve-risk) and probably contributes to Scrum's popularity over XP.  
 
 - **[DevOps](https://en.wikipedia.org/wiki/DevOps)**: Many software systems struggle with the transition between development and production.  DevOps acknowledges this risk area and is about reducing the [Operational Risk](Operational-Risk) inherent in running software by more closely aligning the development effort with production.  It champions activities such as continuous deployment automated releases and automated monitoring.

## Horses For Courses

diagram: hidden risk -> practice  ->  time.

The promise of methodology is that it will help you avoid hidden risks, but this comes at the expense of the _effort_ you put into the practices of the methodology.  

When we [take action](Glossary#take-action) according to a methodology, we expect the [Pay Off](Glossary#pay-off), and if this doesn't materialise, then we feel the methodology is failing us.  

For example, NASA can't do Agile when launching space craft:  there's no two-weekly launch that they can iterate over, and the costs of failure are high if something goes wrong.   The risk profile is just all wrong for Agile: you need to manage the risk of _losing hardware_ over the risk of _requirements changing_.  

Equally, regulatory projects often require big, up-front, waterfall-style design:  keeping regulators happy is often about showing  that you have a well-planned path to achieving the regulation.  Often, the changes need to be reviewed and approved by regulators and other stakeholders in advance of their implementation.  This can't be done with an approach of "iterate for a few months".  

## Fear and Belief

> "All methodologies are based on fear.  You try to set up habits to prevent your fears from becoming reality." - [Extreme Programming Explained, _Kent Beck_](http://amzn.eu/d/1vSqAWa)

A methodology offers us a route through the [Risk Landscape](Glossary#risk-landscape), based on the risks that the designers of the methodology care about.  When we use the methodology, it means that we are baking into our behaviour actions to avoid those risks.  

As we've said many times, a lot of the problems on a software project are [Hidden Risks](Glossary#hidden-risk), and so there is an act of faith here:  we are following an approach because it purports to avoid risks we can't know about.

Having a process reduces the amount of thinking individuals have to do.  Following a process will (hopefully) avoid the risks, whether the implementer knows about them or not.  At the same time, it is the process that is responsible for failure, not the individual.  

diagram: personal blame -> process -> project failure?

If we genuinely care about our projects, then it's critical that we match the choice of methodology to the risk profile of the project.  We need to understand exactly what risks our methodology will help us with, and which it won't; where it is appropriate, and where it isn't.

So different methodologies advocate different practices, and different practices manage different risks.   If we want to understand methodologies, or even choose the right practices we really need to understand the _types of risks_ we face on software projects.  On to [Part 2](Risk-Landscape)!
