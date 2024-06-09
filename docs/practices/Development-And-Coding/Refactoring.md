---
title: Refactoring
tags: 
  - Refactoring
practice:
  aka: 
   - "Code Cleanup"
   - "Code Optimization"
   - "Technical Debt Management"
  mitigates:
   - tag: Complexity Risk
     reason: "Improves code structure and reduces complexity."
   - tag: Implementation Risk
     reason: "Enhances code quality and maintainability."
   - tag: Regression Risk
     reason: "Makes the codebase more robust and less prone to regressions."
  attendant:
   - tag: Schedule Risk
     reason: "Refactoring can be time-consuming and delay project timelines."
   - tag: Implementation Risk
     reason: "Changes during refactoring can introduce new bugs."
   - tag: Complexity Risk
     reason: "Poorly planned refactoring can add to system complexity."
  related:
   - ../Development-and-Coding/Coding
   - ../Testing-and-Quality-Assurance/Regression-Testing
   - ../Planning-and-Management/Change-Management
---

<PracticeIntro details={frontMatter.practice} /> 

## Description

> "Code refactoring is the process of restructuring existing computer code—changing the factoring—without changing its external behavior. Refactoring improves nonfunctional attributes of the software." - [Code refactoring, _Wikipedia_](https://en.wikipedia.org/wiki/Code_refactoring)

Refactoring involves revising and restructuring existing code to improve its readability, maintainability, and performance without changing its external behavior. This practice helps in reducing technical debt, enhancing code quality, and making the codebase easier to understand and modify.

## See Also

<TagList tag="Refactoring" />
