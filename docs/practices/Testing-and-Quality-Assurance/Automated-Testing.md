---
title: Automated Testing
description: Writing and running tests for individual units or components of the software.
tags:
  - Practice
  - Automated Testing
featured:
  class: c
  element: "<action>Automated Test</action>"
practice:
  aka:
    - "Component Testing"
    - "Module Testing"
  mitigates:
    - tag: Implementation Risk
      reason: "Ensures that individual components work correctly and detects regressions early in the development cycle."
    - tag: Complexity Risk
      reason: "Aids in refactoring by ensuring that functionality survives the change."
  attendant:
    - tag: Schedule Risk
      reason: "Writing and maintaining unit tests can be time-consuming."
    - tag: Complexity Risk
      reason: "Managing a large suite of unit tests can add to the complexity."
    - tag: Reliability Risk
      reason: "Creates dependencies on testing frameworks and tools."
    - tag: Internal Model Risk
      reason: "Unit Testing and code coverage can give false assurances about how a system will work in the real world."
  related:
    - ../Testing-and-Quality-Assurance/Integration-Testing
    - ../Development-and-Coding/Coding
    - ../Planning-and-Management/Requirements-Capture
---

<PracticeIntro details={frontMatter} />

## Description

> "Unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use." - [Unit testing, _Wikipedia_](https://en.wikipedia.org/wiki/Unit_testing)

Unit testing involves writing and running tests for individual units or components of the software to ensure they function as expected. This practice helps in identifying and fixing issues early in the development process, making the codebase more reliable and maintainable.

See:

- [Development Process](/thinking/Development-Process#a-toy-process)
- [Unit Testing (Meeting Reality)](/thinking/Meeting-Reality#example-automation)

## Used By

<MethodList tag="Automated Testing" />
