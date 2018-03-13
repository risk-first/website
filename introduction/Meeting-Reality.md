In this section, we will look at how exposing your [Internal Model](Internal-Model) to reality is in itself a good risk management technique.

## Revisiting the Model

In the [Introduction](Introduction), we looked at a basic model for how **Reality** and our **Internal Model** interacted with each other:  we take action based on out [Internal Model](Internal-Model) of **Reality**, hoping to **change reality** with some positive outcome.

And, in [Development Process](Development-Process) we looked at how we can meet with reality in different forms:  Analysis, Testing, Integration and so on, and saw how the model could work in each stage of a project.

Finally, in [Software Project Scenario](Software-Project-Scenario) we looked at how we could use this model on a day-to-day basis to inform what we should do next.  

So, it should be no surprise to see that there is a _recursive_ nature about this:  

1.  The **actions we take** each day have consequences:  they **expose new [Hidden Risks](Attendant-Risk)**, which inform our [Internal Model](Internal-Model), and at the same time, they change reality in some way (otherwise, what would be the point of doing them?)
2.  The actions we take towards achieving a [Goal In Mind](Goal-In-Mind) each have their _own_ [Goal In Mind](Goal-In-Mind).  And because of this, when we consider an action, we have to consider and evaluate the new [Attendant Risks](Attendant-Risk) of that action.   That is, there are many ways to achieving a goal, and these different ways expose different [Attendant Risks](Attendant-Risk).

So, let's see how this kind of recursion looks on our model. Note that here, I am showing _just one possible action_, in reality, you'll have choices.

![Reality 2](images/reality2.png).

Hopefully, if you've read along so far, this model shouldn't be too hard to understand.  But, how is it helpful?  

### "Navigating the Risk Landscape"

So, we often have multiple ways of achieving a [Goal In Mind](Goal-In-Mind).  What's the best way?  I would argue that the best way is the one which accrues the _least risk_ to get it done:  each action you take in trying to achieve the overall [Goal In Mind](Goal-In-Mind) will have it's [Attendant Risks](Attendant-Risk), and it's the experience you bring to bear on these that will help you navigate through them smoothly.

Sometimes, in solving one problem, you can end up somewhere _worse_:  the actions you take to solve a higher-level [Attendant Risk](Attendant-Risk) will leave you with a worse [Attendant Risks](Attendant-Risk).  Almost certainly, this will have been a [Hidden Risk](Attendant-Risk) when you embarked on the action, otherwise you'd not have chosen it.  

#### A Quick Example

On a recent project in a bank, we had a requirement to store a modest amount of data and we needed to be able to retrieve it fast.  The developer (without a lot of analysis) chose to use [MongoDB](https://www.mongodb.com) for this.  At the time, others pointed out that other teams in the bank had had lots of difficulty deploying MongoDB internally, due to licensing issues and other factors internal to the bank.

Other options were available, but the developer chose MongoDB because of their _existing familiarity_ with it:   therefore, they felt that the [Hidden Risks](Attendant-Risk) of MongoDB were _lower_ than the other options, and disregarded the opinions of the others.

The data storage [Attendant Risk](Attendant-Risk) was mitigated easily with MongoDB.  However, the new [Attendant Risk](Attendant-Risk) of licensing bureacracy eventually proved too great, and MongoDB had to be abandoned after much investment.

This is not a criticism of MongoDB: it's simply a demonstration that sometimes, the cure is worse than the disease.  Successful projects are _always_ trying to _reduce_ [Attendant Risks](Attendant-Risk).  

That's what "Navigating the Risk Landscape" means.

### YAGNI / WAGNI

As a flavour of what's to come, let's look at [YAGNI](https://www.martinfowler.com/bliki/Yagni.html), an acronym for You Aren't Gonna Need It.   As Martin Fowler says:

> Yagni originally is an acronym that stands for "You Aren't Gonna Need It". It is a mantra from ExtremeProgramming that's often used generally in agile software teams. It's a statement that some capability we presume our software needs in the future should not be built now because "you aren't gonna need it".
> This principle was first discussed and fleshed out on [Ward's Wiki](http://wiki.c2.com/?YouArentGonnaNeedIt)

The idea makes sense:  if you take on extra work that you don't need, _of course_ you'll be accreting [Attendant Risks](Attendant-Risk).

But, there is always the opposite opinion:  [YouAreGonnaNeedIt](http://wiki.c2.com/?YouAreGonnaNeedIt).  As a simple example, we often add logging comments in our code as we write it, though following YAGNI strictly says we should leave it out.

Now, we can say:  do the work if it mitigates your [Attendant Risks](Attendant-Risk).  Logging statements are _good_, because otherwise, you're adding risk that in production, no one will be able to understand _how the software went wrong_.

### Do The Simplest Possible Thing



## Iterations

In the [Development Process](Development-Process), we had four steps between a feature being an "idea" to being ready for production.  (Putting the idea in production would count as a 5th step, too).  So, that's 5 times.  What is the right number of steps?  

- If you have more steps, the process is more complex, and will take longer.
- But, more steps is clearly _safer_
- Can we 

## Cadence

How _fast_ should we go round this loop?  Is there a right answer?  The longer you leave your [goal in mind](Goal-In-Mind), the longer it'll be before you find out how it really stacks up against reality.  

Testing your [goals in mind](Goal-In-Mind) early and safely is how you'll manage risk effectively.  

Is this the same as [Continuous Delivery](https://devops.com/often-release-continuous-delivery/) (CD)?  Arguably, no:  although CD can mean multiple releases per day, it also introduces it's own risks:
 - Do users get annoyed with the application changing all the time?
 -  



## Feedback Loops




## Going Into Production

...
Bug reports, feedback
Quality of feedback




 