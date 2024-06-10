---
title: Invisibility Risk
description: Risks caused by the choice of abstractions we use in communication.

featured: 
  class: c
  element: '<risk class="invisibility" />'
sidebar_position: 5
tags:
 - Risks
 - Invisibility Risk
 - Communication Risk
---
 
<RiskIntro fm={frontMatter} />
 
Another cost of [Abstraction](../thinking/Glossary.md#abstraction) is [Invisibility Risk](Communication-Risk.md#invisibility-risk).  While abstraction is a massively powerful technique, it lets the function of a thing hide behind the layers of abstraction and become invisible.  

As we saw above, [Protocols](Communication-Risk.md#protocols) allow things like the Internet to happen - this is amazing! But the higher level protocols _hide_ the details of the lower ones.   HTTP _didn't know anything about_ IP packets, for example.  

Abstractions hide detail, then.  But when they hide from you the details you need this is called a [leaky abstraction](https://en.wikipedia.org/wiki/Leaky_abstraction).  Since all abstractions hide information, they are all potentially leaky.

#### Invisibility Risk In Conversation

[Invisibility Risk](Communication-Risk.md#invisibility-risk) is risk due to information not sent.  Because humans don't need a complete understanding of a concept to use it, we can cope with some [Invisibility Risk](Communication-Risk.md#invisibility-risk) in communication and this saves us time when we're talking.   It would be _painful_ to have conversations if, say, the other person needed to understand everything about how cars worked in order to discuss cars.  

For people, [Abstraction](../thinking/Glossary.md#abstraction) is a tool that we can use to refer to other concepts, without necessarily knowing how the concepts work.  This divorcing of "what" from "how" is the essence of abstraction and is what makes language useful.   

The debt of [Invisibility Risk](Communication-Risk.md#invisibility-risk) comes due when you realise that _not_ being given the details _prevents_ you from reasoning about it effectively.  Let's think about this in the context of a project status meeting, for example:
 
- Can you be sure that the status update contains all the details you need to know?
- Is the person giving the update wrong or lying?
- Do you know enough about the details of what's being discussed in order to make informed decisions about how the project is going?

#### Invisibility Risk In Software

Invisibility Risk is everywhere in software.  Let's consider what happens when, in your program, you create a new function, **f**:

 - First, by creating **f**, you have _given a piece of functionality a name_, which is abstraction.
 - Second, **f** _supplies_ functionality to clients, so we have created a client-supplier relationship.
 - Third, these parties now need to communicate, and this will require a protocol.  In a programming language, this protocol dictates the arguments passed to **f** and the response _back_ from **f**. 
 
But something else also happens:  by creating **f**, you are saying “I have this operation, the details of which I won’t mention again, but from now on it’s called **f**”  Suddenly, the implementation of “**f**” hides and it is working invisibly.  Things go on in **f** that people don’t necessarily understand.  

_Referring to **f** is a much simpler job than understanding **f**._

We try to mitigate this via documentation but this is a terrible deal:  documentation is necessarily a simplified explanation of the abstraction, so will still suffer from [Invisibility Risk](Communication-Risk.md#invisibility-risk).

[Invisibility Risk](Communication-Risk.md#invisibility-risk) is mainly [Hidden Risk](../thinking/Glossary.md#hidden-risk).  (Mostly, _you don't know what you don't know_.)  But you can carelessly _hide things from yourself_ with software<!-- tweet-end -->:

 - Adding a thread to an application that doesn't report whether it worked, failed, or is running out of control and consuming all the cycles of the CPU.
 - Redundancy can increase reliability, but only if you know when servers fail, and fix them quickly.   Otherwise, you only see problems when the last server fails.
 - When building a web-service, can you assume that it's working for the users in the way you want it to?

When you build a software service, or even implement a thread, ask yourself:  "How will I know next week that this is working properly?"  <!-- tweet-end -->If the answer involves manual work and investigation, then your implementation has just cost you in [Invisibility Risk](Communication-Risk.md#invisibility-risk).
