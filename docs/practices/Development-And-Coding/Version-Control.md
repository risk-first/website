---
title: Version Control
description: Using version control systems to manage changes to the codebase.
tags: 
  - Version Control
  - Practice
featured: 
  class: c
  element: '<action>Version Control</action>'
practice:
  aka: 
   - "Source Control"
   - "Revision Control"
   - "SCM"
  mitigates:
   - tag: Implementation Risk
     reason: "Tracks changes and manages versions of the codebase, reducing the risk of implementation errors."
   - tag: Coordination Risk
     reason: "Facilitates collaboration by allowing multiple developers to work on the codebase simultaneously."
   - tag: Regression Risk
     reason: "Maintains a history of changes, allowing rollback to previous versions if needed."
  related:
   - ../Planning-and-Management/Change-Management
   - ../Development-and-Coding/Coding
   - ../Deployment-and-Operations/Release-Delivery
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later." - [Version control, _Wikipedia_](https://en.wikipedia.org/wiki/Version_control)

Version Control in software development involves using systems that track changes to the codebase over time. This practice allows developers to manage versions, collaborate on code, and revert to previous states if necessary. Version control is essential for maintaining the integrity and history of the project.

## See Also

<TagList tag="Version Control" />
