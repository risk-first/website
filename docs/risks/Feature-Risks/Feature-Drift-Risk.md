---
title: Feature Drift Risk
description: Risk that the features required by clients will change and evolve over time.   

featured: 
  class: ff
  element: '<risk class="feature-drift" />'
sidebar_position: 7
tags: 
 - Risks
 - Feature Drift Risk
part_of: Feature Risk
---
<RiskIntro fm={frontMatter} />


![Feature Drift Risk](/img/generated/risks/feature/feature-drift-risk.svg) 

**Feature Drift** is the tendency that the features people need _change over time_.   

For example, at one point in time, supporting IE6 was right up there for website developers, but it's not really relevant anymore.   The continual improvements we see in processor speeds and storage capacity of our computers is another example:  the [Wii](https://en.wikipedia.org/wiki/Wii) was hugely popular in the early 2000's, but expectations have moved on now.        

The point is:  what users want _today_ might not make it to _tomorrow_.  This is especially true in the fast-paced world of IT. Over time, the market _evolves_ and becomes more discerning.  This happens in several ways:

 - Features present in competitors' versions of the software become _the baseline_, and they're expected to be available in your version.
 - Certain ways of interacting become the norm (e.g. [querty](https://en.wikipedia.org/wiki/QWERTY) keyboards, or the control layout in cars: these don't change with time).
 - Features decline in usefulness: _Printing_ is less important now than it was,  for example.
 
As shown in the diagram, saving your project from Feature Drift Risk means **further design and development**.   But trying to keep up with users' changing demands can re-introduce [Conceptual Integrity Risk](/tags/Conceptual-Integrity-Risk) back into your project.  

Sometimes, the only way to go is to start again with a clean sheet by some **distruptive innovation**.

[Feature Drift Risk](/tags/Feature-Drift-Risk) is _not the same thing_ as **Requirements Drift**, which is the tendency projects have to expand in scope as they go along.  There are lots of reasons they do that, a key one being the [Hidden Risks](/thinking/Glossary#hidden-risk) uncovered on the project as it progresses.
