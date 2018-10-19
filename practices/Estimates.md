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

 - The developer and the client likely don't agree on exactly what X is, and any description of it is inadequate anyway ([Invisibility Risk](Communication-Risk#invisibility-risk)).
 - The developer has a less-than-complete understanding of the environment he will be delivering X in ([Complexity Risk](Complexity-Risk) and [Map And Territory Risk](Map-And-Territory-Risk).
 - The developer has some vague ideas about how to do X, but he'll need to try out various approaches until he finds exactly the right one ([Boundary Risk](Boundary-Risk) and [Learning-Curve Risk](Communication-Risk#learning-curve-risk)).
 - The developer has no idea what [Hidden Risk](Glossary#hidden-risk) will surface when he starts work on it.
 - The developer has no idea what will happen if he takes too long and misses the date by a day/week/month/year ([Schedule Risk](Scarcity-Risk#schedule-risk)).

... and so on.  

The reason the estimate of _time_ is wrong is because [All Activity Is About Mitigating Risk](All-Risk-Management) and the estimate of _risk_ is wrong.

It's a problem as old as software itself, and in deference to that, let's examine the estimating problem via some "Old Saws".

## Old Saw #1: The "10X Developer"

> "A 10X developer is an individual who is thought to be as productive as 10 others in his or her field. The 10X developer would produce 10 times the outcomes of other colleagues, in a production, engineering or software design environment." - [10X Developer, _Techopedia_](https://www.techopedia.com/definition/31673/10X-developer)

Let's try and pull this apart:

 - How do we measure this "productivity"?  In Risk-First terms, this is about taking action to _transform_ our current position on the [Risk Landscape]() to a position of more favourable risk.  A "10X Developer" then must be able to take actions that have much higher [Payoff]() than a "1X Developer".  That is mitigating more [Initial Risk](Glossary#initial-risk), and generating less [Attendant Risk](Glossary#attendant-risk).  
 - It stands to reason then, that someone [taking action](Glossary#taking-action) _faster_ will leaving us with less [Schedule Risk]().
 - However, if they are _more expensive_, they may leave us with greater [Funding Risk]() afterwards.
 - But, [Schedule Risk]() isn't the only risk being transformed:   The result might be bugs, expensive new dependencies or spaghetti-code complexity.
 - The "10X" developer _must_ also leave behind less of these kind of risks too.
 - That means that the "10X Developer" isn't merely faster, but _taking different actions_.  They are able to use their talent and experience to see actions with greater pay-off than the 1X Developer.  
 
![1x Task vs 10X Task](images/generated/practices/estimates/1x-10x.png)

Debate rages as to whether the "10X Developer" even exists.  Crucially, it would seem that such a thing would be predicated on the existence of the "1X Developer", who gets "1x" worth of work done each day.  It's not clear that there is any such thing as an average developer who is mitigating risk at an average rate.  

Even good developers have bad days, weeks or projects.  [Taking Action](Glossary#taking-action) is like placing a bet.  Sometimes you lose and the [Pay-Off](Glossary#pay-off) doesn't appear:

 - The Open-Source software you're trying to apply to a problem doesn't solve it in the way you need.
 - A crucial use-case of the problem turns out to change the shape of the solution entirely, leading to lots of rework.
 - An assumption about how network security is configured turns out to be wrong, leading to a lengthy engagement with the infrastructure team.

### How to Be a "10X Developer"

The easiest way to be a "10X developer" is to have _done the job before_.  If you're coding in a familiar language, with familiar libraries and tools, delivering a cookie-cutter solution to a problem in the same manner you've done several times before, then you will be a "10X developer" compared to _you doing it the first time_:
 - There's no [Learning Curve Risk](Communication-Risk#learning-curve-risk), because you already learnt everything.
 - There's no [Dead End Risk](Complexity-Risk#dead-end-risk) because you already know all the right choices to make.     

## Old Saw #2: Quality, Speed, Cost: Pick Any Two

> "The Project Management Triangle (called also the Triple Constraint, Iron Triangle and "Project Triangle") is a model of the constraints of project management. While its origins are unclear, it has been used since at least the 1950s.  It contends that:
> - The quality of work is constrained by the project's budget, deadlines and scope (features).
> - The project manager can trade between constraints.
> - Changes in one constraint necessitate changes in others to compensate or quality will suffer."
>    - [Project Management Triangle, _Wikipedia_](https://en.wikipedia.org/wiki/Project_management_triangle)

From a Risk-First perspective, we can now see that this is an over-simplification.  If _quality_ is a [Feature Fit](Feature-Risk) metric, _deadlines_ is [Schedule Risk](Scarcity-Risk#schedule-risk) and _budget_ refers to [Funding Risk](Scarcity-Risk#funding-risk) then that leaves us with a lot of risks unaccounted for:

 - I can deliver a project in very short order by building a bunch of screens that _do nothing_ (accruing _stunning levels of [Implementation Risk](Feature-Risk#implementation-risk) as I go). 
 - Or, by relying on a lottery win, project's budget is fine.  (Although I would have _huge_ [Funding Risk](Scarcity-Risk#funding-risk) because _what are the chances of winning the lottery?_.  (You can bring in _any_ project at _any_ time by accepting crazy levels of risk.
 - And Brooks' Law contradicts this by saying you can't trade budget for deadlines:

> "Brooks' law is an observation about software project management according to which "adding human resources to a late software project makes it later". - [Brooks Law, _Wikipedia_](https://en.wikipedia.org/wiki/Brooks_law)

![Brooks' Law, Risk-First Style](images/generated/practices/estimates/brooks.png)

Focusing on just these three variables isn't enough.  You can game these variables by sacrificing others:  we need to be looking at the project's risk _holistically_:

 - There's no point in calling a project complete if the dependencies you are using are [unreliable](Dependency-Risk) or [undergoing rapid change](Scarcity-Risk#red-queen-risk) 
 - There's no point in delivering the project on time if it's an [Operational Risk](Operational-Risk) nightmare, and requires constant round-the-clock support and will cost a fortune to _run_.  (Working on a project that "hits it's delivery date" but is nonetheless a broken mess once in production is too common a sight.)
 - There's no point in delivering a project on-budget if [the market has moved on](Feature-Risk#market-risk) and [needs different features](Feature-Risk#feature-drifts).  

### Old Saw #3: Parkinson's Law

We've already looked at Parkinson's Law in [Agency Risk](Agency-Risk#bureaucracy-risk), but lets recap:

> "Parkinson's law is the adage that 'work expands so as to fill the time available for its completion'." [Parkinson's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Parkinsons_law)  

Let's leave aside the [Agency Risk](Agency-Risk) concerns this time.  Instead, let's consider this from a Risk-First perspective.  _Of course_ work would expand to fill the time available:  _Time available_ is an _absence of [Schedule Risk]()_, it's always going to be sensible to accept [Schedule Risk]() as a trade-off for other more serious risks.  

This is why projects will _always_ take at least as long as is budgeted for them.   

### A Case Study

Let's look at a quick example of this in action, taken from [Rapid Development by Steve McConnell](http://amzn.eu/d/eTWKOsK).  At the point of this excerpt, Carl (the Project Manager) is discussing the schedule with Bill, the project sponsor: 

> "I think it will take about 9 months, but that's just a rough estimate at this point," Carl said. "That's not going to work," Bill said. "I was hoping you'd say 3 or 4 months. We absolutely need to bring that system in within 6 months. Can you do it in 6?" `(1)`

Later in the story, the schedule has slipped twice and is about to slip again:

> ... At the 9-month mark, the team had completed detailed design, but coding still hadn't begun on some modules. It was clear that Carl couldn't make the 10-month schedule either. He announced the third schedule slip number— to 12 months. Bill's face turned red when Carl announced the slip, and the pressure from him became more intense.   `(2)`

At point `(2)`, Carl's tries to mitigate [Feature Risk](Feature-Risk) by increasing [Schedule Risk](Schedule-Risk), although he knows that Bill will trust him less for doing this, as shown below:

![Carl's Schedule Slip increases Trust and Belief Risks](images/generated/practices/estimates/carl1.png)

> Carl began to feel that his job was on the line. Coding proceeded fairly well, but a few areas needed redesign and reimplementation. The team hadn't coordinated design details in those areas well, and some of their implementations conflicted. At the 11-month oversight-committee meeting, Carl announced the fourth schedule slip— to 13 months. Bill became livid. "Do you have any idea what you're doing?" he yelled. "You obviously don't have any idea! You obviously don't have any idea when the project is going to be done! I'll tell you when it's going to be done! It's going to be done by the 13-month mark, or you're going to be out of a job! I'm tired of being jerked around by you software guys! You and your team are going to work 60 hours a week until you deliver!"  `(3)`

At point `(3)`, after the schedule slips again, Bill threatens Carl's job.  Why does he do this?  Because _he doesn't trust Carl's evaluation of the [Schedule Risk]()_.  By telling Carl that it's his job on the line, he makes sure Carl appreciates the [Schedule Risk](). However, forcing staff to do overtime is a dangerous ploy:  it could disenfranchise the staff, or cause corners to be cut:

![Bill's Ultimatum](images/generated/practices/estimates/bill1.png)

> Carl felt his blood pressure rise, especially since Bill had backed him into an unrealistic schedule in the first place. But he knew that with four schedule slips under his belt, he had no credibility left. He felt that he had to knuckle under to the mandatory overtime or he would lose his job. Carl told his team about the meeting. They worked hard and managed to deliver the software in just over 13 months. Additional implementation uncovered additional design flaws, but with everyone working 60 hours a week, they delivered the product through sweat and sheer willpower. " `(4)` - [McConnell, Steve, _Rapid Development_](http://amzn.eu/d/eTWKOsK)

At point `(4)`, we see that Bill's gamble worked (for him at least):  the project was delivered on time by the team working overtime for two months.  This was lucky - it seems unlikely that no-one quit and that the code didn't descend into a mess in that time.  

![Team Response](images/generated/practices/estimates/team1.png)

Despite this being a fictional (or fictionalised) example, it rings true for many projects.  What _should_ have happened at point `(1)`?  Both Carl and Bill estimated incorrectly...  Or did they? 
 
## Agile Estimation

One alternative approach, must espoused in DevOps/Agile is to pick a short-enough period of time (say, two days or two weeks), and figure out what the most meaningful step towards achieving an objective would be in that time.   By fixing the time period, we remove [Schedule Risk](Scarcity-Risk#schedule-risk) from the equation, don't we?

Well, no.  First, how to choose the time period? [Schedule Risk](Scarcity-Risk#schedule-risk) tends to creep back in, in the form of something like [Man-Hours](https://en.wikipedia.org/wiki/Man-hour) or [Story Points](https://www.atlassian.com/agile/project-management/estimation): 

> "Story points rate the relative effort of work in a Fibonacci-like format: 0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100. It may sound counter-intuitive, but that abstraction is actually helpful because it pushes the team to make tougher decisions around the difficulty of work. " - [Story Points, _Atlassian_](https://www.atlassian.com/agile/project-management/estimation)

Second, the strategy of picking the two-day action with the greatest [Pay-Off](Glossary#pay-off) is _often good_.  After all, this is just [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent), and that's a perfectly good way for training [Machine Learning](https://en.wikipedia.org/wiki/Machine_learning) systems.  However, just like following a river downhill from the top of a mountain will _often_ get you to the sea, it probably won't take the shortest path, and sometimes you'll get stuck at a lake.  

The choice of using gradient descent means that you have given up on [Goals](Glossary#goal-in-mind):  Essentially, we have here the difference between "Walking towards a destination" and "Walking downhill".  Or, if you like, a planned economy and a market economy.  But, we don't live in _either_: everyone lives in some mixture of the two:  our governments _have plans_ for big things like roads and hospitals, and taxes.  Other stuff, they leave to the whims of supply and demand.   A project always ends up being the same.

## Risk-First Estimating

Let's figure out what we can take away from the above experiences:

 - The 10X developer saw, and the difference made by experience implies that a lot of the effort on a project comes from [Learning Curve Risk](Communication-Risk#learning-curve-risk) and [Dead End Risk](Complexity-Risk#dead-end-risk).  
 - The lesson from "Quality, Speed, Cost" is that actually, we need to be considering _all_ risks, not just some arbitrary milestones on a project plan.  Project plans can always be gamed, and you can always leave risks unaccounted for in order to hit the goals (good old [Map and Territory Risk](Map-and-territory-risk) strikes again).
 - The lesson from the Parkinson's Law was that by giving people a _time budget_, you absolve them from [Schedule Risk](Scarcity-Risk#schedule-risk)... at least until they realise they're going to overrun.   This gives them one less dimension of risk to worry about, but means they end up taking all the time you give them, because they are optimising over the remaining risks.
 - Finally, the lesson from Agile Estimation is that _just iterating_ is sometimes not as efficient as _using your intuition and experience_ to find a more optimal path.  
 
How can we synthesise this knowledge, along with what we've learned into something that makes more sense?

#### Tip #1: Estimating Should be About _Estimating [Pay Off](Glossary#pay-off)_

For a given [action](Glossary#taking-action) / road-map / business strategy, what [Attendant Risks](Glossary#attendant-risk) are we going to have when we get there?   Yes, we'll all be older (there _will be_ [Schedule Risk](Scarcity-Risk#schedule-risk)), but it's also about:

  - What bets are we making about where the [market](Feature-Risk#market-risk) will be?
  - What [Communication Risk](Communication-Risk) will we face explaining our product to people?
  - What [Feature Fit](Feature-Risk#feature-fit-risk) risks are we likely to have when we get there?
  - What [Complexity Risks](Complexity-Risk) will we face building our software?  How can we avoid it ending up as a [Big Ball Of Mud](Complexity-Risk#big-ball-of-mud)?
  - Where are we likely to face [Boundary Risks](Boundary-Risk) and [Dead End Risks](Complexity-Risk#dead-end-risk)

Instead of the Agile Estimation being about picking out a story-point number based on some idealised amount of typing that needs to be done, it should be about surfacing and weighing up risks.  e.g:

 - "I think this task is problematic because it's going to massively increase our [Dependency Risk]() to add a new database here."
 - "I don't think we should have component A interacting with component B because it'll introduce extra [Communication Risk]() which we will always be tripping over."
 - "I worry we might not understand what the sales team want and are facing [Implementation Risk]().  How about we try and get agreement on a specification?"  
 
#### Tip #2: The Risk Landscape is Increasingly Complex: Utilise This

![Journey via the Central Line](images/estimates/central-line.png)

If you were travelling across London from Ealing (in the West) to Stratford (in the East) the _fastest_ route might be to take the Central Line.  You could do it via the A406 road, which would take a _bit_ longer.  It would _feel_ like you're mainly going in completely the wrong direction doing that, but it's much faster than cutting straight through London and you don't pay the congestion charge.

![Journey by Car](images/estimates/car.png)

In terms of risk, they all have different profiles.  You're often delayed in the car, by some amount.  The tube is _generally_ reliable, but when it breaks down or is being repaired it might end up quicker to walk.  

If you were doing this same journey on foot, it's a very direct route, but would take five times longer.  However, if you were making this journey a hundred years ago, that might be the way you chose (horseback might be a bit faster).

![Journey on Foot](images/estimates/foot.png)
 
In the software development past, _building it yourself_ was the only way to get anything done.  It was like London _before road and rail_.   Nowadays, you are bombarded with choices.  It's actually _worse than London_ because it's not even a two-dimensional geographic space and there are multitudes of different routes and acceptable destinations.  Journey planning on the software [Risk Landscape](Glossary#risk-landscape) is an optimisation problem _par excellence_. 

![Possible Moves On The Risk Landscape](images/generated/practices/estimates/risk-landscape.png)

Because the modern [Risk Landscape](Glossary#risk-landscape) is so complex:

 - There can be orders of magnitude difference in _time_, with very little difference in destination.
 - If it's [Schedule Risk]() you're worried about, _Code Yourself_ isn't a great solution (for the whole thing, anyway).  "Take the tube" and at least partly use something someone built already.  There are probably multiple alternatives you can consider.
 - If no one has built something similar already, then why is that?  Have you formulated the problem properly?
 - Going the wrong way is _so much easier_.
 - Dead-Ends (like a broken Central Line) are much more likely to trip you up.
 - You need to keep up with developments in your field.   Read widely.
   
#### Tip #3: Meet Reality Early on the Biggest Risks

In getting from A to B on the [Risk Landscape](Glossary#risk-landscape), imagine that all the [Attendant Risks](Glossary#attendant-risk) are the stages of a journey.  Some might be on foot, train, car and so on.  In order for your course of action to work, all the stages in the journey have to succeed.  

Although you might have to make the steps of a journey in some order, you can still mitigate risk in a different order.   For example, checking the trains are running, making sure your bike is working, booking tickets and taxis, and so on.  

The _sensible_ approach would be to test the steps _in order from weakest to strongest_.  This means working out how to meet reality for each risk in turn, in order from biggest risk to smallest.

Often, a _strategy_ will be broken up into multiple actions.  _Which are the riskiest actions?_  Figure this out, using the Risk-First vocabulary and the best experience you can bring to bear, then, perform the actions which [Pay Off](Glossary#pay-off) the biggest risks first.  

As we saw from the "10X Developer" saw, [Learning Curve Risk](Communication-Risk#learning-curve-risk) and [Dead End Risk](Complexity-Risk#dead-end-risk), are likely to be the biggest risks.  How can we front-load this and tackle these earlier?   

 - _Having a vocabulary_ (like the one Risk-First provides) allows us to _at least talk about these_.  e.g. "I believe there is a [Dead End Risk]() that we might not be able to get this software to run on Linux."
 - Build mock-ups:  
   - UI wireframes allow us to bottom out the [Communication Risk](Communication-Risk) of the interfaces we build.  
   - [Spike Solutions]() allow us to test algorithms and approaches before making them part of the main development.
 - Don't pick delivery dates far in the future.  Collectively work out the biggest risks with your clients, and then arrange the next possible date to demonstrate the mitigation.  
 - Do actions _early_ that are _simple_ but are nevertheless show-stoppers.  They are as much a source of [Hidden Risk]() as more obviously tricky actions. 

#### Tip #4: Talk Frankly About All The Risks

Let's get back to Bill and Carl.  What went wrong between points `(1)` and `(2)`?   Let's break it down:

 - **Bill _wants_ the system in 3-4 months.**  It doesn't happen.  
 - **He says it "must be delivered in 6 months", but this doesn't happen either.**  However, the world (and the project) doesn't end: _it carries on_.   What does this mean about the truth of his statement?  Was he deliberately lying, or just espousing his view on the [Schedule Risk](Scarcity-Risk#schedule-risk)?
 - **Carl's original estimate was 9 months.**   Was he working to this all along?  Did the initial brow-beating over deadlines at point `(1)` contribute to [Agency Risk](Agency-Risk) in a way that _didn't_ happen at point `(2)`?
 - **Why _did_ Bill get so angry?**  His understanding of the [Schedule Risk](Scarcity-Risk#schedule-risk) was, if anything, _worse_ than Carl's.  It's not stated in the account, but it's likely the [Trust Risk](Communication-Risk#trust-risk) moved upwards:  Did his superiors stop trusting him?  Was his job at stake?
 - **How could including this risk in the discussion have improved the planning process?**  Could the conversation have started like this instead?

> "I think it will take about 9 months, but that's just a rough estimate at this point," Carl said. "That's not going to work," Bill said. "I was hoping you'd say 3 or 4 months.  I need to show the board something by then or I'm worried they will lose confidence in me and this project".  

> "OK," said Carl.  "But I'm really concerned we have huge [Feature Fit Risk](Feature-Risk#feature-fit-risk).  The task of understanding the requirements and doing the design is massive."

> "Well, in my head it's actually pretty simple, " said Bill. "Maybe I don't have the full picture, or maybe your idea of what to build is more complex than I think it needs to be.  That's a massive risk right there and I think we should try and mitigate it right now before things progress.  Maybe I'll need to go back to the board if it's worse than I think. "

![Identifying The Action](images/generated/practices/estimates/bill2.png)

#### Tip #5: Picture Worrying Futures

The Bill/Carl problem is somewhat trivial (not to mention likely fictional).  How about one from real life?  On a project I was working on in November some years ago, we had two pieces of functionality we needed: Bulk Uploads and Spock Integration.  (It doesn't really matter what these are).  The bulk uploads would be useful _now_.  But, the Spock Integration wasn't due until January.  In the Spock estimation meeting I wrote the following note:

> "Spock estimates were 4, 11 and 22 until we broke it down into tasks.  Now, estimates are above 55 for the whole piece.  And worryingly, we probably don’t have all the tasks.  We know we need bulk uploads in November.  Spock is January.  So, do bulk uploads? "

The team _wanted_ to start Bulk Uploads work.  After all, from these estimates it looked like Spock could easily be completed in January.   However, the question should have been:

> "If it was February now, and we'd _got nothing done_, what would our biggest risk be?"

Missing Bulk Uploads wouldn't be a show-stopper, but missing Spock would be a huge regulatory problem.  _Start work on the things you can't miss. _ 

This is the essence of De-Risking.  



