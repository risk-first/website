Communication Risk is the risk of communication between two entities _going wrong_, due to loss or misunderstanding.
If we had identical knowledge, there would be no need to do any communicating at all, and therefore and also no [Communication Risk](Communication-Risk).  

Humans are not all-powerful oracles.  We rely on our _senses_ to improve our [Internal Models](Internal-Model) of the world, but there is **Communication Risk** here - we might overlook something vital (like an oncoming truck) or mistake something someone says (like "Don't cut the green wire").  Because **Information Risk** is fundamental, the computer systems we build share the same flaws and have the same constraints.

To get inside **Communication Risk**, we need to understand **Communication** as it pertains to two parties, whether they are _machines_, _people_ or _products_:   we'll look at each in turn.  In order to do that, we're going to examine two concepts in each of these settings: 
 - **Bandwidth**, the rate at which we can transfer data and
 - **Communication Protocols** -  the systems of rules  that allow two or more entities of a communications system to transmit information.
 
## A Model Of Communication

In 1948, Claude Shannon proposed this definition of communication:

> "The fundamental problem of communication is that of reproducing at one point, either exactly or approximately, a message selected at another point." - [A Mathematical Theory Of Communication, _Claude Shannon_](https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication)

And from this paper, we get the following (slightly adapted) model:

![Communication Model](images/communication_1.png)

We move from top-left ("I want to send a message to someone") to bottom left, clockwise, where we hope the message has been understood and believed.  

One of the chief concerns in Shannon's paper is the step between Transmission and Reception:  he creates a theory of information, the upper-bounds of information that can be communicated over a channel and ways in which **Communication Risk** between these processes can be mitigated by clever Encoding and Decoding steps.

But actually, **Communication Risk** occurs at each of these steps.  Let's imagine a short exchange where **S** is trying to send a message to **R**:
- **S** might be **motivated** to send a message to tell **R** something, only to find out that _they already knew it_, or it wasn't useful information for them.
- In the **composition** stage, **S** might mess up the _intent_ of the message: instead of "The bar is on fire!" they might say, "The car is on fire!".
- In the **encoding** stage, **S** might not speak clearly enough to be understood, and 
- In the **transmission** stage, **S** might not say it loudly enough for **R** to 
- **receive** the message clearly (maybe there is background noise).
- Having heard **S** say something, can **R** **decode** what was said into a meaningful sentence?
- And, assuming that, will they understand which bar (or car) **S** was talking about?
- Finally, assuming _everything else_, will **R** believe that this is real information that needs to be acted on?

## Bandwidth

Another key outcome from Shannon's paper is that there is a tradeoff:  within the capacity of the channel (the **Bandwidth**), you can either send lots of information with _higher_ risk that it is wrong, or less information with _lower_ risk of errors.  And, rather like the [Kolgomorov complexity](Complexity-Risk) result, the more _randomness_ in the signal, the less compressible it is, and therefore the more _bits_ it will take to transmit.   

This is where **Bandwidth** becomes important:  in a high-bandwidth situation, **S** and **R** can _check_ with each other that the meaning was transferred correctly.  They can discuss exactly which bar is on fire, they can agree that **S** wasn't lying or playing a joke.  

So, given the _usefulness_ of bandwidth, it's not surprising that our computer networks are always under pressure to _increase_ bandwidth, and a huge amount of effort has gone into formulating protocols that make as much use of available bandwidth as possible.  

## Machines and Communication Protocols

In this section, I want to hammer home the concept of [Communication Protocol](https://en.wikipedia.org/wiki/Communication_protocol) and how it relates to [Abstraction](Complexity-Risk), which we touched on in [Complexity Risk](Complexity-Risk) already.  

So, to do this, let's look in a bit of detail at the [http protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), which of course is used in your browser to load web pages.  As far as the [http protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) is concerned, a _client_ makes an `HTTP Request` at a specific URL and the `HTTP Response` is returned in a predictable format that the browser can understand. 

Let's have a quick look at how that works with a `curl` command, which allows me to load a web page from the command line.   We're going to try and load Google's preferences page, and see what happens.  If I type:


```bash
> curl -v http://google.com/preferences      # -v indicates verbose
```

### DNS - Domain Name System

Then, the first thing that happens is this:

```
* Rebuilt URL to: http://google.com/
*   Trying 216.58.204.78...
```

At this point, curl has used [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) to _resolve_ the address "google.com" to an IP address.  This is some [Abstraction](Complexity-Risk):  instead of using the machine's [IP Address](https://en.wikipedia.org/wiki/IP_address) on the network, (216.58.204.78), I can use a human-readable address, (google.com).   The address "google.com" doesn't necessarily resolve to that same address each time:  _They have multiple IP addresses for google.com_.   But, for the rest of the `curl` request, I'm now set to just use this one.

### IP - Internet Protocol

But this hints at what is beneath the abstraction:  although I'm loading a web-page, the communication to the Google server happens by [IP Protocol](https://en.wikipedia.org/wiki/Internet_Protocol) - it's a bunch of discrete "packets" (streams of binary digits).  You can think of a packet as being like a real-world parcel or letter.

Each packet consists of two things:  
- An address, which tells the network components (such as routers and gateways) where to send the packet, much like you'd write the address on the outside of a parcel.
- The _payload_, the stream of bytes for processing at the destination.   Like the contents of the parcel.

But, even this concept of "packets" is an [Abstraction](Complexity-Risk).  Although all the components of the network interoperate with this protocol, we might be using Wired Ethernet, or Wifi, or 4G or _something else_.

I ran this at home, using Wifi, which uses [IEEE 802.11 Protocol](https://en.wikipedia.org/wiki/IEEE_802.11), which allows my laptop to communicate with the router wirelessly, again using an agreed, standard protocol.  But even _this_ isn't the bottom, because this is actually probably specifying something like [MIMO-OFDM](https://en.wikipedia.org/wiki/MIMO-OFDM), giving specifications about frequencies of microwave radiation, antennas, multiplexing, error-correction codes and so on.

### TCP - Transmission Control Protocol

Anyway, the next thing that happens is this:

```
* TCP_NODELAY set
* Connected to google.com (216.58.204.78) port 80 (#0)
```

The second obvious [Abstraction](Complexity-Risk) going on here is that `curl` now believes it has _a TCP(https://en.wikipedia.org/wiki/Transmission_Control_Protocol) connection_.   The TCP connection abstraction gives us the surety that the packets get delivered in the right order, and retried if they go missing.  Effectively it _guarantees_ these things, or that it will have a connection failure if it can't make the guarantees. 

But, this is a fiction - TCP is built on the IP protocol, packets of data on the network.  So there are lots of packets floating around which say "this connection is still alive" and "I'm message 5 in the sequence" and so on in order to maintain this fiction.  But that means that the HTTP protocol can forget about this complexity.

### HTTP - Hypertext Transfer Protocol

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
- The lines starting `<HTML>` are now some HTML to display on the screen to tell the user that the page has moved.  In most browsers, you don't get to see this:  the browser will understand the meaning of the `301` error and redirect you to the location.  

### A Stack Of Protocols

Let's look at all the levels of abstraction we saw here:
 - `HTTP` Abstraction: Name-Value pairs, agreed on by both `curl` and Google, URLs and error codes.
 - `TCP` Abstraction:  The concept of a "connection" with guarantees about ordering and delivery.
 - `DNS` Abstraction:  Names of servers to IP Addresses.
 - `IP` Abstraction:  "Packets" with addresses and payloads.
 - `Wifi` Abstraction:  "Networks", 802.11 flavours.
 - Transmitters, Antennas, error correction codes, etc.
 
HTTP "stands on the shoulders of giants".  Not only does it get to use pre-existing protocols like TCP and DNS to make it's life easier, it got 802.11 "for free" when this came along and plugged into the existing IP protocol.  This is the key value of abstraction:  you get to piggy-back on _existing_ patterns, and use them yourself. 

What would HTTP look like without any of these protocols?  It's really difficult to envisage, but without the IP protocol it wouldn't even be compatible with the existing Internet. You'd need special support in all the hardware in all the networks on the planet, in much the same way as [IPv6](https://en.wikipedia.org/wiki/IPv6) (a new version of the IP protocol) does.  

## Abstraction

Machine-to-machine or process-to-process communication is based on _towers_ of abstraction, and, as we saw when using `curl`, these abstractions are somewhat "leaky" - we can see them at work.  But, by building using abstraction, we simplify the knowledge each protocol has to know about the others.  

But abstractions are _themselves_ a communication risk.  





## Human Communication

We need to dive further into the concept of the internal model to figure this out.

In the section on computers, it was all about shared, standardized abstractions - how does this apply to people?

- Computer systems heavily rely on standards.


https://en.wikipedia.org/wiki/World_view   https://en.wikipedia.org/w/index.php?title=Weltanschauung&redirect=no

https://en.wikipedia.org/wiki/Communication
https://en.wikipedia.org/wiki/Communication_accommodation_theory
https://en.wikipedia.org/wiki/Psycholinguistics
https://en.wikipedia.org/wiki/Umwelt

https://en.wikipedia.org/wiki/Relativism

## Abstraction, Modularization and Obfuscation


In a nutshell, the difficulty you have in getting the reality of a new situation into your mental model, because the reality is obfuscated from you.


Edit this up:

This is the issue Constantin and I have been bumping up against this week.  On the one hand, Spring Boot gives you enormous power to build applications quickly and easily.  I can build REST interfaces fast, and know they are standards-compliant.  On the other hand, he doesn’t know how it works.  A simple thing to say would be: RTFM.  But, there is a deeper problem.   Software systems, in abstracting away complexity, and human convention, also abstract away visibility of how they run and operate. 

As soon as you create a function, you are doing abstraction.  You are saying:  “I now have this operation. The details, I won’t mention again, but from now on, it’s called F.”  And suddenly, “F” hides.  It is working invisibly.  Things go on in “F” that people don’t necessarily need to understand.   There may be some documentation, or tacit knowledge around what “F” is, and what it does, but it’s not necessarily right.   

In Java, problems like this are handled by having the source code, and being able to dig down, statically, into it and figure out what’s going on.  However, Spring makes lots of use of runtime reflection, which stymies static analysis, and leaves Constantin wondering why he can’t just figure out what’s going on by inspecting it.  The extra power afforded by using runtime reflection is a double-edged sword:  you lose the ability to expand statically and say what the system is doing.  Static Java is insufficiently powerful to express all the kinds of abstractions that programmers want.  This is why runtime reflection exists.  (Lisps have Macros, which offer a similar level of escape-the-box power).

Extensibility

But, the underlying problem is still the one above, of definition vs reference.  So, I spend a lot of time hunting through other people’s code trying to figure out exactly how it works, and whether I can bend it to my will.  Because, this is another problem:

Since the function F is a black box, you can only use it in the way the author intended.  If you and the author have a different view about this, you’re going to be in trouble.  

This is why we end up with change requests, patch requests, feature requests:  we need for the original author to change the meaning of “F” to more suit what we want to use it for.  The advantage of this, is that everyone coalesces around a meaning and purpose for F, and we get reuse occurring.  


What is this notion of visibility, anyway?   I am thinking that what it means is that we could, by auditing the running systems, build something like the Current Operating Model of our business, without any effort whatsoever. 

What would we need, in order to be able to do this?

* We would need to specify processes, and say when they ran, and how.
* Maybe all processes would communicate what they were doing with a standard protocol.
* Inputs and Outputs would need to be known
* When do processes run?
* BPMN  / XPDL are all about describing processes.  But, for me this doesn’t really cut it. 

What would our running software need to tell us for this to happen?

Containment

Organising at higher levels than object.

Part of the problem might be that we don’t really have programming language abstractions that properly include containment.  

Does containment actually exist?  It makes sense to me to say that some software is running inside a JVM on a particular box.  And that the JVM process is contained on that box.  There seems to be a hierarchy of containment here, much like you’d get with geneos.  

Principle Of Locality

Networks and computers break locality. They allow anything to happen anywhere.  But, the human brain (and possibly the universe as a whole) are founded on this principle.  So, abstracting it away means that it becomes an unknowable quantity.  And, lack of observability might follow from this.

Common Taxonomy

This is something you see in the TOM:  the desire to end up with a single way of describing features.  Essentially, we really need a database that explains our software processes.  Building the model of the processes is basically building a database.  But, is there a fixed schema for this, or do you let people figure it out as they go?

schema: could also refer to an XML schema, which obviously, is also a database format.  What happened to XML databases, anyway?

What would this even mean?

Programming languages fail us because they encourage us to build software that is unknowable.  Could we invent a language that fixes this problem?

In the same way as we made Java a language without memory leaks, could we make a language for describing software in a way that makes it eminently knowable?

So far, I have not come across anything that does this.  But that doesn’t mean it’s impossible - just that it hasn’t even been attempted before.




- bandwidth:  higher == less communication risk


Manifests in other ways:

- people assume invisibility risk on projects/people that don't communicate much
- that can also lead to 

- internal models differ, and they don't recocnile easily.

- 3rd party contractors

- code is hard to read, but software is hard to use.

COmmunication Risk

Silo thinking - Conway's law.


https://en.wikipedia.org/wiki/Marketing_communications