---
title: Communication Risk
description: Risk associated with getting messages heard and understood and the transfer of information.

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
 - Trust And Belief Risk
tweet: yes
part_of: Operational Risk
---

<RiskIntro fm={frontMatter} />

[Communication Risk](/tags/Communication-Risk) is risk associated with getting messages heard and understood and the transfer of information.   

If we all had identical knowledge, there would be no need to do any communicating at all, and therefore no [Communication Risk](/tags/Communication-Risk).   But people are not all-knowing oracles:  we rely on our _senses_ to improve our [Internal Models](/tags/Internal-Model) of the world. There is [Communication Risk](/tags/Communication-Risk) here - we might overlook something vital (like an on-coming truck) or mistake something someone says (like "Don't cut the green wire").  For people, Communication Risk includes:

 - Not having the information you need.
 - Being presented with the wrong or erroneous information.
 - Being "out of the loop" of important updates.
 - Not being able to speak the language, or misunderstanding what's being said.

For our software, it includes:
 
 - Issues with connectivity, Accuracy and relevance of information.
 - The problem of contradictory versions of information.
 - Protocol incompatibilities.
 
Communication Risk applies equally well as a concept in human scenarios between _people_, _teams_, _organisations_ as well as software scenarios such as _libraries_, _services_, and _data formats_.

## A Model Of Communication

![Communication Risk, broken into four areas (Shannon's Model)](/img/generated/risks/communication/communication_2.svg)

In 1948, Claude Shannon proposed this definition of communication:

> "The fundamental problem of communication is that of reproducing at one point, either exactly or approximately, a message selected at another point." - [A Mathematical Theory Of Communication, _Claude Shannon_](https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication)  

And from this same paper we get the diagram above:  we move from top-left ("I want to send a message to someone"), clockwise to bottom left where we hope the message has been understood and believed.  (I've added this last box, _reconciliation_ to Shannon's original diagram.)

One of the chief concerns in Shannon's paper is the risk of error between **Transmission** and **Reception**.  He creates a theory of _information_ (measured in _bits_), sets the upper-bounds of information that can be communicated over a channel, and describes ways in which [Communication Risk](/tags/Communication-Risk) between these processes can be mitigated by clever **Encoding** and **Decoding** steps.

But it's not just transmission.  [Communication Risk](/tags/Communication-Risk) exists at each of these steps.  Let's imagine a human example, where someone, **Alice** is trying to send a simple message to **Bob**.

|Step                  |Potential Risk                                           |
|----------------------|---------------------------------------------------------|
|Motivation            | **Alice** might be **motivated** to send a message to tell **Bob** something, only to find out that _he already knew it_. |
|Composition           | **Alice** might mess up the _intent_ of the message: instead of "Please buy chips" she might say, "Please buy chops". |
|Encoding              | **Alice** might not speak clearly enough to be understood. |
|Transmission          | **Alice** might not say it _loudly_ enough for **Bob** to hear. | 
|Reception             | **Bob** doesn't hear the message clearly (maybe there is background noise). |
|Decoding              | **Bob** might not decode what was said into a meaningful sentence. |
|Interpretation        | Assuming **Bob** _has_ heard, will he correctly **interpret**  which type of chips (or chops) **Alice** was talking about? |
|Reconciliation        | Does **Bob** believe the message?  Will he **reconcile** the information into his [Internal Model](/tags/Internal-Model) and act on it?  Perhaps not, if **Bob** forgets, or thinks that there are chips at home already.|

## Worked Example

![A Demo Helps Overcome Communication Risk](/img/generated/risks/posters/communication-risk.svg) 

You're about to roll out new software in an organisation and you're worried that staff within the organisation won't bother to read the documentation on how to use it.  You organise a [Demo](/tags/Demo).  However, there is the risk that by doing this you divert staff from hitting the very visible release milestones that have been mandated by senior staff. 

## Example Threats

Each of the above stages represents a potential threat vector, increasing [Communication Risk](/tags/Communication-Risk).  (For risks and threats pertaining to the [Internal Model](/tags/Internal-Model) itself, see [Internal Model Risk](/tags/Internal-Model-Risk).)

### 1. Channel Threats

**Threat**: Channel is noisy, containing much that isn't the signal you're after.  

**Threat**: Channel is low-bandwidth and important messages that should be sent and received aren't.

_See [On Channels](On-Channels)_

### 2. Protocol Threats

**Threat**: The protocol isn't what is expected (e.g. you're understand English but they're speaking French, or you're expecting HTML but get JSON)

**Threat**:  The protocol changes to a new version (e.g. people start using words you don't understand, or the network changes to use IPv6) 

_See [On Protocols](On-Protocols)_

### 3. Message Threats

**Threat**: Someone is sending a message with malicious purpose

**Threat**: The message contains only part of the information you need, leading to the wrong decision.

_See [On Messages](On-Messages)_

:::tip Anecdote Corner

The [1998 Mars Climate Orbiter] software disaster was caused by two teams (Lockheed Martin and NASA) collaborating on building different parts of the orbital insertion control program.  The two components needed to communicate with each other but there was a discrepancy:  one piece of software was expecting _pound-force seconds_ of thrust, while the other was producing _newton seconds_, a great example of Communication Risk occurring at the protocol level.  

Additionally, two navigators had spotted discrepancies in the orbital insertion but failed to correctly fill out forms relaying their concerns to the project managers in charge - Communication Risk occurring at the channel level.   

The orbiter and lander were both lost at the cost of hundreds of millions of dollars.

:::

