---
title: Scarcity Risk
description: Scarcity Risk is about quantities of a dependency, and specifically, not having enough.

slug: /risks/Scarcity-Risk

featured: 
  class: c
  element: '<risk class="scarcity" />'
sidebar_position: 7
tweet: yes
tags: 
 - Risks
 - Scarcity Risk
part_of: Dependency Risk
---

<RiskIntro fm={frontMatter} />

While [Reliability Risk](/tags/Reliability-Risk) (which we met in the previous section) considers what happens when a _single dependency_ is unreliable, scarcity is about _quantities_ of a dependency, and specifically, _not having enough_.  <!-- tweet-end -->

In the previous section we talked about the _reliability_ of the bus:  it will either arrive or it wont.  But what if, when it arrives, it's already full of passengers?  There is a _scarcity of seats_:  you don't much care which seat you get on the bus, you just need one.  Let's term this [Scarcity Risk](/tags/Scarcity-Risk), _the risk of not being able to access a dependency in a timely fashion due to its scarcity_.  

Any resource (such as disk space, oxygen, concert tickets, time or pizza) that you depend on can suffer from _scarcity_,  and here, we're going to look at five particular types, relevant to software.<!-- tweet-end -->

![Scarcity Risk and its variations](/img/generated/risks/scarcity/scarcity-risks.svg)

## Types Of Scarcity Risk

<TagList tag="Scarcity Risk" filter="risks/Dependency-Risks/Scarcity-Risks" /> 
