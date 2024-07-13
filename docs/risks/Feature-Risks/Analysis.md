---
title: "Feature Risks: Analysis"
description: Analysis of what Feature Risk tells us.
featured: 
  class: ff
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/cycle.svg">Analysis</image-artifact>'
sidebar_position: 9
sidebar_label: Analysis
---

## Fashion

Fashion plays a big part in IT.  By being _fashionable_, web-sites are communicating:   _this is a new thing_, _this is relevant_, _this is not terrible_.  All of which is mitigating a [Communication Risk](/tags/Communication-Risk).  Users are all-too-aware that the Internet is awash with terrible, abandon-ware sites that are going to waste their time.  

How can you communicate that you're not one of them to your users?

## Delight

If this breakdown of [Feature Risk](/tags/Feature-Risk) seems reductive, then try not to think of it that way:  the aim _of course_ should be to delight users, and turn them into fans.  

Consider [Feature Risk](/tags/Feature-Risk) from both the down-side and the up-side:  

 - What are we missing?
 - How can we be _even better_?

## Analysis

So far in this section, we've simply seen a bunch of different types of [Feature Risk](/tags/Feature-Risk).  But we're going to be relying heavily on [Feature Risk](/tags/Feature-Risk) as we go on in order to build our understanding of other risks, so it's probably worth spending a bit of time up front to classify what we've found.  

The [Feature Risks](/tags/Feature-Risk) identified here basically exist in a space with at least 3 dimensions:

 - **Fit**: how well the features fit for a particular client.
 - **Audience**:  the range of clients (the _market_) that may be able to use this feature.
 - **Change**:  the way the fit and the audience changes and evolves as time goes by. 
 
Let's examine each in turn.
 
### Fit

 > "This preservation, during the battle for life, of varieties which possess any advantage in structure, constitution, or instinct, I have called Natural Selection; and Mr. Herbert Spencer has well expressed the same idea by the Survival of the Fittest" - [Charles Darwin (Survival of the Fittest), _Wikipedia_](https://en.wikipedia.org/wiki/Survival_of_the_fittest).
 
Darwin's conception of fitness was not one of athletic prowess, but how well an organism worked within the landscape, with the goal of reproducing itself.  

[Feature Fit Risk](#feature-fit-risk), [Conceptual Integrity Risk](#conceptual-integrity-risk) and [Implementation Risk](#implementation-risk) all hint at different aspects of this "fitness".   We can conceive of them as the gaps between the following entities:
 
 - **Perceived Need**,  what the developers _think_ the users want.
 - **Expectation**, what the user _expects_.
 - **Reality**, what they actually _get_.

![Feature Risks Assembled.  Fit Risks, shown as _gaps_, as in the _Service Quality Model_](/img/generated/risks/feature/all-feature-risk.svg) 

For further reading, you can check out [The Service Quality Model](https://en.wikipedia.org/wiki/SERVQUAL) which the diagram above is derived from.  This model analyses the types of _quality gaps_ in services and how consumer expectations and perceptions of a service arise.

In the [Staging And Classifying](Staging-And-Classifying.md) section we'll come back and build on this model further. 

### Fit and Audience

Two risks, [Feature Access Risk](/tags/Feature-Access-Risk) and [Market Risk](/tags/Market-Risk), consider _fit_ for a whole _audience_ of users.  They are different:  just as it's possible to have a small audience, but a large revenue, it's possible to have a product which has low [Feature Access Risk](#feature-access-risk) (i.e lots of users can access it without difficulty) but high [Market Risk](#market-risk) (i.e. the market is highly volatile or capricious in it's demands).  _Online services_ often suffer from this [Market Risk](#market-risk) roller-coaster, being one moment highly valued and the next irrelevant. 

 - **Market Risk** is therefore risk to _income_ from the market changing.
 - **Feature Access Risk** is risk to _audience_ changing.

### Fit, Audience and Change

![Risks of Change either of the product or the expectations of clients.](/img/generated/risks/feature/all-feature-risk2.svg) 

Two risks further consider how the **fit** and **audience** _change_: [Regression Risk](#regression-risk) and [Feature Drift Risk](#feature-drift-risk).  We call this _Change_ in the sense that:

 - Our product's features _evolve_ with time and the changes made by the development team.
 - Our audience changes and evolves as it is exposed to our product and competing products.
 - The world as a whole is an evolving system within which our product exists.
  