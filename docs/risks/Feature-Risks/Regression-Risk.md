---
title: Regression Risk
description: Risk that the functionality you provide changes for the worse, over time.
featured: 
  class: ff
  element: '<risk class="regression" />'
sidebar_position: 6
tags: 
 - Risks
 - Regression Risk
part_of: Feature Risk
---

<RiskIntro fm={frontMatter} />

![Regression Risk](/img/generated/risks/feature/feature-regression-risk.png) 

Delivering new features can delight your customers, but breaking existing ones will annoy them!  

[Regression Risk](Feature-Risk.md#regression-risk) is the risk of breaking existing features in your software when you add new ones.   As with other feature risks, the eventual result is the same: customers don't have the features they expect.  

Regression Risks increase as your code-base [gains Complexity](Complexity-Risk.md).  That's because it becomes impossible to keep a complete [Internal Model](../thinking/Glossary.md#internal-model) of the whole thing in your head, and also your software gains "corner cases" or "edge conditions" which don't get tested very often.

As shown in the above diagram, you can address Regression Risk with **specification** (defining clearly what the expected behaviour is) and **testing** (both manual and automated), but this takes time and will add extra complexity to your project (either in the form of code for automated tests, written specifications or a more elaborate process for releases).  

Regression Risk is something we'll come back to in [Operational Risk](Operational-Risk.md).