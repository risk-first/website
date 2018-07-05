![For Review](images/state/for-review.png)

In this section, I am going to introduce the idea that everything you do on a software project is Risk Management.

In the [last section](Development-Process), we observed that all the activities in a simple methodology had a part to play in exposing different risks.  They worked to manage risk prior to them creating bigger problems in production.

Here, we'll look at one of the tools in the Project Manager's toolbox, the [RAID Log](http://pmtips.net/blog-new/raid-logs-introduction), and observe how risk-centric it is.

## RAID Log

Many project managers will be familiar with the [RAID Log](http://pmtips.net/blog-new/raid-logs-introduction).  It's simply four columns on a spreadsheet:

 - Risks
 - Actions
 - Issues
 - Decisions
 
Let's try and put the following [Attendant Risk](Risk#attendant-risk) into the RAID Log:

> Debbie needs to visit the client to get them to choose the logo to use on the product, otherwise we can't size the screen areas exactly.

 - So, is this an **action**?   Certainly.  There's definitely something for Debbie to do here. 
 - Is it an **issue**?  Yes, because it's holding up the screen-areas sizing thing. 
 - Is it a **decision**?  Well, clearly, it's a decision for someone.
 - Is it a **risk**?  Probably:  Debbie might go to the client and they _still_ don't make a decision.  What then?

## Let's Go Again

This is a completely made-up example, deliberately chosen to be hard to categorize.  Normally, items are more one thing than another.  But often, you'll have to make a choice between two categories, if not all four.  

This hints at the fact that at some level it's All Risk:

### Every Action Mitigates Risk

The reason you are _taking_ an action is to mitigate a risk.  For example, if you're coing up new features in the software, this is mitigating [Feature Risk](Feature-Risk).  If you're getting a business sign-off for something, this is mitigating a [Too Many Cooks](Coordination-Risk)-style _stakeholder risk_.  


### Every Action Carries Risk.  

- How do you know if the action will get completed?  
- Will it overrun on time?  
- Will it lead to yet more actions?

Consider _coding a feature_ (as we did in the earlier [Development Process](Development-Process) section).  We saw here how the whole process of coding was an exercise in learning what we didn't know about the world, uncovering problems and improving our [Internal Model](Internal-Model).  That is, flushing out the [Attendant Risk](Risk#attendant-risk) of the [Goal In Mind](Goal-In-Mind).

And, as we saw in the [Introduction](A-Simple-Scenario), even something _mundane_ like the Dinner Party had risks. 

### An Issue is Just A Type of Risk

- Because issues need to be solved...  
- And solving an issue is an action... 
- Which, as we just saw also carry risk.

One retort to this might be to say:  an issue is a problem I have now, whereas a risk is a problem that _might_ occur.  I am going to try and _break_ that mindset in the coming pages, but I'll just start with this:

- Do you know _exactly_ how much damage this issue will do?
- Can you be sure that the issue might not somehow go away?  

_Issues_ then, just seem more "definite" and "now" than _risks_, right?  This classification is arbitrary:  they're all just part of the same spectrum, so stop agonising over which column to put them in.

### Every Decision is a Risk.  

- By the very nature of having to make a decision, there's the risk you'll decide wrongly.
- And, there's the time it takes to make the decision.
- And what's the risk if the decision doesn't get made?

## What To Do?

It makes it much easier to tackle the RAID log if there's only one list:  all you do is pick the worst risk on the list, and deal with it.  (In [Risk Theory](Risk-Theory) we look at how to figure out which one that is).

OK, so maybe that _works_ for a RAID log (or a Risk log, since we've thrown out the others), but does it scale to a whole project?  

In the next section, [Software Project Scenario](Software-Project-Scenario) I will make a slightly stronger case for the idea that it does. 


 
