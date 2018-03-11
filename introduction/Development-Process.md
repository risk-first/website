
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


crashing through various layers of reality
