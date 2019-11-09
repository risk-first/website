---
title: Hierarchies
description: Part of the 'Estimating' Risk-First Series, exploring complexity in hierarchies.
url: https://riskfirst.org/estimating/Hierarchies
--image: /images/generated/titles/Just-Risk.png
--featuredimage: images/generated/single/Just-Risk.png
categories:
 - Estimating
order: 5
---

# Hierarchies

Having looked at four different approaches to estimating, it's time to take a brief but important aside: have you noticed just how prevalent the idea of _heirarchy_ is in software?  By hierarchy, I mean a general pattern of _connectedness_, where a _parent_ has some _children_, who, in turn, may each have some further children, and so on.

In this section, I'm going to look at a whole bunch of examples, and then try to examine exactly why this is such a popular pattern.  This will be a useful tool in our arsenal for estimation in the next section.

## A Javascript Example

Here's an example from the [ChartJS](https://www.chartjs.org/docs/latest/#creating-a-chart) website I was looking at, just the other day:

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
 - And the `Chart` constructor is defined in a different `package`, which is a collection of `file`s in a repository (maybe [npm]() or [jsdelivr]().
 - Some hierarchy is _indicated_ using indentation of the code.  Some isn't.
 
What is the take-away from this? 

_We heavily use syntax to indicate different types of hierarchies within software_.  

Just look at all the different ways it happens above:  brackets, single-quotes, curly brackets, angle-brackets and tags, square brackets, double-quotes, commas and semi-colons.  

## Syntax Trees

Here is another piece of Javascript, a function to calculate a [Fibonacci Sequence](https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e):

```javascript

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
```

When the Javascript parser goes to work, it builds an internal [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) from the code, looking something like this:

![Abstract Syntax Tree, Rendered By [viswesh](https://viswesh.github.io/astVisualizer/)](/images/estimates/ast.png)

Now, the syntax tree generated for Javascript is _different_ to the way the code looks.  In other languages, like [Lisp](), the syntax tree and the code structure are the same, and this is called [homoiconicity](https://en.wikipedia.org/wiki/Homoiconicity).

## Human Systems

We build hierarchies not just into our programming languages, but all over our societies.  They seem fundamental to how we understand things.   As well as [Family Trees](https://en.wikipedia.org/wiki/Family_tree) and [Organisation Charts](https://en.wikipedia.org/wiki/Organizational_chart), we use hierarchies everywhere.  For example, biologists often break down the complexity of the human body like this:

 - **Organelles** - such as [Mitochondria](https://en.wikipedia.org/wiki/Mitochondrion), contained in...
 - **Cells** - such as blood cells, nerve cells, skin cells in the [Human Body](https://en.wikipedia.org/wiki/List_of_distinct_cell_types_in_the_adult_human_body), inside...
 - **Organs** - like hearts livers, brains etc, held within...
 - **Organ Systems** - like the circulatory system, the immune system, the respiratory system, contained in...
 - **Organisms** - like you and me.
 
Wikipedia calls this a _compositional containment hierarchy_:

> "The compositional hierarchy that every person encounters at every moment is the hierarchy of life. Every person can be reduced to organ systems, which are composed of organs, which are composed of tissues, which are composed of cells, which are composed of molecules, which are composed of atoms. In fact, the last two levels apply to all matter, at least at the macroscopic scale. Moreover, each of these levels inherit all the properties of their children. " - [Hierarchy, _Wikipedia_](https://en.wikipedia.org/wiki/Hierarchy#Nested_hierarchy)

## An Essential Problem

Unfortunately, containment hierarchies _break down_ when you look too closely.  

You see that Javascript syntax tree?  Unfortunately, we are passing things from one part of the hierarchy to another in the form of the variables (`temp`, `num`, `a` and `b` here) or named functions.

You see those _veins_ in the [Circulatory System](https://en.wikipedia.org/wiki/Circulatory_system)?  They connect with all of the bodily systems, as do _nerves_ which are part of the [Nervous System](https://en.wikipedia.org/wiki/Nervous_system).  

Where does one system end and another begin?

Although biological pressure seems to have led to a hierarchical organisation, it knows when to break it's own rule. 

That's because on their own, hierarchies are _too simple_ to express _complexity_.  (For a graph-centric look at how we can measure complexity, please review [Complexity Risk](Complexity-Risk).) 

## Goto Considered Harmful

On the other hand, where would we be without hierarchy in our software code?  It's not impossible to imagine:  

 - We could write code in a stack-less, `goto`-oriented way, but such programs are extremely hard to reason about, as discussed in E.W. Dijkstra's seminal paper [Goto Considered Harmful](https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf).
 - [Finite State Machines](https://en.wikipedia.org/wiki/Finite-state_machine) are a pretty useful tool in the toolbox, managing state transitions, but without hierarchy.
 - [Turing Machines](https://en.wikipedia.org/wiki/Turing_machine) and the [BrainFuck](https://en.wikipedia.org/wiki/Brainfuck) language both manage without any kind of hierarchy, and are [Turing Complete](https://en.wikipedia.org/wiki/Turing_completeness), meaning that you can do _any kind of computing in them_.  Although, they're both very hard to reason about.
 
```
# Hello World, in BrainFuck

+[-->-[>>+>-----<<]<--<---]>-.>>>+.>>..+++[.>]<<<<.+++.------.<<-.>>>>+.
```

## Classification Hierarchy  

The other type of hierarchy we come across both in software and everywhere else in the human experience is the _classification hierarchy_.   As an example of this, let's consider _planets_. The definition of a planet is quite bogus, and has changed over time:

- The Greeks coined _asteres planetai_ to be the class of objects in the sky that moved separately from the rest of the body of stars.   Possibly including moons, comets and asteroids. [1](https://en.wikipedia.org/wiki/Definition_of_planet#Planets_in_antiquity).
- However, after the [Copernican Revolution](https://en.wikipedia.org/wiki/Definition_of_planet#Satellites) made the moon a satellite of earth, the defintion of planets seemed to be _bodies orbiting the sun_, and there were just 9 of them: Mercury, Mars, Earth, Venus, Saturn, Jupiter, Uranus, Neptune and Pluto.
- In 2005, [The Discovery of Eris](https://en.wikipedia.org/wiki/Definition_of_planet#Pluto), a body _larger_ than Pluto orbiting in a trans-Neptunian orbit meant that [potentially hundreds of objects](https://en.wikipedia.org/wiki/Trans-Neptunian_object#/media/File:TheTransneptunians_73AU.svg) deserved the term planet.
- In response, Pluto was demoted to being a _dwarf planet_.  In order to do this, the definition of planet was changed to include the clause that it had "cleared its neighbourhood" of most other orbiting bodies.  This excluded Kuiper-Belt objects such as Pluto, but is _still problematic_, as Alan Stern discusses below.

> "I and many other planetary scientists — like the almost 400 that signed a petition against the IAU in 2006 — have a problem with the IAU definition because the implications of it are just nonsensical.  Here's why. The IAU's "zone-clearing" criteria, when worked out mathematically, means that to qualify as a planet at larger and larger distances from the sun, a body has to have more and more mass than it would in a closer orbit. This is in part because the zones get larger (like distance cubed, or volume) as you go outward; it's also in part because orbital speeds are slower further out, so zone-clearing takes longer." - [Alan Stern, _Fighting for Pluto's Planet Title_](https://www.space.com/9594-fighting-pluto-planet-title-planetary-scientist-alan-stern.html)

So the problem comes down to the fact that, on one hand, we want a nice classification of the eight or nine largest objects orbiting our sun, rather than a messy classification of hundreds.  

### Multiarchies and Typing

A second problem with classification hierarchies is that, unlike containment, you can classify things along many axes.  For example, a cup might fit into the classifications "drinking receptacle", "kitchenware" and "Star-Wars memorabilia" all at the same time.

Nevertheless, a lot of the power of _Interfaces_ in programming languages comes from being able to do this.  

[Type Systems](https://en.wikipedia.org/wiki/Type_system) are invariably built on the concept of classification hierarchies.  And this leads to a really interesting point:  whenever we "reach out" of the containment hierarchy of a software program to call another piece of code (via calling a function or a variable) we _fall back_ to using the classification hierarchy to determine whether that connection is a valid one.

In a strongly-typed language like Java, for example we might have this:

```java
public class Numbers {
    public static void main(String[] args) {
        System.out.print("Square root of 4 is: " + Math.sqrt(4));
    }
}
```

The compositional hierarchy you might draw like this:

But there are three places where we _leave_ the compositional hierarchy to call static functions in other packages:  `Math.sqrt`,  `System.out.println` and `+` (string concatenation). In these cases, we rely on the _classification hierarchy_ of the Java Type System to determine whether the call is acceptable:

 - `Math.sqrt`: _takes_ a `float`, _returns_ a `float`.
 - `System.out.println`: _takes_ a `String`.
 - `+`: _takes_ a `String` and something that can be converted to a `String`, _returns_ a `String`.

![Compositional hierarchies on a larger project:  methods, classes, packages, directories, projects](/images/estimates/containment.png)

In Eclipse (my Java IDE) I can therefore view _both_ these types of hierarchy.  In the above screen-grab, you can see some more compositional hierarchy _methods_, _classes_, _packages_, _directories_ and _projects_.  
  
![Classification hierarchy of the Resource class from Spring](/images/estimates/classification.png)

Whereas in this screen grab, I can view the hierarchy of a _class_ within Java (here the `Resource` class from [Spring](https://spring.io/projects/spring-hateoas)).

Although this is an Object-Oriented example, the same classification system exists within functional languages, too.  For example, [Haskell](https://en.wikibooks.org/wiki/Haskell/Classes_and_types) types have 

tbd.


## Summary

This has been a somewhat rambling introduction to two key types of hierarchy:

**_Containment_ hierarchies** are used _everywhere_ in software development: _files_ in _disks_ in _servers_, _methods_ and _functions_ in _packages_ and _namespaces_ etc.  Good programming languages attempt to capture as much of the program's complexity as possible within the containment hierarchy.  

People understand containment hierarchies because they're baked into (and invented by) our brains.  When I look outside at a car, I can see that it is a containment hierarchy of windows, wheels and metal panels.  When I think about my house, I think about different objects being contained within different rooms within a structure of bricks.  But none of that exists:  it's all in my head.  Everything is really just a bunch of atoms.

**_Classification_ hierarchies** are also used everywhere in software development: _strings_, _numbers_, _records_, _classes_, _types_, _schemas_.   A key ability for a programmer is often to be able to abstract from multiple areas and say "this is like this".  

Classification hierarchies are also baked into our brains:  looking at my car, the windows and wheels, these are all classifications of objects that exist in my head.  But everything is really just a bunch of atoms.

When we create programs (or set up databases) we are classifying things.   Having a field for "Marital Status", "Address" or "Planet / Not a Planet" is just something we've invented for the purposes of us processing data.  We are copying the mental concepts we've developed for navigating the real world and pasting them into our code.  

We should be cautious doing this, as we _might well be wrong_.

internal model picture, copying.

At this point, you're probably wondering what any of this has to do with estimating in software development, so [let's continue]...


