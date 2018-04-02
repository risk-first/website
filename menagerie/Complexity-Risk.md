
**Complexity Risk** are the risks to your project due to its underlying complexity.  This could be down to the size of the codebase, the number of modules, the interconnectedness of the modules and how well-factored the code is.   

Often, programmers think about **Complexity Risk** as **Technical Debt** (see below), but there's a bit more to it than that.

## Kolmogorov Complexity

The standard Computer-Science definition of complexity, is [Kolmogorov Complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity).  This is:

>  "...is the length of the shortest computer program (in a predetermined programming language) that produces the object as output." - [Kolmogorov Complexity, Wikipedia](https://en.wikipedia.org/wiki/Kolmogorov_complexity)

This is a fairly handy definition for us, as it means that to in writing software to solve a problem, there is a lower bound on the size of the software we write.  In practice, this is pretty much impossible to quantify.  But that doesn't really matter:  the techniques for _moving in that direction_ are all that we are interested in, and this basically amounts to compression.

Let's say we wanted to write a javascript program to output this string:

```
abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd
```

We might choose this representation:

```javascript
 
function out() {                                             (7 symbols)
    return "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"        (45 symbols)
} (1 symbol)
```

... which contains **53** symbols, if you count `function`, `out` and `return` as one symbol each.

But, if we write it like this:

```javascript
const ABCD="ABCD"; (11 symbols)

function out() {                                             (7 symbols)
    return ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+ABCD (21 symbols)
}                                                            (1 symbol)
```

With this version, we now have **40** symbols.  And with this version:

```javascript
const ABCD="ABCD";                                           (11 symbols)

function out() {                                             (7 symbols)
    return ABCD.repeat(10)                                   (7 symbols)
}                                                            (1 symbol)
```

... we have **26** symbols.  

By applying techniques such as abstraction, we can improve in the direction of the Kolmogorov limit.  By allowing ourselves to say that _symbols_ are worth one complexity point, we've allowed that we can be descriptive in our `function` name and `const`.  But we could go further down into [Code Golf](https://en.wikipedia.org/wiki/Code_golf) territory.  This javascript program plays [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) up to 100, but is less readable than you might hope:

```javascript
	for(i=0;i<100;)document.write(((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)+"<br>")  (77 symbols)
```

So there is at some point a trade-off to be made between **Complexity Risk** and [Communication Risk](Communication-Risk) (a topic we'll come to later).

## Connectivity

A second, useful measure of complexity comes from graph theory, and that is the connectivity of a graph:

> "...the minimum number of elements (nodes or edges) that need to be removed to disconnect the remaining nodes from each other" - [Connectivity, _Wikipedia_](https://en.wikipedia.org/wiki/Connectivity_(graph_theory)

To see this in action, have a look at the below graph:

![Connectivity 1](images/connectivity_1.png)

It has 10 vertices, labelled **a** to **g**, and it has 15 edges (or links) connecting the vertices together.  If any single edge were removed from this diagram, the 10 vertices would still be linked together.   Because of this, we can say that the graph is _2-connected_.   That is, to disconnect any single vertex, you'd have to remove _at least_ two edges.

Let's remove some of those extra links:

![Connectivity 2](images/connectivity_2.png)

In this graph, I've removed 6 of the edges.  Now, we're in a situation where if any single edge is removed, the graph becomes _unconnected_.  That is, it's broken into distinct chunks.  So, it's _1-connected_.

Also, it's I've arranged it as a hierarchy, which I can do now that it's only 1-connected.  For 10 vertices, we need 9 edges to connect everything up: it's always:

```
  edges = vertices - 1
```

Note that I could pick any hierarchy here:  I don't have to start at **c** (although it has the nice property that it has two roughly even sub-trees attached to it).

## Hierarchies and Modularization

How does this help us?   Imagine if **a** - **g** were modules of a software system, and the edges of the graph showed communications between the different sub-systems.  In the first graph, we're in a worse position:  who's in charge?  What deals with what?  Can I isolate a component and change it safely?  What happens if one component disappears?  But, in the second graph, it's easier to reason about, because of the reduced number of connections and the new heirarchy of organisation.  

On the downside, perhaps our messages have farther to go now:  in the original **i** could send a message straight to **j**, but now we have to go all the way via **c**.   But this is the basis of [Modularization](https://en.wikipedia.org/wiki/Modular_programming) and [Hierarchy](https://en.wikipedia.org/wiki/Hierarchy).

As a tool to battle complexity, we don't just see this in software, but everywhere in our lives and in nature too:  
 - **Organelles** (such as [Mitochondria](https://en.wikipedia.org/wiki/Mitochondrion)
 - **Cells** (such as blood cells, nerve cells, skin cells in the [HumanBody](https://en.wikipedia.org/wiki/List_of_distinct_cell_types_in_the_adult_human_body).
 - **Organs** like hearts livers, brains etc.
 - **Organisms** like you and me.
 
## Cyclomatic Complexity

It would be nice to be able to measure, somehow, the complexity of our first graph with our second, and somehow, be able to say how much simpler our second graph is.  

In Computer Science, we can measure this property as [Cyclomatic Complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity).  This is:

```
Cyclomatic Complexity = edges − vertices + 2P,
```

Where **P** is the number of **Connected Components** (i.e. distinct parts of the graph that aren't connected to one another by any edges).

So, our first graph had a **Cyclomatic Complexity** of 7. `(15 - 10 + 2)`, while our second was 1. `(9 - 10 + 2)`.

## Abstraction

Although we ended up with our second graph having a **Cyclomatic Complexity** of 1 (the minimum), we can go further through abstraction, because this representation isn't minimal from a **Kolmogorov Complexity** point of view.  For example, we might observe that there are further similarities in the graph that we can "draw out":

![Complexity 3](images/connectivity_3.png)

Here, we've spotted that the structure of subgraphs **P1** and **P2** are the same:  we can have the same functions there to assemble those.  Noticing and exploiting patterns of repetition is one of the fundamental tools we have in the fight against complexity, and our programming languages support this through [Abstraction](https://en.wikipedia.org/wiki/Abstraction_(software_engineering).

## Technical Debt

So, we've looked at some measures of software structure complexity, in order that we can say "this is more complex than this".  However, we've not really said why complexity entails _risk_.  So let's address that now.  





## Inertia

One way to look at complexity is as _inertia_ or _mass_:  a software project with more complexity has greater _mass_ than one with less complexity, and, via Newton's Second Law:

> F = _m_**a**

That is, in order to move your project _somewhere new_, and make it do new things, you need to give it a push, and the more _mass_ it has, the more _Force_ you'll need to move it.  Inertia and mass are equivalent concepts in physics, and 

> "mass is the quantitative or numerical measure of a body’s inertia, that is of its resistance to being accelerated".  - [Inertia, _Wikipedia](https://en.wikipedia.org/wiki/Inertia#Mass_and_inertia)

So, this seems like just a handy metaphor for complexity, but there is actually some underlying sense in which _this is real_, as discussed in this [Veritasium]() video:

[![E=Mc2](images/e_mc2.png)](https://www.youtube.com/watch?annotation_id=annotation_3771848421&feature=iv&src_vid=Xo232kyTsO0&v=Ztc6QPNUqls)

To paraphrase:

> "Most of your mass you owe due to E=Mc^2, you owe to the fact that your mass is packed with energy, because of the interactions between these quarks and gluon fluctuations in the gluon field... what we think of as ordinarily empty space... that turns out to be the thing that gives us most of our mass." - [Veritaseum](https://www.youtube.com/watch?annotation_id=annotation_3771848421&feature=iv&src_vid=Xo232kyTsO0&v=Ztc6QPNUqls)

I'm not an expert in physics, by any sense, and so there is every chance that I am pushing this analogy too hard.  But, substituting quarks and gluons for pieces of software we can (in a very handwaving-y way) say that more complex software simply _weighs more_ than simple software.  



##



You don't know how complex something is until you do it?

You can't create an internal model of the whole system.

Especially not in advance.

Kitchen Analogy

## Technical Debt

Technical Debt is caused by **unnecessary complexity** within the software system.   It’s often hard to make the case for minimising technical debt: it often feels that there are more important priorities, especially when technical debt can be “swept under the carpet” and forgotten about until later.  

Technical debt manifests when you are merging new code and existing code.  The more existing code you have, the harder the merge.  Also, if we have some requirements and some existing code, and we are creating new code, then the situation is always harder when we have more of the existing code to work from.  

The solution to technical debt is refactoring.  This is well named:  consolidating the functionality down into the minimum number of orthogonal design factors of the system.   A well-factored system is not necessarily the simplest one:  it could be that there are further abstractions that could be made.  However, a well-factored system is one that most ably supports future merging, without introducing problems for the person doing the merge.  

Kitchen Analogy:  Technical Debt is like not clearing up the kitchen after cooking.

Technical Debt is also _rework_

IT's also when, to make a change, you have to do lots of work... technical debt is like inertia... it's harder to change projects with lots of tech debt.

Is technical debt _unnecessary complexity_?  

## Devil makes work
This is an _antipractice_ where idle people will add [Complexity Risk](Complexity-Risk) to your project


gold plating software engineering

Complexity Risk is heavily mitigated by **Compilers** and **UNit Tests**.

Complexity risk isn't bad in itself, but it's inertia that slows us down.
Starting a new project is always easier than continuing an existing one.  And, more exciting.

uSers and data add to complexity risk, especially hetrogenous requirements from lots of different users - should you add users like this?

Inertia

- You could describe complexity risk as inertia.   
- If you're carrying a lot of complexity, it makes the project _hard to change_.
- If you're _scared of making changes_ it's _hard to change_.

Testing and Code coverage (and compilation) _mitigate_ inertia, because it gives you the confidence to make change without having the entire project in your head.


## Dead-End Risk

**Dead-End Risk** is where you build functionality that you _think_ is useful, only to find out later that actually, it was 
a dead-end, and is superceded by something else.

For example, let's say that the Accounting sub-system needed password access (so you built this).  Then the team realised that you needed a way to _change the password_ (so you built that).   Then, that you needed to have more than one user of the Accounting system so they would all need passwords (ok, fine).  

Finally, the team realises that actually logging-in would be something that all the sub-systems would need, and that it had already been implemented more thoroughly by the Approvals sub-system.   

At this point, you realise you're in a **Dead End**:  
 - Either you carry on making minor incremental improvements to the accounting password system (carrying the extra **Complexity Risk** of duplicated functionality), or
 - You rip out the accounting password system, and merge in the Approvals system, surfacing new, hidden **Complexity Risk** in the process, due to the difficulty in migrating users from the old to new way of working.
 
 
 
 
 

Sometimes, the path from your starting point to your goal on the [Risk Landscape](Risk-Landscape) will take you to dead ends:  places 
where the only way towards your destination is to lose something, and do it again another way.

## Examples

-- The Re-write


## Mitigating Practices

[Design](Big-Design


In the small:


- Changing one thing at a time
- Compilers
- Build Process
- Running Tests
- Language Design
- Choice of Language


In the large

- Integration
- Fat Finger
- Pair Programming


Concurrency
File Systems vs Databases

Finding enough staff

ANYTHING YOU CANT CHANGE IS LEGACY



## Space and Time Complexity

So far, we've looked at a couple of definitions of complexity in terms of the _structure_ of software.  However, in Computer Science there is a whole branch of complexity theory devoted to how the software _runs_, namely [Big O Complexity](https://en.wikipedia.org/wiki/Big_O_notation).  

Once running, an algorithm or data structure will consume space or runtime dependent on it's characteristics.  


### See Also

 - [Big O Cheatsheet](http://bigocheatsheet.com): This is a wonderful resource to investigate this further.
 
  
