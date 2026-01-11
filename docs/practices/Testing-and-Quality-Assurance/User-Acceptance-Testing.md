---
title: User Acceptance Testing
description: Having a customer representative available onsite for feedback.
tags:
  - Practice
  - User Acceptance Testing
featured:
  class: c
  element: "<action>UAT</action>"
practice:
  aka:
    - "End User Testing"
    - "Client Acceptance Testing"
    - "Customer Validation"
    - UAT
    - Beta Testing
    - Dogfooding
  mitigates:
    - tag: Feature Fit Risk
      reason: "Ensures that the software meets the client's requirements and expectations."
    - tag: Implementation Risk
      reason: "Validates that the implementation meets the specified requirements."
    - tag: Communication Risk
      reason: "Facilitates feedback from end users, improving the final product."
    - tag: Internal Model Risk
      reason: "As a feedback mechanism, UAT helps improve understanding of users and their requirements."
  attendant:
    - tag: Schedule Risk
      reason: "UAT can be time-consuming, potentially delaying the release."
    - tag: Coordination Risk
      reason: "Requires coordination between the development team and end users."
    - tag: Deadline Risk
      reason: "Can often go on longer than expected, leading to deadline issues."
  related:
    - ../Planning-and-Management/Requirements-Capture
    - ../Communication-and-Collaboration/Demo
    - ../Development-and-Coding/Unit-Testing
---

<PracticeIntro details={frontMatter} />

## Description

> "User acceptance testing (UAT) is a phase of software development in which the software is tested in the 'real world' by the intended audience." - [User acceptance testing, _Wikipedia_](https://en.wikipedia.org/wiki/User_acceptance_testing)

User Acceptance Testing (UAT) involves having end users test the software to ensure it meets their requirements and expectations. This practice helps in identifying any issues that may not have been caught during previous testing phases and ensures that the final product is user-friendly and functional.

See:

- [Consider Payoff](/thinking/Consider-Payoff)
- [Development Process](/thinking/Development-Process#a-toy-process)\_
- [User Acceptance Testing (Meeting Reality)](/thinking/Meeting-Reality#example-user-acceptance-testing-uat)
- [Manual Testing](/thinking/Cadence#development-cycle-time)
- [Waterfall (One Size Fits No One)](/thinking/One-Size-Fits-No-One)

## Used By

<MethodList tag="User Acceptance Testing" />
