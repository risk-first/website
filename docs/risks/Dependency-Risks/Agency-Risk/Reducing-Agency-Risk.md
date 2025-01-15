---
title: Reducing Agency Risk
sidebar_position: 2
tags:
  - Agency Risk
slug: /risks/Reducing-Agency-Risk
---

As noted in the [main article](/risks/Agency-Risk), there are various ways to reduce [Agency Risk](/tags/Agency-Risk), such as [Monitoring](/tags/Review),  [Security Hardening](/tags/Security-Testing), [Contracts](/tags/Contracts) and so on.,  However here are a couple of other approaches to consider to reduce Agency Risk.

### 1. Goal Alignment

As we stated at the beginning, [Agency Risk](/tags/Agency-Risk) at any level comes down to differences of [Goals](/tags/Goal) between the different agents, whether they are _people_, _teams_ or _software_. 

If you can _align the goals_ of the agents involved, you can mitigate [Agency Risk](/tags/Agency-Risk).  Nassim Nicholas Taleb calls this "skin in the game": that is, the agent is exposed to the same risks as the principal.

> "Which brings us to the largest fragilizer of society, and greatest generator of crises, absence of 'skin in the game.' Some become antifragile at the expense of others by getting the upside (or gains) from volatility, variations, and disorder and exposing others to the downside risks of losses or harm." - [Nassim Nicholas Taleb, _Antifragile_](https://a.co/d/07LfBTI)

Mafia bosses understand this theory well:  in order to engender _complete loyalty_ in your soldiers, you threaten their families.  Follow the rules or your family gets whacked! 

Another example of this is [The Code of Hammurabi](https://en.wikipedia.org/wiki/Code_of_Hammurabi), a Babylonian legal text composed c. 1755–1750 BC.  One law states:

> "The death of a homeowner in a house collapse necessitates the death of the house's builder... if the homeowner's son died, the builder's son must die also." - [Code of Hammurabi, _Wikipedia_](https://en.wikipedia.org/wiki/Code_of_Hammurabi#Theories_of_purpose)

Luckily, these kinds of exposure aren't very common on software projects!  [Fixed Price Contracts](/thinking/One-Size-Fits-No-One#waterfall) and [Employee Stock Options](https://en.wikipedia.org/wiki/Employee_stock_option) are two exceptions.

### 2. Needs Theory

David McClelland's Needs Theory suggests that there are two types of skin-in-the-game: the _intrinsic_ interest in the work being done and _extrinsic_ factors such as the recognition, achievement, or personal growth derived from it.   

> "Need theory... proposed by psychologist David McClelland, is a motivational model that attempts to explain how the needs for achievement, power, and affiliation affect the actions of people from a managerial context... McClelland stated that we all have these three types of motivation regardless of age, sex, race, or culture. The type of motivation by which each individual is driven derives from their life experiences and the opinions of their culture. " - [Need Theory, _Wikipedia_](https://en.wikipedia.org/wiki/Need_theory)

So one mitigation for [Agency Risk](/tags/Agency-Risk) is therefore to employ these extrinsic factors.  For example, by making individuals responsible and rewarded for the success or failure of projects, we can align their personal motivations with those of the project.  

> "One key to success in a mission is establishing clear lines of blame." - [Henshaw's Law, _Akin's Laws Of Spacecraft Design_](https://spacecraft.ssl.umd.edu/akins_laws.html)

But _extrinsic motivation_ is a complex, difficult-to-apply tool.  In [Internal Model Risk](/tags/Internal-Model-Risk) we will come back to this and look at the various ways in which it can go awry.

![Collective Code Ownership, Individual Responsibility](/img/generated/risks/agency/cco.svg)

Tools like [Pair Programming](https://en.wikipedia.org/wiki/Pair_programming) and [Collective Code Ownership](https://en.wikipedia.org/wiki/Collective_ownership) are about mitigating [Dependency Risks](/tags/Dependency-Risks) on staff, like [Key Person Risk](https://en.wikipedia.org/wiki/Key_person_insurance#Key_person_definition) and [Internal Model Risk](/tags/Internal-Model-Risk), but these push in the opposite direction to _individual responsibility_.   

This is an important consideration:  in adopting _those_ tools, you are necessarily setting aside certain _other_ tools to manage [Agency Risk](/tags/Agency-Risk) as a result.
