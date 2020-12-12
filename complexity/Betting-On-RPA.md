---
title: Betting On RPA
description: Looking at varieties of RPA as an escape from Information Sytsem incompatibility.
url: https://riskfirst.org/complexity/Betting-On-RPA
date: 2020-08-10 16:32:03 +0000
featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/bot.svg">Betting On RPA</image-artifact>'
categories:
 - Complexity
 - News
order: 4
---

# Betting On RPA

RPA or [Robotic Process Automation](https://en.wikipedia.org/wiki/Robotic_process_automation) is _everywhere_ at the moment.  

We need this because, as we discussed before, [The Crystal Is Always Cracked](Crystals-And-Code.md):  we can never have comprehensive, consistent and wide-scale Information Systems (IS's).   You can pick any two of these, but all three at the same time is impossible.  This is because the larger the IS, the _more difficult it is to change_.

But joining up IS's is important.  Let's summarise four of the big themes (with examples) before moving on:

- **[UIPath](https://www.uipath.com) _(et al)_**:  this is a product that allows you to automate the use of a Windows desktop or web-page, and is closest to the Wikipedia definition of RPA:  You record a macro of yourself using the application, and then you can script it to run on events, or whatever.  If you've ever tried to build tests with [Selenium](https://en.wikipedia.org/wiki/Selenium_(software)), you're probably aware that this can be awkward, brittle and time-consuming.   Nevertheless, UIPath is creating _a lot_ of value:  people need to be able to do this stuff, and they are the poster-child for RPA at the moment.

- **[Apache Camel](http://camel.apache.org), [Microsoft Power Automate](https://us.flow.microsoft.com/en-us/) and [Mule](https://www.mulesoft.com)**.  The idea of all of these things is to provide lots of _connectors_.  A connector standardises the data-feed to a wide variety of disparate systems.   If you want to send a tweet on Twitter every time you receive an email, for example, these tools allow you to do this.  However, their main use-case is to hook together IS's, so that they can process event streams from one place to another.   This is a more often known as [Business Process Automation](https://en.wikipedia.org/wiki/Business_process_automation). 

- **[Microsoft Teams](https://products.office.com/en-US/microsoft-teams/group-chat-software), [Symphony](https://symphony.com), [Slack](https://slack.com)**:  These are enterprise chat-platforms (think: "WhatsApp for banks"). They allow teams of people to set up their own rooms, manage membership and so on.  However, they also allow for "bots" to be written, which _act as users_ within those rooms.  You can get the bot to tell you if a build breaks, or ask the bot to raise a change request ticket, that kind of thing.

- **[Camunda](https://camunda.com/download/) (_et al_)**: _Workflow Systems_ are about creating [Hierarchies of Process](Towers-Of-Abstraction.md), and ensuring that work proceeds logically from one stage to the next.  They don't so much care about the _data underlying the work_, but making sure the right people or systems _know that they have to do something_.  Usually, these integrate with email or other notification tools.

![RPA Approaches](/images/complexity/rpa-1.png)

All of these are different -somewhat overlapping- approaches to RPA.  As shown in the above diagram, they all have slightly different focuses. 

## Evolution Of Thought

Let's focus on the third RPA approach for the moment:  _Enterprise Chat Platforms (ECP's)_.  My views on these have changed a lot in the last five years.  Let me take you on that journey:

### Stage 1:  It's The Command Line All Over Again.

Building front-end web applications is quite hard work, especially from the testing perspective.   You've got lots of different browsers, and different browser _versions_, and networking to consider, and authentication.. it's quite a lot of work.  Even just keeping up with front-end Javascript libraries is a full-time job!

However, building bots _takes you away from all this_.  Instead of worrying about where the user is clicking on the screen, who they are, whether the layout is the right colour and whether your images are using too much bandwidth, you can just focus on simple text requests and responses.

The first few bots I built were definitely in this mind-set:  

 - UI / UX testing was suddenly easy.  
 - The ECP took care of the identity of the user.
 - The network disappeared.  (This is especially big if you're working in a big corporation behind a bureaucratic fire-wall).

So, ECP's made life easier.   But, there's more.

### Stage 2:  Some Use-Cases Shine Here

Any time you want to alert a user to something, a web-page isn't the best place to go, and you're usually forced to fall back to sending emails.   Chat fixes this, because it has persistence of messages.  People can log in later and see what they missed.   This means that anything you used to use email for, you can move to chat.  And ECP's generally support attachments too.

Chat isn't really a replacement for Wikis or CMS (Content Management Systems) because they are event-based, but if you want to tell people about _new versions of documents being published_ this is a great venue.

### Stage 3:  It's Like A New J2EE

J2EE was great when it came out.  It provided a whole bunch of services that Java developers could take advantage of to build their applications.   
Chat platforms do something similar, because they provide:

- **Archival, Compliance**:  you are freed up from storing the messages yourself, and worrying about _backups_.  Also in banking environments there are often requirements to keep data for certain periods of time, which again, is automatically handled for the bot developer.
- **Administration and Security**:  you don't need to worry about rolling your own security settings, or even having to think about log-ins.  You can make it so your bot will only talk to certain people about certain things in certain rooms.  The administration of that room stays with it's owners, not your bot.
- **Information Barriers, GDPR**: these policies are handled on a whole-platform basis.  You might have to abide by some rules for your bot, but it should be simplified.

### Stage 4:  It's a Database

Since chat history is maintained for _forever_, you can use it like a write-only database (and there are those, [Datomic](http://datomic.com) being the most interesting to me).  You can _index_ the content in the chat-system too because they generally contain features like `@mentions` and `#hashtags`, and you can look up all the messages with a given `@mention` or `#hashtag`.  What else do you really need?

### Stage 5:  It's The Ultimate Feed System

Since there is only (usually, preferably) a single chat system in an organisation, connecting all employees and whatever bots there are, you can set up the most amazing feed systems.  As we discussed in [Crystals And Code](Crystals-And-Code.md), these are pretty much an inevitable result of Information Systems (IS's) roll-out in large organisations.

Chat platforms enable feeds because they can take _data payloads_, which can be consumed by bots, and processed as events in the main IS's of an organisation.

This is a pattern we've seen before:  the [Enterprise Service Bus (ESB)](https://en.wikipedia.org/wiki/Enterprise_service_bus).  These things have been around for 20 years or so (Mule and Camel being popular examples that we discussed earlier).  The ESB was a way of connecting together a number of disparate applications within an organisation, via a bus on which they emitted and received events, translating them along the way into their own language.

![Enterprise Service Bus](/images/complexity/esb.png)

However, ECP's _democratise the ESB significantly_ by allowing _people_ to co-mingle with the communicating IS's.  They allow a level of oversight not previously possible with the ESB, and they also bring all the other features we talked about before.   The [ChatOps](https://www.pagerduty.com/blog/what-is-chatops/) dream is that IS's are able to communicate not just to each other via the ECP, but also to the developers and support teams at the same time.

> "ChatOps, a term widely credited to GitHub, is all about conversation-driven development.While in a chat room, team members type commands that the chatbot is configured to execute through custom scripts and plugins. These can range from code deployments, to security event responses, to team member notifications. " - [What Is ChatOps?, _PagerDuty_](https://www.pagerduty.com/blog/what-is-chatops/)

## Lots To Do

ESB's established a common [Event-Driven Paradigm](https://en.wikipedia.org/wiki/Event-driven_architecture) for IS's.  ECP's provide a common platform for running an ESB which communicates with IS's and staff.  You can view ECP's as Message-Buses-On-Steroids.  

![Next Steps](/images/complexity/rpa-2.png)

Connecting all the applications to the ECP is done by way of _bots_.  We still have the big problem that bots are _not easy to build_, for exactly the same reason that ESB's are not easy to build:  translating events from one IS to another is a _hard task_.  The [Tower Of Babel](Towers-Of-Abstraction.md) problem doesn't go away - there's work to be done to translate between all of these systems - but a lot of the grunt-work (described in the _stages_ section, above) is already done on an ECP.

Nevertheless, there is a clear path here to getting all of our existing legacy ESB applications working together with other types of automation on a common, democratised platform.

And, we haven't even touched on _conversational bots_ yet, the deployment of natural language processing (NLP) within the organisation and using AI to _improve_ process (so-called "[Hyperautomation](https://en.wikipedia.org/wiki/Robotic_process_automation#Hyperautomation)".  That's another day.

In the meantime, let's focus on the [translation issue](SAME.md).

