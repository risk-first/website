![For Review](images/state/for-review.png)

Here, I am going to recap on some pre-existing knowledge about risk, generally, in order to set the scene for the next section which heads back to looking at risk on software projects.  

## Risk Registers

In the previous section [Software Project Scenario](Software-Project-Scenario) we saw how you try to look across the [Attendant Risks](Glossary#attendant-risk) of the project, in order to decide what to do next.  

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

But, does this feel right?  One of the criticisms of the [Risk Register](Risk-Theory#risk-register) approach is that of [mistaking the map for the territory](Map-And-Territory-Risk).  That is, mistakenly believing that what's on the Risk Register _is all there is_.  

In the preceding discussions, I have been careful to point out the existence of [Hidden Risks](Glossary#hidden-risk) for that very reason. Or, to put another way:

> What we don't know is what usually gets us killed - Petyr Baelish, _Game of Thrones_

Donald Rumsfeld's famous [Known Knowns](https://en.wikipedia.org/wiki/There_are_known_knowns) is also a helpful conceptualization.

## Risk And Uncertainty

Arguably, this site uses the term 'Risk' wrongly:  most literature suggests [risk can be measured](https://keydifferences.com/difference-between-risk-and-uncertainty.html) whereas uncertainty represents things that cannot.  

I am using **risk** everywhere because later we will talk about specific risks (e.g. [Boundary Risk](Boundary-Risk) or [Complexity Risk](Complexity-Risk)), and it doesn't feel grammatically correct to talk about those as **uncertainties**, especially given the pre-existing usage in Banking of terms like [Operational Risk](https://en.wikipedia.org/wiki/Operational_risk) or [Reputational risk](https://www.investopedia.com/terms/r/reputational-risk.asp) which are also not really a-priori measurable.

## The Opposite Of Risk Management

Let's look at the classic description of Risk Management:

> Risk Management is the process of thinking out corrective actions before a problem occurs, while it's still an abstraction.  The opposite of risk management is crisis management, trying to figure out what to do about the problem after it happens. - [Waltzing With Bears, _Tom De Marco & Tim Lister_](http://amzn.eu/d/i0IDFA2)

This is not how **Risk-First** sees it:  

First, we have the notion that Risks are discrete events, again.  Some risks _are_ (like gambling on a horse race), but most _aren't_.  In the [Dinner Party](Introduction), for example, bad preparation is going to mean a _worse_ time for everyone, but how good a time you're having is a spectrum, it doesn't divide neatly into just "good" or "bad".  

Second, the opposite of "Risk Management" (or trying to minimize the "Downside") is either "Upside Risk Management", (trying to maximise the good things happening), or it's trying to make as many bad things happen as possible.  Humans tend to be optimists (especially when there are lots of [Hidden Risks](Glossary#hidden-risk)), hence our focus on Downside Risk.  Sometimes though, it's good to stand back and look at a scenario and think:  am I capturing all the Upside Risk here?

Finally, Crisis Management is _still just Risk Management_:  the crisis (Earthquake, whatever) has _happened_.  You can't manage it because it's in the past.   All you can do is Risk Manage the future (minimize further casualties and human suffering, for example).    

Yes, it's fine to say "we're in crisis", but to assume there is a different strategy for dealing with it is a mistake:  this is the [Fallacy of Sunk Costs](https://en.wikipedia.org/wiki/Sunk_costs). 

## Invariances #1: Panic Invariance

You would expect then, that any methods for managing software delivery should be _invariant_ to the level of crisis in the project.  If, for example, a project proceeds using [Scrum]() for eight months, and then the deadline looms and everyone agrees to throw Scrum out of the window and start hacking, then _this implies there is a problem with Scrum_.  Or at least, the way it was being implemented.  

I call this **Panic Invariance**:   the methodology shouldn't need to change given the amount of pressure or importance on the table.

## Invariances #2: Scale Invariance

Another test of a methodology is that it shouldn't fall down when applied at different _scales_.   Because, if it does, this implies that there is something wrong with the methodology.   The same is true of physical laws:  if they don't apply under all circumstances,  then that implies something is wrong.  For example, Newton's Laws of Motion fail to calculate the orbital period of Mercury, and this was an early win for Einstein's Relativity.  

Some methodologies are designed for certain scales:  Extreme Programming is designed for small, co-located teams.  And, that's useful.  But the fact it doesn't scale tells us something about it:  chiefly, that it considers certain _kinds_ of risk, while ignoring others.  At small scales, that works ok, but at larger scales, the bigger risks increase too fast for it to work.

So ideally, a methodology should be applicable at _any_ scale:  
 - A single class or function
 - A collection of functions, or a library
 - A project team
 - A department
 - An entire organisation

If the methodology _fails at a particular scale_, this tells you something about the risks that the methodology isn't addressing.  It's fine to have methodologies that work at different scales, and on different problems.   One of the things that I am exploring with Risk First is trying to place methodologies and practices within a framework to say _when_ they are applicable.

## Value vs Speed

### Value

"Upside Risk" isn't a commonly used term:  industry tends to prefer "value", as in "Is this a value-add project?".  There is plenty of theory surrounding **Value**, such as Porter's [Value Chain]() and [Net Present Value]().  This is all fine so long as we remember:

 - **The pay-off is risky**: Since the **Value** is created in the future, we can't be certain about it happening - we should never consider it a done-deal.  **Future Value** is always at risk.  In finance, for example, we account for this in our future cash-flows by discounting them according to the risk of default.
 - **The pay-off amount is risky**:  Additionally, whereas in a financial transaction (like a loan, say), we might know the size of a future payment, in IT projects we can rarely be sure that they will deliver a certain return.  On some fixed-contract projects this sometimes is not true: there may be a date when the payment-for-delivery gets made, but mostly we'll be expecting an uncertain pay-off. 
 
**Risk-First** is a particular _view_ on reality.  It's not the only one.  However, I am going to try and make the case that it's an underutilized one that has much to offer us.

### Speed

For example, in [Rapid Development]( http://a.co/d/ddWGTB2) by Steve McConnell we have the following diagram:

![Pillars, From Rapid Development By Steve McConnell](images/kite9/rapid_development_pillars.png)  

And, this is _fine_, McConnell is structuring the process from the perspective of _delivering as quickly as possible_.  However, here, I want to turn this on it's head.  Exploring Software Development from a risk-first perspective is an under-explored technique, and I believe it offers some useful insights.   So the aim here is to present the case for viewing software development like this:

![Pillars, re-arranged](images/kite9/rapid_development_pillars2.png)

As we will see, _Speed_ (or [Schedule Risk](Schedule-Risk) as we will term it) is one risk amongst others that need to be considered from a risk-management perspective.  There's no point in prioritising _speed_ if the software fails in production due to unaddressed [Operational Risk](Operational-Risk), and irreparably damages trust in the product.

### Eisenhower's Box
 
If we can view software delivery from the point of view of _value_, then why can't we apply the same tools to [Risk](Glossary#Risk) too?  In order to do this, let's review "Eisenhower's Box" model.  This considers two variables:

 - How valuable the work is (Importance)
 - How soon it is needed (Urgency)

![A basic "Eisenhower box" to help evaluate urgency and importance. Items may be placed at more precise points within each quadrant.  - [Time Management, _Wikipedia_](https://en.wikipedia.org/wiki/Time_management)](images/pd/220px-MerrillCoveyMatrix.png)

Here, we're considering a synthesis of both _time_ and _value_.  But [Net Present Value](https://en.wikipedia.org/wiki/Net_present_value) allows us to discount value in the future, which offers us a way to reconcile these two variables.  In the diagram, you can see two future payments, one of £100 due in one year, one of £150 due in 10 years.  By discounting at a given rate (here at 6% per year) we can compare their worth _now_.

![Net Present Value Discounting](images/numbers/npv.png)

## Net Present Risk

Can we do the same thing with risk?  Let's introduce the concept of [Net Present Risk](Risk-Theory#Net-Present-Risk), or NPR:

> Net Present Risk is the _Importance_ of a Future risk, discounted to a common level of _Urgency_.

Let's look at a quick example to see how this could work out.  Let's say you had the following 3 risks:

- Risk **A**, which will cost you £50 in 5 year's time.
- Risk **B**, which will cost you £70 in 8 year's time.
- Risk **C**, which will cost you £120 in 18 year's time.

Which has the biggest NPR?  Well, it depends on the discount rate that you apply.  Let's assume we are discounting at 6% per year.  A graph of the discounted risks looks like this:

![Net Present Risk, 6% Discount Rate](images/numbers/npr1.png)

On this basis, the biggest risk is **B**, at about £45.  If we _reduce_ the discount factor to 3%, we get a different result:

![Net Present Risk, 3% Discount Rate](images/numbers/npr2.png)

Now, risk **C** is bigger.  

Because this is _Net_ Present Risk, we can also use it to make decisions about whether or not to mitigate risks.   Let's consider the cost of mitigating each risk _now_:

- Risk **A** costs £20 to mitigate
- Risk **B** costs £50 to mitigate
- Risk **C** costs £100 to mitigate

Which is the best deal?

Well, under the 6% regime, only Risk **A** is worth mitigating, because you spend £20 today to get rid of £40 of risk (today).  The NPR is positive at around £20, whereas for **B** and **C** mitigations it's under water.

But, under a 3% regime, risk **A** and **B** are _both_ worth mitigating.

### Discounting the Future To Zero

I have worked in teams sometimes where the blinkers go down, and the only thing that matters is _now_.    They may apply a rate of 60% per-day, which means that anything with a horizon over a week is irrelevant.   Regimes of such [hyperinflation](https://en.wikipedia.org/wiki/Hyperinflation) are a sure sign that something has _really broken down_ within a project.  Consider in this case a Discount Factor of 60% per day, and the following risks:

- Risk A: £80 cost, happening _tomorrow_
- Risk B: £500 cost, happening in _5 days_.  

Risk B is almost irrelevant under this regime, as this graph shows:

![Net Present Risk, 60% Discount Rate](images/numbers/npr3.png)

Why do things like this happen?  Often, the people involved are under incredible job-stress:  usually they are threatened with the sack on a daily basis, and therefore feel they have to react.  Publically-listed companies also often apply short-term focus, because they only care about the _next annual report_, which limits their horizons and ability to consider future risk.

Under these circumstances, we often see _Pooh-Bear Procrastination_:

> "Here is Edward Bear coming downstairs now, bump, bump, bump, on the back of his head, behind Christopher Robin. It is, as far as he knows, the only way of coming downstairs, but sometimes he feels that there really is another way…if only he could stop bumping for a moment and think of it!" - [A. A. Milne, _Winne-the-Pooh_](http://amzn.eu/d/acJ5a2j)

## Is This Scientific?

Enough with the numbers and the theory:  **Risk-First** is an attempt to provide a practical framework, rather than a scientifically rigorous analysis.  In fact, my view is that you should _give up_ on trying to compute risk numerically.  You _can't_ work out how long a software project will take based purely on an analysis of (say) _function points_.  (Whatever you define them to be).

- First, there isn't enough evidence for an approach like this.  We _can_ look at collected data about IT projects, but [techniques and tools change](Silver-Bullets).
- Second,  IT projects have too many confounding factors, such as experience of the teams, 
technologies used etc.  That is, the risks faced by IT projects are _too diverse_ and _hard to quantify_ to allow for meaningful comparison from one to the next.
- Third, as soon as you _publish a date_ it changes the expectations of the project (see [Student Syndrome](Schedule-Risk)).
- Fourth, metrics get first of all [misused](Map-And-Territory-Risk) and then [gamed](Agency-Risk).

Reality is messy.  Dressing it up with numbers doesn't change that and you risk [fooling yourself](Map-And-Territory).  If this is the case, is there any hope at all in what we're doing?  I would argue yes:   _forget precision_.  You should, with experience be able to hold up two separate risks and answer the question, "is this one bigger than this one?"  

Reality is Reality, [so let's meet it](Meeting-Reality). 

