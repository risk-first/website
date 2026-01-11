---
title: Regression Testing
description: Testing to ensure new changes do not adversely affect existing functionality.
tags:
  - Practice
  - Regression Testing
featured:
  class: c
  element: "<action>Regression Test</action>"
practice:
  aka:
    - "Retesting"
    - "Non-Regression Testing"
    - "Software Regression Testing"
  mitigates:
    - tag: Implementation Risk
      reason: "Detects and prevents regressions in the software."
    - tag: Reliability Risk
      reason: "Regression testing helps prevent reliability breaks caused by software change."
  attendant:
    - tag: Schedule Risk
      reason: "Can be time-consuming and introduce delays."
    - tag: Reliability Risk
      reason: "Requires a stable testing environment, creating dependencies."
    - tag: Complexity Risk
      reason: "Managing extensive regression tests can add complexity."
  related:
    - ../Development-and-Coding/Refactoring
    - ../Testing-and-Quality-Assurance/Integration-Testing
    - ../Deployment-and-Operations/Release-Delivery
---

<PracticeIntro details={frontMatter} />

## Description

> "Regression testing is a type of software testing that seeks to uncover software regressions: whether previously working software stops working or behaves differently after changes." - [Regression testing, _Wikipedia_](https://en.wikipedia.org/wiki/Regression_testing)

Regression Testing compares outputs from version A and A* to ensure new changes haven't broken existing functionality. However, it's fraught with [Hidden Risks](/tags/Hidden-Risk): number format differences, ordering changes, schema changes, methodology changes, non-determinism, and human fatigue when reviewing exceptions. While it _seems_ like a big win, the payback is often slight. [Automated Testing](Automated-Testing) is usually more effective—it surfaces problems you didn't know existed, and is far easier to debug.

## Variations

| **Regression Approach**   | **Description**                                                            | **Reference**                                                                       |
| ------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Full Regression**       | Re-running the entire test suite after any change.                         | [Regression Testing, Wikipedia](https://en.wikipedia.org/wiki/Regression_testing)  |
| **Partial Regression**    | Testing only the areas affected by changes.                                | [Regression Testing, Wikipedia](https://en.wikipedia.org/wiki/Regression_testing)  |
| **Golden Master Testing** | Comparing outputs against a known-good "golden" baseline.                  | [Characterization Test, Wikipedia](https://en.wikipedia.org/wiki/Characterization_test) |

## Used By

<MethodList tag="Regression Testing" />
