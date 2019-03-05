![Under Construction](images/state/uc.png)


## What Is It

Prioritisation is a key process in trying to focus on building _useful_ stuff first.   It could look like:

 - [A Sprint Planning Meeting](Agile): Deciding on the most important things for the team to build in a time period.
 - [Phased Delivery](Waterfall): Breaking a large project into smaller-scoped projects.
 - [A Backlog](Lean): Having tasks or stories in delivery order in a queue.
 - **Task Decomposition**:  Breaking down larger units of a task into smaller items.  Often, [Requirements](Requirements-Capture) come _bundled together_ and need to be broken down so that we work on just the most vital parts, as in
 - [Identifying the MVP](): Trying to cast out _all_ non-essential functionality.    
 
**Prioritisation** relies on not delivering all the functionality in one go.  But it tends to be a spectrum:

- **Big Bang**:  Delivering all the functionality in a single go.
- **Cycles, or Phases**:  Splitting a large project into smaller chunks.
- **Sprints**: Delivering with a fixed cadence, e.g. every month or week.
- [Continuous Delivery](Continous-Delivery): Delivering functionality one-piece-at-a-time.

Usually, risk is mitigated by **Prioritisation**.  But sometimes, it's not appropriate:  When Finland changed from driving on the right side of the road to the left, (in order to be in line with the rest of Europe) the changeover _had_ to be **Big Bang** and the whole country changed [overnight]().

## How It Works

There are several ways you can prioritise work:

- **Largest Mitigation First**:  What's the thing we can do right now to reduce our [Attendant Risk](Glossary.md#attendant-risk) most?  This is sometimes hard to quantify, given [Hidden Risk](Glossary.md#Hidden-Risk), so maybe an easier metric is...
- **Biggest Win**:  What's the best thing we can do right now to reduce [Attendant Risk](Glossary.md#attendant-risk) for least additional [Schedule-Risk](Scarcity-Risk#schedule-risk)?  (i.e. simply considering how much *work* is likely to be involved)
- **Dependency Order**:  Sometimes, you can't build Feature A until Feature B is complete.   Prioritisation helps to identify and mitigate [Dependency Risk](Dependency-Risk.md).

By prioritising, you get to [Meet Reality](Meeting-Reality) _sooner_ and _more frequently_ and in _small chunks_.

## Feedback Loops & Risks Mitigated

### [Review](Sign-Off) 

This one way in which a particular prioritisation [Meets Reality](Meeting-Reality)

- Developers might tell you that the ordering incurs [Dependency Risk](Dependency-Risk.md) or [Coordination Risk](Coordination-Risk.md) if everyone is going to end up working on the same components.
- Product Owners might tell you that you're not tackling the right [Feature Risk](Feature-Risk.md).
- If you're trying to work out what the [MVP]() is, prioritisation might help your investors determine whether the project is worth [funding](Scarcity-Risk#schedule-risk).

### [Production Risk](Production-Risk)

Breaking a large delivery down into lots of small releases has an impact on [Production Risk](Production-Risk):

 - Usually, lots of small releases allows you to _practice_ the release process while the project is relatively unimportant.  This experience allows you to figure out automation and reduce the [Process Risk](Process-Risk) of releasing too.
 - Smaller, higher-cadence releases also reduce [Visibility Risk](Visibility-Risk), because users don't have large amounts of change to get accustomed to all-in-one-go.   
 
### [Schedule Risk](Scarcity-Risk#schedule-risk)

If you're able to do [Continuous Delivery](DevOps), and have de-risked the release process, then you can eliminate some [Schedule Risk](Scarcity-Risk#schedule-risk), because you'll know you can hit any date with _something_.  The risks of what you deliver on that date are then [Feature Risk]() rather than [Schedule Risk](Scarcity-Risk#schedule-risk).

## Attendant Risks

### [Dependency Risk](Dependency-Risk.md)

The biggest risk to phased delivery is that you try and build functionality **now** that actually relies on things scheduled to be built **later**.  

### [Schedule Risk](Scarcity-Risk#schedule-risk)

Sometimes, releases have a _cost_ associated with them in terms of time and bureaucracy to perform them.   Obviously, then, the more releases you'll do, the less time you'll spend doing _other stuff_, like building functionality.   The trick to doing frequent releases is therefore to ensure they are _low cost_, and this means [automation](DevOps).   But, building automation adds schedule risk too.

### [Complexity Risk](Complexity-Risk.md)

If you are replacing an old system with a new one, incrementally replacing functionality is a good way to go when the system is complex.  However, this means that you're going to have two systems running at the same time, which is inevitably [more complex](Complexity-Risk.md) than just one system.  



### PLanning

- also  gannt chart
- critical path
- roadmap
- dependency analysis

Discuss the tool Duncan and I used to determine whether a release date was feasible.

- planning using risk

https://en.wikipedia.org/wiki/Planning_fallacy

-- estimating:  holding the risks in your hand and saying, which is heavier?


Risk-First planning:  break down the goal into the biggest risks3