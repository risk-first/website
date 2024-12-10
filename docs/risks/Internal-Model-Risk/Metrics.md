
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
 
Metrics are seductive because they simplify reality and are easily communicated.  But they _inherently_ contain [Map and Territory Risk](/tags/Map-And-Territory-Risk): by relying _only_ on the metrics, you're not really _seeing_ the reality.  

The devil is in the detail.

### Reality Evolves

In the same way that [markets evolve to demand more features](/tags/Red-Queen-Risk), our behaviour evolves to incorporate new ideas.  The more popular an idea is, the more people will modify their behaviour as a result of it, and the more the world will change.   

In the case of metrics this is where they start being used for more than just indicators but as measures of performance or targets:

 - If a team is _told_ to do lots of releases, they will perform lots of releases *at the expense of something else*.
 - If team members are promoted according to SLOC, they will make sure their code takes up as many lines as possible.
 - In the UK, ambulances were asked to wait before admitting patients to Emergency wards, in order that hospitals could [meet their targets](https://en.wikipedia.org/wiki/NHS_targets).
 
> "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." - [Goodhart's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Goodharts_law)
  
Some of this seems obvious:  _Of course_ SLOC is a terrible measure performance!  We're not that stupid anymore.  The problem is, it's not so much the _choice_ of metric, but the fact that _all_ metrics merely approximate reality with a few numbers.  The map is _always_ simpler than the territory, therefore there can be no perfect metrics.

Will the idea still be useful as the world adapts?   Although the Hype Cycle model doesn't cover it, ideas and products all eventually have their day and decline in usefulness.

### Bad Ideas

There are plenty of ideas which _seem a really good idea at the time_ but then end up being terrible.  It's only as we _improve our internal model_ and realize the hidden risks that we stop using them.  While SLOC is a minor offender, [CFCs](https://en.wikipedia.org/wiki/Chlorofluorocarbon) or [Leaded Petrol](https://en.wikipedia.org/wiki/Tetraethyllead) are more significant examples.  

![Hype Cycle for something that turns out to be a _bad_ idea](/img/numbers/hype3.png)

The above chart shows an initially promising idea that turns out to be terrible.  That is, the **Knowledge** value of it ends up being significantly less than the **Map and Territory Risk** of using it.  Hence, there is a "Period of Inoculation" where the population realise their mistake - there is "negative hype" as they work to phase out the offending idea until it's forgotten.

SLOC is not on its own a _bad idea_, but using it as a metric for developer productivity _is_.

> "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” - [Bill Gates](https://www.goodreads.com/quotes/536587)

![Evolution Feature Risks, as manifested in the Internal Model](/img/generated/risks/map-and-territory/map_and_territory_table_3.svg)

The diagram above shows how Evolution-type [Feature Risks](/tags/Feature-Risk) can manifest in the Internal Model.



## Audience

Communication allows us to _share_ information between [Internal Models](/tags/Internal-Model) of a whole audience of people.  The [Communication Risk](/tags/Communication-Risk) and [Coordination Risk](/tags/Coordination-Risk) sections covered the difficulties inherent in aligning [Internal Models](/tags/Internal-Model) so that they cooperate.

![Relative popularity of "Machine Learning" and "Big Data" as search terms on [Google Trends](https://trends.google.com), 2011-2018 ](/img/google-trends.png)
 
But how does [Map and Territory Risk](/tags/Map-And-Territory-Risk) apply across a population of [Internal Models](/tags/Internal-Model)?   Can we track the rise-and-fall of _ideas_ like we track stock prices?  In effect, this is what [Google Trends](https://trends.google.com) does.  In the chart above, we can see the relative popularity of two search terms over time.  This is probably as good an indicator as any of the changing popularity of an abstraction within an audience.

## Evolution

So concepts and abstractions spread through an audience.  But what happens next?   

 - People will use and abuse new ideas up to the point when they start breaking down. (We also discussed this as the **Peter Principle** in [Boundary Risk](/tags/Boundary-Risk).)  
 - At the same time, reality itself _evolves_ in response to the idea:  the new idea displaces old ones,  behaviour changes, and the idea itself can change. 
