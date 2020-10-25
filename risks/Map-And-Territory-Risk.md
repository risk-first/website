
---
title: Map And Territory Risk
description: Risks due to the differences between reality and the internal model of reality, and the assumption that they are equivalent. 
url: https://riskfirst.org/risks/Map-And-Territory-Risk

featured: 
  class: bg2
  element: '<risk class="map-and-territory" />'
order: 13
categories:
 - Risks
redirect_from: 
 - /Map-And-Territory-Risk
---

# Map And Territory Risk

As we discussed in the [Communication Risk](Communication-Risk.md#misinterpretation-risk) section, our understanding of the world is informed by abstractions we create and the names we give them.  <!-- tweet-end -->

For example, <!-- tweet-start -->Risk-First is about naming _risks_ within software development, so we can discuss and understand them better.<!-- tweet-end -->

Our [Internal Models](../thinking/Glossary.md#internal-model) of the world are constructed from these abstractions and their relationships.

![Maps and Territories, and Communication happening between them](/images/generated/risks/map-and-territory/communication.png) 

As the diagram above shows, there is a translation going on here: observations about the arrangement of _atoms_ in the world are _communicated_ to our [Internal Models](../thinking/Glossary.md#internal-model) and stored as patterns of _information_ (measured in bits and bytes). <!-- tweet-end --> 

We face [Map And Territory Risk](Map-And-Territory-Risk.md) because we base our behaviour on our [Internal Models](../thinking/Glossary.md#internal-model) rather than reality itself.  It comes from the expression "Confusing the Map for the Territory", attributed to Alfred Korzybski:

> "Polish-American scientist and philosopher Alfred Korzybski remarked that "the map is not the territory"  and that "the word is not the thing", encapsulating his view that an abstraction derived from something, or a reaction to it, is not the thing itself. Korzybski held that many people _do_ confuse maps with territories, that is, confuse models of reality with reality itself." - [Map-Territory Relation, _Wikipedia_](https://en.wikipedia.org/wiki/Map–territory_relation)

![Map And Territory Risk defined](/images/generated/risks/map-and-territory/map-and-territory-risk.png)

As the above diagram shows, there are two parts to this risk, which we are going to examine in this section:  

 - **The internal model may be insufficient.** This leads to issues along the same axes we introduced in [Feature Risk](Feature-Risk.md) (that is Fitness, Audience and Evolution).  We'll look at the examples of SatNavs, Software Metrics and Hype-Cycles along the way to illustrate this.
 - **The assumption that the model is right.** We're going to look at [Map and Territory Risk](Map-And-Territory-Risk.md) within the contexts of **machines**, **people**, **hierarchies** and **markets**.

## Fitness

In the [Feature Risk](Feature-Risk.md) section we looked at ways in which our software project might have risks due to having _inappropriate_ features ([Feature Fit Risk](Feature-Risk.md#feature-fit-risk)), _broken_ features ([Feature Implementation Risk](Feature-Risk.md#implementation-risk)) or _too many of the wrong_ features ([Conceptual Integrity Risk](Feature-Risk.md#conceptual-integrity-risk)).  Let's see how these same categories also apply to [Internal Models](../thinking/Glossary.md#internal-model).

### Example: The SatNav

![Sat Nav Blunder Sends Asda Van Crashing Narrow Footpath - Telegraph Newspaper](/images/sat_nav.png)

In the headline above, taken from [the Telegraph newspaper](https://www.telegraph.co.uk/news/newstopics/howaboutthat/6413887/Asda-van-crashes-after-sat-nav-sends-driver-to-narrow-footpath.html), the driver _trusted_ the SatNav to such an extent that he didn't pay attention to the road-signs around him and ended up getting stuck.  

This wasn't borne of stupidity, but experience:  SatNavs are pretty reliable. _So many times_ the SatNav had been right, that the driver stopped _questioning its fallibility_.  

There are two [Map and Territory Risks](Map-And-Territory-Risk.md) here:

- The [Internal Model](../thinking/Glossary.md#internal-model) of the _SatNav_ contained information that was wrong:  the track had been marked up as a road, rather than a path.  
- The [Internal Model](../thinking/Glossary.md#internal-model) of the _driver_ was wrong:   his abstraction of "the SatNav is always right" turned out to be only _mostly_ accurate.  

You could argue that both the SatNav and the Driver's _[Internal Model](../thinking/Glossary.md#internal-model)_ had bugs in them.  That is, they both suffer the [Feature Implementation Risk](Feature-Risk.md#implementation-risk) we saw in the [Feature Risk](Feature-Risk.md) section.  If a SatNav has too much of this, you'd end up not trusting it, and getting a new one.  With your _personal_ [Internal Model](../thinking/Glossary.md#internal-model), you can't buy a new one, but you may learn to _trust your assumptions less_.

![Some examples of Feature Fit Risks, as manifested in the Internal Model](/images/generated/risks/map-and-territory/map_and_territory_table_1.png)

The diagram above shows how types of [Feature Fit Risk](Feature-Risk.md) can manifest in the [Internal Model](../thinking/Glossary.md#internal-model). 

## Audience

Communication allows us to _share_ information between [Internal Models](../thinking/Glossary.md#internal-model) of a whole audience of people.  The [Communication Risk](Communication-Risk.md) and [Coordination Risk](Coordination-Risk.md) sections covered the difficulties inherent in aligning [Internal Models](../thinking/Glossary.md#internal-model) so that they cooperate.

![Relative popularity of "Machine Learning" and "Big Data" as search terms on [Google Trends](https://trends.google.com), 2011-2018 ](/images/google-trends.png)
 
But how does [Map and Territory Risk](Map-And-Territory-Risk.md) apply across a population of [Internal Models](../thinking/Glossary.md#internal-model)?   Can we track the rise-and-fall of _ideas_ like we track stock prices?  In effect, this is what [Google Trends](https://trends.google.com) does.  In the chart above, we can see the relative popularity of two search terms over time.  This is probably as good an indicator as any of the changing popularity of an abstraction within an audience.

### Example: Map And Territory Risk Drives The Hype Cycle

Most ideas (and most products) have a slow, hard climb to wide-scale adoption.  But some ideas seem to disperse much more rapidly and are picked up quickly because they are exciting, having greater "memetic potential" within a population.  One way this evolution manifests itself in the world is though the [Hype Cycle](https://en.wikipedia.org/wiki/Hype_cycle):

> "The hype cycle is a branded graphical presentation developed and used by the American research, advisory and information technology firm Gartner, for representing the maturity, adoption and social application of specific technologies. The hype cycle provides a graphical and conceptual presentation of the maturity of emerging technologies through five phases." - [Hype Cycle, _Wikipedia_](https://en.wikipedia.org/wiki/Hype_cycle)

![Hype Cycle, along with Map & Territory Risk](/images/numbers/hype1.png)

The five phases (and the "Hype" itself as the thick black line) are shown in the chart above.  We start off at the "Technology Trigger", moving to the "Peak of Inflated Expectations", then to the "Trough of Disillusionment" and finally up the "Slope of Enlightenment" to the "Plateau of Productivity".  

The concept of [Map and Territory Risk](Map-And-Territory-Risk.md) actually helps explain why this curve has the shape it does.  To see why, let's consider each line in turn:

 - The **Awareness** (or enthusiasm for) the idea within the population is the dotted line.
 
 - The **Knowledge** (or _understanding_) of the idea within the audience (a [Learning Curve](Communication-Risk.md#learning-curve-risk), if you will) is the dashed line.  Both of these are modelled with [Cumulative Distribution](https://en.wikipedia.org/wiki/Cumulative_distribution_function#Use_in_statistical_analysis) functions which are often used for modelling the spread of a phenomena (disease, product uptake, idea) within a population.  As you would expect, **Knowledge** increases less rapidly than **Awareness**. 

 - **Map And Territory Risk** is the difference between **Awareness** and **Knowledge**.  It's highest point is where the **Awareness** of the idea is farthest from the **Knowledge** of it.  

 - **Hype** is calculated here as being the **Awareness** line, subtracting **Map and Territory Risk** from a point lagging behind the current time (since it takes time to appreciate this risk).  As the population appreciates more [Map and Territory Risk](Map-And-Territory-Risk.md), **Hype** decreases.   
 
At the point where the effect of [Map and Territory Risk](Map-And-Territory-Risk.md) is at its greatest we end up in the "Trough of Disillusionment".  Eventually, we escape the trough as **Knowledge** and understanding of the idea increases, reducing [Map and Territory Risk](Map-And-Territory-Risk.md).
 
![Hype Cycle 2: more even growth of Awareness and Knowledge means no "Trough of Disillusionment"](/images/numbers/hype2.png)

As you might expect, the "Trough of Disillusionment" exists because the **Awareness** of the idea and the **Knowledge** about it increase at different rates.
 
Where the **Awareness** and **Knowledge** grow more evenly together, there is no spike in [Map and Territory Risk](Map-And-Territory-Risk.md) and we don't see the corresponding "Trough of Disillusionment" at all, as shown in the above chart.

![Audience Feature Risks, as manifested in the Internal Model](/images/generated/risks/map-and-territory/map_and_territory_table_2.png)

The diagram above shows how Audience-type [Feature Risks](Feature-Risk.md) can manifest in the Internal Model. (The Hype Cycle model is available in **Numbers** format [here](https://github.com/risk-first/website/blob/master/numbers/RiskMatrix.numbers).)

## Evolution

So concepts and abstractions spread through an audience.  But what happens next?   

 - People will use and abuse new ideas up to the point when they start breaking down. (We also discussed this as the **Peter Principle** in [Boundary Risk](Boundary-Risk.md).)  
 - At the same time, reality itself _evolves_ in response to the idea:  the new idea displaces old ones,  behaviour changes, and the idea itself can change. 

### Example: Metrics

Let's dive into a specific example now: someone finds a useful new metric that helps in evaluating performance. 

It might be:

- **Source Lines Of Code (SLOC)**: i.e. the number of lines of code each developer writes per day/week whatever.
- **Function Points**: the number of function points a person on the team completes, each sprint.
- **Code Coverage**: the number of lines of code exercised by unit tests.
- **Response Time**: the time it takes to respond to an emergency call, say, or to go from a feature request to production.
- **Release Cadence**:  number of releases a team performs, per month, say.

With some skill, they may be able to _correlate_ this metric against some other more abstract measure of success.  For example:

 - "quality is correlated with more releases" 
 - "user-satisfaction is correlated with SLOC"
 - "revenue is correlated with response time"

Because the _thing on the right_ is easier to measure than _the thing on the left_, it becomes used as a proxy (or, Map) for the thing they are really interested in (the Territory).  At this point, it's _easy_ to communicate this idea with the rest of the team, and _the market value of the idea is high_:  it is a useful representation of reality, which is shown to be accurate at a particular point in time. 
 
But _correlation_ doesn't imply _causation_.  The _cause_ might be different:
  
 - Quality and number of releases might both be down to the simplicity of the product.
 - User satisfaction and SLOC might both be down to the calibre of the developers.
 - Response time and revenue might both be down to clever team planning.
 
Metrics are seductive because they simplify reality and are easily communicated.  But they _inherently_ contain [Map and Territory Risk](Map-And-Territory-Risk.md): by relying _only_ on the metrics, you're not really _seeing_ the reality.  

The devil is in the detail.

### Reality Evolves

In the same way that [markets evolve to demand more features](Scarcity-Risk.md#red-queen-risk), our behaviour evolves to incorporate new ideas.  The more popular an idea is, the more people will modify their behaviour as a result of it, and the more the world will change.   

In the case of metrics this is where they start being used for more than just indicators but as measures of performance or targets:

 - If a team is _told_ to do lots of releases, they will perform lots of releases *at the expense of something else*.
 - If team members are promoted according to SLOC, they will make sure their code takes up as many lines as possible.
 - In the UK, ambulances were asked to wait before admitting patients to Emergency wards, in order that hospitals could [meet their targets](https://en.wikipedia.org/wiki/NHS_targets).
 
> "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." - [Goodhart's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Goodharts_law)
  
Some of this seems obvious:  _Of course_ SLOC is a terrible measure performance!  We're not that stupid anymore.  The problem is, it's not so much the _choice_ of metric, but the fact that _all_ metrics merely approximate reality with a few numbers.  The map is _always_ simpler than the territory, therefore there can be no perfect metrics.

Will the idea still be useful as the world adapts?   Although the Hype Cycle model doesn't cover it, ideas and products all eventually have their day and decline in usefulness.

### Bad Ideas

There are plenty of ideas which _seem a really good idea at the time_ but then end up being terrible.  It's only as we _improve our internal model_ and realize the hidden risks that we stop using them.  While SLOC is a minor offender, [CFCs](https://en.wikipedia.org/wiki/Chlorofluorocarbon) or [Leaded Petrol](https://en.wikipedia.org/wiki/Tetraethyllead) are more significant examples.  

![Hype Cycle for something that turns out to be a _bad_ idea](/images/numbers/hype3.png)

The above chart shows an initially promising idea that turns out to be terrible.  That is, the **Knowledge** value of it ends up being significantly less than the **Map and Territory Risk** of using it.  Hence, there is a "Period of Inoculation" where the population realise their mistake - there is "negative hype" as they work to phase out the offending idea until it's forgotten.

SLOC is not on its own a _bad idea_, but using it as a metric for developer productivity _is_.

> "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” - [Bill Gates](https://www.goodreads.com/quotes/536587)

![Evolution Feature Risks, as manifested in the Internal Model](/images/generated/risks/map-and-territory/map_and_territory_table_3.png)

The diagram above shows how Evolution-type [Feature Risks](Feature-Risk.md) can manifest in the Internal Model.

## Humans and Machines

In the example of the SatNav, we saw how the _quality_ of [Map and Territory Risk](Map-And-Territory-Risk.md) is different for _people_ and _machines_.   Whereas people _should_ be expected show skepticism for new (unlikely) information our databases accept it unquestioningly.  _Forgetting_ is an everyday, usually benign part of our human [Internal Model](../thinking/Glossary.md#internal-model), but for software systems it is a production crisis involving 3am calls and backups.  

For Humans, [Map and Territory Risk](Map-And-Territory-Risk.md) is exacerbated by [cognitive biases](https://en.wikipedia.org/wiki/List_of_cognitive_biases):

> "Cognitive biases are systematic patterns of deviation from norm or rationality in judgement, and are often studied in psychology and behavioural economics." - [Cognitive Bias, _Wikipedia_](https://en.wikipedia.org/wiki/List_of_cognitive_biases)

There are _lots_ of cognitive biases.  But let's just mention some that are relevant to [Map and Territory Risk](Map-And-Territory-Risk.md):

- **Availability Heuristic**: people overestimate the importance of knowledge they have been exposed to. 
- **The Ostrich Effect**:  which is where dangerous information is ignored or avoided because of the emotions it will evoke.
- **Bandwagon Effect**:  people like to believe things that other people believe.  (Could this be a factor in the existence of the Hype Cycle?)

## Hierarchical Organisations

[Map And Territory Risk](Map-And-Territory-Risk.md) "trickles down" through an organisation.  The higher levels have an out-sized ability to pervert the incentives at lower levels because once an organisation begins to pursue a "bullshit objective" the whole company can align to this.  

[The Huffington Post](https://www.huffingtonpost.com/otto-scharmer/the-fish-rots-from-the-he_b_8208652.html) paints a brilliant picture of how Volkswagen managed to get caught faking their emissions tests.  As they point out:

> "The leadership culture of VW probably amplified the problem by disconnecting itself from the values and trajectory of society, by entrenching in what another executive in the auto industry once called a “bullshit-castle”... No engineer wakes up in the morning and thinks, OK, today I want to build devices that deceive our customers and destroy our planet. Yet it happened. Why? Because of hubris at the top. " - [Otto Scharmer, _Huffington Post_](https://www.huffingtonpost.com/otto-scharmer/the-fish-rots-from-the-he_b_8208652.html).

This article identifies the following process:

- **De-sensing**: VW Executives ignored _The Territory_ of society around them (such as the green movement), ensuring their maps were out of date.  The top-down culture made it hard for reality to propagate back up the hierarchy.  
- **Hubris/Absencing**:  they pursued their own metrics of _volume_ and _cost_, rather than seeking out others (a la the Availability Heuristic Bias).  That is, focusing on their own _Map_, which is _easier_ than checking the _Territory_. 
- **Deception**:  backed into a corner, engineers had no choice but to find "creative" ways to meet the metrics.
- **Destruction**: eventually, the truth comes out, to the detriment of the company, the environment and the shareholders.  As the article's title summarizes "A fish rots from the head down".

## Markets

We've considered [Map and Territory Risk](Map-And-Territory-Risk.md) for individuals, teams and organisations.  [Inadequate Equilibria](https://equilibriabook.com) by Eleizer Yudkovsky, looks at how perverse incentive mechanisms break not just departments, but entire societal systems.  He highlights one example involving _academics_ and _grantmakers_ in academia:

 - It's not very apparent which academics are more worthy of funding.
 - One proxy is what they've published (scientific papers) and where they've published (journals).
 - Universities want to attract research grants, and the best way to do this is to have the best academics.
 - Because "best" isn't measurable, they use the publications proxy.
 - Therefore immense power rests in the hands of the journals, since they can control this metric.
 - Therefore journals are able to charge large amounts of money to universities for subscriptions.
 
> "Now consider the system of scientific journals... Some journals are prestigious. So university hiring committees pay the most attention to publications in that journal. So people with the best, most interesting-looking publications try to send them to that journal. So if a university hiring committee paid an equal amount of attention to publications in lower-prestige journals, they’d end up granting tenure to less prestigious people. Thus, the whole system is a stable equilibrium that nobody can unilaterally defy except at cost to themselves." - [Inadequate Equilibria, _Eleizer Yudkovsky_](https://equilibriabook.com/molochs-toolbox/)

As the book points out, while everyone _persists_ in using an inadequate abstraction, the system is broken.  However, [Coordination](Coordination-Risk.md) would be required for everyone to _stop_ doing it this way, which is hard work.  (Maps are easier to fix in a top-down hierarchy.)

Scientific journals are a single example taken from a closely argued book investigating lots of cases of this kind.  It's worth taking the time to read a couple of the chapters on this interesting topic.  (Like Risk-First it is available to read online).

As usual, this section forms a grab-bag of examples in a complex topic.  But it's time to move on as there is one last stop we have to make on the [Risk Landscape](../thinking/Glossary.md#risk-landscape), and that is to look at [Operational Risk](Operational-Risk.md).  