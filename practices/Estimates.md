![Under Construction](images/state/uc.png)

1.  Purpose of Estimating 
  1.  (coordination risk)
  2.  trying to work out _the value_ of doing some work
2.  How Estimates Fail
  1.   Hidden Risk
  2.   Visible Risk
3.  

This section on [Estimating](Estimates) is going to be something of a journey, where we look at some of the "Old Saws" of the estimation game, before looking at more modern techniques using in "Agile" estimation, and then try to bring a Riks-First approach to estimating. 

We're going to start by looking at some "Old Saws" of the software develop


## The Purpose Of Estimating

Why bother estimating at all?   There are two reasons why estimates are useful:

1.  **To allow for the creation of _events_.**  As we saw in [Deadline Risk](), if we can put a date on something, we can mitigate lots of [Coordination Risk](). Having a _release date_ for a product allows whole teams of people to coordinate their activities in ways that hugely reduce the need for [Communication]().  Much like "attack at dawn" allows disparate units of an army to avoid lots of the [Coordination Risk]() inherent in "attack on my signal".  

2.  **To allow for the estimation of the [Payoff](Glossary#payoff) of an action.**  However, as we already saw, [Payoff]() isn't just about figuring out [Schedule Risk]() - you should be looking at all the other [Attendant Risks]() of the action too.  

## Old Saw #1: The "10X Developer"

> "A 10x developer is an individual who is thought to be as productive as 10 others in his or her field. The 10x developer would produce 10 times the outcomes of other colleagues, in a production, engineering or software design environment." - [10x Developer, _Techopedia_](https://www.techopedia.com/definition/31673/10x-developer)

Let's try and pull this apart:

 - How do we measure _productivity_?  In Risk-First terms, this is about taking action to _transform_ our current position on the [Risk Landscape]() to a position of more favourable risk.
 - It stands to reason then, that someone _faster_ will complete the transformation leaving us with less [Schedule Risk]().
 - However, if they are _more expensive_, they may leave us with greater [Funding Risk]() afterwards.
 - But, [Schedule Risk]() isn't the only risk being transformed:  what level of [Feature Fit]() risk will be left behind, or [Implementation Risk]() or [Dependency Risk]() or [Complexity Risk]()?  
 - The "10x" developer will also leave behind less of these kind of risks too.
 
tbd, diagram of a regular developer and 10x developer. 

Debate rages as to whether the "10x Developer" even exists.  Crucially, it would seem that such a thing would be predicated on the existence of the "Average Developer", who gets "1x" worth of work done each day.  It's not clear that there is any such thing as an average developer who is mitigating risk at an average rate.

Even good developers have bad days or weeks.  [Taking Action]() is like placing a bet, and you hope that the bet will come off in your favour, mitigating the risk in the way you wanted it to.  But that doesn't always happen:

 - The Open-Source software you're trying to apply to a problem doesn't solve it in the way you need.
 - A crucial use-case of the problem turns out to change the shape of the solution entirely, leading to lots of rework.

### How to Be a "10x Developer"

The easiest way to be a "10x developer" is to have _done the job before_.  If you're coding in a familiar language, with familiar libraries and tools, delivering a cookie-cutter solution to a problem in the same manner you've done several times before, then _you will be a "10x developer" compared to yourself doing it the first time_.  The difference is the amount of [Learning Curve Risk]() and [Dead End Risk]() that you are facing.  

### Old Saw #2: Parkinson's Law

We've already looked at Parkinson's Law in [Agency Risk](Agency-Risk#bureaucracy-risk), but lets recap:

> "Parkinson's law is the adage that 'work expands so as to fill the time available for its completion'." [Parkinson's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Parkinsons_law)  

Let's leave aside the [Agency Risk]() concerns this time.  Instead, let's consider this from a Risk-First perspective.  _Of course_ work would expand to fill the time available:  _Time available_ is an _absence of [Schedule Risk]()_, it's always going to be sensible to accept [Schedule Risk]() as a trade-off for other more serious risks.  

This is why projects will _always_ take at least as long as is budgeted for them.   

### A Case Study

Take aways:
 
 - There's no fixed amount of time something will take.
 - IF YOU

## Old Saw #3: Quality, Speed, Cost: Pick Any Two

> "The Project Management Triangle (called also the Triple Constraint, Iron Triangle and "Project Triangle") is a model of the constraints of project management. While its origins are unclear, it has been used since at least the 1950s.[1] It contends that:
> - The quality of work is constrained by the project's budget, deadlines and scope (features).
> - The project manager can trade between constraints.
> - Changes in one constraint necessitate changes in others to compensate or quality will suffer." 

From a Risk-First perspective, we can now see that this is an over-simplification.  If quality is some kind of [Feature Risk]() metric, _deadlines_ is [Schedule Risk]() and _budget_ refers to [Funding Risk]() then that leaves us with a lot of risks unaccounted for:

 - I can deliver a project in very short order by building a bunch of screens that _do nothing_ (accruing _stunning levels of [Implementation Risk]() as I go). 
 - Or, by relying on a lottery win, I can completely mitigate the budgetary risks of a project.  (Although I would have _huge_ [Funding Risk]() because _what are the chances of winning the lottery?_.  (You can bring in _any_ project at _any_ time by accepting crazy levels of risk.
 - And Brooks' Law tells us you can't trade budget for deadlines:

> "Brooks' law is an observation about software project management according to which "adding human resources to a late software project makes it later". - [Brooks Law, _Wikipedia_](https://en.wikipedia.org/wiki/Brooks_law)

tbd. brooks law as a risk first diagram.

What's the Risk-First take-away from this?  Focusing on just these three variables isn't enough:  we need to be looking at the project's risk _holistically_:

 - There's no point in calling a project complete if the dependencies you are using are [unreliable]() or [undergoing rapid change]() 
 - There's no point in delivering the project on budget if it's an [Operational Risk]() nightmare, and requires constant round-the-clock support and will cost a fortune to _run_.
 - There's no point in delivering a project on-time if [the market has moved on](Feature-Risk#market-risk) and [needs different features](Feature-Risk#feature-drift).
 
## How Estimates Fail

The problem with a developer answering a question such as:

> "How long will it take to deliver X"

Is the following:

 - The developer likely doesn't know what X is, and any description of it is inadequate anyway ([Invisibility Risk]()).
 - The developer has a less-than-complete understanding of the environment he will be delivering X in ([Complexity Risk]()).
 - The developer has some vague ideas about how to do X, but he'll need to try out various approaches until he finds exactly the right one ([Boundary Risk]()).
 - The developer has no idea what [Hidden Risk]() will surface when he starts work on it.
 - What will happen if he takes too long and misses the date by a day/week/month/year. ([Schedule Risk]())

... and so on.  So, his estimate is both wrong, and contingent on what exact risks appear.

## Agile Estimation

One alternative approach, must espoused in DevOps/Agile is to pick a short-enough period of time (say, two days or two weeks), and figure out what the most meaningful step towards achieving an objective would be in that time.   By fixing the time period, we remove [Schedule Risk]() from the equation, don't we?

Well, no.  First, how to choose the time period? [Schedule Risk]() tends to creep back in, in the form of something like [Man-Hours](https://en.wikipedia.org/wiki/Man-hour) or [Story Points](): 

> "Story points rate the relative effort of work in a Fibonacci-like format: 0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100. It may sound counter-intuitive, but that abstraction is actually helpful because it pushes the team to make tougher decisions around the difficulty of work. " - [Story Points, _Atlassian_](https://www.atlassian.com/agile/project-management/estimation)

Second, the strategy of picking the two-day action with the greatest [Payoff]() is _often good_.  After all, this is just [Gradient Descent](), and that's a perfectly good way for training [Machine Learning]() systems.  However, just like following a river downhill from the top of a mountain will _often_ get you to the sea, it probably won't take the shortest path, and sometimes you'll get stuck at a lake.  

The choice of using gradient descent means that you have given up on [Goals](Glossary#goal-in-mind).  Essentially, we have here the difference between "Walking towards a destination" and "Walking downhill".  Or, a planned economy and a market economy.  But, we don't live in _either_: everyone lives in some mixture of the two:  our governments _have plans_ for big things like roads and hospitals, and taxes.  Other stuff, they leave to the whims of supply and demand. 

A project always ends up being the same.

## Risk-First Estimating

Let's figure out what we can take away from the above experiences:

 - The proverb of the 10x developer, and the difference made by experience implies that a lot of [Schedule Risk]() comes from [Learning Curve]() risk and [Dead End Risk]().  
 - The lesson from the Parkinson's Law was that by giving people a _time budget_, you absolve them from [Schedule Risk]().  This gives them one less dimension of risk to worry about, but means they end up taking all the time you give them, because they are optimising over the remaining risks.
 - The lesson from "Quality, Speed, Cost" is that actually, we need to be considering _all_ risks, not just some arbitrary milestones on a project plan.  Project plans can always be gamed, and you can always leave risks unaccounted for in order to hit the goals (good old [Map and Territory Risk](Map-and-territory-risk) strikes again).
 - Finally, the lesson from Agile development is that _just iterating_ is sometimes not as efficient as _using your intuition and experience_ to find a more optimal path.  
 
How can we synthesize this knowledge, along with what we've learned into something that makes more sense?


 
 

