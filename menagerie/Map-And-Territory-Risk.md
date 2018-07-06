![Under Construction](images/state/uc.png)

As we discussed in the section on [Abstraction Risk](Communication-Risk), our understanding of the world is entirely informed by the names we give things and the abstractions we create.  

**Map And Territory Risk** is the recognition that there is a danger that we come to believe the abstractions are more real than reality itself.  It comes from the expression "Confusing the Map for the Territory".  That is believing the abstraction is reality, instead of reality itself.

![Sat Nav Crash - Telegraph Newspaper](images/sat_nav.png)

In the picture shown here, the driver _trusted_ the SatNav to such an extent that he didn't pay attention to the road-signs around him, and ended up getting stuck.

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
 
When you have easy go-to metrics based on accidental or incidental correlations, [Hidden Risk](Glossary#hidden-risk) mounts up.  By relying on the metrics, you're not really _seeing_ the reality.  The devil is in the detail. 

## Drinking The Kool-Aid

The next problem comes when metrics start being used for more than just indicators, but as measures of performance or targets:
  - If a team is _told_ to do lots of releases, they will perform lots of releases *at the expense of something else*.
  - If team members are promoted according to SLOC, they will make sure their code takes up as many lines as possible.
  - In the UK, when ambulances were asked to respond to all emergency calls within a short window, cars and bicycles were employed as ambulances too [tbd].
  
You are probably nodding your head at these examples.  _Of course_ SLOC is a terrible measure performance!  We're not that stupid anymore.  The problem is, it's not so much the _choice_ of metric, but the fact that _all_ metrics merely approximate reality with a few numbers.  

The map is _always_ simpler than the territory, therefore there can be no perfect metrics.

## The Onion Of Bullshit

**Map-And-Territory Risk** "trickles down" through an organisation, in what I term "The Onion Of Bullshit".  In which successive layers of the organisational heirarchy imposed worse and worse.    Here's how this came about in a bank I worked at: 

- My team had been tasked with building automated "smoke tests" of an application.  But this was bullshit.  We only needed to build these _at all_ because the application was so complex.  The reason it was so complex was...
- The application was being designed within a "Framework" constructed by the department.  However, the framework was only being used by this one application.  Building a "reuasable" framework which is only used by a single application is bullshit.  But, we had to do this because...
- The organisational structure was created along a "matrix", with "business function" on one axis and "functional area" on another.   Although we were only building the application for a single business function, it was expected to cater with all the requirements from the an entire "functional area".  This was bullshit too, because
- The matrix structure was largely the legacy of a recent merger with another department.  As [Conway's Law]() predicts, our software therefore had to reflect this structure.  But this was bullshit because
- The matrix structure didn't represent reality in any useful way.  It was designed to pacify the budget committee at the higher level, and try to demonstrate attributes such as _control_ and _governance_.  But this was bullshit too, because
- The budget that was given to our department (Risk) was really based on how much fear the budget holders currently had of the market regulators.  But this was bullshit too, because
- At a higher level, the executives had realised that Investment Banking wasn't one of the banks strategic strengths, and was working to close it all down anyway.

When faced with so many mis-aligned objectives, it seemed completely hopeless to concentrate on the task at hand.  But then, my colleague Gavin was able to nihilistically complete the onion by adding a final layer:

- It's all about chasing money, which is bullshit, because life is bullshit.

It feels like there's no way back from that.  All of life might well be a big **Map and Territory** illusion.  But let's analyse just a bit:
 - At each layer of the onion, the objectives changed.  But, they impacted on the objectives of the layer below.
 - Therefore, it seems like the more layers you have, the less likely it is that your objectives become inconsistent between the lower and higher levels.
 - On a new project, it seems like a good idea to model this stuff:  does the objective of the work you're about to undertake "align" with the objectives at a higher level?  If not, the project might well be quite temporary:  Before I left, I was able to eject most of the "framework" elements of the project, and massively simplify the architecture, thus obviating the need for the smoke tests.  
 
So far, we've considered what happens when a team _has been told_ to optimise around a particular objective.  But it's not a great stretch from here to a point where people are optimising the metric at the expense of doing what they know is best for the project.  Or, optimising a metric for personal gain because that metric is more visible than other (perhaps more important) qualities.  This is [Agency Risk](Agency-Risk) which we'll look at in the next section.  

## Inadequate Equilibria

**Inadequate Equilibria** is a book by Eleizer Yudkovsky, who looks at how **Map and Territory Risk** can break not just departments, but entire societal systems.  Here is one example involving _academics_ and _grantmakers_ in academia:

 - It's not very apparent which scientists are better than which other scientists.
 - One proxy is what they've published (scientific papers) and where they've published (journals).
 - Universities want to attract research grants, and the best way to do this is to have the best scientists.
 - Because "best" isn't measureable, they use the proxy.
 - Therefore, immense power rests in the hands of the journals, since they can control the money-proxy.
 - Therefore, journals are able to charge large amounts of money to universities for subscriptions.
 
So, publication in prestigious journals is a _metric_ which is open to abuse, as we saw earlier. 

tbd

## Head In The Sand

Introduce Rapid Development example here?

how to pick projects

how to spot vanity projects

how to spot where the Goal In Mind is hopelessly ill-thought-through.
following the rules more important than getting things done.  

Head in the sand

Bullshit jobs

## Biases

It's tempting to think that [Map And Territory Risk](Map-And-Territory-Risk) is something that happens to someone else, and that you are going to be immune to it.  


Unfortunately, science is here to prove you wrong - our brains are _filled_ with biases which 

Why is this relevant?

human biases.



- showing progress
- the release

- less wrong

Is this really a risk?? Why is this here?  To shore up the scheduling thing?

Do biases go in here?  YES!!

**Any time your internal model is inconsistent with the world outside.   Should we call this internal model risk?**



