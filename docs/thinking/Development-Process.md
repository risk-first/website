---
title: Development Process
description: Why do we even have processes in software development?

featured:
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/development.svg">Payoff</image-artifact>'
sidebar_position: 3
tags:
  - Attendant Risk
  - Meeting Reality
  - Hidden Risk
  - Risk Frameworks
  - Development Process
redirect_from:
  - /Development-Process
tweet: yes
---

# Analysing The Development Process

In [A Simple Scenario](A-Simple-Scenario) we introduced some terms for talking about risk (such as [Attendant Risk](/tags/Attendant-Risk), [Hidden Risk](/tags/Attendant-Risk) and the [Internal Model](/tags/Internal-Model)).

We've also introduced a notation in the form of [Risk-First Diagrams](./Risk-First-Diagrams) which allows us to represent the ways in which we can change the risks by [Taking Action](/tags/Take-Action).

Now, we are going to start applying our new terminology to software. In the example below, we'll look at a "toy" process and use it for developing a new feature on a software project and see how our risk model informs it.

## A "Toy" Process

Let's ignore for now the specifics of software methodology - we'll come to that later. For now, let's consider a simple, toy, process for developing software and understand how it works from a risk perspective.

Something like the following:

1.  **Specification**: a new feature is requested somehow, and a business analyst works to specify it.
2.  **Code And Unit Test**: a developer writes some code and some unit tests.
3.  **Integration**: they integrate their code into the code base.
4.  **UAT**: they put the code into a User Acceptance Test (UAT) environment and user(s) test it.
5.  All being well, the code is **Released to Production**.

![A Simple Development Process](/img/generated/introduction/development_process_1.svg)

:::info Can't We Improve This?

Is this a _good_ process? Probably, it's not that great: you could add code review, a pilot phase, integration testing, whatever.

Also, the _methodology_ being used might be Waterfall, it might be Agile. We're not going to commit to specifics at this stage.

For now though, let's just assume that _it works for this project_ and everyone is reasonably happy with it.

We're just doing some analysis of _what process gives us_, and also why it is that we end up with processes for producing software at all.
:::

### Minimising Risks - Overview

I am going to argue that this entire software production process is _informed by software risk_:

1.  We have _a business analyst_ who talks to users and fleshes out the details of the feature properly. This is to minimize the risk of **building the wrong thing**.
2.  We _write unit tests_ to minimize the risk that our code **isn't doing what we expected, and that it matches the specifications**.
3.  We _integrate our code_ to minimize the risk that it's **inconsistent with the other, existing code on the project**.
4.  We have _acceptance testing_ and quality gates generally to **minimize the risk of breaking production**, somehow.

### A Much Simpler Process

We could skip all those steps above and just do this:

1.  Developer gets wind of new idea from user, logs onto production and changes some code directly.

![A Dangerous Development Process](/img/generated/introduction/development_process_2.svg)

We can all see this might end in disaster, but why?

Two reasons:

1.  You're [Meeting Reality](/tags/Meeting-Reality) all-in-one-go: all of these risks materialize at the same time, and you have to deal with them all at once.
2.  Because of this, at the point you put code into the hands of your users, your [Internal Model](/tags/Internal-Model) is at its least-developed. All the [Hidden Risks](/tags/Hidden-Risk) now need to be dealt with at the same time, in production.

## Applying the Toy Process

Although bitter experience has shown that this is a terrible way of delivering software, I want to use Risk-First diagrams and our new terminology to explore exactly why this is the case by examining what happens to _risk_, and specifically look at how our toy process should act to prevent these risks materialising in production and causing maximum harm.

First, let's consider the unhappy path. One where, at the outset, we have lots of [Hidden Risks](/tags/Hidden-Risk). Let's say a particularly vocal user rings up someone in the office and asks for new **Feature X** to be added to the software. It's logged as a new feature request, but:

- Unfortunately, this feature once programmed will break an existing **Feature Y**.
- Implementing the feature will use some api in a library, which contains bugs and have to be coded around.
- It's going to get misunderstood by the developer too, who is new on the project and doesn't understand how the software is used.
- Actually, this functionality is mainly served by **Feature Z**...
- which is already there but hard to find.

![Development Process - Exposing Hidden Risks](/img/generated/introduction/development_process_3.svg)

The diagram above shows how this plays out. As you can see, our truncated, two-step development process exposes us to all the hidden risks in production at the same time and disaster ensues.

Now let's follow our feature through the toy process and see how it meets reality slowly, and the [Hidden Risks](/tags/Hidden-Risk) are exposed in a more benign way.

### Specification

The first stage of the journey for the feature is that it meets the Business Analyst (BA). The _purpose_ of the BA is to examine new goals for the project and try to integrate them with _reality as they understand it_. A good BA might take a feature request and vet it against his [Internal Model](/tags/Internal-Model), saying something like:

- "This feature doesn't belong on the User screen, it belongs on the New Account screen"
- "90% of this functionality is already present in the Document Merge Process"
- "We need a control on the form that allows the user to select between Internal and External projects"

In the process of doing this, the BA is turning the simple feature request _idea_ into a more consistent, well-explained _specification_ or _requirement_ which the developer can pick up. But why is this a useful step in our simple methodology? From the perspective of our [Internal Model](/tags/Internal-Model), we can say that the BA is responsible for:

- Trying to surface [Hidden Risks](/tags/Hidden-Risk)
- Trying to evaluate [Attendant Risks](/tags/Attendant-Risk) and make them clear to everyone on the project.

![BA Specification: exposing Hidden Risks as soon as possible](/img/generated/introduction/development_process_ba.svg)

In surfacing these risks, there is another outcome: while **Feature X** might be flawed as originally presented, the BA can "evolve" it into a specification and tie it down sufficiently to reduce the risks. The BA does all this by simply _thinking about it_, _talking to people_ and _writing stuff down_.

This process of evolving the feature request into a requirement is the BA's job. From our Risk-First perspective, it is _taking an idea and making it [Meet Reality](/tags/Meeting-Reality)_. Not the _full reality_ of production (yet), but something more limited.

### Code And Unit Test

The next stage for our feature, **Feature X** is that it gets coded and some tests get written. Let's look at how our [Goal](/tags/Goal) meets a new reality: this time it's the reality of a pre-existing codebase, which has it's own internal logic.

As the developer begins coding the feature in the software, they will start with an [Internal Model](/tags/Internal-Model) of the software, and how the code fits into it. But, in the process of implementing it, they are likely to learn about the codebase, and their [Internal Model](/tags/Internal-Model) will develop.

![Coding Process:  exposing more hidden risks as you code](/img/generated/introduction/development_process_code.svg)

At this point, let's review the visual grammar of the diagram above. Here, we're showing how the balance of risks will change if the developer [Takes Action](/tags/Take-Action) and writes some code. On the left, we have the current state of the world, on the right is the anticipated state _after_ taking the action.

The round-cornered rectangles represent our [Internal Model](/tags/Internal-Model), and these contain our view of [Risk](/tags/Risk), whether the risks we face right now, or the [Attendant Risks](/tags/Attendant-Risk) expected after taking the action. We're not at the stage where taking this actions is _completing_ the goal. In fact, arguably, we're facing _worse_ risks after taking action than before, since we now have _development difficulties_ to contend with... but at least we have uncovered these risks that were previously hidden.

Beneath the internal models we are also showing real-world tangible artifacts. That is, the physical change we would expect to see as a result of taking action. In the diagram above, the action will result in "New Code" being added to the project, needed for the next steps of the development process.

### Integration

Integration is where we run all the tests on the project, and compile the code in a clean environment, collecting together the work from the whole development team.

So, within this example process, this stage is about meeting a new reality: the clean build.

![Integration testing exposes Hidden Risks before you get to production](/img/generated/introduction/development_process_integration.svg)

As shown in the diagram above, at this stage we might discover the [Hidden Risk](/tags/Hidden-Risk) that we'd break **Feature Y**

### User Acceptance Test

Next, User Acceptance Testing (UAT) is where our new feature meets another reality: _actual users_. I think you can see how the process works by now. We're just flushing out yet more [Hidden Risks](/tags/Hidden-Risk).

![UAT - putting tame users in front of your software is better than real ones, where the risk is higher](/img/generated/introduction/development_process_uat.svg)

## Observations

Here are a few quick observations about managing risk which you are revealed both by this toy software process and also our previous example of [The Dinner Party](A-Simple-Scenario):

- [Taking Action](/tags/Take-Action) is the _only_ way to create change in the world.
- It's also the only way we can _learn_ about the world, adding to our [Internal Model](/tags/Internal-Model).
- In this case, we discover a [Hidden Risk](/tags/Hidden-Risk): the user's difficulty in finding the feature.
- In return, we can _expect_ the process of performing the UAT to delay our release (this is an attendant schedule risk).

## Major Themes

What does this Risk-First analysis tell us about _development processes in general_?

1. The people who designed this process _didn't know_ about these _exact_ risks, but they knew the _shape that risks take_. The process builds "nets" for different kinds of [Hidden Risks](/tags/Hidden-Risk) without knowing exactly what they are. To build these nets, we need to categorise the types of risk we face—something we'll explore in the [Risks](/risks/Start) section.

2. Risks can be managed in a divide-and-conquer fashion. Different steps of the process address different risks. Adding more steps lets you catch more risks, but lengthens the process.

3. Are these really risks, or just _problems we didn't know about_? Even when you know you have a problem, it's still a risk to your deadline until it's solved. When does a risk become a problem? Is a problem just a schedule-risk or cost-risk? We'll return to this.

4. Risks exist because we can't predict reality with certainty. We don't (and can't) have a perfect view of how things will turn out. Reality is reality—_the risks exist only in our heads_.

5. Really, _all this work is risk management_. All work is testing ideas against reality.

6. The dinner party example was a one-off event. But the development process is _ongoing_—designed to deal with risks repeatedly over time. This makes it a [Risk Framework](/tags/Risk-Frameworks): a structured way of identifying, categorising, and addressing risks within a domain.

## Risk Frameworks

A [Risk Frameworks](/tags/Risk-Frameworks) combines a breakdown of risks with actions to address them—sometimes including monitoring and control processes too. Software methodologies like Scrum, XP, or DevOps are all examples of risk frameworks. We'll explore this further in [Risk Frameworks](/methods/Start).

In the next section, we're going to look at the concept of [Meeting Reality](Meeting-Reality) in more depth.
