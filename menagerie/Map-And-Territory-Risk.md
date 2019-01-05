![For Review](images/state/for-review.png)

As we discussed in the [Communication Risk](Communication-Risk#misinterpretation-risk) section, our understanding of the world is informed by the names we give things and the abstractions we create.  <!-- tweet-end -->

In the same way, <!-- tweet-start -->Risk-First is about naming risks within software development and calling them out.<!-- tweet-end -->

Our [Internal Models](Glossary#internal-model)  of the world based on these abstractions, and their relationships.

So there is a translation going on here: observations about the arrangement of _atoms_ in the world get turned into patterns of _information_ (measured in bits and bytes). <!-- tweet-end --> 

![Maps and Territories, and Communication happening between them](images/generated/risks/map-and-territory/communication.png) 

Like [Trust & Belief Risk](Communication-Risk#trust--belief-risk) and [Learning-Curve Risk](Communication-Risk#learning-curve-risk), [Map And Territory Risk](Map-And-Territory-Risk) is an [Internal Model Risk](Communication-Risk#internal-models), and is the risk we face because we base our behaviour on our [Internal Models](Glossary#internal-model) rather than reality itself.  It comes from the expression "Confusing the Map for the Territory", attributed to Alfred Korzybski:

> "Polish-American scientist and philosopher Alfred Korzybski remarked that "the map is not the territory"  and that "the word is not the thing", encapsulating his view that an abstraction derived from something, or a reaction to it, is not the thing itself. Korzybski held that many people _do_ confuse maps with territories, that is, confuse models of reality with reality itself." - [Map-Territory Relation, _Wikipedia_](https://en.wikipedia.org/wiki/Map–territory_relation)

In this section, we're going to make a case for analysing [Map and Territory Risk](Map-And-Territory-Risk) along the same axes we introduced for [Feature Risk](Feature-Risk), that is **Fitness**, **Audience** and **Evolution**.  After that, we are going to widen the scope by looking at [Map and Territory Risk](Map-And-Territory-Risk) within the context of **machines**, **people**, **hierarchies** and **markets**.

## Fitness

![Sat Nav Blunder Sends Asda Van Crashing Narrow Footpath - Telegraph Newspaper](images/sat_nav.png)

In the headline above, taken from [the Telegraph newspaper](https://www.telegraph.co.uk/news/newstopics/howaboutthat/6413887/Asda-van-crashes-after-sat-nav-sends-driver-to-narrow-footpath.html), the driver _trusted_ the SatNav to such an extent that he didn't pay attention to the road-signs around him, and ended up getting stuck.  

This wasn't borne of stupidity, but experience:  SatNavs are pretty reliable. _So many times_ the SatNav had been right, that the driver stopped _questioning its fallibility_.  

So, there are two [Map and Territory Risks](Map-And-Territory-Risk) here:

- The [Internal Model](Glossary#internal-model) of the _SatNav_ contained information that was wrong:  the track had been marked up as a road, rather than a path.  
- The [Internal Model](Glossary#internal-model) of the _driver_ was wrong:   his abstraction of "the SatNav is always right" turned out to be only _mostly_ accurate.  

We've already looked in detail at the [Dependency Risks](Dependency-Risk) involved in relying on something like a SatNav, in the [Software Dependency Risk](Software-Dependency-Risk) section.  But here, we are really looking at the _[Internal Models](Glossary#internal-model) themselves_ as a source of [Dependency Risk](Dependency-Risk) too.

You could argue that the SatNav and the Driver's [Internal Model](Glossary#internal-model) had bugs in them.  That is, they both suffer the [Feature Implementation Risk](Feature-Risk#implementation-risk) we saw in the [Feature Risk](Feature-Risk) section.  If a SatNav has too much of this, you'd end up not trusting it, and getting a new one.  With your _personal_ [Internal Model](Glossary#internal-model), you can't buy a new one, but you may learn to _trust your assumptions less_.

In the [Feature Risk](Feature-Risk) section, we broke down [Feature Risk](Feature-Risk) on three axes:  **Fitness**, **Evolution** and **Audience**.  

![Feature Risk, as manifested in the Internal Model](images/generated/risks/map-and-territory/map_and_territory_table_1.png)

The diagram above does this again, showing how type of [Feature Fit Risk](Feature-Risk) can manifest in the [Internal Model](Glossary#internal-model). 

## Audience

![Audience Feature Risks, as manifested in the Internal Model](images/generated/risks/map-and-territory/map_and_territory_table_2.png)

We already know a lot about [Internal Models](Glossary#internal-model) and Audience, as these have been the subject of previous sections:

 - We know from looking at [Communication Risk](Communication-Risk) that communication allows us to _share_ information between [Internal Models](Glossary#internal-model). 
 - We know from [Coordination Risk](Coordination-Risk) the difficulties inherent in aligning [Internal Models](Glossary#internal-model) so that they cooperate.
 - Job markets show us that there is demand for people with certain _skills_.  This demonstrates to us that [Market Risk](Feature-Risk#market-risk) is as applicable to [Internal Models](Glossary#internal-model) containing certain information as it is to products containing [Features](Feature-Risk).  This was the focus of the [Ecosystem](boundary-risk#Lock-In) discussion in [Boundary Risk](Boundary-Risk).
 
![Relative popularity of "Machine Learning" and "Big Data" as search terms on [Google Trends](https://trends.google.com), 2011-2018 ](images/google-trends.png)
 
Therefore, we should be able to track the rise-and-fall of _ideas_ much as we can track stock prices.  And in effect, this is what [Google Trends](https://trends.google.com) does.  In the chart above, we can see the relative popularity of two search terms over time.  This is probably as good an indicator as any of the audience for an abstraction at any point in time.

### Example: Hype Cycles

Most ideas (and most products) have a slow, hard climb to wide-scale adoption.  But some ideas seem to disperse much more rapidly and are picked up quickly because they are exciting and promising, having greater "memetic potential" within society.  One way this evolution manifests itself in the world is though the [Hype Cycle](https://en.wikipedia.org/wiki/Hype_cycle):

> "The hype cycle is a branded graphical presentation developed and used by the American research, advisory and information technology firm Gartner, for representing the maturity, adoption and social application of specific technologies. The hype cycle provides a graphical and conceptual presentation of the maturity of emerging technologies through five phases." - [Hype Cycle, _Wikipedia_](https://en.wikipedia.org/wiki/Hype_cycle)

![Hype Cycle, along with Map & Territory Risk](images/numbers/hype1.png)

The five phases (and the "Hype" itself as the thick black line) are shown in the chart above.  We start off at the "Technology Trigger", moving to the "Peak of Inflated Expectations", then to the "Trough of Disillusionment" and finally to the "Plateau of Productivity".  

The concept of [Map and Territory Risk](Map-And-Territory-Risk) actually helps explain why this curve has the shape it does.  The chart above also shows where the hype originates:

 - The **awareness** of the idea within the audience as a dotted line.
 - The **knowledge** of the idea by the audience (a [Learning Curve](Communication-risk#learning-curve-risk), if you will) as a dashed line.
 
Both of these are modelled with [Cumulative Distribution](https://en.wikipedia.org/wiki/Cumulative_distribution_function#Use_in_statistical_analysis) curves, which are often used for modelling the spread of a phenomena (disease, product uptake, idea) within a population.  From these two things, we can figure out where our maximum [Map and Territory Risk](Map-And-Territory-Risk) lies:  it's the point where awareness of an idea is farthest from the understanding of it.  

This [Map and Territory Risk](Map-And-Territory-Risk) acts as a "brake" on the **hype** around the idea.  In the diagram, our "hype" curve is calculated as being the same as the "saturation" line, with a subtraction due to [Map and Territory Risk](Map-And-Territory-Risk).  As you can see, "hype" drops fastest at the point where [Map and Territory Risk](Map-And-Territory-Risk) is at it's greatest, and we end up in the "Trough of Disillusionment". 

![Hype Cycle 2: more even growth of  means no "Trough of Disillusionment"](images/numbers/hype2.png)

As you might expect, the "Trough of Disillusionment" exists because the "saturation" of the idea and the "amount known" about it increase at different rates.
 
Where the **saturation** and **knowledge** grow more evenly together, there is no spike in [Map and Territory Risk](Map-And-Territory-Risk) and we don't see the corresponding "Trough of Disillusionment" at all, as shown in the above chart.

## Evolution

![Spread of information between Internal Models](images/generated/risks/communication/communication_marketing.png)

The section on [Communication Risk](Communication-Risk) introduced the above diagram for the spread of ideas.  But what happens next?   As we saw in [Boundary Risk](Boundary-Risk), the **Peter Principle** applies, people will use dependencies up to the point when they start breaking down.  

### Example: Metrics

Let's dive into a specific example now: someone finds a useful new metric that helps in evaluating performance. 

It might be:

- **Source Lines Of Code (SLOC)**: i.e. the number of lines of code each developer writes per day/week whatever.
- **Function Points**: the number of function points a person on the team completes, each sprint.
- **Code Coverage**: the number of lines of code exercised by unit tests.
- **Response Time**: the time it takes to respond to an emergency call, say, or to go from a feature request to production.
- **Release cadence**:  number of releases a team performs, per month, say.

With some skill, they may be able to _correlate_ this metric against some other more abstract measure of success.  For example:

 - "quality is correlated with more releases" 
 - "user-satisfaction is correlated with SLOC"
 - "revenue is correlated with response time"

Because the _thing on the right_ is easier to measure than _the thing on the left_, it becomes used as a proxy (or, Map) for the thing they are really interested in (the Territory).  At this point, it's _easy_ to communicate this idea with the rest of the team, and _the market value of the idea is high_:  it is a useful representation of reality, which is shown to be accurate at a particular point in time. 
 
But _correlation_ doesn't imply _causation_.  The _cause_ might be different:
  
 - Quality and number of releases might both be down to the simplicity of the product.
 - User satisfaction and SLOC might both be down to the calibre of the developers.
 - Response time and revenue might both be down to clever team planning.
 
![Evolution Feature Risks, as manifested in the Internal Model](images/generated/risks/map-and-territory/map_and_territory_table_3.png)
 

Metrics are seductive because they simplify reality and are easily communicated.  But they _inherently_ contain [Map and Territory Risk](Map-and-territory-risk): by relying _only_ on the metrics, you're not really _seeing_ the reality.  

The devil is in the detail.

### Reality Evolves

In the same way that [markets evolve to demand more features](Scarcity-Risk#red-queen-risk), our behaviour evolves to incorporate new ideas.  The more popular an idea is, the more people will modify their behaviour as a result of it, and the more the world will change.   

In the case of metrics, this is where they start being used for more than just indicators, but as measures of performance or targets:

 - If a team is _told_ to do lots of releases, they will perform lots of releases *at the expense of something else*.
 - If team members are promoted according to SLOC, they will make sure their code takes up as many lines as possible.
 - In the UK, ambulances were asked to wait before admitting patients to Emergency wards, in order that hospitals could [meet their targets](https://en.wikipedia.org/wiki/NHS_targets).
 
> "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." - [Goodhart's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Goodharts_law)
  
Some of this seems obvious:  _Of course_ SLOC is a terrible measure performance!  We're not that stupid anymore.  The problem is, it's not so much the _choice_ of metric, but the fact that _all_ metrics merely approximate reality with a few numbers.  The map is _always_ simpler than the territory, therefore there can be no perfect metrics.

Will the idea still be useful as the world adapts?   Although the Hype Cycle model doesn't cover it, ideas and products all eventually have their day and decline in usefulness.

### Bad Ideas

There are plenty of ideas which _seem a really good idea at the time_ but then end up being terrible.  It's only as we _improve our internal model_ and realize the hidden risks that we stop using them.  While SLOC is a minor offender, [CFCs](https://en.wikipedia.org/wiki/Chlorofluorocarbon) or [Leaded Petrol](https://en.wikipedia.org/wiki/Tetraethyllead) are more significant examples.  

![Hype Cycle for something that turns out to be a _bad_ idea](images/numbers/hype3.png)

The above chart shows an initially promising idea that turns out to be terrible, and there is a "Period of Inoculation" where the population realise their mistake.  There is "negative hype" as they work to phase out the offending idea.

SLOC is not on it's own a _bad idea_, but using it as a metric for developer productivity _is_:

> "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” - [Bill Gates](https://www.goodreads.com/quotes/536587)

## Humans and Machines

In the example of the SatNav, we saw how the _quality_ of [Map and Territory Risk](Map-And-Territory-Risk) is different for _people_ and _machines_.   Whereas people _should_ be expected show skepticism to new (unlikely) information, our databases accept it unquestioningly.  _Forgetting_ is an everyday, usually benign part of our human [Internal Model](Glossary#internal-model), but for software systems it is a production crisis involving 3am calls and backups.  

For Humans, [Map and Territory Risk](Map-And-Territory-Risk) is exacerbated by [cognitive biases](https://en.wikipedia.org/wiki/List_of_cognitive_biases):

> "Cognitive biases are systematic patterns of deviation from norm or rationality in judgement, and are often studied in psychology and behavioural economics." - [Cognitive Bias, _Wikipedia_](https://en.wikipedia.org/wiki/List_of_cognitive_biases)

There are _lots_ of cognitive biases.  But let's just look at a couple that are relevant to [Map and Territory Risk](Map-And-Territory-Risk):

- **Availability Heuristic**: people overestimate the importance of knowledge they have been exposed to. 
- **The Ostrich Effect**:  which is where dangerous information is ignored or avoided because of the emotions it will evoke.
- **Bandwagon Effect**:  people like to believe things that other people believe.  (Could this be a factor in the existence of the Hype Cycle?)

## Hierarchical Organisations

[Map And Territory Risk](Map-And-Territory-Risk) "trickles down" through an organisation.  The higher levels have an out-sized ability to pervert the incentives at lower levels because once an organisation begins to pursue a "bullshit objective", the whole company can align to this.  

[The Huffington Post](https://www.huffingtonpost.com/otto-scharmer/the-fish-rots-from-the-he_b_8208652.html) paints a brilliant picture of how Volkswagen managed to get caught faking their emissions tests.  As they point out:

> "The leadership culture of VW probably amplified the problem by disconnecting itself from the values and trajectory of society, by entrenching in what another executive in the auto industry once called a “bullshit-castle”... No engineer wakes up in the morning and thinks: OK, today I want to build devices that deceive our customers and destroy our planet. Yet it happened. Why? Because of hubris at the top. " - [Otto Scharmer, _Huffington Post_](https://www.huffingtonpost.com/otto-scharmer/the-fish-rots-from-the-he_b_8208652.html).

This article identifies the following process:

- **De-sensing**: VW Executives ignored _The Territory_ society around them (such as the green movement), ensuring their maps were out of date.  The top-down culture made it hard for reality to propagate back up the hierarchy.  
- **Hubris/Absencing**:  they pursued their own metrics of _volume_ and _cost_, rather than seeking out others (a la the Availability Heuristic Bias).  That is, focusing on their own _Map_, which is _easier_ than checking the _Territory_. 
- **Deception**:  backed into a corner, engineers had no choice but to find "creative" ways to meet the metrics.
- **Destruction**: eventually, the truth comes out, to the detriment of the company, the environment and the shareholders.  As the article's title summarizes "A fish rots from the head down".

## Markets

So far, we've considered [Map and Territory Risk](Map-And-Territory-Risk) for individuals, teams and organisations.  [Inadequate Equilibria](https://equilibriabook.com) by Eleizer Yudkovsky, looks at how perverse incentive mechanisms break not just departments, but entire societal systems.  He highlights one example involving _academics_ and _grantmakers_ in academia:

 - It's not very apparent which academics are more worthy of funding.
 - One proxy is what they've published (scientific papers) and where they've published (journals).
 - Universities want to attract research grants, and the best way to do this is to have the best academics.
 - Because "best" isn't measurable, they use the publications proxy.
 - Therefore, immense power rests in the hands of the journals, since they can control this metric.
 - Therefore, journals are able to charge large amounts of money to universities for subscriptions.
 
> "Now consider the system of scientific journals... Some journals are prestigious. So university hiring committees pay the most attention to publications in that journal. So people with the best, most interesting-looking publications try to send them to that journal. So if a university hiring committee paid an equal amount of attention to publications in lower-prestige journals, they’d end up granting tenure to less prestigious people. Thus, the whole system is a stable equilibrium that nobody can unilaterally defy except at cost to themselves." - [Inadequate Equilibria, _Eleizer Yudkovsky_](https://equilibriabook.com/molochs-toolbox/)

As the book points out, while everyone _persists_ in using an inadequate abstraction, the system is broken.  However, [Coordination](Coordination-Risk) would be required for everyone to _stop_ doing it this way, which is hard work.  (At least within a top-down hierarchy, Maps can get fixed.)

This is a _small example_ from a larger, closely argued book investigating lots of examples of this kind.  It's worth taking the time to read a couple of the chapters on this interesting topic.  (Like Risk-First, it is available to read online).

As usual, this section forms a grab-bag of examples in a complex topic.  But it's time to move on as there is one last stop we have to make on the [Risk Landscape](Glossary#risk-landscape), and that is to look at [Operational Risk](Operational-Risk).  

The Hype Cycle model is available in **Numbers** format [here](https://github.com/risk-first/website/blob/master/RiskMatrix.numbers. 

Now, on to the last risk in our tour, [Operational Risk](Operational-Risk).