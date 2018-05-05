[Communication Risk](Communication-Risk) is the risk of communication between entities _going wrong_, due to loss or misunderstanding.
Consider this: if we all had identical knowledge, there would be no need to do any communicating at all, and therefore and also no [Communication Risk](Communication-Risk).  

![Communication Risk](images/generated/communication-risk.png)

But, people are not all-knowing oracles.  We rely on our _senses_ to improve our [Internal Models](Internal-Model) of the world. There is [Communication Risk](Communication-Risk) here - we might overlook something vital (like an oncoming truck) or mistake something someone says (like "Don't cut the green wire").  

[Communication Risk] isn't just for people; it affects computer systems too.

## A Model Of Communication

In 1948, Claude Shannon proposed this definition of communication:

> "The fundamental problem of communication is that of reproducing at one point, either exactly or approximately, a message selected at another point." - [A Mathematical Theory Of Communication, _Claude Shannon_](https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication)

And from this same paper, we get the following (slightly adapted) model:

![Communication Model](images/communication_1.png)

We move from top-left ("I want to send a message to someone") to bottom left, clockwise, where we hope the message has been understood and believed.  (I've added this last box to Shannon's original diagram.)

One of the chief concerns in Shannon's paper is the step between **Transmission** and **Reception**.  He creates a theory of information (measured in **bits**), the upper-bounds of information that can be communicated over a channel and ways in which [Communication Risk](Communication-Risk) between these processes can be mitigated by clever **Encoding** and **Decoding** steps.

But it's not just transmission.  [Communication Risk](Communication-Risk) exists at each of these steps.  Let's imagine a short exchange where someone, **Alice** is trying to send a message to **Bob**:

- **Alice** might be **motivated** to send a message to tell **Bob** something, only to find out that _they already knew it_, or it wasn't useful information for them.
- In the **composition** stage, **Alice** might mess up the _intent_ of the message: instead of "Please buy chips" they might say, "Please buy chops".
- In the **encoding** stage, **Alice** might not speak clearly enough to be understood, and... 
- In the **transmission** stage, **Alice** might not say it loudly enough for **Bob** to... 
- **receive** the message clearly (maybe there is background noise).
- Having heard **Alice** say something, can **Bob** **decode** what was said into a meaningful sentence?
- Then, assuming that, will they **interpret** correctly which type of chips (or chops) **Alice** was talking about?  Does "Please buy chips" convey all the information they need?
- Finally, assuming _everything else_, will **Bob** believe the message?  Will they **reconcile** the information into their [Internal Model](Internal-Model) and act on it?  Perhaps not, if **Bob** thinks that there are chips at home already.

## Approach To Communication Risk

There is a symmetry about the steps going on in Shannon's diagram, and we're going to exploit this in order to break down [Communication Risk](Communication-Risk) into it's main types.  

![Communication Risk 2](images/communication_2.png)

To get inside [Communication Risk](Communication-Risk), we need to understand **Communication** itself, whether between _machines_, _people_ or _products_:   we'll look at each in turn.  In order to do that, we're going to examine four basic concepts in each of these settings:
 
 - [Channels](https://en.wikipedia.org/wiki/Communication_channel), the medium via which the communication is happening.
 - [Protocols](https://en.wikipedia.org/wiki/Communication_protocol) -  the systems of rules that allow two or more entities of a communications system to transmit information.
 - [Messages](https://en.wikipedia.org/wiki/Message): The information we want to convey.
 - [Internal Models](Internal-Model): the sources and destinations for the messages.  Updating internal models (whether in our heads or machines) is the reason why we're communicating.
 
And, as we look at these four areas, we'll consider the [Attendant Risks](Risk) of each.

## Channels

There are lots of different types of channel for communicating (e.g. TV, Radio, DVD, Talking, Posters, Books, Phones, The Internet, etc. ) and they all have different characteristics.   Some obvious ones are cost, utilisation, number of people reached, simplex or duplex (parties can transmit and receive at the same time), persistence (a play vs a book, say), latency (how long messages take to arrive) and bandwidth (the amount of information that can be transmitted in a period of time).

Channel characteristics are important:  in a high-bandwidth, low-latency situation,**Alice** and **Bob** can _check_ with each other that the meaning was transferred correctly.  They can discuss what to buy, they can agree that**Alice** wasn't lying or playing a joke.  

The channel characteristics also imply suitability for certain _kinds_ of messages.  A documentary might be a great way of explaining some economic concept, whereas an opera might not be.

## Channel Risk

Shannon discusses that no channel is perfect:  there is always the **risk of noise** corrupting the signal.  A key outcome from Shannon's paper is that there is a tradeoff:  within the capacity of the channel (the **Bandwidth**), you can either send lots of information with _higher_ risk that it is wrong, or less information with _lower_ risk of errors.  And, rather like the [Kolgomorov complexity](Complexity-Risk) result, the more _randomness_ in the signal, the less compressible it is, and therefore the more _bits_ it will take to transmit.  

But channel risk goes wider than just this mathematical example:  messages might be delayed or delivered in the wrong order, or not be acknowledged when they do arrive.  Sometimes, a channel is just an inappropriate way of communicating.  When you work in a different timezone to someone else on your team, there is _automatic_ **Channel Risk**, because instantaneous communication is only available for a few hours' a day. 

When channels are **poor-quality**, less communication occurs.  People will try to communicate just the most important information.  But, it's often impossible to know apriori what this information is.   This is why [Extreme Programming](Extreme-Programming) recommends the practice of [Pair Programming](Coding) and siting all the developers together: although you don't know whether useful communication will happen, you are mitigating **Channel Risk** by ensuring high-quality communication channels are in place.

At other times, channels can contain so much information that we can't hope to receive all the messages.  In these cases, we don't even observe the whole channel, just parts of it.  For example, you might have a few YouTube channels that you subscribe to, but hundreds of hours of video are being posted on YouTube every second, so there is no way you can keep up with all of it.

![Communication Channels](images/communication_channels.png)

#### Marketing Communications

When we are talking about a product or a brand, mitigating **Channel Risk** is the domain of [Marketing Communications](https://en.wikipedia.org/wiki/Marketing_communications).   How do you ensure that the information about your (useful) project makes it to the right people?  How do you address the right channels? 

This works both ways.  Let's looks at some of the **Channel Risks** from the point of view of a hypothetical product, **D**, which would really useful in my software: 

 - The concept that there is such a thing as **D** which solves my problem isn't something I'd even considered.    
 - I'd like to use something like **D**, but how do I find it?  
 - There are multiple implementations of **D**, which is the best one for the task?
 - I know **D**, but I can't figure out how to solve my problem in it.
 - I've chosen **D**, I now need to persuade my team that **D** is the correct solution...
 - ... and then they also need to understand **D** to do their job too.

![Communication Marketing](images/communication_marketing.png)

[Internal Models](Internal-Model) don't magically get populated with the information they need:  they fill up gradually, as shown in this diagram.  Popular products and ideas _spread_, by word-of-mouth or other means.  Part of the job of being a good technologist is to keep track of new **Ideas**, **Concepts** and **Options** as widely as possible, so as to use them as [Dependencies](Dependency) when needed.

## Protocols

In this section, I want to examine the concept of [Communication Protocols](https://en.wikipedia.org/wiki/Communication_protocol) and how they relate to [Abstraction](Complexity-Risk).  

So, to do this, let's look in a bit of detail at how web pages are loaded.   When considering this, we need to broaden our terminology.  Although so far we've talked about **Senders** and **Receivers**, we now need to talk from the point of view of who-depends-on-who.  If you're _depended on_, then you're a "Server", whereas if you require communication with something else, you're a "Client".   Thus, clients depend on servers in order to load pages.

This is going to involve (at least) six separate protocols, the top-most one being the HTTP Protocol.   As far as the [http protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) is concerned, a _client_ makes an `HTTP Request` at a specific URL and the `HTTP Response` is returned in a predictable format that the browser can understand. 

Let's have a quick look at how that works with a `curl` command, which allows me to load a web page from the command line.   We're going to try and load Google's preferences page, and see what happens.  If I type:


```bash
> curl -v http://google.com/preferences      # -v indicates verbose
```

### 1. DNS - Domain Name System

Then, the first thing that happens is this:

```
* Rebuilt URL to: http://google.com/
*   Trying 216.58.204.78...
```

At this point, curl has used [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) to _resolve_ the address "google.com" to an IP address.  This is some [Abstraction](Complexity-Risk):  instead of using the machine's [IP Address](https://en.wikipedia.org/wiki/IP_address) on the network, `216.58.204.78`, I can use a human-readable address, `google.com`.   The address `google.com` doesn't necessarily resolve to that same address each time:  _They have multiple IP addresses for `google.com`_.   But, for the rest of the `curl` request, I'm now set to just use this one.

### 2. IP - Internet Protocol

But this hints at what is beneath the abstraction:  although I'm loading a web-page, the communication to the Google server happens by [IP Protocol](https://en.wikipedia.org/wiki/Internet_Protocol) - it's a bunch of discrete "packets" (streams of binary digits).  You can think of a packet as being like a real-world parcel or letter.

Each packet consists of two things:  
- An address, which tells the network components (such as routers and gateways) where to send the packet, much like you'd write the address on the outside of a parcel.
- The _payload_, the stream of bytes for processing at the destination.   Like the contents of the parcel.

But, even this concept of "packets" is an [Abstraction](Complexity-Risk).  Although all the components of the network interoperate with this protocol, we might be using Wired Ethernet, or WiFi, 4G or _something else_.

### 3. 802.11 - WiFi Protocol

I ran this at home, using WiFi, which uses [IEEE 802.11 Protocol](https://en.wikipedia.org/wiki/IEEE_802.11), which allows my laptop to communicate with the router wirelessly, again using an agreed, standard protocol.  But even _this_ isn't the bottom, because this is actually probably specifying something like [MIMO-OFDM](https://en.wikipedia.org/wiki/MIMO-OFDM), giving specifications about frequencies of microwave radiation, antennas, multiplexing, error-correction codes and so on.  And WiFi is just the first hop:  after the WiFi receiver, there will be protocols for delivering the packets via the telephony system.

### 4. TCP - Transmission Control Protocol

Anyway, the next thing that happens is this:

```
* TCP_NODELAY set
* Connected to google.com (216.58.204.78) port 80 (#0)
```

The second obvious [Abstraction](Complexity-Risk) going on here is that `curl` now believes it has a [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) connection.   The TCP connection abstraction gives us the surety that the packets get delivered in the right order, and retried if they go missing.  Effectively it _guarantees_ these things, or that it will have a connection failure if it can't make the guarantees. 

But, this is a fiction - TCP is built on the IP protocol, packets of data on the network.  So there are lots of packets floating around which say "this connection is still alive" and "I'm message 5 in the sequence" and so on in order to maintain this fiction.  But that means that the HTTP protocol can forget about this complexity and work with the fiction of a connection.

### 5. HTTP - Hypertext Transfer Protocol

Next, we see this:

```
> GET /preferences HTTP/1.1     (1)
> Host: google.com              (2)
> User-Agent: curl/7.54.0       (3)
> Accept: */*                   (4)
>                               (5)
```

This is now the HTTP protocol proper, and these 5 lines are sending information _over the connection_ to the Google server.  Line (1) says what version of HTTP we are using, and the path we're loading (`/preferences` in this case).   Lines `(2)` to `(4)` are _headers_.  They are name-value pairs, separated with a colon.   The HTTP protocol specifies a bunch of these names, and later versions of the protocol might introduce newer ones.  Line (5) is an empty line, which indicates that we're done with the headers, please give us the response.  And it does:

```
< HTTP/1.1 301 Moved Permanently                                      
< Location: http://www.google.com/preferences
< Content-Type: text/html; charset=UTF-8
< Date: Sun, 08 Apr 2018 10:24:34 GMT
< Expires: Tue, 08 May 2018 10:24:34 GMT
< Cache-Control: public, max-age=2592000
< Server: gws
< Content-Length: 230
< X-XSS-Protection: 1; mode=block
< X-Frame-Options: SAMEORIGIN
< 
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
</BODY></HTML>
* Connection #0 to host google.com left intact
```

There's a lot going on here, but we can break it down really easily into 3 chunks:
- The first line is the [HTTP Status Code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).  `301` is a code meaning that the page has moved.
- The next 9 lines are HTTP headers again (name-value pairs).   The `Location:` directive tells us where the page has moved to.  Instead of trying `http://google.com/preferences`, we should have used `http://www.google.com/preferences`. 
- The lines starting `<HTML>` are now some HTML to display on the screen to tell the user that the page has moved.  

### 6. HTML - Hypertext Markup Language
 
Although [HTML]() is a language, a language is also a protocol.  (After all, language is what we use to encode our ideas for transmission as speech.)   In the example we gave, this was a very simple page telling the client that it's looking in the wrong place.  In most browsers, you don't get to see this:  the browser will understand the meaning of the `301` error and redirect you to the location.  

Let's look at all the protocols we saw here:

![Protocol Stack](images/communication_protocols.png) 

Each protocol "passes on" to the next one in the chain.  On the left, we have the representation most suitable for the _messages_:  HTTP is designed for browsers to use to ask for and receive web pages.  As we move right, we are converting the message more and more into a form suitable for the [Channel]: in this case, microwave transmission.   

By having a stack of protocols, we are able to apply [Separation Of Concerns](), each protocol handling just a few concerns:

 - `HTML` Abstraction: A language for describing the contents of a web-page.
 - `HTTP` Abstraction: Name-Value pairs, agreed on by both `curl` and Google, URLs and error codes.
 - `DNS` Abstraction:  Names of servers to IP Addresses.
 - `TCP` Abstraction:  The concept of a "connection" with guarantees about ordering and delivery.
 - `IP` Abstraction:  "Packets" with addresses and payloads.
 - `WiFi` Abstraction:  "Networks", 802.11 flavours.
 - Transmitters, Antennas, error correction codes, etc.
 
HTTP "stands on the shoulders of giants".  Not only does it get to use pre-existing protocols like TCP and DNS to make it's life easier, it got 802.11 "for free" when this came along and plugged into the existing IP protocol.  This is the key value of abstraction:  you get to piggy-back on _existing_ patterns, and use them yourself. 

The protocol mediates between the message and the channel.  Where this goes wrong, we have **Protocol Risk**.  This is a really common issue for IT systems, but also sometimes for human communication too.

## Protocol Risk

Generally, anytime where you have different parts of a system communicating with each other, and one part can change incompatibly with another you have **Protocol Risk**.

Locally, (within our own project), where we have control, we can mitigate this risk using compile-time checking (as discussed already in [Complexity Risk]()), which essentially forces all senders and receivers to agree on protocol.  But, the wider the group that you are communicating with, the less control you have and the more chance there is of **Protocol Risk**.   Let's look at some types of **Protocol Risk**:
 
### Protocol Incompatibility Risk

The people you find it _easiest_ to communicate with are your friends and family, those closest to you.  That's because you're all familiar with the same protocols.  Someone from a foreign country, speaking a different language and having a different culture, will essentially have a completely incompatible protocol for spoken communication to you.

Within software, there are also _competing_, incompatible protocols for the same things, which is maddening when your protocol isn't supported.   Although the world seems to be standardizing, there used to be _hundreds_ of different image formats.  Photographs often use [TIFF], [RAW] or [JPEG], whilst we also have [SVG] for vector graphics, [GIF] for images and animations and [PNG]() for other bitmap graphics.   

### Protocol Versioning Risk

Even when systems are talking the same protocol, there can be problems.  When we have multiple, different systems owned by different parties, on their own upgrade cycles, we have **Protocol Versioning Risk**: the risk that either client or server could start talking in a version of the protocol that the other side hasn't learnt yet.  There are various mitigating strategies for this.  We'll look at two now: **Backwards Compatibility** and **Forwards Compatibility**.

#### Backward Compatibility

Backwards compatibility mitigates **Protocol Versioning Risk**.  Quite simply, this means, supporting the old format until it falls out of use.  If a server is pushing for a change in protocol it either must ensure that it is backwards compatible with the clients it is communicating with, or make sure they are upgraded first.  When building [web services](), for example, it's common practice to version all apis so that you can manage the migration.  Something like this:

 - Server publishes `/api/v1/something`.
 - Clients use `/api/v1/something`.
 - Server publishes `/api/v2/something`.
 - Clients start using `/api/v2/something`.
 - Clients (eventually) stop using `/api/v2/something`.
 - Server retires `/api/v2/something` API. 

#### Forward Compatibility

HTML and CSS provide "graceful failure" to mitigate **Protocol Risk**:  while its expected that all clients can parse the syntax of HTML and CSS, it's not necessary for them to be able to handle all of the tags, attributes and rules they see.  The specification for both these languages (and the HTTP headers we saw earlier) is that if you don't understand something, ignore it.  Designing with this in mind means that old clients can always at least cope with new features, but it's not always possible.  

JavaScript _can't_ support this:  because the meaning of the next instruction will often depend on the result of the previous one.  

Does human language support this?  To some extent!  New words are added to our languages all the time.  When we come across a new word, we can either ignore it, guess the meaning, ask or look it up.  In this way, human language has **Forward Compatibility** features built in.

### Protocol Implementation Risk

A second aspect of **Protocol Risk** exists in heterogenous computing environments, where protocols have been independently implemented based on standards.  For example, there are now so many different browsers, all supporting different levels of HTTP, HTML, Javascript and CSS so it becomes impossible to test comprehensively over all the different versions.  To mitigate as much **Protocol Risk** as possible, generally we run tests in a subset of browsers, and use a lowest-common-denominator approach to choosing protocol and language features.

![Communication Protocols Risks](images/communication_protocols_risks.png)

## Messages

Although Shannon's Communication Theory is about transmitting **Messages**, messages are really encoded **ideas** and **Concepts**, from one **Internal Model**.

### Internal Model Assumption Risk

When we construct messages in a conversation, we have to make judgements about what the other person already knows.  When talking to children, it's often hard work because they _assume_ that you have knowledge of everything they do.  This is called [Theory Of Mind](): the appreciation that your knowledge is different to other people's, and adjusting you messages accordingly.

When teaching, this is called [The Curse Of Knowledge]():  teachers have difficulty understanding students' problems _because they already understand the subject_.  For example, if I want to tell you about a new [JDBC Driver](), this pre-assumes that you know what JDBC is:  the message has a dependency on prior knowledge.

### Message Dependency Risk  

A second, related problem is actually [Dependency Risk](Dependency-Risk), which is covered more thoroughly in the next section.  Often, messages assume that you have followed everything up to that point already, otherwise again, your [Internal Model](Internal-Model) will not be rich enough to understand the new messages.

This happens when messages get missed, or delivered out of order.  In the past, TV shows were only aired once a week at a particular time.  So writers were constrained plot-wise by not knowing whether their audience would have seen the previous week's episode.  Therefore, often the state of the show would "reset" week-to-week, allowing you to watch it in _any_ order.

The same **Message Dependency Risk** exists for computer software:  if there is replication going on between instances of an application, and one of the instances misses some messages, you end up with a "[Split Brain]" scenario, where later messages can't be processed because they refer to an application state that doesn't exist.  For example, a message saying:

```
Update user 53's surname to 'Jones'
```

only makes sense if the application has previously had the message 

```
Create user 53 with surname 'Smith'
```

### Abstraction Risk & Misinterpretation Risk

People don't rely on rigorous implementations of abstractions like computers do; we make do with fuzzy definitions of concepts and ideas.  We rely on **Abstraction** to move between the name of a thing and the _idea of a thing_.

While machines only process _information_, people's brains run on concepts and ideas.  For people, abstraction is critical: nothing exists unless we have a name for it.  Our world is just atoms, but we don't think like this.  _The name is the thing_.  

> "The famous pipe. How people reproached me for it! And yet, could you stuff my pipe? No, it's just a representation, is it not? So if I had written on my picture “This is a pipe”, I'd have been lying!" - [Rene Magritte, of _The Treachery of Images_](https://en.wikipedia.org/wiki/The_Treachery_of_Images)

This brings about it's own [Communication Risk](Communication-Risk): names are not _precise_, and concepts mean different things to different people.  We can't be sure that people have the same meaning for concepts that we have.  

### Invisibility Risk

Abstraction is a massively powerful technique.  As we saw above, it allows things like the Internet to happen.  However, the price of Abstraction is **Invisibility Risk**: function hides behind layers of abstraction and becomes invisible.  

We try to mitigate this type of [Communication Risk](Communication-Risk) via (for the most part) documentation.  This is a terrible deal:  because we can't understand the original, (un-abstracted) implementation, we now need to write some simpler documentation, which _explains_ the abstraction, in terms of further abstractions, and this is where things start to get murky.

**Invisibility Risk** is risk due to information not sent.  Because humans don't need a complete understanding of a concept to use it, we can cope with some **Invisibility Risk** in communication.

- people assume invisibility risk on projects/people that don't communicate much
- that can also lead to 

For people though, **Abstraction** is a tool that we can use to refer to other concepts, without necessarily knowing how the concepts work.  This divorcing of "what" from "how" is the essence of abstraction.  

As soon as you create a function, you are doing abstraction.  You are saying:  “I now have this operation. The details, I won’t mention again, but from now on, it’s called _f_.”  And suddenly, “_f_” hides.  It is working invisibly.  Things go on in _f_ that people don’t necessarily need to understand.   There may be some documentation, or tacit knowledge around what _f_ is, and what it does, but it’s not necessarily right.  Referring to _f_ is a much simpler job than understanding _f_.

**Invisibility Risk** is mainly [Hidden Risk](Risk):  you don't know what you don't know.  But you can easily _hide things from yourself_ with software.  
 - Adding a thread to an application that doesn't report whether it's worked or failed, or is running out of control and consuming all the cycles of the CPU.
 - Load balancing can increase reliability, but only if you find and fix failed servers quickly.   Otherwise, you only see problems when the last server fails.
 - When building a webservice, can you assume that it's working for the users in the way you want it to?
 
Software brings tbd   
  

![Message Risk](images/communication_messages.png)

## Internal Models

So finally, we are coming to the root of the problem:  communication is about transferring ideas and concepts from one [Internal Model](Internal-Model) to another. 

As we've seen already, this is fraught with risk on many levels, but even at this last level there are risks.

### Trust Risk & Belief Risk

Although protocols can sometimes handle security features of communication (such as proof-of-identity and preventing man-in-the-middle attacks), trust goes further than this, intersecting with [Agency Risk]():  can you be sure that the other party in the communication is acting in your best interests?
 
Even if the receiver trusts the communicator, they may not trust the message.  Let's look at some reasons for that:
 - [Weltanschauung (World View)](https://en.wikipedia.org/wiki/World_view): The ethics, values and beliefs in the receiver's [Internal Model]() may be incompatible to those from the sender.  
 - [Relativism]() is the concept that there are no universal truths.  Every truth is from a frame of reference.  For example, what constitutes _offensive language_ is dependent on the listener.
 - [Psycholinguistics]() is the study of humans aquire languages.  Just as there are different languages and dialects, and _industry dialects_: we all 
 - Internalizing
  
From the point-of-view of [Marketing Communications]() choosing the right message is part of the battle.  You are trying to communicate your idea in such a way as to mitigate **Belief Risk** and **Trust Risk**.

### Learning Curve Risk

If the messages we are receiving force us to update our [Internal Mode](Internal-Model) too much, we can suffer from the problem of "too steep a [Learning Curve]()" or "[Information Overload]", where the messages force us to adapt our [Internal Model](Internal-Model) too quickly for our brains to keep up.  

Commonly, the easiest option is just to ignore the information channel completely in these cases.

### Reading Code

It's often been said that code is [harder to read than to write]().  By now it should be clear that it's going to be _both_ quite hard to read and write:  the protocol of code is actually designed for the purpose of machines communicating, not primarily for people to understand.  Simultanously making code human readable is a subordinate concern to making it machine readable.

But now we should be able to see the reasons it's harder to read than write too:  
 - When reading code, you are having to shift your [Internal Model](Internal-Model) to wherever the code is, accepting decisions that you might not agree with and accepting counter-intuitive logical leaps.  This is **Information Overload Risk**, cf. [Principle of Least Surprise](). 
 - There is no [Feedback Loop](Feedback-Loop) between your [Internal Model](Internal-Model) and the [Reality](Meet-Reality) of the code, opening you up to **Misinterpretation Risk**.  When you write code, your compiler and tests give you this.
 - While reading code _takes less time_ than writing it, this also means the [Learning Curve]() is steeper.

![Internal Model Risks](images/communication_internalmodel.png)

## Communication Risk Wrap Up

So, here's a summary of where we've arrived with our model of communication risk:

![Communication 2](images/communication_3.png)

The purpose of Communication is to _coordinate_ our actions, so next it's time to look at [Coordination Risk](Coordination-Risk).
