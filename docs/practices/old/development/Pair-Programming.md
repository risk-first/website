---
title: Pair Programming
tags: 
  - Pair Programming
practice:
  aka: 
   - "Mob Programming"
   - "Pairing"
  mitigates:
   - tag: Staff Risk
     reason: "Knowledge is shared across staff, reducing key person risk."
   - tag: Agency Risk
     reason: "Colleagues working together are able to keep each other honest."
   - tag: Learning Curve Risk
     reason: "Prototypes are a way of learning about a particular solution to a problem."
   - tag: Communication Risk
     reason: "A prototype often allows for communicating a design or idea in a way that a written document or diagram wouldn't."
   - tag: Implementation Risk
     reason: "More eyeballs means fewer bugs and a better implementation"     
  attendant:
   - tag: Schedule Risk
     reason: "Staff working together introduces redundancy which might slow down delivery speed."
   - tag: Agency Risk
     reason: "Staff might not like working in this arrangement."
  related:
   - /practices/Coding
   - /practices/coordination/Review
---
  
<PracticeIntro details={frontMatter.practice} /> 

## Description

> "Pair programming is a software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator,[1] reviews each line of code as it is typed in. The two programmers switch roles frequently." - [Pair Programming, _Wikipedia_](https://en.wikipedia.org/wiki/Pair_programming)
 
**Pair Programming** combines the [review](../coordination/Review.md) with [coding](Coding.md): there are now two heads at each terminal.  

 - Clearly, we mitigate [Key-Man Risk](../risks/Coordination-Risk.md) as we've got two people doing every job.  
 - Knowledge is transferred at the same time, too, mitigating [Specialist Risk](../risks/Coordination-Risk.md).  
 - Proponents also argue that this mitigates [Complexity Risk](../risks/Complexity-Risk.md), as the software will be better quality.
 - Since the pair spend _so much time together_, the communication is very _high bandwidth_, so this mitigates [Communication Risk](../risks/Communication-Risk.md)
   
**Mob Programming** goes one stage further and suggests that we can write better software with _even more people around the keyboard_.  So, what's the right number?  Clearly, the usual trade-off applies:  are you _mitigating_ more risk than you're _gaining_?   
 
## See Also

<TagList tag="Pair Programming" />