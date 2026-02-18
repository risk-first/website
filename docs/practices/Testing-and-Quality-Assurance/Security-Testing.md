---
title: Security Testing
description: Ensuring the application is secure by identifying vulnerabilities.
tags:
  - Practice
  - Security Testing
featured:
  class: c
  element: "<action>Security Test</action>"
practice:
  aka:
    - "Penetration Testing"
    - "Vulnerability Testing"
    - "Security Assessment"
    - "Security Hardening"
    - Red Teaming
  mitigates:
    - tag: Security Risk
      reason: "Identifies and addresses vulnerabilities in the software."
    - tag: Operational Risk
      reason: "Ensures the software can withstand security threats and attacks."
    - tag: Legal Risk
      reason: "Helps ensure compliance with security standards and regulations."
    - tag: Agency Risk
      reason: "Make sure that agents don't exercise unwarranted control over resources."
  attendant:
    - tag: Schedule Risk
      reason: "Security testing can be time-consuming, impacting schedules."
    - tag: Complexity Risk
      reason: "Requires specialized skills and tools, adding complexity."
    - tag: Agency Risk
      reason: "Likely requires security experts with specialist skills."
    - tag: Emergent Behaviour
      reason: "Helps identify unintended AI behaviors before deployment by stress-testing AI in real-world scenarios."
    - tag: Agency Risk
      reason: "Red teams probe AI for loopholes where reward hacking or proxy goals emerge, ensuring AI doesn't optimise in harmful ways."
  related:
    - ../Development-And-Coding/Coding
    - ../Testing-and-Quality-Assurance/Performance-Testing
    - ../Deployment-And-Operations/Monitoring
---

<PracticeIntro details={frontMatter} />

## Description

> "Security testing is a process intended to reveal flaws in the security mechanisms of an information system that protect data and maintain functionality as intended." - [Security testing, _Wikipedia_](https://en.wikipedia.org/wiki/Security_testing)

Security Testing involves assessing the security of software applications to identify vulnerabilities and ensure they are protected against threats and attacks. This practice is essential for maintaining the integrity, confidentiality, and availability of software systems.

## Variations

| **Security Test Type**     | **Description**                                                                       | **Reference**                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Penetration Testing**    | Simulating attacks to find exploitable vulnerabilities in systems.                    | [Penetration Testing, Wikipedia](https://en.wikipedia.org/wiki/Penetration_test)        |
| **Red Teaming**            | Simulating adversarial attacks to test defences, especially for AI behavioural risks. | [Red Team, Wikipedia](https://en.wikipedia.org/wiki/Red_team)                           |
| **Vulnerability Scanning** | Automated tools to identify known security weaknesses.                                | [Vulnerability Scanner, Wikipedia](https://en.wikipedia.org/wiki/Vulnerability_scanner) |

## Used By

<MethodList tag="Security Testing" />
