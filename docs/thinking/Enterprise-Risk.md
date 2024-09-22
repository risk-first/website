---
title: Enterprise Risk
description: Understanding how risk management happens in the enterprise

featured: 
  class: bg3
  element: '<risk href="/public/templates/risk-first/redesign/risks/attendant_risk_v2.svg"><code>Urgent</code><title>Enterprise Risk</title></risk>'
sidebar_position: 15
tweet: yes
tags:
 - Risk Landscape
 - Avoid
 - Reduce
 - Retain
 - Control
 - Ignore
 - Monitor
---

# Risk In the Enterprise

In this chapter I want to look at the work being done by the risk management team and try to de-mystify this role a bit. We'll take an overview of the processes they follow and compare them with what we as developers get up to.   The theme of this book is really that all work (including software development) is really risk management, so you would definitely expect the "risk management" teams to be doing risk management.  It's almost reductive.  

## Functional Decomposition

If you've worked in small organisations, the job of risk management generally might fall on the shoulders of the business owner or a leadership team and look much more like our dinner party example.   However, if you have worked in large organisations you might be familiar with the term "Enterprise Risk Management" and the associated job title of "Chief Risk Officer (CRO)".   Risk Management becomes much more _formal_ and becomes the job of a whole department of people. 

As with software development, we often see _functional decomposition_ being applied to risk.  That is, different teams or departments will be responsible for different _types of risk_.  For example, in a financial services firm there might be:

- The **Credit Risk Team**,  which monitors and manages the risk of loss arising from borrowers defaulting on their loans or credit obligations.
 - The **Market Risk Team**, who assesses and mitigates risks associated with fluctuations in financial markets, such as interest rates, currencies, and commodities.
- An **Operational Risk Team**, which focuses on identifying and mitigating risks related to internal processes, systems, people, or external events that can disrupt business operations.
- A **Liquidity Risk Team**, that ensures that the firm maintains adequate liquidity to meet its financial obligations, even during periods of market stress or economic downturns.
- A **Compliance or Regulatory Risk Team**, ensuring that the firm adheres to financial regulations and internal policies to avoid legal penalties and reputational damage.
- And a **cybersecurity Risk Team** that manages risks associated with cyber threats, data breaches, and other information security vulnerabilities.

All of these groups focus on managing a particular category of risks.  Even the senior management team of the organisation might be said to be a **Strategic Risk Team**, trying to make sure the firm is taking the right decisions around which markets to operate in, which business to go after etc.
 
## COSO

We could leave the idea of functional decomposition here, and say that each of these teams is a simple function:  funding goes in, risk reduction comes out.  In a way, that's exactly how an internal team of software developers looks too and in [the Risk Landscape](../risks/Risk-Landscape) we'll be looking at the categories of risk managed by software developers.

But as with software development, once you start having a whole team of people doing things, you begin to need [a process](/tags/Process-Risk) to help coordinate them.  The equivalent of [Scrum](https://scrum.org) for risk managers is the [COSO Enterprise Risk Management – Integrated Framework](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Business_risk_management).  The parallels are somewhat striking:

 - Just as Agile software development arose as a reaction to the [Software Crisis](https://en.wikipedia.org/wiki/Software_crisis) (software projects generally being late, over-budget and poor quality) the COSO Framework evolved in reaction to fraudulent financial reporting and scandals such as [Enron](https://en.wikipedia.org/wiki/Enron) and [WorldCom](https://en.wikipedia.org/wiki/MCI_Inc.).
 
 - As with Scrum (and Agile generally), most organisations will use this as a jumping-off point for their own efforts.  COSO is a [complex model to deploy](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Limitations) and at the end of the day a lot of risk management depends on human judgement so there's only so much a model can do.
 
 - And of course, there is a whole _industry_ around standards, certification and plenty of software vendors providing software solutions to help you do Enterprise Risk Management The Right Way.

## Eight Components

![The Eight Components of the COSO Framework](/img/generated/introduction/coso.svg)

So that being said, here we're going to do a quick tour of the eight components of the model (as shown in the diagram above) and see _how this applies in the world of software development_.  Specifically, we're going to see how each of these raises a question for you in a project you work on.  (So have an example in mind when answering the questions.)

The COSO framework isn't doing anything novel or original - every component _has an equivalent activity is in software development_.  So, what is this COSO component asking you to do as a software developer?

### 1. Internal environment

> "The internal environment encompasses the tone of an organization and establishes the basis of how risk is seen and addressed by the persons of an entity, including the risk management philosophy and risk appetite, integrity and ethical values, and the environment in which they operate." - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

The first component of the COSO model is the _Internal Environment_ and asks you to consider the approach of the organisation to risk.  It's perhaps surprising that _ethical values_ might form a part of this, but clearly, if your organisation is willing to cut some corners and overlook some illegal behaviour this is -in a way- an acceptance of [Legal and Reputational Risks](../risks/Operational-Risk).

A great example of risk appetite is [Meta (née Facebook)](https://www.meta.com) who, from 2004 until 2014 had the motto "Move fast and break things" - a clear statement of a high-risk attitude consistent with a desire to evolve their product as fast as possible.  But in 2014, the firm changed tack completely to "Move fast with stable infrastructure" - _signalling an entirely different risk appetite._   

**Questions:** What is the internal environment for your project?  What is your stance to risk?  Are you risk takers or risk averse?  Does the constituency of your client base affect this?

**Equivalent Activities:**
 
 - [Terms of Reference](/tags/Terms-Of-Reference)
 - [Stakeholder Management](/tags/Stakeholder-Management)


### 2. Setting objectives 

> "The objectives must exist before management can identify potential events that affect its achievement." - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

There are not many organisations that simply allow their staff to turn up and do what they like and in larger firms objectives are usually "cascaded down" from the top of the firm.  Conversely, in the small, our [dinner party example](/thinking/A-Simple-Scenario) requires that there is a [goal](/tags/Goal) before we can consider the risks to that goal!  

In the [Health](/thinking/Health) chapter we looked at how _surviving and thriving_ become an objective of the organisation too. 

**Question:** What are the objectives of your project?  Are there ways in which your team can "game" the objectives and introduce new risks?  Are the objectives communicated to everyone in the team?  

**Equivalent Activities**:

  - [Change Management](/tags/Change-Management)
  - [Issue Management](/tags/Issue-Management)
  - [Requirements Capture](/tags/Requirements-Capture)

### 3. Event identification

> "Internal and external events that affect the achievement of the objectives of an entity must be identified, distinguishing between risks and opportunities. The opportunities are re-channeled into management strategy or goal-setting processes."  - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

As we covered in the section on [Health](/thinking/Health), it is important not just to _react_ to events that occur to you but to look for trouble and try to be proactive / preventive about risks to health.   For example, you don't need to wait until your application's hardware goes down or wait until users complain that their transactions aren't getting processed.  These are risks you can think about in advance and identify.

**Question**:  What single points of failure exist on your application, whether people, processes, dependencies or hardware?  Have you identified the risks surrounding them?  

**Equivalent Activities**:
 - [Measurement](/tags/Measurement)
 - [User Acceptance Testing](/tags/User-Acceptance-Testing)
 - [Analysis](/tags/Analysis)

### 4. Risk assessment

> "The risks are analyzed, considering the probability and impact, as a basis for determining how they should be managed. The risks are inherently and residually assessed. "- [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

Risk assessment is a topic we covered in the [Tracking Risks](/thinking/Track-Risk) section.  

**Question**:  What are the biggest risks you face on the project?  What are the most immediate?  What are the most expensive? What are the easiest to remedy?

**Equivalent Activities**:
- [Estimating](/tags/Estimating) 

### 5. Risk response 

> "Management selects risk responses, avoiding, accepting, reducing or sharing risk, developing a set of actions to align risks with the entity's risk appetite and risk appetite." - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

Deciding how to respond to risk has been covered in depth in [Consider Payoff](/thinking/Consider-Payoff) and [Derisking](/thinking/De-Risking) so we won't go over this again. 

**Question**: Which are the most important problems you need to resolve on the project?  Where are you spending your development budget?  What are you not able to address because of more important concerns?

**Equivalent Activities**:
- [Prioritising](/tags/Prioritising)

### 6. Control activities

> "Policies and procedures are established and implemented to help ensure that risk responses are carried out effectively." - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

**Question**: What is in development right now?  When will it be rolled out?

**Equivalent Activities**:
 - [Release](/tags/Release)
 - [Coding](/tags/Coding)
 - [Prototyping](/tags/Prototyping)

### 7. Information and communication

> "The relevant information is identified, captured and communicated in a way and time frame that allow people to fulfill their responsibilities. Effective communication also occurs in a broader sense, flowing down, through and up the entity." - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

**Question**: Who are you telling about the work you're doing?  Who is telling you what to prioritise?  Who is setting objectives for the project and the team?

**Equivalent Activities**:
 - [Marketing](/tags/Marketing)
 - [Stakeholder Management](/tags/Stakeholder-Management)

### 8. Monitoring

> "The entire business risk management is monitored and modifications are made as necessary. Monitoring is achieved through ongoing management activities, separate evaluations or both.   " - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

Again, we looked closely at the concept of Monitoring in the [De-Risking](De-Risking.md#monitor) section.

**Question**: How do you make sure what you built continues to work?  How do you make sure that it stays fit-for-purpose? 

**Equivalent Activities**:
 - [Automated Testing](/tags/Automated-Testing)
 - [Regression Testing](/tags/Regression-Testing)
 - [Performance Testing](/tags/Performance-Testing)
 - [Integration Testing](/tags/Integration-Testing)
 - [Marketing](/tags/Marketing)
 
## Audits: Checking that Controls Work

Publicly listed firms (i.e. the ones which you can buy as stock) are required to have an _external auditor_.   External auditors are independent of the organization, typically a third-party firm.  Their main responsibility is to verify the accuracy of financial statements and ensure compliance with accounting standards and legal requirements.  These accounting standards and legal requirements are borne out of the bitter experience that firms often "cook the books" and therefore they exist as a risk management tool to protect shareholders and the public from the firm's wrongdoing,  ensuring transparency, accountability, and trust in the financial markets.

Meanwhile, internal auditors are part of the organization, providing assessments of risk management, control systems, and compliance with internal policies.  Their primary focus is on improving internal processes, operational efficiency, and ensuring the organization's governance framework is robust.  They report to management and the board, often through an audit committee.

## The Three Lines of Defence Model (3LOD)

![The Three Lines of Defence Model](/img/generated/introduction/3lod.svg)

As we said in [Just Risk](Just-Risk), "All Work is Risk Management", so it stands to reason that within an enterprise, everyone is involved in the risk management function!

The Three Lines of Defence (3LOD) model makes this explicit (as shown in the diagram above).  All staff exist within one or other of the lines of defence:

- The **first line of defence** consists of operational management, which owns and manages risks by implementing internal controls in their day-to-day activities. 

- The **second line of defence** is the risk management or compliance function (often broken down into specific teams, as we discussed earlier).  They oversee and monitors the effectiveness of the risk controls, ensuring they are properly designed and functioning as intended. 

- The **third line of defence** is the internal audit function, which provides independent assurance by evaluating the overall governance, risk management, and control processes across the organization. This structure creates a clear distinction of duties, enhancing accountability and transparency in risk management.

## Summing Up

In this section we've surveyed the idea of _Enterprise Risk Management_ at a pretty high level and compared it with the way we do software development (mainly in the hope that drawing parallels between the two will demystify the former somewhat).  

Running an enterprise risk function looks (at a high level) like running a software project in terms of gathering requirements, dealing with stakeholders, reporting on risks and coming up with solutions.  Yes, the risks are perhaps different to the ones we're used to in software development land, but the process at the end of the day ends up being alarmingly familiar.  

We are used to methodologies like Scrum and Lean in software development - they're for teams managing software development risks.   But the fact that COSO exists for teams managing _any kind of risk_ is interesting.  What does this say about methodology in general?

That is the topic of the next chapter, [One Size Fits No One](One-Size-Fits-No-One.md)

