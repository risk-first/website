---
title: Enterprise Risk
description: Understanding how risk management happens in the enterprise


featured: 
  class: bg3
  element: '<risk href="/public/templates/risk-first/redesign/risks/attendant_risk_v2.svg"><code>Urgent</code><title>Evaluating Risk</title></risk>'
sidebar_position: 15
tweet: yes
---


# Risk In the Enterprise


In this chapter I want to look at the work being done by the risk management team and try to de-mystify this role a bit. We'll take an overview of the processes they follow and compare them with what we as developers get up to.   The theme of this book is really that all work (including software development) is really risk management, so you would definitely expect the "risk management" teams to be doing risk management.  It's almost reductive.  

## Process

If you've worked in small organisations, the job of risk management generally might fall on the shoulders of the business owner or a leadership team and look much more like our dinner party example.   However, if you have worked in large organisations you might be familiar with the term "Enterprise Risk Management" and the associated job title of "Chief Risk Officer (CRO)".   Risk Management becomes much more _formal_ and becomes the job of a whole department of people. 

As with software development, once you start having a whole team of people doing things, you begin to need [a process](/tags/Process-Risk) to help coordinate them.  The equivalent of [Scrum](https://scrum.org) for risk managers is the [COSO Enterprise Risk Management – Integrated Framework](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Business_risk_management).  The parallels are somewhat striking:

 - Just as Agile software development arose as a reaction to the [Software Crisis](https://en.wikipedia.org/wiki/Software_crisis) (software projects generally being late, over-budget and poor quality) the COSO Framework evolved in reaction to fraudulent financial reporting and scandals such as [Enron](https://en.wikipedia.org/wiki/Enron) and [WorldCom](https://en.wikipedia.org/wiki/MCI_Inc.).
 
 - As with Scrum (and Agile generally), most organisations will use this as a jumping-off point for their own efforts.  COSO is a [complex model to deploy](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Limitations) and at the end of the day a lot of risk management depends on human judgement so there's only so much a model can do.
 
 - And of course, there is a whole _industry_ around standards, certification and plenty of software vendors providing software solutions to help you do Enterprise Risk Management The Right Way.

## Eight Components

So that being said, here we're going to do a quick tour of the eight components of the model and see how this might apply in the world of software development.  Specifically, we're going to see how each of these raises a question for you in a project you work on.  So have an example in mind when answering the questions.

### 1. Internal environment

> "The internal environment encompasses the tone of an organization and establishes the basis of how risk is seen and addressed by the persons of an entity, including the risk management philosophy and risk appetite, integrity and ethical values, and the environment in which they operate." - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

The first component of the COSO model is the _Internal Environment_ and asks you to consider the approach of the organisation to risk.  It's perhaps surprising that _ethical values_ might form a part of this, but clearly, if your organisation is willing to cut some corners and overlook some illegal behaviour this is -in a way- an acceptance of [Legal and Reputational Risks](../risks/Operational-Risk.md).

A great example of risk appetite is [Meta (née Facebook)](https://www.meta.com) who, from 2004 until 2014 had the motto "Move fast and break things" - a clear statement of a high-risk attitude consistent with a desire to evolve their product as fast as possible.  But in 2014, the firm changed tack completely to "Move fast with stable infrastructure" - _signalling an entirely different risk appetite._   

**Question:** What is the internal environment for your project?  What is your stance to risk?  Are you risk takers or risk averse?  Does the constituency of your client base affect this?

### 2. Setting objectives 

> "The objectives must exist before management can identify potential events that affect its achievement." - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

There are not many organisations that simply allow their staff to turn up and do what they like and in larger firms objectives are usually "cascaded down" from the top of the firm.  Conversely, in the small, our [dinner party example](/thinking/A-Simple-Scenario.md) requires that there is a [goal](/thinking/Glossary.md#goal) before we can consider the risks to that goal!  

In the [Health](/thinking/Health.md) chapter we looked at how _surviving and thriving_ become an objective of the organisation too.  (TBD more here  EXAMPLE)

**Question:** What are the objectives of your project?  Are there ways in which your team can "game" the objectives and introduce new risks?  Are the objectives communicated to everyone in the team?

### 3. Event identification

> "Internal and external events that affect the achievement of the objectives of an entity must be identified, distinguishing between risks and opportunities. The opportunities are re-channeled into management strategy or goal-setting processes."  - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

As we covered in the section on [Health](/thinking/Health.md), it is important not just to _react_ to events that occur to you but to look for trouble and try to be proactive / preventive about risks to health.   For example, you don't need to wait until your application's hardware goes down or wait until users complain that their transactions aren't getting processed.  These are risks you can think about in advance and identify.

**Question**:  What single points of failure exist on your application, whether people, processes, dependencies or hardware?  Have you identified the risks surrounding them? 

### 4. Risk assessment

> "The risks are analyzed, considering the probability and impact, as a basis for determining how they should be managed. The risks are inherently and residually assessed. "- [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

Risk assessment is a topic we covered in the [Tracking Risks](/thinking/Track-Risk.md) section.  

### 5. Risk response 

> "Management selects risk responses, avoiding, accepting, reducing or sharing risk, developing a set of actions to align risks with the entity's risk appetite and risk appetite." - [_Wikipedia_](https://en.wikipedia.org/wiki/Committee_of_Sponsoring_Organizations_of_the_Treadway_Commission#Eight_frame_components)

Deciding how to respond to risk has been covered in depth in [Consider Payoff](/thinking/Consider-Payoff.md) and [Derisking](/thinking/De-Risk.md) so we won't go over this again.  

EXAMPLE.

### 6. Control activities

Policies and procedures are established and implemented to help ensure that risk responses are carried out effectively.

### 7. Information and communication

The relevant information is identified, captured and communicated in a way and time frame that allow people to fulfill their responsibilities. Effective communication also occurs in a broader sense, flowing down, through and up the entity.

### 8. Monitoring

The entire business risk management is monitored and modifications are made as necessary. Monitoring is achieved through ongoing management activities, separate evaluations or both.

## Summing Up

tbd.

Next article is on [Software Methodology](One-Size-Fits-No-One.md)