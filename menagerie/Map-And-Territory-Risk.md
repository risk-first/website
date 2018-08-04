![Under Construction](images/state/uc.png)

As we discussed in the section on [Abstraction](), our understanding of the world is entirely informed by the names we give things and the abstractions we create.  (In the same way, **Risk-First** is about _identifying patterns_ within software development and calling them out.)  Our [Internal Models]() are a model of the world based on these patterns, and their relationships.

So there is a translation going on here: observations about the arrangement of _atoms_ in the world get turned into patterns of _information_ (measured in bits and bytes).  

![Maps and Territories, and Communication happening between them](images/kite9/mapter-bits-atoms.png) 

[Map And Territory Risk]() is the risk we face because we base our behaviour on our [Internal Models]() rather than reality itself.  It comes from the expression "Confusing the Map for the Territory", attributed to Alfred Korzybski:

> "Polish-American scientist and philosopher Alfred Korzybski remarked that "the map is not the territory" and that "the word is not the thing", encapsulating his view that an abstraction derived from something, or a reaction to it, is not the thing itself. Korzybski held that many people _do_ confuse maps with territories, that is, confuse models of reality with reality itself." - [Map-Territory Relation, _Wikipedia_](https://en.wikipedia.org/wiki/Map–territory_relation)

![Map And Territory Risk](images/generated/map-and-territory-risk.png)

In this section, we are going to look at some ways in which this risk manifests itself, starting simple and getting more complex.   We will look at:
- **Fitness**, and the issues we face when our [Internal Models]() don't contain the _right_ abstractions.
- **Audience**: risks associated with _shared understanding_ within groups and organisations.
- **Evolution**: how [Map and Territory Risk]() changes over time, and how it can sometimes get stuck.

## Internal Model Fitness

![Sat Nav Blunder Sends Asda Van Crashing Narrow Footpath - Telegraph Newspaper](images/sat_nav.png)

In the picture shown here, from the Telegraph newspaper, the driver _trusted_ the SatNav to such an extent that he didn't pay attention to the road-signs around him, and ended up getting stuck.  This wasn't borne of stupidity, but experience:  SatNavs are pretty reliable. _So many times_ the SatNav had been right, that the driver stopped _questioning its fallibility_.  

So, there are two [Map and Territory Risks]() here:
 - The [Internal Model]() of the SatNav contained information that was wrong:  the track had been marked up as a road, rather than a path.  
 - The [Internal Model]() of the driver was wrong:   his abstraction of "the SatNav is always right" turned out to be only _mostly_ accurate.  

What are the risks at play here?  We've already looked in detail at the [Dependency Risks]() involved in relying on something like a SatNav, in the [Software Dependency Risk]() section.  But here, we are really looking at [Internal Models]() as a source of [Dependency Risk]() too.

Conversely, we could argue that the SatNav and the [Internal Model]() had bugs in them:  i.e. the same [Feature Implementation Risk]() we saw in the [Feature Risk]() section.  If a SatNav has too much of this, you'd end up not trusting it, and getting a new one.  With your [Internal Model](), you are slightly stuck in that you can't go elsewhere, but you may learn to _trust certain bits of knowledge less_, as this driver did.

<table>
  <tr>
    <th>Dimension</th>
    <th>Feature Risk</th>
    <th>M&amp;T Examples</th>
  </tr>
  <tr>
    <td>Fitness</td>
    <td>Conceptual Integrity Risk <br />Implementation Risk</td>
    <td>
      <ul>
        <li>A filing cabinet containing too much junk. </li>
        <li>Learning things that aren’t useful. </li>
        <li>Knowing how a car works, but actually needing to know how to drive. </li>
        <li>Knowing how to program in one language, when another would be more appropriate. </li>
        <li>Sat Nav had the wrong route. </li>
        <li>Not quite remembering a recipe properly.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Evolution</td>
    <td>Feature Drift Risk <br />Regression Risk</td>
    <td>
      <ul>
        <li>Knowing outdated tools. </li>
        <li>Writing last year’s date on the cheque. </li>
        <li>The bank sending letters to your old address. </li>
        <li>Forgetting things</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Audience</td>
    <td>Feature Access Risk<br />Market Risk</td>
    <td>
      <ul>
        <li>Memes. </li>
        <li>Demand for courses. </li>
        <li>Metrics.</li>
        <li>Echo-chambers. </li>
        <li>Shared values which exclude certain people. </li>
        <li>Ideas going “out of fashion”.</li>
      </ul>
    </td>
  </tr>
</table>

Let's summarize what's going on here.  For any given nugget of information in our internal model, we are evaluating it on three axes:

- **Fitness**: as we've discussed, this is how closely the information matches reality, and how _useful that is to us_ (models that contain too much detail are as bad as models with too little).
- **Audience**: is all about how a piece of information is _shared_ between many [Internal Models](), and it's this we are going to address further now.
- **Evolution**: is all about how the _world changes_, and your information goes out-of-date.   

## Audience

Let's pick apart the "Audience" dimension of the above table:
 - We know from looking at [Communication Risk]() that communication allows us to _share_ information between [Internal Models](). 
 - Job markets show us that there is demand for people with certain _skills_, so this demonstrates to us that [Market Risk}() is as applicable to [Internal Models]() containing certain information as it is to products containing [Features](Feature-Risk).
 - And, we're all familiar with _memes_.

> tbd meme definition


Therefore, we should be able to track the rise-and-fall of _ideas_ much as we can track stock prices.  And in effect, this is what [Google Trends]() does.  In the graph below, we can see the relative popularity of two search terms over time. 

tbd search terms google trends

### Metrics

Let's dive into a specific example now: someone finds a useful new metric that helps in evaluating performance. It might be:

- **SLOC (Source Lines Of Code)**: i.e. the number of lines of code each developer writes per day/week whatever.
- **Function Points**: the number of function points a person on the team completes, each sprint.
- **Code Coverage**: the number of lines of code exercised by unit tests.
- **Response Time**: the time it takes to respond to an emergency call, say, or to go from a feature request to production.
- **Release cadence**:  number of releases a team performs, per month, say.

With some skill, they may be able to _correlate_ this metric against some other more abstract measure of success.  For example:
- "quality is correlated with more releases" 
- "user-satisfaction is correlated with SLOC"
- "response time is correlated with revenue"

Because the _thing on the left_ being is immediate and easier to measure than _the thing on the right_, it becomes used as a proxy (or, Map) for the thing they are really interested in (the Territory).  At this point, it's _easy_ to communicate this idea with the rest of the team, and _the market value of the idea is high_:  it is a useful representation of reality, which is shown to be accurate at a particular point in time. 
 
But _correlation_ doesn't imply _causation_.  The _cause_ might be different:  
 - quality and number of releases might both be down to the simplicity of the product.
 - user satisfaction and SLOC might both be down to the calibre of the developers.
 - response time and revenue might both be down to clever team planning.
 
Metrics are _seductive_ because they simplify reality and are easily communicated.  But they _inherently_ contain [Map and Territory Risk](): By relying _only_ on the metrics, you're not really _seeing_ the reality.  The devil is in the detail. 

## Evolution

The section on [Communication Risk]() introduced the following model for ideas:

![Spread of information between [Internal Models]()](images/generated/communication_marketing.png)

But what happens next?   As we saw in [Boundary Risk](), the **Peter Principle** applies, people will use dependencies up to the point when they start breaking down.  

In the case of metrics, this is where they start being used for more than just indicators, but as measures of performance or targets:
 - If a team is _told_ to do lots of releases, they will perform lots of releases *at the expense of something else*.
 - If team members are promoted according to SLOC, they will make sure their code takes up as many lines as possible.
 - In the UK, when ambulances were asked to respond to all emergency calls within a short window, cars and bicycles were employed as ambulances too [tbd].
  
You are probably nodding your head at these examples.  _Of course_ SLOC is a terrible measure performance!  We're not that stupid anymore.  The problem is, it's not so much the _choice_ of metric, but the fact that _all_ metrics merely approximate reality with a few numbers.  The map is _always_ simpler than the territory, therefore there can be no perfect metrics.

In the same way that [markets evolve to demand more features](), our behaviour evolves to incorporate new ideas.  The more popular an idea is, the more people will modify their behaviour as a result of it, and the more the world will change.   Will the idea still be useful as the world adapts?   

### Hype Cycles

One way this manifests itself in the world is though the [Hype Cycle](), as demonstrated here:

tbd.   hype cycle.

tbd. describe this with relation to M&T risk.

FacebooK?

tbd.  diagram showing new idea getting used more and more, reality changing as a result, idea is rendered less useful.


## Humans and Machines

The _qualities_ of [Map and Territory Risk]() change as we shift our focus from _people_ to _machines_.   Whereas people can be expected show scepticism to new (unlikely) information, our databases accept it unquestioningly.  _Forgetting_ is an everyday, usually benign part of our human [Internal Model](), but for software systems it is a production crisis involving 3am calls and backups.  

For Humans, [Map and Territory Risk]() is exacerbated by [cognitive biases]():

> tbd cognitive bias

Here are some examples:

It's tempting to think that [Map And Territory Risk](Map-And-Territory-Risk) is something that happens to someone else, and that you are going to be immune to it.   Example in the workplace, the release.





## The Onion Of Bullshit

**Map-And-Territory Risk** "trickles down" through an organisation, in what I term "The Onion Of Bullshit".  In which successive layers of the organisational heirarchy imposed worse and worse.    Here's how this came about in a bank I worked at: 

- My team had been tasked with building automated "smoke tests" of an application.  But this was bullshit.  We only needed to build these _at all_ because the application was so complex.  The reason it was so complex was...
- The application was being designed within a "Framework" constructed by the department.  However, the framework was only being used by this one application.  Building a "reuasable" framework which is only used by a single application is bullshit.  But, we had to do this because...
- The organisational structure was created along a "matrix", with "business function" on one axis and "functional area" on another.   Although we were only building the application for a single business function, it was expected to cater with all the requirements from the an entire "functional area".  This was bullshit too, because
- The matrix structure was largely the legacy of a recent merger with another department.  As [Conway's Law]() predicts, our software therefore had to reflect this structure.  But this was bullshit because
- The matrix structure didn't represent reality in any useful way.  It was designed to pacify the budget committee at the higher level, and try to demonstrate attributes such as _control_ and _governance_.  But this was bullshit too, because
- The budget that was given to our department was really based on how much fear the budget holders currently had of the market regulators.  But this was bullshit too, because
- At a higher level, the executives had realised that our department wasn't one of the banks strategic strengths, and was working to close it all down anyway.

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

- Everyone can see this system is broken, but no-one can change it because they are all trapped within it. 
- The onion is a better situation - at least the people at the top can do something.  

## Picking Projects

Introduce Rapid Development example here?
how to pick projects
how to spot vanity projects
how to spot where the Goal In Mind is hopelessly ill-thought-through.
following the rules more important than getting things done.  
Head in the sand
Bullshit jobs


