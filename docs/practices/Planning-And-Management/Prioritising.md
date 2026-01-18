---
title: Prioritising
description: Defining the Minimum Viable Product, planning development priorities or schedules.
tags:
  - Practice
  - Prioritising
featured:
  class: c
  element: "<action>Prioritise</action>"
practice:
  aka:
    - "Roadmapping"
    - "Release Planning"
    - "Task Prioritization"
    - "Minimum Viable Product"
    - "Backlog Refinement"
    - "Scheduling"
  mitigates:
    - tag: Schedule Risk
      reason: "Helps in focusing on high-priority tasks."
    - tag: Market Risk
      reason: "Ensures that the most valuable features and opportunities are addressed first."
    - tag: Funding Risk
      reason: "Allocates resources efficiently to high-impact areas."
    - tag: Deadline Risk
      reason: "In order to hit a deadline, you can de-prioritise less important work."
  attendant:
    - tag: Reliability Risk
      reason: "Prioritization can create dependencies on specific tasks or features."
    - tag: Market Risk
      reason: "Prioritising a single client or narrowing scope reduces diversification, increasing exposure to changes in the market."
    - tag: Deadline Risk
      reason: "Establishing an order of events often places deadlines on the earlier events completing or the later events starting."
  related:
    - ../Planning-And-Management/Requirements-Capture
    - ../Communication-And-Collaboration/Retrospectives
    - ../Development-And-Coding/Refactoring
    - ../Development-And-Coding/Prototyping
---

<PracticeIntro details={frontMatter} />

## Description

> "Prioritization is the activity that arranges items or activities in order of importance relative to each other." - [Prioritization, _Wikipedia_](https://en.wikipedia.org/wiki/Prioritization)

Prioritising involves deciding what to build first—from [identifying the MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) to [backlog refinement](/methods/Lean) to [sprint planning](/tags/Agile). You can prioritise by **largest risk mitigation**, **biggest win for least effort**, or **dependency order**. By prioritising, you [Meet Reality](/thinking/Meeting-Reality) sooner, more frequently, and in smaller chunks. Delivery can range from **Big Bang** (all at once) to [Continuous Delivery](/methods/DevOps) (one piece at a time).

## Variations

| **Prioritisation Method** | **Description**                                             | **Reference**                                                                           |
| ------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **MoSCoW**                | Categorising requirements as Must/Should/Could/Won't have.  | [MoSCoW, Wikipedia](https://en.wikipedia.org/wiki/MoSCoW_method)                        |
| **Weighted Scoring**      | Scoring items against criteria to determine priority order. | [Weighted Scoring, ProductPlan](https://www.productplan.com/glossary/weighted-scoring/) |
| **Value vs Effort**       | Plotting items by value delivered against effort required.  | [Value vs Complexity, Wikipedia](https://en.wikipedia.org/wiki/Time_management)         |

## See Also

- [Issue Management](Issue-Management)
- [Tracking Risks](/thinking/Track-Risk#visualising-risks)

## Used By

<MethodList tag="Prioritising" />
