![Draft](images/state/draft.png)

Risk is messy.  It's not always easy to tease apart the different components of risk and look at them individually.  Let's look at a high-profile recent example to see why.

## Financial Crisis

In the [Financial Services](https://en.wikipedia.org/wiki/Financial_services) industry, lots of effort is spend calculating things like:
- [Market Risk](https://en.wikipedia.org/wiki/Market_risk):  the risk that the amount some asset you hold/borrow/have loaned is going to change in value.
- [Credit Risk](https://en.wikipedia.org/wiki/Credit_risk).  the risk that someone who owes you a payment at a specific point in time might not pay it back.

They get expressed in ways like this:  

> "we have a 95% chance that today we'll lose less than £100"

In the financial crisis, though, these models of risk didn't turn out to be much use.   Although there are lots of conflicting explanations of what happened, one way to look at it is this:
 - Liquidity difficulties (i.e. amount of cash you have for day-to-day running of the bank) caused some banks to not be able to cover their interest payments.
 - This caused credit defaults (the thing that **Credit Risk** measures were meant to guard against) even though the banks _technically_ were solvent.
 - That meant that, in time, banks got bailed out, share prices crashed and there was lots of [Quantitative Easing](https://en.wikipedia.org/wiki/Quantitative_easing).  
 - All of which had massive impacts on the markets in ways that none of the **Market Risk** models foresaw.

All the [Risks](Risk) were [correlated](https://www.investopedia.com/terms/c/correlation.asp).  That is, they were affected by the _same underlying events_, or _each other_.

## The Risk Landscape Again

It's like this with software risks, too, sadly.  

In [Meeting Reality](Meeting-Reality), we looked at the concept of the [Risk Landscape](Risk-Landscape), and how a software project tries to _navigate_ across this landscape, testing the way as it goes, and trying to get to a position of _more favourable risk_.

In this section, I am going to try and show you some of the geography of the [Risk Landscape](Risk-Landscape).  We know every project is different, so every [Risk Landscape](Risk-Landscape) is also different.  But, just as I can tell you that the landscape outside your window will probably will have some roads, trees, fields, forests, buildings, and that the buildings are likely to be joined together by roads, I can tell you some general things about risks too.

In fact, we're going to try and categorize the kinds of things we see on this risk landscape.  But, this isn't going to be perfect: 
 - One risk can "blend" into another just like sometimes a "field" is also a "car-park" or a building might contain some trees (but isn't a forest).   
 - There is _correlation_ between different risks:  one risk may cause another, or two risks may be due to the same underlying cause.  
 - As we saw in [Part 1](Introduction), mitigating one risk can give rise to another, so risks are often _inversely correlated_.

## Why Should We Categorize The Risks

This is a "spotters' guide" to risks, not an in-depth encyclopedia.  

If we were studying insects, this might be a guide giving you a description and a picture of each insect, telling you where to find it and what it does.   That doesn't mean that this is _all_ there is to know.  Just as a scientist could spend her entire life studying a particular species of bee, each of the risks we'll look at really has a whole sub-discipline of Computer Science attached to it, which we can't possibly hope to cover all of.  

As software developers, we can't hope to know the detailed specifics of the whole discipline of [Complexity Theory], or [Concurrency Theory].  But, we're still required to operate in a world where these things exist.  So, we may as well get used to them, and ensure that we respect their primacy.  We are operating in _their_ world, so we need to know the rules.


we're all naturalists now.

## Three Basic Areas Of Risk

_tbd; is this enough?_

![Risk Types](images/types_of_risk.png)

In general, you will definitely have at least 3 main **areas** of risk:

 - **Product Risks**:  Risks affecting the _product you're building_, such as [Feature Risk](Feature-Risk) and [Dependency Risk](Dependency-Risk)
 - **Staff Risks**:  Risks to do with the people or organisations _building the product_, such as [Coordination Risk](Coordination-Risk) and [Agency Risk](Agency-Risk)
 - **Customer Risks**: Risks to do with the _consumers_ of the product.

None of the risk categories we're going to look at fit _exactly_ into these areas, and some of them exist at the **intersection** of these types:
 - [Feature Risk](Feature-Risk) is about the **Customer** and **Product** fit.
 - [Complexity Risk](Complexity-Risk) is a problem between the **Staff** and the **Product** they are building.
 - [Communication Risk](Communication-Risk) occurs at the intersection of **Customer**, **Product** and **Staff**.
 
![Risk Types 2](images/types_of_risk2.png)

## Our Tour Itinerary

tbd

|Risk                                                |          Areas           |       |
|----------------------------------------------------|--------------------------|-------|
|[Feature Risk](Feature-Risk)                        |Customer, Product         |
|[Complexity Risk](Complexity-Risk)                  |Product, Staff            |        
|[Communication Risk](Communication-Risk)            |Customer, Product, Staff  |             
|[Dependency Risk](Dependency-Risk)                  |Product, Customer, Staff  |  
|[Software Dependency Risk](Software-Dependency-Risk)|Product, Staff            |    
|[Process Risk](Process-Risk)                        |Staff                     |
|[Schedule Risk](Schedule-Risk)                      |Product, Staff            |    
|[Boundary Risk](Boundary-Risk)                      |Product                   |            
|[Coordination Risk](Coordination-Risk)              |Staff                     |       
|[Map And Territory Risk](Map-And-Territory-Risk)    |Staff                     |  
|[Production Risk](Production-Risk)                  |Customer, Product         |
|[Agency Risk](Agency-Risk)                          |Staff                     |
       
On each page we'll start by looking at the category of the risk _in general_, and then break this down into some specific subtypes.                                                          

Let's get started with [Feature Risk](Feature-Risk).
