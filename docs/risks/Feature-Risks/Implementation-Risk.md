---
title: Implementation Risk
description: Risk that the functionality you are providing doesn't correctly implement the perceived solution you are trying to build for your clients.
featured: 
  class: ff
  element: '<risk class="implementation" />'
sidebar_position: 2
tags: 
 - Risks
 - Implementation Risk
part_of: Feature Risks
slug: /risks/Implementation-Risk
---

<RiskIntro fm={frontMatter} />

[Implementation Risk](/tags/Implementation-Risk) exists in the gap between _what you are trying to build_ and _what you actually build_.  That is, the difference between your software in theory and in practice.  It includes things that don't work as expected, that is to say, [bugs](https://en.wikipedia.org/wiki/Software_bug) and missing features.  A good way of looking at this might be to consider it the sum of all the development items you have on your to-do list.    

## Worked Example

![Reducing Implementation Risk Via Automated Testing](/img/generated/risks/posters/implementation-risk.svg) 

In the above diagram, we can see [Implementation Risks](/tags/Implementation-Risk) being addressed by [Automated Testing](/tags/Automated-Testing) - building out a series of examples and running them to make sure the software behaves as expected.  The downsides of this may include the extra [complexity](/tags/Complexity-Risk) in the project and the [impact to the schedule](/tags/Schedule-Risk) of building the tests. 

As you can see from the table at the top, many of the practices we adopt in software development have been designed for the purpose of tackling [Implementation Risks](/tags/Implementation-Risk), but incur their own overheads in terms of effort and time.  

## Example Threats

### 1. Incorrect Assumptions about Inputs

**Threat**: it's easy to assume that the most common form of input represents the entire class, only for unusual or obscure or unusual input cases to reveal themselves as implementation issues. 

### 2. Leaky Abstractions

**Threat**: In a similar way, abstractions that make sense in the design phase can often fail to usefully model real-world concerns. 

### 3. Not Working As Advertised

**Threat**: A lot of programming languages and libraries purport to giving you a certain piece of functionality which you come to rely on or expect in your own code.  However it later transpires that they don't completely meet your expectations.  Your work has been built on top of faulty assumptions.

### 4. Unfamiliar Domain

**Threat**: If you or your team are using new tools, working in a new domain or making use of unfamiliar algorithms or libraries you should expect elevated levels of implementation risk while you build your [Internal Model](/tags/Internal-Model) of that domain.

### 5. "Hard" Domains

**Threat**:  Implementation risks are more prevalent in certain areas of computing, such as concurrency, memory management, security, algorithms with complex time/space tradeoffs and so on.  See [Complexity Risk](/tags/Complexity-Risk) and [Security Risk](/tags/Security-Risk).

### 6. Regressions

**Threat**: Existing features in your software get broken when you add new ones.   Customers don't have the features they expect.  

:::tip Anecdote Corner

Implementation Risks lead to bugs and disappointed clients, but often the results are more serious.  The original wireless (WiFi) network protocol, [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11) from 1997 was supposed to offer security via [WEP - Wired Equivalent Privacy](https://en.wikipedia.org/wiki/Wired_Equivalent_Privacy).  However, there were severe design flaws in the algorithm and in the early 2000's it was proven to be completely insecure to the point that you could fairly trivially recover a WEP pass-key just by snooping the encrypted network.  

Having security experts [review](/tags/Review) the standard would have helped, however there is also legal context around this that the US had export restrictions around cryptography at the time which would have hampered strong wireless security anyway.

:::
