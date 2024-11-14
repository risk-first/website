---
title: Outsourcing
description: Hiring external resources or companies to handle parts of the project.
tags: 
  - Outsourcing
  - Practice
featured: 
  class: c
  element: '<action>Outsource</action>'
practice:
  aka: 
   - "Contracting"
   - "External Hiring"
   - "Third-Party Development"
  mitigates:
   - tag: Staff Risk
     reason: "Accesses external resources and skills that may not be available internally."
   - tag: Funding Risk
     reason: "Can be cost-effective by leveraging economies of scale."
   - tag: Schedule Risk
     reason: "Can speed up project timelines by adding more workforce."
  attendant:
   - tag: Agency Risk
     reason: "Creates dependencies on third-party vendors and their reliability."
   - tag: Communication Risk
     reason: "May introduce communication challenges with external teams."
   - tag: Security Risk
     reason: "Potential risks related to data security and confidentiality."
   - tag: Market Risk
     reason: "Increasing the size of the supply chain introduces risks that the state of that supply chain changes with the market."
  related:
   - ../Planning-and-Management/Contract
   - ../Communication-and-Collaboration/Stakeholder-Management
   - ../Deployment-and-Operations/Configuration-Management
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Outsourcing is an agreement in which one company hires another company to be responsible for a planned or existing activity that is or could be done internally, and sometimes involves transferring employees and assets from one firm to another." - [Outsourcing, _Wikipedia_](https://en.wikipedia.org/wiki/Outsourcing)

Outsourcing in software development involves hiring external vendors or service providers to handle specific tasks or projects. This practice can help access specialized skills, reduce costs, and accelerate project timelines. However, it also introduces risks related to dependency, communication, and security that need to be managed effectively.

## Discussion

**Pairing** and **Mobbing** as mitigations to [Coordination Risk](/tags/Coordination-Risk) are easiest when developers are together in the same room.  But it doesn't always work out like this.   Teams spread in different locations and timezones naturally don't have the same [communication bandwidth](/tags/Communication-Risk) and you _will_ have more issues with [Coordination Risk](/tags/Coordination-Risk).  

In the extreme, I've seen situations where the team at one location has decided to "suck up" the extra development effort themselves rather than spend time trying to bring a new remote team up-to-speed.  More common is for one location to do the development, while another gets the [Support](../Planning-And-Management/Issue-Management) duties.  

When this happens, it's because somehow the team feel that [Coordination Risk](/tags/Coordination-Risk) is more unmanageable than [Schedule Risk](/tags/Schedule-Risk).

There are some mitigations here:  video-chat, moving staff from location-to-location for face-time, frequent [show-and-tell](/tags/Review), or simply modularizing accross geographic boundaries, in respect of [Conway's Law](/tags/Coordination-Risk):

> "organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations."  - _[M. Conway](https://en.wikipedia.org/wiki/Conways_law)_

When we add **Outsourcing** into the mix, we also have to consider [Agency Risk](/tags/Agency-Risk):  the consultancy you've hired is _definitely_ more interested in keeping themselves solvent than solving your business problems.


## See Also

<TagList tag="Outsourcing" />
