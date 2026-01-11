---
title: Design
description: Designing the high-level structure of the software.
tags:
  - Practice
  - Design
featured:
  class: c
  element: "<action>Design</action>"
practice:
  aka:
    - "System Design"
    - "Software Architecture"
    - "Design Patterns"
    - "Architecture"
    - "Research and Design"
  mitigates:
    - tag: Communication Risk
      reason: "Provides a clear structure and organization, making the system easier to understand and use."
    - tag: Implementation Risk
      reason: "Guides the development process, ensuring that the system meets requirements and design specifications."
    - tag: Operational Risk
      reason: "Ensures that the system architecture supports operational requirements and scalability."
    - tag: Market Risk
      reason: (Research and) design allows you to leapfrog competitors and provide new sources of value.
  attendant:
    - tag: Lock-In Risk
      reason: "Design decisions can create boundaries that limit flexibility and adaptability."
    - tag: Reliability Risk
      reason: "Creates dependencies on software components and design patterns."
    - tag: Feature Fit Risk
      reason: "Too much design up-front can create problems meeting feature requirements."
    - tag: Funding Risk
      reason: "Design can be an expensive bet that doesn't lead to improved software."
  related:
    - ../Planning-and-Management/Requirements-Capture
    - ../Development-and-Coding/Coding
    - ../Development-and-Coding/Refactoring
    - ../Communication-and-Collaboration/Documentation
---

<PracticeIntro details={frontMatter} />

## Description

> "Software architecture refers to the fundamental structures of a software system and the discipline of creating such structures and systems." - [Software architecture, _Wikipedia_](https://en.wikipedia.org/wiki/Software_architecture)

Design involves creating the high-level structure of the system—defining components, their relationships, and interactions. While **Big Design Up Front** considers all requirements at once, incremental design tackles one risk at a time like [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent). Incremental design can get trapped in [local minima](https://en.wikipedia.org/wiki/Maximum_and_minimum#Search); sometimes you need to step back and imagine where you want to be on the [Risk Landscape](/risks/Risk-Landscape).

## Variations

| **Design Approach**       | **Description**                                                            | **Reference**                                                                           |
| ------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Big Design Up Front**   | Comprehensive design before implementation begins.                         | [BDUF, Wikipedia](https://en.wikipedia.org/wiki/Big_Design_Up_Front)                    |
| **Emergent Design**       | Design evolves incrementally as the system is built.                       | [Emergent Design, Wikipedia](https://en.wikipedia.org/wiki/Emergent_Design)             |
| **Domain-Driven Design**  | Modelling software around business domain concepts.                        | [Domain-Driven Design, Wikipedia](https://en.wikipedia.org/wiki/Domain-driven_design)   |

## Used By

<MethodList tag="Design" />
