---
title: Retrospectives
description: Conducting regular reviews to discuss what went well, what didn't, and how to improve.
tags:
  - Retrospectives
  - Practice
featured:
  class: c
  element: "<action>Retrospective</action>"
practice:
  aka:
    - "Post-Mortem"
    - "After-Action Review"
    - "Lessons Learned"
  mitigates:
    - tag: Coordination Risk
      reason: "Identifies and addresses historic coordination issues through regular reviews."
    - tag: Process Risk
      reason: "Continuously improves processes and practices."
    - tag: Feature Fit Risk
      reason: "Captures feedback and adjusts features to meet evolving needs."
    - tag: Internal Model Risk
      reason: "Looking at what went wrong before leads to improving the internal model of risk for the future."
  attendant:
    - tag: Schedule Risk
      reason: "Requires coordination and can disrupt regular workflows."
  related:
    - Review
    - ../Planning-and-Management/Change-Management
    - ../Development-and-Coding/Refactoring
    - ../Testing-and-Quality-Assurance/Regression-Testing
---

<PracticeIntro details={frontMatter} />

## Description

> "A retrospective is a look back at events that took place, or works that were produced, in the past." - [Retrospective, _Wikipedia_](https://en.wikipedia.org/wiki/Retrospective)

In agile software development, retrospectives are regular meetings where the team reflects on what went well, what didn't, and how they can improve. These meetings are crucial for continuous improvement, fostering a culture of learning, and enhancing team collaboration and performance.

## Variations

| **Retrospective Type**    | **Description**                                                                                    | **Reference**                                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Sprint Retrospective**  | Held at the end of each sprint to review the iteration and identify improvements for the next one. | [Scrum, Wikipedia](<https://en.wikipedia.org/wiki/Scrum_(software_development)#Sprint_retrospective>) |
| **Incident Post-Mortem**  | In-depth analysis conducted after a significant incident or outage to understand root causes.      | [Postmortem Documentation, Wikipedia](https://en.wikipedia.org/wiki/Postmortem_documentation)         |
| **Project Retrospective** | Comprehensive review at the end of a project covering the entire development lifecycle.            | [Project Management, Wikipedia](https://en.wikipedia.org/wiki/Project_management)                     |

## Used By

<MethodList tag="Retrospectives" />
