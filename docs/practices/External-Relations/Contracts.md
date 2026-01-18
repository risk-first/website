---
title: Contracts
description: Defining contractual obligations and agreements.
tags:
  - Contracts
  - Practice
featured:
  class: c
  element: "<action>Contract</action>"
practice:
  aka:
    - "Agreement"
    - "Terms"
    - "Service Agreement"
  mitigates:
    - tag: Agency Risk
      reason: "Clearly defines roles, responsibilities, and expectations, reducing dependency issues."
    - tag: Funding Risk
      reason: "Outlines cost structures and helps manage budget expectations."
    - tag: Schedule Risk
      reason: "Establishes timelines and milestones to keep the project on track."
    - tag: Legal Risk
      reason: "A well-written contract establishes the terms under which software is provided or used."
  attendant:
    - tag: Lock-In Risk
      reason: "Contracts can create rigid boundaries that limit flexibility."
    - tag: Coordination Risk
      reason: "Contracting work can often involve setting careful terms to minimise coordination risks."
    - tag: Process Risk
      reason: "The process of drafting, negotiating, and managing contracts is a process with significant risk."
    - tag: Deadline Risk
      reason: "Contracts often stipulate certain conditions must be met at certain times."
  related:
    - ../Planning-And-Management/Change-Management
    - ../Development-And-Coding/Coding
    - ../Deployment-And-Operations/Monitoring
---

<PracticeIntro details={frontMatter} />

## Description

> "A contract is a legally binding agreement that recognizes and governs the rights and duties of the parties to the agreement." - [Contract, _Wikipedia_](https://en.wikipedia.org/wiki/Contract)

Contracts in software development define the terms and conditions under which services are provided. They outline roles, responsibilities, timelines, costs, and deliverables, helping to manage expectations and reduce risks. Effective contract management is crucial for ensuring that all parties adhere to agreed-upon terms and that the project runs smoothly.

## Variations

| **Contract Type**         | **Description**                                                                                   | **Reference** |
|---------------------------|---------------------------------------------------------------------------------------------------|---------------|
| **Fixed-Price Contract**  | Agreed total cost for defined deliverables, shifting risk to the vendor.                         | [Fixed-Price Contract, Wikipedia](https://en.wikipedia.org/wiki/Fixed-price_contract) |
| **Time and Materials**    | Payment based on actual time and resources used, shifting risk to the client.                    | [Time and Materials, Wikipedia](https://en.wikipedia.org/wiki/Time_and_materials) |
| **Service Level Agreement** | Defines expected service quality and remedies for failures.                                     | [Service-Level Agreement, Wikipedia](https://en.wikipedia.org/wiki/Service-level_agreement) |

## Used By

<MethodList tag="Contracts" />
