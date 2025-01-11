---
title: Staging and Classifying
description: Making sense of risks faced by software projects.


featured: 
  class: c
  element: '<document>Collection</document>'
sidebar_position: 16
tweet: yes
---

# Staging and Classifying

![Staged and Classified Beetle Collection, (Credit: Fir0002, Wikipedia)](/img/Beetle_collection_short.jpg)

Our tour is complete.  

But if we are good collectors, then before we finish we should _[Stage](https://en.wikipedia.org/wiki/Entomological_equipment_for_mounting_and_storage)_ our specimens and do some work in classifying what we've seen.

## Towards A "Periodic Table" Of Risks

As we said [at the start](A-Pattern-Language), Risk-First is all about developing _A Pattern Language_.  We can use the terms like "[Feature Risk](/tags/Feature-Risk)" or "[Internal Model Risk](/tags/Internal-Model-Risk)" to explain phenomena we see on software projects.   If we want to [De-Risk](/thinking/De-Risking) our work, we need this power of explanation so we can talk about how to go about it.

![Periodic Table of Risks, Horizontal](/img/generated/staging-and-classifying/periodic-horizontal.svg)

The diagram above compiles all of the risks we've seen so far on our tour across the [Risk Landscape](/risks/Risk-Landscape).  Just like a periodic table, there are perhaps others left to discover.   _Unlike_ a periodic table, these risks are not completely distinct: they mix like paint and blend into one another.  

If you've been reading closely, you'll notice that a number of themes come up again and again within the different sections.   It's time to look at the _patterns within the patterns_. 

## The Power Of Abstractions

[Abstraction](/tags/Abstraction) appears as a concept continually: in [Communication Risk](/tags/Communication-Risk), [Complexity Metrics](/risks/Complexity-Risk#kolmogorov-complexity), [Map and Territory Risk](/tags/Map-And-Territory-Risk) or how it causes [Lock-In Risk](/tags/Lock-In-Risk).  We've looked at some complicated examples of abstractions, such as [network protocols](/tags/Protocol-Risk), [dependencies on technology](/tags/Software-Dependency-Risk) or [Business Processes](Process-Risk#the-purpose-of-process).

Let's now _generalize_ what is happening with abstraction.  To do this, we'll consider the simplest example of abstraction:  _naming a pattern_ of behaviour we see in the real world, such as "Binge Watching" or "Remote Working", or naming a category of insects as "Beetles".

### Using A Known Abstraction

![Using A Known Abstraction](/img/generated/staging-and-classifying/depending-abstraction.svg)

As shown in the above diagram, _using an abstraction you already know_ means:

 - **Mitigating [Feature Risk](/tags/Feature-Risk)**: because the abstraction is providing you with something _useful_.  For example, using the word "London" allows you to refer to a whole (but slightly non-specific) geographic area.
 - **Accepting [Communication Risk](/tags/Communication-Risk)**: because if you are using the abstraction in conversation the people you are using it with _need to understand it too_.
 - **Accepting [Map and Territory Risk](/tags/Map-And-Territory-Risk)**: because the abstraction is a simplification and not the actual thing itself.
 - **Living with [Dependency Risks](/tags/Dependency-Risks)**:  we depend on a word in our language (or a function in our library, or a service on the Internet).  But words are [unreliable](/tags/Reliability-Risk).  Language _changes_ and _evolves_, and the words you are using now might not always mean what you want them to mean.  (Software too changes and evolves:  We've seen this in [Red Queen Risk](/tags/Red-Queen-Risk) and [Feature Drift Risk](/tags/Feature-Drift-Risk).)
 
### Inventing A New Abstraction  

![Inventing A New Abstraction](/img/generated/staging-and-classifying/inventing-abstraction.svg)

As shown in the above diagram, _inventing a new abstraction_ means:

- **Mitigating [Feature Risk](/tags/Feature-Risk).**  By _giving a name to something_ (or building a new product, or a way of working) you are offering up something that someone else can use.  This should mitigate [Feature Risk](/tags/Feature-Risk) in the sense that other people can choose to use your it, if it fits their requirements.  
- **Creating a [Protocol](/risks/On-Protocols).**  Introducing _new words to a language_ creates [Communication Risk](/tags/Communication-Risk) as most people won't know what it means. 
- **Increasing [Complexity Risk](/tags/Complexity-Risk).** Because, the more words we have, the more complex the language is.
- **Creating the opportunity for [Lock-In Risk](/tags/Lock-In-Risk).**  By naming something, you _implicitly_ create a boundary, because the world is now divided into "things which _are_ X" and "things which _are not_ X".  _Lock-In Risk arises from abstractions._
    
### Learning A New Abstraction

![Learning a New Abstraction](/img/generated/staging-and-classifying/choosing-abstraction.svg)

As shown in the above diagram, _learning a new abstraction_ means:

 - **Overcoming a [Learning Curve](/tags/Learning-Curve-Risk)**: because you have to _learn_ a name in order to use it (whether it is the name of a function, a dog, or someone at a party).
 - **Accepting [Lock-In Risks](/tags/Lock-In-Risk).**  Commitment to one abstraction over another means that you have the opportunity cost of the other abstractions that you could have used.
 - **Accepting [Map And Territory Risk](/tags/Map-And-Territory-Risk).** Because the word refers to the _concept_ of the thing, and _not the thing itself_.

Abstraction is everywhere and seems to be at the heart of what our brains do.  But clearly, like [taking any other action](/tags/Take-Action) there is always trade-off in terms of risk.   

## Your Feature Risk is Someone Else's Dependency Risk

![Features And Dependencies](/img/generated/staging-and-classifying/features-and-dependencies.svg)

In the [Feature Risk](/tags/Feature-Risk) section, we looked at the problems of _supplying something for a client to use as a dependency_:  you've got to satisfy a demand ([Market Risk](/tags/Market-Risk)) and service a segment of the user community ([Feature Access Risk](/tags/Feature-Access-Risk)).    

However over the rest of the [Dependency Risk](/tags/Dependency-Risks) sections we looked at this from the point of view of _being a client of someone else_:  you want to find trustworthy, reliable dependencies that don't give up when you least want them to.

So [Feature Risks](/tags/Feature-Risk) and [Dependency Risks](/tags/Dependency-Risk) are _two sides of the same coin_, they capture the risks in _demand_ and _supply_.   

As shown in the diagram above, relationships of features/dependencies are the basis of [Supply Chains](https://en.wikipedia.org/wiki/Supply_chain) and the world-wide network of goods and services that forms the modern economy.  The incredible complexity of this network mean incredible [Complexity Risk](/tags/Complexity-Risk), too.  Humans are masters at [coordinating](/tags/Coordination-Risk) and managing our dependencies. 

## The Work Continues

On this journey around the [Risk Landscape](/risks/Risk-Landscape) we've collected a (hopefully) good, representative sample of [Risks](/tags/Risk) and where to find them. But there are more out there.   How many of these have you seen on your projects?  What is missing?  What is wrong?

Please help by reporting back what you find.


