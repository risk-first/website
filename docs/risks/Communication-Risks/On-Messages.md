---
title: On Messages
description: Messages can be a source of Communication Risk

sidebar_position: 4

tags:
 - Communication Risk
---

 - **[Messages](https://en.wikipedia.org/wiki/Message)**: the information we want to convey.


Although Shannon's Communication Theory is about transmitting **Messages**, messages are really encoded **Ideas** and **Concepts**, from an **Internal Model**.   Let's break down some of the risks associated with this:

When we construct messages in a conversation, we have to make judgements about what the other person already knows.  For example, if I talk to you about a new [JDBC Driver](https://en.wikipedia.org/wiki/JDBC_driver), this presumes that you know what JDBC is.  The message has a dependency on prior knowledge.  Or, when talking to children it's often hard work because they _assume_ that you have knowledge of everything they do.  

This is called [Theory Of Mind](https://en.wikipedia.org/wiki/Theory_of_mind): the appreciation that your knowledge is different to other peoples', and adjusting you messages accordingly.  When teaching, this is called [The Curse Of Knowledge](https://en.wikipedia.org/wiki/Curse_of_knowledge):  teachers have difficulty understanding students' problems _because they already understand the subject_.  

A second, related problem is actually [Dependency Risk](/tags/Dependency-Risks), which is covered more thoroughly in a later section.  Often, to understand a new message, you have to have followed everything up to that point already.

The same **Message Dependency Risk** exists for computer software:  if there is replication going on between instances of an application and one of the instances misses some messages, you end up with a "[Split Brain](https://en.wikipedia.org/wiki/Split-brain_(computing))" scenario, where later messages can't be processed because they refer to an application state that doesn't exist.  For example, a message saying:

```
Update user 53's surname to 'Jones'
```

only makes sense if the application has previously processed the message 

```
Create user 53 with surname 'Smith'
```

#### Misinterpretation

For people, nothing exists unless we have a name for it. The world is just atoms, but we don't think like this.  _The name is the thing_.  

> "The famous pipe. How people reproached me for it! And yet, could you stuff my pipe? No, it's just a representation, is it not? So if I had written on my picture “This is a pipe”, I'd have been lying!" - [Rene Magritte, of _The Treachery of Images_](https://en.wikipedia.org/wiki/The_Treachery_of_Images)

People don't rely on rigorous definitions of abstractions like computers do; we make do with fuzzy definitions of concepts and ideas.  We rely on [Abstraction](/tags/Abstraction) to move between the name of a thing and the _idea of a thing_.

This brings about [Misinterpretation](/risks/Message-Risk#misinterpretation): names are not _precise_, and concepts mean different things to different people.  We can't be sure that other people have the same meaning for a name that we have.  


Another cost of [Abstraction](/tags/Abstraction) is [Invisibility Risk](/tags/Invisibility-Risk).  While abstraction is a massively powerful technique, it lets the function of a thing hide behind the layers of abstraction and become invisible.  

As we saw above, [Protocols](/tags/Protocol-Risk) allow things like the Internet to happen - this is amazing! But the higher level protocols _hide_ the details of the lower ones.   HTTP _didn't know anything about_ IP packets, for example.  

Abstractions hide detail, then.  But when they hide from you the details you need this is called a [leaky abstraction](https://en.wikipedia.org/wiki/Leaky_abstraction).  Since all abstractions hide information, they are all potentially leaky.

#### Invisibility Risk In Conversation

[Invisibility Risk](/tags/Invisibility-Risk) is risk due to information not sent.  Because humans don't need a complete understanding of a concept to use it, we can cope with some [Invisibility Risk](/tags/Invisibility-Risk) in communication and this saves us time when we're talking.   It would be _painful_ to have conversations if, say, the other person needed to understand everything about how cars worked in order to discuss cars.  

For people, [Abstraction](/tags/Abstraction) is a tool that we can use to refer to other concepts, without necessarily knowing how the concepts work.  This divorcing of "what" from "how" is the essence of abstraction and is what makes language useful.   

The debt of [Invisibility Risk](/tags/Invisibility-Risk) comes due when you realise that _not_ being given the details _prevents_ you from reasoning about it effectively.  Let's think about this in the context of a project status meeting, for example:
 
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

We try to mitigate this via documentation but this is a terrible deal:  documentation is necessarily a simplified explanation of the abstraction, so will still suffer from [Invisibility Risk](/tags/Invisibility-Risk).

[Invisibility Risk](/tags/Invisibility-Risk) is mainly [Hidden Risk](/tags/Hidden-Risk).  (Mostly, _you don't know what you don't know_.)  But you can carelessly _hide things from yourself_ with software<!-- tweet-end -->:

 - Adding a thread to an application that doesn't report whether it worked, failed, or is running out of control and consuming all the cycles of the CPU.
 - Redundancy can increase reliability, but only if you know when servers fail, and fix them quickly.   Otherwise, you only see problems when the last server fails.
 - When building a web-service, can you assume that it's working for the users in the way you want it to?

When you build a software service, or even implement a thread, ask yourself:  "How will I know next week that this is working properly?"  <!-- tweet-end -->If the answer involves manual work and investigation, then your implementation has just cost you in [Invisibility Risk](/tags/Invisibility-Risk).


Although protocols can sometimes handle security features of communication (such as [Authentication](https://en.wikipedia.org/wiki/Authentication) and preventing [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)), trust goes further than this, it is the flip-side of [Agency Risk](/tags/Agency-Risk), which we will look at later:  can you be sure that the other party in the communication is acting in your best interests?
 
Even if the **receiver** trusts the **sender**, they may not _believe_ the message.  Let's look at some reasons for that:

- **[Weltanschauung (World View)](https://en.wikipedia.org/wiki/World_view)**: the ethics, values and beliefs in the receiver's [Internal Model](/tags/Internal-Model) may be incompatible to those from the sender.
- **[Relativism](https://en.wikipedia.org/wiki/Relativism)** is the concept that there are no universal truths.  Every truth is from a frame of reference.  For example, what constitutes _offensive language_ is dependent on the listener.
- **[Psycholinguistics](https://en.wikipedia.org/wiki/Psycholinguistics)** is the study of how humans acquire languages.  There are different languages, dialects, and _industry dialects_.  We all understand language in different ways, take different meanings and apply different contexts to the messages.
  
From the point-of-view of [Marketing Communications](/risks/Channel-Risk#marketing-communications), choosing the right message is part of the battle.  You are trying to communicate your idea in such a way as to mitigate Trust & Belief Risk.
