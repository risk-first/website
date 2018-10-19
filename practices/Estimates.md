![Under Construction](images/state/uc.png)

In this section, we're going to put a Risk-First spin on the process of [Estimating](Estimates).  But, in order to get there, we first need to start with understanding _why_ we estimate, and some history around why this has been so problematic in the software world.

## The Purpose Of Estimating

Why bother estimating at all?   There are two reasons why estimates are useful:

1.  **To allow for the creation of _events_.**  As we saw in [Deadline Risk](Deadline-Risk), if we can put a date on something, we can mitigate lots of [Coordination Risk](Coordination-Risk). Having a _release date_ for a product allows whole teams of people to coordinate their activities in ways that hugely reduce the need for [Communication](Communication-Risk).  Much like "attack at dawn" allows disparate units of an army to avoid lots of the [Coordination Risk]() inherent in "attack on my signal".  This is a _good reason for estimating_, because by using events you are mitigating risk.  This is often called a _hard deadline_.

2.  **To allow for the estimation of the [Pay-Off](Glossary#payoff) of an [action](Glossary#taking-action).**  This is a _bad reason for estimating_, as we will discuss in detail below.  But briefly, the main issue is that [Pay-Off](Glossary#pay-off) isn't just about figuring out [Schedule Risk](Scarcity-Risk#schedule-risk) - you should be looking at all the other [Attendant Risks](Glossary#attendant-risk) of the action too.  

## How Estimates Fail

Estimates are a huge source of contention in the software world:

> "Typically, effort estimates are over-optimistic and there is a strong over-confidence in their accuracy. The mean effort overrun seems to be about 30% and not decreasing over time." - [Software Development Effort Estimation, _Wikipedia_](https://en.m.wikipedia.org/wiki/Software_development_effort_estimation).

Why is it so bad?  The problem with a developer answering a question such as:

> "How long will it take to deliver X"

Is the following:

 - The developer likely doesn't know what X is, and any description of it is inadequate anyway ([Invisibility Risk](Communication-Risk#invisibility-risk)).
 - The developer has a less-than-complete understanding of the environment he will be delivering X in ([Complexity Risk](Complexity-Risk)).
 - The developer has some vague ideas about how to do X, but he'll need to try out various approaches until he finds exactly the right one ([Boundary Risk](Boundary-Risk) and [Learning-Curve Risk](Communication-Risk#learning-curve-risk)).
 - The developer has no idea what [Hidden Risk](Glossary#hidden-risk) will surface when he starts work on it.
 - The developer has no idea what will happen if he takes too long and misses the date by a day/week/month/year ([Schedule Risk](Scarcity-Risk#schedule-risk)).

... and so on.  So, his estimate is both wrong, and entirely contingent on what exact risks appear.

It's a problem as old as software itself, and in deference to that, let's examine the estimating problem via some "Old Saws".

## Old Saw #1: The "10X Developer"

> "A 10x developer is an individual who is thought to be as productive as 10 others in his or her field. The 10x developer would produce 10 times the outcomes of other colleagues, in a production, engineering or software design environment." - [10x Developer, _Techopedia_](https://www.techopedia.com/definition/31673/10x-developer)

Let's try and pull this apart:

 - How do we measure this "productivity"?  In Risk-First terms, this is about taking action to _transform_ our current position on the [Risk Landscape]() to a position of more favourable risk.  A "10X Developer" then must be able to take actions that have much higher [Payoff]() than a "1X Developer".  That is mitigating more [Initial Risk](Glossary#initial-risk), and generating less [Attendant Risk](Glossary#attendant-risk).  
 - It stands to reason then, that someone [taking action](Glossary#taking-action) _faster_ will leaving us with less [Schedule Risk]().
 - However, if they are _more expensive_, they may leave us with greater [Funding Risk]() afterwards.
 - But, [Schedule Risk]() isn't the only risk being transformed:   The result might be bugs, expensive new dependencies or spaghetti-code complexity.
 - The "10x" developer _must_ also leave behind less of these kind of risks too.
 - That means that the "10X Developer" isn't merely faster, but _taking different actions_.  They are able to use their talent and experience to see actions with greater pay-off than the 1X Developer.  
 
![1x Task vs 10x Task](images/generated/practices/estimates/1x-10x.png)

Debate rages as to whether the "10x Developer" even exists.  Crucially, it would seem that such a thing would be predicated on the existence of the "1X Developer", who gets "1x" worth of work done each day.  It's not clear that there is any such thing as an average developer who is mitigating risk at an average rate.  

Even good developers have bad days, weeks or projects.  [Taking Action](Glossary#taking-action) is like placing a bet.  Sometimes you lose and the [Pay-Off](Glossary#pay-off) doesn't appear:

 - The Open-Source software you're trying to apply to a problem doesn't solve it in the way you need.
 - A crucial use-case of the problem turns out to change the shape of the solution entirely, leading to lots of rework.
 - An assumption about how network security is configured turns out to be wrong, leading to a lengthy engagement with the infrastructure team.

### How to Be a "10x Developer"

The easiest way to be a "10x developer" is to have _done the job before_.  If you're coding in a familiar language, with familiar libraries and tools, delivering a cookie-cutter solution to a problem in the same manner you've done several times before, then you will be a "10x developer" compared to _you doing it the first time_:
 - There's no [Learning Curve Risk](Communication-Risk#learning-curve-risk), because you already learnt everything.
 - There's no [Dead End Risk](Complexity-Risk#dead-end-risk) because you already know all the right choices to make.     

### Old Saw #2: Parkinson's Law

We've already looked at Parkinson's Law in [Agency Risk](Agency-Risk#bureaucracy-risk), but lets recap:

> "Parkinson's law is the adage that 'work expands so as to fill the time available for its completion'." [Parkinson's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Parkinsons_law)  

Let's leave aside the [Agency Risk]() concerns this time.  Instead, let's consider this from a Risk-First perspective.  _Of course_ work would expand to fill the time available:  _Time available_ is an _absence of [Schedule Risk]()_, it's always going to be sensible to accept [Schedule Risk]() as a trade-off for other more serious risks.  

This is why projects will _always_ take at least as long as is budgeted for them.   

### A Case Study

Let's look at a quick example of this in action, taken from _Rapid Development_ by Steve McConnell.  At the point of this excerpt, Carl (the Project Manager) has already slipped the project twice, and is meeting the project sponsor, Bill, to announce another:

> ... At the 9-month mark, the team had completed detailed design, but coding still hadn't begun on some modules. It was clear that Carl couldn't make the 10-month schedule either. He announced the third schedule slip number— to 12 months. Bill's face turned red when Carl announced the slip, and the pressure from him became more intense.   `(1)`

> Carl began to feel that his job was on the line. Coding proceeded fairly well, but a few areas needed redesign and reimplementation. The team hadn't coordinated design details in those areas well, and some of their implementations conflicted. At the 11-month oversight-committee meeting, Carl announced the fourth schedule slip— to 13 months. Bill became livid. "Do you have any idea what you're doing?" he yelled. "You obviously don't have any idea! You obviously don't have any idea when the project is going to be done! I'll tell you when it's going to be done! It's going to be done by the 13-month mark, or you're going to be out of a job! I'm tired of being jerked around by you software guys! You and your team are going to work 60 hours a week until you deliver!"  `(2)`

> Carl felt his blood pressure rise, especially since Bill had backed him into an unrealistic schedule in the first place. But he knew that with four schedule slips under his belt, he had no credibility left. He felt that he had to knuckle under to the mandatory overtime or he would lose his job. Carl told his team about the meeting. They worked hard and managed to deliver the software in just over 13 months. Additional implementation uncovered additional design flaws, but with everyone working 60 hours a week, they delivered the product through sweat and sheer willpower. " `(3)` - [McConnell, Steve, _Rapid Development_](http://amzn.eu/d/eTWKOsK)

Despite this being a fictional or fictionalised example, it rings true for many projects.  From a Risk-First perspective, what happened here?

At point `(1)`, Carl's tries to mitigate [Feature Risk](Feature-Risk) by increasing [Schedule Risk](Schedule-Risk), although he knows that Bill will trust him less for doing this, as shown below:

![Carl's Schedule Slip increases Trust and Belief Risks](images/generated/practices/estimates/carl1.png)

At point `(2)`, after the schedule slips again, Bill threatens Carl's job.  Why does he do this?  Because _he doesn't trust Carl's evaluation of the [Schedule Risk]()_.  By telling Carl that it's his job on the line, he makes sure Carl appreciates the [Schedule Risk](). However, forcing staff to do overtime is a dangerous ploy:  it could disenfranchise the staff, or cause corners to be cut:

![Bill's Ultimatum](images/generated/practices/estimates/bill1.png)

At point `(3)`, we see that Bill's gamble worked (for him at least):  the project was delivered on time by the team working overtime for two months.  This was lucky - it seems unlikely that no-one quit and that the code didn't descend into a mess in that time.  

![Team Response](images/generated/practices/estimates/team1.png)

Take aways:
 
 - There's no fixed amount of time something will take.  It's not clear why the project needed to take thirteen months, or any number.   
 - If you give someone a period of time to do something, it'll either take that amount of time, or longer.
 - Don't wait until 9 months to meet reality.

## Old Saw #3: Quality, Speed, Cost: Pick Any Two

> "The Project Management Triangle (called also the Triple Constraint, Iron Triangle and "Project Triangle") is a model of the constraints of project management. While its origins are unclear, it has been used since at least the 1950s.[1] It contends that:
> - The quality of work is constrained by the project's budget, deadlines and scope (features).
> - The project manager can trade between constraints.
> - Changes in one constraint necessitate changes in others to compensate or quality will suffer." - [Project Management Triangle, _Wikipedia_](https://en.wikipedia.org/wiki/Project_management_triangle)

From a Risk-First perspective, we can now see that this is an over-simplification.  If _quality_ is a [Feature Fit](Feature-Risk) metric, _deadlines_ is [Schedule Risk](Scarcity-Risk#schedule-risk) and _budget_ refers to [Funding Risk](Scarcity-Risk#funding-risk) then that leaves us with a lot of risks unaccounted for:

 - I can deliver a project in very short order by building a bunch of screens that _do nothing_ (accruing _stunning levels of [Implementation Risk](Feature-Risk#implementation-risk) as I go). 
 - Or, by relying on a lottery win, I can completely mitigate the budgetary risks of a project.  (Although I would have _huge_ [Funding Risk](Scarcity-Risk#funding-risk) because _what are the chances of winning the lottery?_.  (You can bring in _any_ project at _any_ time by accepting crazy levels of risk.
 - And Brooks' Law contradicts this by saying you can't trade budget for deadlines:

> "Brooks' law is an observation about software project management according to which "adding human resources to a late software project makes it later". - [Brooks Law, _Wikipedia_](https://en.wikipedia.org/wiki/Brooks_law)

![Brooks' Law, Risk-First Style](images/generated/practices/estimates/brooks.png)

Focusing on just these three variables isn't enough.  You can game these variables by sacrificing others:  we need to be looking at the project's risk _holistically_:

 - There's no point in calling a project complete if the dependencies you are using are [unreliable](Dependency-Risk) or [undergoing rapid change](Scarcity-Risk#red-queen-risk) 
 - There's no point in delivering the project on time if it's an [Operational Risk](Operational-Risk) nightmare, and requires constant round-the-clock support and will cost a fortune to _run_.  (Working on a project that "hits it's delivery date" but is nonetheless a broken mess once in production is too common a sight.)
 - There's no point in delivering a project on-budget if [the market has moved on](Feature-Risk#market-risk) and [needs different features](Feature-Risk#feature-drift).  
 
## Agile Estimation

One alternative approach, must espoused in DevOps/Agile is to pick a short-enough period of time (say, two days or two weeks), and figure out what the most meaningful step towards achieving an objective would be in that time.   By fixing the time period, we remove [Schedule Risk](Scarcity-Risk#schedule-risk) from the equation, don't we?

Well, no.  First, how to choose the time period? [Schedule Risk]() tends to creep back in, in the form of something like [Man-Hours](https://en.wikipedia.org/wiki/Man-hour) or [Story Points](https://www.atlassian.com/agile/project-management/estimation): 

> "Story points rate the relative effort of work in a Fibonacci-like format: 0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100. It may sound counter-intuitive, but that abstraction is actually helpful because it pushes the team to make tougher decisions around the difficulty of work. " - [Story Points, _Atlassian_](https://www.atlassian.com/agile/project-management/estimation)

Second, the strategy of picking the two-day action with the greatest [Pay-Off](Glossary#pay-off) is _often good_.  After all, this is just [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent), and that's a perfectly good way for training [Machine Learning](https://en.wikipedia.org/wiki/Machine_learning) systems.  However, just like following a river downhill from the top of a mountain will _often_ get you to the sea, it probably won't take the shortest path, and sometimes you'll get stuck at a lake.  

The choice of using gradient descent means that you have given up on [Goals](Glossary#goal-in-mind).  Essentially, we have here the difference between "Walking towards a destination" and "Walking downhill".  Or, a planned economy and a market economy.  But, we don't live in _either_: everyone lives in some mixture of the two:  our governments _have plans_ for big things like roads and hospitals, and taxes.  Other stuff, they leave to the whims of supply and demand. 

A project always ends up being the same.

## Risk-First Estimating

Let's figure out what we can take away from the above experiences:

 - The proverb of the 10x developer, and the difference made by experience implies that a lot of [Schedule Risk](Scarcity-Risk#schedule-risk) comes from [Learning Curve](Communication-Risk#learning-curve-risk) risk and [Dead End Risk](Complexity-Risk#dead-end-risk).  
 - The lesson from the Parkinson's Law was that by giving people a _time budget_, you absolve them from [Schedule Risk](Scarcity-Risk#schedule-risk).  This gives them one less dimension of risk to worry about, but means they end up taking all the time you give them, because they are optimising over the remaining risks.
 - The lesson from "Quality, Speed, Cost" is that actually, we need to be considering _all_ risks, not just some arbitrary milestones on a project plan.  Project plans can always be gamed, and you can always leave risks unaccounted for in order to hit the goals (good old [Map and Territory Risk](Map-and-territory-risk) strikes again).
 - Finally, the lesson from Agile development is that _just iterating_ is sometimes not as efficient as _using your intuition and experience_ to find a more optimal path.  
 
How can we synthesise this knowledge, along with what we've learned into something that makes more sense?

1.  Estimating should be about _estimating [Pay Off](Glossary#pay-off)_:  for a given [action](Glossary#taking-action) / road-map / business strategy, what  [Attendant Risks](Glossary#attendant-risk) are we going to have when we get there?   Yes, we'll all be older (there _will be_ [Schedule Risk](Scarcity-Risk#schedule-risk)), but it's also about:

  - What bets are we making about where the [market](Feature-Risk#market-risk) will be?
  - What [Communication Risk](Communication-Risk) will we face explaining our product to people?
  - What [Feature Fit](Feature-Risk#feature-fit-risk) risks are we likely to have when we get there?
  - What [Complexity Risks](Complexity-Risk) will we face building our software?  How can we avoid it ending up as a [Big Ball Of Mud](Complexity-Risk#big-ball-of-mud)?
  - Where are we likely to face [Boundary Risks](Boundary-Risk) and [Dead End Risks](Complexity-Risk#dead-end-risk)
  
2. Given that most risk is likely to be [Learning Curve Risk]() and [Dead End Risk](), how can we front-load this and tackle these earlier?   
 - _Having a vocabulary_ (like the one Risk-First provides) allows us to do this.
 - Spike Solutions 
 -     
 
3. How can we meet reality early on the biggest risks?

Imagine that all the [Attendant Risks](Glossary#attendant-risk) are links in a chain, and in order for your course of action to work, all the links in the chain have to hold.  The _sensible_ approach would be to test the links _in order from weakest to strongest_.  This means working out how to meet reality for each risk in turn.  Often, a _strategy_ will be broken up into multiple actions.  _Which are the riskiest actions?_  Figure this out, using the Risk-First vocabulary and the best experience you can bring to bear, then, perform the actions which [Pay Off](Glossary#pay-off) the biggest risks first.  

4.  Talk Frankly About the Risks
 - If the task that's been given is clearly impossible, does that mean it's been misunderstood?  


Carl, a project manager, and Bill


5.  The Risk Landscape is increasingly complex


![Moves On The Risk Landscape](images/generated/practices/estimates/risk-landscape.png)



## Understanding "Failure": An Estimating Example



