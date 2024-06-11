---
title: Glossary of Practices
description: List of all types of actions discussed in Risk-First.
url: https://riskfirst.org/actions/Glossary-Of-Practices

featured: 
  class: bg2
  element: '<document>Glossary</document>'
tags:
 - Actions
sidebar_position: 10
---

# Glossary

### Abstraction (Using)

> "An abstraction" is the outcome of this process—a concept that acts as a common noun for all subordinate concepts and connects any related concepts as a group, field, or category.[1]

Changing abstractions is often known as _refactoring_.  Removing unnecessary or outdated abstractions is often called _simplification_.

See: 

 - [Refactoring](../risks/Complexity-Risk.md#refactoring)
 - [The Power of Abstractions](../risks/Staging-And-Classifying.md#the-power-of-abstractions)

### Scrum

Agile development methodology.

See:
 - [Fixing Scrum](../estimating/Fixing-Scrum.md)
 - [On Story Points](../estimating/On-Story-Points.md)
 
### Backlog Refinement

> "Backlog refinement is a process by which team members revise and prioritize a backlog for future sprints.[31] It can be done as a separate stage done before the beginning of a new sprint or as a continuous process that team members work on by themselves. Backlog refinement can include the breaking down of large tasks into smaller and clearer ones, the clarification of success criteria, and the revision of changing priorities and returns. " - [Scrum, _Wikipedia_]https://en.wikipedia.org/wiki/Scrum_(software_development)#Backlog_refinement

See: 

 - [Tracking Risks](../thinking/Track-Risk.md#visualising-risks)
 - Scrum(#scrum)
 
### Standardization

Given multiple, different, competing abstractions, an effort to pick a single one and try to persuade everyone to adopt it.

See:

- [Unwritten Software (Software Dependency Risk)](../risks/Software-Dependency-Risk.md#unwritten-software)
 
### Modularisation

Breaking code up into different subsystems with limited, often well-defined interfaces to interact with them.

See: 

 - [Hierarchies and Modularisation](../risks/Complexity-Risk.md#hierarchies-and-modularisation)
 
### Dependency (Using a)

Making use of _libraries_, _services_ or _languages_ to solve a particular programming challenge.

See:

 - [Languages and Dependencies](../risks/Complexity-Risk.md#languages-and-dependencies)
 - [Software Libraries (Software Dependency Risk)](../risks/Software-Dependency-Risk.md#2-software-libraries)
 - [Software-as-a-Service (Software Dependency Risk)](../risks/Software-Dependency-Risk.md#3--software-as-a-service)

### Process Introduction

The attempt to formalize the interface for accessing a scarce or controlled resource.

See:

- [The Purpose of Process](../risks/Process-Risk.md#the-purpose-of-process)

### Automation 

Converting a manual [Process](../risks/Process-Risk) into an automatic, machine-controlled one.

See: 

 - [Automation (Meeting Reality)](../thinking/Meeting-Reality.md#example-automation)

### Compilation

Converting source code into executable binary code.  Also involves checking the consistency and internal logic of the source code.  

See:

 - [Time/Reality Tradeoff](../thinking/Cadence.md#time--reality-trade-off)

### Communication

> “The fundamental problem of communication is that of reproducing at one point, either exactly or approximately, a message selected at another point.” 

Includes the sub-actions or motivation, composition, encoding, transmission, reception, decoding, interpretation and reconciliation.

See:

 - [Communication Risk](../risks/Communication-Risk.md)
 
### Translation

Converting from one communication protocol to another.  Can be called a _bridge_.

See:

 - [Ecosystem Bridges](../risks/Boundary-Risk.md#ecosystem-bridges)

### Blaming

The act of shifting burden of responsibility onto someone else.  

_See: [Risk-First Diagrams](../thinking/Risk-First-Diagrams.md#example-blaming-others)_

### Requirements Capture

Talking to stakeholders in order to understand what issues they need a piece of software to solve.  Often seen as an important step in building an Internal Model of a problem area before tackling a [Specification](#specification).

Also known as _market research_.

See:

 - [Waterfall (One Size Fits No One)](thinking/One-Size-Fits-No-One.md)
 
### Environmental Scanning

Understanding the operational environment of a system in order to anticipate future problems.

See: 

 - [Environmental Scanning](../risks/Operational-Risk.md#scanning-the-operational-context)


### Market Segmentation

A process by which you divide the addressable market of users for a piece of software into different types or _personas_ in order that you can tackle the requirements of a single group in isolation.

See:

 - [Feature Access Risk](../risks/Feature-Risk.md#feature-access-risk)
 
### Innovation

The process of evolving a product to better manage existing or newly discovered [Feature Risk](../risks/Feature-Risk.md).  Also called _evolution_ (often when talking about ecosystems or organisms), _extension_ (when applied to standards or protocols) or _improvement_.

See:
 - [Feature Drift Risk](../risks/Feature-Risk.md#feature-drift-risk)
  
 
### Marketing

The process of trying to make your product visible and attractive to potential customers by communicating the benefits to them.

> The strategic functions involved in identifying and appealing to particular groups of consumers, often including activities such as advertising, branding, pricing, and sales.

See:

 - [Market Risk](../risks/Feature-Risk.md#market-risk)

### Specification 

Writing a specification to describe how a piece of functionality should best mitigate [Feature Risk](../risks/Feature-Risk.md).  Also known as _design_.

See:
 - [Development Process](../thinking/Development-Process.md#a-toy-process)
 - [Waterfall (One Size Fits No One)](thinking/One-Size-Fits-No-One.md)

### Redundancy / Horizontal Scaling

Introducing duplication of workers or other resources in order to mitigate single-points-of-failure.

See:

- [Reliability Risk](../risks/Dependency-Risk.md#reliability-risk)

### Reserving (or Buffering)

Creating _reserves_ or _buffers_ of a scarce resource in order to deal with peaks in demand that would deplete the resource.

See:

- [Reliability Risk](../risks/Dependency-Risk.md#reliability-risk)

### Graceful Degredation

Handing lack of a scarce resource by failing in a tolerable way.

See:

- [Scarcity Risk](../risks/Scarcity-Risk.md#mitigations)

### Pools / Queues

A way of ensuring orderly consumption of scarce resources.

See: 

- [Scarcity Risk](../risks/Scarcity-Risk.md#mitigations)


### Product Development

Mitigating [Feature Risk](../risks/Feature-Risk.md) by adding code to a project.  Can often be called _coding_ or _implementation_.

_See: [Development Process](../thinking/Development-Process.md#a-toy-process)_

### Integration

Combining different versions of a codebase together to check for consistency.  Also called [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration).

See: 
- [Development Process](../thinking/Development-Process.md#a-toy-process)_
- [Production (Cadence)](../thinking/Cadence.md#production)

### Beta Test

Beta testing is the process of testing an unreleased piece of software with a portion of its intended audience. 

See:

 - [Consider Payoff](../thinking/Consider-Payoff.md)
 
### User Acceptance Testing (UAT)

Completing a [Feedback Loop](../thinking/Cadence.md) in order to ascertain whether [Feature Risk](../risks/Feature-Risk.md) has been correctly addressed by new features.  Also called _verification_, _user feedback_ or _manual testing_.

See: 
 - [Development Process](../thinking/Development-Process.md#a-toy-process)_
 - [User Acceptance Testing (Meeting Reality)](../thinking/Meeting-Reality.md#example-user-acceptance-testing-uat)
 - [Manual Testing](../thinking/Cadence.md#development-cycle-time) 
 - [Waterfall (One Size Fits No One)](thinking/One-Size-Fits-No-One.md) 

### Release 

The act of moving in-development software to being in production, so that clients can make use of it.

See: 
- [Development Process](../thinking/Development-Process.md#a-toy-process)
- [Consider Payoff](../thinking/Consider-Payoff.md#example-3-continue-testing-or-release)
- [Production (Cadence)](../thinking/Cadence.md#production)

### Testing

See: 

 - [Unit testing](#unit-testing)
 - [User Acceptance Testing (UAT)](#user-acceptance-testing-uat)
 
### Security Testing

Performing tests to evaluate the security of a given system.  May include _penetration testing_, for example.

See:

- [Penetration Testing](../risks/Operational-Risk.md#scanning-the-operational-context)

### Experimentation

Improving your internal model by testing (or playing with) components of the real world context.  For example, building a _spike solution_.

See:

- [Spike Solution (Coding Bets)](../bets/Coding-Bets.md#spike-solutions-a-new-technology-bet)

### Unit Testing

Writing extra (test) code in the project which can automatically check that the (main, business logic) code works correctly.  Used to mitigate [Regression Risk](../risks/Feature-Risk.md#regression-risk) and [Implementation Risk](../risks/Feature-Risk.md#implementation-risk) in a short-cycle feedback loop.

See: 
 - [Development Process](../thinking/Development-Process.md#a-toy-process)
 - [Unit Testing (Meeting Reality)](../thinking/Meeting-Reality.md#example-automation)

### Operation / Maintenance

Maintaining running software in production so that it is available for clients to use.

See:
 - [Operational Risk](../risks/Operational-Risk.md)
 - [Waterfall (One Size Fits No One)](thinking/One-Size-Fits-No-One.md)

### Sign-Off

The act of introducing a human-controlled approval step into a [Process](../risks/Process-Risk.md) in order to mitigate [Operational Risks](../risks/Operational-Risk.md).

See:

- [Processes, Sign-Offs and Agency Risk](../risks/Process-Risk.md#processes-sign-offs-and-agency-risk)_

### Fund Raising / Borrowing

Dealing with a resource shortage by borrowing the resource from another agent temporarily.

See:

 - [Funding Risk](../risks/Scarcity-Risk.md#funding-risk)
 
### Monitoring

Keeping track on systems (agents) to ensure they are operating correctly.  Also includes _detecting failure_ and if done periodically (by another party) _audit_.

See:

 - [Monitoring](../risks/Agency-Risk.md#monitoring)
 - [Control](../risks/Operational-Risk.md#control)

### Security

Within a given context, limiting the actions of agents to perform certain privileged tasks. 

See:

- [Security](../risks/Agency-Risk.md)

### Accountability (Assigning)

Making an individual or team responsible for some given goal / risk.  Perhaps involving some _skin in the game_.  Compare _individual_ responsibility with _collective_ responsibility.

See:

 - [Goal Alignment](../risks/Agency-Risk.md#goal-alignment)
 
### Controlling

Keeping a _process_ performing within some acceptable parameters to achieve a goal or mitigate a risk.

See:

 - [Operations Management](../risks/Operational-Risk.md#operations-management)

### Planning

Using an [Internal Model](../thinking/Glossary#internal-model) to project forward to some desirable future outcome, and proposing a route across the imagined risk landscape to get there.

various types of planning exist such _supply chain management_, _dependency management_, _project planning_, _just in time_ or _capacity planning_.

See:

 - [Operations Management](../risks/Operational-Risk.md#operations-management)
 - [Planning](../risks/Operational-Risk.md#planning)

### Dog-Fooding

_Eating your own dog food_ is the process by which you use your product or service internally in order to get more feedback about how well it works.

See:

 - [Consider Payoff](../thinking/Consider-Payoff.md)
 
### Feature Toggle

A condition within the code enables or disables a feature during runtime, perhaps for a certain group of users. 

See:

 - [Consider Payoff](../thinking/Consider-Payoff.md)