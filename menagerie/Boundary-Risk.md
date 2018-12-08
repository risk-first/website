![Draft](images/state/for-review.png)

In the previous sections on [Dependency Risk](Dependency-Risk) we've touched on [Boundary Risk](Boundary-Risk) several times, but now it's time to tackle it head-on and discuss this important type of risk.  

In terms of the [Risk Landscape](Risk-Landscape), [Boundary Risk](Boundary-Risk) is exactly as it says:  a _boundary_, _wall_ or other kind of obstacle in your way to making a move you want to make.   This changes the nature of the [Risk Landscape](Glossary#risk-landscape), and introduces a maze-like component to it.  It also means that we have to make _decisions_ about which way to go, knowing that our future paths are constrained by the decisions we make.

As we discussed in [Complexity Risk](Complexity-Risk), there is always the chance we end up at a [Dead End](Complexity-Risk#dead-end-risk), and we've done work that we need to throw away.  In this case, we'll have to head back and make a different decision.

## Emergence Through Choice

![Boundary Risk is due to Complexity Risk, Dependency Risk and Communication Risk](images/generated/risks/boundary/boundary-risk.png)

[Boundary Risk](Boundary-Risk) is an emergent risk, which exists at the intersection of [Complexity Risk](Complexity-Risk), [Dependency Risk](Dependency-Risk) and [Communication Risk](Communication-Risk).  Because of that, it's going to take a bit of time to pick it apart and understand it, so we're going to build up to this in stages.

Let's start with an obvious example:  Say you want to learn to play some music.  There are a _multitude_ of options available to you, and you might choose an _uncommon_ instrument like a [Balalaika](https://en.wikipedia.org/wiki/Balalaika), or you might choose a _common_ one like a piano or guitar.   In any case, once you start learning this instrument, you have picked up the three risks from the diagram above:  

 - **[Dependency Risk](Dependency-Risk):** You have a _physical_ [Dependency](Dependency-Risk) on it in order to play music, so get to the music shop and buy one.
 - **[Communication Risk](Communication-Risk):**  You have to _communicate_ with the instrument in order to get it to make the sounds you want.  And you have [Learning Curve Risk](Communication-Risk#learning-curve-risk) in order to be able to do that.
 - **[Complexity Risk](Complexity-Risk):** As _a music playing system_, you now have an extra component (the instrument), with all the attendant complexity of looking after that instrument, tuning it, and so on.

Those risks are true for _any_ instrument you choose.  However, if you choose the _uncommon_ instrument you have _worse_ [Boundary Risk](Boundary-Risk), because the _ecosystem_ is smaller.   It might be hard to find a tutor, or a band needing a balalaika, and you're unlikely to find one in a friend's house (compared to the guitar, say).  

If you spend time learning to play the piano, you're mitigating [Communication Risk](Communication-Risk) issues, but _mostly_, your skills won't be transferable to playing the guitar.  Your decision to choose one instrument over another cements the [Boundary Risk](Boundary-Risk): you're following a path on the [Risk Landscape](Risk-Landscape) and changing to a different path is _expensive_.

Also, it stands to reason that making _any_ choice is better than making _no_ choice, because you can't try and learn _all_ the instruments.  Doing that, you'd make no meaningful progress on any of them.

## Boundary Risk For Software Dependencies

Let's look at a software example now.

As discussed in [Software Dependency Risk](Software-Dependency-Risk), if we are going to use a software tool as a dependency, we have to accept the complexity of it's [protocols](Communication-Risk#protocols).  You have to use it's protocol: it won't come to you.   

![Our System receives data from the `input`, translates it and sends it to the `output`.  But which dependency should we use for the translation, if any?](images/kite9/boundary-risk-ps.png)

Let's take a look at a hypothetical system structure, in the diagram above.  In this design, we have are transforming data from the `input` to the `output`.  But how should we do it?

 - We could use library 'a', using the [Protocols](Communication-Risk#protocol-risk) of 'a', and having a dependency on 'a'.
 - We could use library 'b', using the [Protocols](Communication-Risk#protocol-risk) of 'b', and having a dependency on 'b'. 
 - We could use neither, and avoid the dependency, but potentially pick up lots more [Codebase Risk](Complexity-Risk#codebase-risk) and [Schedule Risk](Scarcity-Risk#schedule-risk) because we have to code our own alternative to 'a' and 'b'.

The choice of approach presents us with [Boundary Risk](Boundary-Risk), because we don't know that we'll necessarily be successful with any of these options until we _go down the path_ of choosing one to see:

 - Maybe 'a' has some undocumented drawbacks that are going to hold us up.
 - Maybe 'b' works on some streaming API basis, that is incompatible with the input protocol.
 - Maybe 'a' runs on Windows, whereas our code runs on Linux.
 
... and so on.

## Boundary Risk Pinned Down
 
![The tradeoff for using a library](images/generated/risks/software-dependency/library.png)

Wherever we integrate dependencies with complex protocols, we potentially have [Boundary Risk](Boundary-Risk).  The more complex the dependencies being integrated, the higher the risk.  As shown in the above diagram, when we choose software tools, languages or libraries to help us build our systems, we are trading [Complexity Risk](Complexity-Risk) for [Boundary Risk](Boundary-Risk). It could include:

 - The _sunk cost_ of the [Learning Curve](Communication-Risk#learning-curve-risk) we've overcome to integrate the dependency, when it fails to live up to expectations.
 - The likelihood of, and costs of changing to something else in the future.  
 - The risk of [Lock In](#vendor-lock-in).

As we saw in [Software Dependency Risk](Software-Dependency-Risk), [Boundary Risk](Boundary-Risk) is a big factor in choosing libraries and services.  However, it can apply to any kind of dependency:

 - If you're depending on a [Process or Organisation](Process-Risk), they might change their products or quality, making the effort you put into the relationship worthless.
 - If you're depending on [Staff](Scarcity-Risk#staff-risk), they might leave, meaning your efforts on training them don't pay back as well as you hoped.
 - If you're depending on an [Event](Scarcity-Risk#schedule-risk) occurring at a particular time, you might have a lot of work to reorganise your life if it changes time or place.
 - If you are tied into a contract, you might have to pay for something despite no longer using it.

## Boundary Risk and Sunk Costs

Because of [Boundary Risk](Boundary-Risk)'s relationship to [Learning Curve Risk](Communication-Risk#learning-curve-risk), we can avoid accreting it by choose the _simplest_ and _fewest_ dependencies for any job.  Let's look at some examples:

- `mkdirp` is an [npm](https://www.npmjs.com) module defining a single function.  This function takes a single string parameter and recursively creating directories.  Because the [protocol](Communication-Risk) is so simple, there is almost no [Boundary Risk](Boundary-Risk).
- Using a particular brand of database with a [JDBC](https://en.wikipedia.org/wiki/Java_Database_Connectivity) driver comes with _some_ [Boundary Risk](Boundary-Risk):  but the boundary is specified by a standard.  Although the standard doesn't cover every aspect of the behaviour of the database, it does minimise risk, because if you are familiar with one JDBC driver, you'll be familiar with them all, and swapping one for another is relatively easy.
- Choosing a language or framework comes with higher [Boundary Risk](Boundary-Risk):  you are expected to yield to the framework's way of behaving throughout your application.  You cannot separate the concern easily, and swapping out the framework for another is likely to leave you with a whole new set of assumptions and interfaces to deal with.

## Lock-In & Ecosystems

Sometimes, one choice leads to another, and you're forced to "double down" on your original choice, and head further down the path of commitment.  

On the face of it, [WordPress](https://en.wikipedia.org/wiki/WordPress) and [Drupal](https://en.wikipedia.org/wiki/Drupal) _should_ be very similar:

 - They are both [Content Management Systems](https://en.wikipedia.org/wiki/Content_management_system)
 - They both use a [LAMP (Linux, Apache, MySql, PHP) Stack](https://en.wikipedia.org/wiki/LAMP_(software_bundle))
 - They were both started around the same time (2001 for Drupal, 2003 for WordPress)
 - They are both Open-Source, and have a wide variety of [Plugins](https://en.wikipedia.org/wiki/Plug-in_(computing)).  That is, ways for other programmers to extend the functionality in new directions.  

In practice, they are very different, as we will see.  The quality, and choice of plugins for a given platform, along with factors such as community and online documentation is often called its [ecosystem](https://en.wikipedia.org/wiki/Software_ecosystem):

> "Software Ecosystem is a book written by David G. Messerschmitt and Clemens Szyperski that explains the essence and effects of a "software ecosystem", defined as a set of businesses functioning as a unit and interacting with a shared market for software and services, together with relationships among them. These relationships are frequently underpinned by a common technological platform and operate through the exchange of information, resources, and artifacts." - [Software Ecosystem, _Wikipedia_](https://en.wikipedia.org/wiki/Software_ecosystem)

You can think of the ecosystem as being like the footprint of a town or a city, consisting of the buildings, transport network and the people that live there.  Within the city, and because of the transport network and the amenities available, it's easy to make rapid, useful moves on the [Risk Landscape](Risk-Landscape).  In a software ecosystem it's the same: the ecosystem has gathered together to provide a way to mitigate various different [Feature Risks](Feature-Risk) in a common way.

Ecosystem size is one key determinant of [Boundary Risk](Boundary-Risk):  a _large_ ecosystem has a large boundary circumference.  [Boundary Risk](Boundary-Risk) is lower in a large ecosystem because your moves on the [Risk Landscape](Glossary#risk-landscape) are unlikely to collide with it.  The boundary _got large_ because other developers before you hit the boundary and did the work building the software equivalents of bridges and roads and pushing it back so that the boundary didn't get in their way.  

In a small ecosystem, you are much more likely to come into contact with the edges of the boundary.  _You_ will have to be the developer that pushes back the frontier and builds the roads for the others.  This is hard work.

### Big Ecosystems Get Bigger

In the real world, there is a tendency for _big cities to get bigger_.  The more people that live there, the more services they provide, and therefore, the more immigrants they attract.  And, it's the same in the software world.  In both cases, this is due to the [Network Effect](https://en.wikipedia.org/wiki/Network_effect):

> "A network effect (also called network externality or demand-side economies of scale) is the positive effect described in economics and business that an additional user of a good or service has on the value of that product to others. When a network effect is present, the value of a product or service increases according to the number of others using it." - [Network Effect, _Wikipedia_](https://en.wikipedia.org/wiki/Network_effect)

![WordPress vs Drupal adoption over 8 years, according to [w3techs.com](https://w3techs.com/technologies/history_overview/content_management/all/y)](images/numbers/wordpress-drupal-chart.png)

You can see the same effect in the software ecosystems with the adoption rates of WordPress and Drupal, shown in the chart above.  Note: this is over _all sites on the internet_, so Drupal accounts for hundreds of thousands of sites.  In 2018, WordPress is approximately 32% of all web-sites.  For Drupal it's 2%.

Did WordPress gain this march because it was always _better_ than Drupal?  That's arguable.  Certainly, they're not different enough that WordPress is 16x better.  That it's this way round could be _entirely accidental_, and a result of [Network Effect](https://en.wikipedia.org/wiki/Network_effect).

But, by now, if they _are_ to be compared side-by-side, WordPress _should be better_ due to the sheer number of people in this ecosystem who are...

 - Creating web sites.
 - Using those sites.
 - Submitting bug requests.
 - Fixing bugs.
 - Writing documentation.
 - Building plugins.
 - Creating features.
 - Improving the core platform.
 
Is bigger always better? There are four further factors to consider...

#### 1.  The Peter Principle

When a tool or platform is popular, it is under pressure to increase in complexity.  This is because people are attracted to something useful, and want to extend it to new purposes.  This is known as _The Peter Principle_:  

> "The Peter principle is a concept in management developed by Laurence J. Peter, which observes that people in a hierarchy tend to rise to their 'level of incompetence'." - [The Peter Principle, _Wikipedia_](https://en.wikipedia.org/wiki/Peter_principle)

Although designed for _people_, it can just as easily be applied to any other dependency you can think of.  This means when things get popular, there is a tendency towards [Conceptual Integrity Risk](Feature-Risk#conceptual-integrity-risk) and [Complexity Risk](Complexity-Risk).  

![Java Public Classes By Version (3-9)](images/numbers/java_classes_by_version.png)

The above chart is an example of this: look at how the number of public classes (a good proxy for the boundary) has increased with each release.   

#### 2.  Backward Compatibility

As we saw in [Software Dependency Risk](Software-Dependency-Risk), The art of good design is to afford the greatest increase in functionality with the smallest increase in  complexity possible, and this usually means [Refactoring](https://en.wikipedia.org/wiki/Refactoring).  But, this is at odds with [Backward Compatibility](Communication-Risk#backward-compatibility).

Each new version has a greater functional scope than the one before (pushing back [Boundary Risk](Boundary-Risk)), making the platform more attractive to build solutions in.   But this increases the [Complexity Risk](Complexity-Risk) as there is more functionality to deal with.  

#### 3.   Focus vs Over-Reach

![The Peter Principle:  Backward Compatibility + Extension leads to complexity and learning curve risk](images/generated/risks/boundary/boundary-risk2.png)

You can see in the diagram above the Peter Principle at play:  as more responsibility is given to a dependency, the more complex it gets, and the greater the learning curve to work with it.  Large ecosystems like Java react to [Learning Curve Risk](Communication-Risk#learning-curve-risk) by having copious amounts of literature to read or buy to help, but it is still off-putting.

Because [Complexity is Mass](Complexity-Risk#complexity-as-mass), large ecosystems can't respond quickly to [Feature Drift](Feature-Risk#feature-drift-risk).  This means that when the world changes, _new_ systems will come along to plug the gaps. 

This implies a trade-off:  
- Sometimes it's better to accept the [Boundary Risk](Boundary-Risk) innate in a smaller system than try to work within the bigger, more complex system.

#### 4.   Ecosystem Bridges

![Boundary Risk is mitigated when a bridge is built between ecosystems](images/generated/risks/boundary/boundary-risk3.png)

Sometimes, technology comes along that allows us to cross boundaries, like a _bridge_ or a _road_.  This has the effect of making it easy to to go from one self-contained ecosystem to another.  Going back to WordPress, a simple example might be the [Analytics Dashboard](https://en-gb.wordpress.org/plugins/google-analytics-dashboard-for-wp/) which provides [Google Analytics](https://en.wikipedia.org/wiki/Google_Marketing_Platform) functionality inside WordPress.  

I find, a lot of code I write is of this nature:  trying to write the _glue code_ to join together two different _ecosystems_.  



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

As shown in the above diagram, mitigating [Boundary Risk](Boundary-Risk) involves taking on complexity.  The more [Protocol Complexity](Communication-Risk#protocol-risk) there is to bridge the two ecosystems, the more [Complex](Complexity-Risk) the bridge will necessarily be.  The above table shows some examples of this.

From examining the [Protocol Risk][Communication-Risk#protocol-risk] at each end of the bridge you are creating, you can get a rough idea of how complex the endeavour will be:

 - If it's low-risk at both ends, you're probably going to be able to knock it out easily.  Like translating a date, or converting one file format to another.
 - Where one of the protocols is _evolving_, you're definitely going to need to keep releasing new versions.   The functionality of a `Calculator` app on my phone remains the same, but new versions have to be released as the phone APIs change, screens change resolution and so on.

#### 5.  Standards

Standards allow us to achieve the same thing, in one of two ways:

1.  **Abstract over the ecosystems.**  Provide a _standard_ protocol (a _lingua franca_) which can be converted down into the protocol of any of a number of competing ecosystems.

 - [C](https://en.wikipedia.org/wiki/C_(programming_language)): The C programming language provided a way to get the same programs compiled against different CPU instruction sets, therefore providing some _portability_ to code.  The problem was, each different operating system would still have it's own libraries, and so to support multiple operating systems, you'd have to write code against multiple different libraries. 

 - [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) took what C did and went one step further, providing interoperability at the library level. Java code could run anywhere where Java was installed. 

2.  **Force adoption.** All of the ecosystems start using the standard for fear of being left out in the cold.  Sometimes, a standards body is involved, but other times a "de facto" standard emerges that everyone adopts.

 - [ASCII](https://en.wikipedia.org/wiki/ASCII): fixed the different-character-sets boundary risk by being a standard that others could adopt.  Before everyone agreed on ASCII, copying data from one computer system to another was a massive pain, and would involve some kind of translation.  [Unicode](https://en.wikipedia.org/wiki/Unicode) continues this work. 

 - [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol): As we saw in [Communication Risk](Communication-Risk#protocol-risk), the Internet Protocol (IP) is the _lingua franca_ of the modern Internet.  However, at one period of time, there were many competing standards.  and IP was the ecosystem that "won", and was subsequently standardised by the [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force).  This is actually an example of _both_ approaches:  as we saw in [Communication Risk](Communication-Risk), Internet Protocol is also an abstraction over lower-level protocols.
 
## Boundary Risk Cycle

![Boundary Risk Decreases With Bridges and Standards](images/generated/risks/boundary/cycle.png) 

Boundary Risk seems to progress in cycles.  As a piece of technology becomes more mature, there are more standards and bridges, and boundary risk is lower.  Once Boundary Risk is low and a particular approach is proven, there will be innovation upon this, giving rise to new opportunities for Boundary Risk.  Here are some examples:

 - Processor Chip manufacturers had done something similar in the 1970's and 1980's:  by providing features (instructions) on their processors that other vendors didn't have, they made their processors more attractive to system integrators.  However, since the instructions were different on different chips, this created [Boundary Risk](Boundary-Risk) for the integrators.  Intel and Microsoft were able to use this fact to build a big ecosystem around Windows running on Intel chips (so called, WinTel).  The Intel instruction set is nowadays a _de-facto_ standard for PCs.
 - In the late 1990s, faced with the emergence of the nascent World Wide Web, and the [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator) browser, [Microsoft](https://en.wikipedia.org/wiki/Microsoft) adoped a strategy known as [Embrace and Extend](https://en.wikipedia.org/wiki/Embrace_and_extend).  The idea of this was to subvert the HTML standard to their own ends by _embracing_ the standard and creating their own browser Internet Explorer and then _extending_ it with as much functionality as possible, which would then _not work_ in Netscape Navigator.  They then embarked on a campaign to try and get everyone to "upgrade" to Internet Explorer.   In this way, they hoped to "own" the Internet, or at least, the software of the browser, which they saw as analogous to being the "operating system" of the Internet, and therefore a threat to their own operating system, [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows).
 - We currently have just two main _mobile_ ecosystems (although there used to be many more):  [Apple's iOS](https://en.wikipedia.org/wiki/IOS) and [Google's Android](https://en.wikipedia.org/wiki/Android_(operating_system)), which are both _very_ different and complex ecosystems with large, complex boundaries.  They are both innovating as fast as possible to keep users happy with their features.  Bridging Tools like [Xamarin](https://en.wikipedia.org/wiki/Xamarin) exist which allow you to build applications sharing code over both platforms.
 - Currently, [Amazon Web Services (AWS)](https://en.wikipedia.org/wiki/Amazon_Web_Services) are competing with [Microsoft Azure](https://en.wikipedia.org/wiki/Microsoft_Azure) and [Google Cloud Platform](https://en.wikipedia.org/wiki/Google_Cloud_Platform) over building tools for [Platform as a Service (PaaS)](https://en.wikipedia.org/wiki/Platform_as_a_service) (running software in the cloud).  They are both racing to build new functionality, but at the same time it's hard to move from one vendor to another as there is no standardisation on the tools.
 

## Everyday Boundary Risks

Although ecosystems are one very pernicious type of boundary in software development, it's worth pointing out that [Boundary Risk](Boundary-Risk) occurs all the time.  Let's look at some ways:

- **Configuration**:  When software has to be deployed onto a server, there has to be configuration (usually on the command line, or via configuration property files) in order to bridge the boundary between the _environment it's running in_ and the _software being run_.  Often, this is setting up file locations, security keys and passwords, and telling it where to find other files and services.  
- **Integration Testing**:  Building a unit test is easy.  You are generally testing some code you have written, aided with a testing framework.  Your code and the framework are both written in the same language, which means low boundary risk.  But, to _integration test_ you need to step outside this boundary and so it becomes much harder.  This is true whether you are integrating with other systems (providing or supplying them with data) or parts of your own system (say testing the client-side and server parts together).  
- **User Interface Testing**:  If you are supplying a user-interface, then the interface with the user is already a complex, under-specified risky [protocol](Communication-Risk#protocol-risk).  Although tools exist to automate UI testing (such as [Selenium](https://en.wikipedia.org/wiki/Selenium_(software)), these rarely satisfactorily mitigate this [protocol risk](Communication-Risk#protocol-risk):  can you be sure that the screen hasn't got strange glitches, that the mouse moves correctly, that the proportions on the screen are correct on all browsers?  
- **Jobs**:  When you pick a new technology to learn and add to your CV, it's worth keeping in mind how useful this will be to you in the future.   It's career-limiting to be stuck in a dying ecosystem and need to retrain.
- **Teams**:  if you're given license to build a new product within an existing team, are you creating [Boundary Risk](Boundary-Risk) by using tools that the team aren't familiar with?
- **Organisations**: Getting teams or departments to work with each other often involves breaking down [Boundary Risk](Boundary-Risk).  Often the departments use different tool-sets or processes, and have different goals making the translation harder. 

## Likelihood of Change

Unless your project _ends_, you can never be completely sure that [Boundary Risk](Boundary-Risk) _isn't_ going to stop you making a move you want.  For example:

 - `mkdirp` might not work on a new device's Operating System, forcing you to swap it out.
 - You might discover that the database you chose satisfied all the features you needed at the start of the project, but came up short when the requirements changed later on.
 - The front-end framework you chose might go out-of-fashion, and it might be hard to find developers interested in working on the project because of it.
 
This third point is perhaps the most interesting aspect of [Boundary Risk](Boundary-Risk):  how can we ensure that the decisions we make now are future-proof?  You can't always be sure that a dependency now will always have the same guarantees in the future: 

- **Ownership changes**  Microsoft buys [GitHub](https://en.wikipedia.org/wiki/GitHub).  What will happen to the ecosystem around GitHub now?
- **Licensing changes**.  (e.g. [Oracle](http://oracle.com) buys **Tangosol** who make [Coherence](https://en.wikipedia.org/wiki/Oracle_Coherence) for example).  Having done this, they increase the licensing costs of Tangosol to huge levels, milking the [Cash Cow](https://en.wikipedia.org/wiki/Cash_cow) of the installed user-base, but ensuring no-one else is likely to use it.
- **Better alternatives become available**:  As a real example of this, I began a project in 2016 using [Apache Solr](https://en.wikipedia.org/wiki/Apache_Solr).  However, in 2018, I would probably use [ElasticSearch](https://en.wikipedia.org/wiki/Elasticsearch).  In the past, I've built web-sites using Drupal and then later converted them to use WordPress.
 
## Patterns In Boundary Risk

In [Feature Risk](Feature-Risk#feature-drift-risk), we saw that the features people need change over time.  Let's get more specific about this: 
 
- **Human need is [Fractal](https://en.wikipedia.org/wiki/Fractal):**  This means that over time, software products have evolved to more closely map to human needs.   Software that would have delighted us ten years ago lacks the sophistication we expect today.
- **Software and hardware are both improving with time:** due to evolution and the ability to support greater and greater levels of complexity.
- **Abstractions accrete too:**  As we saw in [Process Risk](Process-Risk), we _encapsulate_ earlier abstractions in order to build later ones.

The only thing we can expect in the future is that the lifespan of any ecosystem will follow the arc shown in the above diagram, through creation, adoption, growth, use and finally either be abstracted over or abandoned.  

Although our discipline is a young one, we should probably expect to see "Software Archaeology" in the same way as we see it for biological organisms.  Already we can see the dead-ends in the software evolutionary tree:  COBOL and BASIC languages, CASE systems.  Languages like FORTH live on in PostScript, SQL is still embedded in everything

Let's move on now to the last [Dependency Risk](Dependency-Risk) section, and look at [Agency Risk](Agency-Risk).

