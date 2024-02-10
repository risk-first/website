---
title: On Story Points
description: Part of the 'Estimating' Risk-First Track, about improving estimates using risk checklists.
url: https://riskfirst.org/estimating/On-Story-Points
date: 2021-05-08 13:32:03 +0000

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/box-size.svg">On Story Points</image-artifact>'
tags:
  - Estimating
sidebar_position: 8
tweet: yes
---

# On Story Points

In Scrum, the idea of a _sprint_ is well named:  as a team, you are trying to complete work on a whole bunch of work items (stories) before a deadline.

In a previous article in this series, [Fixing Scrum](Fixing-Scrum.md) we took against the idea of fixed time-boxes generally, because they _introduce more problems than they solve_:  as we've seen [in](Journeys.md) [multiple](Kitchen-Cabinet.md) [articles](Fractals.md), estimating is _hard_, trying to use it as a solution to anything is misguided.  So you should only estimate when you absolutely need to.

Nevertheless, _knowing how long things will take_ is really the whole purpose of this track on [Estimating](Start.md), and sometimes unavoidable [deadlines](../risks/Deadline-Risk.md) make it necessary.  

In Scrum, the Estimation process is based on the concept of _story points_, so that will be the focus here, although essentially this discussion is relevant to anyone estimating software development.

![Story Point Diagram](/img/generated/estimating/story-points.png)

In this article we will critique story points as an _estimation tool_.  First, we will break it down to see how it works (the diagram above will guide us) then we'll offer some ideas for improving it.

## Inputs

At a basic level, to calculate the number of story points for an item of work, you need the following inputs:

- **A Story**:  you're going to need a description of the work you're building

- **Some Developers**: you're going to need developers to bring their _experience_ of how long things take to build, and a willingness to share their thoughts and argue about the story.

- **A Project**:  Since the story will be embedded in the context of a project, this is an important input.  On some projects, work is harder to complete than on others.  Things like the choice of languages or architectures have an effect, as do the systems and people the project needs to interface with.

- **Team Experience**: Over time, the team become more experienced both working with each other and with the project itself.  They learn the [Risk Landscape](../risks/Risk-Landscape.md) and understand where the pitfalls lie and how to avoid them.   

## Calculating Story Points

As shown in the above diagram, you take all of these inputs, mix them together and out pops a number of story points.  How does that work?  How do we get from one to the other?  Scrum literature says that you should "play planning poker" in order to arrive at a number of story points.  In my experience, you end up with conversations like this:

> "Rob, you've played an 8.  Everyone else played a 3.  What's your thinking there?"

> "OK, well, first, I can see that we need to mock-up a web page.  Now, it's clearly not that complex a job, but, we'll need to run it by the sales team, and they're notoriously hard to schedule meetings with... and we'll need a few of them in the meeting.  So, if we assume that there's going to be two or maybe three iterations of this, it'll soon add up into days gone by."

-or- 

> "I'm thinking a 2 for this task."

> "I'm thinking a 5:  we're actually going to have to implement some new indexes on the database, so it's an optimisation issue.  And there could be some locking problems around the Users table if we are running this update alongside everything else".

What's happening here?  We are basically _alerting each other to the risks and tasks we think are present_ on the story.  That's the value the experience of the team and the developers brings to the table. 

## The Story Point Estimate

After some back-and-forth, the team agrees on a number.  But what does this number represent?  Let's look at some interpretations:

- **Ideal Person-Days**: An obvious interpretation is that a story point is some number of person-days.   In most of the planning sessions I've been involved in, there is either an explicit or tacit base-lining of story points so that everyone has a similar conception of how much work is involved in one, e.g. "A Story point is a morning".  The "ideal" part refers to the actual time you get to spend on a task, away from interruptions, lunches, all-hands meetings and so on.  The reason _not_ to use person days directly is that developers all work at different speeds.

- **Complexity**: An alternate view is that [a story point is about _complexity_](https://www.clearvision-cm.com/blog/why-Story Points-are-a-measure-of-complexity-not-effort/).  This means a Sprint is all about budgeting complexity, rather than effort.   This makes some sense - [complexity is a recurring theme in Risk-First, after all.](../complexity/Start.md)  However, given that the sprint is measured in person-days, and the scrum leader is going to produce a report showing how many story points were completed in a sprint, it's clear that complexity really is just a weak proxy for person-days anyway.  In fact, there are lots of tasks that might be low-complexity, but take a lot of time anyway, such as designing 500 icons.  This will clearly take a lot of time, but be low-complexity, so you better give it enough story points to represent the time you'll spend on it.   

- **Relative Sizing**: A third way of looking at it is that really, story points are just about _relative_ sizing:  it doesn't matter what they refer to or how big they are, it's all about trying to budget the right amount of work into the sprint.  For example, you can either have two one-point stories, or a two-point story, and the effect on the sprint is the same.  Because there is no fixed definition of the size of a story point, you do run the risk of story-point "inflation" or "deflation".  But unless you are trying to use them to plot team productivity over time, this shouldn't really matter so much.  And we'd never make the mistake of doing that, [right](../risks/Map-And-Territory-Risk.md)?  

## Observations

So while all the _inputs_ seem good, there is a real lack of formalism about what exactly a _story point_ is at the end of it.  This makes it very hard to say exactly what goes on inside the "Calculate Story Points" function.  Isn't there some better way than this?  Let's see if we can make some suggestions.

### 1. Innovation Tokens

In his essay, "Choose Boring Technology", Dan McKinley describes a theoretical idea of "Innovation Tokens":

> "Let’s say every company gets about three innovation tokens. You can spend these however you want, but the supply is fixed for a long while... If you choose to write your website in NodeJS, you just spent one of your innovation tokens. If you choose to use MongoDB, you just spent one of your innovation tokens. If you choose to use service discovery tech that’s existed for a year or less, you just spent one of your innovation tokens... there are many choices of technology that are boring and good, or at least good enough. MySQL is boring. Postgres is boring. PHP is boring. " - [Choose Boring Technology, _Dan McKinley_](https://mcfunley.com/choose-boring-technology)

What he's driving at here is of course _risk_: with shiny (i.e. non-boring) technology, you pick up lots of [Hidden Risk](../thinking/Glossary.md#hidden-risk).  Innovation Tokens are paying for time spent dealing with [Hidden Risk](../thinking/Glossary.md#hidden-risk).  Dan's contention is that not only do you have the up-front costs of integrating the shiny technology, but you also have a long tail of extra running costs, as you have to manage the new technology through to maturity in your environment.

Put this way, couldn't story points be some kind of "Innovation Token"?    

When re-framed this way, it becomes a lot clearer what the function "Calculate Story Points" is really attempting to do - it's all about enumerating the risks of doing a certain task and making sure that we don't bite off more than we can chew.  If story points were simply _person-days_ then "deploy ReliableDB" and "deploy ShinyDB" take about the same time.  But, when considered from the point of view of _risk_, "deploy ShinyDB" should have a much higher story-point value.

Sometimes, developers provide _tolerances_ around their story-point estimates, "optimistically, 2 days, pessimistically, 4 days".  Usually, this subtlety gets lost in the planning process.  It's certainly not factored into the usual velocity calculations - we need something more robust.

### 2. Capturing Knowledge

Another problem in Story Point estimation is bootstrapping.  It is expected that, to start with, estimates made by inexperienced teams, or inexperienced team-members, are going to be poor.  The expectation is also that over time, through domain experience, the estimates improve.  This seems to happen _somewhat_ in my experience.  But nowhere near enough. 

A common complaint when tasks overrun is that the team were blind-sided by [Hidden Risk](../thinking/Glossary.md#hidden-risk), but in my experience this boils down to two things:

 - Genuine hidden risk, that no-one could have foreseen (e.g. a bug in a device driver that no-one knew about).
 - Fake hidden risks, that could have been foreseen with the appropriate up-front effort (e.g. a design approval might take a bit longer than expected due to absence).
 
Couldn't we bootstrap the estimation process by providing an "Interference Checklist" for story points, based on the things that commonly throw spanners into the works?  

Below, I've sketched out a small section of what this might look like.  The [next article](Interference-Checklist.md) contains a more complete Interference Checklist that I've put together and you can modify for your own purposes.

| **Area**                                     | **Concern**                                                                       | **Notes** | **Point Value** |
| -------------------------------------------- | --------------------------------------------------------------------------------- | --------- | --------------- |
| **\- [Conceptual Integrity Risk](../risks/Feature-Risk.md#conceptual-integrity-risk)** | Requires new interface to be added      |           |                 |
|                                              | Requires refactoring of existing interfaces                                       |           |                 |
| **\- [Feature-Access Risk](../risks/Feature-Risk.md#feature-access-risk)**| Interface Experimentation required                   |           |                 |
|                                              | Varied user population                                                            |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Implementation Risk](../risks/Feature-Risk.md#implementation-risk)** | Developer unfamiliar with the requirements / system |           |                 |                                              
| **\- [Feature-Fit](../risks/Feature-Risk.md#feature-fit-risk)**| Success criteria hard to define                                          |           |                 |
|                                              | Difficult-to-access user base                                                     |           |                 |

By starting discussions with an Interference Checklist, we can augment the "play planning poker" process by _prompting people on things to think about_, like "Do we know what done looks like here?", "Is this going to affect some of our existing functionality?", "How are we going to get it tested?".  

A Checklist is a good way of asking questions in order that we can manage risk early on.  It's all about turning a [Hidden Risk](../thinking/Glossary.md#hidden-risk) into one we've thought about.  

If the team runs through this list together, and then decides the task is a "five-story-pointer", then surely that is a better, more rigorous approach than just plucking a number out of the air, as planning poker suggests.

And, building up an Interference Checklist shouldn't be a task done just during a retrospective.  You should be allowed to add detail to it _any time you like_ rather than waiting for a retrospective.  If you're struggling to implement some story on the project, is that because you were hit by a risk you already knew about?  Is it on the list? If not, add it right there and then! 

Conversely, if the risk _is_ on the list, were you prepared for it?  Did someone correctly identify that it would come up?  If not, can you work out why it got missed?   

### 3.  Sizing Work

In my opinion, one of the craziest, least well-justified elements of story point estimation is the insistence that they are sized to [Fibonacci Sequence Numbers](https://en.wikipedia.org/wiki/Fibonacci_number), (0, 1, 2, 3, 5, 8, 13, 21) which seems needlessly nerdy but also suggests an unearned confidence in our ability to precisely estimate story sizes.  (How often can we really be sure it is an 8, not a 13?)  

The more options we have over the size of a story, the more difficult it is to be right.  Also fewer possible sizes means we get more experience estimating work to fit that particular size.   

So here, I'll stick with just three sizes, "Small", "Medium" and "Large", and we'll set bounds according to the time they'll likely take. 

You don't have to use exactly these sizes.  Use whatever works for your team, but keep the number of sizes _low_ and the maximum length _short_: anything _bigger_ than "Large" becomes unwieldy, and lacks a rapid feedback loop.  Anything shorter than "Small" doesn't really need an estimate anyway.

### 4. Risk Budgets

Crucially, we'll also allocate each size a risk budget:

 - **Small**: A couple of days' work for any member of the team, Risk Budget is 3.
 - **Medium**: Two weeks' work for a junior developer, or maybe four days work for a senior, Risk Budget is 5.
 - **Large**:  Two weeks' work for a senior developer, Risk Budget is 8.

So, given a size, can you tell if a piece of work fits into it?  The next step is to run through your Interference Checklist, and come up with a Risk Score for the work.  Let's look at an example:  perhaps you are adding a new screen to your system for capturing user preferences.  It looks like it'll be a couple of days effort, so is it "Small"?  

Maybe the Interference Checklist for it looks like this:


| **Area**                                     | **Concern**                                                                       | **Notes** | **Point Value** |
| -------------------------------------------- | --------------------------------------------------------------------------------- | --------- | --------------- |
| **\- [Conceptual Integrity Risk](../risks/Feature-Risk.md#conceptual-integrity-risk)** | Requires new interface to be added      | Yes, new screen  | 1                |
|                                              | Requires refactoring of existing interfaces                                       |           |                 |
| **\- [Feature-Access Risk](../risks/Feature-Risk.md#feature-access-risk)**| Interface Experimentation required                   |           | 1               |
|                                              | Varied user population                                                            |           | 1               |
|                                              |                                                                                   |           |                 |
| **\- [Implementation Risk](../risks/Feature-Risk.md#implementation-risk)** | Developer unfamiliar with the requirements / system |           |                 |                                              
| **\- [Feature-Fit](../risks/Feature-Risk.md#feature-fit-risk)**| Success criteria hard to define                                          |           |                 |
|                                              | Difficult-to-access user base                                                     | Need to find a representative group | 2    |
|                                              |                                                                                   | Total     | 5               |      

So this piece of work _exceeds_ the risk budget for a "Small" item, and needs to be classed as at least "Medium".  The implementer _might_ get lucky and not hit any issues, but the chances are _something_ on the checklist will need extra time.  

Note that above I just show a small sample of the full Interference Checklist.  With a bigger list, the real risk scores are likely to go a lot higher... your mileage may vary.

## Summing Up

In my view, the poker planning / story point process fails to produce a reliable estimate.  Mainly, this is not entirely the fault of story points - estimating software development tasks is akin to the [Halting Problem](https://en.wikipedia.org/wiki/Halting_problem).  In this series of articles, we've looked at how software can at times have [Fractal Complexity](Fractals.md), [be like a journey of discovery](Journeys.md) or [have nested layers of complexity](Kitchen-Cabinet.md) - it is _hard_.

Nevertheless, experience shows us that there are common _modes of failure_ for software estimates:  things we try to estimate and fail at.  Having an Interference Checklist and Risk Budgets addresses that deficit.

The next article is a complete [Interference Checklist](Interference-Checklist.md) that you can take and try out on your own projects.  





  

