---
title: Managing Lock-In Risks
description: How to escape ecosystem lock-in

sidebar_position: 3
tags:
 - Lock-In Risk
slug: /risks/Managing-Lock-In
---

Let's look at two ways in which we can manage [Lock-In Risk](/tags/Lock-In-Risk): _bridges_ and _standards_.

## Bridges

Sometimes, technology comes along that allows us to cross boundaries, like a _bridge_ or a _road_.  This has the effect of making it easy to to go from one self-contained ecosystem to another.  Going back to [WordPress](/risks/Ecosystem-Lock-In), a simple example might be the [Analytics Dashboard](https://en-gb.wordpress.org/plugins/google-analytics-dashboard-for-wp/) which provides [Google Analytics](https://en.wikipedia.org/wiki/Google_Marketing_Platform) functionality inside WordPress.  

I find, a lot of code I write is of this nature:  trying to write the _glue code_ to join together two different _ecosystems_.  

As shown in the above diagram, mitigating [Lock-In Risk](/tags/Lock-In-Risk) involves taking on complexity.  The more [Complexity](/tags/Complexity-Risk) there is on either side of the two ecosystems, the more [complex](/tags/Complexity-Risk) the bridge will necessarily be.  The below table shows some examples of this.

|Communication Risk From A         |Communication Risk From B        |Resulting Bridge Complexity  |Example                                                  |
|-----------------------------|----------------------------|-----------------------------|---------------------------------------------------------|
|Low                          |Low                         |Simple                       |Changing from one date format to another.                |
|High                         |Low                         |Moderate                     |Status Dashboard.                                        |
|High                         |High                        |Complex                      |Object-Relational Mapping (ORM) Tools.                   |

From examining the risk at each end of the bridge you are creating, you can get a rough idea of how complex the endeavour will be:

 - If it's low-risk at both ends, you're probably going to be able to knock it out easily.  Like translating a date, or converting one file format to another.
 - Where one of the protocols is _evolving_, you're definitely going to need to keep releasing new versions.  

## Standards

Standards mitigate [Lock-In Risk](/tags/Lock-In-Risk) in one of two ways:

1.  **Abstract over the ecosystems.**  Provide a _standard_ protocol (a _lingua franca_) which can be converted down into the protocol of any of a number of competing ecosystems.

 - The [C](https://en.wikipedia.org/wiki/C_(programming_language)) programming language provided a way to get the same programs compiled against different CPU instruction sets, therefore providing some _portability_ to code.  

 - [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) took what C did and went one step further, providing interoperability at the library level. Java code could run anywhere where Java was installed. 

2.  **Force adoption.** All of the ecosystems start using the standard for fear of being left out in the cold.  Sometimes, a standards body is involved, but other times a "de facto" standard emerges that everyone adopts.

 - [ASCII](https://en.wikipedia.org/wiki/ASCII): fixed the different-character-sets [Lock-In Risk](/tags/Lock-In-Risk) by being a standard that others could adopt.  Before everyone agreed on ASCII, copying data from one computer system to another was a massive pain, and would involve some kind of translation.  [Unicode](https://en.wikipedia.org/wiki/Unicode) continues this work. 

 - [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol).  As we saw in [Communication Risk](/tags/Communication-Risk), the Internet Protocol (IP) is the _lingua franca_ of the modern Internet.  However, at one period of time, there were many competing standards.  IP was the ecosystem that "won", and was subsequently standardised by the [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force).  This is actually an example of _both_ approaches:  as we saw in [Communication Risk](/tags/Communication-Risk), Internet Protocol is also an abstraction over lower-level protocols.
 