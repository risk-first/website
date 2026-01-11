---
title: Review
description: Conducting systematic reviews of work done.
tags:
  - Review
  - Practice
featured:
  class: c
  element: "<action>Review</action>"
practice:
  aka:
    - "Assessment"
    - "Evaluation"
    - "Code Review"
    - "Audit"
  mitigates:
    - tag: Implementation Risk
      reason: "Ensures quality and correctness of work products."
    - tag: Communication Risk
      reason: "Maintains alignment with design principles and goals."
    - tag: Complexity Risk
      reason: "Identifies unnecessary complexity and communicates necessary complexity to the rest of the team."
    - tag: Agency Risk
      reason: "Reviewing work or activity can ensure good behaviour."
    - tag: Internal Model Risk
      reason: "Reviews and audits can uncover unseen problems in a system."
    - tag: Reliability Risk
      reason: "Reviews and audits can be performed to investigate the causes of unreliability in a system."
  attendant:
    - tag: Schedule Risk
      reason: "Reviews can introduce delays in the project timeline."
    - tag: Coordination Risk
      reason: "Synchronous reviews require effective coordination among team members."
  related:
    - ../Deployment-And-Operations/Monitoring
    - Retrospective
---

<PracticeIntro details={frontMatter} />

## Description

> "A review is an evaluation of a publication, product, service, or company such as a movie (a movie review), video game (video game review), musical composition (music review of a composition or recording), book (book review); a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, play, musical theater show, dance show, or art exhibition." - [Review, _Wikipedia_](https://en.wikipedia.org/wiki/Review)

In software development, a review involves evaluating work products to ensure they meet required standards and specifications. Reviews are essential for maintaining quality, consistency, and alignment with project goals. By catching issues early, reviews prevent larger problems and facilitate knowledge sharing among team members.

## Variations

| **Review Type**         | **Description**                                                                                        | **Reference**                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| **Code Review**         | Systematic examination of source code to find and fix mistakes, improving overall software quality.    | [Code Review, Wikipedia](https://en.wikipedia.org/wiki/Code_review)                               |
| **Design Review**       | Evaluation of system architecture and design decisions before implementation begins.                   | [Design Review, Wikipedia](https://en.wikipedia.org/wiki/Design_review)                           |
| **Security Audit**      | Focused review examining code or systems for security vulnerabilities and compliance issues.           | [Information Security Audit, Wikipedia](https://en.wikipedia.org/wiki/Information_security_audit) |
| **Architecture Review** | High-level assessment of system structure, examining scalability, maintainability, and technical debt. | [Software Architecture, Wikipedia](https://en.wikipedia.org/wiki/Software_architecture)           |

## See Also

<TagList tag="Review" />
