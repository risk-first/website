![For Review](images/state/for-review.png)

In [the previous section](One-Size-Fits-No-One), we saw how _Lean Software Development_ owed its existence to production-line manufacturing techniques developed at Toyota.  And, we saw that the _Waterfall_ approach originally came from engineering.  If Risk-First is anything, it's about applying the techniques of _Risk Management_ to the discipline of _Software Development_ (there's nothing new under the sun, after all).  

One key activity of Risk Management we haven't discussed yet is _categorizing_ risks.  Thus, Part 2 of Risk-First is all about developing categories of risks for use in Software Development.

## The Risk Landscape Again

In [Meeting Reality](Meeting-Reality), we looked at the concept of the [Risk Landscape](Risk-Landscape), and how a software project tries to _navigate_ across this landscape, testing the way as it goes, and trying to get to a position of _more favourable risk_.

It's tempting to think of our [Risk Landscape](Risk-Landscape) as being like a [Fitness Landscape](https://en.wikipedia.org/wiki/Fitness_landscape).  That is, you have a "cost function" which is your height above the landscape, and you try and optimise by moving downhill in a [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent) fashion.  

However, there's a problem with this:  As we said in [Evaluating Risk](Evaluating-Risk), we don't have a cost function.  We can only guess at what risks there are.  And, we have to go on our _experience_. For this reason, I prefer to think of the [Risk Landscape](Risk-Landscape) as a terrain which contains _fauna_ and _obstacles_ (or, specifically [_Boundaries_](Boundary-Risk)).

Just as I can tell you that the landscape outside your window will probably will have some trees, fields and buildings, and that the buildings are likely to be joined together by roads, we can make generalisations about risks too.

## Why Should We Categorise The Risks?

A lot of knowledge and understanding of the world starts by naming and categorising things.  

If we were studying insects, this might be a guide giving you a description and a picture of each insect, telling you where to find it and what it does.  <!-- tweet-end --> That doesn't mean that this is _all_ there is to know.  Just as a scientist could spend her entire life studying a particular species of bee, each of the risks we'll look at really has a whole sub-discipline of Computer Science attached to it, which we can't possibly hope to cover in any great depth.  

As software developers, we can't hope to know the detailed specifics of the whole discipline of [Complexity Theory](https://en.wikipedia.org/wiki/Complexity_theory), or [Concurrency Theory](https://en.wikipedia.org/wiki/Concurrency_(computer_science)).  But, we're still required to operate in a world where these things exist.  So, we may as well get used to them, and ensure that we respect their primacy.  We are operating in _their_ world, so we need to know the rules.

Once we can spot and name different types of risk, we can then think about their characteristics, and how to manage or avoid them.  In each of the following sections, we'll be looking at a different category of risk, some of it's characteristics and sometimes suggesting actions to take to deal with it.

But foremost, this is a "spotters' guide" to software risks and where to find them.  <!-- tweet-end -->

## Our Tour Itinerary

Below is a table outlining the different risks we'll see.  There _is_ an order to this:  the later risks are written assuming a familiarity with the earlier ones.  Hopefully, you'll stay to the end and see everything, but you're free to choose your own tour if you want to.

|Risk            |          Description           |      
|----------------|--------------------------|
|[Feature Risk](Feature-Risk)                        |When you haven't built features the market needs, or they contain bugs, or the market changes underneath you.  <br />     |
|[Communication Risk](Communication-Risk)            |Risks associated with getting messages heard and understood.|             
|[Complexity Risk](Complexity-Risk)                  |Your software is so complex it makes it hard to change, understand or run.             |        
|[Dependency Risk](Dependency-Risk)                  |Risks of depending on other people, products, software, functions, etc. This is a general look at dependencies, before diving into specifics like...|  
|[Scarcity Risk](Scarcity-Risk)                      |Risks associated with having a dependency on time, money or some other limited resource.|    
|[Software Dependency Risk](Software-Dependency-Risk)|When you choose to depend on a software library, service or function.|    
|[Process Risk](Process-Risk)                        |When you depend on a business process, or human process to give you something you need.|
|[Boundary Risk](Boundary-Risk)                      |Risks due to making decisions that limit your choices later on.  Sometimes, you go the wrong way on the [Risk Landscape](Risk-Landscape) and it's hard to get back to where you want to be.|            
|[Agency Risk](Agency-Risk)                          |Risks that staff have their own [Goals](Glossary#goal-in-mind), which might not align with those of the project or team.|
|[Coordination Risk](Coordination-Risk)              |Risks due to the fact that systems contain multiple agents, which need to work together.|       
|[Map And Territory Risk](Map-And-Territory-Risk)    |Risks due to the fact that people don't see the world as it really is. (After all, they're working off different, imperfect [Internal Models](Glossary#internal-model).)|  
|[Operational Risk](Operational-Risk)                |Software is embedded in a system containing people, buildings, machines and other services.  Operational risk considers this wider picture of risk associated with running a software service or business in the real world.|
       
On each page we'll start by looking at the category of the risk _in general_, and then break this down into some specific sub-types.  At the end, in [Staging and Classifying](Staging-And-Classifying) we'll have a recap about what we've seen and make some guesses about how things fit together.  

## Correlation & Causation

Although we're going to try and categorise the kinds of things we see on this [Risk Landscape](Risk-Landscape), this isn't going to be perfect: 

 - One risk can "blend" into another just like sometimes a "field" is also a "car-park" or a building might contain some trees (but isn't a forest).
 - As we know from [Part 1](Home#Part-1-Introduction), mitigating one risk probably means accepting another.
 - There is _correlation_ between different risks:  one risk may cause another, or two risks may be due to the same underlying cause.
  
Risk is messy.  It's not always easy to tease apart the different components of risk and look at them individually.<!-- tweet-end -->  Let's look at a high-profile recent example to see why.

In the [Financial Services](https://en.wikipedia.org/wiki/Financial_services) industry, whole _departments_ exist to calculate things like:

- **[Market Risk](https://en.wikipedia.org/wiki/Market_risk):**  the risk that the amount some asset is going to change in value.
- **[Credit Risk](https://en.wikipedia.org/wiki/Credit_risk):**  the risk that someone who owes you a payment at a specific point in time might not pay it back.
- **[Liquidity Risk](https://en.wikipedia.org/wiki/Liquidity_risk):** the risk that you can't find a market to sell/buy something, usually leading to a shortage of ready cash.

In the financial crisis of 2007, these models of risk didn't turn out to be much use.   Although there are lots of conflicting explanations of what happened, one way to look at it is this:

 - Liquidity difficulties (i.e. amount of cash you have for day-to-day running of the bank) caused some banks to not be able to cover their short term payment obligations.
 - This caused credit defaults (the thing that [Credit Risk](https://en.wikipedia.org/wiki/Credit_risk) measures were meant to guard against) even though the banks _technically_ were solvent.
 - Once credit defaults started, this worried investors in the banks, which had massive [Market Risk](https://en.wikipedia.org/wiki/Market_risk) impacts that none of the models foresaw.

All the [Risks](Glossary#Risk) were [correlated](https://www.investopedia.com/terms/c/correlation.asp).  That is, they were affected by the _same underlying events_, or _each other_.

![Causation shown on a Risk-First Diagram: More complexity is likely to lead to more Operational Risk](images/generated/risks/landscape/causation.png)

It's like this with software risks, too, sadly.  For example, [Operational Risk](Operational-Risk) is going to be heavily correlated with [Complexity Risk](Complexity-Risk): the more complex your operation, the more risky it will be.  In the Risk-First diagrams, we will sometimes show correlation or causation with an arrow, like in the diagram above.

## We're all Naturalists Now

Just as naturalists are able to head out and find new species of insects and plants, we should expect to do the same. <!-- tweet-end --> Risk-First is by no means a complete picture - it's barely a sketch.   

It's a big, crazy, evolving world of software.  Help to fill in the details.   Report back what you find.<!-- tweet-end -->
                                                      

So, let's get started with [Feature Risk](Feature-Risk).
