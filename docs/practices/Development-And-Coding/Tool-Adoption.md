---
title: Tool Adoption
description: Implementing and utilising specific tools in the development process.
tags:
  - Tool Adoption
  - Practice
featured:
  class: c
  element: "<action>Use Tool</action>"
practice:
  aka:
    - "Tool Integration"
    - "Software Tools"
    - "Development Tools"
  mitigates:
    - tag: Schedule Risk
      reason: "Facilitates the use of specialized tools to improve development efficiency and quality."
    - tag: Process Risk
      reason: "Reduces the risk of manual errors by automating repetitive tasks."
    - tag: Operational Risk
      reason: "Enhances operational efficiency through the use of appropriate tools."
  attendant:
    - tag: Lock-In Risk
      reason: "Creates dependencies on specific tools and their continued support."
    - tag: Funding Risk
      reason: "Can incur costs associated with acquiring and maintaining tools."
    - tag: Complexity Risk
      reason: "Integrating multiple tools can add complexity to the development process."
    - tag: Lock-In Risk
      reason: Once tools become embedded in the process, they can be hard to change.
  related:
    - ../Planning-And-Management/Change-Management
    - ../Development-And-Coding/Coding
    - ../Deployment-And-Operations/Automation
---

<PracticeIntro details={frontMatter} />

## Description

> "Software tools are programs and utilities that help developers create, debug, maintain, or otherwise support software development." - [Software tool, _Wikipedia_](https://en.wikipedia.org/wiki/Software_tool)

Tool Adoption involves implementing and utilizing specific tools to enhance the development process. Unless a problem is _specific to your circumstances_, it's often better to adopt proven tools rather than building from scratch. Tools are worth using if they offer a better risk return than not using them—and some tools (compilers, type systems, garbage collection, build tools) offer such _amazing_ returns that not using them becomes unthinkable.

However, picking new tools should be done **carefully**: you may be stuck with your choices for some time. See [On Software Dependencies](/risks/On-Software-Dependencies) for guidance.

## Variations

| **Tool Category**       | **Description**                                                          | **Reference**                                                                             |
| ----------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| **IDEs**                | Integrated Development Environments for writing, debugging, and testing. | [IDE, Wikipedia](https://en.wikipedia.org/wiki/Integrated_development_environment)        |
| **Build Tools**         | Tools for compiling, packaging, and managing dependencies.               | [Build Automation, Wikipedia](https://en.wikipedia.org/wiki/Build_automation)             |
| **Collaboration Tools** | Tools for team communication and project tracking.                       | [Collaborative Software, Wikipedia](https://en.wikipedia.org/wiki/Collaborative_software) |

## Used By

<MethodList tag="Tool Adoption" />
