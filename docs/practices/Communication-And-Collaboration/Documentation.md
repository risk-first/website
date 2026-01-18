---
title: Documentation
description: Creating documentation to describe the software and its use.
tags:
  - Documentation
  - Practice
featured:
  class: c
  element: "<action>Documentation</action>"
practice:
  aka:
    - "Manuals"
    - "Guides"
    - "Technical Writing"
  mitigates:
    - tag: Communication Risk
      reason: "Provides clear guidelines and information, reducing misunderstandings."
    - tag: Internal Model Risk
      reason: "Detailed documentation helps manage and understand complex systems."
  attendant:
    - tag: Schedule Risk
      reason: "Creating and maintaining documentation can be time-consuming."
    - tag: Complexity Risk
      reason: "Documentation is also a source of complexity on a project and can slow down change."
  related:
    - ../Planning-And-Management/Requirements-Capture
    - ../Communication-And-Collaboration/Review
    - ../Deployment-And-Operations/Configuration-Management
---

<PracticeIntro details={frontMatter} />

## Description

> "Documentation is any communicable material that is used to describe, explain, or instruct regarding some attributes of an object, system or procedure, such as its parts, assembly, installation, maintenance and use." - [Documentation, _Wikipedia_](https://en.wikipedia.org/wiki/Documentation)

Documentation in software development provides a detailed description of the software, its components, and its usage. It serves as a vital reference for developers, users, and stakeholders, helping to ensure that everyone has a clear understanding of the system. High-quality documentation is essential for effective communication, troubleshooting, and future development.

## Variations

| **Documentation Type** | **Description**                                                                                       | **Reference**                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **API Documentation**  | Describes how to use and integrate with software APIs, including endpoints, parameters, and examples. | [API Documentation, Wikipedia](https://en.wikipedia.org/wiki/API_documentation)                                 |
| **User Manual**        | End-user focused guide explaining how to use the software to accomplish tasks.                        | [User Guide, Wikipedia](https://en.wikipedia.org/wiki/User_guide)                                               |
| **README**             | Brief overview of a project, typically including setup instructions and basic usage.                  | [README, Wikipedia](https://en.wikipedia.org/wiki/README)                                                       |
| **Architecture Docs**  | High-level description of system structure, components, and their relationships.                      | [Software Architecture Description, Wikipedia](https://en.wikipedia.org/wiki/Software_architecture_description) |
| **Runbooks**           | Operational procedures for deploying, maintaining, and troubleshooting systems in production.         | [Runbook, Wikipedia](https://en.wikipedia.org/wiki/Runbook)                                                     |

## Used By

<MethodList tag="Documentation" />
