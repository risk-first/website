---
title: Fixing Scrum
description: "Part of the 'Estimating' Risk-First Track, looking at the essential flaws in Scrums' time-boxing of work."
url: https://riskfirst.org/estimating/Fixing-Scrum
featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/scrum.svg">Fixing Scrum</image-artifact>'
categories:
 - Estimating
order: 6
---


# Fixing Scrum

What's the worst part of Scrum?  For a lot of developers, it's the daily stand-up meeting.  However, since this is a track on _estimating_, we're going to look at what I regard the biggest problem in Scrum:  Sprint Planning.

First, a note of caution:  whilst I've witnessed several teams who _say_ they are doing Scrum, I'm not basing this section on those experiences.  The problem is, talking about the problems of Scrum based on the _reality_ of Scrum leaves you open to the criticism that you weren't doing Scrum right in the first place.  

Instead, we'll be looking at Sprint Planning from the archetypal description given in Rubin's [Essential Scrum](https://www.amazon.com/Essential-Scrum-Practical-Addison-Wesley-Signature/dp/0137043295) (2013 edition).  

## First Principles: The Sprint Review

Work in Scrum is done within periods of time called _Sprints_.  Each sprint ends with a _Sprint Review_:

> "The goal of this activity is to inspect and adapt the product being built... Everyone in attendance gets clear visibility into what is occurring and has an opportunity to help guide the forthcoming development to ensure that the most business-appropriate solution is created." - Essential Scrum (p26), _Rubin_

In Risk-First, we tend to call this validation step [Meeting Reality](../thinking/Glossary.md#meet-reality):  you are creating a [feedback loop](../thinking/Cadence.md) in order to minimise risk.  What is the risk you are minimising?  Essentially, we are trying to reduce the risk of the developers _building the wrong thing_, which could be due to misunderstanding of requirements, or perfectionism, or because the piece of work was ill-conceived in the first place.  In Risk-First, the risk of building the wrong thing is called [Feature Risk](../risks/Feature-Risk.md).

![Feature Risk mitigated by Meeting Reality](/images/generated/estimating/scrum/scrum1.png)

The above diagram demonstrates us mitigating [Feature Risk](../risks/Feature-Risk.md) (the risk of not building the right software for our clients) by organising a Sprint Review.  But there is a downside to a Sprint Review:  _it takes time_.

![Schedule Risk for Stakeholders](/images/generated/estimating/scrum/scrum2.png)

And that risk is called [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).  It is shown in the diagram above: the _more feedback_ you are receiving, the more _interruption_ you are causing to the people giving feedback.   So you are trying to [Balance Risk](../bets/Purpose-Development-Team.md):  while having a _daily_ review for a software project involving all stakeholders would be over-kill and waste a lot of everyone's time, having a _yearly_ review would be too-long a feedback loop.   Balancing risk here means doing the feedback loop _just often enough_.

## Time-Boxing To The Rescue

> "Sprints are **time-boxed** so that they have a fixed start and end date, and generally they should all be of the same duration. " - Essential Scrum (p20), _Rubin_

![Time Boxing Causes Coordination Risk](/images/generated/estimating/scrum/scrum3.png)

In order to balance the risks, Sprints are time-boxed:  rather than just requesting feedback every five minutes or _whenever_, the idea is that the development team completes a Sprint within a fixed period of time (two weeks being common).  On the one hand, this means everyone can have a regular meeting in their diary, and agree up-front about how much of their schedule will be taken up in Sprint Reviews.  

But the problem is that now the developers have to coordinate their work to be ready before the Sprint Review starts.   Even for a _development team of one_ it can be a challenge to coordinate like this:   often, development is completed a few days early, or incomplete by the day of the demo, so it might be easier to move the meeting.    

As the number of developers in the team grows, the [Coordination Risk](../risks/Coordination-Risk.md) increases:  rather than bulls-eye-ing a single feature for demo day, you're now expecting a whole team to do it.  

Nevertheless, time-boxing is foundational principle of Scrum.  So in order to get time-boxing to work, this means we have to rely on planning and estimating.


## Planning And Estimating

![Planning and Estimating to reduce Coordination Risk](/images/generated/estimating/scrum/scrum4.png)

Now, although the above diagram _makes sense_ (estimating as a mitigation to coordination issues) by this point in this track of articles we should be wary of our ability to estimate development tasks _at all_:

 - **Sometimes, tasks have a [Fill-The-Bucket](Fill-The-Bucket.md) nature.**  If you have a test plan to run through on six different platforms, and last week doing a single platform took two hours, then your estimate of two days for the lot is probably about right.  

 - **Sometimes, it's about finesse.**  With [Fractal-Style](Fractals.md) problems you know that three days spent on icon design will yield better results than one day, but either way, there will be a set of icons to look at.  

 - **But sometimes, problems can telescope, as we discussed in [Kitchen Cabinets](Kitchen-Cabinet.md).**  You start thinking the problem of connecting A to B is simple, but then you realise it involves a call to C and to redesign the whole of D and introduce a new micro-service E... your estimate is toast.

 - **Finally, sometimes, you'll have a problem that's like a [Journey](Journeys.md).**  Maybe you're trying to set up a new deployment pipeline?  The first step, finding servers turned out to be easy, but now you're trying to license the software to run on them, and it's taking longer.  The journey you have to take is _known_, but the steps along it are all different.   Will you hit the Sprint Review on time?  It's super-hard to say.
 
Given that estimating is so problematic, does it make any sense to try to mitigate our [Coordination Risk](../risks/Coordination-Risk.md) using estimates?  

##### As a tool for dealing with Coordination Risk, _Estimating_ is an unreliable foot-gun.

## Other Ways To Address Schedule Risk

![Schedule Risk for Stakeholders](/images/generated/estimating/scrum/scrum2.png)

Let's go back a step:  isn't there another way to tackle the [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) problem _instead_ of time-boxing / huge sprint review meeting?   As we saw, this led to [Coordination Risk](../risks/Coordination-Risk.md) issues.  Here are several other ways you could solve this problem:

- **Instead of giving live demos of completed features, give video demos of software in progress.** In the film industry, this is called [Dailies or Rushes](https://en.wikipedia.org/wiki/Dailies), because they produce a reel of all the film shot that day.  Why?  Again - it's about risk management:  you're trying to find out if there are any technical issues with the film shot before shooting anything new.   Going back and shooting several weeks later can often be impossibly difficult.  (A great example being the reshoots of the film "Justice League" involving Henry Cavill, playing Superman.  Sadly, when these reshoots were done, he was filming "Mission Impossible: Fallout", and had grown a moustache, which the director of that film, Chris McQuarrie, couldn't let him shave.  So Superman's moustache was edited-out using CGI.)

- **Worried stakeholders won't give feedback?** Try and perform the reviews in a chat room for the team, involving all the stakeholders.  If you don't hear back from someone, call them out in the room.

- **Avoid Coordination Risk by not needing to coordinate.** If you can break down the project into smaller, still-meaningful units, then you should do that, because it means that you're reducing the size of the coordination problem, which grows quadratically with the number of actors involved.

## Planning Poker

Scrum's "solution" to this conundrum is not to throw out estimating, but to throw people at the problem:  if one developer can't come up with good estimates, surely a whole team of them can?   This is the purpose of "Planning Poker":

> "In Planning Poker, we don't take averages [...].  The goal is not about compromise but instead for the development team to reach a consensus about the estimate [...] focused discussion helps obtain a shared understanding of the story." - Essential Scrum (p133), _Rubin_

Perhaps this improves estimating, but for me there are two key problems with this:

- every estimate is now consuming more developer time, and 
- instead of focusing on what _should_ be done, developers are focusing on _how long_ it will take to be done.

## 10X

I've written before about [how being a "10X Developer" largely comes down to having already visited the terrain](Estimates.md).  This implies that _at different times_ we can all be either 1X or 10X Developers.

But with the power of hindsight, it's clear that at different times, on different projects, _whole teams_ can be either 1X or 10X.  

 - For example, when working in 2002 at an investment bank, my team delivered software which is used by around a hundred people for about ten minutes each day, providing an important risk-management function.  It is still running, unchanged 18 years later (at the time of writing).   We wrote this as a team of three people for about six months.  With the benefit of hindsight, this was clearly high-value work. 

 - Alternatively, at a different employer a few years' ago, I worked in a large team of about 15 developers, building a data service layer for an application, probably we worked on it for a year and a half.  At some point, things started to fall apart, and the team was disbanded. A colleague and I re-wrote the whole thing in three months together.  Again with hindsight, some of this was high-value, some very low:  the re-write was better value because it was _radically simpler_.  Could we have done it that way in the first place?

 - At another employer, I spent the summer building some testing tools for a good six months before we all decided it was a waste of time and packed it in.  This was no-value.  Could we have figured that out sooner?

What I am trying to say is:

##### It's much more important to focus on building the right thing than nickel-and-diming it over the estimate process.

What's the point in getting an estimate right if you're building _totally the wrong thing_?  Am I alone in finding that 90% of everything I do goes in the bin, more-or-less straight away?

## The Key Question

> " Your scientists were so preoccupied with whether or not they could, they didn’t stop to think if they should." -[Ian Malcolm, _Jurassic Park_](https://www.imdb.com/title/tt0107290/)

How can we, as software developers, minimise the chance of building the wrong thing?   

![Scrum](/images/generated/estimating/scrum/scrum4.png)

Look above at the diagram what Scrum is trying to do to mitigate [Feature Risk](../risks/Feature-Risk.md):

- We [Meet Reality](../thinking/Glossary.md#meet-reality) to ensure we've got a feedback loop.
- We **time-box** to avoid wasting stake-holders' time (Schedule Risk).
- We do **planning poker** to try and avoid the Coordination Risk problem of everyone needing to complete their work for the end of the Sprint.

But actually, we're now _three degrees_ away from the original problem of **trying to build the right thing**.  The team is focused on figuring out _how much_ they can get done in a Sprint, not _whether they are building the right thing_.  Scrum purists might argue that this is the purpose of the **Sprint Goal**, which should be agreed in advance.. but actually this is usually just a bunch of items from the backlog, shoe-horned into a sprint-sized chunk of time.

If the thesis that "90% of everything is waste" is true, then Planning Poker is _also_ a waste, and we should devise a planning process to avoid this.  

In the [next article](Risk-First-Analysis.md) we'll look at how we might do that.
