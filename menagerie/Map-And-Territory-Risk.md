![Under Construction](images/state/uc.png)

As we discussed in the section on [Abstraction](), our understanding of the world is entirely informed by the names we give things and the abstractions we create.  (In the same way, **Risk-First** is about _identifying patterns_ within software development and calling them out.)  Our [Internal Models]() are a model of the world based on these patterns, and their relationships.

So there is a translation going on here: observations about the arrangement of _atoms_ in the world get turned into patterns of _information_ (measured in bits and bytes).  

![Maps and Territories, and Communication happening between them](images/kite9/mapter-bits-atoms.png) 

[Map And Territory Risk]() is the risk we face because we base our behaviour on our [Internal Models]() rather than reality itself.  It comes from the expression "Confusing the Map for the Territory", attributed to Alfred Korzybski:

> "Polish-American scientist and philosopher Alfred Korzybski remarked that "the map is not the territory" and that "the word is not the thing", encapsulating his view that an abstraction derived from something, or a reaction to it, is not the thing itself. Korzybski held that many people _do_ confuse maps with territories, that is, confuse models of reality with reality itself." - [Map-Territory Relation, _Wikipedia_](https://en.wikipedia.org/wiki/Map–territory_relation)

![Map And Territory Risk](images/generated/map-and-territory-risk.png)

## Internal Model Fitness

![Sat Nav Blunder Sends Asda Van Crashing Narrow Footpath - Telegraph Newspaper](images/sat_nav.png)

In the picture shown here, from the Telegraph newspaper, the driver _trusted_ the SatNav to such an extent that he didn't pay attention to the road-signs around him, and ended up getting stuck.  This wasn't borne of stupidity, but experience:  SatNavs are pretty reliable. _So many times_ the SatNav had been right, that the driver stopped _questioning its fallibility_.  

So, there are two [Map and Territory Risks]() here:
 - The [Internal Model]() of the _SatNav_ contained information that was wrong:  the track had been marked up as a road, rather than a path.  
 - The [Internal Model]() of the _driver_ was wrong:   his abstraction of "the SatNav is always right" turned out to be only _mostly_ accurate.  

## Internal Models as Dependencies, Features

What are the risks at play here?  We've already looked in detail at the [Dependency Risks]() involved in relying on something like a SatNav, in the [Software Dependency Risk]() section.  But here, we are really looking at the _[Internal Models]() themselves_ as a source of [Dependency Risk]() too.

We could argue that the SatNav and the Driver's [Internal Model]() had bugs in them.  That is, they both suffer the [Feature Implementation Risk]() we saw in the [Feature Risk]() section.  If a SatNav has too much of this, you'd end up not trusting it, and getting a new one.  With your _personal_ [Internal Model](), you can't buy a new one, but you may learn to _trust certain abstractions less_, as this driver did.

In the [Feature Risk]() section, we broke down [Feature Risk]() on three axes:  **Fitness**, **Evolution** and **Audience**.  

Lets do this again and see how each type of [Feature Risk]() can manifest in the [Internal Model]():

<table>
  <tr>
    <th>Dimension</th>
    <th>Feature Risk</th>
    <th>Map and Territory Examples</th>
  </tr>
  <tr>
    <td>Fitness</td>
    <td>
      <ul>
        <li>Conceptual Integrity Risk</li>
        <li>Implementation Risk</li>
      </ul>
    </td>
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
    <td>
      <ul>
        <li>Feature Drift Risk</li>
        <li>Regression Risk</li>
      </ul>
    </td>
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
    <td>
      <ul>
        <li>Feature Access Risk</li>
        <li>Market Risk</li>
      </ul>
    </td>
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

Any given information in our [internal model]() has these three dimensions:

- **Fitness**: as discussed above with the SatNav example, this is how closely the information matches reality, and how _useful that is to us_ (models that contain too much detail are as bad as models with too little).
- **Audience**: is all about how a piece of information is _shared_ between many [Internal Models](), and it's this we are going to address further now.
- **Evolution**: is all about how [Internal Models]() change when they meet reality, and we'll cover that last.   

## Audience

We already know a lot about [Internal Models]() and audience, as these have been the subject of previous sections:
 - We know from looking at [Communication Risk]() that communication allows us to _share_ information between [Internal Models](). 
 - We know from [Coordination Risk]() the difficulties inherent in aligning [Internal Models]() so that they cooperate.
 - Job markets show us that there is demand for people with certain _skills_.  This demonstrates to us that [Market Risk]() is as applicable to [Internal Models]() containing certain information as it is to products containing [Features](Feature-Risk).  This was the focus of the [Ecosystem]() discussion in [Boundary Risk](Boundary-Risk).
 - And, we're all familiar with _memes_:

> "A meme acts as a unit for carrying cultural ideas, symbols, or practices, that can be transmitted from one mind to another through writing, speech, gestures, rituals, or other imitable phenomena with a mimicked theme." - [Meme, _Wikipedia_](https://en.wikipedia.org/wiki/Meme)

Therefore, we should be able to track the rise-and-fall of _ideas_ much as we can track stock prices.  And in effect, this is what [Google Trends](https://trends.google.com) does.  In the chart below, we can see the relative popularity of two search terms over time.  This is probably as good an indicator as any of the audience for an abstraction at any point in time.

![Relative popularity of "Machine Learning" and "Big Data" as search terms on Google Trends, 2011-2018](images/google-trends.png)

### Example: Metrics as Maps 

Good abstractions are shared (a la _memes_, above).  They start off with one inventor, and are shared, eventually becoming institutionalised in the same way [Software Dependencies]() are.   Let's dive into a specific example now: someone finds a useful new metric that helps in evaluating performance. 

It might be:

- **SLOC (Source Lines Of Code)**: i.e. the number of lines of code each developer writes per day/week whatever.
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
 - In the UK, ambulances were asked to wait before admitting patients to Emergency wards, in order that hospitals could [meet their targets](https://en.wikipedia.org/wiki/NHS_targets).
  
Some of this seems obvious:  _Of course_ SLOC is a terrible measure performance!  We're not that stupid anymore.  The problem is, it's not so much the _choice_ of metric, but the fact that _all_ metrics merely approximate reality with a few numbers.  The map is _always_ simpler than the territory, therefore there can be no perfect metrics.

In the same way that [markets evolve to demand more features](), our behaviour evolves to incorporate new ideas.  The more popular an idea is, the more people will modify their behaviour as a result of it, and the more the world will change.   Will the idea still be useful as the world adapts?   

### Example: Hype Cycles

Most ideas (and most products) have a slow, hard climb to wide-scale adoption.  But some ideas seem to disperse much more rapidly and are picked up quickly because they are exciting and promising, having greater "memetic potential" within society.  One way this evolution manifests itself in the world is though the [Hype Cycle](https://en.wikipedia.org/wiki/Hype_cycle):

> "The hype cycle is a branded graphical presentation developed and used by the American research, advisory and information technology firm Gartner, for representing the maturity, adoption and social application of specific technologies. The hype cycle provides a graphical and conceptual presentation of the maturity of emerging technologies through five phases." - [Hype Cycle, _Wikipedia_](https://en.wikipedia.org/wiki/Hype_cycle)

The five phases (and the "Hype" itself) are shown in the chart below, with the thick black line being "Hype":

![Hype Cycle, along with Map & Territory Risk](images/hype-cycle.png)

Also in this diagram we are showing where the hype originates:
 - The **saturation** of the idea within the audience.
 - The **amount known** about the idea by the audience (the [Learning Curve](), if you will).
 
Both of these are modelled with [Cumulative Distribution](https://en.wikipedia.org/wiki/Cumulative_distribution_function#Use_in_statistical_analysis) curves.  From these two things, we can figure out where our maximum [Map and Territory Risk]() lies:  it's the point where awareness of an idea is furthest from the understanding of it.  This acts as a "brake" on the **hype** around the idea, corresponding to the "Trough of Disillusionment".  

Where the **saturation** and **knowledge** grow together, there is no spike in [Map and Territory Risk]() and we don't see the corresponding "Trough of Disillusionment" at all, as shown in this chart:

![Hype Cycle 2: Slower growth of Map and Territory Risk means no "Trough of Disillusionment"](images/hype-cycle2.png)

(This model is available in **Numbers** form [here](https://github.com/risk-first/website/blob/master/RiskMatrix.numbers).)

## Humans and Machines

The _qualities_ of [Map and Territory Risk]() change as we shift our focus from _people_ to _machines_.   Whereas people can be expected show skepticism to new (unlikely) information, our databases accept it unquestioningly.  _Forgetting_ is an everyday, usually benign part of our human [Internal Model](), but for software systems it is a production crisis involving 3am calls and backups.  

For Humans, [Map and Territory Risk]() is exacerbated by [cognitive biases]():

> tbd cognitive bias

Here are some examples:

It's tempting to think that [Map And Territory Risk](Map-And-Territory-Risk) is something that happens to someone else, and that you are going to be immune to it.   Example in the workplace, the release.


## Example: Methodologies as Maps


## Organisations and Hierarchies

[Map And Territory Risk]() "trickles down" through an organisation.  The higher levels have an outsize ability to pervert the incentives at lower levels because once an organisation begins to pursue a "bullshit objective", the whole company can align to this.  

[The Huffington Post](https://www.huffingtonpost.com/otto-scharmer/the-fish-rots-from-the-he_b_8208652.html) paints a brilliant picture of how Volkswagen managed to get caught faking their emissions tests.  As they point out:

> "The leadership culture of VW probably amplified the problem by disconnecting itself from the values and trajectory of society, by entrenching in what another executive in the auto industry once called a “bullshit-castle”... No engineer wakes up in the morning and thinks: OK, today I want to build devices that deceive our customers and destroy our planet. Yet it happened. Why? Because of hubris at the top. " - [Otto Scharmer, _Huffington Post_](https://www.huffingtonpost.com/otto-scharmer/the-fish-rots-from-the-he_b_8208652.html).

This article identifies the following process:

- **De-sensing**: VW Executives ignored _The Territory_ society around them (such as the green movement), ensuring their maps were out of date.  The top-down culture made it hard for reality to propagate back up the hierarchy.  
- **Hubris/Absencing**:  They pursued their own metrics of _volume_ and _cost_.  That is, focusing on their own _Map_, which is _easier_ than checking the _Territory_.  (See [Hubris](Agency-Risk#hubris--ego) in the [Agency Risk]() section).
- **Deception**:  Backed into a corner, engineers had no choice but to find "creative" ways to meet the metrics.
- **Destruction**: Eventually, the truth comes out, to the detriment of the company, the environment and the shareholders.

As the article's title summarizes "A fish rots from the head down".

### Personal Example

A similar (but less catastrophic) personal story from a bank I worked at, where the objectives end up being mis-aligned _within the company_: 

1. My team had been tasked with building automated "smoke tests" of an application.  But this was bullshit:  We only needed to build these _at all_ because the application was so complex.  The reason it was so complex was...
2. The application was being designed within a "Framework" constructed by the department.  However, the framework was only being used by this one application.  Building a "reuasable" framework which is only used by a single application is bullshit.  But, we had to do this because...
3. The organisational structure was created along a "matrix", with "business function" on one axis and "functional area" on another.   Although we were only building the application for a single business function, it was expected to cater with all the requirements from the an entire "functional area".  This was bullshit too, because...
4. The matrix structure was largely the legacy of a recent merger with another department.  As [Conway's Law]() predicts, our software therefore had to reflect this structure.  But this was bullshit because...
5. The matrix structure didn't represent reality in any useful way.  It was designed to pacify the budget committee at the higher level, and try to demonstrate attributes such as _control_ and _governance_.  But this was bullshit too, because...
6. The budget that was given to our department was really based on how much fear the budget holders currently had of the market regulators.  But this was bullshit too, because...
7. At a higher level, the executives had realised that our division wasn't one of the banks strategic strengths, and was working to close it all down anyway.

When faced with so many mis-aligned objectives, it seemed completely hopeless to concentrate on the task at hand.  But then, a colleague was able to nihilistically add one final layer to this onion by saying:

8. It's all about chasing money, which is bullshit, because life is bullshit.

### Picking Fights

It feels like there's no way back from that.  All of life might well be a big [Map and Territory]() illusion.  But let's analyse just a bit:
 - At each layer, the objectives changed.  But, they impacted on the objectives of the layer below.
 - Therefore, it seems like the more layers you have, the less likely it is that your objectives become inconsistent between the lower and higher levels.
 - On a new project, it seems like a good idea to model this stuff:  does the objective of the work you're about to undertake "align" with the objectives at a higher level?  
 
Trying to spot [Map and Territory Risk]() ahead-of-time in this manner seems like a useful way of trying to avoid [Vanity Projects](Agency-Risk#pet-project), and, if you are good at it, allows you to see which [Goals]() in the organisation are fragile and likely to change.  However, usually, if you are working in a team, you have limited agency to decide which projects you feel are valuable.  

This comes down to a personal decision: do you want to spend time working on projects that you know are going in the bin?  Some developers have the attitude that, so long as they get paid, it doesn't matter.  Others are also in it for the satisfaction of the work itself, so this ends up being a personal call.  (This theme will be developed further in [Staging and Classifying](Staging-and-Classifying).)

## Inadequate Equilibria

So far, we've considered what happens to individuals, teams and organisations when told to optimise around a particular objective.  In [Coordination Risk]() we looked at how [Communication]() was critical for Coordination to happen.  And, as we've already discussed, [Abstraction]() is a key part of communication.

The languages we adopt or create are _sets of useful abstractions_ that allow us to communicate.  But what happens when this goes wrong?

[Inadequate Equilibria](https://equilibriabook.com) by Eleizer Yudkovsky, looks at how perverse incentive mechanisms break not just departments, but entire societal systems.  He highlights one example involving _academics_ and _grantmakers_ in academia:

 - It's not very apparent which scientists are better than which other scientists.
 - One proxy is what they've published (scientific papers) and where they've published (journals).
 - Universities want to attract research grants, and the best way to do this is to have the best scientists.
 - Because "best" isn't measureable, they use the proxy.
 - Therefore, immense power rests in the hands of the journals, since they can control the money-proxy.
 - Therefore, journals are able to charge large amounts of money to universities for subscriptions.
 
> "Now consider the system of scientific journals... Some journals are prestigious. So university hiring committees pay the most attention to publications in that journal. So people with the best, most interesting-looking publications try to send them to that journal. So if a university hiring committee paid an equal amount of attention to publications in lower-prestige journals, they’d end up granting tenure to less prestigious people. Thus, the whole system is a stable equilibrium that nobody can unilaterally defy except at cost to themselves." - [Inadequate Equilibria, _Eleizer Yudkovsky_](https://equilibriabook.com/molochs-toolbox/)

As the book points out, while everyone _persists_ in using an inadequate abstraction, the system is broken.  However, [Coordination]() would be required for everyone to _stop_ doing it this way, which is hard work.  (At least within a hiearchy, Maps can get fixed.)

This is a _small example_ from a much larger, closely argued book, and it's worth taking the time to read a couple of the chapters on this interesting topic.

But there is one last stop we have to make on the [Risk Landscape](), and that is to look at [Operational Risk]().  



