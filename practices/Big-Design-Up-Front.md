Design is what you do every time you think of an action to mitigate a risk.

## Overview

Two ways of thinking about **Big Design Up Front**:

 - Where you think about the design of all (or a set of) the requirements in one go, in advance.
 - Where you consider a _set of [Attendant Risks](Attendant-Risk)_ all at the same time.
 
Compare with "little" design, where we consider just the _next_ requirement, or the _most pressing_ risk. 
 
Although it's fallen out of favour in Agile methodologies, there are benefits to doing this _sometimes_. 

### Local Minima Problem  

As we saw in [Meet Reality](Meeting-Reality), navigating the [Risk Landscape](Risk-Landscape)", meant going from a position of high risk, to a position of lower risk.  Agile is much like [Gradient Descent](): each day, one small step after another _downwards in risk_ on the [Risk Landscape](Risk-Landscape).

But the problem with this is you can get trapped in a [Local Minima](), where there are _no_ easy steps to take to get you to where you want to be.  Here is a [real life example](Tradeoffs).  

In these cases, you have to _widen your horizon_ and look at where you want to go:  and this is the process of _design_.  You're not necessarily now taking steps on the [Risk Landscape](Risk-Landscape), but imagining a place on the [Risk Landscape](Risk-Landscape) where you want to be, and checking it against your [Internal Model](Internal-Model) for validity.

## Risks Mitigated

 - To allow lots of stakeholders to review and [agree to a design](Sign-Off), or select from alternatives.  [Too Many Cooks](Too-Many-Cooks)
 - To allow for _discussion and understanding_ of the project between multiple parties.  [Invisibility](Invisibility)
 - To ensure an overall aesthetic or architectural integrity, avoiding the [Technical-Debt](Technical-Debt) that you might accrue by building the wrong things first.
 - To serve as *marketing material*

## Attendant Risks

 - The design might itself take a long time to complete [Schedule Risk](Schedule-Risk).
 - People _stop thinking_ [once they have a design](Map-And-Territory), even when reality _obviously_ deviates from what the design assumed.  But the whole point of a plan is that it's easier to change than the thing you are doing the plan for.  If your plan becomes as detailed as the code would be (but doesn't run) then you've made a big mistake:  
 
> Everyone has a great plan until they get hit in the nose - Mike Tyson
> Fail to plan and you plan to fail - Eisenhower?


## Feedback Loops



Building architects understand this:   plans for a building are _designs_, and they are made up-front for a few reasons:


But building architects appreciate that _plans will change_:  Roman ruins might be discovered underneath the site, or the supporting wall might not be as sound as originally thought.  The more effort you put into a design, the more will be wasted if it's wrong.  So, how deep should you go?
