![Draft](images/state/draft.png)

![Boundary Risk](images/generated/boundary-risk.png)

In the previous few sections on [Dependency Risk]() we've touched on [Boundary Risk](Boundary-Risk) several times, but now it's time to tackle it head-on and discuss this important type of risk.  

In terms of the [Risk Landscape](Risk-Landscape), [Boundary Risk](Boundary-Risk) is exactly as it says:  a _boundary_, _wall_ or other kind of obstacle in your way to making a move you want to make.   This changes the nature of the [Risk Landscape](), and introduces a maze-like component to it.  It also means that we have to make _decisions_ about which way to go, knowing that our future paths are constrained by the decisions we make.

![Dead-End Risk](images/generated/dead-end-risk.png)

And, as we discussed in [Complexity Risk](Complexity-Risk), there is always the chance we end up at a [Dead End](Complexity-Risk#dead-end-risk), and we've done work that we need to throw away.  In this case, we'll have to head back and make a different decision.

## Emergence Through Choice

[Boundary Risk](Boundary-Risk) is an emergent risk, which exists at the intersection of [Complexity Risk](Complexity-Risk), [Dependency Risk](Dependency-Risk) and [Communication Risk](Communication-Risk).  Because of that, it's going to take a bit of time to pick it apart and understand it, so we're going to build up to this in stages.

Let's start with an obvious example: Musical Instruments.  Let's say you want to learn to play some music.  There are a _multitude_ of options available to you, and you might choose an _uncommon_ instrument like a [Balalaika](https://en.wikipedia.org/wiki/Balalaika) or a [Theremin](https://en.wikipedia.org/wiki/Theremin), or you might choose a _common_ one like a piano or guitar.   In any case, once you start learning this instrument, you have picked up the three risks above:  

 - [Dependency Risk](Dependency-Risk) You have a _physical_ [Dependency]() on it in order to play music, so get to the music shop and buy one.
 - [Communication Risk](Communication-Risk):  You have to _communicate_ with the instrument in order to get it to make the sounds you want.  And you have [Learning Curve Risk](Communication-Risk#learning-curve-risk) in order to be able to do that.
 - [Complexity Risk](Complexity-Risk): As _a music playing system_, you now have an extra component (the instrument), with all the attendant complexity of looking after that instrument, tuning it, and so on.

Those risks are true for _any_ instrument you choose.  However, if you choose the _uncommon_ instrument like the [Balalaika](https://en.wikipedia.org/wiki/Balalaika), you have _worse_ [Boundary Risk](Boundary-Risk), because the _ecosystem_ for the balalaika is smaller.   It might be hard to find a tutor, or a band needing a balalaika.  You're unlikely to find one in a friend's house (compared to the piano, say).  

Even choosing the Piano has [Boundary Risk](Boundary-Risk).  By spending your time learning to play the piano, you're mitigating [Communication Risk]() issues, but _mostly_, your skills won't be transferrable to playing the guitar.  Your decision to choose one instrument over another cements the [Boundary Risk](Boundary-Risk): you're following a path on the [Risk Landscape](Risk-Landscape) and changing to a different path is _expensive_.

Also, it stands to reason that making _any_ choice is better than making _no_ choice, because you can't try and learn _all_ the instruments.  Doing that, you'd make no meaningful progress on any of them.

## Boundary Risk For Software Dependencies

Let's look at a software example now.

As discussed in [Software Dependency Risk](Software-Dependency-Risk), if we are going to use a software tool as a dependency, we have to accept the complexity of it's [Interface](Software-Dependency-Risk#interfaces), and learn the [protocol](Communication-Risk#protocol) of that interface.  If you want to work with it, you have to use it's protocol, it won't come to you.   

Let's take a look at a hypothetical system structure, in the accompanying diagram.  In this design, we have are transforming data from the `input` to the `output`.  But how should we do it?

 - We could go via `a`, using the [Protocols](Communication-Risk#protocol-risk) of `a`, and having a dependency on `a`.
 - We could go via `b`, using the [Protocols](Communication-Risk#protocol-risk) of `b`, and having a dependency on `b`. 
 - We could choose the middle route, and avoid the dependency, but potentially pick up lots more [Complexity Risk](Complexity-Risk) and [Schedule Risk](Schedule-Risk).
 
![Our System receives data from the `input`, translates it and sends it to the `output`.  But which dependency should we use for the translation, if any?](images/kite9/boundary-risk-ps.png)

This is a basic **Translation** job from `input` to `output`. Since we are talking about **Translation**, we are clearly talking about [Communication Risk](Communication-Risk) again:  our task in **Integrating** all of these components is _to get them to talk to each other_.

From a [Cyclomatic Complexity](Complexity-Risk#cyclomatic-complexity) point of view, this is a very simple structure, with low [Complexity](Complexity-Risk).  But the choice of approach presents us with [Boundary Risk](Boundary-Risk), because we don't know that we'll be able to make them _talk to each other_ properly:

 - Maybe `a` outputs dates in a strange calendar format that we won't understand.
 - Maybe `b` works on some streaming API basis, that is incompatible with the input protocol.
 - Maybe `a` runs on Windows, whereas our code runs on Linux.
 
... and so on.

## Boundary Risk Pinned Down

Wherever we integrate dependencies with complex [Protocols](Communication-Risk#protocol-risk), we potentially have [Boundary Risk](Boundary-Risk).  The more complex the systems being integrated, the higher the risk.  When we choose software tools or libraries to help us build our systems, we are trading [Complexity Risk](Complexity-Risk) for [Boundary Risk](Boundary-Risk). It is:

 - The _sunk cost_ of the [Learning Curve](Communication-Risk#learning-curve-risk) we've overcome to integrate the dependency, when it fails to live up to expectations.
 - The likelihood of, and costs of changing in the future.  
 - The rarity of alternatives (or, conversely, the risk of [Lock In](#vendor-lock-in)). 
 
![The tradeoff for using a library](images/kite9/software-dependency-library.png)

As we saw in [Software Dependency Risk](Software-Dependency-Risk), [Boundary Risk](Boundary-Risk) is a big factor in choosing libraries and services.  However, it can apply to any kind of dependency:

 - If you're depending on a [Process or Organisation](Process-Risk), they might change their products or quality, making the effort you put into the relationship worthless.
 - If you're depending on [Staff](Agency-Risk#staff-risk), they might leave, meaning your efforts on training them don't pay back as well as you hoped.
 - If you're depending on an [Event](Schedule-Risk) occuring at a particular time, you might have a lot of work to reorganise your life if it changes time or place.

## Avoiding Boundary Risk Now...

Because of [Boundary Risk](Boundary-Risk)'s relationship to [Learning Curve Risk](Communication-Risk#learning-curve-risk), we can avoid accreting it by choose the _simplest_ and _fewest_ dependencies for any job.  Let's look at some examples:

- `mkdirp` is an [npm](https://www.npmjs.com) module defining a single function.  This function takes a single string parameter and recursively creating directories.  Because the [protocol](Communication-Risk) is so simple, there is almost no [Boundary Risk](Boundary-Risk).
- Using a database with a [JDBC](https://en.wikipedia.org/wiki/Java_Database_Connectivity) driver comes with _some_ [Boundary Risk](Boundary-Risk):  but the boundary is specified by a standard.  Although the standard doesn't cover every aspect of the behaviour of the database, it does minimize risk, because if you are familiar with one JDBC driver, you'll be familiar with them all, and swapping one for another is relatively easy.
- Using a framework like [Spring](https://spring.io), [Redux](https://redux.js.org) or [Angular](https://angularjs.org) comes with higher [Boundary Risk](Boundary-Risk):  you are expected to yield to the framework's way of behaving throughout your application.  You cannot separate the concern easily, and swapping out the framework for another is likely to leave you with a whole new set of assumptions and interfaces to deal with.

## ... And In The Future

Unless your project _ends_, you can never be completely sure that [Boundary Risk](Boundary-Risk) _isn't_ going to stop you making a move you want.  For example:

 - `mkdirp` might not work on a new device's [Operating System](), forcing you to swap it out.
 - You might discover that the database you chose satisfied all the features you needed at the start of the project, but came up short when the requirements changed later on.
 - The front-end framework you chose might go out-of-fashion, and it might be hard to find developers interested in working on the project because of it.
 
This third point is perhaps the most interesting aspect of [Boundary Risk](Boundary-Risk):  how can we ensure that the decisions we make now are future-proof?  In order to investigate this further, let's look at three things:  Plugins, Ecosystems and Evolution (again).  

## Plugins, Ecosystems and Evolution

On the face of it, [WordPress](https://en.wikipedia.org/wiki/WordPress) and [Drupal](https://en.wikipedia.org/wiki/Drupal _should_ be very similar:

 - They are both [Content Management Systems](https://en.wikipedia.org/wiki/Content_management_system)
 - They both use a [LAMP (Linux, Apache, MySql, PHP) Stack](https://en.wikipedia.org/wiki/LAMP_(software_bundle))
 - They were both started around the same time (2001 for Drupal, 2003 for WordPress)
 - They are both Open-Source, and have a wide variety of [Plugins](https://en.wikipedia.org/wiki/Plug-in_(computing)).  That is, ways for other programmers to extend the functionality in new directions.

In practice, they are very different.  This could be put down to different _design goals_:  it seems that WordPress was focused much more on usability, and an easy learning curve, whereas Drupal supported plugins for building things with complex data formats.  It could also be down to the _design decisions_:  although they both support [Plugins](), they do it in very different ways.  

(Side note: I wasn't short of go-to examples for this.  I could have picked on [Team City](https://en.wikipedia.org/wiki/TeamCity) and [Jenkins](https://en.wikipedia.org/wiki/Jenkins_(software)) here ([Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) tools), or [Maven](https://en.wikipedia.org/wiki/Apache_Maven) and [Gradle](https://en.wikipedia.org/wiki/Gradle) (build tools).  All of these support [plugins](https://en.wikipedia.org/wiki/Plug-in_(computing)), and the _choice_ of plugins is dependent on which I've chosen, despite the fact that the platforms are solving pretty much the same problems. )

### Ecosystems and Systems

The quality, and choice of plugins for a given platform, along with factors such as community and online documentation is often called its [ecosystem](https://en.wikipedia.org/wiki/Software_ecosystem):

> "as a set of businesses functioning as a unit and interacting with a shared market for software and services, together with relationships among them" - [Software Ecosystem, _Wikipedia_](https://en.wikipedia.org/wiki/Software_ecosystem)

You can think of the ecosystem as being like the footprint of a town or a city, consisting of the buildings, transport network and the people that live there.  Within the city, and because of the transport network and the amenities available, it's easy to make rapid, useful moves on the [Risk Landscape](Risk-Landscape).  In a software ecosystem it's the same: the ecosystem has gathered together to provide a way to mitigate various different [Feature Risks](Feature-Risk) in a common way.

tbd:  talk about complexity within  the boundary.  (increased convenience?)


Ecosystem size is one key determinant of [Boundary Risk](Boundary-Risk):  a _large_ ecosystem has a large boundary circumference.  [Boundary Risk](Boundary-Risk) is lower because your moves on the [Risk Landscape](Glossary#risk-landscape) are unlikely to collide with it.  The boundary _got large_ because other developers before you hit the boundary and did the work building the software equivalents of bridges and roads and pushing it back so that the boundary didn't get in their way.  

In a small ecosystem, you are much more likely to come into contact with the edges of the boundary.  _You_ will have to be the developer that pushes back the frontier and builds the roads for the others.  This is hard work.

### Evolution

In the real world, there is a tendency for _big cities to get bigger_.  The more people that live there, the more services they provide, and therefore, the more immigrants they attract.  And, it's the same in the software world.  In both cases, this is due to the [Network Effect](https://en.wikipedia.org/wiki/Network_effect):

> "A network effect (also called network externality or demand-side economies of scale) is the positive effect described in economics and business that an additional user of a good or service has on the value of that product to others. When a network effect is present, the value of a product or service increases according to the number of others using it." - [Network Effect, _Wikipedia_](https://en.wikipedia.org/wiki/Network_effect)

You can see the same effect in the adoption rates of WordPress and Drupal, shown in the chart below.  Note: this is over _all sites on the internet_, so Drupal accounts for hundreds of thousands of sites.  In 2018, WordPress is approximately 32% of all websites.  For Drupal it's 2%.

![Wordpress vs Drupal adoption over 8 years, according to [w3techs.com](https://w3techs.com/technologies/history_overview/content_management/all/y)](images/wordpress-drupal-chart.png)

Did WordPress gain this march because it was better than Drupal?  That's arguable.  That it's this way round could be _entirely accidental_, and a result of [Network Effect](https://en.wikipedia.org/wiki/Network_effect).

And maybe, they aren't comparable:  Given the same problems, the people in each ecosystem have approached them and solved them in different ways.  And, this has impacted the 'shape' of the abstractions, and the protocols you use in each.  [Complexity](Complexity-Risk) _emerges_, and the ecosystem gets more complex and opinionated, much like the way in which the network of a city will evolve over time in an unpredictable way.

But, by now, if they _are_ to be compared side-by-side, WordPress _should be better_ due to the sheer number of people in this ecosystem who are...

 - Creating web sites.
 - Using those sites.
 - Submitting bug requests.
 - Fixing bugs.
 - Writing documentation.
 - Building plugins.
 - Creating features.
 - Improving the core platform.
 
But, there are two further factors to consider...

#### 1.  The Peter Principle

When a tool or platform is popular, it is under pressure to increase in complexity.  This is because people are attracted to something useful, and want to extend it to new purposes.  This is known as _The Peter Principle_:  

> "The Peter principle is a concept in management developed by Laurence J. Peter, which observes that people in a hierarchy tend to rise to their 'level of incompetence'." - [The Peter Principle, _Wikipedia_](https://en.wikipedia.org/wiki/Peter_principle)

Although designed for _people_, it can just as easily be applied to any other dependency you can think of.  Let's look at [Java](https://en.wikipedia.org/wiki/Java_(software_platform)) as an example of this.

Java is a very popular platform.  Let's look at how the number of public classes (a good proxy for the boundary) has increased with each release:

![Java Public Classes By Version (3-9)](images/java_classes_by_version.png)

Why does this happen?  

 - More and more people are using Java for more and more things.  It's popularity begets more popularity.  
 - Human needs are _fractal_ in [complexity](Complexity-Risk).  You can always find ways to make a dependency _better_  (For some meaning of better).
 - There is [Feature Drift Risk](Feature-Risk#feature-drift-risk):  our requirements evolve with time.   [Android Apps](https://en.wikipedia.org/wiki/Android_software_development) weren't even a thing when Java 3 came out, for example, yet they are all written in Java now, and Java has had to keep up.  

#### 2.  Backward Compatibility

As we saw in [Software Dependency Risk](Software-Dependency-Risk), The art of good design is to afford the greatest increase in functionality with the smallest increase in  complexity possible, and this usually means [Refactoring](Coding).  But, this is at odds with [Backward Compatibility](Communication-Risk#backward-compatibility).

Each new version has a greater functional scope than the one before (pushing back [Boundary Risk](Boundary-Risk)), making the platform more attractive to build solutions in.   But this increases the [Complexity Risk](Complexity-Risk) as there is more functionality to deal with.  

### Focus vs Overreach

![The Peter Principle:  Backward Compatibility + Extension leads to complexity and learning curve risk](images/kite9/boundary-risk-peter-principle.png)

You can see in the diagram the Peter Principle at play:  as more responsibility is given to a dependency, the more complex it gets, and the greater the learning curve to work with it.  Large ecosystems like Java react to [Learning Curve Risk](Communication-Risk#learning-curve-risk) by having copious amounts of literature to read or buy to help, but it is still off-putting.

Because [Complexity is Mass](Complexity-Risk#complexity-as-mass), large ecosystems can't respond quickly to [Feature Drift](Feature-Risk#feature-drift-risk).  This means that when the world changes, _new_ systems will come along to plug the gaps. 

This implies a trade-off:  
- Sometimes it's better to accept the [Boundary Risk](Boundary-Risk) innate in a smaller system than try to work within the bigger, more complex system.

example:  

In the late 80's and 90's there was a massive push towards _building functionality in the database_.  [Relational Database Managment Systems (RDBMSs)]() were all-in-one solutions, expensive platforms that you purchased and built _everything_ inside.  However, this dream didn't last:  

why?  (need some research here).

This  tbd

tbd. diagram here. 

## Beating Boundary Risk With Standards

Sometimes, technology comes along that allows us to cross boundaries, like a _bridge_ or a _road_.  This has the effect of making it easy to to go from one self-contained ecosystem to another.  Going back to WordPress, a simple example might be the [Analytics Dashboard]() which provides [Google Analytics](https://en.wikipedia.org/wiki/Google_Marketing_Platform) functionality inside WordPress.  

I find, a lot of code I write is of this nature:  trying to write the _glue code_ to join together two different _ecosystems_.  

Standards allow us to achieve the same thing, in one of two ways:

 - **Mode 1:  Abstract over the ecosystems.**  Provide a _standard_ protocol (a _lingua franca_) which can be converted down into the protocol of any of a number of competing ecosystems.
 - **Mode 2: Force adoption.** All of the ecosystems start using the standard for fear of being left out in the cold.  Sometimes, a standards body is involved, but other times a "de facto" standard emerges that everyone adopts.

Let's look at some examples: 

- [ASCII](https://en.wikipedia.org/wiki/ASCII): fixed the different-character-sets boundary risk by being a standard that others could adopt.  Before everyone agreed on ASCII, copying data from one computer system to another was a massive pain, and would involve some kind of translation.  [Unicode](https://en.wikipedia.org/wiki/Unicode) continues this work.  (**Mode 1**)

- [C](https://en.wikipedia.org/wiki/C_(programming_language)): The C programming language provided a way to get the same programs compiled against different CPU instruction sets, therefore providing some _portability_ to code.  The problem was, each different operating system would still have it's own libraries, and so to support multiple operating systems, you'd have to write code against multiple different libraries.  (**Mode 2**)

- [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) took what C did and went one step further, providing interoperability at the library level. Java code could run anywhere where Java was installed.   (**Mode 2**)

- [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol): As we saw in [Communication Risk](Communication-Risk#protocol-risk), the Internet Protocol (IP) is the _lingua franca_ of the modern internet.  However, at one period of time, there were many competing standards.  and IP was the ecosystem that "won", and was subsequently standardized by the [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force).  (**Mode 1**)


## Complex Boundaries

As shown in the above diagram, mitigating [Boundary Risk] involves taking on complexity.  The more [Protocol Complexity]() there is to bridge the two ecosystems, the more [Complex]() the bridge will necessarily be.  

<!--latex\begin{sidewaystable} -->

|Protocol Risk From A         |Protocol Risk        From B |Resulting Bridge Complexity  |Example                                                  |
|-----------------------------|----------------------------|-----------------------------|---------------------------------------------------------|
|Low                          |Low                         |Simple                       |Changing from one date format to another.                |
|High                         |Low                         |Moderate                     |Status Dashboard, tbd                                    |
|High                         |High                        |Complex                      |Object-Relational Mapping (ORM) Tools, (see below)       |
|High + Evolving              |Low                         |Moderate, Versioned          |Simple Phone App, e.g. note-taker or calculator          |
|Evolving                     |High                        |Complex                      |Modern browser (see below)                               |
|Evolving                     |Evolving                    |Very Complex                 |Google Search, Scala (see below)                         |

<!--latex\end{sidewaystable} -->

From examining the [Protocol Risk][br1] at each end of the bridge you are creating, you can get a rough idea of how complex the endeavour will be:

 - If it's low-risk at both ends, you're probably going to be able to knock it out easily.  Like translating a date, or converting one file format to another.
 - Where one of the protocols is _evolving_, you're definitely going to need to keep releasing new versions.   The functionality of a `Calculator` app on my phone remains the same, but new versions have to be released as the phone APIs change, screens change resolution and so on.
 - tbd

Where boundaries

tbd Trying to create a complex, fractal surface.  User requirements are fractal in nature.


### Object-Relational Mapping 

For example, [Object Relational Mapping (ORM)]() has long been a problem in software.  This is [Boundary-Crossing] software trying to bridge the gap between [Relational Databases]() and [Object-Oriented Languages]() like [Java].  Building a _general_ library that does this and is useful tbd said:

> 'Object/Relational Mapping is the Vietnam of Computer Science' - [Ted Neward](http://blogs.tedneward.com/post/the-vietnam-of-computer-science/)

This is a particularly difficult problem because the two ecosystems are so _rich_ and _complex_ in the functionality they expose.   But what are the alternatives? 

- Either back to building functionality within the database again, using stored procedures
- Building [Object Oriented Databases]().   It's interesting that neither of these really worked out. 
- Custom-building the bridge between the systems, one database call at-a-time in your own software.  

This is tbd hobson's choice, there is strong debate about whether [ORM]() is a worse trade of mitigated [Boundary Risk](Boundary-Risk) for attendant [Complexity Risk]() or not, and clearly will depend on your circumstances.

### Scala

Mapping between complex boundaries is expecially difficult if the [Boundaries]() are evolving and changing as you go.  This means in ecosystems that are changing rapidly, you are unlikely to be able to create lasting bridges between them.  Given that [Java]() is an old, large and complex ecosystem, you would imagine that it would have a slow-enough rate of change that abstracting technologies can be built on top of it safely.  

Indeed, we see that happening with [Clojure]() and [Kotlin](), two successful languages built on top of the [Java Virtual Machine (JVM)]() and offering compatibility with it.

[Scala] is arguably the first mainstream language that tried to do the same thing:  it is trying to build a [Functional Programming]() paradigm on top of the [Java Virtual Machine (JVM)](), which traditionally has an [Object Oriented]() paradigm.

The problem faced by [Scala]() is that Java didn't stay still:  as soon as they demonstrated some really useful features in Scala (i.e. stream-based processing), Java moved to include this new functionality too.  If they hadn't, the developer community would have slowly drifted away and used Scala instead.

So, in a sense, Scala is a _success story_: they were able to force change to Java.  But, once Java had changed, Scala was in the difficult position of having two sets of competing features in the platform:  the existing Scala streams, and the new Java streams.   

Clojure can interop with Java because on one side, the boundary is simple:  lisp is a simple language which lends itself to reimplementation within other platforms.   Therefore, the complexity of the bridge is _simple_:  all that needs to be provided is a way to call methods from Java to clojure.

Scala and Java have a complex relationship because Scala creates it's own complex boundary:  it is syntactically and functionally a broad language with lots of features.  And so is Java.  Mapping from one to the other is therefore 

for interop here.  Why is one so different from the other?

### Browsers

Web browsers are another suprisingly complex boundary.  They have to understand the following [protocols]():

 - [HTTP]() for loading resources (as we already reviewed in [Complexity Risk]()
 - [HTML]() Pages, for describing the content of web pages [Complexity Risk]()
 - Various image formats
 - [Javascript]() for web-page _interactivity_
 - [CSS]() for web-page styling, animation and so on.
 - ... and several others.
 
Handling any one of these protocols alone is a massive endeavour, so browsers are built on top of [Software Libraries]() which handle each concern, for example, [Networking Libraries](),  [Parsers]() and so on. 
 
One way of looking at the browser is that it is a _function_, where those elements listed above are the _inputs_ to the function, and the output is _what is displayed on the screen_, as shown in the image below.

tbd. browser as a function

There are three specific problems that make this a really complex boundary:

1.  All of the standards above are _evolving and improving_.  And, although [HTML5]() (say) is a reasonably well-specified standard, in reality, web pages tend not to adhere exactly to the letter of it.  People make mistakes in the HTML they write, and it's up to the browser to try and figure out what they _meant_ to write, rather than what they did write.  This makes the _input_ to the function extremely complex.

2.  Similarly, the _output_ of the function is not well defined either, and relies a lot on people's _subjective aesthetic judgement_.  For example, if you insert a `<table>` into an HTML page, the specification doesn't say anything about exactly how big the table should be, the size of it's borders, the spacing of the content and so on.  At least, initially, _none_ of this was covered by the [HTML Specification]().  The [CSS]() specification is over time clearing this up, but it's not _exactly nailed down_, which means...

3.  That because there are various different browsers ([Chrome](), [Safari](), [Internet Explorer](), [Microsoft Edge](), [Firefox]() etc.) and each browser has multiple different versions, released over a period of many years, you cannot, as a web-page developer know, _a priori_ what your web-page will look like to a user.

As developers trying to build software to be delivered over the internet, this is therefore a source of common [Boundary Risk](Boundary-Risk).  If you were trying to build software to work in _all browsers_ and _all versions_, this problem would be nearly insurmountable.  So, in order to tackle this risk, we do the following:

- We pick a small (but commonly used) subset of browsers, and use features from the specifications that we know commonly work in that subset.  
- We test across the subset.  Again, testing is _harder than it should be_, because of problem 2 above, that the expected output is not exactly defined.  This generally means you have to get humans to apply their _subjective aesthetic judgement_, rather than getting machines to do it.
- There is considerable pressure on browser developers to ensure consistency of behaviour across the implementations.  If all the browsers work the same, then we don't face the [Boundary Risk](Boundary-Risk) of having to choose just one to make our software work in.  However, it's not always been like this... 

## Vendor Lock-In

In the late 1990s, faced with the emergence of the nascent [World Wide Web](), and the [Netscape Navigator]() browser, [Microsoft]() adoped a strategy known as [Embrace and Extend]().  The idea of this was to subvert the [HTML]() standard to their own ends by _embracing_ the standard and creating their own browser ([Internet Explorer]()) and then _extending_ it with as much functionality as possible, which would then _not work_ in [Netscape Navigator]().  They then embarked on a campaign to try and get everyone to "upgrade" to [Internet Explorer]().   In this way, they hoped to "own" the Internet, or at least, the software of the browser, which they saw as analogous to being the "operating system" of the Internet, and therefore a threat to their own operating system, [Windows]().

There are two questions we need to ask about this, from the point-of-view of understanding [Boundary Risk](Boundary-Risk):

1.  Why was this a successful strategy?  
2.  Why did they stop doing this?

Let's look at the first question then.  Yes, it was a successful strategy.  In the 1990s, browser functionality was rudimentary.  Developers were _desperate_ for more features, and for more control over what appeared on their webpages.  And, [Internet Explorer (IE)]()	 was a free download (or, bundled with Windows).   By shunning other browsers and coding just for [IE](), developers pushed [Boundary Risk](Boundary-Risk) to the consumers of the web pages and in return mitigated [Dependency Fit Risk](): they were able to get more of the functionality they wanted in the browser.

It's worth pointing out, _this was not a new strategy_:  

 - Processor Chip manufacturers had done something similar in the tbds:  by providing features (instructions) on their processors that other vendors didn't have, they made their processors more attractive to system integrators.  However, since the instructions were different on different chips, this created [Boundary Risk](Boundary-Risk) for the integrators.  Intel and Microsoft were able to use this fact to build a big ecosystem around Windows running on Intel chips (so called, Wintel).
 - We have two main _mobile_ ecosystems:  [Apple]()'s [iOS] and [Google]()'s [Android](), which are both _very_ different and complex ecosystems with large, complex boundaries.  They are both innovating as fast as possible to keep users happy with their features.  Tools like [Xamarin]() exist which allow you to build 
 - Currently, [Amazon Web Services (AWS)]() are competing with [Microsoft Azure]() and [Google tbd] over building tools for [Platform as a Service (PaaS)]() (running software in the cloud).  They are both racing to build new functionality, but at the same time it's hard to move from one vendor to another as there is no standardization on the tools.
 - As we saw above, Database vendors tried to do the same thing with features in the database.  Oracle particularly makes money over differentiating itself from competitors by providing features that other vendors don't have.  Tom tbd provides a compelling argument for using these features thus:

> tbd.

The next question, is why did Microsoft _stop_ pursuing this strategy?  It seems that the answer is because they were made to.   tbd.
 
## Everyday Boundary Risks

[Boundary Risk](Boundary-Risk) occurs all the time.  Let's look at some ways:

- **Configuration**:  When software has to be deployed onto a server, there has to be configuration (usually on the command line, or via configuration property files) in order to bridge the boundary between the _environment it's running in_ and the _software being run_.  Often, this is setting up file locations, security keys and passwords, and telling it where to find other files and services.  
- **Integration Testing**:  Building a unit test is easy.  You are generally testing some code you have written, aided with a testing framework.  Your code and the framework are both written in the same language, which means low boundary risk.  But, to _integration test_ you need to step outside this boundary and so it becomes much harder.  This is true whether you are integrating with other systems (providing or supplying them with data) or parts of your own system (say testing the client-side and server parts together).  
- **User Interface Testing**:  If you are supplying a user-interface, then the interface with the user is already a complex, under-specified risky [protocol]().  Although tools exist to automate UI testing (such as [Selenium](), these rarely satisfactorily mitigate this [protocol risk]():  can you be sure that the screen hasn't got strange glitches, that the mouse moves correctly, that the proportions on the screen are correct on all browsers?  
- **Jobs**:  When you pick a new technology to learn and add to your CV, it's worth keeping in mind how useful this will be to you in the future.   It's career-limiting to be stuck in a dying ecosystem and need to retrain.
- **Teams**:  if you're given license to build a new product within an existing team, are you creating [Boundary Risk]() by using tools that the team aren't familiar with?
- **Organisatations**: Getting teams or departments to work with each other often involves breaking down [Boundary Risk]().  Often the departments use different tool-sets or processes, and have different goals making the translation harder.  tbd


### Boundary Risk and Change

You can't always be sure that a dependency now will always have the same guarantees in the future: 

- **Ownership changes**  [Microsoft]() buys [Github]().  What will happen to the ecosystem around github now?
- **Licensing changes**.  (e.g. [Oracle](http://oracle.com) buys **Tangosol** who make [Coherence](https://en.wikipedia.org/wiki/Oracle_Coherence) for example).  Having done this, they increase the licensing costs of Tangosol to huge levels, milking the [Cash Cow]() of the installed user-base, but ensuring no-one else is likely to use it.
- **Better alternatives become available**:  As a real example of this, I began a project in 2016 using [Apache Solr]().  However, in 2018, I would probably use [ElasticSearch](https://en.wikipedia.org/wiki/Elasticsearch).  In the past, I've built websites using Drupal and then later converted them to use WordPress.

## Patterns In Boundary Risk

In [Feature Risk](Feature-Risk#feature-drift-risk), we saw that the features people need change over time.  Let's get more specific about this: 
 
- Human need is [Fractal]().  This means that over time, software products have evolved to more closely map to human needs.   Software that would have delighted us ten years ago lacks the sophistication we expect today.
- Software and hardware are both is improving with time, due to evolution and the ability to support greater and greater levels of complexity.
- Abstractions build too.  As we saw in [Process Risk](), we _encapsulate_ earlier abstractions in order to build later ones.

If all this is true, the only thing we can expect in the future is that the lifespan of any ecosystem will follow an arc through creation, adoption, growth, use and finally either be abstracted over or abandoned.  

tbd diagram.

Although our discipline is a young one, we should probably expect to see "Software Archaeology" in the same way as we see it for biological organisms.  Already we can see the dead-ends in the software evolutionary tree:  COBOL and BASIC languages, CASE systems.  Languages like FORTH live on in PostScript, SQL is still embedded in everything

Boundary risk is _inside_ and _outside_

