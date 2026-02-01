---
title: Version Control
description: Using version control systems to manage changes to the codebase.
tags:
  - Version Control
  - Practice
featured:
  class: c
  element: "<action>Version Control</action>"
practice:
  aka:
    - "Source Control"
    - "Revision Control"
    - "SCM"
  mitigates:
    - tag: Implementation Risk
      reason: "Maintains a history of changes, allowing rollback to previous versions if needed."
    - tag: Coordination Risk
      reason: "Facilitates collaboration by allowing multiple developers to work on the codebase simultaneously."
  attendant:
    - tag: Communication Risk
      reason: "Poor version management can be chaotic and leave lots of work in progress."
  related:
    - ../Planning-And-Management/Change-Management
    - ../Development-And-Coding/Coding
    - ../Deployment-And-Operations/Release
---

<PracticeIntro details={frontMatter} />

## Description

> "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later." - [Version control, _Wikipedia_](https://en.wikipedia.org/wiki/Version_control)

Version Control in software development involves using systems that track changes to the codebase over time. This practice allows developers to manage versions, collaborate on code, and revert to previous states if necessary. Version control is essential for maintaining the integrity and history of the project.

## Variations

| **Version Control Type**  | **Description**                                                                                   | **Reference** |
|---------------------------|---------------------------------------------------------------------------------------------------|---------------|
| **Distributed VCS**       | Every developer has a full copy of the repository (e.g., Git, Mercurial).                        | [Distributed Version Control, Wikipedia](https://en.wikipedia.org/wiki/Distributed_version_control) |
| **Centralised VCS**       | A single central repository that developers commit to (e.g., SVN, CVS).                          | [Version Control, Wikipedia](https://en.wikipedia.org/wiki/Version_control#Centralized_version_control) |
| **Trunk-Based Development** | All developers work on a single branch with frequent small commits.                             | [Trunk-Based Development](https://trunkbaseddevelopment.com/) |

## Used By

<MethodList tag="Version Control" />
