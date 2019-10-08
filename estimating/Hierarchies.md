---
title: Hierarchies
description: Part 4 of the 'Estimating' Risk-First Series.
url: https://riskfirst.org/estimating/Hierarchies
--image: /images/generated/titles/Just-Risk.png
--featuredimage: images/generated/single/Just-Risk.png
categories:
 - Practices
order: 13
---

# Hierarchies

Having looked at three different approaches to estimating, it's time to take a brief but important aside: have you noticed just how prevalent the idea of _heirarchy_ is in software?  By hierarchy, I mean a general pattern of _connectedness_, where a _parent_ has some _children_, who, in turn, may each have some further children, and so on.

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
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
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

Unfortunately, hierarchies _break down_ when you look too closely.  

You see that Javascript syntax tree?  Unfortunately, we are passing things from one part of the hierarchy to another in the form of the variables, `temp`, `num`, `a` and `b`.   

You see those _veins_ in the [Circulatory System](https://en.wikipedia.org/wiki/Circulatory_system)?  They connect with all of the bodily systems, as do _nerves_ which are part of the [Nervous System](https://en.wikipedia.org/wiki/Nervous_system).  

Where does one system end and another begin?

Although biological pressure seems to have led to a hierarchical organisation, it knows when to break it's own rule. 

That's because on their own, hierarchies are _too simple_ to express _complexity_.  (For a graph-centric look at how we can measure complexity, please review [Complexity Risk](Complexity-Risk).) 

## Classification Hierarchy  

The other type of hierarchy we come across both in software and everywhere else in the human experience is the _classification hierarchy_.   As an example of this, let's consider _planets_. The definition of a planet is quite bogus, and has changed over time:

- The Greeks coined _asteres planetai_ to be the class of objects in the sky that moved separately from the rest of the body of stars.   Possibly including moons, comets and asteroids. [1](https://en.wikipedia.org/wiki/Definition_of_planet#Planets_in_antiquity).
- However, after the [Copernican Revolution](https://en.wikipedia.org/wiki/Definition_of_planet#Satellites) made the moon a satellite of earth, the defintion of planets seemed to be _bodies orbiting the sun_, and there were just 9 of them: Mercury, Mars, Earth, Venus, Saturn, Jupiter, Uranus, Neptune and Pluto.
- In 2005, [The Discovery of Eris](https://en.wikipedia.org/wiki/Definition_of_planet#Pluto), a body _larger_ than Pluto orbiting in a trans-Neptunian orbit meant that [potentially hundreds of objects](https://en.wikipedia.org/wiki/Trans-Neptunian_object#/media/File:TheTransneptunians_73AU.svg) deserved the term planet.
- In response, Pluto was demoted to being a _dwarf planet_.  In order to do this, the definition of planet was changed to include the clause that it had "cleared its neighbourhood" of most other orbiting bodies".  This excluded Kuiper-Belt objects such as Pluto, but is _still problematic_, as Alan Stern discusses below.

> "I and many other planetary scientists — like the almost 400 that signed a petition against the IAU in 2006 — have a problem with the IAU definition because the implications of it are just nonsensical.  Here's why. The IAU's "zone-clearing" criteria, when worked out mathematically, means that to qualify as a planet at larger and larger distances from the sun, a body has to have more and more mass than it would in a closer orbit. This is in part because the zones get larger (like distance cubed, or volume) as you go outward; it's also in part because orbital speeds are slower further out, so zone-clearing takes longer." - [Alan Stern, _Fighting for Pluto's Planet Title_](https://www.space.com/9594-fighting-pluto-planet-title-planetary-scientist-alan-stern.html)

So the problem comes down to the fact that, on one hand, we want a nice classification of the eight or nine largest objects orbiting our sun, rather than a messy classification of hundreds.  

## Multiarchy

A second problem with classification is that, unlike containment, you can classify things along many axes.  For example, a cup might fit into the classifications "drinking receptacle", "kitchenware" and "Star-Wars memorabilia" all at the same time.

Nevertheless, a lot of the power of _Interfaces_ in programming languages comes from being able to do this.   

Why is this?   Why would we _want_ to just have a nice, small collection of things? 

**Some examples of hierarchy in software**.

But software is an **inconsistent** hierarchy:  we have a basic hierarchy, but we allow for references from one part to another.  This is because of the essential complexity of software.   A hierarchy has *no* complexity,(I think?), whereas other graphs have greater complexity.

Programming tries to ameliorate this with:

 - Specific points you can link to (you can't just link to *anywhere*)
 - **Typing**: if you link from a to b, you must match the type.
 
A lot of the hierarchy of a program is specifying execution order, which (as fp shows) isn't actually all that critical.  What does the hierarchy look like without this? 
 
- Show hierarchy of js program to do fib. sequence.
 
- Can we remove that?  _Show this hierarchy too_.
 
 **Limitations of Hierarchy**
 
- Software is an obvious example. 
- Double-diamond, cf. java.

Runtime hierarchy is different - the stack.    Can we even conceive of a language without the stack?

GOTO Considered Harmful
