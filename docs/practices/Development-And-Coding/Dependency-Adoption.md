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

> "In software engineering, a software library is a collection of code that can be reused across different programs to provide commonly needed functionality." - [Library, _Wikipedia_](<https://en.wikipedia.org/wiki/Library_(computing)>)

Making use of third-party libraries or services in your code can dramatically reduce development time and leverage battle-tested solutions.

## Variations

| **Dependency Type**       | **Description**                                                                     | **Reference**                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Software Library**      | Reusable code packages that provide specific functionality (e.g., React, Lodash).   | [Library, Wikipedia](<https://en.wikipedia.org/wiki/Library_(computing)>)               |
| **Framework**             | A larger structure that provides scaffolding and dictates application architecture. | [Software Framework, Wikipedia](https://en.wikipedia.org/wiki/Software_framework)       |
| **Software-as-a-Service** | External services accessed via APIs (e.g., Stripe, AWS).                            | [Software as a Service, Wikipedia](https://en.wikipedia.org/wiki/Software_as_a_service) |

See also: [Languages and Dependencies](/risks/Kolmogorov-Complexity#languages-and-dependencies), [Software Libraries](/risks/On-Software-Dependencies#2-software-libraries), [Software-as-a-Service](/risks/On-Software-Dependencies#3--software-as-a-service)

## Used By

<MethodList tag="Dependency Adoption" />
