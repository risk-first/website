---
title: Communication Risk
description: Why is it so hard to be understood?

featured: 
  class: c
  element: '<risk class="communication" />'
sidebar_position: 4
slug: /risks/Communication-Risk
tags:
 - Communication Risk
 - Risks
 - Learning Curve Risk
 - Channel Risk
 - Protocol Risk
 - Internal Model Risk
 - Invisibility Risk
 - Trust and Belief Risk
tweet: yes
---

<RiskIntro fm={frontMatter} />


# Communication Risk

If we all had identical knowledge, there would be no need to do any communicating at all, and therefore no [Communication Risk](Communication-Risk.md).  

But people are not all-knowing oracles.  We rely on our _senses_ to improve our [Internal Models](../thinking/Glossary.md#internal-model) of the world. There is [Communication Risk](Communication-Risk.md) here - we might overlook something vital (like an on-coming truck) or mistake something someone says (like "Don't cut the green wire").  

So, we are going to go on a journey discovering Communication Risk, covering:

- A look at the four different _stages_ of communication and examples of each in the world of computing.
- Breaking down [Communication Risk](Communication-Risk.md) as it affects each stage, discussing the types of risks present for each one.
- The many problems faced in product marketing.
- The concept of _abstraction_ and it's associated [Invisibility Risk](#invisibility-risk). 

## A Model Of Communication

![Shannon's Communication Model](/img/generated/risks/communication/communication_1.png)

In 1948, Claude Shannon proposed this definition of communication:

> "The fundamental problem of communication is that of reproducing at one point, either exactly or approximately, a message selected at another point." - [A Mathematical Theory Of Communication, _Claude Shannon_](https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication)  

And from this same paper we get the diagram above:  we move from top-left ("I want to send a message to someone"), clockwise to bottom left where we hope the message has been understood and believed.  (I've added this last box, _reconciliation_ to Shannon's original diagram.)

One of the chief concerns in Shannon's paper is the risk of error between **Transmission** and **Reception**.  He creates a theory of _information_ (measured in _bits_), sets the upper-bounds of information that can be communicated over a channel, and describes ways in which [Communication Risk](Communication-Risk.md) between these processes can be mitigated by clever **Encoding** and **Decoding** steps.

But it's not just transmission.  [Communication Risk](Communication-Risk.md) exists at each of these steps.  Let's imagine a human example, where someone, **Alice** is trying to send a simple message to **Bob**.

|Step                  |Potential Risk                                           |
|----------------------|---------------------------------------------------------|
|Motivation            | **Alice** might be **motivated** to send a message to tell **Bob** something, only to find out that _he already knew it_. |
|Composition           | **Alice** might mess up the _intent_ of the message: instead of "Please buy chips" she might say, "Please buy chops". |
|Encoding              | **Alice** might not speak clearly enough to be understood. |
|Transmission          | **Alice** might not say it _loudly_ enough for **Bob** to hear. | 
|Reception             | **Bob** doesn't hear the message clearly (maybe there is background noise). |
|Decoding              | **Bob** might not decode what was said into a meaningful sentence. |
|Interpretation        | Assuming **Bob** _has_ heard, will he correctly **interpret**  which type of chips (or chops) **Alice** was talking about? |
|Reconciliation        | Does **Bob** believe the message?  Will he **reconcile** the information into his [Internal Model](../thinking/Glossary.md#internal-model) and act on it?  Perhaps not, if **Bob** forgets, or thinks that there are chips at home already.|

## Approach To Communication Risk

To get inside [Communication Risk](Communication-Risk.md), we need to understand **Communication** itself, whether between _machines_, _people_ or _products_:  although these seem very different, the process involved (and the risks) are the same for each.  

![Communication Risk, broken into four areas](/img/generated/risks/communication/communication_2.png)

There is a symmetry about the steps going on in Shannon's model and we're going to exploit this in order to break down [Communication Risk](Communication-Risk.md) into four basic _stages_, as shown in the diagram above: 

 - **[Channels](https://en.wikipedia.org/wiki/Communication_channel)**: the medium via which the communication is happening.
 - **[Protocols](https://en.wikipedia.org/wiki/Communication_protocol)**:  the systems of rules that allow two or more entities of a communications system to transmit information.
 - **[Messages](https://en.wikipedia.org/wiki/Message)**: the information we want to convey.
 - **[Internal Models](../thinking/Glossary.md#internal-model)**: the sources and destinations for the messages.  Updating internal models (whether in our heads or machines) is the reason why we're communicating.
 
As we look at these four stages we'll consider the risks of each.

## Types Of Communication Risk

<TagList tag="Communication Risk" filter="risks/Communication-Risks" /> 


