![Under Construction](images/state/uc.png)


## What Is It

Design is what you do every time you think of an action to mitigate a risk.  And **Big Design Up Front** is where you do a lot of it in one go, for example:

 - Where you think about the design of all (or a set of) the requirements in one go, in advance.
 - Where you consider a _set of [Attendant Risks](Glossary#attendant-risk)_ all at the same time.
 
Compare with "little" design, where we consider just the _next_ requirement, or the _most pressing_ risk. 
 
Although it's fallen out of favour in Agile methodologies, there are benefits to doing this _sometimes_. 

## How It Works  

As we saw in [Meet Reality](Meeting-Reality), "Navigating the [Risk Landscape](Risk-Landscape)", meant going from a position of high risk, to a position of lower risk.  [Agile Design](Agile) is much like [Gradient Descent](): each day, one small step after another _downwards in risk_ on the [Risk Landscape](Risk-Landscape).

But the problem with this is you can get trapped in a [Local Minima](), where there are _no_ easy steps to take to get you to where you want to be.  Here is a [real life example](Tradeoffs).  This is [Dead End Risk](Dead-End-Risk).

In these cases, you have to _widen your horizon_ and look at where you want to go:  and this is the process of _design_.  You're not necessarily now taking steps on the [Risk Landscape](Risk-Landscape), but imagining a place on the [Risk Landscape](Risk-Landscape) where you want to be, and checking it against your [Internal Model](Glossary#Internal-Model) for validity.

## Examples



## Feedback Loops & Mitigated Risks

The feedback loop for any design is [Review and Sign Off](Sign-Off).

### [Too Many Cooks](Too-Many-Cooks)

By allowing lots of stakeholders to review and [agree to a design](Sign-Off), or select from alternatives, we try to reconcile the needs of lots of stakeholders _early on_ in a project.

### [Visibility Risk](Visibility-Risk) 

To allow for _discussion and understanding_ of the project between multiple parties.  This may extend to design being _marketing material_ to help explain the project to potential clients or budget-holders.

### [Technical-Debt](Technical-Debt)

To ensure an overall aesthetic or architectural integrity, avoiding the [Technical-Debt](Technical-Debt) that you might accrue by building the wrong things first.

### [Dead End Risk](Dead-End-Risk)

Often, by thinking big-picture we can avoid building components that _seem_ like a good next step, but actually aren't.  

## Attendant Risks

Building architects appreciate that their _plans might change_:  Roman ruins might be discovered underneath the site, or the supporting wall might not be as sound as originally thought.  The more effort you put into a design, the more will be wasted if it's wrong.  So, how deep should you go?  The answer as usual, is keep designing while it is reducing your overall project risk.  

 - The design might itself take a long time to complete [Schedule Risk](Schedule-Risk).
 - People _stop thinking_ [once they have a design](Map-And-Territory), even when reality _obviously_ deviates from what the design assumed.  But the whole point of a plan is that it's easier to change than the thing you are doing the plan for.  
 - If your plan starts to become as detailed as the code would be (but doesn't run) then you've made the mistake of _overspecification_, and you are creating [Technical Debt](Technical-Debt).  
 
> Everyone has a great plan until they get hit in the nose - Mike Tyson
> Fail to plan and you plan to fail - Eisenhower?



Risk first design example ; building the research indexer
