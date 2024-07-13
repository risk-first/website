---
title: Channel Risk
description: Risks due to the inadequacy of the physical channel used to communicate our messages. e.g. noise, loss, interception, corruption.

featured: 
  class: c
  element: '<risk class="channel" />'
sidebar_position: 2
tags:
 - Risks
 - Channel Risk
part_of: Communication Risk
---

<RiskIntro fm={frontMatter} />

There are lots of different types of media for communicating (e.g. TV, radio, talking, posters, books, phones, the Internet, etc. ) and they all have different characteristics.  When we communicate via a given medium, it's called a *channel*.  

The channel _characteristics_ depend on the medium then.  Some obvious ones are cost, utilisation, number of people reached, simplex or duplex (parties can transmit and receive at the same time), persistence (a play vs a book, say), latency (how long messages take to arrive) and bandwidth (the amount of information that can be transmitted in a period of time).

Channel characteristics are important:  in a high-bandwidth, low-latency situation, **Alice** and **Bob** can _check_ with each other that the meaning was transferred correctly.  They can discuss what to buy, they can agree that **Alice** wasn't lying or playing a joke.  

The channel characteristics also imply suitability for certain _kinds_ of messages.  A documentary might be a great way of explaining some economic concept, whereas an opera might not be.  <!-- tweet-end -->

### Channel Risk

Shannon discusses that no channel is perfect:  there is always the **risk of noise** corrupting the signal.  A key outcome from Shannon's paper is that there is a tradeoff:  within the capacity of the channel (the **bandwidth**), you can either send lots of information with _higher_ risk that it is wrong, or less information with _lower_ risk of errors.

![Communication Channel Risk](/img/generated/risks/communication/communication_channel_risks.svg) 

But channel risk goes wider than just this mathematical example:  messages might be delayed or delivered in the wrong order, or not be acknowledged when they do arrive.  Sometimes, a channel is just an inappropriate way of communicating.  When you work in a different time-zone to someone else on your team, there is _automatic_ [Channel Risk](/tags/Channel-Risk), because instantaneous communication is only available for a few hours a day. 

When channels are **poor-quality**, less communication occurs.  People will try to communicate just the most important information.  But, it's often impossible to know a-priori what constitutes "important".   This is why [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming) recommends the practices of [Pair Programming](https://en.wikipedia.org/wiki/Pair_programming) and grouping all the developers together: although you don't know whether useful communication will happen, you are mitigating [Channel Risk](/tags/Channel-Risk) by ensuring high-quality communication channels are in place.

At other times channels are crowded and can contain so much information that we can't hope to receive all the messages.  In these cases we don't even observe the whole channel, just parts of it. 

### Marketing Communications

When we are talking about a product or a brand, mitigating [Channel Risk](/tags/Channel-Risk) is the domain of [Marketing Communications](https://en.wikipedia.org/wiki/Marketing_communications).  <!-- tweet-end --> How do you ensure that the information about your (useful) project makes it to the right people?  How do you address the right channels? 

This works both ways.  Let's looks at some of the **Channel Risks** from the point of view of a hypothetical software tool, **D**, which my team would find really useful: 

 - The concept that there is such a thing as **D** which solves my problem isn't something I'd even considered.
 - I'd like to use something like **D**, but how do I find it?
 - There are multiple implementations of **D**, which is the best one for the task?
 - I know **D**, but I can't figure out how to solve my problem in it.
 - I've chosen **D**, I now need to persuade my team that **D** is the correct solution...
 - ... and then they also need to understand **D** to do their job too.

![Marketing Communication](/img/generated/risks/communication/communication_marketing.svg)

[Internal Models](/thinking/Glossary.md#internal-model) don't magically get populated with the information they need:  they fill up gradually, as shown in the diagram above.  Popular products and ideas _spread_, by word-of-mouth or other means.  Part of the job of being a good technologist is to keep track of new **Ideas**, **Concepts** and **Options**, so as to use them as [Dependencies](/tags/Dependency-Risk) when needed.
