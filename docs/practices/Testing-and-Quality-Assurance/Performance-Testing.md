---
title: Performance Testing
description: Testing to ensure the software performs well under expected workloads.
tags:
  - Practice
  - Performance Testing
featured:
  class: c
  element: "<action>Performance Test</action>"
practice:
  aka:
    - "Load Testing"
    - "Stress Testing"
    - "Performance Benchmarking"
  mitigates:
    - tag: Feature Fit Risk
      reason: "Identifies performance bottlenecks that could affect usefulness."
    - tag: Reliability Risk
      reason: "Performance testing software can establish bounds on its reliability."
  attendant:
    - tag: Schedule Risk
      reason: "Can be time-consuming, leading to delays in the project timeline."
    - tag: Complexity Risk
      reason: "Requires sophisticated tools and setup, adding complexity."
    - tag: Funding Risk
      reason: "Performance testing tools and environments can be expensive."
    - tag: Internal Model Risk
      reason: "Performance testing might give a false confidence and not reflect real-world scenarios."
  related:
    - ../Development-and-Coding/Coding
    - ../Testing-and-Quality-Assurance/Integration-Testing
    - ../Deployment-and-Operations/Monitoring
---

<PracticeIntro details={frontMatter} />

## Description

> "Performance testing is a general term used to describe tests that verify a system's stability, responsiveness, and scalability under a particular workload." - [Performance testing, _Wikipedia_](https://en.wikipedia.org/wiki/Performance_testing)

Performance Testing involves evaluating the performance of software applications under various conditions to ensure they meet required standards for speed, scalability, and stability. This practice helps in identifying and mitigating performance issues before they impact end users.

## Variations

| **Performance Test Type** | **Description**                                                                                   | **Reference** |
|---------------------------|---------------------------------------------------------------------------------------------------|---------------|
| **Load Testing**          | Testing system behaviour under expected user loads.                                              | [Load Testing, Wikipedia](https://en.wikipedia.org/wiki/Load_testing) |
| **Stress Testing**        | Testing system behaviour under extreme conditions beyond normal capacity.                        | [Stress Testing, Wikipedia](https://en.wikipedia.org/wiki/Stress_testing_(software)) |
| **Soak Testing**          | Testing system stability over an extended period under normal load.                              | [Soak Testing, Wikipedia](https://en.wikipedia.org/wiki/Soak_testing) |

## Used By

<MethodList tag="Performance Testing" />
