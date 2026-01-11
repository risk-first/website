---
title: Extreme Programming
description: An Agile software development methodology that emphasizes customer satisfaction, teamwork, and frequent delivery of small, functional software increments.
tags:
  - Risk Framework
  - Agile
  - Extreme Programming
featured:
  class: c
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/xp.svg">XP</image-artifact>'
method:
  practices:
    - tag: Pair Programming
      reason: "XP encourages two developers working together at one workstation, which improves code quality and facilitates knowledge sharing."
      use:
        - "Collective Code Ownership"
    - tag: Automated Testing
      reason: "XP emphasizes writing tests before coding, ensuring that the software meets its requirements from the start."
      use:
        - Test Driven Development (TDD)
        - Unit Testing
    - tag: Integration Testing
      reason: "XP practices include integrating code into a shared repository frequently, which helps in identifying integration issues early."
      use:
        - Continuous Integration
    - tag: Refactoring
      reason: "XP encourages continuous refactoring to improve the design of existing code and maintain its quality."
    - tag: Coding
      reason: "Coding is a core activity in XP, with an emphasis on clear, simple code."
    - tag: Release Delivery
      reason: "XP focuses on frequent, small releases to ensure the software is always in a shippable state."
    - tag: Stakeholder Management
      reason: "XP involves customers directly in the development process to ensure the software meets their needs."
      use:
        - Customer Involvement
        - On-Site Customer
    - tag: Retrospectives
      reason: "XP relies on continuous feedback from tests, customers, and developers to improve the software."
      use:
        - Continuous Feedback
    - tag: Automation
      reason: "XP emphasizes the use of automated tests to ensure the software works as expected."
      use:
        - Automated Testing
    - tag: Documentation
      reason: "XP values communication, which can include necessary documentation, but prioritizes working software and direct communication."
    - tag: Requirements Capture
      reason: "XP captures requirements through user stories and continuous dialogue with the customer."
      use:
        - User Stories
    - tag: Debugging
      reason: "Debugging is an essential part of the development process in XP."
    - tag: Estimating
      reason: "XP uses practices like planning games to estimate the time and resources needed for tasks."
      use:
        - Planning Game
    - tag: Monitoring
      reason: "Monitoring progress through daily stand-ups and frequent releases is integral to XP."
      use:
        - Daily Stand-ups
    - tag: Version Control
      reason: "Version control is a best practice in software development, including in XP."
    - tag: Tool Adoption
      reason: "XP teams often adopt specific tools to manage the backlog, tests, and collaboration."
      use:
        - Coding Standards
    - tag: Training
      reason: "XP teams engage in continuous learning and improvement, often through practices like pair programming."
    - tag: Performance Testing
      reason: "Ensuring the software performs well under expected workloads is a practice within XP."
    - tag: Review
      reason: "XP includes regular reviews to assess progress and make necessary adjustments."
    - tag: Approvals
      reason: "XP involves customer approval during frequent releases and continuous customer involvement."
    - tag: Configuration Management
      reason: "Configuration management helps maintain the consistency of the product's performance in XP."
    - tag: Design
      reason: "XP Emphasizes the simplest design that works, avoiding unnecessary complexity."
      use:
        - Simple Design
        - Metaphor
---

<MethodIntro details={frontMatter} />

## Description

> "Extreme Programming (XP) is a software development methodology which is intended to improve software quality and responsiveness to changing customer requirements. As a type of agile software development, it advocates frequent 'releases' in short development cycles, which improves productivity and introduces checkpoints at which new customer requirements can be adopted." - [Extreme Programming, _Wikipedia_](https://en.wikipedia.org/wiki/Extreme_programming)

Extreme Programming (XP) is an Agile framework that emphasizes customer satisfaction, teamwork, and frequent delivery of small, functional software increments. Key practices in XP include pair programming, test-driven development, continuous integration, refactoring, and simple design. XP focuses on improving software quality and responding to changing customer requirements through frequent releases and continuous feedback.

In addition to the practices described above, XP promotes a sustainable work pace to avoid burnout, encouraging a maximum of 40-hour work weeks and avoiding overtime as much as possible.

## See Also

<TagList tag="XP" />
