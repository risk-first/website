---
title: Release
description: Deploying the software to production.
tags: 
  - Release Management
  - Release
  - Deployment-Operations
featured: 
  class: c
  element: '<action>Release</action>'
practice:
  aka: 
   - "Software Release Management"
   - "Deployment"
   - "Launch"
  mitigates:
   - tag: Feature Access Risk
     reason: Users are able to access the features you release to them.
   - tag: Market Risk
     reason: "Delivering features means you get market feedback."
   - tag: Funding Risk
     reason: "Delivering features might mean you get paid for the software you write."
  attendant:
   - tag: Schedule Risk
     reason: "Delays in the release process can impact overall project timelines."
   - tag: Operational Risk
     reason: "Releasing software means that the software has to be supported in production."
  related:
   - ../Planning-and-Management/Change-Management
   - ../Tools-and-Standards/Version-Control
   - ../Deployment-and-Operations/Configuration-Management
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Release management is the process of managing, planning, scheduling, and controlling a software build through different stages and environments; it includes testing and deploying software releases." - [Release management, _Wikipedia_](https://en.wikipedia.org/wiki/Release_management)

Release / Delivery involves the structured and controlled process of moving software from development to production environments. It ensures that all aspects of the software are ready for deployment, including code stability, functionality, and performance. Effective release management is crucial for maintaining the quality and reliability of software, minimizing disruptions, and ensuring that new features and fixes reach users in a timely manner.

## See Also

<TagList tag="Release" filter="risks" />
