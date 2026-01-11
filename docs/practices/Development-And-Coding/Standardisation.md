---
title: Standardisation
description: The practice of establishing and adhering to standards to ensure consistency, compatibility, and quality in software development.
tags:
  - Practice
  - Standardisation
featured:
  class: c
  element: "<action>Standardisation</action>"
practice:
  aka:
    - "Standardization"
    - "Normalization"
    - "Uniformity"
    - "Consistency"
    - "Re-Use"
  mitigates:
    - tag: Feature Fit Risk
      reason: "Ensures that the features conform to predefined standards, reducing variability and potentially widening accessibility."
    - tag: Operational Risk
      reason: "Reduces operational errors by providing clear guidelines and protocols."
    - tag: Communication Risk
      reason: "Improves communication by using a common language and standardized terms."
    - tag: Lock-In Risk
      reason: "Using software that adheres to standards allows for swapping out components and promotes competition amongst dependencies."
  attendant:
    - tag: Lock-In Risk
      reason: "May limit creativity and flexibility by enforcing strict adherence to standards."
    - tag: Schedule Risk
      reason: "Adhering to standards can introduce scope creep during the implementation phase."
    - tag: Legal Risk
      reason: "Ensuring continuous compliance with evolving standards can be challenging."
  related:
    - ../Development-And-Coding/Coding
    - ../Tools-And-Standards/Configuration-Management
---

<PracticeIntro details={frontMatter} />

## Description

> "Standardization (or standardisation) is the process of developing and implementing technical standards. It can help to maximize compatibility, interoperability, safety, repeatability, or quality." - [Standardization, _Wikipedia_](https://en.wikipedia.org/wiki/Standardization)

Standardisation involves creating, implementing, and enforcing standards and guidelines to ensure consistency, compatibility, and quality across software projects. This practice helps in maintaining uniformity, reducing complexity, and improving communication among team members and stakeholders.

See:

- [Unwritten Software (On Software Dependencies)](/risks/On-Software-Dependencies#unwritten-software)

## See Also

<TagList tag="Standardisation" />
