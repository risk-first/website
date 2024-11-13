---
title: Feature Fit Risk
description: Risk that the needs of the client don't coincide with services provided by the supplier.

featured: 
  class: ff
  element: '<risk class="feature-fit" />'
sidebar_position: 1
tags: 
 - Risks
 - Feature Fit Risk
part_of: Feature Risk
---

<RiskIntro fm={frontMatter} />

This is the risk that the feature that clients want to use in the software _isn't there_ or isn't quite what you need.

 - This might manifest itself as complete _absence_ of something you need, e.g "Why is there no word count in this editor?"
 - It could be that the implementation isn't complete enough, e.g "why can't I add really long numbers in this calculator?"
 - It might be that the software isn't designed with your client's use case in mind, e.g. "I really needed this to handle UK taxes but it only works for the US."
 
## Worked Example

![Using analysis to ensure feature fit](/img/generated/risks/posters/feature-fit-risk.svg) 

In the above diagram, we can see Feature Fit Risk being addressed by [Analysis](/practices/External-Relations/Analysis).  One should be careful about the attendant risks of analysis - it can go on for too long, or get bogged down in debate (so called Analysis Paralysis) which can lead to [Schedule Risk](/tags/Schedule-Risk) or [Funding Risk](/tags/Funding-Risk).
 
## Example Threats

### 1. Misunderstanding of Client Needs

**Threat:** Lack of clarity around client requirements could lead to delivering features that don't quite solve the client's problem.

### 2. Ignoring Edge Cases

**Threat:** Assuming all users will use the software in the same way may result in ignoring the outlier cases.

### 3. Lack of Iterative Feedback

**Threat:**: Not gathering feedback during development phases could result in delivering features that are not fully aligned with client needs.

### 4. Evolving Requirements

**Threat:** Not reassessing the design when new requirements emerge can lead to delivering features that no longer align with the client’s current needs.