---
title: Redundancy
description: Ensuring backup systems are in place to prevent failure.
tags: 
  - Redundancy
  - Deployment-Operations
practice:
  aka: 
   - "Backup"
   - "Failover"
   - "Resilience"
  mitigates:
   - tag: Feature Risk
     reason: "Ensures system availability and reliability in case of component failure."
   - tag: Operational Risk
     reason: "Minimizes operational disruptions by providing backup components."
   - tag: Security Risk
     reason: "Enhances security by providing alternative paths and systems."
  attendant:
   - tag: Complexity Risk
     reason: "Introducing redundancy can add complexity to the system."
   - tag: Cost Risk
     reason: "Implementing redundancy can be expensive."
  related:
   - ../Deployment-and-Operations/Incident-Management
   - ../Development-and-Coding/Pair-Programming
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Redundancy is the duplication of critical components or functions of a system with the intention of increasing reliability of the system, usually in the form of a backup or fail-safe, or to improve actual system performance." - [Redundancy (engineering), _Wikipedia_](https://en.wikipedia.org/wiki/Redundancy_(engineering))

Redundancy in engineering is a key practice to ensure that systems remain operational in the event of component failures. It involves creating multiple instances of critical components so that if one fails, the others can take over seamlessly. This practice is essential in systems where reliability and availability are critical, such as in data centers, aerospace, and power systems. Implementing redundancy helps in maintaining service quality and availability, thereby reducing the risk of operational disruptions.

## See Also

<TagList tag="Redundancy" />
