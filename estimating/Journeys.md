---
title: Journeys
description: Part 3 of the 'Estimating' Risk-First Series.
url: https://riskfirst.org/estimating/Journeys
--image: /images/generated/titles/Just-Risk.png
--featuredimage: images/generated/single/Just-Risk.png
categories:
 - Estimating
order: 12
---

# Journeys

A third way to conceive of software development is as a _journey_ on the [Risk Landscape](Glossary.md#risk-landscape).  We start at a place where we have no product, no customers and some funding.  We go on a journey of discovery and end up in a place where hopefully we _have_ a product, customers and an income stream.

There are many ways we could do this journey, and many destinations.  The idea of "pivoting" your startup idea feels very true to the [Journey](Journey.md) analogy, because that literally means changing direction.  _The place where we were headed sucked, lets go over here_.  

What does this journey look like in Risk-First terms?

As this diagram shows, at the start we have plenty of [Feature Fit Risk](Feature-Risk#feature-fit-risk):  if we have _no_ product, then it definitely doesn't fit our customer's needs!  Also we have some amount of [Funding Risk](Scarcity-Risk#funding-risk), as at some point the money will run out.

After that, we use every trick in the book called "product development" to get to a new place on the [Risk Landscape](Glossary.md#risk-landscape).  This place (hopefully) will have a better risk profile than the one we came from.

## A London Example

![Journey via the Central Line](images/estimates/central-line.png)

If you were travelling across London from Ealing (in the West) to Stratford (in the East) the _fastest_ route might be to take the Central Line.  You could do it via the A406 road, which would take a _bit_ longer.  It would _feel_ like you're mainly going in completely the wrong direction doing that, but it's much faster than cutting straight through London and you don't pay the congestion charge.

![Journey by Car](images/estimates/car.png)

In terms of risk, they all have different profiles.  You're often delayed in the car, by some amount.  The tube is _generally_ reliable, but when it breaks down or is being repaired it might end up quicker to walk.  

If you were doing this same journey on foot, it's a very direct route, but would take five times longer.  However, if you were making this journey a hundred years ago that might be the only choice (horseback might be a bit faster).

![Journey on Foot](images/estimates/foot.png)

## Journey Risks
 
In the software development past, _building it yourself_ was the only way to get anything done.  It was like London _before road and rail_.   Nowadays, you are bombarded with choices.  It's actually _worse than London_ because it's not even a two-dimensional geographic space and there are multitudes of different routes and acceptable destinations.  Journey planning on the software [Risk Landscape](Glossary.md#risk-landscape) is an optimisation problem _par excellence_. 

How can we think about estimating in such a domain?  There are clearly a number of factors to come into play:

1.  For individual _parts_ of the journey, we could use a [Fill-The-Bucket]() approach, and look at things like _expected travel time_, _mean travel time_ or  _reliability_.
2.  Chances are, we're going to need to join up several different pieces of transport: maybe some on-foot, some by road, some by rail.  
3.  It's a really good idea to build in buffers if you're relying on services that are infrequent (like flights or trains).
4.  Cost is a factor.
5.  You can easily go the wrong way, or end up in a dead end.  That's going to seriously impact your schedule.
6.  You might not be working with complete, up-to-date maps and timetables, but a general idea for the territory.

## Back To Software

So, we now have a third type of estimating.  Again, very different from the [first](Fill-The-Bucket-Estimating.md) [two](Kitchen-Cabinet-Estimating.md).  But again, there are obvious similarities with what we do in the world of software.  

I've been on projects where a team has toiled long-and-hard to get a database working, only to find out that there was a better, different one available that would do the job for them.  I've watched people struggle to build their own languages and compilers, only to realise later that actually all they needed was to use the ones that were there already.  It's easy to head off on-foot _by accident_, overlooking the fact that someone has _built the motorway_.

In fact, my argument is that, in a world of _millions of open-source projects_, the art of software development is to a large extent to be able to stitch together a selection of pre-written components in much the same way as I might stitch a journey plan together from a series of pre-existing travel options.

## Applying Risk

Estimating then becomes the art of:

- Breaking down the functionality required into separate parts
- Assigning the responsibility of each part to a particular pre-existing component
- Working out how long it'll take to glue them all together
- Not being wrong about the feasibility of the plan in the first place.

To achieve point (4), once an estimate is in place, the Risk-First way to proceed would then be to tackle each part in order, from the riskiest and most-likely-to-fail, to the most reliable.  This approach front-loads finding out if the plan is suspect. 

But, there is _yet another_ way of looking at what's needed to estimate: [Fractal-Estimating](Fractal-Estimating.md).

 