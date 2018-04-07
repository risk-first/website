

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

