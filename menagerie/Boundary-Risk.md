![Under Construction](images/state/uc.png)

![Boundary Risk](images/generated/boundary-risk.png)

In the previous few sections on [Dependency Risk]() we've touched on [Boundary Risk]() several times, but now it's time to tackle it head-on and discuss this important type of risk.  

In terms of the [Risk Landscape](), [Boundary Risk]() is exactly as it says:  a _boundary_, _wall_ or other kind of obstacle in your way to making a move you want to make.   This changes the nature of the [Risk Landscape](), and introduces a maze-like component to it.  It also means that we have to make _decisions_ about which way to go, knowing that our future paths are constrained by the decisions we make.

![Dead-End Risk](images/generated/dead-end-risk.png)

And, as we discussed earlier, there is always the chance we end up at a [Dead End](Complexity-Risk#dead-end-risk), and we've done work that we need to throw away.  In this case, we'll have to head back and make a different decision.

## Emergence

[Boundary Risk]() is an emergent risk, which exists at the intersection of [Complexity Risk](Complexity-Risk), [Dependency Risk](Dependency-Risk) and [Communication Risk](Communication-Risk).  Because of that, it's going to take a bit of time to pick it apart and understand it, so we're going to build up to this in stages.

Let's start with an obvious example: Musical Instruments.  Let's say you want to learn to play some music.  There are a _multitude_ of options available to you, and you might choose an _uncommon_ instrument like a [Balalaika]() or tbd, or you might choose a _common_ one like a piano or guitar.   In any case, once you start learning this instrument, you have picked up the three risks above:  
 - [Dependency Risk]() You have a _physical_ [Dependency]() on it in order to play music, so get to the music shop and buy one.
 - [Communication Risk}():  You have to _communicate_ with the instrument in order to get it to make the sounds you want.  And you have [Learning Curve]() risk in order to be able to do that.
 - [Complexity Risk](): As _a music playing system_, you now have an extra component (the instrument), with all the attendant complexity of looking after that instrument, tuning it, and so on.

Those risks are true for _any_ instrument you choose.  However, if you choose the _uncommon_ instrument like the [Balalaika](), you have _worse_ [boundary risk](), because the _ecosystem_ for the balalaika is smaller.   It might be hard to find a tutor, or a band needing a balalaika.  You're unlikely to find one in a friend's house (compared to the piano, say).  

Even choosing a Piano has [Boundary Risk]().  By spending your time learning to play the piano, you're mitigating [Communication Risk]() issues, but _mostly_, your skills won't be transferrable to playing the guitar.  Your decision to choose one instrument over another cements the [Boundary Risk]: you're following a path on the [Risk Landscape]() and changing to a different path is _expensive_.

## Integration And Translation

Let's look at a software example now.

As discussed in [Software Dependency Risk](Software-Dependency-Risk), if we are going to use a software tool as a dependency, we have to accept the complexity of it's [Interface](Software-Dependency-Risk#interfaces). 

Essentially, the interface is a [protocol](Communication-Risk#protocol):  it's the language that the tool understands.  If you want to work with it, you have to use it's protocol, it won't come to you.   

Let's take a look at a hypothetical project structure:

tbd.

In this design, we have included 3 dependencies, `a`, `b`, `c`.  As you can see, `Our Code` is orchestrating the flow of information between them:
 - First, it receives something from `a`, using the [Protocol]() of `a`.
 - Then, it **Translates** this into the [Protocol]() of `b`, retrieving something back from `b`.
 - Then, it **Translates** that into the [Protocol]() of `c`.
 
You could say we are doing **Integration** of the different dependencies, or **Translation** between those dependencies.  Since we are talking about **Translation**, we are clearly talking about [Communication Risk](Communication-Risk) again:  our task in **Integrating** all of these components is _to get them to talk to each other_.

From a [Cyclomatic Complexity]() point of view, this is a very simple structure, with low [Complexity](Complexity-Risk).  But each of these systems presents us with [Boundary Risk](), because we don't know that we'll be able to make them _talk to each other_ properly:
 - Maybe `a` outputs dates, in a strange calendar format that `b` won't understand.
 - Maybe `b` works on some streaming API basis, that is incompatible with `a`.
 - Maybe `c` runs on Windows, whereas `a` and `b` run on Linux.

## Boundary Risk Defined

Wherever we integrate dependencies with complex [Interfaces], we have [Boundary Risk].  The more complex the systems being integrated, the higher the risk.  When we choose software tools or libraries to help us build our systems, we are trading [Complexity Risk](Complexity-Risk) for [Boundary Risk](). It is:

 - The _sunk cost_ of the [Learning Curve]() we've overcome to integrate the dependency.
 - The likelihood of, and costs of changing in the future.

We can mitigate attendant [Boundary Risk] by trying to choose the _simplest_ dependencies for any job, and also the smallest number of dependencies.  Let's look at some examples:

- `mkdirp` is an `npm` module defining a single function.  This function takes a single string parameter and recursively creating directories.  Because the [protocol](Communication-Risk) is so simple, there is almost no **Boundary Risk**.
- Using a database with a standard JDBC driver comes with _some_ **Boundary Risk**:  but the boundary is specified by a standard.  Although the standard doesn't cover every aspect of the behaviour of the database, it does minimize risk, because if you are familiar with one JDBC driver, you'll be familiar with them all, and swapping one for another is relatively easy.
- Using a framework like [Spring](), [Redux]() or [Angular]() comes with higher boundary risk:  you are expected to yield to the framework's way of behaving throughout your application.  You cannot separate the concern easily, and swapping out the framework for another is likely to leave you with a whole new set of assumptions and interfaces to deal with.

So **Boundary Risk** is the attendant [Complexity](Complexity-Risk) required to [Communicate]() with [Dependencies](Dependency-Risk).  Unless the project _ends_, (and you have nowhere else to go on the [Risk Landscape]()) you can never be completely sure that [Boundary Risk]() _isn't_ going to stop you making a move you want.  For example:
 - `mkdirp` might not work on a new device's [Operating System](), forcing you to swap it out.
 - You might discover that the database you chose satisfied all the features you needed at the start of the project, but came up short when the requirements changed later on.
 - The front-end framework you chose might go out-of-fashion, and it might be hard to find developers interested in working on the project because of it.

## Plugins, Ecosystems and Evolution

### Plugins 
Let's look at an example.

On the face of it, [WordPress]() and [Drupal]() should be very similar:
 - They are both [Content Management Systems]()
 - They both use a [LAMP (Linux, Apache, MySql, PHP) Stack]()
 - They were both started around the same time.
 - They are both Open-Source, and have a wide variety of plugins.

In practice, they are very different.  This could be put down to different _design goals_:  it seems that [WordPress]() was focused much more on usability, and an easy learning curve, whereas [Drupal]() supported plugins for building things with complex data formats.  It could also be down to the _design decisions_:  although they both support [Plugins](), they do it in very different ways.  

(Side note: I wasn't short of go-to examples for this.  I could have picked on [Team City]() and [Jenkins]() here ([Continuous Integration]() tools, or [Maven]() and [Gradle]() (Java build tools).  In all cases, the choice of plugins I have is dependent on the platform I've chosen, despite the fact that the platforms are solving pretty much the same problem. )

### Ecosystems

The quality, and choice of [plugins]() for a given platform, along with factors such as community and online documentation is often called its [ecosystem]:

tbd

You can think of the ecosystem as being like the shape of a town or a city.  Within it, it's easy to make moves on the [Risk Landscape](), you just pick up the plugin and go.  It's like a transport system.    

Ecosystem size is a key determinant of boundary risk:  in a _large_ ecosystem, the diameter of the [boundary] is large, so [Boundary Risk]() is low.  Your moves on the [Risk Landscape](Glossary#risk-landscape) are unlikely to collide with it.  The boundary _got large_ because other developers before you hit the boundary and did the work building bridges, roads and pushing it back so that the boundary didn't get in their way.  In a small ecosystem, you are much more likely to come into contact with the edges of the boundary.  _You_ will have to be the developer that pushes back the frontier and builds the roads for the others.  This is hard work.

### Evolution

This is a crucial determinant of **Boundary Risk**:  given the same problems, people will approach them and solve them in different ways.  And, this will impact the 'shape' of the abstractions, and the APIs that you end up with.  [Complexity] emerges from the solution, as the solution gets more complex and opinionated, much like the way in which the network of a city will evolve over time in an unpredictable way.

In the real world, there is a tendency for _big cities to get bigger_.  The more people that live there, the more services they provide, and therefore, the more immigrants they attract.  And, it's the same in the software world.  In both cases, this is due to the [Network Effect]:

tbd.

You can see the same effect in the adoption rates of [Wordpress]() and [Drupal]().  

tbd.  graphs of adoption

Nowadays, the [WordPress]() user base is huge:  approximately tbd 30% of all websites are hosted with [WordPress]().  For [Drupal]() it's tbd.  That it's this way round could be entirely accidental.  Is this because [WordPress]() is _better_ than [Drupal]()? That's arguable.  But, by now _it should be_: there are so many people working on this platform:
 - Submitting bug requests
 - Fixing bugs
 - Writing documentation
 - Building plugins
 - Creating features
 
... that by now _it should be miles better_ than [Drupal]().  But, there are other things to consider...

## The Peter Principle

When a tool or platform is popular, it is under pressure to increase in complexity.  This is because people are attracted to something useful, and want to extend it to new purposes.  This is known as _The Peter Principle_:  

 (the Peter Principle tbd).  
 
Let's look at [Java] as an example of this.

Java is a very popular platform.  Let's look at how the number of public classes (a good proxy for the boundary) has increased with each release:

![Java Public Classes By Version (3-9)](images/java_classes_by_version.png)

Why does this happen?  
 - More and more people are using Java for more and more things.  It's popularity begets more popularity.  
 - Human needs are _fractal_ in [complexity]().  You can always find ways to make an [API]() _better_.
 - There is [Red Queen Risk](Feature-Risk):  our requirements evolve with time.   [Android Apps]() weren't even a thing when Java 3 came out, for example, yet they are all written in Java now, and Java has had to keep up.  

## Backward Compatibility and Emergent Complexity

As we saw in [Software Dependency Risk](), The art of good design is to afford the greatest increase in functionality with the smallest increase in complexity possible, and this usually means [Refactoring](Coding).  But, this is at odds with [Backward Compatibility](Communication-Risk).

Each new version has a larger [boundary] than the one before (pushing back [Boundary Risk](), and making the platform more attractive to build solutions in, but this increases the API [Complexity Risk](Complexity-Risk) as there is more functionality to deal with.  The downside is [Learning Curve]() and other [Communication Risk](), and you can see that large ecosystems like [Java]() react to this by having copious amounts of literature to read or buy to help.

I spent many years living in London.  It was fun, and easy to travel round, but it was highly [Complex]() and there were plenty of downsides like the cost of travel and housing, and pollution.   Sometimes, it felt like the design of the city was out to get you: the roads were too narrow, the river was always in the way and the Underground carriages were too small.  Wouldn't it be better to start again?

TALK ABOUT EVOLUTION

### Java 

As with a real city, complexity, communication risk.




 



java is popular because it defeated boundary risk.  js does the same.



Encapsulation is the main


## Boundary-Crossing

Sometimes, technology comes along that allows us to cross boundaries effectivey, and there are a number of ways that this can happen:

### [ASCII]()

[ASCII]() fixed the different-character-sets boundary risk by being a standard that others could adopt.   [UTF]() continues this work to ensure we don't have to worry about **Translation** from one encoding to another.  This mitigates **Boundary Risk** by standards.

### Maven / Semver

Maven is a Java build tool in which you can specify a project declaratively, including details of all its dependencies.   Maven will then manage the downloading of these dependencies at compile time.   [Semantic Versioning]() is a technique for ameliorating the problems of different dependencies being on different version numbers.

### C

The C programming language provided a way to get the same programs compiled against different architectures, therefore providing some _portability_ to code.  This essentially reduced the **Boundary Risk** of the system architectures (although this was a leaky abstraction)

### Java

Java provided something similar to C: instead of a _compile anywhere_ ethos, it was a _run anywhere_ ethos.  Java code could run anywhere where there was a [Java Virtual Machine]() installed.   Again, this _abstracted_ away the details of the lower level architecture.

### Microservices

Microservices:  using HTTP as the boundary.



### Virtualization / Docker




used to be boundary risk was the risk that problems occur because you can't test across boundaries.


## Complex Boundaries



.   - many of the concepts are the same, but it's a nightmare to map between the two.

However, sometimes, tech comes along to bridge the gap: C, Java, Containerization (Docker)

Vendor Lock-In

Trying to create a complex, fractal surface.  User requirements are fractal in nature.





Executable Boundary Risk


- protocols issue - this is boundary risk too.


Add configuration risk

Should this be called contextual risk?

deployment risk

long command line

Testing in Production

platforms - compiling code for different platofrms, the jvm.  javascript, other languages

protocol risk


One of the ways to sort boundary risk is with abstraction, but this doesn't work with languages - is the surface of a langauge too large?

- some languages compile back ot javascript

C# and Java, for example.

They deliberately are different in order to accentuate boundary risk/

Boundary risk moves on. e.g. the JVM abstracted away _platform_.  IP protocol abstracted away a lot of different network types.

we used to worry about disks, and file formats and even ASCII wasn't a common format, everyone used something different.

Now, the boundary is AWS/Azuretc .  Databases are still different _a bit_, but you're foolish for using the weird features.  Tom's argument
for using Oracle  features.

Should I abstract away a technology?  Does this gain anything


Boundary risk - filesystems and databases.

SQL, Linux, Java, Bash, Servlets, Junit, Gradle, Maven, Team City, HTML, CSS, Browsers, Javascript, SVN, GIT..

Why this?

It's like a fitness landscape.  We're evolving 

Evolution of dependencies

Red Queen Risk again

boundary risk is also like dead-end risk.. consider the point from the risk landscape

But originally, boundary risk referred to the fact that the boundaries were around the software.  

this kind of made sense: running on your pc would be different than running on an xbox, linode etc.
Muneer building the extractor, using ASP.net.. turned out we don't deploy .net/ASP only Java



So what exactly is boundary risk?

The incompatibilities of different worlds... that can't be spanned.

phantomjs / chrome headless etc.

the boundary can be too complex to overcome

java/scala

Sometimes the boundary is simple, other times complex
sometimes its complexity is hidden

Clojure can interop with Java because the complexity of the boundary is _simple_:  all that needs to be provided is a way to call methods on java
objects and get return values.

Scala and Java have a complex relationship because Scala creates it's own complex boundary, and so does Java.  It's _almost_ impossible
for interop here.  Why is one so different from the other?


The boundaries really exist:  building things in a java-only world means less boundary risk
Emacs is entirely written in lisp, and your extensions to it are also lisp.   This means less boundary risk, which in turn makes some 
tasks easier to do




Clearly, from this analysis, 

Second, you can't always be sure that a dependency now will always have the same guarantees in the future: 
- **Ownership changes** (e.g. [Oracle](http://oracle.com) buys [Sun](http://sun.com) who own [Java](https://en.wikipedia.org/wiki/Java_%28programming_language%29) for example)
- **Licensing changes**.  (e.g. [Oracle](http://oracle.com) buys **Tangosol** who make [Coherence](https://en.wikipedia.org/wiki/Oracle_Coherence) for example)
- Security updates not applied.
- **Better alternatives become available**:  As a real example of this, I began a project in 2016 using [Apache Solr]().  However, in 2018, I would probably use [ElasticSearch](https://en.wikipedia.org/wiki/Elasticsearch).  In the past, I've built websites using [Drupal]() and then later converted them to use [Wordpress]().



Stuck In the Middle Pattern - Scala / Raj.

machine publishers 
## Versioning


CAREER BOUNDARY RISK - lotus notes
TESTING BOUNDARY RISK

Need to rethink this:  
 - it's about decision making.  


Boundary Risk Defined
 - Exists at confluence of Dependency Risk, Complexity Risk and Protocol Risk
 - Complexity Of the Abstraction (abstractions still are complex).  Learning Curve, Communication.
 - Translation and Integration
 - Boundary Risk Defined: boundaries that exist due to the dependencies' requirements / apis.
 - Emergent Boundary Risk (discussion of surface areas)
 
Some Examples
 - Wordpress / Drupal:  boundary around each ecosystem
 - Team City / Jenkins:  
 - Java API Surface Area 
   - C#
 - AWS / Azure Etc. (Vendor Lock-In)
   - How Containerization mitigates boundary risk
   - Tom's Argument for using Oracle features
 
Boundary Risk Mitigated
 - Standards and Common Protocols (JDBC, ASCII, XML, JSON, HTTP (Microservices))
 - New Abstractions (Maven, Languages: C, Java)
 - Translation Services (Docker, Virtualization)
 
Wicked Problems In Boundary Risk
 - Scala (type system)
 - Browser Testing (then, testing generally)
 - Testing Across Boundaries In General
 - Crossing Boundaries
 
 

- Object relational impedance mismatch
Boundary risk around companies, (Contracts), abstraction boundaries. 
bigger the organisation, the more risk that you don't know what's happening outside it

walled gardens
