![Draft](images/draft.png)


## 1.  There are lots of ways of running software projects

Commonly, we are used to thinking about software methodology in terms of “Agile”, “Waterfall”, “Lean” or “Phased Delivery”. And, we use metrics such as “number of open tickets”, “story points” or “code coverage" to try and get a feel for our work.  We have a huge variety of different programming languages, software libraries, algorithms and styles available to us.

None of these is necessarily more “right” than another, they are suitable on different projects at different times.

A key question then is: how do we select the right tool for the job?

## 2.  We can look at projects in terms of risks

One approach we can use to examine a project in-flight is a risk-based one.  Commonly, tools such as RAID logs and RAG status reporting are used.  However, we can go much further, and look at each item of work being done on the project as mitigating a particular risk.   

For example, a story about improving the user login screen can be seen as reducing the risk of users not signing up.   
A task about improving the health indicators could be seen as mitigating the risk of the application failing and no-one reacting to it. 
Even a task as basic as implementing a new function in the application is mitigating the risk that users are dissatisfied and go elsewhere.  

One assertion of Risk-First therefore, is that every action you take on a project is to mitigate some risk.  

3.  We can break down and analyse risks on a project methodically

Although risk is usually complicated and messy, other industries have found value in building a taxonomy of risks and addressing them individually.  For example, in manufacturing, tolerances allow for calculating the likelihood of defects in production.  In finance, reserves are commonly set aside for “market risk” and “credit risk”.  The entire insurance industry is founded on identifying particular risks and providing financial safety-nets for when they occur.   

Software risks are difficult to quantify, and mostly, the effort involved in doing so would outweigh the benefit.  

Nevertheless, there is value in spending time identifying risks, prioritising them, and taking action accordingly.   

4.  We can analyse tools and techniques in terms of how they address risk

If we accept the assertion that the actions we take on a project are about mitigating risks, then it stands to reason that the tools and techniques available to us on a project are there for handling different types of risks.  

For example, if we do a Code Review, we are partly trying to mitigate the risks of bugs slipping through into production, and also mitigate the key-man risk of knowledge not being widely-enough shared. If we write unit tests, we’re also mitigating the risk of bugs going to production, but we’re also mitigating against future changes breaking our existing functionality.   If we enter into a contract with a supplier, we are mitigating the risk of the supplier vanishing and leaving us exposed.  With the contract in place, we have legal recourse against this risk.

These are all very different tools, appropriate for mitigating very different risk scenarios.

5.  Different methodologies are appropriate to different risk profiles

In the same way that our tools and techniques are appropriate to dealing with different risks, the same is true of the methodologies we use on our projects.  We can use a risk-first approach to examine the different methodologies, and see which risks they address.   For example, Agile methodologies prioritise mitigating the risk that requirements capture is complicated, error-prone and that requirements change easily.  Waterfall takes the view that re-work is an expensive risk, and that we should build plans up-front to avoid it.  

Although many developers have a methodology-of-choice, the argument here is that there are tradeoffs with all of these choices.

We can place methodologies within a framework, and show how choice of methodology is contingent on the risks faced.

6.  Driving a project with a risk-first perspective 

We can go further than just analysing existing methodologies, and work towards a risk-first synthesis.  By looking at the tools and techniques available to software development, we can explore how 