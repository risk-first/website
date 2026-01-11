---
title: Coding
description: Writing software to meet a required feature.
tags:
  - Coding
  - Practice
featured:
  class: c
  element: "<action>Code</action>"
practice:
  aka:
    - "Programming"
    - "Development"
    - "Software Engineering"
  mitigates:
    - tag: Feature Fit Risk
      reason: "Build or improve some features which our clients will find useful."
    - tag: Process Risk
      reason: Problems and edge cases with software processes can be fixed by adding code.
  attendant:
    - tag: Implementation Risk
      reason: "Changes in code can introduce new bugs and regressions."
    - tag: Complexity Risk
      reason: "Writing new code adds complexity to a project."
  related:
    - ../Planning-and-Management/Requirements-Capture
    - ../Testing-and-Quality-Assurance/Integration-Testing
    - ../Development-and-Coding/Code-Reviews
---

<PracticeIntro details={frontMatter} />

## Description

> "Coding, in the context of software engineering, is the process of designing and building an executable computer program for accomplishing a specific computing task.": - [Coding, _Wikipedia_](https://en.wikipedia.org/wiki/Programming)

Coding is a core activity in software development, involving the translation of requirements and designs into functional code. High-quality coding practices are essential for creating reliable, maintainable, and efficient software. This involves writing clear, well-structured, and documented code that adheres to established standards and best practices.

## Variations

| **Coding Style**          | **Description**                                                                                   | **Reference** |
|---------------------------|---------------------------------------------------------------------------------------------------|---------------|
| **Test-Driven Development** | Writing tests before code to guide implementation and ensure coverage.                          | [Test-Driven Development, Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development) |
| **Behaviour-Driven Development** | Writing code based on expected behaviour described in natural language.                     | [Behaviour-Driven Development, Wikipedia](https://en.wikipedia.org/wiki/Behavior-driven_development) |
| **Literate Programming**  | Embedding code within documentation to explain logic alongside implementation.                   | [Literate Programming, Wikipedia](https://en.wikipedia.org/wiki/Literate_programming) |

See also: [Time/Reality Tradeoff](/thinking/Cadence#time--reality-trade-off)

## Used By

<MethodList tag="Coding" />
