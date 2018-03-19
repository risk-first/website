Here, I am going to recap on some pre-existing knowledge about risk, generally, in order to set the scene for the next section on [Meeting Reality](Meeting-Reality).  

## Risk Registers

In the previous section [Software Project Scenario](Software-Project-Scenario) we saw how you try to look across the [Attendant Risks](Attendant-Risk) of the project, in order to decide what to do next.  

A [Risk Register](https://en.wikipedia.org/wiki/Risk_register) can help with this.  From Wikipedia:

> A typical risk register contains:
> 
> - A risk category to group similar risks
> - The risk breakdown structure identification number
> - A brief description or name of the risk to make the risk easy to discuss
> - The impact (or consequence) if event actually occurs rated on an integer scale
> - The probability or likelihood of its occurrence rated on an integer scale
> - The Risk Score (or Risk Rating) is the multiplication of Probability and Impact and is often used to rank the risks.
> - Common mitigation steps (e.g. within IT projects) are Identify, Analyze, Plan Response, Monitor and Control.

This is Wikipedia's example:

![Wikipedia Risk Register](images/WikipediaRiskRegister2.png)

Some points about this description:

### This is a Bells-and-Whistles Description

Remember back to the Dinner Party example at the start: the Risk Register happened *entirely in your head*.  There is a continuum all the way from "in your head" to Wikipedia's Risk Register description.  Most of the time, it's going to be in your head, or in discussion with the team, rather than written down.   

Most of the value of the **Risk-First** approach is _in conversation_.  Later, we'll have an example to show how this can work out.

### Probability And Impact

Sometimes, it's better to skip these, and just figure out a Risk Score.  This is because if you think about "impact", it implies a definite, discrete event occurring, or not occurring, and asks you then to consider the probability of that occurring. 

**Risk-First** takes a view that risks are a continuous quantity, more like _money_ or _water_:  by taking an action before delivering a project you might add a degree of [Schedule Risk](Schedule-Risk), but decrease the [Production Risk](Production-Risk) later on by a greater amount.   


## Graphical Analysis

The [Wikipedia page](https://en.wikipedia.org/wiki/Risk_register) also includes this wonderful diagram showing you risks of a poorly run barbecue party:

![Wikipedia Risk Register](images/WikipediaRiskRegister1.png)

This type of graphic is _helpful_ in deciding what to do next, although personally I prefer to graph the overall **Risk Score** against the **Cost of Mitigation**:   easily mitigated, but expensive risks can therefore be dealt with first (hopefully).

## Unknown Unknowns

In Wikipedia's example, this ficticious BBQ has high fire risk, so one should begin mitigating there.  

But, does this feel right?  One of the criticisms of the Risk Register approach is that of [mistaking the map for the territory](Map-And-Territory).  That is, mistakenly believing that what's on the Risk Register _is all there is_.  

In the preceding discussions, I have been careful to point out the existence of [Hidden Risks](Attendant-Risk) for that very reason. Or, to put another way:

> What we don't know is what usually gets us killed 
>     - Petyr Baelish

Donald Rumsfeld's famous [Known Knowns](https://en.wikipedia.org/wiki/There_are_known_knowns) is also a helpful conceptualization.

## Risk And Uncertainty

Arguably, this site uses the term 'Risk' wrongly:  most literature suggests [risk can be measured](https://keydifferences.com/difference-between-risk-and-uncertainty.html) whereas uncertainty represents things that cannot.  

I am using **risk** everywhere because later we will talk about specific risks (e.g. [Executable Boundary Risk](Executable-Boundary-Risk) or [Technical Debt Risk](Technical-Debt)), and it doesn't feel grammatically correct to talk about those as **uncertainties**, especially given the pre-existing usage in Banking of terms like [Operational risk](https://en.wikipedia.org/wiki/Operational_risk) or [Reputational risk](https://www.investopedia.com/terms/r/reputational-risk.asp) which are also not really a-priori measurable.

## The Opposite Of Risk Management

Let's look at the classic description of Risk Management:

> Risk Management is the process of thinking out corrective actions before a problem occurs, while it's still an abstraction.  
> The opposite of risk management is crisis management, trying to figure out what to do about the problem after it happens.
> - Waltzing With Bears, Tom De Marco & Tim Lister

This is not how **Risk-First** sees it:  

First, we have the notion that Risks are discrete events, again.  Some risks _are_ (like gambling on a horse race), but most _aren't_.  In the [Dinner Party](Introduction), for example, bad preparation is going to mean a _worse_ time for everyone, but how good a time you're having is a spectrum, it doesn't divide neatly into just "good" or "bad".  

Second, the opposite of "Risk Management" (or trying to minimize the "Downside") is either "Upside Risk Management", (trying to maximise the good things happening), or it's trying to make as many bad things happen as possible.  Humans tend to be optimists (especially when there are lots of [Hidden Risks](Attendant-Risk)), hence our focus on Downside Risk.  Sometimes though, it's good to stand back and look at a scenario and think:  am I capturing all the Upside Risk here?

Finally, Crisis Management is _still just Risk Management_:  the crisis (Earthquake, whatever) has _happened_.  You can't manage it because it's in the past.   All you can do is Risk Manage the future (minimize further casualties and human suffering, for example).    

Yes, it's fine to say "we're in crisis", but to assume there is a different strategy for dealing with it is a mistake:  this is the [Fallacy of Sunk Costs](https://en.wikipedia.org/wiki/Sunk_costs).  

Reality is Reality, [so let's meet it](Meeting-Reality). 

