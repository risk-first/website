---
title: Anti-Goals
description:  Just focusing on your goal is not enough... 
url: https://riskfirst.org/2020/01/17/Anti-Goals

featured: 
  class: bg1
  element: '<risk href="/public/templates/risk-first/redesign/risks/goal_v2.svg"><code>AG</code><title>Anti-Goal</title></risk>'
author: rob
date: 17-01-2020
categories:
 - News
---


# Anti-Goals

A lot of people and organisations have goals ("A million subscribers!", "Lose 15 Pounds!", "Find a Wife!", etc. ) and sometimes, they even have _strategies_ for achieving these goals ("Go To Trade Events!", "Stop Eating Chocolate!", etc).

But it's often useful to enumerate exactly what you _don't_ want to happen, that is, Anti-Goals.

![Goals On A Golf Course](/images/posts/anti-goals/golf.png)

## An Example

Let's say it is my dream to launch a SaaS business.  Startup culture would have you believe that the thing to do is to then pursue this goal with every sinew until it is achieved.   

But there are [plenty](https://www.tintup.com/blog/take-break-startup-guide-avoiding-burnout/) of [stories](https://mattermark.com/startup-burnout/) about [burnout](http://www.startupburnout.com), and you don't want to end up there.  Being burnt-out, having invested five years of your life and all of your savings is an Anti-Goal.

Can you even get to the Goal without tackling the Anti-Goal too?

## VVVVVV

The game [VVVVVV](https://en.wikipedia.org/wiki/VVVVVV)'s development was a case in point.  As Terry Cavanagh, the author, says:

> "At the start of 2008 I’d taken out a loan for 15,000 euro, but that only lasted a bit over a year. I spent six months in 2009 on unemployment benefit. By November I was utterly broke – my credit card was maxed out, my bank account completely overdrawn – I was borrowing money from friends and family just to pay rent and make loan repayments. I eventually just ended up moving back in with my parents. Things were pretty bleak.  The only thing I really had going for me was VVVVVV ... I wanted to make something I could be proud of. " - [Terry Cavanagh, Distractionware.com](http://distractionware.com/blog/2011/01/stop-and-reflect/)
 
Terry _busted through_ the Anti-Goal, and eventually released VVVVVV to critical and commercial acclaim.  But how many other stories went the other way, of a project spiralling into the Anti-Goal and never coming out?   Terry's account is a great story of against-the-odds success - a clear case of [Survivorship Bias](https://en.wikipedia.org/wiki/Survivorship_bias) - _we only hear the success stories_.

## Visualising Anti-Goals

Goals and Anti-Goals are both kinds of [Risks](../thinking/Glossary.md#risk).  While Goals are "Upside" risks (the outcome is uncertain, but likely to be in your favour), Anti-Goals are "Downside" risks (again, uncertain outcome, likely to go against you): you'll want to try to navigate between these to arrive at the Goal, rather than the Anti-Goal.

Here at [Risk-First](https://riskfirst.org), there's lots of talk about navigating the [Risk Landscape](../risks/Risk-Landscape.md), which you can imagine being like the terrain of a golf course (as in the diagram above). 

Sporting analogies are an over-used pedagogic tool, for writers of limited imagination.  But I'm not going to let that stop me from beating this to death:

 - Sometimes the most direct route isn't the best one.  See those "Bankruptcy Bunkers"?  They're on the direct path, so it might be best to land the ball in front of them, rather than try to tackle them directly.
 
 - The "Agile Approach" of taking lots of small shots is also not always best.  First, the goal of golf is to try and hit the pin in as few shots as possible, but also playing short shots off the tee is going to land you in the "Rough of Analysis Paralysis".  However...
 
 - The "Waterfall Approach" of planning the perfect trajectory and distance also rarely results in a hole-in-one.  So if you know you're going to miss, it's best to miss-short, so that you stay on the "Product-Market-Fit Fairway" rather than winding up in the woods at the back and losing your ball.
 
 - Golf (and software development) is therefore about choosing the right club (practice) for each shot (task, project), paying careful attention to the hazards (risks) and playing within your ability (not overcommitting).
 
Ok, I'm even boring myself with this now.  Let's wrap it up.

## Behaviour-Driven Development

A lot of the grunt-work of software development seems to be around the process of just completing _tasks_:  take the top item off the work stack, understand the problem, write some code, watch it build, test etc.  

As we've seen before, the purpose of doing any work on a software project is to [manage risk](../bets/Coding-Bets.md).  Each task on the project can be re-framed as a risk, and completing the task absolves you of the risk.  

But Anti-Goals are a demonstration of the fact that sometimes, you can't just care about the goal:  

- If I'm doing a database migration, the anti-goal is definitely _corrupting users' data_.
- If I'm building a secure website, the anti-goal might be _accidentally publishing sensitive details_.
- If I'm adding features to my product, an anti-goal might be _making the product harder to use_.

We almost have a blind-spot when it comes to the anti-goals, or at least, we create further task-ticket for them to make them someone else's problem, or dump them on a [Risk Register](../thinking/Just-Risk.md) to be forgotten about.

We need to acknowledge that pursuing certain goals via certain courses of action exposes us to Anti-Goals along the way.  Maybe we can frame this in Behaviour-Driven Design? 

> "GIVEN the scope of this SaaS project, WHEN I develop it THEN I want to avoid burn-out and bankruptcy"  



 
 


