---
title: Reliability Risk
description: Risks of not getting benefit from a dependency due to it's reliability.

slug: /risks/Reliability-Risk
featured: 
  class: c
  element: '<risk class="reliability" />'
sidebar_position: 1
tags:
 - Reliability Risk
 - Risks
tweet: yes
part_of: Dependency Risk
---

<RiskIntro fm={frontMatter} />

Whenever we use an external dependency, we are at the mercy of its reliability.   

> "... Reliability describes the ability of a system or component to function under stated conditions for a specified period of time." - [Reliability Engineering, _Wikipedia_](https://en.m.wikipedia.org/wiki/Reliability_engineering)

It's easy to think about reliability for something like a bus:  sometimes, it's late due to weather, or cancelled due to driver sickness, or the route changes unexpectedly due to road works.  In software, it's no different:  _unreliability_ is the flip-side of [Feature Implementation Risk](/tags/Implementation-Risk).  It's caused in the gap between the real behaviour of the software and our expectations for it.

## Worked Example

![Improving Reliability with Redundancy](/img/generated/risks/posters/reliability-risk.svg)

A team builds a web service using [a three-tier architecture](https://www.ibm.com/topics/three-tier-architecture) running on in-house servers.  However in practice, they find that their service has reliability issues: the single-node database often gets overloaded with requests and acts as a single choke-point for the whole system.

In response, they decide to add further redundancy to the database tier.   However, this now introduces two further issues.  First, the application tier needs to choose which database node to route to, (adding [Complexity](/tags/Complexity-Risk) to the design.  Second, the database nodes need to [Coordinate](/tags/Coordination-Risk) and ensure that they present a consistent version of reality.  

Most modern database management systems provide this kind of replication / synchronisation functionality, but it comes at the expense of node throughput, and cloud database services provide _elastic_ scaling for this kind of issue (see below).    
 

## Types of Reliability / Example Threats

### 1. Availability  

Availability is a measure of reliability often used for services, often expressed as _uptime_ (the percentage of the the service is up) or _mean time between failures (MTBF)_.  However, availability is often a function of how heavily a service is being used so requirements around availability are often expressed as _a percentage of requests within a given time_ or an _error rate_ for requests as a whole.   

**Threat:** An online service that you want to use doesn't publish [Service Level Agreements (SLAs)](https://en.wikipedia.org/wiki/Service-level_agreement) and therefore it's hard to build software reliably on top of it.

### 2. Quality of Service (QoS)  

Often a service dependency can be responding quickly (i.e. have good availability) but still perform inadequately, perhaps with wrong or sloppy results.  

**Threat:** Performance testing establishes the operating bounds of a dependency, but not whether it is operating _correctly_ in those bounds.
 
### 3. Maintainability and Serviceability

A dependency that is easy to maintain, service and reconfigure or repair is more reliable.  

**Threat**: The dependency is hard to introspect, making it difficult to diagnose issues.

**Threat**: The dependency has no easy way to make upgrades and changes, except without bringing it down, damaging reliability.
 
### 4. Scalability
  
Scalability measures how well a system will perform as the workload increases.  Often, a dependency will scale in a predictable way up to a point and then become completely unreliable. It's often important to establish those limits.

**Threat**: A dependency appears to scale well under test conditions but then can fail spectacularly under more extreme real-life conditions.
 
### 5. Elasticity

_Elasticity_ expresses the concept of auto-scaling.  Many cloud services now are designed to auto-scale.  That is, more resources are added to the service (such as web servers, compute nodes etc) when the service is under heavy load. 

**Threat**: You configure auto-scaling for a dependency, but are then caught out later when it runs way over the expected cost due to some poor performance at higher load levels.   
 
### 6. Robustness

Robustness measures of how well a service handles and recovers from failures.  A waterproof watch is more robust than a non-waterproof one as it can survive in more hostile scenarios.

**Threat:** Unusual events test the robustness of dependencies.  For example, outages, network issues, denial-of-service attacks.

### 7. Fault Tolerance

Systems are often composed of other systems (especially in a microservices architecture).  This often means that the system as a whole is never 100% "up" or "down".  How does the system route around issues when parts are failing?

**Threat:** Systems composed of multiple agents can often have "grey failures" where some parts of the system fail and others don't.  This makes anticipating the behaviour of the system under these conditions very difficult.

### 8. Safety
 
When the system fails, does it fail-safe?  Or will there be catastrophe?  Will transactions somehow be left incomplete?  

**Threat**: The billing dependency drops requests under load, resulting in you under-billing your customers for their usage of your software.


## Reliability Engineering

This kind of stuff is encapsulated in the science of [Reliability Engineering](https://en.wikipedia.org/wiki/Reliability_engineering).   For example, [Failure Mode and Effects Analysis (FEMA)](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis):

> "...was one of the first highly structured, systematic techniques for failure analysis. It was developed by reliability engineers in the late 1950s to study problems that might arise from malfunctions of military systems. " - [FEMA, _Wikipedia_](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis)

This was applied on NASA missions, and then in the 1970's to car design following the Ford Pinto exploding car (see below).  But establishing the reliability of software dependencies like this would be _hard_ and _expensive_.  We are more likely to mitigate [Reliability Risk](/tags/Reliability-Risk) in software using [performance testing](/tags/Performance-Testing) or [redundancy](/tags/Redundancy) as shown in the diagram above.  

Additionally, we often rely on _proxies for reliability_.  We'll look at these proxies (and the way in which software projects signal their reliability) in much more detail in the section on [Software Dependency Risk](/tags/Software-Dependency-Risk).

:::tip Anecdote Corner

In the 1970's Ford introduced a car called the Pinto.  In order to reduce costs, the fuel tank was placed behind the rear axle making it liable to get punctured if the car was rear-ended.  Ford crash-tested the car and discovered the fault but decided _against_ reinforcing it as it would have cost a further $11 per car.  

Sadly, this led to hundreds of injuries and deaths - as well as public outrage.  This incident led to automakers adopting the practice of reliability engineering going forwards:  prioritising testing, failure analysis and integrating safety features.

:::


