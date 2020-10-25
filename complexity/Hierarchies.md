---
title: Hierarchies
description: Hierarchies are the wheel we're happy to re-invent over and over and over again.
url: https://riskfirst.org/complexity/Hierarchies

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/redesign/risks/complexity_risk.svg">Hierarchies</image-artifact>'
categories:
 - Complexity
order: 1
---

# Hierarchies

##### "Hierarchies are the wheel we're happy to re-invent over and over and over again."

Have you noticed just how prevalent the idea of _heirarchy_ is in software?  By hierarchy, I mean a general pattern of _connectedness_, where a _parent_ has some _children_, who, in turn, may each have some further children, and so on.

This is a really popular pattern.  But what's odd about it is that we seem to re-invent it over and over again in software.  

In this article, I am going to look at the two basic types of hierarchy, _compositional_ and _subsumptive_, explaining what these are and giving examples of where we see them whether that's in programming languages, computing generally or other areas of life.

The chief claim of this article is that our inability to consistently generalise the pattern of hierarchy has been a _lost opportunity_.  But nevertheless, we'll look at some attempts to abstract hierarchy in software systems, and talk about what is lost by not having a single abstraction for hierarchy.

So let's start with...

## A Javascript Example

Here's some code from the [ChartJS](https://www.chartjs.org/docs/latest/#creating-a-chart) website I was looking at, just the other day:

```html
<canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});
</script>
```

We've got...

 - A hierarchy of **tags** such as `<canvas>`, `<script>` and so on.
 - We have **attributes** on the tags, like `width` and `height`.  
 - Within the `<script>` tag, we have a hierarchy of **statements**, where we assign the variables`ctx` and `myChart` in order.
 - A hierarchy of method calls on **objects**, such as: `document.getElementById('myChart').getContext('2d')`
 - A nested hierarchy of **maps** (delimited by `{` and `}`) and **arrays** (delimited by `[` and `]`), starting with `{ type: 'bar'...`
 - Within those arrays, we have **strings**, consisting of characters, delimited by `'` here, such as `'rgba(153, 102, 255, 1)'`.
 - But actually, that's another function call, which uses brackets to separate the **name** of the function `rgba` from it's parameters. 
 - And _those_ **parameters** are separated by `,`s...
 - And the `Chart` constructor is defined in a different `package`, which is a collection of `file`s in a repository (maybe [npm](https://www.npmjs.com) or [jsdelivr](https://www.jsdelivr.com).
 - Some hierarchy is _indicated_ using indentation of the code.  Some isn't.
 
What is the take-away from this? **We heavily use syntax to indicate different types of hierarchies within software.**  Just look at all the different ways it happens above:  brackets, single-quotes, curly brackets, angle-brackets and tags, square brackets, double-quotes, commas and semi-colons.  

## A LISP Example

The above is an extreme example: there's a lot of different syntax going on in that ChartJS file!  At the other extreme, LISP code looks a bit like this:

```lisp
(defun fibonacci (N)
  "Compute the N'th Fibonacci number."
  (if (or (zerop N) (= N 1))
      1
    (+ (fibonacci (- N 1)) (fibonacci (- N 2))))) 
```

Hierarchy is really managed by just three things here:

 - spaces, to split up children
 - quotation marks (`"`), to delineate strings and
 - Parentheses (`(` `)`) which are capable of creating nested hierarchies.

## A Desktop Example

On the desktop, hierarchy is also re-invented multiple times.

![Navigating Hierarchies](/images/estimates/desktop.png)

Have a look at the image above.  Let's go through the different types of hierarchy here:

- At the desktop level, I have several programs running.  I can tab between them using `CMD+Tab`, or I can see all the options listed vertically on the right hand side.
- One level down in the hierarchy, in Safari, Eclipse and VS-Code and Terminal, I have tabs, shown horizontally across the top of the window.  Tabs _look_ different in each of these, but navigating between those uses `CTRL+Tab`.
- I might also have multiple _windows_ in these applications (each with tabs inside).  It's not clear how I navigate in this level of the hierarchy.
- Further, I also have a directory trees in VS-Code and Eclipse, both of which display the files/directories hierarchy vertically with indents.  Again, different navigation semantics for each.
- Finally in Terminal, I can move up/down directory trees with the `cd` command.

So at the very least, we have a two hierarchies: applications/windows/tabs and directories/files.  You could say that the take-away from this example is that we use **looks** and **behaviour** to indicate these different types of hierarchy.

## Hierarchies Everywhere

Hierarchies are the wheel we're happy to re-invent over and over and over again!  What about:

- Classes in a Package
- Packages in a namespace
- Repos in a Project
- Projects within a GitHub organisation
- Servers in a Data Centre
- Teams of People
- Countries, Counties, Towns etc.

We build hierarchies not just into software, but all over our societies.  They seem fundamental to how we understand things.   As well as [Family Trees](https://en.wikipedia.org/wiki/Family_tree) and [Organisation Charts](https://en.wikipedia.org/wiki/Organizational_chart), we use hierarchies everywhere.  For example, biologists often break down the complexity of the human body like this:

 - **Organelles** - such as [Mitochondria](https://en.wikipedia.org/wiki/Mitochondrion), contained in...
 - **Cells** - such as blood cells, nerve cells, skin cells in the [Human Body](https://en.wikipedia.org/wiki/List_of_distinct_cell_types_in_the_adult_human_body), inside...
 - **Organs** - like hearts livers, brains etc, held within...
 - **Organ Systems** - like the circulatory system, the immune system, the respiratory system, contained in...
 - **Organisms** - like you and me.
 
Wikipedia calls this a _compositional containment hierarchy_:

> "The compositional hierarchy that every person encounters at every moment is the hierarchy of life. Every person can be reduced to organ systems, which are composed of organs, which are composed of tissues, which are composed of cells, which are composed of molecules, which are composed of atoms. In fact, the last two levels apply to all matter, at least at the macroscopic scale. Moreover, each of these levels inherit all the properties of their children. " - [Hierarchy, _Wikipedia_](https://en.wikipedia.org/wiki/Hierarchy#Nested_hierarchy)

## The Curse Of Reinvention

Sadly in the world of computing, there is no common abstraction for all of these types of hierarchy, we have to learn different APIs for operating across them all.  There's no way to observe that since _files_ in a _directories_ is a hierarchy, and _tabs_ in a _browser_ is also a hierarchy there should be a common way of navigating that structure.  

Why do we keep re-inventing the same thing?  Is there a _reason_ for this lack of abstraction, or is it an accident?

## Syntax Trees

One potential reason is _syntactic sugar_.

In a strongly-typed language like Java, for example we might have this:

```java
public class Numbers {
    public static void main(String[] args) {
         System.out.print("This is a number: " + 4);
    }
}
```

The Eclipse IDE has an _AST View_ which you can install, which allows you to see the compositional hierarchy of this Java code _as the Eclipse compiler understands it._  However, this is an _excerpt_ for the above program. The full hierarchical view is a lot larger ([6107 lines, in fact](ast.txt)). 

```
> type binding: org.riskfirst.website.preprocessor.Numbers
  BODY_DECLARATIONS (1)
    > method binding: Numbers.main(String[])
      BODY
        STATEMENTS (1)
          EXPRESSION
            MethodInvocation [121+42]
              > method binding: PrintStream.print(String)
              EXPRESSION
                QualifiedName [121+10]
                  > variable binding: System.out
              ARGUMENTS (1)
                InfixExpression [138+24]
                  > (Expression) type binding: java.lang.String
                  LEFT_OPERAND
                    StringLiteral [138+20]
                      ESCAPED_VALUE: '"This is a number: "'
                  OPERATOR: '+'
                  RIGHT_OPERAND
                    NumberLiteral [161+1]
                      TOKEN: '4'
```

So arguably, using all this different syntax helps us:

 - Keep track of where in the hierarchy we are. 
 - Reduce the amount of space used to display the same information.
 
... however, just because you're doing that, doesn't mean that some _common abstraction_ wouldn't still be useful.


## Intent

A second reason for this multitude of hierarchies goes back to explaining the use to which they are put.   Because of LISP's parsimony, you miss out on knowing what the different _types_ of hierarchy are.   You don't know whether you're looking at XML attributes or elements, or array structures, or maps, so it's harder to understand the purpose of the hierarchy.  In the ChartJS example, assuming you _know what you're looking at_, the purpose of these different hierarchies is a lot clearer.

Also, you miss out on the huge number of `)))))`s that you get with LISP.    

## Without Compositional Hierarchy

Where would we be without compositional hierarchy in our software code?  It's not impossible to imagine:  

 - We could write code in a stack-less, `goto`-oriented way, but such programs are extremely hard to reason about, as discussed in E.W. Dijkstra's seminal paper [Goto Considered Harmful](https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf).
 - [Finite State Machines](https://en.wikipedia.org/wiki/Finite-state_machine) are a pretty useful tool in the toolbox, managing state transitions, but without hierarchy (although you could build a finite hierarchy within them).
 - [Turing Machines](https://en.wikipedia.org/wiki/Turing_machine) and the [BrainFuck](https://en.wikipedia.org/wiki/Brainfuck) language both manage without any kind of hierarchy, and are [Turing Complete](https://en.wikipedia.org/wiki/Turing_completeness), meaning that you can do _any kind of computing in them_.  Although, they're both very hard to reason about.
 
```
# Hello World, in BrainFuck

+[-->-[>>+>-----<<]<--<---]>-.>>>+.>>..+++[.>]<<<<.+++.------.<<-.>>>>+.
```

## Subsumptive Hierarchies

> "A subsumptive containment hierarchy is a classification of object classes from the general to the specific. " - [Hierarchies, _Wikipedia_](https://en.wikipedia.org/wiki/Hierarchy#Subsumptive_containment_hierarchy)

The other type of hierarchy we come across both in software and everywhere else in the human experience is the _classification hierarchy_ or _subsumptive hierarchy_.   For example: _people_ are a type of _mammal_ which is a type of _animal_.  This kind of thinking is embedded deeply in type systems and object-oriented programming. 

[Type Systems](https://en.wikipedia.org/wiki/Type_system) are built on the concept of subsumptive hierarchies.  Unlike composition, with subsumptive hierarchies, you can classify things along many axes.  For example, a cup might fit into the classifications "drinking receptacle", "kitchenware" and "Star-Wars memorabilia" all at the same time.

A lot of the power of _Interfaces_ in programming languages comes from being able to do this.  This leads to a really interesting point:  whenever we "reach out" of the compositional hierarchy of a software program to call another piece of code (via calling a function or a variable) we _fall back_ to using the classification hierarchy to determine whether that connection is a valid one.

```java
public class Numbers {
    public static void main(String[] args) {
         System.out.print("This is a number: " + 4);
    }
}
```

In the above snippet of Java code, there is a place where we _leave_ the compositional hierarchy to call a static function from somewhere else:  `System.out.println`. When this happens, we rely on the _classification hierarchy_ of the Java Type System to determine whether that call is acceptable.  `System.out.println`: _takes_ a `String` as it's argument, and it's the job of the _type checker_ to make sure that this call-outside-the-hierarchy will work.

This is a good example of _compositional_ and _subsumptive_ hierarchies working together.

## Planets

Subsumptive hierarchies are difficult for a couple of reasons.  The first being how to decide what's in and what's out of the category.

![Eris, From Wikipedia (NASA, ESA, and A. Schaller (for STScI))](/images/complexity/eris.png)

(Eris, from [Wikipedia](https://en.wikipedia.org/wiki/Eris_(dwarf_planet)#/media/File:2006-16-a-full-1-.jpg))  

As an example of this, let's consider _planets_. The definition of a planet is quite bogus, and has changed over time:

- The Greeks coined _asteres planetai_ to be the class of objects in the sky that moved separately from the rest of the body of stars.   Possibly including moons, comets and asteroids. [1](https://en.wikipedia.org/wiki/Definition_of_planet#Planets_in_antiquity).
- However, after the [Copernican Revolution](https://en.wikipedia.org/wiki/Definition_of_planet#Satellites) made the moon a satellite of earth, the defintion of planets seemed to be _bodies orbiting the sun_, and there were just 9 of them: Mercury, Mars, Earth, Venus, Saturn, Jupiter, Uranus, Neptune and Pluto.
- In 2005, [The Discovery of Eris](https://en.wikipedia.org/wiki/Definition_of_planet#Pluto), a body _larger_ than Pluto orbiting in a trans-Neptunian orbit meant that [potentially hundreds of objects](https://en.wikipedia.org/wiki/Trans-Neptunian_object#/media/File:TheTransneptunians_73AU.svg) deserved the term planet.
- In response, Pluto was demoted to being a _dwarf planet_.  In order to do this, the definition of planet was changed to include the clause that it had "cleared its neighbourhood" of most other orbiting bodies.  This excluded Kuiper-Belt objects such as Pluto, but is _still problematic_, as Alan Stern discusses below.

> "I and many other planetary scientists — like the almost 400 that signed a petition against the IAU in 2006 — have a problem with the IAU definition because the implications of it are just nonsensical.  Here's why. The IAU's "zone-clearing" criteria, when worked out mathematically, means that to qualify as a planet at larger and larger distances from the sun, a body has to have more and more mass than it would in a closer orbit. This is in part because the zones get larger (like distance cubed, or volume) as you go outward; it's also in part because orbital speeds are slower further out, so zone-clearing takes longer." - [Alan Stern, _Fighting for Pluto's Planet Title_](https://www.space.com/9594-fighting-pluto-planet-title-planetary-scientist-alan-stern.html)

So the problem comes down to the fact that, on one hand, we want a nice classification of the eight or nine largest objects orbiting our sun, rather than a messy classification of hundreds.  

## Generics

The second problem with subsumptive hierarchies is that the _composition creeps back in_: you can't do everything just with a subsumptive hierarchy.  This means that we end up with type definitions like this:

```java
public interface Map<K,V> {

	...
	
	V get(Object key);
	
	...
}
```

This is saying that a `Map` is composed with a key type `K` and a value type `V`.  Our subsumptive hierarchy of types ends up making use of compositional hierarchy!

## Both Hierarchies Together

So to recap, there are two key types of hierarchy:

**_Compositional_ hierarchies** are used _everywhere_ in software development: _files_ in _disks_ in _servers_, _methods_ and _functions_ in _packages_ and _namespaces_ etc.  Good programming languages attempt to capture as much of the program's complexity as possible within the containment hierarchy.  

People understand compositional hierarchies because they're baked into (and invented by) our brains.  When I look outside at a car, I can see that it is a compositional hierarchy of windows, wheels and metal panels.  When I think about my house, I think about different objects being contained within different rooms within a structure of bricks.  But none of that exists:  it's all in my head.  Everything is really just a bunch of atoms.

**_Subsumptive_ hierarchies** are also used everywhere in software development: _strings_, _numbers_, _records_, _classes_, _types_, _schemas_.   A key ability for a programmer is often to be able to abstract from multiple areas and say "this is like this".   By noticing _patterns of classification_ we can save on the amount of code we have to write.

![Compositional hierarchies on a larger project:  methods, classes, packages, directories, projects](/images/estimates/containment.png)

In Eclipse (my Java IDE) I can therefore view _both_ these types of hierarchy.  In the above screen-grab, you can see some more compositional hierarchy on the left: _methods_, _classes_, _packages_, _directories_ and _projects_.  
  
![Classification hierarchy of the Resource class from Spring](/images/estimates/classification.png)

Whereas in this screen grab, I can view the hierarchy of a _class_ within Java (here the `Resource` class from [Spring](https://spring.io/projects/spring-hateoas)).

## Compositional Hierarchy Implementations

### Java

Because hierarchies are so trivial to implement in software systems, they tend to be implemented _over and over again_.   In Java, I can build a hierarchy out of nested `List` objects, or nested `Arrays`, or I can explore the hierarchy of an XML document via nested `Node`s.   Each has a different set of methods for navigating them.  

Nevertheless, there are some after-the-fact efforts to provide consistent interfaces across hierarchies, such as [Spring Expression Language](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/expressions.html) or [JXPath](https://commons.apache.org/proper/commons-jxpath/) provide a consistent hierarchical abstraction over these, so that I can write:

### URLs

A second example to look at is the URL.  URL paths have hierarchy built into them.   I can navigate upwards from from a child to successive levels of parent like so:

```bash
https://github.com/robmoffat/kite9-visualization/actions # Actions on one of my github projects
https://github.com/robmoffat/kite9-visualization         # One of my github projects
https://github.com/robmoffat                             # All of my projects
https://github.com                                       # Top level of github
```

This _usually_ works, but isn't guaranteed to (there might be some intermediate levels within the URL scheme which yield `404 - Not Found` pages).   

However, going the other way (from parent to child) isn't so easy: there is no corresponding standard to say "this URL has these children".  Instead, I am presented with a screen of HTML to look at, but there is no guarantee that the links it contains will take me to _child_ pages in a hierarchy.  

### HATEOAS

A poorly-adopted example of what this might look like is [HATEOAS - Hypertext As The Engine Of Application State](https://en.wikipedia.org/wiki/HATEOAS).   When you do a REST request and get a HATEOAS response, you indeed get links to all child resources.  Requesting the URL `/accounts/12345/` would return a response like:

```
{
    "account": {
        "account_number": 12345,
        "balance": {
            "currency": "usd",
            "value": 100.00
        },
        "links": {
            "deposit": "/accounts/12345/deposit",
            "withdraw": "/accounts/12345/withdraw",
            "transfer": "/accounts/12345/transfer",
            "close": "/accounts/12345/close"
        }
    }
}
```

(Example from [Wikipedia](https://en.wikipedia.org/wiki/HATEOAS#Example))

But even HATEAOS isn't really representing a compositional hierarchy here:  those `links` could point off to _anywhere_.

## Why Bother?

So, what are we missing out on here? Why is this a big deal?  In a word, it's about _consistency_, as with every abstraction.  In many programming languages there is the concept of the `namespace`, which ensures we have a consistent **subsumption hierarchy**.  In fact, this is what allows us to use different packages together in a project, and not end up having the types clash with each other.  

But by lacking consistent **compositional hierarchy**, either within a language or across all software systems, we lose the ability to navigate the world's information easily.  URLs go some way to achieving this, but not far enough!

In the next article, we'll look at [Crystals And Code](Crystals-And-Code.md), and how the lack of consistent abstractions means that our Information Systems are perpetually broken.