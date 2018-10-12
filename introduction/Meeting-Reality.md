![For Review](images/state/for-review.png)

In this section, we will look at how exposing your [Internal Model](Glossary#Internal-Model) to reality is in itself a good risk management technique.

## Revisiting the Model

In [A Simple Scenario](A-Simple-Scenario), we looked at a basic model for how **Reality** and our [Internal Model](Glossary#Internal-Model) interacted with each other:  we take action based on out [Internal Model](Glossary#Internal-Model), hoping to **change Reality** with some positive outcome.

And, in [Development Process](Development-Process) we looked at how we can meet with reality in _different forms_:  Analysis, Testing, Integration and so on, and saw how the model could work in each stage of a project.

It should be no surprise to see that there is a _recursive_ nature about this:  

1.  The **actions we take** each day have consequences:  they **expose new [Hidden Risks](Glossary#hidden-risk)**, which inform our [Internal Model](Glossary#Internal-Model), and at the same time, they change reality in some way (otherwise, what would be the point of doing them?)
2.  The actions we take towards achieving a [Goal In Mind](Glossary#Goal-In-Mind) each have their _own_ [Goal In Mind](Glossary#Goal-In-Mind).  And because of this, when we take action, we have to consider and evaluate the [Hidden Risks](Glossary#hidden-risk) exposed by that action.   That is, there are many ways to achieving a goal, and these different ways expose different [Hidden Risks](Glossary#hidden-risk).

So, let's see how this kind of recursion looks on our model. Note that here, I am showing _just one possible action_, in reality, you'll have choices.

![Taking actions changes reality, but changes your model of the risks too](images/generated/model_vs_reality_2.png).

Hopefully, if you've read along so far, this model shouldn't be too hard to understand.  But, how is it helpful?  

## "Navigating the [Risk Landscape](Risk-Landscape)"

So, we often have multiple ways of achieving a [Goal In Mind](Glossary#Goal-In-Mind).  

What's the best way?  

I would argue that the best way is the one which accrues the _least risk_ to get it done:  each action you take in trying to achieve the overall [Goal In Mind](Glossary#Goal-In-Mind) will have it's [Attendant Risks](Glossary#attendant-risk), and it's the experience you bring to bear on these that will help you navigate through them smoothly.

Ideally, when you take an action, you are trading off a big risk for a smaller one.  Take Unit Testing for example.  Clearly, writing Unit Tests adds to the amount of development work, so on it's own, it adds [Schedule Risk](Scarcity-Risk#schedule-risk).   However, if you write _just enough_ of the right Unit Tests, you should be short-cutting the time spent finding issues in the User Acceptance Testing (UAT) stage, so you're hopefully trading off a larger [Schedule Risk](Scarcity-Risk#schedule-risk) from UAT and adding a smaller risk to **Development**.

You can think of taking actions as moving your project on a "[Risk Landscape](Risk-Landscape)":  ideally, when you take an action, you move to some place with worse risk to somewhere more favourable.

![Navigating The Risk Landscape](images/generated/risk_landscape_1.png)

Sometimes, you can end up somewhere _worse_:  the actions you take to solve a higher-level [Attendant Risk](Glossary#attendant-risk) will leave you with a worse [Attendant Risks](Glossary#attendant-risk).  Almost certainly, this will have been a [Hidden Risk](Glossary#hidden-risk) when you embarked on the action, otherwise you'd not have chosen it.  

### An Example: Automation

For example, _automating processes_ is very tempting: it _should_ save time, and reduce the amount of boring, repetitive work on a project.  But sometimes, it turns into an industry in itself, and consumes more effort than it's worth. 

![Hidden Risks of Automation](images/generated/risk_landscape_2_automating.png)

### Another Quick Example: MongoDB

On a recent project in a bank, we had a requirement to store a modest amount of data and we needed to be able to retrieve it fast.  The developer chose to use [MongoDB](https://www.mongodb.com) for this.  At the time, others pointed out that other teams in the bank had had lots of difficulty deploying MongoDB internally, due to licensing issues and other factors internal to the bank.

Other options were available, but the developer chose MongoDB because of their _existing familiarity_ with it:   therefore, they felt that the [Hidden Risks](Glossary#hidden-risk) of MongoDB were _lower_ than the other options, and disregarded the others' opinions.

The data storage [Attendant Risk](Glossary#attendant-risk) was mitigated easily with MongoDB.  However, the new [Attendant Risk](Glossary#attendant-risk) of licensing bureacracy eventually proved too great, and MongoDB had to be abandoned after much investment of time.

This is not a criticism of MongoDB: it's simply a demonstration that sometimes, the cure is worse than the disease.  Successful projects are _always_ trying to _reduce_ [Attendant Risks](Glossary#attendant-risk).  

## The Cost Of Meeting Reality

Meeting reality is _costly_, for example.  Going to production can look like this:

- Releasing software
- Training users
- Getting users to use your system
- Gathering feedback

All of these steps take a lot of effort and time.   But you don't have to meet the whole of reality in one go - sometimes that is expensive.  But we can meet it in "limited ways".  

In all, to de-risk, you should try and meet reality:

- **Sooner**, so you have time to mitigate the hidden risks it uncovers
- **More Frequently**: so the hidden risks don't hit you all at once
- **In Smaller Chunks**: so you're not overburdened by hidden risks all in one go.
- **With Feedback**: if you don't collect feedback from the experience of meeting reality, hidden risks _stay hidden_.

In [Development Process](Development-Process), we looked at the use of UAT in order to [Meet Reality](Glossary#Meet-Reality) earlier.  By performing the UAT, we meet reality sooner.  The _cost_ of this is that we also expend precious time on that process which adds risk to the schedule.

![Testing flushes out hidden risk, but increases Schedule Risk](images/generated/meeting_reality_testing.png)

### YAGNI 

As a flavour of what's to come, let's look at [YAGNI](https://www.martinfowler.com/bliki/Yagni.html), an acronym for You Aren't Gonna Need It.   Martin Fowler says:

> Yagni originally is an acronym that stands for "You Aren't Gonna Need It". It is a mantra from ExtremeProgramming that's often used generally in agile software teams. It's a statement that some capability we presume our software needs in the future should not be built now because "you aren't gonna need it".

> This principle was first discussed and fleshed out on [Ward's Wiki](http://wiki.c2.com/?YouArentGonnaNeedIt)

The idea makes sense:  if you take on extra work that you don't need, _of course_ you'll be accreting [Attendant Risks](Glossary#attendant-risk).

But, there is always the opposite opinion:  [You _Are_ Gonna Need It](http://wiki.c2.com/?YouAreGonnaNeedIt).  As a simple example, we often add log statements in our code as we write it, though following YAGNI strictly says we shouldn't.  

#### Which is right?

Now, we can say:  do the work _if it mitigates your [Attendant Risks](Glossary#attendant-risk)_.  

 - Logging statements are _good_, because otherwise, you're increasing the risk that in production, no one will be able to understand _how the software went wrong_.
 - However, adding them takes time, which might introduce [Schedule Risk](Scarcity-Risk#schedule-risk).
 
So, it's a trade-off: continue adding logging statements so long as you feel that overall, you're reducing risk.

### Do The Simplest Thing That Could Possibly Work

Another mantra from Kent Beck (originator of the [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming) methodology, is "Do The Simplest Thing That Could Possibly Work", which is closely related to YAGNI and is about looking for solutions which are simple.  Our risk-centric view of this strategy would be:

- Every action you take on a project has it's own [Attendant Risks](Glossary#attendant-risk).
- The bigger or more complex the action, the more [Attendant Risk](Glossary#attendant-risk) it'll have.
- The reason you're taking action _at all_ is because you're trying to reduce risk elsewhere on the project 
- Therefore, the biggest payoff is whatever action _works_ to remove that risk, whilst simultaneously picking up the least amount of new [Attendant Risk](Glossary#attendant-risk).

So, "Do The Simplest Thing That Could Possibly Work" is really a helpful guideline for Navigating the [Risk Landscape](Risk-Landscape).  

## Summary

So, here we've looked at Meeting Reality, which basically boils down to taking actions to manage risk and seeing how it turns out:

- Each Action you take is a step on the Risk Landscape
- Each Action exposes new [Hidden Risks](Glossary#hidden-risk), changing your [Internal Model](Glossary#Internal-Model).
- Ideally, each action should reduce the overall [Attendant Risk](Glossary#attendant-risk) on the project (that is, puts it in a better place on the [Risk Landscape](Glossary#risk-landscape)

Could it be that _everything_ you do on a software project is risk management? <!-- tweet-end --> This is an idea explored in [the next section](All-Risk-Management).



 