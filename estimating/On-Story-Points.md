---
title: On Story Points
description: Part of the 'Estimating' Risk-First Track, about improving estimates using risk checklists.
url: https://riskfirst.org/estimating/On-Story-Points

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/box-size.svg">On Story Points</image-artifact>'
categories:
  - Estimating
order: 8
---

![Under Construction](../images/state/uc.png)

# On Story Points

In Scrum, the idea of a _sprint_ is well named:  as a team, you are trying to complete work on a whole bunch of work items (stories) before the end-of-sprint demo deadline.  It's a simple race against time.  But while the _time_ component of the sprint is fixed, the _distance_ is allowed to vary. Developers need to figure out how far they can sprint in a given period by estimating all those stories with _Story Points_.  (Although, as we've seen [in](Journeys.md) [multiple](Kitchen-Cabinet.md) [articles](Fractals.md), distance is a poor metaphor here.)

In [Fixing Scrum](Fixing-Scrum.md) we took against the idea of fixed time-boxes generally, because they _introduce more problems than they solve_.  However, if you are wedded to / forced to use Scrum, then that doesn't help you.  And _knowing how long things will take_ is really the whole purpose of this track on Estimating.  

![Story Point Diagram](/images/generated/estimating/story-points.png)

Nevertheless, let's look at Story Points as an _estimation tool_, and see how it stacks up.  The diagram above will guide us - let's break it down and understand how story pointing works.

## Inputs

At a basic level, to calculate the number of story points for an item of work, you need the following inputs:

- **A Story**:  you're going to need a description of the work you're building

- **Some Developers**: you're going to need developers to bring their _experience_ of how long things take to build, and a willingness to share their thoughts and argue about the story.

- **A Project**:  Since the story will be embedded in the context of a project, this is an important input.  On some projects, work is harder to complete than on others.  Things like the choice of languages or architectures have an effect, as do the systems and people the project needs to interface with.

- **Team Experience**: Over time, the team become more experienced both working with each other and with the project itself.  They learn the [Risk Landscape]() and understand where the pitfalls lie and how to avoid them.   

## Calculating Story Points

As shown in the above diagram, you take all of these inputs, mix them together and out pops a number of Story Points.  How does that work?  How do we get from one to the other?  Scrum literature says that you should play "planning poker" in order to arrive at a number of story points.  In my experience, you end up with conversations like this:

"Rob, you've played an 8.  Everyone else played a 3.  What's your thinking there?"

"Ok, well, first, I can see that we need to mock-up a web page.  Now, it's clearly not that complex a job, but, we'll need to run it by the sales team, and they're notoriously hard to schedule meetings with... and we'll need a few of them in the meeting.  So, if we assume that there's going to be two or maybe three iterations of this, it'll soon add up into days gone by."

-or- 

"I'm thinking a 2 for this task."

"I'm thinking a 5:  we're actually going to have to implement some new indexes on the database, so it's an optimisation issue.  And there could be some locking problems around the Users table if we are running this update alongside everything else".

What's happening here?  We are basically _alerting each other to the risks we think are present_ on the project.  That's the value the experience of the team and the developers brings to the table. 

## The Story Point Estimate

After some back-and-forth, the team agrees on a number.  But what does this number represent?  Let's look at some interpretations:

- **Ideal Person-Days**: An obvious interpretation is that a story point is some number of person-days.   In most of the planning sessions I've been involved in, there is either an explicit or tacit base-lining of story points so that everyone has a similar conception of how much work is involved in one, e.g. "A Story point is a morning".  The "ideal" part refers to the actual time you get to spend on a task, away from interruptions, lunches, all-hands meetings and so on.  

- **Complexity**: An alternate view is that [a story point is about _complexity_](https://www.clearvision-cm.com/blog/why-story-points-are-a-measure-of-complexity-not-effort/).  This means a Sprint is all about budgeting complexity, rather than effort.   This makes some sense - [complexity is a recurring theme in Risk-First, after all.](/Complexity/Start.md)  However, given that the sprint is measured in person-days, and the scrum leader is going to produce a report showing how many story points were completed in a sprint, it's clear that complexity really is just a weak proxy for person-days anyway.  In fact, there are lots of tasks that might be low-complexity, but take a lot of time anyway, such as updating 500 icons.  This will clearly take a lot of time, but be low-complexity, so you better give it enough story points to represent the time you'll spend on it.   

- **Relative Sizing**: A third way of looking at it is that really, story points are just about _relative_ sizing:  it doesn't matter what they refer to or how big they are, it's all about trying to budget the right amount of work into the sprint.  For example, you can either have two one-point stories, or a two-point story, and the effect on the sprint is the same.

Because there is no fixed definition of the size of a story point, you do run the risk of story-point "inflation" or "deflation".  But unless you are trying to use them to plot team productivity over time, this shouldn't really matter so much.  And we'd never make the mistake of doing that, [right](/risks/Map-And-Territory-Risk.md)?  

## Improving Things

While all the _inputs_ seem good on this model, there is a real lack of formalism about what exactly a _story point_ is at the end of it.  This makes it very hard to say exactly what goes on inside the "Calculate Story Points" function.  Isn't there some better way than this?  Also, as you can see in the above diagram, there is a feedback loop:  over the weeks and months, experience builds and we should end up with better estimates.  However, this feedback is only tacitly observed: it's up to the team and the developers themselves to incorporate their experience into the function.  Can't we do better than that?  Let's look at some ideas.

### 1. Innovation Tokens

In his essay, "Choose Boring Technology", Dan McKinley describes a theoretical idea of "Innovation Tokens":

> "Let’s say every company gets about three innovation tokens. You can spend these however you want, but the supply is fixed for a long while... If you choose to write your website in NodeJS, you just spent one of your innovation tokens. If you choose to use MongoDB, you just spent one of your innovation tokens. If you choose to use service discovery tech that’s existed for a year or less, you just spent one of your innovation tokens... there are many choices of technology that are boring and good, or at least good enough. MySQL is boring. Postgres is boring. PHP is boring. " -- [Choose Boring Technology, _Dan McKinley](https://mcfunley.com/choose-boring-technology)

What he's driving at here is of course _risk_: with shiny new technology (i.e. non-boring tech), you pick up lots of [Hidden Risk](/thinking/Glossary.md#hidden-risk).  Innovation Tokens are paying for time spent dealing with [Hidden Risk](/thinking/Glossary.md#hidden-risk).  Dan's contention is that not only do you have the up-front costs of integrating the shiny technology, but you also have a long tail of extra running costs, as you have to manage the new technology through to maturity in your environment.

Put this way, aren't Story Points a kind of "Innovation Token"?  Simply, they are time spent on the project dealing with some risk or other.  When re-framed this way, it becomes a lot clearer what the function "Calculate Story Points" is really attempting to do - it's all about quantifying the risks of doing a certain task.  

### 2. A Quick Story

Here is an example from earlier in the year about how I managed to _completely nail_ an estimate, and yet, still miss a deadline.  I had a large body of code in Java (some 300 classes), and I wanted to get it running inside a browser (I won't go into why).   Now, there are a number of ways to solve this problem - various VMs run inside the browser for example - but I decided that, since I was interested in learning Kotlin, what I would do would be to get IntelliJ IDEA to convert the Java code into Kotlin for me.  Kotlin can be compiled into Javascript and run in the browser.  I could go class-by-class, and since I had a large body of unit tests that I could keep working, I knew it would be ok.  

After converting ten classes in a day, I thought - this is likely to take about 30 work-days to do.  And, sure enough, after about 28 days, I was done.  It didn't really matter that I started with the easy classes first, because I got better at resolving the issues in the conversion process as I went along.  

The only problem was, having got there, I realised I needed a load of _other stuff_ to get things working in the browser too.  So that took about another 10 days.  Within the narrow definition of the work "converting everything to Kotlin" I hit the estimate, but the wider task of "getting it to run in the browser" I was late.  

Arguably, the failure here was that I didn't set the success criteria properly at the start.

### 3. Capturing Knowledge

Another problem in Story Point estimation is bootstrapping.  It is expected that, to start with, estimates made by inexperienced teams, or inexperienced team-members, are going to be poor.  The expectation is that over time, through experience, the estimates improve.  This seems to happen _somewhat_ in my experience.  But nowhere near enough.  

Can we bootstrap the estimation process by providing a checklist for story-points, based on the things that commonly throw spanners into the works?  Below, I've sketched out a small section of what this might look like, here's a sample below, and [here's a link to a more complete spreadsheet which you can use and change]().

<table></table>

A Checklist is a good way of asking questions in order that we can manage risk early on.  It's all about turning a [Hidden Risk](/thinking/Glossary.md#hidden-risk) into one we've thought about.  

If the team runs through this list together, and then decides the task is a "five", then surely that is a better, more rigorous approach than just plucking a number out of the air, as planning poker suggests.

And, building up an Estimation Checklist shouldn't be a task done just during a retrospective:  you should be allowed to add detail to it _any time you like_:  preferably sooner, rather than waiting for a retrospective.

### 4.  Risk Budgets











  

