---
title: Release
description: Deploying the software to production.
tags:
  - Release
  - Practice
featured:
  class: c
  element: "<action>Release</action>"
practice:
  aka:
    - "Software Release Management"
    - "Deployment"
    - "Launch"
    - "Publication"
  mitigates:
    - tag: Feature Fit Risk
      reason: Putting new features in the hands of users can make your product fit their needs better.
    - tag: Market Risk
      reason: "Delivering features means you get market feedback."
    - tag: Funding Risk
      reason: "Delivering features might mean you get paid for the software you write."
  attendant:
    - tag: Schedule Risk
      reason: "Delays in the release process can impact overall project time-lines."
    - tag: Operational Risk
      reason: "Releasing software means that the software has to be supported in production."
    - tag: Process Risk
      reason: "Complex release procedures are a source of process risk."
    - tag: Reliability Risk
      reason: "Releases can introduce discontinuities in software service if not managed well."
    - tag: Reputational Risk
      reason: "Poor release management can destroy reputation and good-will."
    - tag: Legal Risk
      reason: Publishing or releasing code may involve licensing, Intellectual Property, Liability or other legal compliance."
  related:
    - ../Planning-and-Management/Change-Management
    - ../Tools-and-Standards/Version-Control
    - ../Deployment-and-Operations/Configuration-Management
---

<PracticeIntro details={frontMatter} />

## Description

> "Release management is the process of managing, planning, scheduling, and controlling a software build through different stages and environments; it includes testing and deploying software releases." - [Release management, _Wikipedia_](https://en.wikipedia.org/wiki/Release_management)

Release / Delivery involves the structured and controlled process of moving software from development to production environments. It ensures that all aspects of the software are ready for deployment, including code stability, functionality, and performance. Effective release management is crucial for maintaining the quality and reliability of software, minimizing disruptions, and ensuring that new features and fixes reach users in a timely manner.

## Variations

| **Release Type**          | **Description**                                                                                           | **Reference**                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Blue-Green Deployment** | Running two identical production environments, switching traffic between them for zero-downtime releases. | [Blue-Green Deployment, Wikipedia](https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment)           |
| **Canary Release**        | Gradually rolling out changes to a small subset of users before full deployment.                          | [Canary Release, Wikipedia](https://en.wikipedia.org/wiki/Feature_toggle#Canary_release)                  |
| **Rolling Deployment**    | Incrementally updating instances one at a time to avoid complete service interruption.                    | [Rolling Update, Kubernetes](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/) |
| **Feature Toggle**        | Deploying code with features disabled, enabling them selectively without redeployment.                    | [Feature Toggle, Wikipedia](https://en.wikipedia.org/wiki/Feature_toggle)                                 |

See also: [Development Process](/thinking/Development-Process#a-toy-process), [Consider Payoff](/thinking/Consider-Payoff#example-4-continue-testing-or-release), [Production (Cadence)](/thinking/Cadence#production)

## Used By

<MethodList tag="Release" />
