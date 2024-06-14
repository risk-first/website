
## Mitigations

Here are a selection of mitigations for [Scarcity Risk](Scarcity-Risk.md) in general:

 - **Buffers**: smoothing out peaks and troughs in utilisation.
 - **Reservation Systems**: giving clients information _ahead_ of the dependency usage about whether the resource will be available to them.
 - **Graceful degradation**: ensuring _some_ service in the event of over-subscription.  It would be no use allowing people to cram onto the bus until it can't move.
 - **Demand Management**:  having different prices during busy periods helps to reduce demand.  Having "first class" seats means that higher-paying clients can get service even when the train is full. <!-- markdown-link-check-disable --> [Uber](https://www.uber.com) adjust prices in real-time by so-called [Surge Pricing](https://www.uber.com/en-GB/drive/partner-app/how-surge-works/).  This is basically turning [Scarcity Risk](Scarcity-Risk.md) into a [Market Risk](Feature-Risk.md#market-risk) problem. <!-- markdown-link-check-enable -->
 - **Queues**: these provide a "fair" way of dealing with scarcity by exposing some mechanism for prioritising use of the resource.  Buses operate a first-come-first-served system, whereas emergency departments in hospitals triage according to need.
 - **Pools**: reserving parts of a resource for a group of customers, and sharing within that group.
 - **Horizontal Scaling**: allowing a scarce resource to flexibly scale according to how much demand there is.   (For example, putting on extra buses when the trains are on strike, or opening extra check-outs at the supermarket.)
 
Much like [Reliability Risk](Dependency-Risk.md#reliability-risk), there is science for it:

 - **[Queue Theory](https://en.wikipedia.org/wiki/Queueing_theory)** is all about building mathematical models of buffers, queues, pools and so forth.
 - **[Logistics](https://en.wikipedia.org/wiki/Logistics)** is the practical organisation of the flows of materials and goods around things like [Supply Chains](https://en.wikipedia.org/wiki/Supply_chain),
 - and **[Project Management](https://en.wikipedia.org/wiki/Project_management)** is in large part about ensuring the right resources are available at the right times.  
 
In this section, we've looked at various risks to do with scarcity of time, as a quantity we can spend like money.  But frequently, we have a dependency on a specific _event_.  On to [Deadline Risk](Deadline-Risk.md).