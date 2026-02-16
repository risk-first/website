---
title: Scaled Agile Framework (SAFe)
description: A set of organization and workflow patterns for scaling lean and agile practices across large enterprises.
tags:
  - Risk Frameworks
  - Agile
  - Scaled Agile Framework (SAFe)
featured:
  class: c
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/safe.svg">SAFe</image-artifact>'
method:
  practices:
    - tag: Approvals
      reason: "SAFe uses Program Increment (PI) Planning events where objectives are agreed and approved by stakeholders."
      use:
        - PI Planning
        - Inspect and Adapt
    - tag: Automation
      reason: "SAFe promotes built-in quality through continuous integration and automated testing."
      use:
        - Continuous Integration
        - Built-in Quality
    - tag: Change Management
      reason: "SAFe manages change through structured backlogs and regular planning cadences."
      use:
        - Program Backlog
        - Enabler Stories
    - tag: Coordination Risk
      reason: "SAFe specifically addresses coordination across multiple teams through Agile Release Trains."
      use:
        - Agile Release Train (ART)
        - Scrum of Scrums
    - tag: Delegation
      reason: "SAFe emphasizes decentralized decision-making to empower teams."
      use:
        - Decentralize Decision-Making
    - tag: Demo
      reason: "System Demos occur at the end of each iteration to show integrated work to stakeholders."
      use:
        - System Demo
        - Solution Demo
    - tag: Estimating
      reason: "SAFe uses story points and capacity-based planning during PI Planning."
      use:
        - Story Points
        - Capacity Allocation
    - tag: Issue Management
      reason: "SAFe uses program and team backlogs to track and prioritise work."
      use:
        - Program Backlog
        - Team Backlog
    - tag: Measurement
      reason: "SAFe measures progress through PI Objectives, velocity, and flow metrics."
      use:
        - PI Objectives
        - Flow Metrics
        - Predictability Measure
    - tag: Meeting
      reason: "SAFe uses regular ceremonies including daily stand-ups, iteration planning, and PI Planning."
      use:
        - PI Planning
        - Daily Stand-up
        - Iteration Planning
    - tag: Monitoring
      reason: "SAFe monitors progress through Program Boards, Kanban boards, and regular sync meetings."
      use:
        - Program Board
        - ART Sync
    - tag: Prioritising
      reason: "SAFe uses Weighted Shortest Job First (WSJF) to prioritise work by economic value."
      use:
        - WSJF
        - Economic Prioritisation
    - tag: Release
      reason: "SAFe promotes continuous delivery through the Release on Demand capability."
      use:
        - Release on Demand
        - Continuous Delivery Pipeline
    - tag: Requirements Capture
      reason: "SAFe captures requirements as Features and Stories, refined through backlog grooming."
      use:
        - Features
        - User Stories
        - Enablers
    - tag: Retrospectives
      reason: "SAFe includes Inspect and Adapt workshops for systematic improvement after each PI."
      use:
        - Inspect and Adapt
        - Iteration Retrospective
    - tag: Stakeholder Management
      reason: "SAFe engages stakeholders through Business Owners, Product Management, and regular demos."
      use:
        - Business Owners
        - Product Management
    - tag: Automated Testing
      reason: "SAFe emphasises built-in quality through test automation at all levels."
      use:
        - Built-in Quality
        - Test-First
---

<MethodIntro details={frontMatter} />

## Description

> "The Scaled Agile Framework (SAFe) is a set of organization and workflow patterns intended to guide enterprises in scaling lean and agile practices. SAFe promotes alignment, collaboration, and delivery across large numbers of agile teams." - [Scaled Agile Framework, _Wikipedia_](https://en.wikipedia.org/wiki/Scaled_agile_framework)

SAFe addresses the challenge of [Coordination Risk](/tags/Coordination-Risk) at scale by organising teams into **Agile Release Trains (ARTs)** that plan and deliver together in **Program Increments (PIs)**. Key practices include **PI Planning** (a face-to-face event to align all teams), **WSJF prioritisation** (to maximise economic value), and **Inspect and Adapt** workshops (for continuous improvement). SAFe integrates Scrum, Kanban, and XP practices while adding coordination mechanisms for enterprise-scale delivery.

## See Also

<TagList tag="SAFe" />
