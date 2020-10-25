---
title: Meeting Reality
description: The risk mitigating strategy of testing your ideas against reality.
url: https://riskfirst.org/thinking/Meeting-Reality

featured: 
  class: bg3
  element: '<action>Meeting Reality</action>'
categories:
 - Thinking Risk-First
order: 3
redirect_from: 
 - /Meeting-Reality
---

# Meeting Reality

In this section, we will look at how exposing your [Internal Model](../thinking/Glossary.md#Internal-Model) to reality is in itself a good risk management technique.

## Revisiting the Model

In [A Simple Scenario](A-Simple-Scenario.md), we looked at a basic model for how **Reality** and our [Internal Model](../thinking/Glossary.md#Internal-Model) interacted with each other:  we take action based on our [Internal Model](../thinking/Glossary.md#Internal-Model), hoping to **change Reality** with some positive outcome.

And, in [Development Process](Development-Process.md) we looked at how we can meet with reality in _different forms_:  Analysis, Testing, Integration and so on, and saw how the model could work in each stage of a project.

It should be no surprise to see that there is a _recursive_ nature about this:   the actions we take each day have consequences, they expose new [hidden risks](../thinking/Glossary.md#hidden-risk) which inform our [Internal Model](../thinking/Glossary.md#Internal-Model) and at the same time change reality in some way.  As a result, we then have to take _new actions_ to deal with these new risks.  

So, let's see how this kind of recursion looks on our model.

![Taking actions changes reality, but changes your model of the risks too](/images/generated/introduction/model_vs_reality_2.png).

## Navigating the "[Risk Landscape](../risks/Risk-Landscape.md)"

The diagram above shows _just one possible action_, in reality, you'll have choices.  We often have multiple ways of achieving a [Goal In Mind](../thinking/Glossary.md#Goal-In-Mind).  

What's the best way?  

I would argue that the best way is the one which mitigates the most existing risk while accruing the least attendant risk to get it done.  

Ideally, when you take an action, you are trading off a big risk for a smaller one.  Take Unit Testing for example.  Clearly, writing Unit Tests adds to the amount of development work, so on its own, it adds [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).   However, if you write _just enough_ of the right Unit Tests, you should be short-cutting the time spent finding issues in the User Acceptance Testing (UAT) stage, so you're hopefully trading off a larger [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) from UAT and adding a smaller [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) to Development.  There are other benefits of Unit Testing too:  once written, a suite of unit tests is almost cost-free to run repeatedly, whereas repeating a UAT is costly as it involves people's time.

You can think of [Taking Action](../thinking/Glossary.md#taking-action) as moving your project on a "[Risk Landscape](../risks/Risk-Landscape.md)":  ideally, when you take an action, you move from some place with worse risk to somewhere more favourable.

![Navigating The Risk Landscape](/images/generated/introduction/risk_landscape_1.png)

Sometimes, you can end up somewhere _worse_:  the actions you take to manage a risk will leave you with worse [Attendant Risks](../thinking/Glossary.md#attendant-risk) afterwards.  Almost certainly, this will have been a [Hidden Risk](../thinking/Glossary.md#hidden-risk) when you embarked on the action, otherwise you'd not have chosen it.  

### An Example: Automation

For example, _automating processes_ is very tempting: it _should_ save time, and reduce the amount of boring, repetitive work on a project.  But sometimes, it turns into an industry in itself, and consumes more effort than it's worth. 

![Hidden Risks of Automation](/images/generated/introduction/risk_landscape_2_automating.png)

### Another Example: MongoDB

On a recent project in a bank, we had a requirement to store a modest amount of data and we needed to be able to retrieve it fast.  The developer chose to use [MongoDB](https://www.mongodb.com) for this.  At the time, others pointed out that other teams in the bank had had lots of difficulty deploying MongoDB internally, due to licensing issues and other factors internal to the bank.

Other options were available, but the developer chose MongoDB because of their _existing familiarity_ with it:   therefore, they felt that the [Hidden Risks](../thinking/Glossary.md#hidden-risk) of MongoDB were _lower_ than the other options, and disregarded the others' opinions.

This turned out to be a mistake:  The internal bureacracy eventually proved too great, and MongoDB had to be abandoned after much investment of time.

This is not a criticism of MongoDB: it's simply a demonstration that sometimes, the cure is worse than the disease.  Successful projects are _always_ trying to _reduce_ [Attendant Risks](../thinking/Glossary.md#attendant-risk).  

## Payoff

We can't know in advance how well any action we take will work out.  Therefore, [Taking Action](../thinking/Glossary.md#taking-action) is a lot like placing a bet.  

**[Payoff](../thinking/Glossary.md#payoff)** then is our judgement about whether we expect an action to be worthwhile:  are the risks we escape _worth_ the attendant risks we will encounter?  We should be able to _weigh these separate risks in our hands_ and figure out whether the [Payoff](../thinking/Glossary.md#payoff) makes a given [Action](../thinking/Glossary.md#taking-action) worthwhile.  

The fruits of this gambling are revealed when we [meet reality](../thinking/Glossary.md#meet-reality), and we can see whether our bets were worthwhile. 

## The Cost Of Meeting Reality

Meeting reality _in full_ is costly.  For example, going to production can look like this:

- Releasing software
- Training users
- Getting users to use your system
- Gathering feedback

All of these steps take a lot of effort and time.   But you don't have to meet the whole of reality in one go.  But we can meet it in a limited way which is less expensive.  

In all, to de-risk, you should try and meet reality:

- **Sooner**: so you have time to mitigate the hidden risks it uncovers.
- **More Frequently**: so the hidden risks don't hit you all at once.
- **In Smaller Chunks**: so you're not over-burdened by hidden risks all in one go.
- **With Feedback**: if you don't collect feedback from the experience of meeting reality, hidden risks _stay hidden_.

In [Development Process](Development-Process.md), we performed a UAT in order to [Meet Reality](../thinking/Glossary.md#Meet-Reality) more cheaply and sooner.  The _cost_ of this is that we delayed the release to do it, adding risk to the schedule.  

![Testing flushes out Hidden Risk, but increases Schedule Risk](/images/generated/introduction/meeting_reality_testing.png)

## Practice 1: YAGNI 

As a flavour of what's to come, let's look at YAGNI, an acronym for You Aren't Gonna Need It:

> YAGNI originally is an acronym that stands for "You Aren't Gonna Need It". It is a mantra from Extreme Programming that's often used generally in agile software teams. It's a statement that some capability we presume our software needs in the future should not be built now because "you aren't gonna need it".  - [YAGNI, _Martin Fowler_](https://www.martinfowler.com/bliki/Yagni.html)

The idea makes sense:  if you take on extra work that you don't need, _of course_ you'll be accreting [Attendant Risks](../thinking/Glossary.md#attendant-risk).

But, there is always the opposite opinion:  [You _Are_ Gonna Need It](http://wiki.c2.com/?YouAreGonnaNeedIt).  As a simple example, we often add log statements in our code as we write it (so we can trace what happened when things go wrong), though following YAGNI strictly says we shouldn't.  

### Which is right?

Now, we can say:  do the work _if there is a worthwhile [Payoff](../thinking/Glossary.md#payoff)_.  

 - Logging statements are _good_, because otherwise, you're increasing the risk that in production, no one will be able to understand _how the software went wrong_.
 - However, adding them takes time, which might introduce [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).
 
So, it's a trade-off: continue adding logging statements so long as you feel that overall, the activity pays off reducing overall risk.

## Practice 2: Do The Simplest Thing That Could Possibly Work

Another mantra from Kent Beck (originator of the [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming) methodology), is "Do The Simplest Thing That Could Possibly Work", which is closely related to YAGNI and is an excellent razor for avoiding over-engineering.  At the same time, by adding "Could Possibly", Kent is encouraging us to go beyond straightforward iteration, and use our brains to pick apart the simple solutions, avoiding them if we can logically determine when they would fail. 

Our risk-centric view of this strategy would be:

- Every action you take on a project has its own [Attendant Risks](../thinking/Glossary.md#attendant-risk).
- The bigger or more complex the action, the more [Attendant Risk](../thinking/Glossary.md#attendant-risk) it'll have.
- The reason you're taking action _at all_ is because you're trying to reduce risk elsewhere on the project 
- Therefore, the biggest [Payoff](../thinking/Glossary.md#payoff) is likely to be the one with the least [Attendant Risk](../thinking/Glossary.md#attendant-risk).
- So, usually this is going to be the simplest thing.

So, "Do The Simplest Thing That Could Possibly Work" is really a helpful guideline for Navigating the [Risk Landscape](../risks/Risk-Landscape.md), but this analysis shows clearly where it's left wanting:

 - _Don't_ do the simplest thing if there are other things with a better [Payoff](../thinking/Glossary.md#payoff) available. 

## Summary

So, here we've looked at Meeting Reality, which basically boils down to taking actions to manage risk and seeing how it turns out:

- Each Action you take is a step on the Risk Landscape
- Each Action exposes new [Hidden Risks](../thinking/Glossary.md#hidden-risk), changing your [Internal Model](../thinking/Glossary.md#Internal-Model).
- Ideally, each action should reduce the overall [Attendant Risk](../thinking/Glossary.md#attendant-risk) on the project (that is, puts it in a better place on the [Risk Landscape](../thinking/Glossary.md#risk-landscape)

Could it be that _everything_ you do on a software project is risk management? <!-- tweet-end --> This is an idea explored in [the next section](Just-Risk.md).



 
