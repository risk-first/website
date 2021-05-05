---
title: On Story Points
description: Part of the 'Estimating' Risk-First Track, about improving estimates using risk checklists.
url: https://riskfirst.org/estimating/On-Story-Points

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/box-size.svg">On Story Points</image-artifact>'
categories:
order: 8
---

![Under Construction](../images/state/uc.png)

# On Story Points

In Scrum, the idea of a _sprint_ is well named:  as a team, you are trying to complete work on a whole bunch of work items (stories) before the end-of-sprint demo deadline.  It's a simple race against the clock.

While the _time_ component of the sprint is fixed, the _distance_ is allowed to vary, and developers try to figure out how far they can sprint in a given period by estimating all those stories with _Story Points_.  

In [Fixing Scrum](Fixing-Scrum.md) we took against the idea of fixed time-boxes generally, because they _introduce more problems than they solve_.  However, if you are wedded to / forced to use Scrum, then that doesn't help you.  And _knowing how long things will take_ is really the whole purpose of this track on Estimating.  

So, let's look at Story Points as an _estimation tool_, and see how it stacks up.

## Inputs

![Story Point Diagram](/images/generated/estimating/story-points.png)

At a basic level, to calculate the number of story points for an item of work, you need the following inputs:

- **A Story**:  you're going to need a description of the work you're building

- **Some Developers**: you're going to need developers to bring their _experience_ of how long things take to build, and a willingness to share/argue about it.

- **A Project**:  Since the story will be embedded in the context of a project, this is an important input.  On some projects, work is harder to complete than on others.  Things like the choice of languages or architectures have an effect, as do the systems and people the project needs to interface with.

- **Team Experience**: Over time, the team become more experienced both working with each other and with the project itself.  They learn the [Risk Landscape]() and understand where the pitfalls lie and how to avoid them.   

As shown in the above diagram, you take all of these inputs, mix them together in a big discussion, or a game of [Planning Poker]() and out pops a number of Story Points.

## What Are Story Points?

One of the hang-ups people have with story points is that they don't map to _time_.   In most of the planning sessions I've been involved in, there is either an explicit or tacit base-lining of story points so that everyone has a similar conception of how much work is involved in one, e.g. "A Story point is an ideal morning".  However, this definition is avoided by Scrum, since otherwise you'd end the planning session by saying something like "we can do 10 person-days work in the next two weeks", which ends up being nonsensical.

An alternate view is that [a story point is about _complexity_](https://www.clearvision-cm.com/blog/why-story-points-are-a-measure-of-complexity-not-effort/).  This means a Sprint is all about budgeting complexity, rather than effort.   This makes some sense - [complexity is a recurring theme in Risk-First, after all.](/Complexity/Start.md)

A third way of looking at it is that really, story points are just about _relative_ sizing:  it doesn't matter what they refer to or how big they are, it's all about trying to budget the right amount of work into the sprint.  For example, you can either have two one-point stories, or a two-point story, and the effect on the sprint is the same.

Because there is no fixed definition of the size of a story point, you do run the risk of story-point "inflation" or "deflation".  But unless you are trying to use them to plot team productivity over time, this shouldn't really matter so much.  And we'd never make the mistake of doing that, [right](/risks/Map-And-Territory-Risk.md)?

## The "Calculate Story Points" Function

So we have our inputs, and we (roughly) know what the outputs are.  How do we get from one to the other?  Scrum literature says that you should play "planning poker" in order to arrive at a number of story points.  In my experience, you end up with conversations like this:

"Rob, you've played an 8.  Everyone else played a 3.  What's your thinking there?"

"Ok, well, first, I can see that we need to mock-up a web page.  Now, it's clearly not that complex a job, but, we'll need to run it by the sales team, and they're notoriously hard to schedule meetings with... and we'll need a few of them in the meeting.  So, if we assume that there's going to be two or maybe three iterations of this, it'll soon add up into days gone by."

-or- 

"I'm thinking a 2 for this task."

"I'm thinking a 5:  we're actually going to have to implement some new indexes on the database, so it's an optimisation issue.  And there could be some locking problems around the Users table if we are running this update alongside everything else".

What's happening here?  We are basically alerting each other to the risks we think are present on the project.  That's the value the experience of the team and the developers brings to the table.

## The Output
 
While all the _inputs_ seem good on this model, there is a real lack of formalism about what exactly a _story point_ is at the end of it.  This makes it very hard to say exactly what goes on inside the "Calculate Story Points" function.  Isn't there some better way than this?  Also, as you can see in the above diagram, there is a feedback loop:  over the weeks and months, experience builds and we should end up with better estimates.  However, this feedback is only tacitly observed: it's up to the team and the developers themselves to incorporate their experience into the function.  Can't we do better than that?  Let's look at some ideas.

### Innovation Tokens

In his essay, "Choose Boring Technology", Dan McKinley describes a theoretical idea of "Innovation Tokens":

> "Let’s say every company gets about three innovation tokens. You can spend these however you want, but the supply is fixed for a long while... If you choose to write your website in NodeJS, you just spent one of your innovation tokens. If you choose to use MongoDB, you just spent one of your innovation tokens. If you choose to use service discovery tech that’s existed for a year or less, you just spent one of your innovation tokens... there are many choices of technology that are boring and good, or at least good enough. MySQL is boring. Postgres is boring. PHP is boring. " -- [Choose Boring Technology, _Dan McKinley](https://mcfunley.com/choose-boring-technology)

What he's driving at here is of course _risk_: with shiny new technology (i.e. non-boring tech), you pick up lots of [Hidden Risk](/thinking/Glossary.md#hidden-risk).  Innovation Tokens are paying for time spent dealing with [Hidden Risk](/thinking/Glossary.md#hidden-risk).  

Put this way, aren't Story Points a kind of "Innovation Token"?  Simply, they are time spent on the project dealing with some risk or other.  When re-framed this way, it becomes a lot clearer what the function "Calculate Story Points" is really attempting to do - it's all about quantifying the risks of doing a certain task.

### Checklists

A Checklist is a way of asking questions in order that we can manage risk early on.  It's all about turning a [Hidden Risk](/thinking/Glossary.md#hidden-risk) into one we've thought about.   






### Capturing Knowledge

Building up an Estimation Checklist shouldn't be a task done just during a retrospective:  you can add detail to it _any time you like_:  preferably sooner, rather than waiting for a retrospective.

  

