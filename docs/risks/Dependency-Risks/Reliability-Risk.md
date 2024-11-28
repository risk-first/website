---
title: Reliability Risk
description: Risks of not getting benefit from a dependency due to it's reliability, either now or in the future.

slug: /risks/Reliability-Risk
featured: 
  class: c
  element: '<risk class="dependency" />'
sidebar_position: 1
tags:
 - Dependency Risk
 - Fit Risk
 - Reliability Risk
 - Invisibility Risk
 - Risks
tweet: yes
part_of: Dependency Risk
---

<RiskIntro fm={frontMatter} />

This points to the problem that when we use an external dependency, we are at the mercy of its reliability.   

> "... Reliability describes the ability of a system or component to function under stated conditions for a specified period of time." - [Reliability Engineering, _Wikipedia_](https://en.m.wikipedia.org/wiki/Reliability_engineering)

![Reliability Risk](/img/generated/risks/dependency/reliability-risk.svg) 

It's easy to think about reliability for something like a bus:  sometimes, it's late due to weather, or cancelled due to driver sickness, or the route changes unexpectedly due to road works.  

In software, it's no different:  _unreliability_ is the flip-side of [Feature Implementation Risk](/tags/Implementation-Risk).  It's caused in the gap between the real behaviour of the software and the expectations for it.

There is an upper bound on the reliability of the software you write, and this is based on the dependencies you use and (in turn) the reliability of those dependencies:
  
 - If a component **A** depends on component **B**, unless there is some extra redundancy around **B**, then **A** _can't_ be more reliable than **B**.
 - Is **A** or **B** a [Single Point Of Failure](https://en.wikipedia.org/wiki/Single_point_of_failure) in a system?
 - Are there bugs in **B** that are going to prevent it working correctly in all circumstances?

This kind of stuff is encapsulated in the science of [Reliability Engineering](https://en.wikipedia.org/wiki/Reliability_engineering).   For example, [Failure Mode and Effects Analysis (FEMA)](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis):

> "...was one of the first highly structured, systematic techniques for failure analysis. It was developed by reliability engineers in the late 1950s to study problems that might arise from malfunctions of military systems. " - [FEMA, _Wikipedia_](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis)

This was applied on NASA missions, and then in the 1970's to car design following the [Ford Pinto exploding car](https://en.wikipedia.org/wiki/Ford_Pinto#Design_flaws_and_ensuing_lawsuits) affair.  But establishing the reliability of software dependencies like this would be _hard_ and _expensive_.  We are more likely to mitigate [Reliability Risk](/tags/Reliability-Risk) in software using _testing_, _redundancy_ and _reserves_, as shown in the diagram above.  

Additionally, we often rely on _proxies for reliability_.  We'll look at these proxies (and the way in which software projects signal their reliability) in much more detail in the section on [Software Dependency Risk](/tags/Software-Dependency-Risk).