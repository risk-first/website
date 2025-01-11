
## Operations Management

If we are designing a software system to "live" in the real world we have to be mindful of the **Operational Context** we're working in and craft our software and processes accordingly.   This view of the "wider" system is the discipline of Operations Management.  

> "Operations management is an area of management concerned with designing and controlling the process of production and redesigning business operations in the production of goods or services.  It involves the responsibility of ensuring that business operations are efficient in terms of using as few resources as needed and effective in terms of meeting customer requirements. " - [Operations Management, _Wikipedia_](https://en.wikipedia.org/wiki/Operations_management)

![Model of Operations Management, adapted from Slack _et al._](/img/generated/risks/operational/slack.svg)

The diagram above is a Risk-First interpretation of [Slack _et al_'s model of Operations Management](https://amzn.eu/d/b6ZjuMu).  This model breaks down some of the key abstractions of the discipline: 

 - **A Transform Process** (the **Operation** itself), which tries to achieve an...
 - **Operational Strategy** (the objectives of the operation) and is embedded in the wider...
 - **Operational Context**, which supplies the **Transform Process** with three key dependencies.  These are... 
 - **Resources**:  whether _transformed_ resources (like electricity or information, say) or _transforming_ resources (like staff or equipment).  
 - **Customers**: which supply it with money in return for goods and services.
 
![Risk-First Operations Management:  Taking Action, inspired by the work of Slack _et al._](/img/generated/risks/operational/operational-risk.svg)
 
The healthy functioning of the **Transform Process** is the domain of [Operations Management](#operations-management).  As the above diagram shows (again, modified from Slack _et al._) this involves the following types of actions.

 - **Control**:  ensuring that the Transform Process is working according to its targets.  This includes day-to-day quality control and monitoring . 
 - **Planning**: this covers aspects such as capacity planning, forecasting and project planning.   This is about making sure the transform process has targets to meet and the resources to meet them.
 - **Design**:  ensuring that the design of the product and the transform process itself fulfils an Operational Strategy.
 - **Improvement**:  improving the operation in response to changes in the **Environment** and the Operational Strategy, detecting failure and recovering from it.

Let's look at each of these actions in turn.


## Control

![Control, Monitoring And Detection](/img/generated/risks/operational/monitoring-detection.svg)

Since humans and machines have different areas of expertise, and because [Operational Risks](/tags/Operational-Risk) are often novel, it's often not optimal to try and automate everything.  A good operation will consist of a mix of human and machine actors, each playing to their strengths (see the table below). 

The aim is to build a human-machine operational system that is [_Homeostatic_](https://en.wikipedia.org/wiki/Homeostasis).  This is the property of living things to try and maintain an equilibrium (for example, body temperature or blood glucose levels), but also applies to systems at any scale.  The key to homeostasis is to build systems with feedback loops, even though this leads to more complex systems overall. The diagram above shows some of the actions involved in these kind of feedback loops within IT operations. 

|Humans Are...                |Machines Are...              |
|-----------------------------|-----------------------------|
|Good at novel situations     |Good at repetitive situations|
|Good at adaptation           |Good at consistency          |
|Expensive at scale           |Cheap at scale               |
|Reacting and Anticipating    |Recording                    |

As we saw in [Map and Territory Risk](/tags/Map-And-Territory-Risk), it's very easy to fool yourself, especially around [Key Performance Indicators (KPIs)](https://en.wikipedia.org/wiki/Performance_indicator) and metrics. Large organisations have [Audit](https://en.wikipedia.org/wiki/Audit) functions precisely to guard against their own internal failing [processes](/tags/Process-Risk) and [Agency Risk](/tags/Agency-Risk).  Audits could be around software tools, processes, practices, quality and so on.  Practices such as [Continuous Improvement](https://en.wikipedia.org/wiki/Continual_improvement_process) and [Total Quality Management](https://en.wikipedia.org/wiki/Total_quality_management) also figure here.

### Scanning The Operational Context

There are plenty of [Hidden Risks](/tags/Hidden-Risk) within the operation's environment. These change all the time in response to economic, legal or political change.  In order to manage a risk, you have to uncover it, so part of [Operations Management](#operations-management) is to look for trouble.

- **Environmental Scanning** is all about trying to determine which changes in the environment are going to impact your operation.   Here we are trying to determine the level of [Dependency Risk](/tags/Dependency-Risk) we face for external dependencies, such as suppliers, customers, markets and regulation.  Tools like [PEST](https://en.wikipedia.org/wiki/PEST_analysis) are relevant, as is 
- **[Penetration Testing](https://en.wikipedia.org/wiki/Penetration_test)**: looking for security weaknesses within the operation.  See [OWASP](https://en.wikipedia.org/wiki/OWASP) for examples.
- **[Vulnerability Management](https://en.wikipedia.org/wiki/Vulnerability_management)** is about keeping up-to-date with vulnerabilities in [Software Dependencies](/tags/Software-Dependency-Risk).

## Planning

![Forecasting and Planning Actions](/img/generated/risks/operational/forecasting-planning.svg)

In order to _control_ an operation, we need targets and plans to _control against_.  For a system to run well, it needs to carefully manage unreliable dependencies, and ensure their safety and availability.  In the example of the humans, say, it's the difference between [Hunter-Gathering](https://en.wikipedia.org/wiki/Hunter-gatherer) (picking up food where we find it) and [Agriculture](https://en.wikipedia.org/wiki/Agriculture) (controlling the environment and the resources to grown crops).

As the diagram above shows, we can bring [Planning](#planning) to bear on dependency management, and this usually falls to the more human end of the operation.

## Design

![Design and Change Activities](/img/generated/risks/operational/design-change.svg)

Since our operation exists in a world of risks like [Red Queen Risk](/tags/Red-Queen-Risk) and [Feature Drift Risk](/tags/Feature-Drift-Risk), we would expect that the output of our [Planning](#planning) actions would result in changes to our operation.  

While _planning_ is a day-to-day operational feedback loop, _design_ is a longer feedback loop changing not just the parameters of the operation, but the operation itself.

You might think that for an IT operation, tasks like [Design](#design) belong within a separate "Development" function within an organisation.  Traditionally, this might have been the case.  However separating Development from Operations implies [Lock-In Risk](/tags/Lock-In-Risk) between these two functions.  For example, the developers might employ different tools, equipment and processes to the Operations team resulting in a mismatch when software is delivered.

In recent years the [DevOps](https://en.wikipedia.org/wiki/DevOps) movement has brought this [Lock-In Risk](/tags/Lock-In-Risk) into sharper focus.  This specifically means:
 
  - Using code to automate previously manual Operations functions, like monitoring and releasing.
  - Involving Operations in the planning and design, so that the delivered software is optimised for the environment it runs in.
  
## Improvement

No system can be perfect, and after it meets the real world, we will want to improve it over time.  But [Operational Risk](/tags/Operational-Risk) includes an element of [Trust & Belief Risk](/tags/Trust-And-Belief-Risk): we have a  _reputation_ and the good will of our customers to consider when we make improvements.  Because this is very hard to rebuild, we should consider this before releasing software that might not live up to expectations.    

So there is a tension between "you only get one chance to make a first impression" and "gilding the lily" (perfectionism).  In the past I've seen this stated as _pressure to ship vs pressure to improve_.

![Balance of Risks from Delivering Software](/img/generated/risks/operational/ship-it.svg)

A Risk-First re-framing of this (as shown in the diagram above) might be the balance between:

- The perceived [Scarcity Risks](/tags/Scarcity-Risk) (such as funding, time available, etc) of staying in development (pressure to ship).
- The perceived [Trust & Belief Risk](/tags/Trust-And-Belief-Risk), [Feature Fit  Risk](/tags/Feature-Fit-Risk) and [Operational Risk](/tags/Operational-Risk) of going to production (pressure to improve).

The "should we ship?" decision is therefore a complex one.  In [Meeting Reality](/thinking/Meeting-Reality), we discussed that it's better to do this "sooner, more frequently, in smaller chunks and with feedback".  We can meet [Operational Risk](/tags/Operational-Risk) _on our own terms_ by doing so: 

|Meet Reality...             |Techniques                                                            | 
|----------------------------|----------------------------------------------------------------------|
|**Sooner**                  |Beta Testing, Soft Launches, Business Continuity Testing              |
|**More Frequently**         |Continuous Delivery, Sprints                                          |
|**In Smaller Chunks**       |Modular Releases, Microservices, Feature Toggles, Trial Populations   |
|**With Feedback**           |User Communities, Support Groups, Monitoring, Logging, Analytics      |

<!--latex \pagebreak -->

## The End Of The Road

In a way, [actions](/tags/Take-Action) like [Design](/tags/Design) and [Development](/tags/Coding) bring us right back to where we started from: identifying [Dependency Risks](/tags/Dependency-Risk), [Feature Risks](/tags/Feature-Risks) and [Complexity Risks](/tags/Complexity-Risk) that hinder our operation, and mitigating them through actions like _software development_.  

Our safari of risk is finally complete: it's time to reflect on what we've seen in the next section, [Staging and Classifying](Staging-And-Classifying).  