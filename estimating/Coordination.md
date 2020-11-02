![Under Construction](/images/state/uc.png)

# Coordination


# A Postal Problem

Imagine you had a network of elements like the one below.





jsfiddle.net/vfu78/16/

Let's consider some scenarios for what this could represent:

- **Lines of Telephone Communication**: perhaps this is a network of people that call each other?  If we allow for the fact that _switches_ and _multiplexers_ can exist (ways to route multiple calls across the same lines), then how best can we conserve the physical, copper wires?  The _best_ solution would be to take a Travelling-Salesman solution across the network.   



- **Lines of Influence**: maybe the medium is free, and we don't need to talk via copper pipe.  How best can we get people to talk with each other?  



If a message gets sent in this network, there are potentially X routes it could take.  






[Hierarchies]() introduced the idea of imperfect [Compositional Hierarchies]() as a means of organising our software and our biology (amongst other examples). 

The reason for this is that the human brain is exceptionally good at both _classifying_ and _composing_ components and systems.

It's fair enough that we would want to use these same tools for organising our software teams, then.  This is Conway's Law, which [we have discussed before](Software-Dependency-Risk.md#conway-s-law):

> "organisations which design systems ... are constrained to produce designs which are copies of the communication structures of these organisations." - [Melvin Conway, _Conway's Law_](https://en.wikipedia.org/wiki/Conways_law)



So, let's play a game.  We have the following graph, which represents the linkages needed to have a working team, business, biological organism or piece of software:

-- tbd




The problem is, it's complicated.  




  

You want to work as a team, so work needs to be split up
Again, you’re in the position of Kitchen Estimating and Fractal Shape, where you can’t see the shape of what you’re building in advance.
You divide the work (and the team) into a hierarchy.  (Conway’s law)
But - what’s this going to do to your deadlines?  You now have multiple concurrent projects, and you have to pick the worst case scenario for when things are going to be complete.
Can we do better?  Rebalancing probably won’t help, since you never know how much more there is to do.


## Imposign



Cost = Links x Degree of Freedom (Nodes)

But, you can add a hierarchy, which reduces nodes within a certain space.  
