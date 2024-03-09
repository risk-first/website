---
title: Meeting Reality
description: Are you living in an ivory tower, or do you have boots on the ground?
url: https://riskfirst.org/thinking/Meeting-Reality

featured: 
  class: bg3
  element: '<action>Meeting Reality</action>'
tags:
 - Thinking Risk-First
 - Feedback Loop
 - Take Action
 - Risk Landscape
sidebar_position: 4
redirect_from: 
 - /Meeting-Reality
tweet: yes
---

# Meeting Reality

Here we look at how exposing your "Internal Model" to reality is in itself a good risk management technique.

![Meeting Reality](/img/generated/principles/meet-reality.png)

## Your Model

The world is too complex to understand at a glance.  It takes years for humans to build a model of reality in our heads.  And within a team, the model is split amongst people, documents, email, tickets, code... but it is still a model.  

This "[Internal Model](../thinking/Glossary.md#Internal-Model)" of reality informs the actions we take in life: we take actions based on our model, hoping to change reality with some positive outcome.

For example, while organising a dinner party you'll have a model of who you expect to come.  You might take actions to ensure there is enough food, that you've got RSVPs and so on.

The actions we take have consequences in the real world.   Hopefully, we eliminate some known risks but we might expose new [hidden risks](../thinking/Glossary.md#hidden-risk) as we go.  There is a _recursive_ nature about this - we're left with an updated Internal Model, and we see new actions we have to take as a result.

![Taking actions changes reality, but changes your model of the risks too](/img/generated/introduction/model_vs_reality_2.png)

## Navigating the "Risk Landscape"

The diagram above shows _just one possible action_ but really, you'll have choices.  We often have multiple ways of achieving our goals.  

What's the best way?  

I would argue that the best choice of what to do is the one which mitigates the most existing risk while accruing the least attendant risk to get it done.  That is, when you take an action, you are trading off a big risk for a smaller one.  

![Navigating The Risk Landscape](/img/generated/introduction/risk_landscape_1.png)

You can think of [Taking Action](../thinking/Glossary.md#taking-action) as moving your project on a "[Risk Landscape](../risks/Risk-Landscape.md)":  ideally, when you take an action, you move from some place with worse risk to somewhere more favourable, as shown in the diagram above.

Sometimes, you can end up somewhere _worse_:  the action you took to manage a risk has made things worse.  Almost certainly, this will have been due to a hidden risk that you weren't aware of when you embarked on the action, otherwise you'd not have chosen it.  

### Example: Unit Testing

Take Unit Testing for example:  Clearly, writing Unit Tests adds to the amount of development work, so on its own, it adds [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).   

However, if you write _just enough_ of the right Unit Tests, you should be short-cutting the time spent finding issues in the User Acceptance Testing (UAT) stage, so you're hopefully trading off a larger [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) from UAT and adding a smaller [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) to Development.  

### Example: Automation

![Hidden Risks of Automation](/img/generated/introduction/risk_landscape_2_automating.png)

_Automating processes_ (as shown in the diagram above) is often tempting: it _should_ save time, and reduce the amount of boring, repetitive work on a project.  But sometimes, it turns into an industry in itself, consumes more effort than it'll ever pay back and needs to be maintained in the future at great expense. 

### Example: MongoDB

On a previous project in a bank we had a requirement to store a modest amount of data and we needed to be able to retrieve it fast.  The developer chose to use [MongoDB](https://www.mongodb.com) for this.  At the time, others pointed out that other teams in the bank had had lots of difficulty deploying MongoDB internally, due to licensing issues and other factors internal to the bank.

Other options were available, but the developer chose MongoDB because of their _existing familiarity_ with it:   therefore, they felt that the [Hidden Risks](../thinking/Glossary.md#hidden-risk) of MongoDB were _lower_ than the other options.

This turned out to be a mistake:  the internal bureaucracy eventually proved too great and MongoDB had to be abandoned after much investment of time.

This is not a criticism of MongoDB: it's simply a demonstration that sometimes, the cure is worse than the disease.  Successful projects are _always_ trying to _reduce_ [Attendant Risks](../thinking/Glossary.md#attendant-risk).  

## The Cost Of Meeting Reality

Meeting reality _in full_ is costly.  There are lots of tasks that are _expensive_:

- The Release Process
- Training Users
- Getting users to use your system
- Gathering feedback

These steps take a lot of effort and time, but you don't have to meet the "whole of reality" in one go.  You can meet it in a limited way which is less expensive.  

To de-risk these big operations, you should try to meet reality:

- **Sooner**: so you have time to mitigate the hidden risks it uncovers.
- **More Frequently**: so the hidden risks don't hit you all at once.
- **In Smaller Chunks**: so you're not over-burdened by hidden risks all in one go.
- **With Feedback**: if you don't collect feedback from the experience of meeting reality, hidden risks _stay hidden_.

### Example: User Acceptance Testing (UAT)

Putting your software in front of users in production will definitely put you into contact with reality.  You'll learn a lot. 
 
Beta-releases and releasing to small populations of users also allow us to meet reality, but in a less risky way.

![Testing flushes out Hidden Risk, but increases Schedule Risk](/img/generated/introduction/meeting_reality_testing.png)

Activities like User Acceptance Testing (UAT) or incremental delivery give us some flavour of reality, but more cheaply and sooner.  

## Summary

So, here we've looked at Meeting Reality, which basically boils down to taking actions to expose yourself to hidden risks and seeing how it turns out:

- Each Action you take is a step on the [Risk Landscape](../thinking/Glossary.md#risk-landscape).
- Each Action exposes new [Hidden Risks](../thinking/Glossary.md#hidden-risk), changing your [Internal Model](../thinking/Glossary.md#Internal-Model).
- Ideally, each action should reduce the overall [Attendant Risk](../thinking/Glossary.md#attendant-risk) on the project (that is, puts it in a better place on the [Risk Landscape](../thinking/Glossary.md#risk-landscape).

Could it be that _everything_ you do on a software project is risk management? This is an idea explored next in [Just Risk](Just-Risk.md).



 
