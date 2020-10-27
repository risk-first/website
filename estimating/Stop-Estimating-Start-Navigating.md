---
title: "Stop Estimating, Start Navigating"
description: "Estimating tasks as part of your software methodology is often value-less ceremony and at worst a form of self-harm."
url: https://riskfirst.org/estimating/Stop-Estimating-Start-Navigating
categories:
 - Estimating
order: 9
featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/logo/R1_logo_black.svg">Stop Estimating, Start Navigating</image-artifact>'
---

# Stop Estimating, Start Navigating



- covid
  - sitting around a table doesn't work anymore, working from home, timezones
  - the end of agile: pair programming, pizza teams, stand up meetings, scrum planning sessions - we have to make do in a new world
  - working alone or with others is the new normal.
  - what I am codifying here is the way I work.  it also just happens to be the way risk management is done _for real_
- 









### Competing Goals

![Goals](/images/generated/estimating/planner/goals.png)

A confounding problem with goals is that _everyone has their own_.  While the business might be there to _make money_, everyone else on the project will have their own _personal_ goals (as you can see on the diagram above).   

Let's look at the "Fix the Continuous Integration Pipeline" task.  It might turn out that we have competing goals here:  the Development Team might want to spend time on this task, as the existing, poor CI tooling is damaging productivity and causing acrimony in the team.  No one wants to work in an unproductive environment.

![Continuous Integration Task](/images/generated/estimating/planner/ci.png)

That said, the product owners might worry about a different risk:  while diverting part of the development effort to fixing CI might help productivity _in the long term_, it might add pressure to the schedule _in the short term_, and delay other important tasks from getting done, as shown in the above diagram.    





The third question you need to always be asking is:  _what is our goal?_

Considered individually, the tasks on our backlog clearly are operations which change the risks we are facing, but unless we understand the _goal_ or _goals_ of the product, we're not really in a position to make judgements about whether some set of risks is better or worse.

![One Goal](/images/generated/estimating/planner/one-goal.png)

If we are a startup with some investors, they might have set us the goal themselves.  Perhaps the future funding of the business is predicated on our ability to generate a certain number of subscribers?  Then the business goal might look like that in the diagram above.

##### The rounded-corner containers with bold titles show _who a risk affects_.  

As you can see in this diagram _goals_ look very similar to _risks_.  This is by design:  a _goal_ is really an "upside risk":  it's a possible future, but one we'd like to _move towards_ instead of _away from_.



This s

Let's consider the third task: refactoring the subscription model.



![Use-Cases With Risk Profiles](/images/generated/estimating/planner/example2.png)

The above diagram gives us some indication _why_ the tasks are on the backlog:

 - **Refactoring subscriptions** is all about the bottom line: there's a risk that the company _isn't profitable enough_.  That might translate into management being replaced, or bankruptcy, or something.
 - 

 - **The Search Function** addresses a risk that our _clients may go elsewhere_:  they're annoyed with the product's lack of functionality.


 


 - Is velocity important?
 
 Scrum is constantly a race to get stuff done and meet estimates.  Quite often, the estimates turn out to be BS.
 
 Here's the rub: 90% of everything I've ever written has gone in the bin.
 
 This means, if I just concentrated on doing the _useful_ stuff, I would be 10X better than I am now.
 
What does that mean? 

> "Simplicity--the art of maximizing the amount of work not done--is essential."

## Going Meta




The problem is that estimation only addresses a single risk:  runway risk/time resource.  It says nothing about other risks that you might bump into.

Why is all my code in the bin?  I guess either it was badly written (which, probably it isn't, given that it's probably not objectively worse than the 10% that is in production) or, more likely, it didn't address _Feature RIsk_ properly, or, it was useful, but people didn't find out about how amazing it was.  Or, it was built to work on top of X, but then X was decomissioned (Dependency Risk) or, the budget was cut from the department and there was no funding (Dependency Risk... but maybe caused by Feature RIsk)?

No estimates says forget about trying to get the numbers right, because you can't.  What's better than that?  Let's try and focus on reducing that 90% of waste by thinking about _risks other than time_.

> "Ian: Your scientists were so preoccupied with whether or not they could, they didn’t stop to think if they should. " - [Jurassic Park]().


Risk First Planning Game:  

X: time 
Y: importance  

Place risks on the board (as well as goals).   Try and mitigate risks with actions.  Consider whether 

