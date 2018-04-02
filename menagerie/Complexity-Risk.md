
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

By applying techniques such as abstraction, we can improve in the direction of the Kolmogorov limit.  By allowing ourselves to say that _symbols_ are worth one complexity point, we've allowed that we can be descriptive in our `function` name and `const`.  But we could go further down into [Code Golf]() territory.  This javascript program plays [FizzBuzz] up to 100, but is less readable than you might hope:

```javascript
	for(i=0;i<100;)document.write(((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)+"<br>")  (77 symbols)
```

So there is at some point a trade-off to be made between **Complexity Risk** and [Communication Risk](Communication-Risk), which we'll return to later.



## Connectivity

A second, useful measure of complexity comes from graph theory, and that is the connectivity of a graph:

> "...the minimum number of elements (nodes or edges) that need to be removed to disconnect the remaining nodes from each other" - [Connectivity, _Wikipedia_](https://en.wikipedia.org/wiki/Connectivity_(graph_theory)

To see this in action, have a look at the below graph:

![Connectivity 1](images/connectivity_1.png)

It has 10 vertices, labelled **a** to **g**, and it has 15 edges (or links) connecting the vertices together.  If any single edge were removed from this diagram, the 10 vertices would still be linked together.   Because of this, we can say that the graph is at least _2-connected_. 

Let's remove some of those extra links:

![Connectivity 2](images/connectivity_2.png)

In this graph, I've removed 6 of the edges.  Now, we're in a situation where if any single edge is removed, the graph becomes _unconnected_.  That is, it's broken into distinct chunks.  

Also, it's I've arranged it as a hierarchy, which I can do now that it's minimally connected in this way.  For 10 vertices, we need 9 edges to connect everything up: it's always:

```
  edges = vertices - 1
```

You can't always equate _connectedness_ with _complexity_, but it helps.  To demonstrate this, we can go further.  





Complexity vs readability - gzip it.


## Future Complexity




## Technical Debt





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

