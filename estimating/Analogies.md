---
title: Analogies
description: Part of the 'Estimating' Risk-First Series. Analogies for the problems of estimating.
url: https://riskfirst.org/estimating/Analogies
image: /images/generated/titles/Analogies.png
featuredimage: images/generated/single/Analogies.png
categories:
 - Estimating
order: 5
---

_under construction_

# Analogies

So far, this series of articles has tried to bring the problems of estimating software projects into focus by identifying different _domains_ and analogies for each domain.  Let's recap:

- [Fill-The-Bucket](Fill-The-Bucket.md):  This is the easiest domain to work in.   All tasks are similar and uncorrelated.  We can _extrapolate_ to figure out how much time the next _n_ units will take to do.
- [Kitchen Cabinet](Kitchen-Cabinet.md):  In this domain, there is _hidden work_.  We don't know how much there might be.  If we can break down tasks into smaller units, then by the _law of averages_ and the _central limit theorem_, we can apply some statistics to figure out when we might finish.
- [Journeys](Journeys.md):  In this domain, work is heterogeneous and interconnected.  Different parts depend on each other, and a failure in one part might mean going back to the drawing board entirely.  The way to estimate in this domain is to _know the landscape_ and to build in _buffers_.  
- [Fractals](Fractals.md):  In this domain, [Parkinson's Law]() is king.  There is always more work to be done.  The best thing we can do is try and apply ourselves to the _highest value_ work at any given point, and frequently refer back to reality to find out if we're building the right thing.

![Three Dimensions From Fill-The-Bucket](/images/estimates/dimensions.png)

In Risk-First, one of the main messages has been that it's all about your [Internal Model](/Glossary.md#internal-model).  If you have a good model of the world, then you're likely to be able to [Take Actions](/Glossary.md#take-action) in the world that lead you to positions of lower risk.

So the main reason for identifying all these different problem domains for estimation has been to improve that internal model.  

## Connecting The Dots

Hopefully, you should be able to draw a line through each of these domains and see that there are examples from the world of software development that fit in there.  Rather than understanding estimating as a thing which goes wrong frequently, and throw it out as a tool, you might be able to place your problem in this space, and decide which of these axes caused you the issue.

For the rest of this article, I'm going to go out on a limb, and describe, through increasingly preposterous analogies, how we can arrive at an analogy for the top-right of the above diagram.  Now, arguably - that's going to be completely pointless:  we have enough analogies already since we've described each dimension!   However, unlike the other chapters this is going to be a fairly easy ride so just go with it.

## Journeys + Cabinets = Mazes?

As we discussed in [Journeys](), there are plenty of problems in getting from A to B.  But to help you, _maps_ are available, and the routes already exist.  Also, we get to fall back to the tried-and-tested heuristic:  the closer you are, the nearer you are to done (which is great for walking and driving, but tends to fall down somewhat when we have to wait for buses or make a detour to the airport).

![Journeys Meets Cabinets](/images/estimates/dimensions-2.png)

What happens when you relax those constraints?  If there is _no map_ and the _closeness_ heuristic isn't available, you're in a maze.   

You can't tell how "done" you are in a maze by judging your distance to the exit point - you may be heading to a [Dead End](Complexity-Risk.md#dead-end-risk) anyway!

Software development is littered with dead-ends:

 - The database you thought would be a good fit, but didn't work.
 - The library you thought would solve your networking problems, but turned out to be unable to work through the firewall.
 - The algorithm that promised to recognise 

A _very_ famous example of this might be the "Summer Intern Computer Vision" project, outlined by Seymour Papert:

"The summer vision project is an attempt to use our summer workers effectively in the construction of a significant part of the human visual system" - [The Summer Vision Project, _Seymour Papert_](ftp://publications.ai.mit.edu/ai-publications/pdf/AIM-100.pdf)

Maybe this is an unfair and perhaps apocryphal example, but we've been stuck in the "Computer Vision" maze ever since.  

## Mazes + Fractals = Networks In Mazes?


