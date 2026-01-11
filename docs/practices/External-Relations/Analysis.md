---
title: Analysis
description: Examining systems to understand how they work and how they should change.
tags:
  - Analysis
  - Practice
featured:
  class: c
  element: "<action>Analysis</action>"
practice:
  aka:
    - "Requirement Analysis"
    - "Business Analysis"
    - "System Analysis"
    - "Environmental Scanning"
  mitigates:
    - tag: Implementation Risk
      reason: "Ensures that requirements and specifications are clearly understood before development begins."
    - tag: Communication Risk
      reason: "Facilitates clear communication of requirements and expectations among stakeholders."
    - tag: Feature Fit Risk
      reason: "Analysis can help ensure technical solutions fit the problems they're designed for."
    - tag: Legal Risk
      reason: "Developing an understanding the context into which a solution is put avoids legal and social problems."
    - tag: Internal Model Risk
      reason: "Analysis is the process of doing work to build a better Internal Model."
    - tag: Lock-In Risk
      reason: "Analysis can identify dependencies where Lock-In Risk is high."
    - tag: Operational Risk
      reason: "Analysis is important to identify threats to an operation from its environment."
  attendant:
    - tag: Schedule Risk
      reason: "Can be time-consuming, potentially delaying the start of development."
    - tag: Agency Risk
      reason: "Creates dependencies on the availability and accuracy of information from stakeholders."
  related:
    - ../Planning-and-Management/Requirements-Capture
    - ../Development-and-Coding/Coding
    - ../Communication-and-Collaboration/Documentation
---

<PracticeIntro details={frontMatter} />

## Description

> "Systems analysis is a problem-solving technique that decomposes a system into its component pieces for the purpose of studying how well those component parts work and interact to accomplish their purpose." - [Systems analysis, _Wikipedia_](https://en.wikipedia.org/wiki/Systems_analysis)

Analysis in software development involves examining and breaking down the requirements, systems, and processes to understand the needs and ensure the correct implementation of the software. This practice is crucial for identifying potential issues, clarifying requirements, and ensuring that the development aligns with business goals and user needs.

Analysis is also important as a tool to understand the environment that your software will run in. See [Environmental Risks](/tags/Environmental-Risks).

## Variations

| **Analysis Type**        | **Description**                                                              | **Reference**                                                                       |
| ------------------------ | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Business Analysis**    | Understanding business needs and translating them into requirements.         | [Business Analysis, Wikipedia](https://en.wikipedia.org/wiki/Business_analysis)     |
| **Systems Analysis**     | Examining technical systems to understand their components and interactions. | [Systems Analysis, Wikipedia](https://en.wikipedia.org/wiki/Systems_analysis)       |
| **Competitive Analysis** | Studying competitors to understand market positioning and opportunities.     | [Competitor Analysis, Wikipedia](https://en.wikipedia.org/wiki/Competitor_analysis) |

## Used By

<MethodList tag="Analysis" />
