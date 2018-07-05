![Draft](images/state/draft.png)

Risk is messy.  It's not always easy to tease apart the different components of risk and look at them individually.  Let's look at a high-profile recent example to see why.

## The Financial Crisis

In the [Financial Services](https://en.wikipedia.org/wiki/Financial_services) industry, lots of effort is spend calculating things like:
- [Market Risk](https://en.wikipedia.org/wiki/Market_risk):  the risk that the amount some asset you hold/borrow/have loaned is going to change in value.
- [Credit Risk](https://en.wikipedia.org/wiki/Credit_risk):  the risk that someone who owes you a payment at a specific point in time might not pay it back.
- [Liquidity Risk](https://en.wikipedia.org/wiki/Liquidity_risk): the risk that you can't find a market to sell/buy something, usually leading to a shortage of ready cash.

... and so on.  You don't need to know the details exactly to understand this story.

They get expressed in ways like this:  

> "we have a 95% chance that today we'll lose less than £100"

In the financial crisis, though, these models of risk didn't turn out to be much use.   Although there are lots of conflicting explanations of what happened, one way to look at it is this:
 - Liquidity difficulties (i.e. amount of cash you have for day-to-day running of the bank) caused some banks to not be able to cover their interest payments.
 - This caused credit defaults (the thing that [Credit Risk](https://en.wikipedia.org/wiki/Credit_risk) measures were meant to guard against) even though the banks _technically_ were solvent.
 - That meant that, in time, banks got bailed out, share prices crashed and there was lots of [Quantitative Easing](https://en.wikipedia.org/wiki/Quantitative_easing).  
 - All of which had massive impacts on the markets in ways that none of the [Market Risk](https://en.wikipedia.org/wiki/Market_risk) models foresaw.

All the [Risks](Glossary#Risk) were [correlated](https://www.investopedia.com/terms/c/correlation.asp).  That is, they were affected by the _same underlying events_, or _each other_.

## The Risk Landscape Again

It's like this with software risks, too, sadly.  

In [Meeting Reality](Meeting-Reality), we looked at the concept of the [Risk Landscape](Risk-Landscape), and how a software project tries to _navigate_ across this landscape, testing the way as it goes, and trying to get to a position of _more favourable risk_.

It's tempting to think of our [Risk Landscape](Risk-Landscape) as being like a [Fitness Landscape](https://en.wikipedia.org/wiki/Fitness_landscape).  That is, you have a "cost function" which is your height above the landscape, and you try and optimise by moving downhill in a [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent) fashion.  

However, there's a problem with this:  we don't have a cost function.  We can only guess at what risks there are.  For this reason, I prefer to think of the [Risk Landscape](Risk-Landscape) as a terrian which contains _fauna_ and _obstacles_ (or, specifically [Barriers](Barrier-Risk)).

In this section, I am going to try and show you some of the fauna that live on the [Risk Landscape](Risk-Landscape).  We know every project is different, so every [Risk Landscape](Risk-Landscape) is also different.  But, just as I can tell you that the landscape outside your window will probably will have some roads, trees, fields, forests, buildings, and that the buildings are likely to be joined together by roads, I can tell you some general things about risks too.

In fact, we're going to try and categorize the kinds of things we see on this [Risk Landscape](Risk-Landscape).  But, this isn't going to be perfect: 
 - One risk can "blend" into another just like sometimes a "field" is also a "car-park" or a building might contain some trees (but isn't a forest).   
 - There is _correlation_ between different risks:  one risk may cause another, or two risks may be due to the same underlying cause.  
 - As we saw in [Part 1](Home#Part-1-Introduction), mitigating one risk can give rise to another, so risks are often _inversely correlated_.

## Why Should We Categorize The Risks

This is a "spotters' guide" to risks, not an in-depth encyclopedia.  

If we were studying insects, this might be a guide giving you a description and a picture of each insect, telling you where to find it and what it does.   That doesn't mean that this is _all_ there is to know.  Just as a scientist could spend her entire life studying a particular species of bee, each of the risks we'll look at really has a whole sub-discipline of Computer Science attached to it, which we can't possibly hope to cover all of.  

As software developers, we can't hope to know the detailed specifics of the whole discipline of [Complexity Theory](), or [Concurrency Theory]().  But, we're still required to operate in a world where these things exist.  So, we may as well get used to them, and ensure that we respect their primacy.  We are operating in _their_ world, so we need to know the rules.

## We're all Naturalists Now

This is a new venture.  There's a long way to go.  Just as naturalists are able to head out and find new species of insects and plants, we should expect to do the same.  This is by no means a complete picture - it's barely a sketch.   

It's a big, crazy, evolving world of software.  Help to fill in the detiails.   Report back what you find.

## Our Tour Itinerary

Below is a table outlining the different risks we'll see.  There _is_ an order to this:  the later risks are written assuming a familiarity with the earlier ones.  Hopefully, you'll stay to the end and see everything, but you're free to choose your own tour if you want to.

|Risk                                                |          Description           |      
|----------------------------------------------------|--------------------------|
|[Feature Risk](Feature-Risk)                        |When you haven't built features the market needs, or they contain bugs, or the market changes underneath you.       |
|[Complexity Risk](Complexity-Risk)                  |Your software is so complex it makes it hard to change, understand or run             |        
|[Communication Risk](Communication-Risk)            |Risks associated with getting messages heard and understood|             
|[Dependency Risk](Dependency-Risk)                  |Risks of depending on other people, products, software, functions, etc.|  
|[Software Dependency Risk](Software-Dependency-Risk)|When you choose to depend on a software library, service or function|    
|[Process Risk](Process-Risk)                        |When you depend on a business process, or human process to give you something you need|
|[Schedule Risk](Schedule-Risk)                      |Risks associated with having a dependency on time (or money)|    
|[Boundary Risk](Boundary-Risk)                      |Risks due to making decisions that limit your choices later on|            
|[Coordination Risk](Coordination-Risk)              |Risks due to the fact that systems contain multiple agents, which need to work together|       
|[Map And Territory Risk](Map-And-Territory-Risk)    |Risks due to the fact that people don't see the world as it really is|  
|[Agency Risk](Agency-Risk)                          |Risks that staff have their own goals, which might not align with those of the project/team|
|[Operational Risk](Production-Risk)                 |General risks associated with running a software service or business in the real world|
       
On each page we'll start by looking at the category of the risk _in general_, and then break this down into some specific subtypes.  At the end, in [Staging and Classifying](Staging-And-Classifying) we'll have a recap about what we've seen and make some guesses about how things fit together.                                                          

So, let's get started with [Feature Risk](Feature-Risk).
