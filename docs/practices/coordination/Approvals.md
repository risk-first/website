---
title: Approval
tags: 
  - Coordination
practice:
  aka: 
   - "Quality Gate"
   - "Code Review"
   - "Sign Off"
  mitigates:
   - tag: Implementation Risk
     reason: "A code review can filter out bugs"
   - tag: Conceptual Integrity Risk
     reason: "Conceptual issues can be avoided by reviews and approvals"
   - tag: Complexity Risk
     reason: "Tight approval processes prevent unnecessary complexity from being introduced into a project"
  attendant:
   - tag: Process Risk
     reason: "Introducing approvals is introducing process"
   - tag: 4 Risk
     reason: "Introducing code adds to the complexity of a project"
   - tag: Feature Fit Risk
     reason: "The automated process might not capture the variability of requirements of the original approach"
   - tag: Invisibility Risk
     reason: "The quality and performance characteristics may be obscured by automation."
   - tag: Process Risk
     reason: "Automation introduces a process"
  related:
   - /practices/coordination/Contract
   - /practices/coordination/Review
---

<PracticeIntro details={frontMatter.practice} /> 
### Too Many Cooks

Sometimes, you have _too many developers_ on a project.  This is not a blessing.   As with [Student Syndrome](../risks/Scarcity-Risk.md#schedule-risk), having too many resources means that: 

> "Work expands so as to fill the time available for its completion" - [Parkinson's Law](https://en.wikipedia.org/wiki/Parkinson's_law)

One of the reasons for this is that _Developers love to develop_ and it is, after all, their job.  If they _aren't_ developing, then are they still needed?  This is [Agency Risk](../risks/Agency-Risk.md):  people who are worried about their jobs will often try to _look busy_, and if that means creating some drama on the project, then so be it.

Sadly, this usually occurs when a successful project is nearing delivery.  Ideally, you want to be _decreasing_ the amount of change on a project as it gets closer to key [Delivery Dates](../risks/Coordination-Risk.md).  This is because the risk of [Missing the Date](../risks/Coordination-Risk.md) is greater than the risk of [some features not being ready](../risks/Feature-Risk.md).

In the past, I've found it helpful to down-size the team by temporarily moving developers into other less-fortunate teams, reducing both [Coordination Risk](../risks/Coordination-Risk.md) and [Agency Risk](../risks/Agency-Risk.md) at the same time.  

This can require some guts to do:  you have to overcome your own ego (wanting to run a big team) for the sake of your project.
