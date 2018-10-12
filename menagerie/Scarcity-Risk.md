![For Review](images/state/for-review.png)

Any resource that you depend on can suffer from _scarcity_, 

[Schedule Risk](Scarcity-Risk#schedule-risk) is the term for risks you face because of _lack of time_.  

You could also call this "Chronological Risk" or just "Time Risk" if you wanted to. 

![Schedule Risk](images/generated/schedule-risk.png)

[Schedule Risk](Scarcity-Risk#schedule-risk) is very pervasive, and really underlies _everything_ we do.  People _want_ things, but they _want them at a certain time_.   We need to eat and drink every day, for example.  We might value having a great meal, but not if we have to wait three weeks for it.  

And let's go completely philosophical for a second:  Were you to attain immortality, you'd probably not feel the need to buy _anything_.  You'd clearly have no _needs_, and anything you wanted, you could create yourself within your infinite time-budget.  Rocks don't need money, after all.

Let's look at some specific kinds of [Schedule Risk](Scarcity-Risk#schedule-risk).



## Scarcity Risk

![Scarcity Risk](images/generated/scarcity-risk.png)

Let's get back to the bus (which, hopefully, is still working).  What if, when it arrives, it's already full of passengers?  Let's term this, [Scarcity Risk](Dependency-Risk#Scarcity-Risk) - the chance that a dependency is over-subscribed and you can't use it the way you want.  This is clearly an issue for nearly every kind of dependency: buses, supermarkets, concerts, teams, services and people.  

You could also call this _availability risk_ or _capacity risk_ of the resource.  Here are a selection of mitigations:

 - **Buffers**: Smoothing out peaks and troughs in utilisation.
 - **Reservation Systems**: giving clients information _ahead_ of the dependency usage about whether the resource will be available to them.
 - **Graceful degradation**: Ensuring _some_ service in the event of over-subscription.  It would be no use allowing people to cram onto the bus until it can't move.
 - **Demand Management**:  Having different prices during busy periods helps to reduce demand.  Having "first class" seats means that higher-paying clients can get service even when the train is full.  [Uber](https://www.uber.com) adjust prices in real-time by so-called [Surge Pricing](https://www.uber.com/en-GB/drive/partner-app/how-surge-works/).  This is basically turning [Scarcity Risk](Dependency-Risk#Scarcity-Risk) into a [Market Risk](Feature-Risk#market-risk) problem.
 - **Queues**: Again, these provide a "fair" way of dealing with scarcity by exposing some mechanism for prioritising use of the resource.  Buses operate a first-come-first-served system, whereas emergency departments in hospitals triage according to need.
 - **Pools**: Reserving parts of a resource for particular customers.
 - **Horizontal Scaling**: allowing a scarce resource to flexibly scale according to how much demand there is.   (For example, putting on extra buses when the trains are on strike, or opening extra check-outs at the supermarket.)
 
Much like [Reliability Risk](#reliability-risk), there is science for it:

 - [Queue Theory](https://en.wikipedia.org/wiki/Queueing_theory) is all about building mathematical models of buffers, queues, pools and so forth.
 - [Logistics](https://en.wikipedia.org/wiki/Logistics) is the practical organisation of the flows of materials and goods around things like [Supply Chains](https://en.wikipedia.org/wiki/Supply_chain).
 - And [Project Management](https://en.wikipedia.org/wiki/Project_management) is in large part about ensuring the right resources are available at the right times.  We'll be taking a closer look at that in Risk-First Part 3 sections on Prioritisation and the [Project Management Body Of Knowledge](https://en.wikipedia.org/wiki/Project_Management_Body_of_Knowledge).



## Schedule Risk

![Schedule Risk](images/generated/schedule-risk.png)

By agreeing a _time_ and _place_ for something to happen, you're introducing [Deadline Risk](Scarcity-Risk#Deadline-Risk).  Miss the deadline, and you miss the bus, or the start of the meeting or get fined for not filling your tax return on time.  

As discussed above, _schedules_ (such as bus timetables) exist so that _two or more parties can coordinate_, and [Deadline Risk](Scarcity-Risk#Deadline-Risk) is on _all_ of the parties.  While there's a risk I am late, there's also a risk the bus is late.  I might miss the start of a concert, or the band might keep everyone waiting.   
 
Each party can mitigate [Deadline Risk](Scarcity-Risk#Deadline-Risk) with _slack_.  That is, ensuring that the exact time of the event isn't critical to your plans:   

 - Don't build into your plans a _need_ to start shopping at 9am.
 - Arrive at the bus-stop _early_.

The amount of slack you build into the schedule is likely dependent on the level of risk you face:  I tend to arrive a few minutes early for a bus, because the risk is _low_ (there'll be another bus along soon), however I try to arrive over an hour early for a flight, because I can't simply get on the next flight straight away, and I've already paid for it, so the risk is _high_.
 
[Deadline Risk](Scarcity-Risk#Deadline-Risk) becomes very hard to manage when you have to coordinate actions with lots of tightly-constrained events.  So what else can give?  We can reduce the number of _parties_ involved in the event, which reduces risk, or, we can make sure all the parties are in the same _place_ to begin with.  

## Opportunity Risk

![Opportunity Risk](images/generated/opportunity-risk.png)

[Opportunity Risk](Scarcity-Risk#opportunity-risk) is really the concern that whatever we do, we have to do it _in time_.  If we wait too long, we'll miss the [Window Of Opportunity](https://en.wikipedia.org/wiki/Window_of_opportunity) for our product or service.   

Any product idea is necessarily of it's time:  the [Goal In Mind](Glossary#Goal-In-Mind) will be based on observations from a particular [Internal Model](Glossary#Internal-Model), reflecting a view on reality at a specific _point in time_.  

How long will that remain true for?  This is your _opportunity_:  it exists apart from any deadlines you set yourself, or funding options.  It's purely, "how long will this idea be worth doing?"  

With any luck, decisions around _funding_ your project will be tied into this, but it's not always the case.   It's very easy to under-shoot or overshoot the market completely and miss the window of opportunity.  

### The iPad

For example, let's look at the [iPad](https://en.wikipedia.org/wiki/History_of_tablet_computers), which was introduced in 2010 and was hugely successful.  

This was not the first tablet computer.  Apple had already tried to introduce the [Newton](https://en.wikipedia.org/wiki/Apple_Newton) in 1989, and Microsoft had released the [Tablet PC](https://en.wikipedia.org/wiki/Microsoft_Tablet_PC) in 1999.  But somehow, they both missed the [Window Of Opportunity](https://en.wikipedia.org/wiki/Window_of_opportunity).  Possibly, the window existed because Apple had changed changed the market with their release of the iPhone, which left people open to the idea of a tablet being "just a bigger iPhone".

But maybe now, the iPad's window is closing?   We have more _wearable computers_ like the [Apple Watch](https://en.wikipedia.org/wiki/Apple_Watch), and voice-controlled devices like [Alexa](https://en.wikipedia.org/wiki/Amazon_Alexa) or [Siri](https://en.wikipedia.org/wiki/Siri).  Peak iPad was in 2014, according to [this graph](https://www.statista.com/statistics/269915/global-apple-ipad-sales-since-q3-2010/).

So, it seems Apple timed the iPad to hit the peak of the Window of Opportunity.  

But, even if you time the Window Of Opportunity correctly, you might still have the rug pulled from under your feet due to a different kind of [Schedule Risk](Scarcity-Risk#schedule-risk), such as...

## Funding Risk

![Funding Risk](images/generated/funding-risk.png)

On a lot of software projects, you are "handed down" deadlines from above, and told to deliver by a certain date or face the consequences. <!-- tweet-end --> But sometimes you're given a budget instead, which really just adds another layer of abstraction to the [Schedule Risk](Scarcity-Risk#schedule-risk):   That is, do I have enough funds to cover the team for as long as I need them?

This grants you some leeway as now you have two variables to play with: the _size_ of the team, and _how long_ you can run it for.  The larger the team, the shorter the time you can afford to pay for it.

In startup circles, this "amount of time you can afford it" is called the ["Runway"](https://en.wiktionary.org/wiki/runway):  you have to get the product to "take-off" before the runway ends.  So you could term this component as "Runway Risk".

Startups often spend a lot of time courting investors in order to get funding and mitigate this type of [Schedule Risk](Scarcity-Risk#schedule-risk).<!-- tweet-end -->  But, this activity usually comes at the expense of [Opportunity Risk](Scarcity-Risk#opportunity-risk) and [Feature Risk](Feature-Risk), as usually the same people are trying to raise funds as build the project itself.  

## Staff Risk

![Staff Risk](images/generated/staff-risk.png)

If a startup has a "Runway", then the chances are that the founders and staff do too<!-- tweet-end -->, as this article [explores](https://www.entrepreneur.com/article/223135).  It identifies the following risks:

  - Company Cash:  The **Runway** of the startup itself
  - Founder Cash:  The **Runway** for a founder, before they run out of money and can't afford their rent.
  - Team Cash:  The **Runway** for team members, who may not have the same appetite for risk as the founders do.
  
You need to consider how long your staff are going to be around, especially if you have [Key Man Risk](https://en.wikipedia.org/wiki/Key_person_insurance#Key_person_definition) on some of them.  <!-- tweet-end -->People like to have new challenges, or move on to live in new places, or simply get bored.  The longer your project goes on for, the more [Staff Risk](Scarcity-Risk#staff-risk) you will have to endure, and you can't rely on getting the [best staff for failing projects](Agency-Risk).

In the section on [Coordination-Risk](Coordination-Risk) we'll look in more detail at the non-temporal components of [Staff Risk](Scarcity-Risk#staff-risk).

## Red-Queen Risk

![Red Queen Risk](images/generated/red-queen-risk.png)

A more specific formulation of [Schedule Risk](Scarcity-Risk#schedule-risk) is [Red Queen Risk](Scarcity-Risk#red-queen-risk), which is that whatever you build at the start of the project will go slowly more-and-more out of date as the project goes on. <!-- tweet-end --> 

This is named after the Red Queen quote from Alice in Wonderland:  

> “My dear, here we must run as fast as we can, just to stay in place. And if you wish to go anywhere you must run twice as fast as that.”  - [Lewis Carroll, _Alice in Wonderland_](https://www.goodreads.com/quotes/458856-my-dear-here-we-must-run-as-fast-as-we)

The problem with software projects is that tools and techniques change _really fast_.  In 2011, 3DRealms released Duke Nukem Forever after [15 years in development](https://en.wikipedia.org/wiki/Duke_Nukem_Forever), to negative reviews:  

> "... most of the criticism directed towards the game's long loading times, clunky controls, offensive humor, and overall aging and dated design. " - _[Duke Nukem Forever, Wikipedia](https://en.wikipedia.org/wiki/Duke_Nukem_Forever)_

Now, they didn't _deliberately_ take 15 years to build this game (lots of things went wrong).  But, the longer it took, the more their existing design and code-base were a liability rather than an asset. 

Personally, I have suffered the pain on project teams where we've had to cope with legacy code and databases because the cost of changing them was too high.  And any team who is stuck using [Visual Basic 6.0](https://en.wikipedia.org/wiki/Visual_Basic) is here.   It's possible to ignore [Red Queen Risk](Scarcity-Risk#red-queen-risk) for a time, but this is just another form of [Technical Debt](Complexity-Risk) which eventually comes due.

## Schedule Risk and Feature Risk

In the section on [Feature Risk](Feature-Risk) we looked at [Market Risk](Feature-Risk), the idea that the value of your product is itself at risk from the morés of the market, share prices being the obvious example of that effect.  In Finance, we measure this using _money_, and we can put together probability models based on how much money you might make or lose.

With [Schedule Risk](Scarcity-Risk#schedule-risk), the underlying measure is _time_:  

 - "If I implement feature X, I'm picking up something like 5 days of [Schedule Risk](Scarcity-Risk#schedule-risk)."
 - "If John goes travelling that's going to hit us with lots of [Schedule Risk](Scarcity-Risk#schedule-risk) while we train up Anne."
 
... and so on.  Clearly, in the same way as you don't know exactly how much money you might lose or gain on the stock-exchange, you can't put precise numbers on [Schedule Risk](Scarcity-Risk#schedule-risk) either.

[Schedule Risk](Scarcity-Risk#schedule-risk), then, is _fundamental_ to every dependency.  But now it's time to get into the _specifics_, and look at [Software Dependencies](Software-Dependency-Risk).