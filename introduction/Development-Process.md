![For Review](images/state/for-review.png)

In the [previous section](A-Simple-Scenario) we looked at a simple model for risks on any given activity.

Now, let's look at the everyday process of developing _a new feature_ on a software project, and see how our risk model informs it.

## An Example Process

Let's ignore for now the specifics of what methodology is being used - we'll come to that later.  Let's say your team have settled for a process something like the following:

1.  **Specification**: A new feature is requested somehow, and a business analyst works to specify it.
2.  **Code And Unit Test**: A developer writes some code, and some unit tests.
3.  **Integration**: They integrate their code into the code base.
4.  **UAT**: They put the code into a User Acceptance Test (UAT) environment, and user(s) test it.

... All being well, the code is released to production.

Now, it might be waterfall, it might be agile, we're not going to commit to specifics at this stage.  It's probably not perfect, but let's just assume that _it works for this project_ and everyone is reasonably happy with it.  

I'm not saying this is the _right_ process, or even a _good_ process: you could add code review, a pilot, integration testing, whatever.  We're just doing some analysis of _what process gives us_.  

![A Simple Development Process](images/generated/development_process_1.png)

What's happening here?  Why these steps?  

## Minimizing Risks - Overview

I am going to argue that this entire process is _informed by software risk_:

1.  We have _a business analyst_ who talks to users and fleshes out the details of the feature properly.   This is to minimize the risk of **building the wrong thing**.
2.  We _write unit tests_ to minimize the risk that our code **isn't doing what we expected, and that it matches the specifications**.
3.  We _integrate our code_ to minimize the risk that it's **inconsistent with the other, existing code on the project**.  
4.  We have _acceptance testing_ and quality gates generally to **minimize the risk of breaking production**, somehow.

We could skip all those steps above and just do this: 

1.  Developer gets wind of new idea from user, logs onto production and changes some code directly.

![A Dangerous Development Process](images/generated/development_process_2.png)

We can all see this would be a disaster, but why?

Two reasons: 

1.  You're meeting reality all-in-one-go:  all of these risks materialize at the same time, and you have to deal with them all at once.
2.  Because of this, at the point you put code into the hands of your users, your [Internal Model](Glossary#Internal-Model) is at its least-developed.  All the [Hidden Risks](Glossary#hidden-risk) now need to be dealt with at the same time, in production.

## Applying the Model

Let's look at how our process should act to prevent these risks materializing by considering an unhappy path, one where at the outset, we have lots of [Hidden Risks](Glossary#hidden-risk) ready to materialize.  Let's say a particularly vocal user rings up someone in the office and asks for new **Feature X** to be added to the software.  It's logged as a new feature request, but:
  
- Unfortunately, this feature once programmed will break an existing **Feature Y**.
- Implementing the feature will use some api in a library, which contains bugs and have to be coded around.
- It's going to get misunderstood by the developer too, who is new on the project and doesn't understand how the software is used.
- Actually, this functionality is mainly served by **Feature Z**...
- which is already there but hard to find.

![Development Process - Hidden Risks](images/generated/development_process_3.png)

This is a slightly contrived example, as you'll see.  But let's follow our feature through the process and see how it meets reality slowly, and the hidden risks are discovered:

### Specification

The first stage of the journey for the feature is that it meets the Business Analyst (BA).  The _purpose_ of the BA is to examine new goals for the project and try to integrate them with _reality as they understands it_.  A good BA might take a feature request and vet it against the internal logic of the project, saying something like: 

- "This feature doesn't belong on the User screen, it belongs on the New Account screen"
- "90% of this functionality is already present in the Document Merge Process" 
- "We need a control on the form that allows the user to select between Internal and External projects"

In the process of doing this, the BA is turning the simple feature request _idea_ into a more consistent, well-explained _specification_ or _requirement_ which the developer can pick up.  But why is this a useful step in our simple methodology?  From the perspective of our [Internal Model](Glossary#Internal-Model), we can say that the BA is responsible for:

- Trying to surface [Hidden Risks](Glossary#hidden-risk)
- Trying to evaluate [Attendant Risk](Glossary#attendant-risk) and make it clear to everyone on the project.

![BA Specification: exposing hidden risks as soon as possible](images/generated/development_process_ba.png)

In surfacing these risks, there is another outcome:  while **Feature X** might be flawed as originally presented, the BA can "evolve" it into a specification, and tie it down sufficiently to reduce the risks.   The BA does all this by simply _thinking about it_, _talking to people_ and _writing stuff down_.

This process of evolving the feature request into a requirement is the BAs job.  From our Risk-First perspective, it is _taking an idea and making it meet reality_.  Not the _full reality_ of production (yet), but something more limited.  

### Code And Unit Test

The next stage for our feature, **Feature X (Specification)** is that it gets coded and some tests get written.  Let's look at how our [goal in mind](Glossary#Goal-In-Mind) meets a new reality:   this time it's the reality of a pre-existing codebase, which has it's own internal logic.

As the developer begins coding the feature in the software, she will start with an [Internal Model](Glossary#Internal-Model) of the software, and how the code fits into it.  But, in the process of implementing it, she is likely to learn about the codebase, and 
her [Internal Model](Glossary#Internal-Model) will develop.  

![Coding Process:  exposing more hidden risks as you code](images/generated/development_process_code.png)

A couple of things about this diagram:

 - In boxes, we are showing [Risks](Glossary#Risk), which exist within [Internal Models](Glossary#Internal-Model), whereas:
 - Beneath them, we are showing actual _physical artifacts_ which exist in the real world.
 - _Actions_  might _meet_ reality, but they are _changing reality_ too, by producing these artifacts.

### Integration

Integration is where we run _all_ the tests on the project, and compile _all_ the code in a clean environment:  the "reality" of the development environment can vary from one developer's machine to another.  

So, this stage is about the developer's committed code meeting a new reality: the clean build.   

At this stage, we might discover the [Hidden Risk](Glossary#Hidden-Risk) that we'd break **Feature Y**

![Integration testing exposes hidden risks before you get to production](images/generated/development_process_integration.png)

### UAT

Is where our feature meets another reality: _actual users_.   I think you can see how the process works by now.  We're just flushing out yet more [Hidden Risks](Glossary#hidden-risk):

![UAT - putting tame users in front of your software is better than real ones, where the risk is higher ](images/generated/development_process_uat.png)

 - [Taking Action](Glossary#taking_action) is the _only_ way to create change in the world.
 - It's also the only way we can _learn_ about the world, adding to our [Internal Model](Glossary#internal-model).  In this case, we discover the user's difficulty in finding the feature.

## Observations

A couple of things:

**First**, the people setting up the development process _didn't know_ about these _exact_ risks, but they knew the _shape that the risks take_.   The process builds "nets" for the different kinds of hidden risks without knowing exactly what they are.  Part of the purpose of this site is to help with this and try and provide a taxonomy for different types of risks.

**Second**, are these really risks, or are they _problems we just didn't know about_?  I am using the terms interchangeably, to a certain extent.  Even when you know you have a problem, it's still a risk to your deadline until it's solved.  So, when does a risk become a problem?  Is a problem still just a schedule-risk, or cost-risk?  It's pretty hard to draw a line and say exactly.

**Third**, the real take-away from this is that all these risks exist because we don't know 100% how reality is.  Risk exists because we don't (and can't) have a perfect view of the universe and how it'll develop.   Reality is reality, _the risks just exist in our head_.

**Fourth**, hopefully you can see from the above that really _all this work is risk management_, and _all work is testing ideas against reality_.   

## Conclusion?

Could it be that _everything_ you do on a software project is risk management? <!-- tweet-end --> This is an idea explored in [the next section](All-Risk-Management).




