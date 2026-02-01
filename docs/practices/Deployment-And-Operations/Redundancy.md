---
title: Redundancy
description: Ensuring backup systems are in place to prevent failure.
tags:
  - Redundancy
  - Practice
  - AI Practices
featured:
  class: c
  element: "<action>Redundancy</action>"
practice:
  aka:
    - "Backup"
    - "Failover"
    - "Resilience"
    - "Stockpiling"
  mitigates:
    - tag: Reliability Risk
      reason: "Minimizes operational disruptions by providing backup components."
    - tag: Security Risk
      reason: "Enhances security by providing alternative paths and systems."
    - tag: Unintended Cascading Failures
      reason: "Implementing backup mechanisms to prevent systemic failures from spreading across interconnected systems."
  attendant:
    - tag: Complexity Risk
      reason: "Introducing redundancy can add complexity to the system."
    - tag: Funding Risk
      reason: "Implementing redundancy can be expensive."
  related:
    - ../Deployment-And-Operations/Monitoring
    - ../Development-And-Coding/Pair-Programming
---

<PracticeIntro details={frontMatter} />

## Description

> "Redundancy is the duplication of critical components or functions of a system with the intention of increasing reliability of the system, usually in the form of a backup or fail-safe, or to improve actual system performance." - [Redundancy (engineering), _Wikipedia_](<https://en.wikipedia.org/wiki/Redundancy_(engineering)>)

Redundancy in engineering is a key practice to ensure that systems remain operational in the event of component failures. It involves creating multiple instances of critical components so that if one fails, the others can take over seamlessly. This practice is essential in systems where reliability and availability are critical, such as in data centers, aerospace, and power systems. Implementing redundancy helps in maintaining service quality and availability, thereby reducing the risk of operational disruptions.

## Variations

| **Redundancy Type**         | **Description**                                                                         | **Reference**                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Active-Passive Failover** | A standby system takes over when the primary system fails.                              | [Failover, Wikipedia](https://en.wikipedia.org/wiki/Failover)                                   |
| **Active-Active**           | Multiple systems share the load simultaneously, providing both redundancy and capacity. | [High Availability Cluster, Wikipedia](https://en.wikipedia.org/wiki/High-availability_cluster) |
| **Geographic Redundancy**   | Distributing systems across multiple physical locations to survive regional failures.   | [Disaster Recovery, Wikipedia](https://en.wikipedia.org/wiki/Disaster_recovery)                 |
| **Data Replication**        | Maintaining copies of data across multiple storage systems or locations.                | [Replication, Wikipedia](<https://en.wikipedia.org/wiki/Replication_(computing)>)               |

## Used By

<MethodList tag="Redundancy" />
