---
title: Implementation Risk
description: Risk that the functionality you are providing doesn't match the features the client is expecting, due to poor or partial implementation.
featured: 
  class: ff
  element: '<risk class="implementation" />'
sidebar_position: 2
tags: 
 - Risks
 - Implementation Risk
part_of: Feature Risk
---

<RiskIntro fm={frontMatter} />

![Implementation Risk](/img/generated/risks/feature/feature-implementation-risk.png) 

The [Feature Risk](Feature-Risk.md) family also includes things that don't work as expected, that is to say, [bugs](https://en.wikipedia.org/wiki/Software_bug).   Although the distinction between "a missing feature" and "a broken feature" might be worth making in the development team, we can consider these both the same kind of risk:  _the software doesn't do what the user expects_.  We call these [Implementation Risks](Feature-Risk.md#implementation-risk).  

As shown in the above diagram, we can mitigate this risk with _feedback_ from users, as well as further _development_ and _testing_.

It's worth pointing out that sometimes, _the user expects the wrong thing_.  This is a different but related risk, which could be down to [training](../practices/Training.md), [documentation](../practices/Documentation.md) or simply a [poor user interface](Communication-Risk.md) (and we'll look at that more in [Communication Risk](Communication-Risk.md).)
