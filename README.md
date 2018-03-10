# Welcome





Where do the risks of the project lie?  It depends on whether you are in development or in production.  If you’re still in development, then the risks are around things like time, money, morale, retaining good staff and so on.  When you’re in production, the risks are different, and those are the ones I want to talk about first.  

1.  Modelling The Risk Landscape

As developers we should be considering what the risk landscape will look like after the first release. 

What are the Immediate Risks then?

1. The users can’t access it
2. The data gets lost, stolen. 
3. The data is wrong or corrupted
4. There are bugs that prevent the functionality working
5. The functionality isn’t there that the user needs.

There are Attendant Consequences of these failures. These are the problems the users face as a result of those risks materialising:

* If they can’t access it, does that mean that they’re stuck unable to get on the train?  Or they can’t listen to music?  
* If the data is lost, does this mean that no one can get on the plane?  Or that the patients have to have their CAT scans done again?  Or that people’s private information is scattered around the internet?
* If the data is wrong, does that mean that the wrong people get sent their parcels?  Do they receive the wrong orders?  Do they end up going to the wrong courses?
* If there are bugs, does it mean that their pictures don’t end up on the internet?  Does it mean that they have to restart the program?  Does it mean that they’ll waste time, or that they end up thinking they have insurance but haven’t?  (Obviously, there is some cross-over here with data loss)
* If there is missing functionality, will they not buy the system?  Will they use a competitor’s product?  Will they waste time doing things a harder or less optimal way?

The Negative Outcomes of these individual Attendant Consequences are also easy to predict:

* Losing Revenue
* Legal Culpability
* Losing Users
* Bad Reputation
* etc.

For any software delivery, the Immediate Risks are often very similar, and few in number.  There are only a few ways your software project can go wrong, as all software projects have similar characteristics around manipulating and storing data of varying kinds. 

The Attendant Consequences are more varied, and will heavily depend on what the project is doing. 

The Negative Outcomes are also again small in number, and fairly predictable.  They are, however, hard to quantify.  

So the simple analysis framework I am working within for this part of the article is this:

Immediate Risks (few, consistent)-> Attendant Consequences (varied) -> Negative Outcomes (few, consistent)

As developers, it’s easy to get caught up focusing on just one of these Immediate Risks:  the functionality.  This is because our brains are hard-wired as optimists:  We look for the new, the shiny, and we love creating.   We often overlook the negative outcomes and focus on the positive ones (plaudits, profits, success).  

But, if you do a simple analysis of the attendant consequences of each of the risks, it soon becomes apparent that in many cases, there are bigger risks to consider than missing functionality, which are often swept under the rug.

Hacks

Here is an example:  What if you have a great working system, and then someone hacks into into it and steals all of your user data.  (LinkedIn or Ashley Maddison for example).   This is clearly a case of Immediate Risk 2: The data gets lost, stolen.  The immediate consequences are huge amounts of negative publicity.   

Could you have prevented this?  In this case, hashing passwords securely would have helped.  Perhaps better security protocols around the storage.   In reality, there are many data breaches of passwords and it’s a hard issue to solve for good:  techniques for brute-forcing passwords are improving all the time, and algorithms for hashing have had to change to keep up.   If you are developing to minimise risk then this is the sort of risk you should be identifying, using the model above.  

Once you model your risks, you can begin to quantify them.

Minimum Viable Product

In startup circles, there is the concept of Minimum Viable Product.  This concept is a tacit acknowledgement of the above model.  It’s basically saying that Lack of Access is a bigger problem than Lack of Functionality.    Lack of Access might mean missing a market, losing out on the network effect, not being the first entrant.  

This is a good start, but we need to go further:  a startup that goes well for the first month, gains huge traction and then has a massive data breach, or storage failure is not going to last.  A Minimum Viable Product might not necessarily need off-site backups and encrypted data.  But performing this kind of risk analysis will highlight this issue.

Enterprise Systems

Enterprise systems are often not startups.  The vast majority of software is built by developers who work full-time in organisations delivering business value via software support for the staff of those organisations.   They don’t apply a Minimum Viable Product analysis.  

Personally, I have lost track of the number of projects I’ve seen that are racing to production with untested code:  they’re concentrating on hitting a release date but blind to the fact that if they release on the right date but the users suffer outages or see the wrong data, then faith in the system could be irrevocably damaged.   

2.  Cause Modelling

Finally, let’s look at what causes the Immediate Risks in production on a software project.    In order to do this, it’s a good idea to analyse the development process, and identify where the risks occur.  

I’m going to create a model now which covers the running system, the interactions with it and the development process that changes it, and look at all the places where issues can creep in.

In the diagram below, all of the junctions and pipes represent points where risk exists, and where things can go wrong.   

Let’s look at them now

A Model Of Risk In Software Development


I need to model this in kite9

User’s Model

User’s Requirements 

Bug Reports
Feature Requests -> Spec -> Written Software -> Deployment -> Running Software -> User Interactions   ->  Bug Reports
                                                        \-/                            \-/                       \-/                                                   ->  Feature Requests
                                                                                                                                       -> Other Resource Interactions
                                                                                                                                                      \-/

System ->                          User Interaction -> User’s Idea Of the System
User’s Idea Of the System /
User’s Requirements


Area 
Risks
Mitigations
Idea -> Spec
Spec is inconsistent (entropy)
Spec doesn’t reflect the idea properly (entropy)
Review
Spec -> Written Software
Incorrect implementation (entropy)
Bugs (entropy)
Spec is inconsistent with the actual system (merging)
Functional Testing
Written Software
Breaking existing code (merging)

WS -> Deployment
Failure to deploy correctly
(entropy)
Automated deployment processes
Same process, different environments
Deployment
Unrecorded changes in deployment environment that get lost (merging)

no access to production
state change in production not allowed
Deployment->Running Software
Missing libraries, code
Dependency issues
Environment problems (merging)
Lost data / transactions / dropped sessions (merging)
Progressive release 
Running Software
Disks filling up, crashing (entropy)
Systems failing 
State inconsistency
Failover, load balancing, redundancy, stateless apps
Running Software -> User Interactions
User doesn’t understand system (merging)
Access issues 

Help documentation

User Interactions -> Bug Reports, Feature Requests
User doesn’t submit them (entropy)
User writes something that doesn’t make sense to team (entropy)
False positives (entropy)

Running System -> Other Resource Interactions
Other systems work differently to how you expected (merging)


Other Resource Interactions
System changes in an incompatible way (entropy)


Entropy and Merging 

Entropy can take the form of loss, noise, error or unnecessary change.  They are all situations in which the channel of going from point A to B can go wrong.  Loss might mean, corruption of data, or misreading what’s on the screen, or not submitting a bug report.

There is only one mitigation for entropy:  checking.  You have to close the loop and check that B matches A.  This means functional tests, User Acceptance Tests, Usability Tests, checksums, reconciliations.

Mismatching occurs where you are trying to combine two inputs, A and B, but they are incompatible.  In source control, this is flagged up very clearly when we have merge issues to sort out.  But it’s endemic in the software process:  when we use some new software, we are merging our experiences with our mental model.  When we deploy software, we are merging our new code into an already existing running system.   Any time you do this merging, a mismatch can happen.  

When our server attempts to write to a remote database, it is attempting to merge a new transaction into that system, and get some data back that it can merge into it’s own workflow.  Either of those processes can go wrong and produce a mismatch.  The question is, what do you do then?

Completeness

I am now going to argue that the whole IT process can be broken down into just these two types of error, and you can analyse this to any level you like.  

The reason this is so is because entropy is caused by an error doing a map (that is, a functional mapping from input A to output B). Whereas mismatches are caused when we try to reduce (that is, taking elements of state, S1 and S2, and reducing them to a single element S3).  

map and reduce should be familiar operations to people who work in the world of big data:  Systems like Hadoop are based on providing a processing framework based on these operations.  And, it’s been shown that map and reduce together are Turing Complete, which means any processing that can be done on a computer can be done within a framework containing these two operations.

All this is to give a very quick hand-waving explanation of why it’s appropriate to decompose your software system into a map/reduce diagram in order to analyse where errors occur.   

Let’s look at some examples highlighted by this model:

Technical Debt

Technical Debt is caused by unnecessary complexity within the software system.   It’s often hard to make the case for minimising technical debt: it often feels that there are more important priorities, especially when technical debt can be “swept under the carpet” and forgotten about until later.  

Technical debt manifests when you are merging new code and existing code.  The more existing code you have, the harder the merge.  Also, if we have some requirements and some existing code, and we are creating new code, then the situation is always harder when we have more of the existing code to work from.  

The solution to technical debt is refactoring.  This is well named:  consolidating the functionality down into the minimum number of orthogonal design factors of the system.   A well-factored system is not necessarily the simplest one:  it could be that there are further abstractions that could be made.  However, a well-factored system is one that most ably supports future merging, without introducing problems for the person doing the merge.  

Kitchen Analogy:  Technical Debt is like not clearing up the kitchen after cooking.

Minimising Risk In the Software Development Process

The negative outcomes from risk in the development process look different to the ones on the production system.  Let’s recap again what these look like:
In Development Process
In Production
* Lost time
* Lost money
* Lost staff
* Lost morale
* Losing Revenue
* Legal Culpability
* Losing Users
* Bad Reputation

Obviously, all these negatives in the development process are borne by the development team, whereas the ones in production are borne by the users.  But, it’s part of the job of the development process to try and turn in production consequences into in development ones, or preferably, to prevent them from happening at all.  

This is what the User Acceptance Testing process does:  instead of allowing users to bear the brunt of these outcomes, we shoulder them in before go-live instead, and turn the outcomes into lost time and money.  If your company is not performing acceptance testing, then at some level, it has calculated that the negative outcomes are better paid off by the users rather than the developers.  Sometimes, you’re damned either way:  failing to ship might also mean losing users and reputation.

Example

In a project at work, coming across use of Hazlecast to cache the session IDs.   But, the app is only used once every month, and session IDs can be obtained in milliseconds.   Why cache them?  By doing this, you have introduced extra dependency risk, cache invalidation risks, networking risks, synchronisation risks and so on, for actually no benefit at all.  Unless, it’s CV building.  

Using Risk In Planning

Estimating software is hard:
* Elapsed time is not the same as effort, because other teams need to do things
* As soon as you have external dependencies (on software, or people) risk goes up.
* Risk goes up with unfamiliarity.  If the team are unfamiliar with a technology, then the risk of them failing is higher.   We tacitly accept this in hiring, because we try and hire people with the right skills to complete a job. But, once we have a team assembled, we end up with nebulous tasks like “learn React”.  
* Unfamiliarity Risk even works within a team:  if our React expert estimates two days to complete a component, it might take two weeks for the newbie who doesn’t know React.
* But, none of this is captured in story points, or other estimating efforts.

The planning meeting:  Gibson estimates were 4, 11 and 22 until we broke it down into tasks.  Then, the estimates were above 55 for the whole piece.  And ironically, we probably don’t have all the tasks.

We are trying to decide whether to develop Gibson.  We know we need bulk uploads in November.  Gibson is January.  So, do bulk uploads?

None of this really considers the risk:  what if Gibson takes longer than expected?  If we consider a worst-case scenario, then the question is:  At the end of January, would you rather have Gibson or bulk uploads?  And the answer is simple:  Gibson.  Build Gibson right now in case you only get one thing.  Starting work on bulk uploads is a happy-path prioritisation:  if either piece takes longer than expected, you’re off the happy path.  

And we already know that Gibson is a highly risky piece of software to develop!  

Prioritisation is really the key thing.  You can nearly always identify work-arounds and quick fixes when the deadlines are near.  Why not try and figure them out up-front. 

Forget planning, and look instead at criticality.  Estimate just on SMALL, MEDIUM, LARGE.  If there are large items which are at the top of the priority list, break them up.  But be aware that even small items might be large, so try and break up everything.  

What is the point of Burndown? (ask Kaan)

Humans Specialise

Known/Unknown Unknowns