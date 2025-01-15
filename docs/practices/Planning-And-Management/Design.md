---
title: Design
description: Designing the high-level structure of the software.
tags: 
  - Practice
  - Design
featured: 
  class: c
  element: '<action>Design</action>'
practice:
  aka: 
   - "System Design"
   - "Software Architecture"
   - "Design Patterns"
   - "Architecture"
   - "Research and Design"
  mitigates:
   - tag: Communication Risk
     reason: "Provides a clear structure and organization, making the system easier to understand and use."
   - tag: Implementation Risk
     reason: "Guides the development process, ensuring that the system meets requirements and design specifications."
   - tag: Operational Risk
     reason: "Ensures that the system architecture supports operational requirements and scalability."
   - tag: Market Risk
     reason:  (Research and) design allows you to leapfrog competitors and provide new sources of value.   
  attendant:
   - tag: Lock-In Risk
     reason: "Design decisions can create boundaries that limit flexibility and adaptability."
   - tag: Reliability Risk
     reason: "Creates dependencies on software components and design patterns."
   - tag: Feature Fit Risk
     reason: "Too much design up-front can create problems meeting feature requirements."
   - tag: Funding Risk
     reason: "Design can be an expensive bet that doesn't lead to improved software." 
  related:
   - ../Planning-and-Management/Requirements-Capture
   - ../Development-and-Coding/Coding
   - ../Development-and-Coding/Refactoring
   - ../Communication-and-Collaboration/Documentation
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Software architecture refers to the fundamental structures of a software system and the discipline of creating such structures and systems. Each structure comprises software elements, relations among them, and properties of both elements and relations." - [Software architecture, _Wikipedia_](https://en.wikipedia.org/wiki/Software_architecture)

Architecture / Design in software development involves creating the high-level structure of the system. This practice defines the components, their relationships, and how they interact to achieve the desired functionality. Effective architecture and design provide a blueprint for development, ensuring that the system is scalable, maintainable, and meets the requirements.

## Discussion

Design is what you do every time you think of an action to mitigate a risk.  And **Big Design Up Front** is where you do a lot of it in one go, for example:

 - Where you think about the design of all (or a set of) the requirements in one go, in advance.
 - Where you consider a _set of [Attendant Risks](/tags/Attendant-Risk)_ all at the same time.
 
Compare with "little" design, where we consider just the _next_ requirement, or the _most pressing_ risk. 
 
Although it's fallen out of favour in Agile methodologies, there are benefits to doing this _sometimes_. 

## How It Works  

As we saw in [Meet Reality](/thinking/Meeting-Reality), "Navigating the [Risk Landscape](/risks/Risk-Landscape)", meant going from a position of high risk, to a position of lower risk.  [Agile Design](/tags/Agile) is much like [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent): each day, one small step after another _downwards in risk_ on the [Risk Landscape](/risks/Risk-Landscape).

But the problem with this is you can get trapped in a [Local Minima](https://en.wikipedia.org/wiki/Maximum_and_minimum#Search), where there are _no_ easy steps to take to get you to where you want to be.  

In these cases, you have to _widen your horizon_ and look at where you want to go:  and this is the process of _design_.  You're not necessarily now taking steps on the [Risk Landscape](/risks/Risk-Landscape), but imagining a place on the [Risk Landscape](/risks/Risk-Landscape) where you want to be, and checking it against your [Internal Model](/tags/Internal-Model) for validity.


## See Also

<TagList tag="Design" />
