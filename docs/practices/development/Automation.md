---
title: Automation
tags: 
  - Automation
practice:
  aka: 
   - "Mechanisation"
   - "Formalisation"
  mitigates:
   - tag: Implementation Risk
     reason: "Reduces the variability in process completion"
   - tag: Operational Risk
     reason: "Introduces more consistency in process operations and removes opportunity for human error"
  attendant:
   - tag: Codebase Risk
     reason: "More code means more software to manage"
   - tag: Complexity Risk
     reason: "Introducing code adds to the complexity of a project"
   - tag: Feature Fit Risk
     reason: "The automated process might not capture the variability of requirements of the original approach"
   - tag: Invisibility Risk
     reason: "The quality and performance characteristics may be obscured by automation."
   - tag: Process Risk
     reason: "Automation introduces a process"
  related:
   - /practices/development/Coding
   - /practices/testing/Measurement
---

<PracticeIntro details={frontMatter.practice} /> 

## Description

> "Automation describes a wide range of technologies that reduce human intervention in processes, mainly by predetermining decision criteria, subprocess relationships, and related actions, as well as embodying those predeterminations in machines.": - [Automation, _Wikipedia_](https://en.wikipedia.org/wiki/Automation)

One of the key ways to measure whether your team is doing _useful work_ is to look at whether, in fact, it can be automated.  And this is the spirit of [DevOps](DevOps) - the idea that people in general are poor at repeatable tasks, and anything people do repeatedly _should_ be automated.  


## See Also

<TagList tag="Automation" />