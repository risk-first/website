---
title: Contracts
description: Part of the 'Estimating' Risk-First Series, looking at how risk is apportioned when contracts are agreed.
url: https://riskfirst.org/estimating/Contracts

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/contract.svg">Contracts</image-artifact>'
categories:
 - Estimating
order: 6
---

# Contracts

![Under Construction](/images/state/uc.png)

There are basically two "extreme" positions on building a contract, Fixed-Price, and By-The-Hour.  Let's look at those more closely, and see 


## Forming A Relationship

Whenever a client employs a supplier, risk is involved.  On the one side, the client has a dependency on the supplier:  they want that supplier to deliver something of value.  There's a risk this will go south - maybe the supplier delivers shoddy work, or the wrong kind of results, or simply disappears mid-way through the contract.   We call this [Dependency Risk](../risks/Dependency-Risk.md).

On the other side, the supplier now has an obligation, to supply the thing the client wants.  They take on risk too, because if the client isn't happy, there are going to be problems getting paid.  We call this [Feature Risk](../risks/Feature-Risk.md).

diagram 1.  feature risk, dependency risk

The diagram above shows these risks, which are going to exist no matter what kind of contract we come up with.

Now, given that both sides are _taking on risk_, what's the point of forming the relationship at all?  Well, as with any trade, both parties hope to gain:  the client gains functionality, and the supplier gets paid.

That's shown in the above diagram: the process of forming the relationship means that the risks are moving about:  the supplier is transferring [Funding Risk]() to the client.  The client is transferring [Feature Risk]() to the supplier.

## Fixed-Price

Generally, Fixed-Price contracts work best under the following conditions:

1. The client knows up-front how much the project is [going to cost](Kitchen-Cabinet.md). 
2. Both sides know exactly [what will be delivered](Journeys.md), so corners can't be cut (i.e. a water-tight specification)
3. The client knows exactly [what they want](Fractals.md).

That's fine when I order a cheese burger, but as we've covered in the previous parts of this series, those assumptions usually don't hold for software development.  Therefore - there are lots of risks with this.  

Specifically, the big, hairy risk that makes a software project different from a cheese burger is the [Complexity Risk]().  Because the contract is fixed, _all of the complexity risk is shouldered by the supplier_.

-- diagram of this. include the complexity risk of building a working system.

The onus is totally on the _supplier_ to estimate correctly in this scenario.

In this case, the [Feature Risk]() that the supplier faces is their ability to produce a working software system that satisfies the client's needs. i.e. handles the [Dependency Risk]().

Let's compare that to...

## Day-Rate

With a day-rate contract, the tables are turned.  Instead of supplying a working system, the supplier is supplying a _development capability_, which is a lot less risky for them, because the [Complexity Risk]() is _entirely_ shouldered by the client.  If the project turns out to be much more difficult to implement than anticipated, then it's entirely _on the client_.  But, at least the client gets to say when to stop.

-- diagram of where the risks lie, complexity risk is now with the client.

In this world, the onus is totally on the _client_ to estimate correctly.  Now at this point, you might suggest that it's unfair to make a client (who is less tech-savvy) than a supplier do the estimate.   However, we live in a world where the whole process of estimating software development is ridiculously broken, so perhaps it doesn't matter.

In any case, when you take a permanent role, _this is also what is going on_.  The client has made some back-of-the-envelope calculation that some business functionality can be served by hiring two developers per year.

Why would a client _ever_ take on a day-rate contract, if they can transfer more risk by asking for a fixed-price contract?  There are several reasons:

1.  They don't really know what they want.  If you are exploring some [Fractal Landscape]() for value, then you have to pay the explorers for the ground they cover, because you don't know what the destination is. 
2.  


## Sprints / Milestones

Clearly, Fixed-Price and Day-Rate are extremes.  There are places in the middle too, where the [Complexity-Risk]() is more evenly shared.   

For example, if a project can be broken down into discrete milestones of value, then there's an argument for delivering (and paying for) them in those milestones.  If the later milestones don't materialize, you might lose out on "holistic" benefits, but hopefully the project isn't a complete waste since the early milestones provide value.

The Agile concept of "Sprints" or "Iterations" is merely to widen the Day-Rate to several weeks:  can useful "chunks" of value be delivered in each Sprint?  This fixes _time_ rather than functionality.

-- diagram of this continuum.

Clearly, there's a continuum, where [Complexity Risk]() is shifted from supplier to client.  

## Agency Problems

The second major risk with using estimates for contracts is that there is usually an element of [Agency Risk]():  neither side of the deal can necessarily trust the other to act totally in their best interests.  

This is _also_ a problem irrespective of what kind of contract we take.  With a Fixed-Price contract, there is an opportunity for the supplier to add excessive "pad" to the estimate.  With a Person-Days contract, there is an opportunity for the supplier to try to take as long as possible.

Fixed Price

|Types of Agency Risk        |Before Agreement                |After Agreement
|----------------------------|--------------------------------|---------------------------
|Agency Risk For Client      |Padding                         |Corner-Cutting
|Agency Risk For Supplier    |                                |Not Getting Paid

Day Rate

|Types of Agency Risk        |Before Agreement                |After Agreement
|----------------------------|--------------------------------|---------------------------
|Agency Risk For Client      |                         |Corner-Cutting
|Agency Risk For Supplier    |                                |Not Getting Paid


Chiefly, the supplier is.


In a Fixed Price contract, the client knows up-front how much the project is going to cost.  That means that the supplier is assuming all of the [Complexity Risk]() of the project. 

On it's own, that would be unfair, because now the supplier has taken an extra risk.  How is this managed?

There are several key mitigations:

### Padding

First, the supplier will "pad" the cost to account for any [unforeseen complexity](Kitchen-Cabinet.md), which causes extra delays.  Obviously, this isn't really going to be apparent up-front.  But, it makes it fairer it's a [Complexity-Risk]() for [Funding-Risk]() trade.

### Specifications

Second, the supplier and the client can _agree on a specification_.  By doing this up-front, some of the complexit



Bill by the hour is broken- contractors come round and milk you for as long as possible
Bill by the job is also broken, because estimates are often shit and things could be a lot worse. 
What’s better?  Agreement of risks.  Both sides should accept similar levels of risk.  E.g I have to manage the risk to the other party that they’re not happy. Also I want the upside risk of repeat business.  What key risks am I absorbing?  What are they absorbing?  Who owns what risk, in reality?  Can we table this up before we start?  

Is this a superset of a sprint goal?



