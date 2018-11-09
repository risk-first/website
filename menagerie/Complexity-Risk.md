![For Review](images/state/for-review.png)

[Complexity Risk](Complexity-Risk) are the risks to your project due to its underlying "complexity".  Over the next few sections, we'll break down exactly what we mean by complexity, looking at [Dependency Risk](Dependency-Risk) and [Boundary Risk](Boundary-Risk) as two particular sub-types of [Complexity Risk](Complexity-Risk).  However, in this section, we're going to be specifically focusing on _code you write_: the size of your code-base, the number of modules, the interconnectedness of the modules and how well-factored the code is.  

You could think of this section, then, as **Codebase Risk**:  We'll look at three separate measures of codebase complexity and talk about [Technical Debt](Complexity-Risk#technical-debt), and look at places in which **Codebase Risk** is at it's greatest.

## Kolmogorov Complexity

The standard Computer-Science definition of complexity, is [Kolmogorov Complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity).  This is:

>  "...is the length of the shortest computer program (in a predetermined programming language) that produces the object as output." - [Kolmogorov Complexity, Wikipedia](https://en.wikipedia.org/wiki/Kolmogorov_complexity)

This is a fairly handy definition for us, as it means that to in writing software to solve a problem, there is a lower bound on the size of the software we write.  In practice, this is pretty much impossible to quantify.  But that doesn't really matter:  the techniques for _moving in that direction_ are all that we are interested in, and this basically amounts to compression.

Let's say we wanted to write a JavaScript program to output this string:

```
abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd
```

We might choose this representation:

```javascript
 
function out() {                                      (7 )
    return "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd" (45)
}                                                     (1 )
```

The numbers in brackets indicate how many symbols each line contains, so in total, this code block contains **53 symbols**, if you count `function`, `out` and `return` as one symbol each.

But, if we write it like this:

```javascript
const ABCD="ABCD";                                    (11)

function out() {                                      (7 )
    return ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+        (16)
        ABCD+ABCD+ABCD;                               (6 )
}                                                     (1 )
```

With this version, we now have **41 symbols** (**ABCD** is a single symbol, because we could have called it anything).  And with this version:

```javascript
const ABCD="ABCD";                                    (11)

function out() {                                      (7 )
    return ABCD.repeat(10)                            (7 )
}                                                     (1 )
```

... we have **26 symbols**.  

### Abstraction

What's happening here is that we're _exploiting a pattern_: we noticed that `ABCD` occurs several times, so we defined it a single time and then used it over and over, like a stamp.  Separating the _definition_ of something from the _use_ of something as we've done here is called "abstraction".  We're going to come across it over and over again in this part of the book, and not just in terms of computer programs.  

By applying techniques such as Abstraction, we can improve in the direction of the Kolmogorov limit.  And, by allowing ourselves to say that _symbols_ (like `out` and `ABCD`) are worth one complexity point, we've allowed that we can be descriptive in our `function` name and `const`.  Naming things is an important part of abstraction, because to use something, you have to be able to refer to it.

### Trade-Off

But we could go further down into [Code Golf](https://en.wikipedia.org/wiki/Code_golf) territory.  This javascript program plays [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) up to 100, but is less readable than you might hope:

```javascript
for(i=0;i<100;)document.write(((++i%3?'':'Fizz')+     
(i%5?'':'Buzz')||i)+"<br>")                           (62)
```

So there is at some point a trade-off to be made between [Complexity Risk](Complexity-Risk) and [Communication Risk](Communication-Risk).  This is a topic we'll address more in that section.   But for now, it should be said that [Communication Risk](Communication-Risk) is about _misunderstanding_:  The more complex a piece of software is, the more difficulty users will have understanding it, and the more difficulty developers will have changing it.  

## Connectivity

A second, useful measure of complexity comes from graph theory, and that is the connectivity of a graph:

> "...the minimum number of elements (nodes or edges) that need to be removed to disconnect the remaining nodes from each other" - [Connectivity, _Wikipedia_](https://en.wikipedia.org/wiki/Connectivity_(graph_theory))

To see this in action, have a look at the below graph:

![Graph 1](images/generated/risks/complexity/connectivity_1.png)

It has 10 vertices, labelled **a** to **j**, and it has 15 edges (or links) connecting the vertices together.  If any single edge were removed from this diagram, the 10 vertices would still be linked together.   Because of this, we can say that the graph is _2-connected_.   That is, to disconnect any single vertex, you'd have to remove _at least_ two edges.

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

Let's remove some of those extra links:

![Graph 2](images/generated/risks/complexity/connectivity_2.png)

In this graph, I've removed 6 of the edges.  Now, we're in a situation where if any single edge is removed, the graph becomes _unconnected_.  That is, it's broken into distinct chunks.  So, it's _1-connected_.  

The second graph is clearly simpler than the first.  And, we can show this by looking at the **Kolgomorov Complexity** in our little language:

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

**Connectivity** is also **Complexity**.  Heavily connected programs/graphs are much harder to work with than less-connected ones.  Even _laying out_ the first graph sensibly is a harder task than the second (the second is a doddle).  But the reason programs with greater connectivity are harder to work with is that changing one module potentially impacts many others.

## Hierarchies and Modularisation

In the second, simplified graph, I've arranged it as a hierarchy, which I can do now that it's only 1-connected.  For 10 vertices, we need 9 edges to connect everything up.  It's always:

```
  edges = vertices - 1
```

Note that I could pick any hierarchy here:  I don't have to start at **c** (although it has the nice property that it has two roughly even sub-trees attached to it).

How does this help us?   Imagine if **a** - **j** were modules of a software system, and the edges of the graph showed communications between the different sub-systems.  In the first graph, we're in a worse position:  who's in charge?  What deals with what?  Can I isolate a component and change it safely?  What happens if one component disappears?  But, in the second graph, it's easier to reason about, because of the reduced number of connections and the new heirarchy of organisation.  

On the down-side, perhaps our messages have farther to go now:  in the original **i** could send a message straight to **j**, but now we have to go all the way via **c**.   But this is the basis of [Modularisation](https://en.wikipedia.org/wiki/Modular_programming) and [Hierarchy](https://en.wikipedia.org/wiki/Hierarchy).

As a tool to battle complexity, we don't just see this in software, but everywhere in our lives.  Society, business, nature and even our bodies:
  
 - **Organelles** - such as [Mitochondria](https://en.wikipedia.org/wiki/Mitochondrion).
 - **Cells** - such as blood cells, nerve cells, skin cells in the [Human Body](https://en.wikipedia.org/wiki/List_of_distinct_cell_types_in_the_adult_human_body).
 - **Organs** - like hearts livers, brains etc.
 - **Organisms** - like you and me.
 
The great complexity-reducing mechanism of modularisation is that _you only have to consider your local environment_.  Elements of the program that are "far away" in the hierarchy can be relied on not to affect you.  This is somewhat akin to the **Principal Of Locality**:

> "Spatial locality refers to the use of data elements within relatively close storage locations." - [Locality Of Reference, _Wikipedia_](https://en.wikipedia.org/wiki/Locality_of_reference)
 
## Cyclomatic Complexity

A variation on this graph connectivity metric is our third measure of complexity, [Cyclomatic Complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity).  This is:

```
Cyclomatic Complexity = edges − vertices + 2P,
```

Where **P** is the number of **Connected Components** (i.e. distinct parts of the graph that aren't connected to one another by any edges).

So, our first graph had a **Cyclomatic Complexity** of 7. `(15 - 10 + 2)`, while our second was 1. `(9 - 10 + 2)`.

Cyclomatic complexity is all about the number of different routes through the program.   The more branches a program has, the greater it's cyclomatic complexity.  Hence, this is a useful metric in [Testing](Development-Process) and [Code Coverage](https://en.wikipedia.org/wiki/Code_coverage): the more branches you have, the more tests you'll need to exercise them all. 

## More Abstraction

Although we ended up with our second graph having a **Cyclomatic Complexity** of 1 (the minimum), we can go further through abstraction, because this representation isn't minimal from a **Kolmogorov Complexity** point-of-view.  For example, we might observe that there are further similarities in the graph that we can "draw out":

![Complexity 3](images/generated/risks/complexity/connectivity_3.png)

Here, we've spotted that the structure of subgraphs **P1** and **P2** are the same:  we can have the same functions there to assemble those.  Noticing and exploiting patterns of repetition is one of the fundamental tools we have in the fight against [Complexity Risk](Complexity-Risk).

So, we've looked at some measures of software structure complexity, in order that we can say "this is more complex than this".  However, we've not really said why complexity entails [Risk](Glossary#Attendant-Risk).  So let's address that now by looking at two analogies, [Mass](Complexity-Risk#Complexity-as-mass) and [Technical Debt](Complexity-Risk#technical-debt).  

## Complexity As Mass

The first way to look at complexity is as **Mass** or **Inertia** :  a software project with more complexity has greater **Inertia** or **Mass** than one with less complexity.

Newton's Second Law states:

> "F = _m_**a**,    ( Force = Mass x Acceleration )" - [Netwon's Laws Of Motion, _Wikipedia_](https://en.wikipedia.org/wiki/Newtons_laws_of_motion)

That is, in order to move your project _somewhere new_, and make it do new things, you need to give it a push, and the more **Mass** it has, the more **Force** you'll need to move (accelerate) it.  

**Inertia** and **Mass** are equivalent concepts in physics:

> "mass is the quantitative or numerical measure of a body’s inertia, that is of its resistance to being accelerated".  - [Inertia, _Wikipedia_](https://en.wikipedia.org/wiki/Inertia#Mass_and_inertia)

You could stop here and say that the more lines of code a project contains, the higher it's mass.  And, that makes sense, because in order to get it to do something new, you're likely to need to change more lines.  

But there is actually some underlying sense in which _this is real_, as discussed in this [Veritasium](https://www.youtube.com/user/1veritasium) video.  To paraphrase:

> "Most of your mass you owe due to E=mc², you owe to the fact that your mass is packed with energy, because of the **interactions** between these quarks and gluon fluctuations in the gluon field... what we think of as ordinarily empty space... that turns out to be the thing that gives us most of our mass." - [Your Mass is NOT From the Higgs Boson, _Veritasium_](https://www.youtube.com/watch?annotation_id=annotation_3771848421&feature=iv&src_vid=Xo232kyTsO0&v=Ztc6QPNUqls)

I'm not an expert in physics, _at all_, and so there is every chance that I am pushing this analogy too hard.  But, substituting quarks and gluons for pieces of software we can (in a very handwaving-y way) say that more complex software has more **interactions** going on, and therefore has more mass than simple software. 

The reason I am labouring this analogy is to try and make the point that [Complexity Risk](Complexity-Risk) is really fundamental:

 - [Feature Risk](Feature-Risk):  like **money**.
 - [Schedule Risk](Scarcity-Risk#schedule-risk): like **time**.
 - [Complexity Risk](Complexity-Risk): like **mass**.
 
At a basic level, [Complexity Risk](Complexity-Risk) heavily impacts on [Schedule Risk](Scarcity-Risk#schedule-risk):  more complexity means you need more force to get things done, which takes longer.

![Complexity Risk and it's mitigations](images/generated/risks/complexity/complexity-risk.png)

## Technical Debt

The most common way we talk about unnecessary complexity in software is as [Technical Debt](Complexity-Risk#technical-debt):

> "Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite... The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organisations can be brought to a stand-still under the debt load of an unconsolidated implementation, object-oriented or otherwise." - [Ward Cunningham, 1992](https://en.wikipedia.org/wiki/Technical_debt)

Building a perfect first-time solution is a waste, because perfection takes a long time.  You're taking on more attendant [Schedule Risk](Scarcity-Risk#schedule-risk) than necessary and [Meeting Reality](Meeting-Reality) more slowly than you could.

A quick-and-dirty, over-complex implementation mitigates the same [Feature Risk](Feature-Risk) and allows you to [Meet Reality](Meeting-Reality) faster.  

But, having mitigated the [Feature Risk](Feature-Risk), you are now carrying more [Complexity Risk](Complexity-Risk) than you necessarily need, and it's time to think about how to [Refactor](https://en.wikipedia.org/wiki/Code_refactoring) the software to reduce this risk again.

## Kitchen Analogy

It’s often hard to make the case for minimising [Technical Debt](Complexity-Risk#technical-debt): it often feels that there are more important priorities, especially when technical debt can be “swept under the carpet” and forgotten about until later.  (See [Discounting The Future](Evaluating-Risk#discounting-the-future-to-zero).)

One helpful analogy I have found is to imagine your code-base is a kitchen.   After preparing a meal (i.e. delivering the first implementation), _you need to tidy up the kitchen_.  This is just something everyone does as a matter of _basic sanitation_.

Now of course, you could carry on with the messy kitchen.  When tomorrow comes and you need to make another meal, you find yourself needing to wash up saucepans as you go, or working around the mess by using different surfaces to chop on.  

It's not long before someone comes down with food poisoning.   

We wouldn't tolerate this behaviour in a restaurant kitchen, so why put up with it in a software project?

## Feature Creep

In Brooks' essay "No Silver Bullet - Essence and Accident in Software Engineering", a distinction is made between:

> - **Essence**:  _the difficulties inherent in the nature of the software._
> - **Accident**: _those difficulties that attend its production but are not inherent._   - [ Fred Brooks, _No Silver Bullet_](https://en.wikipedia.org/wiki/No_Silver_Bullet)

The problem with this definition is that we are accepting features of our software as _essential_.  

The Risk-First approach is that if you want to mitigate some [Feature Risk](Feature-Risk) then you have to pick up [Complexity Risk](Complexity-Risk) as a result.  But, that's a _choice you get to make_.  

Therefore, [Feature Creep](https://en.wikipedia.org/wiki/Feature_creep) (or [Gold Plating](https://en.wikipedia.org/wiki/Gold_plating_(software_engineering))) is a failure to observe this basic equation:  instead of considering this trade off, you're building every feature possible.  This has an impact on [Complexity Risk](Complexity-Risk), which in turn impacts [Communication Risk](Communication-Risk) and also [Schedule Risk](Scarcity-Risk#schedule-risk).

Sometimes, feature-creep happens because either managers feel they need to keep their staff busy, or the staff decide on their own that they need to [keep themselves busy](Agency-Risk).  But now, we can see that basically this boils down to bad risk management.  

> "Perfection is Achieved Not When There Is Nothing More to Add, But When There Is Nothing Left to Take Away" - [Antoine de Saint-Exupery](http://www.quotationspage.com/quote/26979.html)

## Dead-End Risk

![Dead-End Risk](images/generated/risks/complexity/dead-end-risk.png) 

[Dead-End Risk](Complexity-Risk#dead-end-risk) is where you build functionality that you _think_ is useful, only to find out later that actually, it was a dead-end, and is superseded by something else.

For example, let's say that the Accounting sub-system needed password protection (so you built this).  Then the team realised that you needed a way to _change the password_ (so you built that).   Then, that you needed to have more than one user of the Accounting system so they would all need passwords (OK, fine).  

Finally, the team realises that actually logging-in would be something that all the sub-systems would need, and that it had already been implemented more thoroughly by the Approvals sub-system.   

At this point, you realise you're in a **Dead End**:
  
 - **Option 1**: You carry on making minor incremental improvements to the accounting password system (carrying the extra [Complexity Risk](Complexity-Risk) of the duplicated functionality).
 - **Option 2**: You rip out the accounting password system, and merge in the Approvals system, surfacing new, hidden [Complexity Risk](Complexity-Risk) in the process, due to the difficulty in migrating users from the old to new way of working.
 - **Option 3**: You start again, trying to take into account both sets of requirements at the same time, again, possibly surfacing new hidden [Complexity Risk](Complexity-Risk) due to the combined approach.
 
Sometimes, the path from your starting point to your goal on the [Risk Landscape](Risk-Landscape) will take you to dead ends:  places where the only way towards your destination is to lose something, and do it again another way.  

This is because you surface new [Hidden Risk](Glossary#hidden-risk) along the way.  And the source of a lot of this hidden risk will be unexpected [Complexity Risk](Complexity-Risk) in the solutions you choose.  This happens a lot. 

### Source Control

[Version Control Systems](https://en.wikipedia.org/wiki/Version_control) like [Git](https://en.wikipedia.org/wiki/Git) are a useful mitigation of [Dead-End Risk](Complexity-Risk#dead-end-risk), because it means you can _go back_ to the point where you made the bad decision and go a different way.  Additionally, they provide you with backups against the often inadvertent [Dead-End Risk](Complexity-Risk#dead-end-risk) of someone wiping the hard-disk.

### The Re-Write

**Option 3**, Rewriting code or a whole project can seem like a way to mitigate [Complexity Risk](Complexity-Risk), but it usually doesn't work out too well.  As Joel Spolsky says:

> There’s a subtle reason that programmers always want to throw away the code and start over. The reason is that they think the old code is a mess. And here is the interesting observation: they are probably wrong. The reason that they think the old code is a mess is because of a cardinal, fundamental law of programming:  _It’s harder to read code than to write it._    - [Things You Should Never Do, Part 1, _Joel Spolsky_](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/)

The problem that Joel is outlining here is that the developer mistakes hard-to-understand code for unnecessary [Complexity Risk](Complexity-Risk).  Also, perhaps there is [Agency Risk](Agency-Risk) because the developer is doing something that is more useful to him than the project.    We're going to return to this problem in again [Communication Risk](Communication-Risk#reading-code).

## Where Complexity Hides

Complexity isn't spread evenly within a software project.  Some problems, some areas, have more than their fair share of issues.   We're going to cover a few of these now, but be warned, this is not a complete list by any means:

 - Memory Management
 - Protocols / Types
 - Algorithmic (Space and Time) Complexity
 - Concurrency / Mutability
 - Networks / Security

### Memory Management

Memory Management is another place where [Complexity Risk](Complexity-Risk) hides:

> "Memory leaks are a common error in programming, especially when using languages that have no built in automatic garbage collection, such as C and C++." - [Memory Leak, _Wikipedia_](https://en.wikipedia.org/wiki/Memory_leak)

[Garbage Collectors](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) (as found in Javascript or Java) offer you the deal that they will mitigate the [Complexity Risk](Complexity-Risk) of you having to manage your own memory, but in return perhaps give you fewer guarantees about the _performance_ of your software.  Again, there are times when you can't accommodate this [Operational Risk](Operational-Risk#performance-risk), but these are rare and usually only affect a small portion of an entire software-system.  
 
### Protocols And Types

Whenever two components of a software system need to interact, they have to establish a protocol for doing so.  There are lots of different ways this can work, but the simplest example I can think of is where some component **a** calls some function **b**.  e.g: 

```javascript
function b(a, b, c) {
    return "whatever" // do something here.
}

function a() {
	var bOut = b("one", "two", "three");
	return "something "+bOut;	
}
```

If component **b** then changes in some backwards-incompatible way, say:

```javascript
function b(a, b, c, d /* new parameter */) {
    return "whatever" // do something here.
}
```

Then, we can say that the protocol has changed.  This problem is so common, so endemic to computing that we've had compilers that check function arguments [since the 1960's](https://en.wikipedia.org/wiki/Compiler).  The point being is that it's totally possible for the compiler to warn you about when a protocol within the program has changed.  

The same is basically true of [Data Types](https://en.wikipedia.org/wiki/Data_type):  whenever we change the **Data Type**, we need to correct the usages of that type.  Note above, I've given the `JavaScript` example, but I'm going to switch to `TypeScript` now:

```typescript
interface BInput {
    a: string,
    b: string, 
    c: string,
    d: string
}

function b(in: BInput): string {
    return "whatever" // do something here.
}
```

Now, of course, there is a tradeoff:  we _mitigate_ [Complexity Risk](Complexity-Risk), because we define the protocols / types _once only_ in the program, and ensure that usages all match the specification.  But the tradeoff is (as we can see in the `TypeScript` code) more _finger-typing_, which some people argue counts as [Schedule Risk](Scarcity-Risk#schedule-risk).  

Nevertheless, compilers and type-checking are so prevalent in software that clearly, you have to accept that in most cases, the trade-off has been worth it: Even languages like [Clojure](https://clojure.org) have been retro-fitted with [type checkers](https://github.com/clojure/core.typed/wiki/User-Guide).

We're going to head into much more detail on this in the section on [Protocol Risk](Communication-Risk#protocol-risk).

### Space and Time Complexity

So far, we've looked at a couple of definitions of complexity in terms of the codebase itself.  However, in Computer Science there is a whole branch of complexity theory devoted to how the software _runs_, namely [Big O Complexity](https://en.wikipedia.org/wiki/Big_O_notation).  

Once running, an algorithm or data structure will consume space or runtime dependent on it's characteristics.  As with [Garbage Collectors](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)), these characteristics can introduce [Performance Risk](Operational-Risk#performance-risk) which can easily catch out the unwary.  By and large, using off-the-shelf data structures and algorithms helps, but you still need to know their performance characteristics. 

The [Big O Cheat Sheet](http://bigocheatsheet.com) is a wonderful resource to investigate this further.  

### Concurrency / Mutability

Although modern languages include plenty of concurrency primitives, (such as the [java.util.concurrent](https://docs.oracle.com/javase/9/docs/api/java/util/concurrent/package-summary.html) libraries), concurrency is _still_ hard to get right.  

[Race conditions](https://en.wikipedia.org/wiki/Race_condition) and [Deadlocks](https://en.wikipedia.org/wiki/Deadlock) _thrive_ in over-complicated concurrency designs:  complexity issues are magnified by concurrency concerns, and are also hard to test and debug.  

Recently, languages such as [Clojure](https://clojure.org) have introduced [persistent collections](https://en.wikipedia.org/wiki/Persistent_data_structure) to alleviate concurrency issues.  The basic premise is that any time you want to _change_ the contents of a collection, you get given back a _new collection_.  So, any collection instance is immutable once created.  The tradeoff is again attendant [Performance Risk](Operational-Risk#performance-Risk) to mitigate [Complexity Risk](Complexity-Risk).  

An important lesson here is that choice of language can reduce complexity: and we'll come back to this in [Software Dependency Risk](Software-Dependency-Risk).
 
### Networking / Security

There are plenty of [Complexity Risk](Complexity-Risk) perils in _anything_ to do with networked code, chief amongst them being error handling and (again) [protocol evolution](Communication-Risk#protocol-risk).  

In the case of security considerations, exploits _thrive_ on the complexity of your code, and the weaknesses that occur because of it.  In particular, Schneier's Law says, never implement your own cryptographic scheme:

> "Anyone, from the most clueless amateur to the best cryptographer, can create an algorithm that he himself can't break. It's not even hard. What is hard is creating an algorithm that no one else can break, even after years of analysis." - [Bruce Schneier, 1998](https://en.wikipedia.org/wiki/Bruce_Schneier#Cryptography) 

Luckily, most good languages include cryptographic libraries that you can include to mitigate these [Complexity Risks](Complexity-Risk) from your own code-base.  

This is a strong argument for the use of libraries.  But, when should you use a library and when should you implement yourself?  This is again covered in the section on [Software Dependency Risk](Software-Dependency-Risk).  

### Big Ball Of Mud

Although Type-Systems help for avoiding [Communication Risk](Communication-Risk) in the small, when software systems grow large it becomes hard to communicate their intent and keep their degree of connectivity low.  

> "A big ball of mud is a software system that lacks a perceivable architecture. Although undesirable from a software engineering point of view, such systems are common in practice due to business pressures, developer turnover and code entropy. " - [Big Ball Of Mud, _Wikipedia_](https://en.wikipedia.org/wiki/Big_ball_of_mud)

costs associated with complexity risk

CHANGE is also more risky why?

https://en.wikipedia.org/wiki/Big_ball_of_mud