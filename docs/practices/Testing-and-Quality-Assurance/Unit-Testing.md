---
title: Unit Testing
description: Writing and running tests for individual units or components of the software.
tags: 
  - Unit-Testing
  - Testing-Quality-Assurance 
featured: 
  class: c
  element: '<action>Unit Test</action>'
practice:
  aka: 
   - "Component Testing"
   - "Module Testing"
   - "Test-Driven Development (TDD)"
  mitigates:
   - tag: Implementation Risk
     reason: "Ensures that individual components work correctly."
   - tag: Regression Risk
     reason: "Detects regressions early in the development cycle."
   - tag: Complexity Risk
     reason: "Simplifies debugging by isolating issues to specific units."
  attendant:
   - tag: Schedule Risk
     reason: "Writing and maintaining unit tests can be time-consuming."
   - tag: Complexity Risk
     reason: "Managing a large suite of unit tests can add to the complexity."
   - tag: Software Dependency Risk
     reason: "Creates dependencies on testing frameworks and tools."
  related:
   - ../Testing-and-Quality-Assurance/Integration-Testing
   - ../Development-and-Coding/Coding
   - ../Planning-and-Management/Requirements-Capture
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use." - [Unit testing, _Wikipedia_](https://en.wikipedia.org/wiki/Unit_testing)

Unit testing involves writing and running tests for individual units or components of the software to ensure they function as expected. This practice helps in identifying and fixing issues early in the development process, making the codebase more reliable and maintainable.

## See Also

<TagList tag="Unit-Testing" />