---
title: Complexity Risk
description: Risks caused by the weight of complexity in the systems we create, and their resistance to change and comprehension.
url: https://riskfirst.org/risks/Complexity-Risk

featured: 
  class: bg2
  element: '<risk class="complexity" />'
order: 4
categories:
 - Risks
redirect_from: 
 - /Complexity-Risk
---

# Complexity Risk

[Complexity Risk](Complexity-Risk.md) is the [risk](../thinking/Glossary.md#risk) to your project due to its underlying "complexity". <!-- tweet-end --> This section will break down exactly what we mean by complexity, and where it can hide on a software project, and look at some ways in which we can manage this important risk.

## Codebase Risk

We're going to start by looking at _code you write_: the size of your code-base, the amount of code, the number of modules, the interconnectedness of the modules and how well-factored the code is.  

![Complexity Risk and Codebase Risk](/images/generated/risks/complexity/complexity-risk.png)

You could think of this as  [Codebase Risk](Complexity-Risk.md#codebase-risk), being a specific type of [Complexity Risk](Complexity-Risk.md).  We'll look at two measures of codebase complexity before talking about [Technical Debt](Complexity-Risk.md#technical-debt) and [Feature Creep](#feature-creep).

## Kolmogorov Complexity

The standard Computer-Science definition of complexity is [Kolmogorov Complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity).  This is:

>  "...the length of the shortest computer program (in a predetermined programming language) that produces the object as output." - [Kolmogorov Complexity, Wikipedia](https://en.wikipedia.org/wiki/Kolmogorov_complexity)

This is a fairly handy definition for us as it means that in writing software to solve a problem there is a lower bound on the size of the software we write.  While in practice this is pretty much impossible to quantify, that doesn't really matter:  here I want to focus on the techniques for _moving towards that minimum_.

Let's say we wanted to write a JavaScript program to output this string:

```javascript
abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd
```

We might choose this representation:

```javascript
 
function out() {                                      (7 )
    return "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd" (45)
}                                                     (1 )
```

The numbers in brackets indicate how many symbols each line contains.  In total, this code block contains **53 symbols** if you count `function`, `out` and `return` as one symbol each.

But, if we write it like this:

```javascript
const ABCD="ABCD";                                    (11)

function out() {                                      (7 )
    return ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+        (16)
        ABCD+ABCD+ABCD;                               (6 )
}                                                     (1 )
```

With this version, we now have **41 symbols** (`ABCD` is a single symbol - it's just a name).  And with this version:

```javascript
const ABCD="ABCD";                                    (11)

function out() {                                      (7 )
    return ABCD.repeat(10)                            (7 )
}                                                     (1 )
```

... we have **26 symbols**.  

### Abstraction

What's happening here is that we're _exploiting a pattern_: we noticed that `abcd` occurs several times, so we defined it a single time and then used it over and over, like a stamp.  This is called [abstraction](../thinking/Glossary.md#abstraction).

By applying abstraction, we can improve in the direction of the Kolmogorov lower bound.  By allowing ourselves to say that _symbols_ (like `out` and `ABCD`) are worth one complexity point, we've allowed that we can be descriptive in naming `function` and `const`.  Naming things is an important part of abstraction, because to use something, you have to be able to refer to it.

### Trade-Off

Generally, the more complex a piece of software is, the more difficulty users will have [understanding it](Feature-Risk.md#conceptual-integrity-risk), and the more work developers will have changing it.  We should prefer the third version of our code over either the first or second because of its brevity.

But we could go further down into [Code Golf](https://en.wikipedia.org/wiki/Code_golf) territory.  The following javascript program plays [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) up to 100, but is less readable than you might hope.

```javascript
for(i=0;i<100;)document.write(((++i%3?'':'Fizz')+     
(i%5?'':'Buzz')||i)+"<br>")                           (62)
```

So there is at some point a trade-off to be made between [Complexity Risk](Complexity-Risk.md) and [Communication Risk](Communication-Risk.md). That is, after a certain point, reducing Kolmogorov Complexity further risks making the program less intelligible. 

## Connectivity

A second, useful measure of complexity comes from graph theory, and that is the connectivity of a graph:

> "...the minimum number of elements (nodes or edges) that need to be removed to disconnect the remaining nodes from each other" - [Connectivity, _Wikipedia_](https://en.wikipedia.org/wiki/Connectivity_(graph_theory))

![Graph 1, 2-Connected](/images/generated/risks/complexity/connectivity_1.png)

To see this in action, have a look at the graph above.  It has 10 vertices, labelled **a** to **j**, and it has 15 edges (or links) connecting the vertices together.  If any single edge were removed from the diagram above, the 10 vertices would still be linked together.   Because of this, we can say that the graph is _2-connected_.   That is, to disconnect any single vertex, you'd have to remove _at least_ two edges.

As a slight aside, let's consider the **Kolmogorov Complexity** of this graph, by inventing a mini-language to describe graphs.  It could look something like this:

```javascript
<item> : [<item>,]* <item>    # Indicates that the item 
                              # before the colon 
                              # has a connection to all 
                              # the items after the colon
```

So our graph could be defined like this:                              
                             
```javascript                              
a: b,c,d
b: c,f,e
c: f,d
d: j
e: h,j
f: h
g: j
h: i
i: j                                                  
                                                      (39)
```

![Graph 2, 1-Connected](/images/generated/risks/complexity/connectivity_2.png)

In the graph above, I've removed 6 of the edges.  Now, we're in a situation where if any single edge is removed, the graph becomes _unconnected_.  That is, it's broken into distinct chunks.  So, it is _1-connected_.  

The second graph is clearly simpler than the first.  And, we can show this by looking at the **Kolmogorov Complexity** in our little language:

```javascript
a: d,g
b: f
c: d,f
d: j
f: h
e: h
h: i                                                  
                                                      (25)
```

For defining our graphs, **Connectivity** is also **Complexity**.  And this carries over into software too:  heavily connected code is more complex than less-connected code.   It's also harder to reason about and work with because changing one module potentially impacts many others.  Let's dig into this further.

## Hierarchies and Modularisation

In the graph above, I've arranged it as a hierarchy which I can do trivially now that it's only 1-connected.  For 10 vertices, we need 9 edges to connect everything up.  It's always:

```javascript
  edges = vertices - 1
```

Note that I could pick any hierarchy here:  I don't have to start at **c** (although it has the nice property that it has two roughly even sub-trees attached to it).

How does this help us?   Imagine if **a** - **j** were modules of a software system, and the edges of the graph showed communications between the different sub-systems.  In the first graph, we're in a worse position:  

 - Who's in charge?  What deals with what?  
 - Can I isolate a component and change it safely?  
 - What happens if one component disappears?  
 
But, in the second graph, it's easier to reason about, because of the reduced number of connections and the new hierarchy of organisation.  

On the down-side, perhaps our messages have farther to go now:  in the original, **i** could send a message straight to **j**, but now we have to go all the way via **c**.   But this is the basis of [Modularisation](https://en.wikipedia.org/wiki/Modular_programming) and [Hierarchy](https://en.wikipedia.org/wiki/Hierarchy).

As a tool to battle complexity, we don't just see this in software, but everywhere in our lives:  societies, business, and living organisms.  For example in our bodies we have:
  
 - **Organelles** - such as [Mitochondria](https://en.wikipedia.org/wiki/Mitochondrion), contained in...
 - **Cells** - such as blood cells, nerve cells, skin cells in the [Human Body](https://en.wikipedia.org/wiki/List_of_distinct_cell_types_in_the_adult_human_body), inside...
 - **Organs** - like hearts livers, brains etc, held within...
 - **Organisms** - like you and me.
 
The great complexity-reducing mechanism of modularisation is that _you only have to consider your local environment_.  

So, we've looked at some measures of software structure complexity.  We can say "this is more complex than this" for a given piece of code or structure.  We've also looked at two ways to manage it:  [Abstraction](../thinking/Glossary.md#abstraction) and [Modularisation](#Hierarchies-and-Modularisation).  However, we've not really said why complexity entails [Risk](../thinking/Glossary.md#Attendant-Risk).  So let's address that now by looking at two analogies, [Mass](Complexity-Risk.md#Complexity-is-mass) and [Technical Debt](Complexity-Risk.md#technical-debt).  

## Complexity is Mass

The first way to look at complexity is as **Mass** :  a software project with more complexity has greater mass than one with less complexity. <!-- tweet-end --> Newton's Second Law states:

> F = _m_**a**,    ( Force = Mass x Acceleration )

That is, in order to move your project _somewhere new_, and make it do new things, you need to give it a push, and the more mass it has, the more **Force** you'll need to move (accelerate) it.  

You could stop here and say that the more lines of code a project contains, the greater its mass.  And, that makes sense, because in order to get it to do something new, you're likely to need to change more lines.  

But there is actually some underlying sense in which this is true in the real, physical world too, as discussed in a [Veritasium](https://www.youtube.com/user/1veritasium) video.  To paraphrase:

> "Most of your mass you owe due to <!--replace $E=mc^2$ -->E=mc²<!--endreplace -->, you owe to the fact that your mass is packed with energy because of the **interactions** between these quarks and gluon fluctuations in the gluon field... what we think of as ordinarily empty space... that turns out to be the thing that gives us most of our mass." - [Your Mass is NOT From the Higgs Boson, _Veritasium_](https://www.youtube.com/watch?annotation_id=annotation_3771848421&feature=iv&src_vid=Xo232kyTsO0&v=Ztc6QPNUqls)

I'm not an expert in physics _at all_, and so there is every chance that I am pushing this analogy too hard.  But, by substituting quarks and gluons for pieces of software we can (in a very handwaving-y way) say that more connected software has more **interactions** going on, and therefore has more mass than simple software. 

If we want to move _fast_ we need simple codebases. <!-- tweet-end -->

At a basic level, [Complexity Risk](Complexity-Risk.md) heavily impacts on [Schedule Risk](Scarcity-Risk.md#schedule-risk):  more complexity means you need more force to get things done, which takes longer.

## Technical Debt

The most common way we talk about [Complexity Risk](Complexity-Risk.md) in software is as [Technical Debt](Complexity-Risk.md#technical-debt):

> "Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite... The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organisations can be brought to a stand-still under the debt load of an unconsolidated implementation, object-oriented or otherwise." - [Ward Cunningham, 1992, _Wikipedia, Technical Debt_](https://en.wikipedia.org/wiki/Technical_debt)

Building a low-complexity first-time solution is often a waste:  in the first version, we're usually interested in reducing [Feature Risk](Feature-Risk.md) as fast as possible. That is, putting working software in front of users to get [feedback](../thinking/Meeting-Reality.md).  We would rather carry [Complexity Risk](Complexity-Risk.md) than take on more attendant [Schedule Risk](Scarcity-Risk.md#schedule-risk).

So a quick-and-dirty, over-complex implementation mitigates the same [Feature Risk](Feature-Risk.md) and allows you to [Meet Reality](../thinking/Meeting-Reality.md) faster.  

![Complexity Risk and some mitigations](/images/generated/risks/complexity/complexity-risk2.png)

But having mitigated the [Feature Risk](Feature-Risk.md) this way, you are likely exposed to more [Complexity Risk](Complexity-Risk.md) than you necessarily need.  As the above diagram shows, one of the ways to mitigate [Complexity Risk](Complexity-Risk.md) is by [Refactoring](https://en.wikipedia.org/wiki/Code_refactoring) the software, which means using the tools of abstraction and modularisation. 

## Kitchen Analogy

It’s often hard to make the case for minimising [Technical Debt](Complexity-Risk.md#technical-debt): it often feels that there are more important priorities, especially when technical debt can be “swept under the carpet” and forgotten about until later.  (See [Discounting](../thinking/Evaluating-Risk.md#discounting-the-future-to-zero).)

One helpful analogy I have found is to imagine your code-base is a kitchen.   After preparing a meal (i.e. delivering the first implementation), _you need to tidy up the kitchen_.  This is just something everyone does as a matter of _basic sanitation_. <!-- tweet-end -->

Now of course, you could carry on with the messy kitchen.  When tomorrow comes and you need to make another meal, you find yourself needing to wash up saucepans as you go, or working around the mess by using different surfaces to chop on.  

It's not long before someone comes down with food poisoning.   

![Complexity Risk and its implications](/images/generated/risks/complexity/complexity-risk-impact.png)

We wouldn't tolerate this behaviour in a restaurant kitchen, so why put up with it in a software project?  This state-of-affairs is illustrated in the above diagram: [Complexity Risk](Complexity-Risk.md) can be a cause of [Operational Risks](Operational-Risk.md) and [Security Risks](Agency-Risk.md#security).

## Feature Creep

In Brooks' essay "No Silver Bullet - Essence and Accident in Software Engineering", a distinction is made between:

> - **Essence**:  _the difficulties inherent in the nature of the software._
> - **Accident**: _those difficulties that attend its production but are not inherent._   - [ Fred Brooks, _No Silver Bullet_](https://en.wikipedia.org/wiki/No_Silver_Bullet)

The problem with this definition is that we are accepting features of our software as _essential_.  

Applying Risk-First, if you want to mitigate some [Feature Risk](Feature-Risk.md) then you have to pick up [Complexity Risk](Complexity-Risk.md) as a result.  But, that's a _choice you get to make_.  

![Mitigating Feature Fit Risk (from Feature Risk)](/images/generated/risks/feature/feature-fit-risk.png)

Therefore, [Feature Creep](https://en.wikipedia.org/wiki/Feature_creep) (or [Gold Plating](https://en.wikipedia.org/wiki/Gold_plating_(software_engineering))) is a failure to observe this basic equation:  instead of considering this trade off, you're building _every feature possible_.  This will impact on [Complexity Risk](Complexity-Risk.md).

Sometimes, feature-creep happens because either managers feel they need to keep their staff busy, or the staff decide on their own that they need to [keep themselves busy](Agency-Risk.md).  This is something we'll return to in [Agency Risk](Agency-Risk.md).

## Dead-End Risk

![Dead-End Risk](/images/generated/risks/complexity/dead-end-risk.png) 

[Dead-End Risk](Complexity-Risk.md#dead-end-risk) is where you take an action that you _think_ is useful, only to find out later that actually it was a dead-end and your efforts were wasted.  Here, we'll see that [Complexity Risk](Complexity-Risk.md) is a big cause of this (as the above diagram shows).

For example, imagine a complex software system composed of many sub-systems.  Let's say that the Accounting sub-system needed password protection (so you built this).  Then the team realised that you needed a way to _change the password_ (so you built that).   Then, you needed to have more than one user of the Accounting system so they would all need passwords (OK, fine).  

Finally, the team realises that actually authentication would be something that all the sub-systems would need, and that it had already been implemented more thoroughly by the Approvals sub-system.   

At this point, you realise you're in a **Dead End**:
  
 - **Option 1: Continue.** You carry on making minor incremental improvements to the accounting authentication system (carrying the extra [Complexity Risk](Complexity-Risk.md) of the duplicated functionality).
 - **Option 2: Merge.** You rip out the accounting authentication system and merge in the Approvals authentication system, consuming lots of development time in the process, due to the difficulty in migrating users from the old to new way of working.  There is [Implementation Risk](Feature-Risk.md#implementation-risk) here.
 - **Option 3: Remove.** You start again, trying to take into account both sets of requirements at the same time, again, possibly surfacing new hidden [Complexity Risk](Complexity-Risk.md) due to the combined approach.  Rewriting code can _seem_ like a way to mitigate [Complexity Risk](Complexity-Risk.md) but it usually doesn't work out too well.  As Joel Spolsky says:

> There’s a subtle reason that programmers always want to throw away the code and start over. The reason is that they think the old code is a mess. And here is the interesting observation: they are probably wrong. The reason that they think the old code is a mess is because of a cardinal, fundamental law of programming:  _It’s harder to read code than to write it._    - [Things You Should Never Do, Part 1, _Joel Spolsky_](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/)

Whichever option you choose, this is a [Dead End](#dead-end-risk) because with hindsight, it would probably have been better to do authentication in a common way _once_.  But it's hard to see these dead-ends up-front because of the complexity of the system in front of you.
 
Sometimes, the path across the [Risk Landscape](Risk-Landscape.md) will take you to dead ends, and the only benefit to be gained is experience.  No one deliberately chooses a dead end - often you can take an action that doesn't pay off, but frequently the dead end appears from nowhere:  it's a [Hidden Risk](../thinking/Glossary.md#hidden-risk).  The source of a lot of this hidden risk is the complexity of the [risk landscape](../thinking/Glossary.md#risk-landscape).

[Version Control Systems](https://en.wikipedia.org/wiki/Version_control) like [Git](https://en.wikipedia.org/wiki/Git) are a useful mitigation of [Dead-End Risk](Complexity-Risk.md#dead-end-risk), because using them means that at least you can _go back_ to the point where you made the bad decision and go a different way.  Additionally, they provide you with backups against the often inadvertent [Dead-End Risk](Complexity-Risk.md#dead-end-risk) of someone wiping the hard-disk.

## Where Complexity Hides

So far, we've focused mainly on [Codebase Risk](Complexity-Risk.md#codebase-risk), but this isn't the only place complexity appears in software.  We're going to cover a few of these areas now, but be warned, this is not a complete list by any means:

 - Algorithmic (Space and Time) Complexity
 - Memory Management
 - Protocols / Types
 - Concurrency / Mutability
 - Networks / Security
 - The Environment
 
### Space and Time Complexity

There is a whole branch of complexity theory devoted to how the software _runs_, namely [Big O Complexity](https://en.wikipedia.org/wiki/Big_O_notation).  

Once running, an algorithm or data structure will consume space or runtime dependent on its performance characteristics, which may well have an impact on the [Operational Risk](Operational-Risk.md) of the software.  Using off-the-shelf data structures and algorithms helps, but you still need to know their performance characteristics. 

The [Big O Cheat Sheet](http://bigocheatsheet.com) is a wonderful resource to investigate this further.  

### Memory Management

Memory Management (and more generally, all resource management in software) is another place where [Complexity Risk](Complexity-Risk.md) hides:

> "Memory leaks are a common error in programming, especially when using languages that have no built in automatic garbage collection, such as C and C++." - [Memory Leak, _Wikipedia_](https://en.wikipedia.org/wiki/Memory_leak)

[Garbage Collectors](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) (as found in Javascript or Java) offer you the deal that they will mitigate the [Complexity Risk](Complexity-Risk.md) of you having to manage your own memory, but in return perhaps give you fewer guarantees about the _performance_ of your software.  Again, there are times when you can't accommodate this [Operational Risk](Operational-Risk.md), but these are rare and usually only affect a small portion of an entire software-system.  
 
### Protocols And Types

As we saw in [Communication Risk](Communication-Risk.md), whenever two components of a software system need to interact, they have to establish a protocol for doing so.  As systems become more complex, and the connectedness increases, it becomes harder to manage the risk around versioning protocols.  This becomes especially true when operating beyond the edge of the compiler's domain. 

Although type-checking helps mitigate [Protocol Risk](Communication-Risk.md#protocol-risk), when software systems grow large it becomes hard to communicate intent and keep connectivity low.  You  can end up with "The Big Ball Of Mud":

> "A big ball of mud is a software system that lacks a perceivable architecture. Although undesirable from a software engineering point of view, such systems are common in practice due to business pressures, developer turnover and code entropy. " - [Big Ball Of Mud, _Wikipedia_](https://en.wikipedia.org/wiki/Big_ball_of_mud)

### Concurrency / Mutability

Although modern languages include plenty of concurrency primitives (such as the [java.util.concurrent](https://docs.oracle.com/javase/9/docs/api/java/util/concurrent/package-summary.html) libraries), concurrency is _still_ hard to get right.  

[Race conditions](https://en.wikipedia.org/wiki/Race_condition) and [Deadlocks](https://en.wikipedia.org/wiki/Deadlock) abound in over-complicated concurrency designs:  complexity issues are magnified by concurrency concerns, and are also hard to test and debug.  

Recently, languages such as [Clojure](https://clojure.org) have introduced [persistent collections](https://en.wikipedia.org/wiki/Persistent_data_structure) to alleviate concurrency issues.  The basic premise is that any time you want to _change_ the contents of a collection, you get given back a _new collection_.  So, any collection instance is immutable once created.  The trade-off is again speed to mitigate [Complexity Risk](Complexity-Risk.md).  

An important lesson here is that choice of language can reduce complexity: and we'll come back to this in [Software Dependency Risk](Software-Dependency-Risk.md).
 
### Networking / Security

There are plenty of [Complexity Risk](Complexity-Risk.md) perils in _anything_ to do with networked code, chief amongst them being error handling and (again) [protocol evolution](Communication-Risk.md#protocol-risk).  <!-- tweet-end -->

In the case of security considerations, exploits _thrive_ on the complexity of your code, and the weaknesses that occur because of it.  In particular, Schneier's Law says, never implement your own cryptographic scheme:

> "Anyone, from the most clueless amateur to the best cryptographer, can create an algorithm that he himself can't break. It's not even hard. What is hard is creating an algorithm that no one else can break, even after years of analysis." - [Bruce Schneier, 1998](https://en.wikipedia.org/wiki/Bruce_Schneier#Cryptography) 

Luckily, most good languages include cryptographic libraries that you can include to mitigate these [Complexity Risks](Complexity-Risk.md) from your own code-base.  

This is a strong argument for the use of libraries.  But when should you use a library and when should you code-your-own?  This is again covered in the section on [Software Dependency Risk](Software-Dependency-Risk.md).  

### The Environment

The complexity of software tends to reflect the complexity of the environment it runs in, and complex software environments are more difficult to reason about, and more susceptible to [Operational Risk](Operational-Risk.md) and [Security-Risk](Agency-Risk.md#security).  

In particular, when we talk about the environment, we are talking about the number of dependencies that the software has, and the risks we face when relying on those dependencies.  

So the next stop in the tour is a closer look at [Dependency Risk](Dependency-Risk.md).

