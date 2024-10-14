---
title: The End Of Complexity
description: Software has never gotten less complex.  What is the end-game for this?
url: https://riskfirst.org/complexity/End-Of-Complexity

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/stop.svg">The End of Complexity</image-artifact>'
tags:
 - Complexity
sidebar_position: 6
---

# The End of Complexity

KubeCon (2022): To start with, a computer ran a program.  There was a one-to-one correspondence.  Then, people got clever, and realised they could get lots of programs running on the same machine. Lately though it's all been about creating one program to run on lots of machines.  And, not just machines of the same type:  whatever machines you want!  And whatever programs you want.  

The problem with this is that it is more complex.  Over time, software _always_ gets more complex, because it's always trying to adapt and [model human needs better and better](../estimating/Fractals.md#continuous-refinement).  

![The Broccoli Problem](/img/complexity/broccoli.jpg) 

I call this the Broccoli Problem.  

This complexity was on display at KubeCon.  The size of the k8s ecosystem is staggering.  There was no way to figure out all the different offerings, or understand what worked with what else.  I barely scratched the surface.  Now, a lot of this is down to money.  There is plenty of money in software right now and this is why we see so much variety.  Most of the smaller firms are lottery tickets.  

## Potential Solution #1:  Play-books

Faced with this baffling choice, what are developers to do?  Jono Bacon, at the LF All-Hands meeting said the answer was having play-books. Essentially, recipes for developers to follow to get things done (like marketing, or announcements, hiring etc).  And yes, those are useful.  But since a recipe is essentially a program for humans to follow, we can't solve the problem of too many programs with more programs!  More programs == worse broccoli effect.

## Potential Solution #2:  The Lindy Effect

The current approach developers apply all the time is the [Lindy Effect](https://en.wikipedia.org/wiki/Lindy_effect):  assume that any software that has been around x years will be around another x years.  This really restricts the search-space, but means you're not on the bleeding edge. (Often a good thing).  

A variation on this is social status indicated by GitHub stars or questions on Stack Overflow, or the number of conferences about that thing.  

We're kind of getting by with this - but it still gets harder all the time.  There are just too many options to even _discover_ them all these days.  It's more likely that we're using a tool X due to some historical accident rather than any reasoned analysis of its strengths or weaknesses.

## Potential Solution #3:  Silver Bullets

A third hope is for [a silver bullet](Silver-Bullets.md):   A _simplifying abstraction_ that sits on top of a whole load of different problems can really simplify thinking.   Containerisation is one of those abstractions.  Web pages/HTTP are another.  

The problem is, the respite is temporary:  as we see with the k8s landscape, the variety we're building on top of that abstraction is bewildering.  

Abstractions go through a lifecycle of: 

 - new and untested
 - usable
 - mainstream
 - part of the landscape
 - obsolescence

(Although, you can skip some of the steps in the middle and move straight to the last one.)

The problem is - these new abstractions _contribute_ to the Broccoli Problem:  this is how we ended up with Broccoli in the first place!
 
## Potential Solution #4:  Curation

There are various efforts to create out-of-the-box solutions:

- Things like [CodeAnywhere](https://codeanywhere.com), [GitHub](https://github.com) and [GitLab](https://gitlab.com) go a long way to simplifying tool choice (although you still have to choose one of those).   
- [AWS](https://aws.amazon.com) has a "menu" of services for you to choose from (although this too is bewildering).  

Ultimately, curators are running to stand still, facing huge [Red-Queen Risk](/tags/Red-Queen-Risk).   Their efforts to consolidate and simplify the landscape can't possibly keep up with the pace of evolution in the space they are working in.  

## Potential Solution #5: AI

The days of human software development are probably coming to an end:  the job has already changed from "building things from scratch" to "exploring, evaluating and combining pre-built components".   Since there are so many different component options, there is an n-squared problem of connecting them all up, so this work is only increasing with time.

Similarly, the job of exploring and evaluating is getting harder all the time, as the landscape grows.

What we are starting to see is AI beginning to help us build software.  At the moment, this is limited to things like [GitHub CoPilot](https://copilot.github.com) which uses a GPT-3 style approach to writing code.  There are also various tools in the Kubernetes landscape for doing AI-based security analysis (largely, some kind of pattern matching).

Although this sounds like a depressing way out of the Brocolli problem, it's probably better than...

## Potential Solution #6: Die-Back

Complexity has to be supported.  Software doesn't write itself - we need programmers who are either paid (for commercial projects) or volunteer (for open-source) to maintain the complexity we see.  

Should the pool of talent available to maintain the high level of complexity shrink, we will see the a collapse in the complexity of the software landscape.  

That this hasn't happened at any stage already actually surprises me.

Have I missed any?


