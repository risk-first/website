---
title: Waterfall Development
description: A traditional linear and sequential development methodology where each phase must be completed before moving on to the next.
tags: 
  - Method
  - Traditional
featured: 
  class: c
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/waterfall.svg">Waterfall Development</image-artifact>'
method:
  practices:
   - tag: Approvals
     reason: "Waterfall emphasizes formal reviews and sign-offs at the end of each phase to ensure that all stakeholders agree on the work completed and the plans for the next phase."
     use:
       - Review and Sign Off
   - tag: Coding
     reason: "The implementation phase in Waterfall involves converting design documents into functional software through coding."
     use:
       - Implementation
   - tag: Design
     reason: "The system design phase in Waterfall includes both high-level and low-level design to create a blueprint for the implementation phase."
     use:
       - System Design
   - tag: Documentation
     reason: "Detailed documentation is created and maintained throughout each phase in Waterfall to ensure clarity and traceability."
   - tag: Issue Management
     reason: "The maintenance phase in Waterfall involves managing issues and bugs that arise post-deployment and making necessary updates and improvements."
     use:
       - Maintenance
   - tag: Prioritising
     reason: "Waterfall involves detailed project planning and management, which includes prioritizing tasks to ensure the project progresses according to schedule and within budget."
     use:
       - Project Management and Planning
   - tag: Release Delivery
     reason: "The deployment phase in Waterfall involves releasing the completed software product to the production environment for end-users."
     use:
       - Deployment
   - tag: Requirements Capture
     reason: "The requirements gathering and analysis phase in Waterfall involves collecting and documenting all possible requirements of the system to be developed."
   - tag: User Acceptance Testing
     reason: "The integration and testing phase in Waterfall includes system and acceptance testing to ensure the product meets the specified requirements and the needs of the users."
     use:
       - Integration and Testing
       - User Acceptance Testing
---

<MethodIntro details={frontMatter} /> 

## Description

> "The waterfall model is a breakdown of development activities into linear sequential phases, meaning they are passed down onto each other, where each phase depends on the deliverables of the previous one and corresponds to a specialization of tasks... The waterfall model is the earliest SDLC approach that was used in software development." - [Waterfall model, _Wikipedia_](https://en.wikipedia.org/wiki/Waterfall_model)

Waterfall Development is a traditional project management methodology that follows a linear and sequential approach. Key phases in Waterfall include requirements gathering and analysis, system design, implementation, integration and testing, deployment, and maintenance. Each phase must be completed before the next phase begins, ensuring a structured and disciplined approach to software development.

## See Also

<TagList tag="Waterfall" />
