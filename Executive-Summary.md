![Draft](images/state/draft.png)

## 1.  There are Lots of Ways of Running Software Projects

There are lots of different ways to look at a project.  For example, metrics such as “number of open tickets”, “story points”, “code coverage" or "release cadence" give us a numerical feel for how things are going and what needs to happen next.  We also judge projects by the practices used on them - Continuous Integration, [Unit Testing](Testing) or [Pair Programming](Coding), for example.  

Software methodologies, then, are collections of tools and practices:  “Agile”, “Waterfall”, “Lean” or “Phased Delivery” (for example) all suggest different approaches to running a project, and are opinionated about the way they think projects should be done and the tools that should be used.    

None of these is necessarily more “right” than another, they are suitable on different projects at different times.

**A key question then is: how do we select the right tool for the job?**

## 2.  We can Look at Projects in Terms of Risks

One way to examine a project in-flight is a risk-based one.  

Commonly, tools such as RAID logs and RAG status reporting are used.  These techniques should be familiar to project managers everywhere.  

However, the Risk-First view is that we can go much further:  that each item of work being done on the project is mitigating a particular risk.  Risk isn't something that just appears in a report, it actually drives *everything we do*.  

For example:

- A story about improving the user login screen can be seen as reducing _the risk of users not signing up_.   
- A task about improving the health indicators could be seen as mitigating _the risk of the application failing and no-one reacting to it_. 
- Even a task as basic as implementing a new function in the application is mitigating _the risk that users are dissatisfied and go elsewhere_.  

**One assertion of [Risk-First](Home) therefore, is that every action you take on a project is to mitigate some risk.**

## 3.  We Can Break Down Risks on a Project Methodically

Although risk is usually complicated and messy, other industries have found value in breaking down the types of risks that affect them and addressing them individually.  

For example:

- In manufacturing, _tolerances_ allow for calculating the likelihood of defects in production.  
- In finance, reserves are commonly set aside for “market risk” and “credit risk”, and teams are structured around different risks.  
- The insurance industry is founded on identifying particular risks and providing financial safety-nets for when they occur.   

Software risks are difficult to quantify, and mostly, the effort involved in doing so _exactly_ would outweigh the benefit.  Nevertheless, there is value in spending time building _our own classifications of risk_.  With this in place, we can:
- Talk about the types of risks we face on our projects, using an appropriate language
- Expose [Hidden Risks](Risk) that we hadn't considered before
- Weigh the risks against each other, and decide which order to tackle them.   

4.  We Can Analyse Practices in Terms of how they Mitigate Risk

If we accept the assertion above that _all_ the actions we take on a project are about mitigating risks, then it stands to reason that the tools and techniques available to us on a project are there for mitigating different types of risks.  

For example:
 - If we do a [Code Review](Review), we are partly trying to mitigate the risks of bugs slipping through into production, and also mitigate the [Key-Man Risk](Coordination-Risk) of knowledge not being widely-enough shared. 
 - If we write [Unit Tests](Testing), we’re also mitigating the risk of bugs going to production, but we’re also mitigating against future changes breaking our existing functionality.   
 - If we enter into a [contract with a supplier](Contract), we are mitigating the risk of the supplier vanishing and leaving us exposed.  With the contract in place, we have legal recourse against this risk.

**Different tools are appropriate for mitigating different types of risks.**

5.  Different Methodologies are Appropriate to Different Risk Profiles

In the same way that our tools and techniques are appropriate to dealing with different risks, the same is true of the methodologies we use on our projects.  We can use a [Risk-First](Home) approach to examine the different methodologies, and see which risks they address.  For example:
- [Agile](Agile) methodologies prioritise mitigating the risk that requirements capture is complicated, error-prone and that requirements change easily.  
- [Waterfall](Waterfall) takes the view that development is an expensive risk, and that we should build plans up-front to avoid it.  
- [Lean](Lean) takes the view that risk lies in incomplete work and wasted work, and aims to minimize that.

Although many developers have a methodology-of-choice, the argument here is that there are tradeoffs with all of these choices.

**We can place methodologies within a framework, and show how choice of methodology is contingent on the risks faced.**

6.  Driving a Project With a [Risk-First](Home) Perspective 

We have described a model of risk within software projects, looking something like this:

tbd.  image (risk, practice, methodology, action, goal)

How do we take this further?

One idea we explore is that of the [Risk Landscape](Risk-Landscape):  Although the software team can't remove risk from their project, they can take actions that move them to a place in the [Risk Landscape](Risk-Landscape) where the risks on the project are more favourable than where they started.  

From there, we examine basic risk archetypes you will encounter on the software project, to build up a [Taxonomy of Software Risk](Staging-And-Classifying), and look at which specific tools you can use to mitigate each kind of risk.  

Then, we look at different software practices, and how they mitigate various risks.  Beyond this we examine the question:  _how can a risk-first approach inform the use of this technique?_  For example:

 - If we are introducing a **Sign-Off** in our process, we have to balance the risks it _mitigates_ (coordination of effort, quality control, information sharing) with the risks it _introduces_ (delays and process bottlenecks).  
 - If we have **Redundant Systems**, this mitigates the risk of a _single point of failure_, but introduces risks around _synchronizing data_ and _communication_ between the systems. 
 - If we introduce **Process**, this may make it easier to _coordinate as a team_ and _measure performance_ but may lead to bureaucracy, focusing on the wrong goals or over-rigid interfaces to those processes.   

[Risk-First] aims to provide a framework in which we can _analyse these choices_ and weigh up _accepting_ versus _mitigating_ risks.

**Still interested?  Then dive into reading [the introduction](A-Simple-Scenario).**