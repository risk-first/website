---
title: Large-Scale Scrum (LeSS)
description: A framework for scaling agile development to multiple teams.
tags:
  - Risk Frameworks
  - Agile
  - LeSS
featured:
  class: c
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/less.svg">LeSS</image-artifact>'
method:
  practices:
    - tag: Scrum
      reason: "LeSS is Scrum scaled, so all Scrum practices apply at the team level."
    - tag: Prioritising
      reason: "LeSS uses a single Product Backlog for the entire product, regardless of the number of teams."
      use:
        - Product Backlog Refinement
    - tag: Coordination Risk
      reason: "LeSS focuses on cross-team coordination through practices like Scrum of Scrums and joint planning."
      use:
        - Sprint Planning One
    - tag: Review
      reason: "A single Sprint Review is held for the entire product increment produced by all teams."
    - tag: Retrospectives
      reason: "LeSS includes both team-level retrospectives and an Overall Retrospective for organizational improvement."
    - tag: Version Control
      reason: "Continuous integration of all code into a single trunk is a requirement for LeSS."
---

<MethodIntro details={frontMatter} />

## Description

> "Large-scale scrum is an organizational system for product development that scales scrum with varied rules and guidelines, developed by Bas Vodde and Craig Larman. There are two levels to the framework: the first level, designed for up to eight teams; and the second level, known as 'LeSS Huge', which can accommodate development involving hundreds of developers." - [Large-scale Scrum, _Wikipedia_](https://en.wikipedia.org/wiki/Scrum_(project_management)#Large-scale_scrum)

LeSS is built on the principle that scaling should be about de-scaling organizational complexity—reducing roles, processes, and artifacts rather than adding them. It emphasizes a single product owner and a single product backlog for the entire product, ensuring all teams are aligned toward the same goal.

## See Also

<TagList tag="LeSS" />
