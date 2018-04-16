As we discussed in the section on [Abstraction Risk](Communication Risk), our understanding of the world is entirely informed by the names we give things and the abstractions we create.  

**Map And Territory Risk** is the recognition that there is a danger that we come to believe the abstractions are more real than reality itself.  It comes from the expression "Confusing the Map for the Territory".  That is believing the abstraction is reality, instead of reality itself.

In the picture shown here, the driver _trusted_ the SatNav to such an extent that he didn't pay attention to the road-signs around him, and ended up getting stuck.

tbd - picture

This wasn't borne of stupidity, but experience:  _so many times_ the SatNav had been right, that the driver stopped questioning its fallibility.  But SatNavs are pretty reliable, this is kind of excusable.  People are happy to make this mistake with far less reliable systems because often it's a shortcut to having to do any real thinking.

## Metrics

The simplest type of **Map And Territory Risk** occurs like this:  someone finds a useful new metric that helps in evaluating performance. It might be:

- **SLOC (Source Lines Of Code)**: i.e. the number of lines of code each developer writes per day/week whatever.
- **Function Points**: the number of function points a person on the team completes, each sprint.
- **Code Coverage**: the number of lines of code exercised by unit tests
- **Response Time**: the time it takes to respond to an emergency call, say
- **Release cadence**:  number of releases a team performs, per month, say.

With some skill, they may be able to _correlate_ this metric against some other more abstract measure of success.  For example:
- "quality is correlated with more releases" 
- "user-satisfaction is correlated with SLOC"
- "response time is correlated with revenue"

Because the _thing on the left_ being is immediate and easier to measure than _the thing on the right_, it becomes used as a proxy (or, Map) for the thing they are really interested in (the Territory).  

But _correlation_ doesn't imply _causation_.  The cause might be different:  
 - quality and number of releases might both be down to the simplicity of the product.
 - user satisfaction and SLOC might both be down to the calibre of the developers.
 - response time and revenue might both be down to clever team planning.
 
When you have easy go-to metrics based on accidental or incidental correlations, [Hidden Risk]() mounts up.  By relying on the metrics, you're not really _seeing_ the reality.  The devil is in the detail. 

## Drinking The Cool-Aid

The next problem comes when metrics start being used for more than just indicators, but as measures of performance or targets:
  - If a team is _told_ to do lots of releases, they will perform lots of releases *at the expense of something else*.
  - If team members are promoted according to SLOC, they will make sure their code takes up as many lines as possible.
  - In the UK, when ambulances were asked to respond to all emergency calls within a short window, cars and bicycles were employed as ambulances too [tbd].
  
You are probably nodding your head at these examples.  _Of course_ SLOC is a terrible measure performance!  We're not that stupid anymore.  The problem is, it's not so much the _choice_ of metric, but the fact that _all_ metrics merely approximate reality with a few numbers.  

The map is _always_ simpler than the territory, therefore there can be no perfect metrics.

## On To Agency Risk

So far, we've considered what happens when a team _has been told_ to optimise around a particular objective.  But it's not a great stretch from here to a point where people are optimising the metric at the expense of doing what they know is best for the project.  Or, optimising a metric for personal gain because that metric is more visible than other (perhaps more important) qualities.  This is [Agency Risk](Agency-Risk) which we'll look at in the next section.

## The Onion Of Bullshit

Before we get to that, though, let's look at how **Map-And-Territory Risk** "trickles down" through an organisation, in what I term "The Onion Of Bullshit".   



Who's fault is this, exactly?



Cutting yourself off from the world and building castles in the sky.



- Large organisations suffer more, because they lose touch with reality and deal with themselves.



Are you testing the right thing?


## Inadequate Equilibria

The problem is, whilst the world is _just a bunch of atoms_, everything else is subjective:  it's all maps inside our heads.


-- Yudkovsky


## Group Think & Hubris

tbd definition of groupthink







