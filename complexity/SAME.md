---
title: Introducing SAME
description: An invariant-processing framework in Java
url: https://riskfirst.org/complexity/Crystals-And-Code
image: /images/generated/titles/Crystals-And-Code.png
featuredimage: images/generated/single/Crystals-And-Code.png
categories:
 - Complexity
order: 5
---

# Introducing: SAME

_under construction_

Below is a piece of Java code I wrote the other day.  We're not going to look into it too closely (and in fact, this post isn't really even about Java _per se_), so here are the key take-aways:
   
 - It's for converting a `Table` of data (essentially, columns and rows, where each column has a name) into a `Places` object, which is a proper Java bean, consisting of a collection of `Place` objects.  
 - Each `Place` has a name, some boolean fields and some numeric fields.
 - There's lots of Java Streams work going on here, and heavy indenting.
 - This code isn't really heavy-duty, it's pretty thrown-together.  The exception handling is _dreadful_.
 - It's fairly hard to read
 
![Places 1](/images/complexity/places1.png)

The whole purpose of this function is really to establish a _mapping_:  essentially, it is saying that _some_ `Table`s map to `Places`, and here's how you do it.  It looks like this:

-- all tables, place tables -> Place objects.

But in order to construct the mapping from `Table`s to `Places`, we also need to create the mapping from `Table` rows to `Place` objects, the `Table` columns to `Place` fields, and the `Table` cells to `Place` field-values.  

Let's look at where that happens:

![Places 2](/images/complexity/places2.png)

So here I've highlighted where we establish these mappings:

- `Table` and `Places` (Peach)
- `r` (row) and `Place` (Yellow)
- Column Name and `Field` (Pink)
- Text Value of a cell, and the field value. (Mauve)

Ok, so this code kind of works and it looks terrible.  But there are really big problems here:

- First, I can only convert from `Table` to `Place`, not back again.
- Second, I can't tell ahead-of-time whether a `Table` will convert to `Places`.  A table row could contain things that _aren't_ `Place`s, and then it would fall over.
- Third, given a `Table` and a `Places`, there's no way I can tell whether they are the same, without first converting one into the other, and then comparing them.  That is, if I have an `equals()` method defined for `Table`, then I can't make use of that to compare `Places` with each other, even though realistically, if they are equivalent, then the equals should be equivalent... and the same goes for any other functionality I might declare on `Place` or `Table` individually.  If they are equivalent representations of the same data, then the same operations should work on each of them, right?

So, to summarise:

- I want a way to declare an equivalence (i.e. a two-way mapping) in Java, rather than just a one-way mapping.
- I want it to not be **a cause of eye-strain** for the next person trying to read my code.

## Scale Of The Problem 

I am currently working on a project containing about 85 classes.  Let's break down what they're used for:

|Purpose                |Count         |
|-----------------------|--------------|
|Test Classes           |20            |
|Business Functionality |14            |
|Data Model             |17            |
|Some Kind Of Converter |25            |

.. plus a few sundry others.

Also, I'm making use of things like [Jackson](https://github.com/FasterXML/jackson) for turning JSON into Java Objects.  And a lot of Java's standard library itself is for converting external forms to Java objects and back.  Things like the [XML Libraries for turning XML into Java objects](), [REST Libraries, for turning HTTP Requests into Java Objects]() and [JDBC and ORM Libraries, for turning relational data into Java Objects]().

In actual fact, one of the main reasons for using Java _at all_ is because it has such a rich set of connectors:  whatever the format, you're almost certain to find that someone has written _some kind of converter_ for it in Java.   You don't choose Java because it's the easiest language to learn, you choose it because of it's [Ecosystem](../risks/Boundary-Risk.md#Big-Ecosystems-Get-Bigger).

## Expressing Invariants

So actually, I think _converting between one format and another_ is actually the lion's share of all the code we write, especially if we are bolting together lots of open-source libraries to construct our software.  

