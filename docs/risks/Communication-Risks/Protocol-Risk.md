---
title: Protocol Risk
description: Risks due to the failure of encoding or decoding messages between two parties in communication.  

featured: 
  class: c
  element: '<risk class="protocol" />'
sidebar_position: 3
tags:
 - Risks
 - Protocol Risk
 - Communication Risk
---
<RiskIntro fm={frontMatter} />

> "A communication protocol is a system of rules that allow two or more entities of a communications system to transmit information. " - [Communication Protocol, Wikipedia](https://en.wikipedia.org/wiki/Communication_protocol)

In this section I want to examine the concept of [Communication Protocols](https://en.wikipedia.org/wiki/Communication_protocol) and how they relate to [Abstraction](../thinking/Glossary.md#abstraction), which is implicated over and over again in different types of risk we will be looking at. 

[Abstraction](../thinking/Glossary.md#abstraction) means separating the _definition_ of something from the _use_ of something.  It's a widely applicable concept, but our example below will be specific to communication, and looking at the abstractions involved in loading a web page. 

### Clients and Servers

First we need to broaden our terminology.  Although so far we've talked about **senders** and **receivers**, we now need to talk from the point of view of who-depends-on-who.  That is, **clients** and **suppliers**.

 - If you're _depended on_, then you're a **"supplier"** (or a **"server"**, when we're talking about actual hardware).
 - If you require communication with something else, you're a **"client"**.   

### A Stack of Protocols

We're going to look at the example of a web browser (a **client**) loading a web-page from a **server**.  Specifically, we're going to examine how the web browser receives the **message** from the **server** via a **channel**.  That is - we're looking at the part of Shannon's diagram where we deal with _protocol_. 
 
![Protocol Stack](/img/generated/risks/communication/communication_protocols.png) 

In order that the **client** can load the web-page from the **server**, they both need to communicate with _shared protocols_.  In this example, this is going to involve (at least) six separate protocols, as shown in the diagram above.  

Let's examine each protocol in turn when I try to load the web page at the following address using a web browser:

```bash
http://google.com/preferences
```

### 1. DNS - Domain Name System

The first thing that happens is that the name `google.com` is _resolved_ by DNS.  This means that the browser looks up the domain name `google.com` and gets back an [IP Address](https://en.wikipedia.org/wiki/IP_address).  An IP Address is a bit like a postal address, but instead of being the address of a building, it is the address of a particular computer.

This is an [Abstraction](../thinking/Glossary.md#abstraction):  although computers use IP addresses like `216.58.204.78`, I can use a human-readable _name_, `google.com`.   

The address `google.com` doesn't even necessarily resolve to that same address each time:  Google serves a lot of traffic so there are multiple servers handling the requests and _they have multiple IP addresses for `google.com`_.   But as a user, I don't have to worry about this detail.

### 2. IP - Internet Protocol

This hints at what is beneath the abstraction:  although I'm loading a web-page, the communication to the server happens by [IP Protocol](https://en.wikipedia.org/wiki/Internet_Protocol) - my request is sent as a bunch of discrete "packets" (streams of binary digits).  You can think of a packet as being like a real-world parcel or letter.

Each packet consists of two things: 
 
- The **IP address**, which tells the network where to send the packet (again, much like you'd write the address on the outside of a parcel).
- The **payload**, the stream of bytes for processing at the destination, like the contents of the parcel.

But even this concept of "packets" is an [abstraction](../thinking/Glossary.md#abstraction).  Although the network understands this protocol, we might be using Wired Ethernet cables, or WiFi, 4G or _something else_ beneath that.  You can think of this as analogous to the parcel being delivered on foot, by plane or by car - it doesn't matter to the sender of the parcel!

### 3. 802.11 - WiFi Protocol

I ran this at home using WiFi, which uses [IEEE 802.11 Protocol](https://en.wikipedia.org/wiki/IEEE_802.11), which is another standard abstraction allowing my laptop to communicate with the router wirelessly.  But even _this_ isn't the bottom, because this is likely using [MIMO-OFDM](https://en.wikipedia.org/wiki/MIMO-OFDM), a specification about frequencies of microwave radiation, antennas, multiplexing, error-correction codes and so on.  

And WiFi is just the first hop.  After the WiFi receiver, there will be protocols for delivering the packets via the telephony system to Google's servers.

### 4. TCP - Transmission Control Protocol

Another [abstraction](../thinking/Glossary.md#abstraction) going on here is that my browser believes it has a  "connection" to the server.  This is provided by the TCP protocol. 

But this is a fiction - my "connection" is built on the IP protocol, which as we saw above is just packets of data on the network.  So there are lots of packets floating around which say "this connection is still alive" and "I'm message 5 in the sequence" and so on in order to maintain this fiction.  

This all means that the browser can forget about all the details of packet ordering and work with the fictional abstraction of a connection.

### 5. HTTP - Hypertext Transfer Protocol

If we examine what is being sent on the TCP connection, we see something like this:

```bash
 > GET /preferences HTTP/1.1     
 > Host: google.com              
 > Accept: */*                   
 >
```

This is now the HTTP protocol proper, and these 4 lines are sending text _over the connection_ to the `google.com` server, to ask it for the page.  

Is this all in one IP packet, or several?  We don't know:  that detail is handled at a lower-level of the protocol stack, and is **abstracted** away from this level.

Finally, the server gets to respond:

```bash
 < HTTP/1.1 301 Moved Permanently                                      
 < Location: http://www.google.com/preferences
... 
```

In this case, the server is telling us that the web page has changed address.    The `301` is a status code meaning the page has moved:  instead of `http://google.com/preferences`, we want `http://www.google.com/preferences`.

### Summary

By having a stack of protocols we are able to apply [Separation Of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns), each protocol handling just a few concerns:

|Protocol              |Abstractions                                     |
|----------------------|-------------------------------------------------|
|`HTTP`                |URLs, error codes, pages.                        |
|`DNS`                 |Names of servers to IP Addresses.                |
|`TCP`                 |The concept of a "connection" with guarantees about ordering and delivery.|
|`IP`                  |"Packets" with addresses and payloads.           |
|`WiFi`                |"Networks", 802.11 flavours, Transmitters, Antennas, error correction codes.| 

`HTTP` "stands on the shoulders of giants":  not only does it get to use pre-existing protocols like `TCP` and `DNS` to make its life easier, it got `WiFi` "for free" when this came along and plugged into the existing `IP` protocol.<!-- tweet-end -->  This is the key value of **abstraction**:  you get to piggy-back on _existing_ patterns, and use them yourself. 

### Protocol Risk

![Communication Protocols Risks](/img/generated/risks/communication/communication_protocol_risks.png)

Hopefully, the above example gives an indication of the usefulness of protocols within software.  But for every protocol we use we have [Protocol Risk](Communication-Risk.md#protocol-risk).  While this is a problem in human communication protocols, it's really common in computer communication because we create protocols _all the time_ in software. 

For example, as soon as we define a Javascript function (called **b** here), we are creating a protocol for other functions (**a** here) to use it: 

```javascript
function b(a, b, c) {
    return a+b+c;
}

function a() {
	var bOut = b(1,2,3);
	return "something "+bOut;		// returns "something 6"
}
```

If function **b** then changes, say:

```javascript
function b(a, b, c, d /* new parameter */) {
    return a+b+c+d;
}
```

Then, **a** will instantly have a problem calling it and there will be an error of some sort.

[Protocol Risk](Communication-Risk.md#protocol-risk) also occurs when we use [Data Types](https://en.wikipedia.org/wiki/Data_type):  whenever we change the data type, we need to correct the usages of that type.  Note above, I've given the `JavaScript` example, but I'm going to switch to `TypeScript` now:

```javascript
interface BInput {
    a: string,
    b: string, 
    c: string,
    d: string
}

function b(in: BInput): string {
    return in.a + in.b + in.c + in.d; 
}

function a() {
	var bOut = b({a: 1, b: 2, c: 3); // new parameter d missing
	return "something "+bOut;		
}
```

By using a [static type checker](https://en.wikipedia.org/wiki/Type_system#Static_type_checking), we can identify issues like this, but there is a trade-off:  
 
- we mitigate [Protocol Risk](Communication-Risk.md#protocol-risk), because we define the protocols _once only_ in the program, and ensure that usages all match the specification.  
- but the tradeoff is more _finger-typing_, which means [Codebase Risk](Complexity-Risk.md#codebase-risk) in some circumstances. 

Nevertheless, static type checking is so prevalent in software that clearly in most cases, the trade-off has been worth it: even languages like [Clojure](https://clojure.org) have been retro-fitted with [type checkers](https://github.com/clojure/core.typed).

Let's look at some further types of [Protocol Risk](Communication-Risk.md#protocol-risk).
 
#### Protocol Incompatibility

The people you find it _easiest_ to communicate with are your friends and family, those closest to you.  That's because you're all familiar with the same protocols.  Someone from a foreign country, speaking a different language and having a different culture, will essentially have a completely incompatible protocol for spoken communication to you.

Within software there are also competing, incompatible protocols for the same things, which is maddening when your protocol isn't supported.   For example, although the world seems to be standardising, there used to be _hundreds_ of different image formats.  Photographs often use [TIFF](https://en.wikipedia.org/wiki/TIFF), [RAW](https://en.wikipedia.org/wiki/Raw_image_format) or [JPEG](https://en.wikipedia.org/wiki/JPEG), whilst we also have [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) for vector graphics, [GIF](https://en.wikipedia.org/wiki/GIF) for images and animations and [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) for other bitmap graphics.   

#### Protocol Versioning

Even when systems are talking the same protocol there can be problems!  

When we have multiple, different systems owned by different parties, on their own upgrade cycles, we have **Protocol Versioning Risk**: the risk that either client or supplier could start talking in a version of the protocol that the other side hasn't learnt yet.  

There are various mitigating strategies for this.  We'll look at two now: **Backwards Compatibility** and **Forwards Compatibility**.

#### Backward Compatibility

Backwards Compatibility mitigates [Protocol Risk](Communication-Risk.md#protocol-risk).  This means supporting the old protocol until it falls out of use.  If a supplier is pushing for a change in protocol it either must ensure that it is Backwards Compatible with the clients it is communicating with, or make sure they are upgraded concurrently.  When building [web services](https://en.wikipedia.org/wiki/Web_service), for example, it's common practice to version all API's so that you can manage the migration.  Something like this:

 - Supplier publishes `/api/v1/something`.
 - Clients use `/api/v1/something`.
 - Supplier publishes `/api/v2/something`.
 - Clients start using `/api/v2/something`.
 - Clients (eventually) stop using `/api/v1/something`.
 - Supplier retires `/api/v1/something` API. 

#### Forward Compatibility

`HTML` and `HTTP` provide "graceful failure" to mitigate [Protocol Risk](Communication-Risk.md#protocol-risk)<!-- tweet-end -->:  while it's expected that all clients can parse the syntax of `HTML` and `HTTP`, it's not necessary for them to be able to handle all of the tags, attributes and rules they see.  The specification for both these standards is that if you don't understand something, ignore it.  Designing with this in mind means that old clients can always at least cope with new features, but it's not always possible.  

`JavaScript` _can't_ support this:  because the meaning of the next instruction will often depend on the result of the previous one.  

Do human languages support forward compatibility?  To some extent!  New words are added to our languages all the time.  When we come across a new word, we can either ignore it, guess the meaning, ask or look it up.  In this way, human language has **Forward Compatibility** features built in.

#### Protocol Implementation

A second aspect of [Protocol Risk](Communication-Risk.md#protocol-risk) exists in heterogeneous computing environments where protocols have been independently implemented based on standards.  For example, there are now so many different browsers, all supporting variations of `HTTP`, `HTML` and `JavaScript` that it becomes impossible to test a website comprehensively over all the different permutations.  

To mitigate as much [Protocol Risk](Communication-Risk.md#protocol-risk) as possible, generally we test web sites in a subset of browsers, and use a lowest-common-denominator approach to choosing protocol and language features.
