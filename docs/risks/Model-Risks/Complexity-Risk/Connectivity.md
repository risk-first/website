---
sidebar_position: 2
title: Connectivity As Complexity
slug: /risks/Connectivity
---

A second useful measure of complexity comes from graph theory, and that is the connectivity of a graph:

> "...the minimum number of elements (nodes or edges) that need to be removed to disconnect the remaining nodes from each other" - [Connectivity, _Wikipedia_](https://en.wikipedia.org/wiki/Connectivity_(graph_theory))

![Graph 1, 2-Connected](/img/generated/risks/complexity/connectivity_1.svg)

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
                                               (total: 39)
```

![Graph 2, 1-Connected](/img/generated/risks/complexity/connectivity_2.svg)

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
                                               (total: 25)
```

So for defining our graphs, **Connectivity** is also **Complexity**.  

This carries over into software too:  heavily connected code is more complex than less-connected code.   It's also harder to reason about and work with because changing one module potentially impacts many others.  Let's dig into this further.

### Hierarchies and Modularisation

In the second graph, I've arranged it as a hierarchy (which I can do trivially now that it's only 1-connected).  For 10 vertices, we need 9 edges to connect everything up.  It's always:

```javascript
  edges = vertices - 1
```

Note that I could pick any hierarchy here:  I don't have to start at **c** (although it has the nice property that it has two roughly equally-sized sub-trees attached to it).

How does this help us?   Imagine if **a** - **j** were modules of a software system and the edges of the graph showed communications between the different sub-systems.  In the first graph, we're in a worse position:  

 - Who's in charge?  What deals with what?  
 - Can I isolate a component and change it safely?  
 - What happens if one component disappears?  
 
The second graph is easier to reason about because of the reduced number of connections and the new hierarchy of organisation.  

On the down-side, perhaps our messages have farther to go now:  in the original, **i** could send a message straight to **j**, but now we have to go all the way via **c**.   But this is the basis of [Modularisation](https://en.wikipedia.org/wiki/Modular_programming) and [Hierarchy](https://en.wikipedia.org/wiki/Hierarchy).   

Secondly, it's not apparent to **i** that **j** _even exists_: we have hidden the modules from each other.  For anything that **i** needed to send to **j**, **i** must be able to send to **c** instead.  

![Modularisation and Hierarchy](/img/generated/risks/complexity/modularisation.svg)

The trade-off of modularisation/hierarchy is shown in the above diagram, and it's our third tool for battling [Complexity Risk](/tags/Complexity-Risk).  

But we don't just see this in software, it's everywhere in our lives:  societies, business, and living organisms all use this technique.  For example in our bodies we have:
  
 - **Organelles** - such as [Mitochondria](https://en.wikipedia.org/wiki/Mitochondrion), contained in...
 - **Cells** - such as blood cells, nerve cells, skin cells in the [Human Body](https://en.wikipedia.org/wiki/List_of_distinct_cell_types_in_the_adult_human_body), inside...
 - **Organs** - like hearts livers, brains etc, held within...
 - **Organisms** - like you and me.
 
The great complexity-reducing mechanism of modularisation is that _you only have to consider your local environment_.  
