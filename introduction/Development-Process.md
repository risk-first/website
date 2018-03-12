
In the [previous section](Software-Project-Scenario) we looked at how risk determines what actions we take on a project.

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

![Development Process](images/dev_process1.png)

What's happening here?  Why these steps?  

## Minimizing Risks - Overview

I am going to argue that this entire process is _informed by software risk_:

1.  We have _a business analyst_ who talks to users and fleshes out the details of the feature properly.   This is to minimize the risk of **building the wrong thing**.
2.  We _write unit tests_ to minimize the risk that our code **isn't doing what we expected, and that it matches the specifications**.
3.  We _integrate our code_ to minimize the risk that it's **inconsistent with the other, existing code on the project**.  
4.  We have _acceptance testing_ and quality gates generally to **minimize the risk of breaking production**, somehow.

We could skip all those steps above and just do this: 

1.  Developer gets wind of new idea from user, logs onto production and changes some code directly.

![Development Process](images/dev_process2.png)

We can all see this would be a disaster, but why?

Two reasons: 

1.  You're meeting reality all-in-one-go:  all of these risks materialize at the same time, and you have to deal with them all at once.
2.  Because of this, at the point you put code into the hands of your users, your [Internal Model](Internal-Model) is at its least-developed.  All the [Hidden Risks](Attendant-Risk) now need to be dealt with at the same time, in production.

## Applying the Model

Let's look at how our process should act to prevent these risks materializing by considering an unhappy path, one where at the outset, we have lots of [Hidden Risks](Attendant-Risk) ready to materialize.  Let's say a particularly vocal user rings up someone in the office and asks for new **Feature X** to be added to the software.  It's logged as a new feature request, but:
  
- Unfortunately, this feature once programmed will break an existing **Feature Y**  
- Implementing the feature will use some api in a library, which contains bugs and have to be coded around.    
- It's going to get misunderstood by the developer too, who is new on the project and doesn't understand how the software is used.  
- Actually, this functionality is mainly served by **Feature Z**...
- which is already there but hard to find.

![Development Process - Hidden Risks](images/dev_process_hidden_risks.png)

This is a slightly contrived example, as you'll see.  But let's follow our feature through the process and see how it meets reality slowly, and the hidden risks are discovered:

### Specification

The first stage of the journey for the feature is that it meets the Business Analyst (BA).  The _purpose_ of the BA is to examine new goals for the project and try to integrate them with _reality as they understands it_.  A good BA might take a feature request and vet it against the internal logic of the project, saying something like: 

- "This feature doesn't belong on the User screen, it belongs on the New Account screen"
- "90% of this functionality is already present in the Document Merge Process" 
- "We need a control on the form that allows the user to select between Internal and External projects"

In the process of doing this, the BA is turning the simple feature request _idea_ into a more consistent, well-explained _specification_ or _requirement_ which the developer can pick up.  But why is this a useful step in our simple methodology?  From the perspective of our [Internal Model](Internal-Model), we can say that the BA is responsible for:

- Trying to surface [Hidden Risks](Apparent-Risk)
- Trying to evaluate [Apparent Risk](Apparent-Risk) and make it clear to everyone on the project.

Hopefully, after this stage, our [Internal Model](Internal-Model) might look something like this:

![BA Specification](images/dev_process_ba.png)

In surfacing these risks, there is another outcome:  while **Feature X** might be flawed as originally presented, the BA can "evolve" it into a specification, ties it down sufficiently to reduce the risks.   The BA does all this by simply _thinking about it_, _talking to people_ and _writing stuff down_.

This process of evolving the feature request into a requirement is the BAs job.  From our risk-first perspective, it is _taking an idea and making it meet reality_.  Not the _full reality_ of production (yet), but something more limited.  After its brush with reality, the [goal in mind](Goal-In-Mind) has _evolved_ from being **Feature X Idea** to **Feature X Specification**.

### Code And Unit Test

The next stage for our feature, **Feature X (Specification)** is that it gets coded and some tests get written.  This article isn't about good testing process, so we're not going to look at that.  Let's look at how our [goal in mind](Goal-In-Mind) meets a new reality:   this time it's the reality of a pre-existing codebase, which has it's own internal logic.

As the developer begins coding the feature in the software, she will start with an [Internal Model](Internal-Model) of the software, and how the code fits into it.  But, in the process of implementing it, she is likely to learn about the codebase, and 
her [Internal Model](Internal-Model) will develop.  

To a large extent, this is the whole point of _type safety_:  to ensure that your [Internal Model](Internal-Model) stays consistent with the reality of the codebase.  If you add code that doesn't fit the reality of the codebase, you'll know about it with compile errors.

The same thing is true of writing unit tests:  again you are testing your [Internal Model](Internal-Model) against the reality of the system being built, running in your development environment.  Hopefully, this will surface some new hidden risks, and again,
because the [goal in mind](Goal-In-Mind) has met reality, it is changed, to **Feature X (Code)**.

![Coding Process](images/dev_process_code.png)

### Integration

Integration is where we run _all_ the tests on the project, and compile _all_ the code in a clean environment:  the "reality" of the development environment can vary from one developer's machine to another.  

So, this stage is about the developer's committed code meeting a new reality: the clean build.   

At this stage, we might discover the [Hidden Risk](Attendant-Risk) that we'd break **Feature Y**

![Integration](images/dev_process_integration.png)

### UAT

Is where our feature meets another reality: _actual users_.   I think you can see how the process works by now.  We're just flushing out yet more [Hidden Risks](Attendant-Risk):

![UAT](images/dev_process_uat.png)

## Observations

A couple of things:

First, the person setting up the development process _didn't know_ about these _exact_ risks, but they knew the _shape that the risks take_.   The process builds nets for the different kinds of risks without knowing exactly what they are.

Second, are these really risks, or are they _problems we just didn't know about_?  I am using the terms interchangeably, to a certain extent.  Even when you know you have a problem, it's still a risk to your deadline until it's solved.  So, when does a risk become a problem?  Is a problem still just a schedule-risk, or cost-risk?  It's pretty hard to draw a line and say exactly.

Third, the real takeaway from this is that all these risks exist because we don't know 100% how reality is.  Risk exists because we don't (and can't) have a perfect view of the universe and how it'll develop.   Reality is reality, _the risks just exist in our head_.

Fourth, hopefully you can see from the above that really _all this work is risk management_, and _all work is testing ideas against reality_.   (This idea is expanded on in the next section).

Fifth, and finally, the wake-up call _is_ reality:  the longer you leave your [goal in mind](Goal-In-Mind), the longer it'll be before you find out how it really stacks up against reality.  Testing your [goals in mind](Goal-In-Mind) early and safely is how you'll manage risk effectively, as we'll see in the next section.






