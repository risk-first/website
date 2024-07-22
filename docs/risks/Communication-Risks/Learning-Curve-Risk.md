---
title: Learning Curve Risk
description: Risks due to the difficulty faced in updating an internal model.

slug: risks/Learning-Curve-Risk
featured: 
  class: c
  element: '<risk class="learning-curve" />'
sidebar_position: 6
tags:
 - Risks
 - Learning Curve Risk
part_of: Communication Risk
---

<RiskIntro fm={frontMatter} />

If the messages we are receiving force us to update our [Internal Model](/thinking/Glossary.md#internal-model) too much, we can suffer from the problem of "too steep a [Learning Curve](https://en.wikipedia.org/wiki/Learning_curve)" or "[Information Overload](https://en.wikipedia.org/wiki/Information_overload)", where the messages force us to adapt our [Internal Model](/thinking/Glossary.md#internal-model) too quickly for our brains to keep up.  

Commonly, the easiest option is just to ignore the information channel completely in these cases.

#### Reading Code

It has often been said that code is _harder to read than to write_:  

> "If you ask a software developer what they spend their time doing, they'll tell you that they spend most of their time writing code.  However, if you actually observe what software developers spend their time doing, you'll find that they spend most of their time trying to understand code. " -  [When Understanding Means Rewriting, _Coding Horror_](https://blog.codinghorror.com/when-understanding-means-rewriting/)

By now it should be clear that it's going to be _both_ quite hard to read and write:  the protocol of code is actually designed for the purpose of machines communicating, not primarily for people to understand.  Making code human-readable is a secondary concern to making it machine-readable.

But now we should be able to see the reason why it's harder to read than write too: 
 
 - When reading code, you are having to shift your [Internal Model](/thinking/Glossary.md#internal-model) to wherever the code is, accepting decisions that you might not agree with and accepting counter-intuitive logical leaps.  i.e. [Learning Curve Risk](/tags/Learning-Curve-Risk). _(cf. [Principle of Least Surprise](https://en.wikipedia.org/wiki/Principle_of_least_astonishment))_
 - There is no [Feedback Loop](/thinking/Glossary.md#feedback-loop) between your [Internal Model](/thinking/Glossary.md#internal-model) and the [Reality](/tags/Meeting-Reality) of the code, opening you up to [misinterpretation](Communication-Risk.md#misinterpretation).  When you write code, your compiler and tests give you this.
 - While reading code _takes less time_ than writing it, this also means the [Learning Curve](/tags/Learning-Curve-Risk) is steeper.