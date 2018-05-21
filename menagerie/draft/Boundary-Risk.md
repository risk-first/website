**Boundary Risk** is an emergent risk, which exists at the intersection of [Complexity Risk](Complexity-Risk), [Dependency Risk](Dependency-Risk) and [Communication Protocol Risk](Communication-Risk).  Because of that, it's going to take a bit of time to pick it apart and understand it, so we're going to build up to this in stages.

## Hand Tools

Have a look at some physical tools, like a hammer, or spanner.  To look at them, they are probably _simple_ objects, obvious, strong and dependable.  Their entire behaviour is encapsulated in their form.  Now, if you have a drill or sander to hand, look at the design of this too.  From the outside, it is simple, perhaps with only one or two controls.  Inside, it is complex and contains a motor, perhaps a transformer, and is maybe made of a hundred different components.

But outside, the form is simple, and designed for humans to use.   This is [ergonomics]:

tbd

## Software Tools

Software is not constrained by physical ergonomics in the same way as a tool is.  But ideally, it should have conceptual ergonomics:  ideally, complexity is hidden away from the user.  This is the familiar concept of [Abstraction] we've already looked at.  

That is, the tool should be as simple to use and understand as possible.  This is the **Principal Of Least Surprise**:

tbd.

In the same way as with a hand-tool, the bulk of the complexity of a software tool is hidden behind it's abstraction (or interface).  But, the more complex the _purpose_ of the tool, the more complex the interface will be.

The interface of a system expands when you ask it to do a wide variety of things.   A drill does one thing well: it turns drill-bits at useful levels of torque for drilling holes and sinking screws.  But if you wanted it to also operate as a lathe, a sander or a strimmer (all basically mechanical things going round) you would have to sacrifice the ergonomic simplicity for a more complex interface, probably including adapters, extensions, handles and so on.

So, we now have two types of complexity:
 - The inner complexity of the tool (how it works internally).
 - The complexity of the interface that we use.
 
We care about the former from the perspective of minimizing [Complexity Risk](Complexity-Risk) in our own codebase.  However, we care about the latter when we are using someone else's code as a [Dependency](Dependency-Risk) in our project.
 
## Integration And Translation

If we are going to use a software tool as a dependency, we have to use it's [API]():

tbd

Essentially, the API is a [protocol](Communication-Risk):  it's the language that the tool understands.  If you want to work with it, you have to use it's protocol, it won't come to you.   This is where **Boundary Risk** really starts.

Let's take a look at a hypothetical project structure:

tbd.

In this design, we have included 3 dependencies, `a`, `b`, `c`.  As you can see, `Our Code` is orchestrating the flow of information between them:
 - First, it receives something from `a`, using the [Protocol] of `a`.
 - Then, it **Translates** this into the [Protocol] of `b`, retrieving something back from `b`.
 - Then, it **Translates** that into the [Protocol] of `c`.
 
You could say we are doing **Integration** of the different dependencies, or **Translation** between those dependencies.  Since we are talking about **Translation**, we are clearly talking about [Communication Risk](Communication-Risk) again:  our task in **Integrating** all of these components is _to get them to talk to each other_.

From a [Cyclomatic Complexity] point of view, this is a very simple structure, with low [Complexity Risk](Complexity-Risk).  But each of these systems presents us with **Boundary Risk**, because we don't know that we'll be able to make them _talk to each other_ properly:
 - Maybe `a` outputs dates, in a strange calendar format that `b` won't understand.
 - Maybe `b` works on some streaming API basis, that is incompatible with `a`.
 - Maybe `c` runs on Windows, whereas `a` and `b` run on Linux.

## Boundary Risk Defined

Wherever we integrate complex dependencies, we have **Boundary Risk**.  The more complex the systems being integrated, the higher the risk.  When we choose software tools or libraries to help us build our systems, we are trading [Complexity Risk](Complexity-Risk) for **Boundary Risk**.  

We can mitigate attendant **Boundary Risk** by trying to choose the simplest dependencies for any job, and also the smallest number of dependencies.  Let's look at some examples:

- `mkdirp` is an `npm` module defining a single function.  This function takes a single string parameter and recursively creating directories.  Because the [protocol](Communication-Risk) is so simple, there is almost no **Boundary Risk**.
- Using a database with a standard JDBC driver comes with _some_ **Boundary Risk**:  but the boundary is specified by a standard.  Although the standard doesn't cover every aspect of the behaviour of the database, it does minimize risk, because if you are familiar with one JDBC driver, you'll be familiar with them all, and swapping one for another is relatively easy.
- Using a framework like [Spring](), [Redux]() or [Angular]() comes with higher boundary risk:  you are expected to yield to the framework's way of behaving throughout your application.  You cannot separate the concern easily, and swapping out the framework for another is likely to leave you with a whole new set of assumptions and interfaces to deal with.

So **Boundary Risk** is the attendant [Complexity](Complexity-Risk) required to integrate [Dependencies](Dependency-Risk).  Let's look at some examples.

## Examples

### Drupal and WordPress

On the face of it, [WordPress] and [Drupal] should be very similar:
 - They are both [Content Management Systems]
 - They both use a [LAMP (Linux, Apache, MySql, PHP) Stack]
 - They were both started around the same time.
 - They are both Open-Source, and have a wide variety of plugins.

However, in practice, they are very different.  This could be put down to different _design goals_:  it seems that [WordPress] was focused much more on usability, and an easy learning curve, whereas [Drupal] supported plugins for building things with complex data formats.  It could also be down to the _design decisions_:  although they both support [Plugins], they do it in very different ways.  

Alternatively, I could have picked on Team City and Jenkins here, or Maven and Gradle.  In all cases, the choice of plugins I have is dependent on the platform I've chosen, despite the fact that the platforms are solving pretty much the same problem.  If I want to 

This is a crucial determinant of **Boundary Risk**:  given the same problems, people will approach them and solve them in different ways.  And, this will impact the 'shape' of the abstractions, and the APIs that you end up with.  **Boundary Risk** emerges from the solution, as the solution gets more complex and opinionated.

In all these cases, 

Nowadays, the [WordPress] user base is huge:  approximately tbd 30% of all websites are hosted with [WordPress].  For [Drupal] it's tbd.  Because [WordPress] is so popular, it has attracted an [ecosystem] of plugin developers, who have bent the platform to more purposes, and expanded the boundary of it's functionality.  The [WordPress] APIs are now much more complex than they were originally, in order to support this vast ecosystem of plugins.

### Java 

When a tool or platform is popular, it is under pressure to increase in complexity.  This is because people are attracted to something useful, and want to extend it to new purposes.  This is known as _The Peter Principle_:  

 (the Peter Principle tbd).  
 
Java is a very popular platform.  Let's look at how the number of public classes (a good proxy for the boundary) has increased with each release:

![Java Public Classes By Version (3-9)](images/java_classes_by_version.png)

Why does this happen?  
 - More and more people are using Java for more and more things.  It's popularity begets more popularity.  
 - Human needs are _fractal_ in complexity.  You can always find ways to make an API _better_.
 - There is [Red Queen Risk](Feature-Risk):  our requirements evolve with time.   [Android Apps] weren't even a thing when Java 3 came out, for example, yet they are all written with this.  
 - The art of good design is to afford the greatest increase in functionality with the smallest increase in boundary possible, and this usually means [Refactoring](Coding).  But, this is at odds with [Backward Compatibility](Communication-Risk)

Each new version has a larger boundary than the one before, and this increases the API [Complexity Risk](Complexity-Risk) as there is more functionality to deal with.  But, on the plus side, this increased **Boundary Risk** is offset by the decrease in the [Complexity Risk] in programs depending on it:  all that extra functionality should mean you have less code to write, right?






Encapsulation is the main


## Boundary-Crossing

Sometimes, technology comes along that allows us to cross boundaries effectivey, and there are a number of ways that this can happen:

### [ASCII]

[ASCII] fixed the different-character-sets boundary risk by being a standard that others could adopt.   [UTF] continues this work to ensure we don't have to worry about **Translation** from one encoding to another.  This mitigates **Boundary Risk** by standards.

### Maven / Semver

Maven is a Java build tool in which you can specify a project declaratively, including details of all its dependencies.   Maven will then manage the downloading of these dependencies at compile time.   [Semantic Versioning] is a technique for ameliorating the problems of different dependencies being on different version numbers.

### C

The C programming language provided a way to get the same programs compiled against different architectures, therefore providing some _portability_ to code.  This essentially reduced the **Boundary Risk** of the system architectures (although this was a leaky abstraction)

### Java

Java provided something similar to C: instead of a _compile anywhere_ ethos, it was a _run anywhere_ ethos.  Java code could run anywhere where there was a [Java Virtual Machine] installed.   Again, this _abstracted_ away the details of the lower level architecture.

### Microservices

Microservices:  using HTTP as the boundary.



### Virtualization / Docker





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




Stuck In the Middle Pattern - Scala / Raj.

machine publishers 


Boundary Risk Defined
 - Exists at confluence of Dependency Risk, Complexity Risk and Protocol Risk
 - 
 - Complexity Of the Abstraction (abstractions still are complex).  
 - Translation and Integration
 - Boundary Risk Defined: boundaries that exist due to the dependencies' requirements.
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
 

- Object relational impedance mismatch
Boundary risk around companies, (Contracts), abstraction boundaries. 
bigger the organisation, the more risk that you don't know what's happening outside it

walled gardens
