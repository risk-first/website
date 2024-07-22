---
title: Integration Testing
description: Testing combined parts of the software to ensure they work together.
tags: 
  - Practice 
  - Integration Testing
featured: 
  class: c
  element: '<action>Integration Test</action>'
practice:
  aka: 
   - "System Testing"
   - "End-to-End Testing"
   - "Continuous Integration"
  mitigates:
   - tag: Software Dependency Risk
     reason: "Ensures that integrated components work together as expected."
   - tag: Implementation Risk
     reason: "Validates that the implementation meets requirements."
   - tag: Regression Risk
     reason: "Detects regressions early in the integration phase."
  attendant:
   - tag: Schedule Risk
     reason: "Can be time-consuming, leading to delays in the project timeline."
   - tag: Software Dependency Risk
     reason: "Adds dependencies on test environments and their availability."
  related:
   - ../Planning-and-Management/Change-Management
   - ../Development-and-Coding/Unit-Testing
   - ../Deployment-and-Operations/Configuration-Management
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Integration testing is the phase in software testing in which individual software modules are combined and tested as a group. It occurs after unit testing and before validation testing." - [Integration testing, _Wikipedia_](https://en.wikipedia.org/wiki/Integration_testing)

Integration Testing involves testing combined parts of the software to ensure they work together correctly. This practice helps in identifying and fixing issues that arise when individual components interact, ensuring that the overall system functions as intended.

See: 
- [Development Process](/thinking/Development-Process#a-toy-process)_
- [Production (Cadence)](/thinking/Cadence#production)

## See Also

<TagList tag="Integration Testing" />
