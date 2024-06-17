---
title: Message Risk
description: Risks caused by the difficulty of composing and interpreting messages in the communication process.

featured: 
  class: c
  element: '<risk class="message" />'
sidebar_position: 4
tags:
 - Risks
 - Message Risk
part_of: Communication Risk
---

<RiskIntro fm={frontMatter} />

![Message Risk](/img/generated/risks/communication/communication_message_risks.png) 

Although Shannon's Communication Theory is about transmitting **Messages**, messages are really encoded **Ideas** and **Concepts**, from an **Internal Model**.   Let's break down some of the risks associated with this:

### Internal Model Risk

When we construct messages in a conversation, we have to make judgements about what the other person already knows.  For example, if I talk to you about a new [JDBC Driver](https://en.wikipedia.org/wiki/JDBC_driver), this presumes that you know what JDBC is.  The message has a dependency on prior knowledge.  Or, when talking to children it's often hard work because they _assume_ that you have knowledge of everything they do.  

This is called [Theory Of Mind](https://en.wikipedia.org/wiki/Theory_of_mind): the appreciation that your knowledge is different to other peoples', and adjusting you messages accordingly.  When teaching, this is called [The Curse Of Knowledge](https://en.wikipedia.org/wiki/Curse_of_knowledge):  teachers have difficulty understanding students' problems _because they already understand the subject_.  

### Message Risk  

A second, related problem is actually [Dependency Risk](/tags/Dependency-Risk), which is covered more thoroughly in a later section.  Often, to understand a new message, you have to have followed everything up to that point already.

The same **Message Dependency Risk** exists for computer software:  if there is replication going on between instances of an application and one of the instances misses some messages, you end up with a "[Split Brain](https://en.wikipedia.org/wiki/Split-brain_(computing))" scenario, where later messages can't be processed because they refer to an application state that doesn't exist.  For example, a message saying:

```
Update user 53's surname to 'Jones'
```

only makes sense if the application has previously processed the message 

```
Create user 53 with surname 'Smith'
```

#### Misinterpretation

For people, nothing exists unless we have a name for it. <!-- tweet-end --> The world is just atoms, but we don't think like this.  _The name is the thing_.  

> "The famous pipe. How people reproached me for it! And yet, could you stuff my pipe? No, it's just a representation, is it not? So if I had written on my picture “This is a pipe”, I'd have been lying!" - [Rene Magritte, of _The Treachery of Images_](https://en.wikipedia.org/wiki/The_Treachery_of_Images)

People don't rely on rigorous definitions of abstractions like computers do; we make do with fuzzy definitions of concepts and ideas.  We rely on [Abstraction](/thinking/Glossary.md#abstraction) to move between the name of a thing and the _idea of a thing_.

This brings about [Misinterpretation](Communication-Risk.md#misinterpretation): names are not _precise_, and concepts mean different things to different people.  We can't be sure that other people have the same meaning for a name that we have.  
