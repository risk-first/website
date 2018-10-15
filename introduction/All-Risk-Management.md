![For Review](images/state/for-review.png)

In this section, I am going to introduce the idea that everything you do on a software project is Risk Management.

In the [last section](Development-Process), we observed that all the activities in a simple methodology had a part to play in exposing different risks.  They worked to manage risk prior to them creating bigger problems in production.

Here, we'll look at one of the tools in the Project Manager's tool-box, the [RAID Log](http://pmtips.net/blog-new/raid-logs-introduction), and observe how risk-centric it is.

## RAID Log

Many project managers will be familiar with the [RAID Log](http://pmtips.net/blog-new/raid-logs-introduction).  It's simply four columns on a spreadsheet:

 - Risks
 - Actions
 - Issues
 - Decisions
 
Let's try and put the following [Attendant Risk](Glossary#attendant-risk) into the RAID Log:

> Debbie needs to visit the client to get them to choose the logo to use on the product, otherwise we can't size the screen areas exactly.

 - So, is this an **action**?   Certainly.  There's definitely something for Debbie to do here. 
 - Is it an **issue**?  Yes, because it's holding up the screen-areas sizing thing. 
 - Is it a **decision**?  Well, clearly, it's a decision for someone.
 - Is it a **risk**?  Probably:  Debbie might go to the client and they _still_ don't make a decision.  What then?

## Let's Go Again

This is a completely made-up example, deliberately chosen to be hard to categorize.  Normally, items are more one thing than another.  But often, you'll have to make a choice between two categories, if not all four.  

This hints at the fact that at some level it's All Risk:

### Every Action Attempts to Mitigate Risk

The reason you are _taking_ an action is to mitigate a risk.  For example: 

 - If you're coding up new features in the software, this is mitigating [Feature Risk](Feature-Risk).  
 - If you're getting a business sign-off for something, this is mitigating a [Too Many Cooks](Coordination-Risk)-style _stakeholder risk_.  
 - If you're reading the specification, that's mitigating the type of "Developer Misimplementation Risk" we saw in the last section. 

### Every Action Carries Risk.  

- How do you know if the action will get completed?  
- Will it overrun, or be on time?  
- Will it lead to yet more actions?

Consider _coding a feature_ (as we did in the earlier [Development Process](Development-Process) section).  We saw here how the whole process of coding was an exercise in learning what we didn't know about the world, uncovering problems and improving our [Internal Model](Glossary#Internal-Model).  That is, flushing out the [Attendant Risk](Glossary#attendant-risk) of the [Goal In Mind](Glossary#Goal-In-Mind).

And, as we saw in the [Introduction](A-Simple-Scenario), even something _mundane_ like the Dinner Party had risks. 

### An Issue is Just A Type of Risk

- Because issues need to be solved...  
- And solving an issue is an action... 
- Which, as we just saw also carry risk.

One retort to this might be to say:  an issue is a problem I have now, whereas a risk is a problem that _might_ occur.  I am going to try and _break_ that mind-set in the coming pages, but I'll just start with this:

- Do you know _exactly_ how much damage this issue will do?
- Can you be sure that the issue might not somehow go away?  

_Issues_ then, just seem more "definite" and "now" than _risks_, right?  This classification is arbitrary:  they're all just part of the same spectrum, so stop agonising over which column to put them in.

### Every Decision is a Risk.  

- By the very nature of having to make a decision, there's the risk you'll decide wrongly.
- And, there's the time it takes to make the decision.
- And what's the risk if the decision doesn't get made?

## Goals Are Risks Too

In the previous sections, we've introduced something of a "diagram language" of risk.  Let's review it:

![Risk-First Diagram Language](images/generated/introduction/all_risk_management_language.png)

So we have:

 - [Risks](Glossary#risk), which exist within [Internal Models](Glossary#internal-model).
 - [Actions](Glossary#taking-action), which are operations we perform when we [Meet Reality](Glossary#meet-reality).
 - Artifacts, which are the results of [Meeting Reality](Glossary#meet-reality).
 
[Goals](Glossary#goal-in-mind) live inside our [Internal Model](Glossary#internal-model) too.  It turns out, that functionally, Goals and Risks are equivalent.  For example, The goal of "Implementing Feature X" is equivalent to mitigating "Risk of Feature X not being present".

Let's try and back up that assertion with a few more examples:

|Goal                                |Restated As A Risk                                                   |
|------------------------------------|---------------------------------------------------------------------|
|Build a Wall                        |Mitigate the risk of something getting in / out                      |
|Land a man on the  moon             |Mitigate the risk of looking technically inferior during the cold war| 
|Move House                          |Mitigate the risks/problems of where you currently live              |

There is a certain "interplay" between the concepts of risks, actions and goals.  After all, on the [Risk Landscape](Glossary#risk-landscape) they correspond to the starting point, a movement, and the destination.  From a redundancy perspective, any one of these can be determines by knowing the other two.  

Psychologically, humans are very goal-driven:  they like to know where they're going, and are good at organising around a goal.  However, by focusing on goals ("solutionizing") it's easy to ignore alternatives.  By focusing on "Risk-First", we don't ignore the reasons we're doing something.  

## Failure

So, when we talk about a project "failing", what do we mean?  

Usually, we mean we've failed to achieve a goal, and since _goals are risks_, it is simply the scenario where we are overwhelmed by [Attendant Risks](Glossary#risk) and give up.    
 
## What To Do?

It makes it much easier to tackle the RAID log if there's only one list:  all you do is pick either the _most important_ risk on the list, or the _most urgent_, or the risk you can make _the biggest impact on_, and deal with it.  

In the next section, [A Software Project Scenario](Software-Project-Scenario we'll give an example of this in action.
