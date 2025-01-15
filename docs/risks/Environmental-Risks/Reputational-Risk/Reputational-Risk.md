---
title: Reputational Risk
description: Reputational risk is the potential harm to reputation.

slug: /risks/Reputational-Risk


featured: 
  class: c
  element: '<risk class="trust" />'
sidebar_position: 3
tweet: yes
tags: 
 - Risks
 - Reputational Risk
part_of: Environmental Risks
---

<RiskIntro fm={frontMatter} />

Although [protocols](/risks/On-Protocols) can sometimes handle security features of communication (such as [Authentication](https://en.wikipedia.org/wiki/Authentication) and preventing [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)), we cannot guarantee that when a message is sent to us we can trust its source.   

 trust goes further than this, it is the flip-side of [Agency Risk](/tags/Agency-Risk), which we will look at later:  can you be sure that the other party in the communication is acting in your best interests?
 

## Worked Example


No software system can be perfect, and after it meets the real world, we will likely want to improve it over time.  But delivering a scrappy, early version of a piece of software is a [Reputational Risk](/tags/Reputational-Risk) threat: because reputation is very hard to rebuild, we need to be careful about releasing software that might not live up to expectations.    

So there is a tension between "you only get one chance to make a first impression" and "gilding the lily" (perfectionism).  In the past I've seen this stated as _pressure to ship vs pressure to improve_.

![Balance of Risks from Delivering Software](/img/generated/risks/operational/ship-it.svg)

A Risk-First re-framing of this (as shown in the diagram above) might be the balance between:

- The perceived scarcity (such as [funding](/tags/Funding-Risk), [time available](/tags/Deadline-Risk), etc) of staying in development (pressure to ship).
- The perceived [Reputational Risk](/tags/Reputational-Risk), [Feature Fit Risk](/tags/Feature-Fit-Risk) and [Operational Risk](/tags/Operational-Risk) of going to production (pressure to improve).

The "should we ship?" decision is therefore a complex one.  In [Meeting Reality](/thinking/Meeting-Reality), we discussed that it's better to do this "sooner, more frequently, in smaller chunks and with feedback".  We can manage [Reputational Risk](/tags/Reputational-Risk) _on our own terms_ by doing so: 

|Meet Reality...             |Techniques                                                            | 
|----------------------------|----------------------------------------------------------------------|
|**Sooner**                  |Beta Testing, Soft Launches, Business Continuity Testing              |
|**More Frequently**         |Continuous Delivery, Sprints                                          |
|**In Smaller Chunks**       |Modular Releases, Microservices, Feature Toggles, Trial Populations   |
|**With Feedback**           |User Communities, Support Groups, Monitoring, Logging, Analytics      |

## Example Threats

### 1. Negative Publicity, Misinformation, Lies and Gossip

**Threat**: Your reputation is not entirely under your own control:  external sources could present risks to reputation.

### 2. Misconduct, Behaviour, Legal Issues

**Threat**: When your organisation, or employees within it, break laws or social norms this possibly will have a wider reputational impact.

### 3. Product Failures / Data Breaches

**Threat**: [Operational Problems](/tags/Operational-Risk) of all kinds can tarnish your reputation with both potential and existing customers.

### 4. Other Environmental Factors

**Threat**: All of the [Environmental Risks](/tags/Environmental-Risks) could potentially form reputational threats too: e.g political associations, Environmental, Social and Goveranance (ESG) mis-steps or associations with the wrong parties.

:::tip Anecdote Corner

Software systems can easily lead to reputational damage, as in the [British Post Office scandal](https://en.wikipedia.org/wiki/British_Post_Office_scandal), also called the Horizon IT scandal (the name of the IT system involved). Between 2009 and 2015, hundreds of British subpostmasters (people running branches of the Post Office) were convicted of theft, fraud and false accounting based on records from an IT system called Horizon, built by Fujitsu.

In 2017, the subpostmasters, lead by Allen Bates, brought a claim against the Post Office in the British High Court which started a process of quashing the convictions.  In 2022, [a full public inquiry](https://www.postofficehorizoninquiry.org.uk) was set up by the government and postmasters began suing for damages, expected to reach £1bn.  

In January 2024, a British TV channel broadcast an award-winning drama called [Mr Bates vs The Post Office](https://en.wikipedia.org/wiki/Mr_Bates_vs_The_Post_Office) which led to a withdrawal of a CBE for Paula Vennels, the ex-CEO of the Post Office and new laws to exonerate and compensate subpostmasters was drawn up by the UK parliament. 

Although this might have started as a simple programming error, it's hard to treat this as the only source of Reputational, Operational and Legal Risk.  Clearly there is something more going on:  an over-reliance on technology, institutional failure and short-term efforts to minimise reputational damage and financial losses are also likely to be big contributing factors in this tragedy.

:::