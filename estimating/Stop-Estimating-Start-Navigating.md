![Under Construction](/images/state/uc.png)

# Stop Estimating, Start Navigating

This is the _ninth_ article in the [Risk-First](https://riskfirst.org) series on [Estimating](/estimating/Start.md).  We've come a long way:

- In the first four articles, [Fill-The-Bucket](Fill-The-Bucket.md), [Kitchen Cabinet](Kitchen-Cabinet.md), [Journeys](Journeys.md) and [Fractals](Fractals.md) we looked at the various reasons why estimating is such a nightmare on software projects.  This is summarised in [Analogies](Analogies.md).  The upshot is that predictable, well understood, repeatable things can be estimated with some confidence.   However, as soon as software is predictable, repeatable and well-understood, _you're doing it wrong_.

- Then, we looked at how [Contracts](Contracts.md) work, because they are a way of managing risks in the face of uncertain estimates and time-scales.  

- In article seven, we explored how [Scrum](Fixing-Scrum.md), the popular Agile methodology, fails to understand this crucial problem with estimates (among other failings).

- Then, in [Risk-First Analysis](Risk-First-Analysis.md) we look at how we can work out what to build by examining what [risks](../thinking/Glossary.md#risk) we'd like to address and which [goals](../thinking/Glossary.md#risk) or [Upside Risks](../thinking/Glossary.md#upside-risk) we'd like to see happen.  

So, now we're up to date.  It's article nine, and I was going to build on [Risk-First Analysis](Risk-First-Analysis.md) to show how to plan work for a team of people over a week, a month, a year.  

## Something Happened 

But then, Covid-19 happened.   This is the first time I've started a new article since then, so for the UK, six months have passed.  Luckily, the reason for this is not that I (or any of my close friends or relatives) were ill, but instead because of a realisation _Agile techniques as they were once imagined, are now all but impossible_.

Let's look at a few examples:

 - **Lunch**: Kent Beck and others promoted the idea of developers eating together, and working in "Two-Pizza Teams".  I haven't had lunch with my colleagues for over six months.  And half of them are on a different continent to me anyway.

 - **Pair Programming**:  Once the darling of [XP](), Pair Programming was never hugely popular, although was often a useful tool to have in the arsenal.  If I pair program now, it's via me sharing my screen with someone, while they watch and comment (or vice versa).  I can't gesture at a bug while my partner is in control, and I find that I call out line-numbers a lot.  This has changed, but not as much as...
 
 - **Stand-Ups**:  Stand-up meetings were already dying.  No-one liked standing up and they often got held pushed onto conference calls because people needed to dial in from home or the remote office they worked in.  Whatever remnants of the classic "Agile Stand-Up" meeting existed prior to Covid-19 died immediately at that moment.  This practice migrated to the chat windows of [Slack]() and [Teams](), and became asynchronous.  
 
 - **Planning Poker**: Another meeting, consigned to conference-call.  Planning meetings are invariably tedious.  It's hard to maintain the attention of all the developers when they are in the room together, let alone with the unlimited distractions of the whole Internet available right next to you.  Planning sessions and "management off-sites" are at this point, broken.
 
 - **Post-It Notes**:  At one time, post-it notes were arranged on a white-board to indicate work in progress.  The planning meeting would be about re-defining the work on the notes, prioritising the notes, sub-dividing the work on the notes and allocating the notes to people to implement.  But the notes have been in the bin a long time, and we use JIRA or GitHub issues instead,

### Working Physically Together 




### Competing Goals


A confounding problem with goals is that _everyone has their own_.  While the business might be there to _make money_, everyone else on the project will have their own _personal_ goals (as you can see on the diagram above).   

Let's look at the "Fix the Continuous Integration Pipeline" task.  It might turn out that we have competing goals here:  the Development Team might want to spend time on this task, as the existing, poor CI tooling is damaging productivity and causing acrimony in the team.  No one wants to work in an unproductive environment.

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

