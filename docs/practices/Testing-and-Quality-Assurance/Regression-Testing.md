---
title: Regression Testing
tags: 
  - Regression Testing
practice:
  aka: 
   - "Retesting"
   - "Non-Regression Testing"
   - "Software Regression Testing"
  mitigates:
   - tag: Regression Risk
     reason: "Detects and prevents regressions in the software."
   - tag: Implementation Risk
     reason: "Ensures new changes do not negatively impact existing functionality."
   - tag: Reliability Risk
     reason: "Maintains the reliability of the software through continuous testing."
  attendant:
   - tag: Schedule Risk
     reason: "Can be time-consuming and introduce delays."
   - tag: Dependency Risk
     reason: "Requires a stable testing environment, creating dependencies."
   - tag: Complexity Risk
     reason: "Managing extensive regression tests can add complexity."
  related:
   - ../Development-and-Coding/Refactoring
   - ../Testing-and-Quality-Assurance/Integration-Testing
   - ../Deployment-and-Operations/Release-Delivery
---

<PracticeIntro details={frontMatter.practice} /> 

## Description

> "Regression testing is a type of software testing that seeks to uncover software regressions: as a previously developed and tested software is changed, whether the previously working software stops working or behaves differently." - [Regression testing, _Wikipedia_](https://en.wikipedia.org/wiki/Regression_testing)

Regression Testing involves testing the software after changes have been made to ensure that existing functionality is not adversely affected. This practice helps in maintaining the stability and reliability of the software by catching and addressing regressions early in the development process.

## See Also

<TagList tag="Regression Testing" />
