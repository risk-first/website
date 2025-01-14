---
sidebar_position: 1
title: Kolmogorov Complexity
---

The standard Computer-Science definition of complexity is [Kolmogorov Complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity).  This is:

>  "...the length of the shortest computer program (in a predetermined programming language) that produces the object as output." - [Kolmogorov Complexity, Wikipedia](https://en.wikipedia.org/wiki/Kolmogorov_complexity)

This is a fairly handy definition for us as it means that in writing software to solve a problem there is a lower bound on the size of the software we write.  While in practice this is pretty much impossible to quantify, that doesn't really matter:  here I want to focus on the techniques for _moving towards that minimum_.

Let's say we wanted to write a JavaScript program to output this string:

```javascript
abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd
```

We might choose this representation:

```javascript
 
function out() {                                      (7 )
    return "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd" (45)
}                                                     (1 )
                                               (total: 53)
```

The numbers in brackets on the right indicate how many symbols each line contains.  In total, this code block contains **53 symbols** if you count `function`, `out` and `return` as one symbol each.

But, if we write it like this:

```javascript
const ABCD="abcd";                                    (11)

function out() {                                      (7 )
    return ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+ABCD+        (16)
        ABCD+ABCD+ABCD;                               (6 )
}                                                     (1 )
                                               (total: 41)
```

With this version, we now have **41 symbols** (`ABCD` is a single symbol - it's just a name).  And with this version:

```javascript
const ABCD="abcd";                                    (11)

function out() {                                      (7 )
    return ABCD.repeat(10)                            (7 )
}                                                     (1 )
                                               (total: 26)
```

... we have **26 symbols**.  

### Abstraction

What's happening here is that we're _exploiting a pattern_: we noticed that `abcd` occurs several times, so we defined it a single time and then used it over and over, like a stamp.  This is called [abstraction](/tags/Abstraction).

By applying abstraction, we can improve in the direction of the Kolmogorov lower bound.  By allowing ourselves to say that _symbols_ (like `out` and `ABCD`) are worth one complexity point, we've allowed that we can be descriptive in naming `function` and `const`.  Naming things is an important part of abstraction, because to use something, you have to be able to refer to it.

Generally, the more complex a piece of software is, the more difficulty users will have [understanding it](/tags/Internal-Model-Risk), and the more work developers will have changing it. 

Although we should prefer the third version of our code over either the first or second (because of its brevity) we could go further down into [Code Golf](https://en.wikipedia.org/wiki/Code_golf) territory.  The following javascript program plays [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) up to 100, but is less readable than you might hope.

```javascript
for(i=0;i<100;)document.write(((++i%3?'':'Fizz')+     
(i%5?'':'Buzz')||i)+"<br>")
                                               (total: 62)
```

So there is at some point a trade-off to be made between [Complexity Risk](/tags/Complexity-Risk) and [Communication Risk](/tags/Communication-Risk). That is, after a certain point, reducing Kolmogorov Complexity further risks making the program less intelligible. 

### Refactoring

![Using Refactoring and Abstraction to reduce Complexity](/img/generated/risks/complexity/refactoring.svg)

Abstraction is therefore a key tool in the battle against [Complexity Risk](/tags/Complexity-Risk): it allows us to jettison repetition.  But, as the code-golf example shows, you can go too far.  So an important part of software development is picking the _right_ abstractions:  ones that are useful, durable and pervasive.  

Time spent replacing poor abstractions with better ones is called [refactoring](/tags/Refactoring).  

The above diagram demonstrates that a key practice in battling [Complexity Risk](/tags/Complexity-Risk) is choosing **a minimal set of useful abstractions**.  The attendant risk in doing that work (the downside) is the _time spent doing it_. That is, [Schedule Risk](/tags/Schedule-Risk).   

Sometimes it is better to have an ok-ish abstraction _now_ rather than a brilliant abstraction _too late_. 

### Languages and Dependencies

The above Javascript example also demonstrates a second way in which we can manage [Complexity Risk](/tags/Complexity-Risk).  

In the third version of the program, we used the method `.repeat()`, which allowed us to save a further 16 symbols.  

`.repeat()` is a recent addition to Javascript, added in ES6.  What this shows is that the Kolmogorov complexity of a program is actually _heavily dependent_ on the features of the programming language:  using ES6-Javascript allows us to produce simpler programs than before. 

![Using Libraries and Languages to reduce Complexity Risk](/img/generated/risks/complexity/libraries.svg)

So as the above diagram shows, we can also reduce [Complexity Risk](/tags/Complexity-Risk) via [languages and libraries](/tags/Dependency-Adoption).   This doesn't come without a cost, though.  We are trading-off our own code's [Complexity Risk](/tags/Complexity-Risk) but adding [Dependency Risks](/tags/Dependency-Risks) instead.   
