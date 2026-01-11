---
title: Refactoring
description: Revising code to improve its structure without changing its behavior.
tags:
  - Refactoring
  - Practice
featured:
  class: c
  element: "<action>Refactor</action>"
practice:
  aka:
    - "Code Cleanup"
    - "Code Optimization"
    - "Technical Debt Management"
    - "Factoring"
    - "Separation of Concerns"
    - "Modularisation"
    - "Creating Abstractions"
  mitigates:
    - tag: Complexity Risk
      reason: "Refactoring is aimed at making code more orthogonal, less duplicative and clearer to understand"
    - tag: Implementation Risk
      reason: "Enhances code quality and maintainability."
    - tag: Communication Risk
      reason: "Well-factored code should be easier to understand."
  attendant:
    - tag: Schedule Risk
      reason: "Refactoring can be time-consuming and delay project timelines."
    - tag: Implementation Risk
      reason: "Done carelessly, refactoring can introduce new issues into the codebase"
  related:
    - ../Development-and-Coding/Coding
    - ../Testing-and-Quality-Assurance/Regression-Testing
    - ../Planning-and-Management/Change-Management
    - ../Planning-And-Management/Design
---

<PracticeIntro details={frontMatter} />

## Description

> "Code refactoring is the process of restructuring existing computer code—changing the factoring—without changing its external behavior. Refactoring improves nonfunctional attributes of the software." - [Code refactoring, _Wikipedia_](https://en.wikipedia.org/wiki/Code_refactoring)

Refactoring involves revising and restructuring existing code to improve its readability, maintainability, and performance without changing its external behavior. This practice helps in reducing technical debt, enhancing code quality, and making the codebase easier to understand and modify.

## See Also:

- [Refactoring](/risks/Kolmogorov-Complexity#refactoring)
- [Hierarchies and Modularisation](/risks/Connectivity#hierarchies-and-modularisation)
- [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)
- [Refactoring Book](https://martinfowler.com/books/refactoring.html)

## Used By

<MethodList tag="Refactoring" />
