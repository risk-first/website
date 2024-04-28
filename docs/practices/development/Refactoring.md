---
title: Refactoring
tags: 
  - Refactoring
practice:
  aka: 
   - "Factoring"
   - "Separation of Concerns"
  mitigates:
   - tag: Complexity Risk
     reason: "Refactoring is aimed at making code more orthogonal, less duplicative and clearer to understand"
   - tag: Communication Risk
     reason: "Well-factored code should be easier to understand."
  attendant:
   - tag: Schedule Risk
     reason: "Refactoring in large chunks can take significant time to complete."
   - tag: Feature Regression Risk
     reason: "Done carelessly, refactoring can introduce new issues into the codebase"
  related:
   - /practices/Coding
---
  
<PracticeIntro details={frontMatter.practice} /> 

## Description

The term "refactoring" probably stems from the mathematical concept of _(Factorization)[https://en.wikipedia.org/wiki/Factorization]_.  Factorizing _polynomial equations_ or _numbers_ means to identify and make clear their distinct components.

> "In computer programming and software design, code refactoring is the process of restructuring existing computer code—changing the factoring—without changing its external behavior." - [Refactoring, _Wikipedia_](https://en.wikipedia.org/wiki/Code_refactoring)

tbd: SoC

Most coders use the phrase "refactoring", and intuitively understand what it is.  It shouldn't have been hard to find a clear explanation for this page, but sadly it was.  There are some very woolly definitions of "refactoring" around, such as:

> "**Refactoring (n)**: a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior""  -- [Refactoring.com](https://www.refactoring.com)

What do "easier to understand" (which makes sense) and "cheaper to modify" mean?   Let's try and be more specific.   With Refactoring, we are trying to:

- Mitigate [Communication Risk](../risks/Communication-Risk.md) by making the _intent_ of the software clearer. This can be done by breaking down larger functions and methods into smaller ones with helpful names, and naming elements of the program clearly, and
- Mitigate [Complexity Risk](../risks/Complexity-Risk.md) by employing _abstraction_ and _modularization_ to remove duplication and reduce cross-cutting concerns.   By becoming less complex, the code has less [Inertia](../risks/Complexity-Risk.md).

On **Refactoring**, Kent Beck says:

> "If a programmer sees a one-minute ugly way to get a test working and a ten-minute way to get it working with a simpler design, the correct choice is to spend the ten minutes. " -- Kent Beck, _Extreme Programming Explained_

This is a bold, not-necessarily-true assertion.  How does that ratio stack up when applied to _hours_ or _days_?  But you can see how it's motivated:  Kent is saying that the nine extra minutes of [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) are _nothing_ compared to the carry cost of [Complexity Risk](../risks/Complexity-Risk.md) on the project.

## External References

- [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) Wikipedia Page.
- [Refactoring](https://martinfowler.com/books/refactoring.html) Book by Martin Fowler.


## See Also

<TagList tag="Refactoring" />

