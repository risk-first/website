---
title: Internal Model Risk
description: Risks due to the differences between reality and an internal model of reality, and the assumption that they are equivalent. 

slug: /risks/Internal-Model-Risk
featured: 
  class: c
  element: '<risk class="internal-model" />'
sidebar_position: 14
tweet: yes
tags: 
 - Risks
 - Internal Model Risk
 - Model Risks
part_of: Operational Risk
---

<RiskIntro fm={frontMatter} />

As we discussed in the [Communication Risk](/tags/Communication-Risk) section, our understanding of the world is informed by abstractions we create and the names we give them.  Our [Internal Models](/tags/Internal-Model) of the world are constructed from these abstractions and their relationships.

So there is a translation going on here: observations about the arrangement of _atoms_ in the world are _communicated_ to our [Internal Models](/tags/Internal-Model) and stored as patterns of _information_ (measured in bits and bytes).  Therefore, we face [Internal Model Risk](/tags/Internal-Model-Risk) because we base our behaviour on our [Internal Models](/tags/Internal-Model) rather than reality itself.  This is "Confusing the Map for the Territory", attributed to Alfred Korzybski:

> "Polish-American scientist and philosopher Alfred Korzybski remarked that "the map is not the territory"  and that "the word is not the thing", encapsulating his view that an abstraction derived from something, or a reaction to it, is not the thing itself. Korzybski held that many people _do_ confuse maps with territories, that is, confuse models of reality with reality itself." - [Map-Territory Relation, _Wikipedia_](https://en.wikipedia.org/wiki/Map–territory_relation)

## Worked Example

![Internal Model Risk](/img/generated/risks/posters/internal-model-risk.svg) 

A large software firm struggles to hire effectively and feels it uses a lot of cycles trying to lure the best candidates.

They decide to apply machine learning to its hiring process, as shown in the diagram above, figuring that it can cut out a lot of the manual effort of screening CVs and application forms.  They use internal historical data to categorise candidates based on who was hired in the past, and then prioritise candidates for interview with the highest score.

But this is flawed, for the following reasons:

 - The training data they are using reflects _past hiring decisions_ and may not weight the types of people they want to attract in the future.
 - The approach lacks validation, as they're not comparing it with a manual process to see how the new and old systems compare.
 - They're likely to suffer from _diversity issues_ and hire people mismatched to the roles.
 - There may even be reputational or legal consequences as a result.

## Specific Threats

### 1.  Flawed Assumptions

**Threat**:  As seen above, flawed assumptions can work their way into software systems.  [Internal Model Risk](/tags/Internal-Model-Risk) is therefore amplified when the stakes are higher.

:::tip Anecdote Corner 1

In 1973, Fischer Black and Myron Scholes published their ground-breaking paper describing the [Black-Scholes-Merton model](https://en.wikipedia.org/wiki/Black–Scholes_model) for pricing options.  Pricing options (agreements to give someone the option to buy or sell something at a later date and price) had previously been hugely problematic, so the creation of a model that would do it correctly was a huge step forward and earned Merton and Scholes the 1997 Nobel Prize for Economics (Black had died in 1995 and was thus ineligible).  

Long-Term Capital Management (LTCM) was founded in 1994 and was, for a while, a hugely successful hedge fund.  Scholes and Merton sat on the board, which, along with incredible returns lent the organisation a strong reputation.  However, the models underlying their impressive returns were faulty: they were based on historical correlations (which might not hold in the future) and made assumptions about liquidity.

In 1997, a confluence of market conditions (the Asian Financial Crisis and Russian Debt Default) uncovered these weaknesses and the firm lost 90% of its value, exceeding $4bn, forcing the US government to stage a bail-out.  

The star-studded team at LTCM were victims of [Internal Model Risk](/tags/Internal-Model-Risk) due to their own hubris, over-confidence in their models and their dismissal of the warning signs from the markets around them.

:::

### 2. Data Quality

**Threat**: Reliance on out-of-date information, incomplete sources or erroneous data.


:::tip Anecdote Corner

![Sat Nav Blunder Sends ASDA Van Crashing Narrow Footpath - Telegraph Newspaper](/img/risks/map-and-territory/sat_nav.png)

In the headline above, taken from [the Telegraph newspaper](https://www.telegraph.co.uk/news/newstopics/howaboutthat/6413887/Asda-van-crashes-after-sat-nav-sends-driver-to-narrow-footpath.html), the driver _trusted_ the SatNav to such an extent that he didn't pay attention to the road-signs around him and ended up getting stuck.  

This wasn't borne of stupidity, but experience:  SatNavs are pretty reliable. _So many times_ the SatNav had been right, that the driver stopped _questioning its fallibility_.  

There are two [Internal Model Risks](/tags/Internal-Model-Risk) here:

- The [Internal Model](/tags/Internal-Model) of the _SatNav_ contained information that was wrong:  the track had been marked up as a road, rather than a path.  
- The [Internal Model](/tags/Internal-Model) of the _driver_ was wrong:   his abstraction of "the SatNav is always right" turned out to be only _mostly_ accurate.  

:::


### 3.  Operational Threats

**Threat**:  Models need to be evaluated against real-world outcomes.  (See [Retrospectives](/tags/Retrospectives))

**Threat**:  Agents within the system may have a conflict-of-interests and subvert the model to their own ends.

### 4. Model Drift

**Threat**: Model drift is where the model becomes less relevant over time, the original assumptions and data no longer holding as strongly as before.

### 5. Adaption

**Threat**:  The existence of a model of the world changes the world too - behaviours adapt to compensate for the new model.  

**See**: A good example of this might be [PageRank](https://en.wikipedia.org/wiki/PageRank), which was initially a successful way of determining the relevance of a web page.  However SEO practices adapted to "game" the algorithm and diminish its relevance over time.


