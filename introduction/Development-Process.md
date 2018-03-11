
In the [previous section](Software-Project-Scenario) we looked at how risk determines what actions we take on a project.

Now, let's look at the everyday process of developing _a new feature_ on a software project, and see how our risk model informs it.

## An Example Process

Let's ignore for now the specifics of what methodology is being used - we'll come to that later.  Let's say your team have settled for a process something like the following:

1.  **Specification**: A new feature is requested somehow, and a business analyst works to specify it.
2.  **Prioritisation**: It gets prioritised for delivery, and someone starts working on it. 
3.  **Code And Unit Test**: They write some code, and some unit tests.
4.  **Integration**: They integrate their code into the code base.
5.  **UAT**: They put the code into a User Acceptance Test (UAT) environment, and user(s) test it.

... All being well, the code is released to production.

Now, it might be waterfall, it might be agile, we're not going to commit to specifics at this stage.  It's probably not perfect, but let's just assume that _it works for this project_ and everyone is reasonably happy with it.  I'm not saying this is the _right_ process, or even a _good_ process: we're just doing some analysis of _what process gives us_.  

[Development Process](images/dev_process1.png)

What's happening here?  Why these steps?  

## Minimizing Risks - Overview

I am going to argue that this entire process is _informed by software risk_:

1.  We have _a business analyst_ who talks to users and fleshes out the details of the feature properly.   This is to minimize the risk of **building the wrong thing**.
2.  We _prioritise work_ again to minimize the **builing the wrong thing** risk - on the [Software Project Scenario](Software-Project-Scenario) page we called this the risk of the users not having the functionality the need.
3.  We _write unit tests_ to minimize the risk that our code **isn't doing what we expected, and that it matches the specifications**.
4.  We _integrate our code_ to minimize the risk that it's **inconsistent with the other, existing code on the project**.  
5.  We have _acceptance testing_ and quality gates generally to **minimize the risk of breaking production**, somehow.

We could skip all those steps above and just do this: 

1.  Developer gets wind of new idea from user, logs onto production and changes some code directly.

[Development Process](images/dev_process2.png)

We can all see this would be a disaster, but why?

Two reasons: 

1.  You're meeting reality all-in-one-go:  all of these risks materialize at the same time, and you have to deal with them all at once.
2.  Because of this, at the point you put code into the hands of your users, your [Internal Model](Internal-Model) is at its least-developed.  All the [Hidden Risks](Attendant-Risk) now need to be dealt with at the same time, in production.

## Applying the Model

Let's look at how our process should act to prevent these risks materializing by considering an unhappy path, one where at the outset, we have lots of [Hidden Risks](Attendant-Risk) ready to materialize:

- A particularly vocal user rings up someone in the office and asks for new feature **X** to be added to the software.  
- Unfortunately, this feature once programmed will break an existing feature **Y**  
- It's only be useful to a very small proportion of the user-base.  For everyone else, it makes the software more complex.  
- It's going to get misunderstood by the developer too, who is new on the project and doesn't understand how the software is used.  
- Actually, this functionality is served by feature **Z**, which is already there and the user didn't know about it.

[Development Process - Hidden Risks](dev_process_hidden_risks.png)

Let's follow our process through and see how it meets reality slowly, and the hidden risks are discovered:

### Specification

The first stage of the journey for the feature is that it meets the Business Analyst






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


crashing through various layers of reality
