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

## External References

- [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) Wikipedia Page.
- [Refactoring](https://martinfowler.com/books/refactoring.html) Book by Martin Fowler.


## See Also

<TagList tag="Refactoring" />

