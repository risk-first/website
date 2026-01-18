---
title: Measurement
description: Quantitatively evaluating the software against benchmarks along some defined dimension.
tags:
  - Practice
  - Measurement
featured:
  class: c
  element: "<action>Measure</action>"
practice:
  aka:
    - "Metrics"
    - "Analysis"
    - "Performance Measurement"
  mitigates:
    - tag: Operational Risk
      reason: "Provides data to inform decision-making and improve operational efficiency."
    - tag: Feature Fit Risk
      reason: "Helps in understanding the use of the system."
    - tag: Implementation Risk
      reason: "Identifies areas of improvement in the implementation process."
  attendant:
    - tag: Funding Risk
      reason: "Implementing measurement systems can be expensive."
    - tag: Reliability Risk
      reason: "Creates dependencies on measurement tools and their accuracy."
    - tag: Complexity Risk
      reason: "Collecting and analyzing data can add to the complexity of the project."
    - tag: Internal Model Risk
      reason: "Focusing on the wrong measures can blind you to what's important."
  related:
    - ../Deployment-And-Operations/Monitoring
    - ../Planning-And-Management/Estimating
    - ../Communication-And-Collaboration/Review
---

<PracticeIntro details={frontMatter} />

## Description

> "Software measurement is a quantifiable indication of some aspect of a software product, process, or project." - [Software measurement, _Wikipedia_](https://en.wikipedia.org/wiki/Software_measurement)

Measurement in software development involves collecting and analyzing data to evaluate various aspects of the software or development process. This practice helps in making informed decisions, identifying areas for improvement, and ensuring that the project meets its goals and objectives.

## Variations

| **Measurement Type**      | **Description**                                                                                   | **Reference** |
|---------------------------|---------------------------------------------------------------------------------------------------|---------------|
| **Code Coverage**         | Measuring the percentage of code exercised by tests.                                             | [Code Coverage, Wikipedia](https://en.wikipedia.org/wiki/Code_coverage) |
| **Velocity**              | Measuring the amount of work completed per iteration.                                            | [Velocity, Wikipedia](https://en.wikipedia.org/wiki/Velocity_(software_development)) |
| **Cycle Time**            | Measuring the time from work starting to completion.                                             | [Cycle Time, Wikipedia](https://en.wikipedia.org/wiki/Cycle_time) |

## Used By

<MethodList tag="Measurement" />
