We're going to approach **Boundary Risk** in a slightly sidelong manner.  Essentially, it is a type of [Complexity Risk](), and a type of [Communication Risk] _at the same time_. 

- Looking at boundary risk in the real world


Have a look at some physical tools, like a hammer, or spanner.  To look at them, they are probably _simple_ objects, obvious, strong and dependable.  Their entire behaviour is encapsulated in their form.  Now, if you have a drill or sander to hand, look at the design of this too.  From the outside, it is simple, perhaps with only one or two controls.  Inside, it is complex and contains a motor, perhaps a transformer, and is maybe made of a hundred different components.

But outside, the form is simplicity.   This is _ergonomics_.

Software is not constrained by physical ergonomics in the same way as a tool is.  But ideally, it should have conceptual ergonomics:  ideally, complexity is hidden away from the user.  This is the familiar concept of [Abstraction] we've already looked at.

The boundary of a system expands when you ask it to do a wide variety of things.   A drill does one thing well: it turns drill-bits at useful levels of torque for drilling holes and sinking screws.  But if you wanted it to also operate as a lathe, a sander or a strimmer (all basically mechanical things going round) you would have to sacrifice the ergonomic simplicity for a more complex interface, probably including adapters, extensions, handles and so on.

**Boundary Risk** of successful software systems grows with time.   This is because people are attracted to something useful, and want to extend it to new purposes (the Peter Principle tbd).  This is because not only is human need _fractal_ in complexity (you can always find areas of improvement) but there is [Red Queen Risk]:  our requirements evolve with time.\

Here's an example:   The number of classes in Java has increased tbd.

## Integration And Translation

Whenever complex systems arise, Boundary Risk occurs.  Boundary Risk could also be called Integration Risk.   The more complex the systems being integrated, the higher the risk.  If we are composing our system out of multiple dependencies, (which is the common approach) then effectively we are mitigating **Boundary Risk** as we do it.  

Let's take a look at a hypothetical project structure:

tbd.

  However, it might turn out t

In this design, we have included 3 dependencies, `a`, `b`, `c`.  As you can see, `Our Code` is orchestrating the flow of information between them:
 - First, it receives something from `a`, using the [Protocol] of `a`.
 - Then, it **Translates** this into the [Protocol] of `b`, retrieving something back from `b`.
 - Then, it **Translates** that into the [Protocol] of `c`.

From a [Cyclomatic Complexity] point of view, this is a very simple structure, with low [Complexity Risk].  But each of these systems presents us with **Boundary Risk**, because we don't know that we'll be able to make them _talk to each other_ properly:
 - Maybe `a` outputs dates, in a strange calendar format that `b` won't understand.
 - Maybe `b` works on some streaming API basis, that is incompatible with `c`.
 - Maybe `c` has a very complex API that is hard-to-understand (and [Mock]).

Since we are talking about **Translation**, we are clearly talking about [Communication Risk] again:  our task in **Integrating** all of these components is _to get them to talk to each other_.




When we import a dependency into the project, we have to deal with it's _surface area_. 

Let's consider some test cases:

- 
- Using `LeftPad` has low **Boundary Risk**:  it's a single function packaged into an `npm` module.  
- Using an entirely new `String` class in Java would come with boundary risk:  all of the existing Java APIs make use of the built-in `String` class, so conversion will be required.
- Using a database with a standard JDBC driver comes with _some_ **Boundary Risk**:  but the boundary is specified by a standard.  Although the standard doesn't cover every aspect of the behaviour of the database, it does minimize risk.
- Using a framework like `Spring` or `Redux` comes with higher boundary risk:  you are expected to yield to the framework's way of behaving.

Encapsulation is the main


## Boundary-Crossing

Sometimes, technology comes along that allows us to cross boundaries, and there are a number of ways that this can happen:

### [ASCII]

[ASCII] fixed the different-character-sets boundary risk by being a standard that others could adopt.   [UTF] continues this work to ensure we don't have to worry about **Translation** from one encoding to another.  This mitigates **Boundary Risk** by standards.

### Maven / Semver

Maven is a Java build tool in which you can specify a project declaratively, including details of all its dependencies.   Maven will then manage the downloading of these dependencies at compile time.   [Semantic Versioning] is a technique for ameliorating the problems of different dependencies being on different version numbers.

### C

The C programming language provided a way to get the same programs compiled against different architectures, therefore providing some _portability_ to code.  This essentially reduced the **Boundary Risk** of the system architectures (although this was a leaky abstraction)

### Java

Java provided something similar to C: instead of a _compile anywhere_ ethos, it was a _run anywhere_ ethos.  Java code could run anywhere where there was a [Java Virtual Machine] installed.   Again, this _abstracted_ away the details of the lower level architecture.

### Virtualization / Docker




## Complex Boundaries



Microservices:  using HTTP as the boundary.


Team City vs Jenkins.   - many of the concepts are the same, but it's a nightmare to map between the two.

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

