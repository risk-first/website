
In [Hierarchies]() we looked at a really common **Concept** - the Hierarchy - and discovered that there was no single implementation for this concept within the world of computing.  Instead, it was implemented over and over again, in different languages, data-formats, UIs and concepts.

In [Crystals-And-Code]() we looked at how a well-factored Information System could be built and maintained, and in this system, concepts would be _implemented once_.  But these systems were like crystals embedded in the wider landscape of the computing environment, and required much work to maintain.

Here, we're going to look at [Towers Of Abstraction]():  when we are modelling our concepts and building our Information Systems, we stand on the shoulders of giants, using libraries, frameworks and languages to make our lives easier.

But as we discussed in [Boundary Risk](/Boundary-Risk.md), using these abstractions comes at a cost:  ecosystem lock-in.  Once we have chosen our [Towers of Abstraction](), change is expensive.    

## Conceptual Portability

The problem is that because we define our **Concepts** on top of the Towers of Abstraction, we can't simply take those concepts and use them elsewhere.  Let's look at some examples:

 - Both GitHub and BitBucket have the concept of "User".  They are not the same.  Some of the properties of the User _are_ shared (I have a name in both).  Some of the properties are equivalent (I have a _profile picture_ in Github, and an _avatar_ in Bitbucket but they are different sizes, obviously). There are many more properties that are completely different.  Luckily, the concept of "Repo" _is_ the same in both, so I can move my code back and forth between them easily.
 
 - In both Java and .net there are lively open-source communities, and unit testing is a popular thing.  Most people in the Java world use [JUnit]().  Most people in the C# world use [NUnit]().  NUnit started off by porting the Junit concepts to .net, but has now diverged in it's own way.  However the basic concept of unit testing is shared, but as with "User", is subtly different across these two Towers of Abstraction.  
 
 - Slack, Symphony and Microsoft Teams are three different enterprise chat platforms.  They all share the concepts of _Rooms_, _Users_, _Bots_ and _Messages_ (as well as many other things).  However, they all have completely divergent APIs and indeed UIs for interacting with them.  The concepts are again _almost_ identical, but not exactly.  This is despite the fact that there is a now-dead standard called [IRC - Internet Relay Chat]() which could have solved this problem.
 
 - iOS and Android both share the concepts of "Apps" in a "Marketplace"... OK you get the idea now.
 
So conceptual portability is _hosed_ because there is no agreement on what the concepts _mean_.   
 
## Where Complexity Starts

In the above four examples, I have highlighted _ecosystem incompatibility_.  But you don't need to go that far.  

Most of the work I do in software development now is _stitching together various different open-source projects_.   That means that really, a lot of the time all I am doing is working out how to map one concept to another.  

Let's look at some examples of that:

- In my application, I might have the concept of a `Document`.  I might need to map this to my webserver's concept of `URL` somewhere within the application so that it can be loaded up in a browser, or to the concept of `Email` if I want to email the document to someone.

- To get data out of a relational database, I am going to need to use a database driver to turn database API calls into my code.  If I want the data to be represented in the native object-form of my programming language, I'll need to go the extra mile and use some [ORM]() software.  Again, this is just mapping RDBMS concepts to OO concepts.

- If I have to write data in multiple formats, I'll probably end up with some kind of ...



In [Complexity Risk](/Complexity-Risk.md) we reviewed various types of 



##### The very idea of "accidental complexity" appears to be caused by the fact that we don't consistently model any of the concepts we face.





in reconciling two systems, we built two more.


Building new abstractions on top of old is fine. The problem occurs when you want to move laterally across the 
tree.

- email example.

- cyclomatic complexity (vs. other kinds)


There's really no way around this problem.

How do humans do it though?  We manage to cope with different abstractions in our heads.

## Hierarchy Of Process

The impoverished hierarchy of process:  while individual programs (crystals) manage to build consistent hierarchies of process and data, on our desktops it isn't like this.  

If I perform a process across multiple applications, I am forced to cut-and-paste between them.  AFAICT, the only things supported by cut-and-paste are text, rich text and files.  If I cut and paste an _email_ in Outlook, it appears as a _file_ on the desktop.  There is no notion of any other abstraction shared between programs.  This is because the desktop itself has no common abstraction for _email_ or _contact_ or _project_ or _todo item_ or _customer_ which could be shared amongst the applications living in it.

Example of dealing with a PR in GitHub.

- hierarchy of process:  conscious to the unconscious

## Hierarchies Of Data





Computers are the bridge between the two!



## RPA







## Agile

Integration vs Agile - getting abstractions to work together is the bigger problem now.   This is where bots come in? 

Where complexity comes from - the _same_ concept built on two _different_ towers of abstraction.

Competing standards.

n^2 problem

