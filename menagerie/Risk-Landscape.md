
What are risks?  Let's look at a high-profile recent example.

## Financial Crisis

In the [Financial Services](https://en.wikipedia.org/wiki/Financial_services) industry, lots of effort is spend calculating things like [Market Risk](https://en.wikipedia.org/wiki/Market_risk) and [Credit Risk](https://en.wikipedia.org/wiki/Credit_risk).  These were computed in monetary terms, like:  

> "we have a 95% chance that today we'll lose less than £100"

They talk of [Exposure](https://en.wikipedia.org/wiki/Market_exposure), and how much is at risk if a specific event occurs.  

In the financial crisis, though, it didn't play out like this.   Although there are lots of conflicting explanations of what happened, one way to look at it is this:
 - Liquidity difficulties caused some banks to not be able to cover their interest payments.
 - This caused credit defaults (the thing that **Credit Risk** measures were meant to guard against).
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

## Three Basic Areas Of Risk

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

|Risk                                                |          Areas           |Description     |
|----------------------------------------------------|--------------------------|----------------|
|[Feature Risk](Feature-Risk)                        |Customer, Product         |tbd|  
|[Schedule Risk](Schedule-Risk)                      |Product, Staff            ||    
|[Complexity Risk](Complexity-Risk)                  |Product, Staff            ||        
|[Dependency Risk](Dependency-Risk)                  |Product                   ||  
|[Boundary Risk](Boundary-Risk)                      |Product                   | |            
|[Production Risk](Production-Risk)                  |Customer, Product         |  |
|[Coordination Risk](Coordination-Risk)              |Staff                     ||       
|[Communication Risk](Communication-Risk)            |Customer, Product, Staff  | |             
|[Bureaucracy Risk](Bureaucracy-Risk)                |Staff                     ||
|[Map And Territory Risk](Map-And-Territory-Risk)    |Staff                     | |  
|[Agency Risk](Agency-Risk)                          |Staff                     |  |
       
On each page we'll start by looking at the category of the risk _in general_, and then break this down into some specific subtypes.                                                          

Let's get started with [Feature Risk](Feature-Risk).
