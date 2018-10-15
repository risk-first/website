![Under Construction](images/state/uc.png)

In this section on [Operational Risks], we're going to start considering the realities of running software systems in the real world.  

Here, we're going to set the scene by looking at what constitutes an [Operational Risk](), and then look at the related disciplines of [Operations Management]() and [Operational Risk Management].  Following this background, we'll apply the Risk-First model and dive into the various mitigations for [Operational Risk]().  

## Operational Risks

It's tempting to take a very narrow view of the dependencies of a system, but [Operational Risks]() are often caused by dependencies we don't consider - the _context_ within which the system is operating.  Here are some examples:  

 - Staff Dependencies ([Staff Risk]()):  
   - Freak weather conditions affecting ability of staff to get to work, interrupting the development and support teams. 
   - Reputational damage caused when staff are rude to the customers.
 
 - Infrastructure Dependencies ([Availability Risk]()):  
   - A data-centre going off-line, causing your customers to lose access.
   - A power cut causing backups to fail.
   - Not having enough desks for everyone to sit at.
   
 - Process Dependencies ([Process Risk]()):
   - Regulatory change, which means you have to adapt your business model.
   - Insufficient controls which means you don't notice when some transactions are failing, leaving you out-of-pocket.
   - Data loss because of bugs introduced during an untested release.
 
 - Software Dependencies ([Software Dependency Risk]()):
   - Hackers breaking into the system and bringing your service down.
 
 - Agency Dependencies ([Agency Risk]()):
   - Suppliers deciding to stop supplying you with something you need.
   - Workers going on strike.
   - Employees trying to steal from the company (bad actors).

.. basically, a long laundry-list of everything that can go wrong due to operating in "The Real World".   

So, [Operational Risk Management]() is the purview of dealing with all the types of issues listed above:

> "Operational Risk Management is the oversight of Operational Risk, including the risk of loss resulting from inadequate or failed internal processes and systems; human factors; or external events." - [Operational Risk Management, _Wikipedia_](https://en.wikipedia.org/wiki/Operational_risk_management)

## Operations Management

If we are designing a software system to "live" in the real world, we have to be mindful of the environment we're working in, and adapt our software and processes accordingly.   This view of the "wider" system is the discipline of Operations Management.  The below diagram (from ["Operations Management" by _Slack et al._]()) breaks down some of the concerns of this discipline.

![A General Model of Operations Management](images/kite9/operations_management.png)

In this diagram, a **Transform Process** (the **Operation** itself) is embedded in the **Environment**, which supplies it with three key dependencies:
  
 - The **Resources** it needs, whether _transformed_ resources (like electricity or information, say).  
 - It's **Customers**, which supply it with money in return for goods and services, and 
 - An **Operational Strategy** to follow.
 
We have looked at processes like the **Transform Process** in the section on [Process Risk](Process-Risk).  The healthy function of this process is the domain of [Operations Management](), and in the diagram this involves the following tasks:

 - **Design**:  Ensuring that the design of the product and the transform process itself fulfils an **Operational Strategy**.
 - **Planning** and **Control**:  Ensuring that the Operation is working according to its design.  This covers aspects such as capacity planning, project planning and quality control.  
 - **Improvement**:  Improving the operation in response to changes in the **Environment** and the **Operational Strategy**, detecting failure and recovering from it.

## Mitigating Operational Risk

We've spent a lot of time looking at the varieties of [Dependency Risk](Dependency-Risk) on a software project.  But in the "real world" of [Operational Risk]() we have to consider that these dependencies will fail in any number of unusual ways, and we can't be ready for all of them.  

For this reason, the toolbox of mitigations for [Operatational Risk](Operational-Risk) is somewhat different to that for regular dependencies.  Here we're going to focus on four _basic strategies_, and show how they align with the activities described above.  

![Diagram of Four Strategies to Mitigate Operational Risk](images/generated/risks/operational/operational-risk.png)

As shown in this diagram, these are [Meeting Reality](Operational-Risk#meet-reality), [Monitoring & Detection](Operatational-Risk#monitoring-and-detection), [Design & Change](Operational-Risk#design-and-change) and [Forecasting & Planning](#forecasting-and-planning).

## Meeting Reality 

Once exposed to the real world, no system is perfect.  This means we must design-in ways in which the systems we build can improve and change.  Since we don't have a perfect understanding of the world, most of the [Operational Risk](Operational-Risk) we face is [Hidden Risks](Glossary#hidden-risk).  

![Taking action against Operational Risk by Meeting Reality](images/generated/risks/operational/meeting-reality.png)

### Reputational Risk

Our production systems are [Meeting Reality](Glossary#meet-reality) all the time, and in order to mitigate [Operational Risk](Operational-Risk) we need to take the most advantage of this as possible.  However, conversely, [Operational Risk](Operational-Risk) includes **Reputational Risk**, which gives us pause:  we don't want to destroy good will created for our organisation, this is very hard to rebuild.  

So there is a tension between "you only get one chance to make a first impression" and "gilding the lilly" (perfectionism).  In the past I've seen this stated as:

> "Pressure to ship vs pressure to improve"

A Risk-First reframing of this might be the balance between:

- The perceived Reputational Risk, [Feature Risk](Feature-Risk) and [Operational Risk](Operational-Risk) of going to production (pressure to improve).
- The perceived [Scarcity Risks](Scarcity-Risk) (such as funding, time available, etc) of staying in development (pressure to ship).

![Balance of Risks from Delivering Software](images/generated/risks/operational/ship-it.png)

The "should we ship?" decision is therefore a complex one.  In [Meeting Reality](Meeting-Reality), we discussed that it's better to do this "sooner, more frequently, in smaller chunks and with feedback".  We can meet [Operational Risk](Operational-Risk) _on our own terms_ by doing so: 

|Meet Reality...                   |Techniques                                             | 
|----------------------------------|-------------------------------------------------------|
|**Sooner**                        |Quality Control Processes, Limited Early-Access Programs, Beta Programs, Soft Launches, Business Continuity Testing    |
|**More Frequently**               |Continuous Delivery, Sprints                              |
|**In Smaller Chunks**             |Modular Releases, Microservices, Feature Toggles, Trial Populations   |
|**With Feedback**                 |User Communities, Support Groups, Monitoring, Logging, Analytics|

## Monitoring and Detection

[Monitoring & Detection](#monitoring-and-detection) is the second strategy for mitigating [Operational Risk](Operational-Risk), and in terms of practices, broadly corresponds to Slack's *Improvement* category, above.  

![Monitoring And Detection](images/generated/risks/operational/monitoring-detection.png)

### From Within

As we saw in [Map and Territory Risk](Map-and-Territory-Risk), it's very easy to fool yourself, especially around [Performance Indicators](https://en.wikipedia.org/wiki/Performance_indicator) and metrics.  Good [Operations Management](#operations-management) is about going beyond this and looking for trouble.  Large organisations have [Audit]() functions precisely to guard against their own internal failing [processes](Process-Risk) and [agency risk](Agency-Risk).  Audits could be around software tools, processes, practices, quality and so on.
Retrospectives?

TQM, quality.  Continuous improvement.

### From Without

- _Environmental Scanning_ is all about trying to determine which changes in the environment are going to impact your operation.   Here, we are trying to determine the level of [Dependency Risk](Dependency-Risk) we face for external dependencies, such as _suppliers_, _customers_ and _markets_.  Tools like [PEST](https://en.wikipedia.org/wiki/PEST_analysis) are relevant here, as is 
- [Penetration Testing](https://en.wikipedia.org/wiki/Penetration_test) is looking for security weaknesses within the operation.  See [OWASP](https://en.wikipedia.org/wiki/OWASP) for examples.
- [Vulnerability Management](https://en.wikipedia.org/wiki/Vulnerability_management) is keeping up-to-date with vulnerabilities in [Software Depenendencies](Software-Dependency-Risk).

### Reacting

Humans and machines have different areas of expertise, as shown in the below table.   Since [Operational Risks]() are often novel, it's often not optimal to try and automate everything. And a good operation will consist of a mix of human and machine characteristics.  Often, the "human" part of the Operation gets termed "support", and is responsible for dealing with all the outliers tbd/

|Humans Are...                |Machines Are...              |
|-----------------------------|-----------------------------|
|Good at novel situations     |Good at repetitive situations|
|Good at adaptation           |Good at consistency          |
|Expensive at scale           |Cheap at scale               |
|Reacting and Anticipating    |Recording                    |

Recording metrics and 

[Homeostasis](https://en.wikipedia.org/wiki/Homeostasis) is the property of living things to try and maintain an equilibrium (for example, body temperature or blood glucose levels).   

... do things that don't scale

(homeostasis)


### Performance Risk

Adding this in since we refer to it



## Forecasting and Planning

Dependencies are not just things we _use_:  For a system to run well, it needs to carefully manage unreliable dependencies, and ensure their safety and availability.  In the example of the humans, say, it's the difference between [Hunter-Gathering]() (picking up food where we find it) and [Farming]().

[Forecasting and Planning](#forecasting-and-planning) then is a strategy we can bring to bear on _Dependency Management_. 

![Forecasting and Planning Actions](images/generated/risks/operational/forecasting-planning.png).

## Design & Change

You might think that for an IT operation, tasks like **Planning** and **Design** and  belong within the Development function within an organisation.  But there is (and always has been) significant overlap because it's important that we design software that allows it to be managed effectively.  In recent years, the "DevOps" movement has brought this relationship into sharper focus.

![DevOps Activities:  Development and Operations activities overlap one-another (Credit: Kharnagy)](images/devops.png)

Since our operation exists in a world of [Red Queen Risk](Scarcity-Risk#red-queen-risk) and [Feature Drift](Feature-Risk#feature-drift), we would expect that the output of our [Forecasting and Planning](#forecasting-and-planning) activities would result in changes to our operation.  

![Design and Change Activities](images/generated/risks/operational/design-change.png)

In a way, we are now back to where we started from, identifying [Dependency Risk](Dependency-Risk), [Feature Risk](Feature-Risk) and [Complexity Risk](Complexity-Risk) that hinders our operation.


 