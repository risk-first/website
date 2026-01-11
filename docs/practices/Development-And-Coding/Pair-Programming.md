---
title: Pair Programming
description: Two developers working together on the same code.
tags:
  - Pair Programming
  - Practice
featured:
  class: c
  element: "<action>Pairing</action>"
practice:
  aka:
    - "Collaborative Coding"
    - "Joint Programming"
    - "Buddy Programming"
    - "Mob Programming"
    - "Pairing"
  mitigates:
    - tag: Coordination Risk
      reason: "Enhances collaboration and coordination between developers."
    - tag: Internal Model Risk
      reason: "Facilitates knowledge sharing and learning."
    - tag: Implementation Risk
      reason: "More eyeballs means fewer bugs and a better implementation"
    - tag: Reliability Risk
      reason: "More developers may be able to produce a more reliable implementation."
  attendant:
    - tag: Coordination Risk
      reason: "Requires coordination around time, place, activity and skills."
    - tag: Schedule Risk
      reason: "Can slow down individual productivity, impacting overall schedule."
    - tag: Agency Risk
      reason: "Staff might not like working in this arrangement."
  related:
    - ../Development-and-Coding/Coding
    - ../Communication-and-Collaboration/Review
    - ../Planning-and-Management/Stakeholder-Management
---

<PracticeIntro details={frontMatter} />

## Description

> "Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently." - [Pair programming, _Wikipedia_](https://en.wikipedia.org/wiki/Pair_programming)

Pair Programming involves two developers working together on the same code. One developer writes the code while the other reviews each line in real-time, providing instant feedback and suggestions. This practice not only improves code quality but also facilitates knowledge sharing and collaboration between team members.

## Variations

| **Pairing Style**     | **Description**                                                                    | **Reference**                                                                                         |
| --------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Driver-Navigator**  | One developer writes code (driver) while the other reviews and guides (navigator). | [Pair Programming, Wikipedia](https://en.wikipedia.org/wiki/Pair_programming)                         |
| **Ping-Pong Pairing** | Developers alternate writing tests and implementation code in a TDD style.         | [Ping Pong Pair Programming](https://anthonysciamanna.com/2015/04/18/ping-pong-pair-programming.html) |
| **Mob Programming**   | The entire team works together on a single task at one computer.                   | [Mob Programming, Wikipedia](https://en.wikipedia.org/wiki/Mob_programming)                           |

See also: [Crisis Mode](/thinking/Crisis-Mode)

## Used By

<MethodList tag="Pair Programming" />
