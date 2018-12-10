![Draft](images/state/draft.png)

[Process Risk](Process-Risk), as we will see, is the risk you take on whenever you embark on completing a _process_. 

> "**Process:** A process is a set of activities that interact to achieve a result." - [Process, _Wikipedia_](https://en.wikipedia.org/wiki/Process)

In the software development world (and the business world generally) processes commonly involve _forms_:  If you're filling out a form (whether on paper or on a computer) then you're involved in a process of some sort, whether an "Account Registration" process, "Loan Application" process or "Consumer Satisfaction Survey" process.  But sometimes, they involve events occurring:  a [build process](https://en.wikipedia.org/wiki/Software_build) might start after you commit some code, for example.

## The Purpose Of Process

Process exists to mitigate other kinds of risk.  For example:

 - **[Coordination Risk](Coordination-Risk):**   You can often use process to help people coordinate.  For example, a [Production Line](https://en.wikipedia.org/wiki/Production_line) is a process where work being done by one person is pushed to the next person when it's done.  A meeting booking process is designed to efficiently allocate meeting rooms. 
 - **[Operational Risk](Operational-Risk):**  This encompasses the risk of people _not doing their job properly_.  But, by having a process, (and asking, did this person follow the process?) you can draw a distinction between a process failure and a personnel failure.  For example, making a loan to a money launderer _could_ be a failure of the loan agent.   But, if they followed the _process_, it's a failure of the [Process](Process-Risk) itself. 
 - **[Complexity Risk](Complexity-Risk):** Working _within a process_ can reduce the amount of [Complexity](Complexity-Risk) you have to think about.  We accept that processes are going to slow us down, but we appreciate the reduction in risk this brings.  Clearly, the complexity hasn't gone away, but it's hidden within design of the process.  For example, [McDonalds](https://en.wikipedia.org/wiki/McDonald's) tries to design its operation so that preparing each food item is a simple process to follow, reducing complexity (and training time) for the staff.

![Introducing process can mitigate many risks for a team, but there are attendant process risks created.](images/generated/risks/process/process-risk-introduction.png)

These are all examples of [Risk Mitigation](Glossary#Mitigated-risk) for the _owners_ of the process.  But the _consumers_ of the process end up picking up [Process Risks](Process-Risk) too:

 - **[Invisibility Risk](Communication-Risk#invisibility-risk):** It's often not possible to see how far along a process is to completion.  Sometimes, you can do this to an extent.  For example, when I send a package for delivery, I can see roughly how far it's got on the tracking website.  But, this is still less-than-complete information, and is a representation of reality.    
 - **[Feature Fit Risk](Feature-Risk#feature-fit-risk):** You have to be careful to match the process to the outcome you want.  Sometimes, it's easy to waste time on the wrong process, for example filling out a
 - **[Dead-End Risk](Complexity-Risk#dead-end-risk):** Even if you have the right process, initiating a process has no guarantee that your efforts won't be wasted and you'll be back where you started from.  The chances of this happening increase as you get further from the standard use-case for the process, and the sunk cost increases with the length of time the process takes to complete.
 - **[Feature Access Risk](Feature-Risk#feature-access-risk):** Processes generally handle the common stuff, but ignore the edge cases.  If the exceptional cases are not dealt with in 

### Processes And Invisibility Risk

Processes tend to work well for the common cases, because *practice makes perfect*.  but they are really tested when unusual situations occur.  Expanding processes to deal with edge-cases incurs [Complexity Risk](Complexity-Risk), so often it's better to try and have clear boundaries of what is "in" and "out" of the process' domain.

Sometimes, processes are _not_ used commonly.  How can we rely on them anyway?  Usually, the answer is to build in extra [feedback loops](Glossary#feedback-loop) anyway:

- Testing that backups work, even when no backup is needed.
- Running through a disaster recovery scenario at the weekend.
- Increasing the release cadence, so that we practice the release process more.

The feedback loops allow us to perform [Retrospectives and Reviews](Review) to improve our processes. 
 
### Bureaucracy Risk

Where we've talked about process evolution above, the actors involved have been acting in good faith:   they are working to mitigate risk in the organisation.  The [Process Risk](Process-Risk) that accretes along the way is an _unintended consequence_:  There is no guarantee that the process that arises will be humane and intuitive.  Many organisational processes end up being baroque or Kafka-esque, forcing unintuitive behaviour on their users.  This is partly because process design is _hard_, and it's difficult to anticipate all the various ways a process will be used ahead-of-time.  So, some of [Bureaucracy Risk](Process-Risk#bureaucracy-risk) is due to [Complexity](Complexity-Risk).

But [Parkinson's Law](https://en.wikipedia.org/wiki/Parkinsons_law) takes this one step further:  the human actors shaping the organisation will abuse their positions of power in order to further their own careers (this is [Agency Risk](Agency-Risk), which we will come to in a future section):

> "Parkinson's law is the adage that "work expands so as to fill the time available for its completion". It is sometimes applied to the growth of bureaucracy in an organisation... He explains this growth by two forces: (1) 'An official wants to multiply subordinates, not rivals' and (2) 'Officials make work for each other.'" - [Parkinson's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Parkinsons_law)  

This implies that there is a tendency for organisations to end up with _needless levels of [Bureaucratic Risk](Process-Risk#bureaucracy-risk)_.
 


### Sign-Offs

Often, Processes will include sign-off steps.  The [Sign-Off](Sign-Off) is an interesting mechanism:  
 - By signing off on something for the business, people are usually in some part staking their reputation on something being right. 
 - Therefore, you would expect that sign-off involves a lot of [Agency Risk](Agency-Risk):  people don't want to expose themselves in career-limiting ways.  
 - Therefore, the bigger the risk they are being asked to swallow, the more cumbersome and protracted the sign off process.  
 
Often, [Sign Offs](Sign-Off) boil down to a balance of risk for the signer:  on the one hand, _personal, career risk_ from signing off, on the other, the risk of upsetting the rest of the staff waiting for the sign-off, and the [Dead End Risk](Complexity-Risk#dead-end-risk) of all the effort gone into getting the sign off if they don't.  

This is a nasty situation, but there are a couple of ways to de-risk this: 
 - break [Sign Offs](Sign-Off) down into bite-size chunks of risk that are acceptable to those doing the sign-off.  
 - Agree far-in-advance the sign-off criteria.  As discussed in [Risk Theory](Evaluating-Risk), people have a habit of heavily discounting future risk, and it's much easier to get agreement on the _criteria_ than it is to get the sign-off. 

### Software Processes

tbd


tbd. processes as a response to legal environment.

## Evolution Of Process

Why do we build processes?  I am going to argue that the main reason this happens is due to risk mitigation.  Processes form because of a desire to mitigate risk.  And, when we follow that desire, we end up in an evolutionary or gradient-descent style scenario of risk reduction.

Here, we are going to look at how a [Business Process](https://en.wikipedia.org/wiki/Business_process) might mature within an organisation.

> "**Business Process** or **Business Method** is a collection of related, structured activities or tasks that in a specific sequence produces a service or product (serves a particular business goal) for a particular customer or customers." - [Business Process, _Wikipedia_](https://en.wikipedia.org/wiki/Business_process)

Let's look at an example of how that can happen in a step-wise way.

![Step 1: Clients `C` need `A` to do their jobs](images/generated/risks/process/step1.png)

1.  As the above diagram shows, there exists a group of people inside a company `C`, which need a certain something `A` in order to get their jobs done.  Because they are organising, providing and creating `A` to do their jobs, they are responsible for all the [Complexity Risk](Complexity-Risk) of `A`.  The harder it is for them to secure `A`, the higher the risk.

![Step 2: Team `B` doing `A` for clients `C`](images/generated/risks/process/step2.png)

2.  Because `A` is so complex, a new team (`B`) is spun up to deal with the [Complexity Risk](Complexity-Risk), which lets `C` get on with their "proper" jobs.  As shown in the diagram above, this is really useful:  It makes `C`'s job much easier (reduced [Complexity Risk](Complexity-Risk)) as they have an easier path to `A` than before.  But the risk for `A` hasn't really gone - they're now just dependent on `B` instead.  When members of `B` fail to deliver, this is [Staff Risk](Scarcity-Risk#staff-risk) for `C`.   

![Step 3: Team `B` formalises the arrangement with a Process](images/generated/risks/process/step3.png)

3. Problems are likely to occur eventually in the `B`/`C` relationship.  Perhaps some members of the `B` team give better service than others, or deal with more variety in requests.   In order to standardize the response from `B`, and also to reduce scope-creep in requests from `C`, `B` organises bureaucratically, so that there is a controlled process (`P`) by which `A` can be accessed.  Members of teams `B` and `C` now interact via some request mechanism like forms (or another protocol).  

  - Since this is [Abstraction](Glossary#abstraction), `C` now has [Invisibility Risk](Communication-Risk#invisibility-risk) since it can't access team `B` and see how it works.
  - As shown in the above diagram, because of `P`, `B` can now deal with requests on a first-come-first-served basis and deal with them all in the same way: the more unusual requests from `C` might not fit the model.  These [Complexity Risks](Complexity-Risk) are now the problem of the form-filler in `C`.   
  - Team `B` may also use `P` to introduce other bureaucracy like authorisation and sign-off steps or payment barriers.   All of this increases complexity for team C. 

![Person D acts as a middleman for customers needing some variant of `A`](images/kite9/process-risk-6.png)

4.  Teams like `B` can sometimes end up in "Monopoly" positions within a business.  This means that clients like `C` are forced to deal with whatever process `B` wishes to enforce.  Although they are unable to affect process `P`, `C` still have risks they want to transfer.  In the above diagram, Person `D`, who has experience working with team `B` acts as a middleman for some of `C`, requiring some variant of `A` .  They are able to help navigate the bureaucratic process (handle with [Process Risk](Process-Risk)).  The cycle potentially starts again: will `D` end up becoming a new team, with a new process? 

In this example, you can see how the organisation evolves to mitigate risk around the use (and misuse) of `A`:  First, [Complexity Risk](Complexity-Risk), then [Coordination Risk](Coordination-Risk), then [Staff Risk](Scarcity-Risk#staff-risk) and finally, the [Process Risk](Process-Risk) was created to mitigate everything else.  This is an example of _Process following Strategy_: 

> In this conception, you can see how the structure of an organisation (the teams and processes within it, the hierarchy of control) will 'evolve' from the resources of the organisation and the strategy it pursues.  Processes evolve to meet the needs of the organisation." - [Minzberg, _Strategy Safari_](http://www.mintzberg.org/books/strategy-safari)

## An Example - Release Process

For many years I have worked in the Finance Industry, and it's given me time to observe how, across an entire industry, process can evolve, both in response to regulatory pressure but also because of organisational maturity, and mitigating risks:

1. Initially, I could release software by logging onto the production accounts with a password that everyone knew, and deploy software or change data in the database.  
2. The first issue with this is [bad actors](Agency-Risk):  How could you know that the numbers weren't being altered in the databases? Production auditing came in so that at least you could tell _who was changing what_, in order to point the blame later.
3. But, there was still plenty of scope for deliberate or accidental damage.  I personally managed to wipe production data on one occasion by mistaking it for a development environment. Eventually, passwords were taken out of the hands of developers and you needed approval to "break glass" to get onto production.  
4. Change Requests were introduced.  This is another approval process which asks you to describe what you want to change in production, and why you want to change it.  In most places, this was quite an onerous process, so the unintended consequence was that release cadence was reduced.
5. The change request software is generally awful, making the job of raising change requests tedious and time-consuming.  Therefore, developers would _automate_ the processes for release, sometimes including the process to write the change request.  This allowed them to improve release cadence, at the expense of owning more code.
6. Auditors didn't like the fact that this automation existed, because effectively, that meant that developers could get access to production with the press of a button, effectively taking you back to step 1.   So auditing of Change Requests had to happen.

... and so on.  


