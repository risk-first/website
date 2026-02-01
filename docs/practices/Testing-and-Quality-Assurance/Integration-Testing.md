---
title: Integration Testing
description: Testing combined parts of the software to ensure they work together.
tags:
  - Practice
  - Integration Testing
featured:
  class: c
  element: "<action>Integration Test</action>"
practice:
  aka:
    - "System Testing"
    - "End-to-End Testing"
    - "Continuous Integration"
  mitigates:
    - tag: Reliability Risk
      reason: "Ensures that integrated components work together as expected."
    - tag: Implementation Risk
      reason: "Validates that the implementation meets requirements and detects regressions early in the integration phase."
  attendant:
    - tag: Schedule Risk
      reason: "Can be time-consuming, leading to delays in the project timeline."
    - tag: Reliability Risk
      reason: "Adds dependencies on test environments and their availability."
  related:
    - ../Planning-And-Management/Change-Management
    - ../Testing-and-Quality-Assurance/Automated-Testing
    - ../Deployment-And-Operations/Configuration-Management
---

<PracticeIntro details={frontMatter} />

## Description

> "Integration testing is the phase in software testing in which individual software modules are combined and tested as a group. It occurs after unit testing and before validation testing." - [Integration testing, _Wikipedia_](https://en.wikipedia.org/wiki/Integration_testing)

Integration Testing involves testing combined parts of the software to ensure they work together correctly. This practice helps in identifying and fixing issues that arise when individual components interact, ensuring that the overall system functions as intended.

## Variations

| **Integration Type**      | **Description**                                                                                   | **Reference** |
|---------------------------|---------------------------------------------------------------------------------------------------|---------------|
| **Big Bang Integration**  | All components are integrated simultaneously and tested together.                                | [Integration Testing, Wikipedia](https://en.wikipedia.org/wiki/Integration_testing) |
| **Incremental Integration** | Components are integrated and tested one at a time.                                            | [Integration Testing, Wikipedia](https://en.wikipedia.org/wiki/Integration_testing) |
| **End-to-End Testing**    | Testing the complete flow from start to finish as a user would experience it.                   | [System Testing, Wikipedia](https://en.wikipedia.org/wiki/System_testing) |

See also: [Development Process](/thinking/Development-Process#a-toy-process), [Production (Cadence)](/thinking/Cadence#production)

## Used By

<MethodList tag="Integration Testing" />
