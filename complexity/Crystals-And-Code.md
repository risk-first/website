---
title: Crystals And Code
description: Looking at the similarities between our information systems, and crystals
url: https://riskfirst.org/complexity/Crystals-And-Code

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/crystal.svg">Crystals And Code</image-artifact>'
categories:
 - Complexity
order: 2
---

# Crystals And Code

In this article, we're going to look at how **Information Systems** (IS's) are like **Crystals**:  strong, rigid efficient, but prone to _defects_ and _flaws_.  

IS's are super-useful for _hardening and regularising processes_ so that they follow standards, run more quickly, cheaply and smoothly and take expensive, error-prone humans out-of-the-loop.  _The downside_ is that IS's are fragile in the face of change.  Just like a crystal they display strength and rigidity over flexibility.

Here, we're going to explore the shared (and somewhat idealized) life-cycles of crystals and IS's, and draw some conclusions along the way.

![Crystal Stages](/images/generated/complexity/cycle.png)

## Stage 1: Chaos

Before crystals can grow, the conditions have to be right.  In turbulent, changing environments, large crystals can't grow (just think of a slush machine, continually churning the drink to keep it from turning into a block of ice).  

![Slush Machines](/images/complexity/slush.jpg)

_Slush Machines_

The same is true of an IS - it's only once things settle down that patterns of behaviour appear and we can start to build abstractions to automate and control them.  The more consistent and predictable a process is, the easier it will be to create a successful IS for it.

Most IS's start small, and grow from there (eBay started with a single niche market, Facebook started with just students at Harvard).   They have to demonstrate usefulness at _every scale_.   

What properties of IS's are like the _regularity_ we see in crystals?  How about things like:

 - **Managed Data**, with clear, consistent, interacting data-types.  In distributed systems, there will be a policy on [CAP](../risks/Coordination-Risk.md#CAP-Theorem).  There is likely to be a high degree of data **Normalization** and a **well-Factored** design.
 - **ACID** properties, such as Atomicity, Consistency, Isolation, Durability of transactions.
 - **SLAs**:  Response times, ownership, procedures, and other _non-functional requirements_ that are clearly defined.
 - **Support Teams and Knowledge Bases**: there are procedures in place for _understanding and using_ IS's.
 - **Roadmaps and Plans**:  development and growth are _ordered_ and _directed_ as opposed to _chaotic_ and _random_.
 
When we see quotes like:

> "**etcd** is a strongly consistent, distributed key-value store that provides a reliable way to store data that needs to be accessed by a distributed system or cluster of machines. It gracefully handles leader elections during network partitions and can tolerate machine failure, even in the leader node.  " -[Etcd Home Page, _Etcd_](https://etcd.io)

We're talking about an example of a well-thought-through, consistent, carefully-designed IS, because it has _opinions_ about all of those properties... as opposed to the wider organisation they exist in, where none of these things really exist.

## Stage 2:  Growth

Did you know that jet-engine blades are actually single crystals of metal?  

![Turbine Blade, From Wikipedia](https://upload.wikimedia.org/wikipedia/commons/f/f9/Turbinenschaufel_RB199.jpg)

_Turbine Blade, From Wikipedia_

Engineers at Pratt and Whitney perfected this technique because without it, the blades are prone to snapping, along the lines of [Crystallographic defects](https://en.wikipedia.org/wiki/Crystallographic_defect). 

However, in less controlled environments, crystals grow with defects baked into them, caused by smaller crystals merging together, or changing conditions perturbing their creation.

![Red Garnet Embedded Within A Diamond](https://upload.wikimedia.org/wikipedia/commons/1/1b/Garnet_inclusion_in_diamond.jpg)

_Garnet inclusion within a diamond - Wikipedia_

IS's usually don't grow in isolation either:  as they grow in complexity and usefulness, their responsibilities and coverage begin to overlap with each other and it eventually becomes important that data is shared between them.  The problem is that because the systems have started in isolation, they contain different local [conceptual hierarchies](Hierarchies.md). The users of those systems also think in terms of these conceptual hierarchies.  For example, one system might have the concept of "Client", whilst another has the concept of "Legal Entity".  Are they the same?  Probably not.

In the growth stage, users will be forced to "live with" the incompatibility of the two (or more) systems, and the knowledge that the data in each of them is different, there may be gaps, and potentially contradictions.

## Stage 3:  Competition

Many of the crystals we extract from the earth are flawed with defects, because of the way they have grown.  In the same way, with IS's we have to make hard decisions about how to deal with these flaws:

### Option 1: Live With Them

We could simply "live with" the differences between IS's.   This means accepting different, contradictory views of reality, and usually a lot of copy-pasting of data from one system to the next.

Sometimes, this means hiring people who's job it is simply to _reconcile the differences manually_ between large, incompatible IS's.

### Option 2: Refactor

In Software Development, within a single code-base if we come across competing abstractions we can decide to _refactor_.  An example of which might be identifying the competing abstractions used in different areas of a code-base, and merging the functionality of both, keeping just one "winner".

If you have type-checking and a decent suite of automated tests then refactoring can be pretty cheap.  But how about refactoring _an entire organisation_?

This is not so easy.  Making any _mutative_ change on a large organisation can be unwieldy:

|Code Base                         |Whole Organisation                         |
|----------------------------------|-------------------------------------------|
|Type Checking / Compilation       |Dry-Runs                                   |
|Automated Test Cases              |Small-Scale Roll-Outs                      |
|Test Environments                 |Only One Organisation                      |
|A Few Developers                  |Potentially thousands of users and clients |

The _larger_ the scope of the change you're making the _more risky_ refactoring becomes.  

### Option 3: Feeds & Golden Sources

Option 3 applies where you can't refactor to a single system.  Instead, you can try and resolve the discontinuities by papering over them with automated feeds.  

One of the IS's is designated the "Golden Source", or master.  Any change that occurs in the world is recorded in that system.  Those changes are _fed_ to the other systems on some regular basis, perhaps using a message bus, or some kind of regular file-transfer. 

There are four basic problems with this approach:

1.  **There is still no "Conceptual Integrity" between the two systems.**  The concept of "Legal Entity" and "Client" might have to be bent in each system in order for the data to flow.  This might be resolved by having a "Legal Entity" record for each client, even though perhaps several clients belong to the same Legal Entity.

2.  **The information required by the two systems might differ.**  For example, one system might contain the client's addresses.  The other might require information about legal agreements.  If one system ends up feeding the other, then somehow, fields needed by the "downstream" system will need to be added to the "upstream" one, or, you have some situation where _some_ fields are maintained in the downstream system, and some in the upstream system.   

3.  **Reconciliation becomes a thing.**  Since you are effectively creating copies of the same information in multiple systems, you now need to check that all of the different copies _are the same_.  This usually involves creating a _fourth_ system, that checks the results and arbitrates on the other two.  

![Feed and Reconciliation](/images/generated/complexity/feed.png)

So, you've gone from two incompatible systems to four points of failure: the two original systems, the feed, and the thing that checks the feed.  


## Stage 4: Destruction

Crystals can only exist when the conditions are right: everything has a life-span.  Diamonds _aren't_ forever, and IS's even less so, since the competitive landscape on which they exist is violently evolving all the time.  How does an IS deal with change?  There are two basic ways:

### Growing The Crystal

Perhaps you can "grow" the IS (defects and all) in the direction required by the new functionality.  This is great if the new functionality is _somewhat adjacent_ to something it already does, but does nothing to fix any defects that are already established.   

### Seeding A New Crystal

This means setting up a new team somewhere who are allowed to "iterate rapidly" building something new without the weight of history and existing defects slowing them down.  As in Stage 2, eventually, if this team are successful, there will be new defects to resolve, between the new and the old systems.  

Defects in the crystalline structure are effectively another way to envisage [Technical Debt](../risks/Complexity-Risk.md#technical-debt).

## Diamonds Aren't Forever

What are the take-aways from this article?

- **Order Is Expensive**.  Maintaining order within an IS is a battle against the [Second Law Of Thermodynamics](https://en.wikipedia.org/wiki/Second_law_of_thermodynamics).  i.e. Without perpetual vigilance everything turns to crap.

- **We're stuck with flawed IS's.**  Because of the way we build organisations, there will always be flaws along IS boundaries.  The faster the rate of change, the worse this will be.  Trying to construct a "flawless" organisation is going to prevent you from handling change in the future.

- **We need to manage the flaws.** There are a few ways of dealing with the flaws - refactoring, living with them and feeds.  But it's perhaps best not to strive for perfection because...

- **Destruction is just around the corner.** Change is coming, and your IS will break when it does.  So ill-matched, flawed IS's are here to stay.  They're a natural consequence of the fact that we live in a world where consistency is expensive, and change is constant. 

In the next article, we're going to look more closely at the [towers of abstraction](Towers-Of-Abstraction.md) we use to build our crystal castles.