

# Change

So far, we've analysed problems with estimating in four different domains:

- [Fill-The-Bucket]():  This is the easiest domain to work in.   All tasks are similar and uncorrelated.  We can _extrapolate_ to figure out how much time the next _n_ units will take to do.
- [Kitchen-Cabinet]():  In this domain, there is _hidden work_.  We don't know how much there might be.  If we can break down tasks into smaller units, then by the _law of averages_ and the _central limit theorem_, we can apply some statistics to figure out when we might finish.
- [Journeys]():  In this domain, work is heterogenous and interconnected.  Different parts depend on each other, and a failure in one part might mean going back to the drawing board entirely.  The way to estimate in this domain is to _know the landscape_ and to build in _buffers_.  
- [Fractals]():  In this domain, [Parkinson's Law]() is king.  There is always more work to be done.  The best thing we can do is try and apply ourselves to the _highest value_ work at any given point, and frequently refer back to reality to find out if we're building the right thing.

![Three Dimensions From Fill-The-Bucket](images/estimates/dimensions.png)

In Risk-First, one of the main messages has been that it's all about your [Internal Model](/Glossary.md#internal-model).  If you have a good model of the world, then you're likely to be able to [Take Actions](/Glossary.md#take-action) in the world that lead you to positions of lower risk.

So the main reason for identifying all these different problem domains for estimation has been to improve that internal model.  

Hopefully, you should be able to draw a line through each of these domains and see that there are examples from the world of software development that fit in there.  Rather than understanding estimating as a thing which goes wrong frequently, and throw it out as a tool, you might be able to place your problem in this space, and decide which of these axes caused you the issue.

## The Time Dimension

Let's look at _change_.  So far, we've considered our problem to be a fixed concern.  But what if the problem either changed over time, or as we worked on it?

How does that alter the strategy we use to deal with it?  Let's consider the example of owning a building (maybe a house or a shop), and the functional requirements you have for that building.  There are actually only a few basic strategies you can employ for dealing with change:

1.  The Extension.   If you need more space for some reason, you can build an extension.   But sometimes, extensions ruin the architectural integrity of a building, so you can also...

![Lots of extensions](https://www.nuttydiy.com/wp-content/uploads/2017/06/oie_26225047FLObtBGh.jpg)

2.  Re-architect.   Maybe this involves demolishing some walls, or building a new facade.  Re-architecting means taking-away as well as adding new.  

3.  Re-locate.   If the _location_ of the building is wrong, or the space to build in is insufficent, you'll end up moving.  This might mean breaking ground in a new location, as [Apple did _par excellence_ in 2017](https://www.apple.com/newsroom/2017/02/apple-park-opens-to-employees-in-april/).

![Apple Mothership](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftctechcrunch2011.files.wordpress.com%2F2013%2F11%2F111.jpg%3Fw%3D680%26h%3D414&f=1&nofb=1)







> "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle." - The Art Of War, _Sun Tzu_



Where you _don't know the answer_, iteration is really the only tool in the box.   
- risk first diagram for iteration

But this comes with a warning:  there are plenty of other problem domains that we've looked at where you _do_ know the answer.  

 - Don't reach for iteration as a first resort.  Make sure you're applying this technique to a relevant project.  Iteration is about scrambling together a few scratch components that may well get replaced in a later iteration.  It's clearly very different from _doing the worst parts first_ that we saw in [Journeys](Journeys.md).
 - Iterating _takes time_.  It involves [Meeting Reality]() with your users in a [large feedback loop]().  Because large feedback loops are more costly than smaller ones, make sure you _definitely need to do this_.
 