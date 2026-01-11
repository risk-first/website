---
title: Dependency Adoption
description: Making use of software libraries or services as a dependency.
tags:
  - Dependency Adoption
  - Practice
featured:
  class: c
  element: "<action>Use Dependency</action>"
practice:
  aka:
    - "Runtime Adoption"
    - "Library Integration"
    - "Standards Adoption"
    - "Runtime Dependency"
    - "Open-Source Consumption"
  mitigates:
    - tag: Implementation Risk
      reason: "Ensures consistency and reliability by adhering to proven standards and libraries."
    - tag: Implementation Risk
      reason: "Reduces the risk of relying on proprietary or less widely adopted solutions."
    - tag: Complexity Risk
      reason: "Can reduce the amount of code you are responsible for, hence the amount of 'owned' complexity."
  attendant:
    - tag: Feature Fit Risk
      reason: "Creates dependencies on the adopted standards and libraries."
    - tag: Lock-In Risk
      reason: "Adopting proprietary libraries may lead to worsening terms-of-service in the future."
    - tag: Funding Risk
      reason: "Can incur costs associated with adopting standards or libraries."
  related:
    - ../Development-and-Coding/Coding
    - ../Testing-and-Quality-Assurance/Integration-Testing
    - ../Deployment-and-Operations/Configuration-Management
---

<PracticeIntro details={frontMatter} />

## Description

Making use of third-party libraries or services in your code.

See:

- [Languages and Dependencies](/risks/Kolmogorov-Complexity#languages-and-dependencies)
- [Software Libraries (On Software Dependencies)](/risks/On-Software-Dependencies#2-software-libraries)
- [Software-as-a-Service (On Software Dependencies)](/risks/On-Software-Dependencies#3--software-as-a-service)

## Used By

<MethodList tag="Library Adoption" />
