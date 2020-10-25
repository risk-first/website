---
title: Just Risk
description: An argument that all tasks in software development are focused on managing risks.
url: https://riskfirst.org/thinking/Just-Risk

featured: 
  class: bg3
  element: '<risk class="internal-model" />'
categories:
 - Thinking Risk-First
order: 4
redirect_from: 
 - /Just-Risk
---

# Just Risk

In this section, I am going to propose the idea that everything you do on a software project is Risk Management.

In the [Development Process](Development-Process.md) section, we observed that all the activities in a simple methodology had a part to play in exposing different risks.  They worked to manage risk prior to them creating bigger problems in production.

Here, we'll look at one of the tools in the Project Manager's tool-box, the [RAID Log](http://pmtips.net/blog-new/raid-logs-introduction), and observe how risk-centric it is.

## RAID Log

Many project managers will be familiar with the [RAID Log](http://pmtips.net/blog-new/raid-logs-introduction).  It's simply four columns on a spreadsheet:  **Risks**, **Actions**, **Issues** and **Decisions**.
 
Let's try and put the following [Risk](../thinking/Glossary.md#risk) into the RAID Log:

> "Debbie needs to visit the client to get them to choose the logo to use on the product, otherwise we can't size the screen areas exactly."

 - So, is this an **action**?   Certainly.  There's definitely something for Debbie to do here. 
 - Is it an **issue**?  Yes, because it's holding up the screen-areas sizing thing. 
 - Is it a **decision**?  Well, clearly, it's a decision for someone.
 - Is it a **risk**?  Probably.  Debbie might go to the client and they _still_ don't make a decision.  What then?

## Let's Go Again

This is a completely made-up example, deliberately chosen to be hard to categorise.  Normally, items are more one thing than another.  But often, you'll have to make a choice between two categories, if not all four.  

This _hints_ at the fact that at some level it's all about risk:

## Every Action Attempts to Mitigate Risk

The reason you are _taking_ an action is to mitigate a risk.  For example: 

 - If you're coding up new features in the software, this is mitigating [Feature Risk](../risks/Feature-Risk.md) (which we'll explore in more detail later).  
 - If you're getting a business sign-off for something, this is mitigating the risk of everyone not agreeing on a course of action (a [Coordination Risk](../risks/Coordination-Risk.md)).  
 - If you're writing a specification, then that's mitigating the type of "Incorrect Implementation Risk" we saw in the last section. 

## Every Action Has Attendant Risk

- How do you know if the action will get completed?  
- Will it overrun, or be on time?  
- Will it lead to yet more actions?
- What [Hidden Risk](../thinking/Glossary.md#hidden-risk) will it uncover?

Consider _coding a feature_ (as we did in the earlier [Development Process](Development-Process.md) section).  We saw here how the whole process of coding was an exercise in learning what we didn't know about the world, uncovering problems and improving our [Internal Model](../thinking/Glossary.md#Internal-Model).  That is, flushing out the [Attendant Risk](../thinking/Glossary.md#attendant-risk) of the [Goal In Mind](../thinking/Glossary.md#Goal-In-Mind).

And, as we saw in the [Introduction](A-Simple-Scenario.md), even something _mundane_ like the Dinner Party had risks. 

## An Issue is Just A Type of Risk

- Because issues need to be fixed...  
- And fixing an issue is an action... 
- Which, as we just saw also carries risk.

One retort to this might be to say:  "an issue is a problem I have now, whereas a risk is a problem that _might_ occur. "  I am going to try and break that mind-set in the coming pages, but I'll just start with this:

- Do you know _exactly_ how much damage this will do?
- Can you be sure that the issue might not somehow go away?  

_Issues_ then, just seem more "definite" and "now" than _risks_, right?  This classification is arbitrary:  they're all just part of the same spectrum, they all have inherent uncertainty, so there should be no need to agonise over which column to put them in.

## Goals Are Risks Too

In the previous sections, we introduced something of a "diagram language" of risk.  Let's review it:

![Risk-First Diagram Language](/images/generated/introduction/all_risk_management_language.png)
 
[Goals](../thinking/Glossary.md#goal-in-mind) live inside our [Internal Model](../thinking/Glossary.md#internal-model), just like Risks.  It turns out, that functionally, Goals and Risks are equivalent.  For example, The Goal of "Implementing Feature X" is equivalent to mitigating "Risk of Feature X not being present".

Let's try and back up that assertion with a few more examples:

|Goal                                |Restated As A Risk                                                   |
|------------------------------------|---------------------------------------------------------------------|
|Build a Wall                        |Mitigate the risk of something getting in / out                      |
|Land a man on the  moon             |Mitigate the risk of looking technically inferior during the cold war| 
|Move House                          |Mitigate the risks/problems of where you currently live              |

There is a certain "interplay" between the concepts of risks, actions and goals.  After all, on the [Risk Landscape](../thinking/Glossary.md#risk-landscape) they correspond to a starting point, a movement, and a destination.  From a redundancy perspective, any one of these can be determined by knowing the other two.  

Psychologically, humans are very goal-driven:  they like to know where they're going, and are good at organising around a goal.  However, by focusing on goals ("solutionizing") it's easy to ignore alternatives.  By focusing on "Risk-First", we don't ignore the reasons we're doing something.  

## Every Decision is About Payoff  

Sometimes, there will be multiple moves available on the [Risk Landscape](../thinking/Glossary.md#risk-landscape) and you have to choose one. 

- There's the risk you'll decide wrongly.
- And, making a decision takes time, which could add risk to your schedule.
- And what's the risk if the decision doesn't get made?

Let's take a hypothetical example:  you're on a project and you're faced with the decision - release now or do more testing?  

Obviously, in the ideal world, we want to get to the place on the [Risk Landscape](../thinking/Glossary.md#risk-landscape) where we have a tested, bug-free system in production.  But we're not there yet, and we have funding pressure to get the software into the hands of some paying customers.  The table below shows an example: 

|Risk Managed          |Action               |Attendant Risk                           |Payoff             | 
|----------------------|---------------------|-----------------------------------------|-------------------|
|Funding Risk          |Go Live              |Reputational Risk, Operational Risk      |MEDIUM             |
|Implementation Risk   |User Acceptance Test |Worse Funding Risk, Operational Risk     |LOW                |

This is (a simplification of) the dilemma of lots of software projects - _test further_, to reduce the risk of users discovering bugs ([Implementation Risk](../risks/Feature-Risk.md#implementation-risk)) which would cause us reputational damage, or _get the release done_ and reduce our [Funding Risk](../risks/Scarcity-Risk.md#funding-risk) by getting paying clients sooner. 

In the above table, it _appears_ to be better to do the "Go Live" action, as there is a greater [Payoff](../thinking/Glossary.md#payoff).  The problem is, actions are not _commutative_, i.e. the order you do them in counts.

![UAT or Go Live: where will you end up?](/images/generated/introduction/risk_landscape_3_moves.png)

The diagram above shows our decision as _moves on the [Risk Landscape](../thinking/Glossary.md#risk-landscape)_.  Whether you "Go Live" first, or "UAT" first makes a difference to where you will end up.  Is there a further action you can take to get you from the "Dead End" to the "Goal"?  Perhaps.

### Failure

So, when we talk about a project "failing", what do we mean?  

Usually, we mean we've failed to achieve a goal, and since _goals are risks_, it is simply the scenario where we are overwhelmed by [Attendant Risks](../thinking/Glossary.md#attendant-risk): there is _no_ action to take that has a good-enough [Payoff](../thinking/Glossary.md#payoff) to get us out of our hole.    
 
## What To Do?

It makes it much easier to tackle the RAID log if there's only one list.  But you still have to choose a _strategy_:  do you tackle the _most important_ risk on the list, or the _most urgent_, or take the action with the biggest [Payoff](../thinking/Glossary.md#payoff) and deal with it?

In the next section, [Evaluating Risk](Evaluating-Risk.md) we'll look at some approaches to choosing what to do. 
