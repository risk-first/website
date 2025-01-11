---
title: On Code
description: A discussion of communication risks in software code.  

slug: /risks/On-Code
sidebar_position: 4
tags:
 - Communication Risk
---

Have you ever suffered from the problem of "too steep a [Learning Curve](https://en.wikipedia.org/wiki/Learning_curve)" or "[Information Overload](https://en.wikipedia.org/wiki/Information_overload)"?   This is the problem where the information you're trying to absorb forces you to try to adapt your [Internal Model](/tags/Internal-Model) too quickly for our brains to keep up.  

Commonly, the easiest option is just to ignore the information completely in these cases!

## Code and Information Overload

It has often been said that code is _harder to read than to write_:  

> "If you ask a software developer what they spend their time doing, they'll tell you that they spend most of their time writing code.  However, if you actually observe what software developers spend their time doing, you'll find that they spend most of their time trying to understand code. " -  [When Understanding Means Rewriting, _Coding Horror_](https://blog.codinghorror.com/when-understanding-means-rewriting/)

By now it should be clear that it's going to be _both_ quite hard to read and write:  the protocol of code is actually designed for the purpose of machines communicating, not primarily for people to understand.  Making code human-readable is a secondary concern to making it machine-readable.

But now we should be able to see the reason why it's harder to read than write too: 
 
 - When reading code, you are having to shift your [Internal Model](/tags/Internal-Model) to wherever the code is, accepting decisions that you might not agree with and accepting counter-intuitive logical leaps.  i.e. [Internal Model Risk](/tags/Internal-Model-Risk). _(cf. [Principle of Least Surprise](https://en.wikipedia.org/wiki/Principle_of_least_astonishment))_
 - There is no [Feedback Loop](/tags/Feedback-Loop) between your [Internal Model](/tags/Internal-Model) and the [Reality](/tags/Meeting-Reality) of the code, opening you up to [misinterpretation](/risks/On-Messages#2--misinterpretation).  When you write code, your compiler and tests give you this.
 - While reading code _takes less time_ than writing it, this also means the learning curve is steeper.
