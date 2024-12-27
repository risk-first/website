---
title: Configuration Management
description: Managing and maintaining configuration settings of the software.
tags: 
  - Configuration Management
  - Practice
featured: 
  class: c
  element: '<action>Configuration Mgmt</action>'
practice:
  aka: 
   - "CM"
   - "SCM"
   - "Software Configuration Management"
   - "Feature Toggle"
   - "Feature Flag"
  mitigates:
   - tag: Implementation Risk
     reason: "Establishes and maintains consistency in the software product's performance and attributes."
   - tag: Operational Risk
     reason: "Ensures that changes are systematically evaluated and implemented to minimize disruptions."
   - tag: Complexity Risk
     reason: "Reduces complexity by managing system changes in a controlled and documented manner."
  attendant:
   - tag: Reliability Risk
     reason: "Carefully managing software configuration ensures that the reliability of dependencies is also managed."
   - tag: Security Risk
     reason: "Incorrect configuration management can lead to security vulnerabilities."
  related:
   - ../Planning-and-Management/Change-Management
   - ../Tools-and-Standards/Version-Control
   - ../Tools-and-Standards/Tool-Adoption
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Configuration management (CM) is a systems engineering process for establishing and maintaining consistency of a product's performance, functional, and physical attributes with its requirements, design, and operational information throughout its life." - [Configuration management, _Wikipedia_](https://en.wikipedia.org/wiki/Configuration_management)

Configuration Management (CM) involves systematically handling changes to ensure the system maintains its integrity over time. It includes practices and tools for managing changes, tracking their status, and maintaining an inventory of system and support documents. CM is critical in software engineering to handle changes efficiently, reduce risks, and ensure the system performs as intended throughout its lifecycle.

See:

 - [Consider Payoff](/thinking/Consider-Payoff)
 
## See Also

<TagList tag="Configuration Management" />