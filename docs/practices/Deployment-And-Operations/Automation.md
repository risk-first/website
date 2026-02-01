---
title: Automation
description: Using machines to perform repetitive tasks.
tags:
  - Automation
  - Practice
featured:
  class: c
  element: "<action>Automate</action>"
practice:
  aka:
    - "Mechanisation"
    - "Formalisation"
    - "Process Automation"
    - "Continuous Integration (CI)"
    - "Continuous Delivery (CD)"
  mitigates:
    - tag: Operational Risk
      reason: "Introduces more consistency in process operations and removes opportunity for human error"
    - tag: Schedule Risk
      reason: "Automating laborious tasks clears the schedule for higher-value work."
  attendant:
    - tag: Operational Risk
      reason: "Automated processes may be less observable than manual ones."
    - tag: Complexity Risk
      reason: "Introducing automation adds to the complexity of a project"
    - tag: Feature Fit Risk
      reason: "The automated process might not capture the variability of requirements of the original approach"
    - tag: Communication Risk
      reason: "The quality and performance characteristics may be obscured by automation."
    - tag: Process Risk
      reason: "Automation introduces a process, which therefore means a new source of Process Risk."
    - tag: Agency Risk
      reason: Automated processes have their own agency and might not work as desired.
    - tag: Security Risk
      reason: Automation can introduce security issues if automated processes are given elevated privileges.
    - tag: Internal Model Risk
      reason: "Automation of reporting and statuses can lead to false confidence about a system's health."
  related:
    - ../Development-And-Coding/Coding
    - ../Testing-and-Quality-Assurance/Measurement
---

<PracticeIntro details={frontMatter} />

## Description

> "Automation describes a wide range of technologies that reduce human intervention in processes, mainly by predetermining decision criteria, subprocess relationships, and related actions, as well as embodying those predeterminations in machines.": - [Automation, _Wikipedia_](https://en.wikipedia.org/wiki/Automation)

One of the key ways to measure whether your team is doing _useful work_ is to look at whether, in fact, it can be automated. And this is the spirit of [DevOps](/methods/DevOps) - the idea that people in general are poor at repeatable tasks, and anything people do repeatedly _should_ be automated.

## Variations

| **Automation Type**            | **Description**                                                                                | **Reference**                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Continuous Integration**     | Automatically building and testing code changes as they are committed to the repository.       | [Continuous Integration, Wikipedia](https://en.wikipedia.org/wiki/Continuous_integration)         |
| **Continuous Delivery**        | Automating the release process so software can be deployed to production at any time.          | [Continuous Delivery, Wikipedia](https://en.wikipedia.org/wiki/Continuous_delivery)               |
| **Infrastructure as Code**     | Managing infrastructure through machine-readable configuration files rather than manual setup. | [Infrastructure as Code, Wikipedia](https://en.wikipedia.org/wiki/Infrastructure_as_code)         |
| **Robotic Process Automation** | Using software robots to automate repetitive business processes and workflows.                 | [Robotic Process Automation, Wikipedia](https://en.wikipedia.org/wiki/Robotic_process_automation) |

## Used By

<MethodList tag="Automation" />
