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

Dependencies are not just things we _use_, then:  For a system to run well, it needs to carefully manage unreliable dependencies, and ensure their safety and availability.  In the example of the human food system, say, it's the difference between [Hunter-Gathering]() (picking up food where we find it) and [Farming]().   So, [Operational Risk Management]() is the purview of dealing with all the types of issues listed above:

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
 - **Planning and Control**:  Ensuring that the Operation is working according to its design.  This covers aspects such as capacity planning, project planning and quality control.  
 - **Improvement**:  Improving the operation in response to changes in the **Environment** and the **Operational Strategy**, detecting failure and recovering from it.

You might think that for an IT operation, tasks like **Design** and **Planning** belong within the Development function within an organisation.  But there is (and always has been) significant overlap because it's important that we design software that allows it to be managed effectively.  In recent years, the "DevOps" movement has brought this relationship into sharper focus.

![DevOps Activities:  Development and Operations activities overlap one-another](images/devops.png)



![Mitigating Operational Risk Increases Complexity]()

## Mitigating Operational Risk

In the real world, [Dependencies]() can fail in any number of unusual ways.  For this reason, the toolbox of mitigations for [Operatational Risk]() is somewhat different to that for regular dependencies.  Here we're going to focus on four _basic strategies_:

![Diagram of Four Ways to Mitigate Operational Risk](images/kite9/operational_risk.png)







### Control 

(our system: meeting reality, deployment)
(event: detection)
(sensing / detection)
(reaction:  monitoring, etc)
(pestle, environmental scanning.)

So in this second model, we are now considering that the world is a dangerous, untrustworthy place where _bad things happen_, either deliberately or accidentally.  And, since we don't have a perfect understanding of the world, most of the [Production Risk]() we face is [Hidden Risks](Glossary#hidden-risk).  

Putting software into production is [Meeting Reality](Meeting-Reality) in the fullest way possible.  The more contact we can give our system with the outside world, the more [Hidden Risks](Glossary#hidden-risk) will materialize.  If we observe these and take action to mitigate them, then our system can get stronger.   cybernetics, antifragile tbd.

It is tempting to delay [Meeting Reality](Meeting-Reality) as long as possible, to "get your house in order".  There is a tension between "you only get one chance to make a first impression" and "gilding the lilly" (perfectionism).  In the past I've seen this stated as:

> Pressure to ship becomes greater than pressure to improve tbd

A Risk-First reframing of this might be the balance between:

- The perceived [Reputational Risk], [Feature Risk]() and [Operational Risk]() of going to production (pressure to improve)
- The perceived [Schedule Risks]() (such as funding, time available, etc) of staying in development (pressure to ship)

The "should we ship?" decision is therefore a complex one.  In [Meeting Reality](Meeting-Reality), we discussed that it's better to do this "sooner, more frequently, in smaller chunks and with feedback".  We can meet [Operational Risk]() on our own terms by doing so: 

|Meet Reality...                   |Techniques                                             | 
|----------------------------------|-------------------------------------------------------|
|**Sooner**                        |Limited Early-Access Programs, Beta Programs, Soft Launches    |
|**More Frequently**               |[Continuous Delivery], [Sprints]()                               |
|**In Smaller Chunks**             |[Modular Releases]() [Microservices]() [Feature Toggles]() Trial Populations   |
|**With Feedback**                 |User Communities, Support Groups, Monitoring, Logging, Analytics|

### Planning

(prediction: how to forecast failures)   / anticipation  -- operations strategy
(forecasting)
(adaptation: how the system changes in the future)
(trend analysis)

### Know Thyself

(practicing: e.g. testing failover etc.)
(weakness: minimization (see Security risk), penetration testing)
(effect:  what happens, how much chaos ensues)
(changing outside world)
(audit)

Security of supply

Complex systems (ones which contain multiple, interacting parts, like the ones in the above diagrams) have to contend with their external environments, and try to minimize the ways in which they get interrupted from outside either by _Bad Actors_ or external events.  In the tbd

Interestingly, security is handled in very similar ways at all sorts of levels:

- **Walls**: defences _around_ the complex system, to protect it's parts from the external environment.  
- **Doors**: ways to get _in_ and _out_ of the complex system, possibly with _locks_.
- **Guards**: to make sure only the right things go in and out.  (i.e. to try and keep out _Bad Actors_).
- **Police**: to defend from _within_ the system, against [Agency Risk]() and _invaders_.
- **Subterfuge**: Hiding, camouflage, disguises, pretending to be something else. tbd   

These work various levels in our own bodies:  our _cells_ have _cell walls_ around them, and _cell membranes_ that act as the guards to allow things in and out.  Our _bodies_ have _skin_ to keep the world out, and we have _mouths_, _eyes_, _pores_ and so on to allow things in and out.  We have an _immune system_ to act as the police.

Our societies work in similar ways: in medieval times, a city would have walls, guards and doors to keep out intruders.  Nowadays, we have customs control, borders and passports.

We're waking up to the realisation that our software systems need to work the same way:  we have [Firewalls]() to protect our organisations, we lock down _ports_ on servers to ensure there are the minimum number of doors to guard and we _police_ the servers ourselves with monitoring tools and anti-virus software.  

    - Security Risk
      - Hacking
      - Denial Of Service
      - Security, Trust and Complexity 
      - oWASp
      
tbd, How much do compilers do for you?   Now, they prevent many kinds of security error.  Libraries too.  

      
      


### Reaction

(review)
(recovery)
(processes and procedures)
(planning change)
(homeostasis)


https://en.wikipedia.org/wiki/Life#Biology


These are properties not only of software systems, but biological systems, and businesses too.  Let's now take each in turn and inspect it further.


Therefore, one of the best defences against [Operational Risk]() is dealing with the issues quickly once they happen.  This requires:

Good [Feedback Loops]() in the form of [Monitoring](Monitoring) 
and rapid response to issues.

tbd, talk with John about this

## Meeting Reality


## External Events

We're familiar with the concept of taking steps on the [Risk Landscape], wherein we [take action]() to move to a position where the [Attendant Risks](Glossary#attendant-risk) are more acceptable to us.  However, now we have to contend with the idea that external events _also_ change the risk landscape too.  If there is sudden bad weather, we might have a risk of a power-cut, and the losses that might entail to productivity or sales.   If there is a change of government, that might impact the contracts we've written, or the security of our servers or staff.

Being _in production_ is accepting that the [Risk Landscape]() is a volatile, uncaring place.  But it's worse than that, since we also have to contend with [Bad Actors], who are deliberately out to exploit weaknesses in the systems we build.

Ordinarily, when we transact with a [Dependency], it should be the case that after the transaction, there is value on both sides of the transaction.  This could be, _you do my accounting_, I pay you money.  On both sides, financial risks are reduced.  If the price is too high, or too low, we see one or other side getting the better deal, and _capturing an unfair share of the value_. 

With a [Bad Actor], we're in a situation more like a zero-sum game:  value is _taken_ from one party and _transferred_ to the other.  These are exactly the dependency relationships that societies _don't_ condone: there is net _zero_ or _negative_ value in the transaction.

[In this diagram, B does a deal with A, the value of the product B gets from A is always 4, but the price varies with the X axis.  When the price is zero, B captures all the value, but as the price increases, it becomes a worse and worse deal for B, and the net value heads towards zero or negative.](images/deal.png)


- Regulatory Risk  Legal Risk  (Pestle?)


   

tbd.  diagram version 3.

Mitigating [Security Risk]() is a trade-off.  You can spent _a lot_ of time and effort on this, only to never face the


secrets:  how to mitigate this

## Effect / Impact

Sometimes, it's possible to measure the impact of Operational Risks.  For example, if a software system fails, and leaves customers unable to access it, this can have a measurable financial impact in lost revenues or damages.   Car recall example tbd. - fight club  

Impact is usually proportional to some of the below variables:

 - Number of customers affected.
 - Number of transactions affected.
 - Size of the transactions
 - Length of time systems were affected.

stuff that can go wrong in production

changing stuff in production is harder than changing it in test, as you have to _migrate_.

all the costs of breaking stuff, and damaging the running of the business.

reputation damage
(you only get one chance to make a first impression)

 - You don't know all the ways the software will get used in production.
 - Different browsers, versions of code, accessiblilty.


- CAn you support all the users?  IS there enough kit?  WIll you know?

Correlation
	- Upgrades ( tell story of Research upgrade that went wrong because we were upgrading at the same time as an outage)
      - Single points of failure.

## reputational risk

Adding this in since we refer to it


## Performance Risk

Adding this in since we refer to it


 