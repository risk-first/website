---
title: Conceptual Integrity Risk
description: Risk that the software you provide is too complex, or doesn't match the expectations of your clients' internal models.
featured: 
  class: ff
  element: '<risk class="conceptual-integrity" />'
sidebar_position: 3
tags: 
 - Risks
 - Conceptual Integrity Risk
part_of: Feature Risk
---

<RiskIntro fm={frontMatter} />

![Conceptual Integrity Risk](/img/generated/risks/feature/conceptual-integrity-risk.svg) 

[Conceptual Integrity Risk](/tags/Conceptual-Integrity-Risk) is the risk that chasing after features leaves the product making no sense, and therefore pleasing no-one.   

Sometimes users _swear blind_ that they need some feature or other, but it runs at odds with the design of the system, and plain _doesn't make sense_.   Sometimes the development team can spot this kind of conceptual failure as soon as the suggestion is made, but usually it's in coding that this becomes apparent.  

Sometimes it can go for a lot longer.  Here's an example: I once worked on some software that was built as a score-board within a chat application.  However, after we'd added much-asked-for commenting and reply features to our score-board, we realised we'd implemented a chat application _within a chat application_, and had wasted our time enormously.  

[Feature Phones](https://en.wikipedia.org/wiki/Feature_phone) are another example:  although it _seemed_ like the market wanted more and more features added to their phones, [Apple's iPhone](https://en.wikipedia.org/wiki/IPhone) was able to steal huge market share by presenting a much more enjoyable, more coherent user experience, despite being more expensive and having _fewer_ features.  Feature Phones had been drowning in increasing [Conceptual Integrity Risk](/tags/Conceptual-Integrity-Risk) without realising it.

Conceptual Integrity Risk is a particularly pernicious kind of [Feature Risk](/tags/Feature-Risk) which can only be mitigated by good design and [feedback](/thinking/Cadence.md).  Human needs are [fractal in nature](../estimating/Fractals.md): the more you examine them, the more complexity you can find.  The aim of a product is to capture some needs at a *general* level:  you can't hope to anticipate everything.  As with the other risks, there is an inherent [Schedule Risk](/tags/Schedule-Risk) as addressing these risks takes _time_.