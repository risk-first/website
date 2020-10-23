---
title: Change
description: Part of the 'Estimating' Risk-First Series, exploring the problem of changing requirements.
url: https://riskfirst.org/estimating/Change
image: /images/generated/titles/Change.png
featuredimage: images/generated/single/Change.png
---

_under construction_

# Change

Let's look at _change_.  So far, we've considered our problem to be a fixed concern.  But what if the problem either changed over time, or as we worked on it?

How does that alter the strategy we use to deal with it?  Let's consider the example of owning a building (maybe a house or a shop), and the functional requirements you have for that building.  There are actually only a few basic strategies you can employ for dealing with change:

1.  **The Extension.**   If you need more space for some reason, you can build an extension.   But sometimes, extensions ruin the architectural integrity of a building, so you can also...

![Lots of extensions](https://www.nuttydiy.com/wp-content/uploads/2017/06/oie_26225047FLObtBGh.jpg)

2.  **Re-architect.**   Maybe this involves demolishing some walls, or building a new facade.  Re-architecting means taking-away as well as adding new.  

3.  **Re-locate.**  If the _location_ of the building is wrong, or the space to build in is insufficent, you'll end up moving.  This might mean breaking ground in a new location, as [Apple did _par excellence_ in 2017](https://www.apple.com/newsroom/2017/02/apple-park-opens-to-employees-in-april/).

![Apple Mothership](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftctechcrunch2011.files.wordpress.com%2F2013%2F11%2F111.jpg%3Fw%3D680%26h%3D414&f=1&nofb=1)

## In Software

You get the same choices in software, pretty much:

1.  **The Extension.** Add _another_ software component into your existing architecture, without changing any of the existing stuff.  Build feeds into / out of the existing software.
2.  **Re-architect.** Make _changes_ to the existing software, removing old components and modifying existing ones.
3.  **Re-locate.** Start again from scratch, with a view towards migrating users from the old system to the new.

You can get a long way with extension on it's own.  The downside of this is that you accrue _technical debt_ because none of the original code ever gets simplified.  Let's build a model of how this plays out in a simple 'business' game.

 - _Functional Areas_ (FAs) are things that generate value for the user-base.  Each FA generates the same value.  It costs £20 to build a new FA, and £2 per-round to maintain an FA.  
 - The _return_ on an FA is dependent on the size of the user base, which follows a nice, smooth gaussian curve.  
 - You can choose _when_ to build an FA, and it'll start generating return.
 - However, you're never allowed to shut down an FA.
 
-- add the simulation here.  Parameters:  how big should the FA be before investing?

Eventually, - obviously - the creation of new FAs _can't sustain the weight of the existing FAs_, and so the business will die.   

Now, there are some problems with this.  

Firstly, there is no _synergy_.  The existing FAs don't have an impact on the new ones.  It's always _just as hard_ to create a new FA as before.  









> "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle." - The Art Of War, _Sun Tzu_



Where you _don't know the answer_, iteration is really the only tool in the box.   
- Risk-First diagram for iteration

But this comes with a warning:  there are plenty of other problem domains that we've looked at where you _do_ know the answer.  

 - Don't reach for iteration as a first resort.  Make sure you're applying this technique to a relevant project.  Iteration is about scrambling together a few scratch components that may well get replaced in a later iteration.  It's clearly very different from _doing the worst parts first_ that we saw in [Journeys](Journeys.md).
 - Iterating _takes time_.  It involves [Meeting Reality](../thinking/Glossary.md#meet-reality) with your users in a [long feedback loop](../thinking/Cadence.md).  Because large feedback loops are more costly than smaller ones, make sure you _definitely need to do this_.
 