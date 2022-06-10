---
title: The Evolution Of Open-Source
description: Looking at evolutionary feedback loops in software development
url: https://riskfirst.org/misc/Evolution-open-source

categories:  
 - Misc
featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/open-source.svg">Evolution</image-artifact>'
order: 17
---


# The Evolution Of Open-Source

In the 00's the Internet disrupted the music industry entirely.  People walked around with iPods full of songs that they had downloaded using Napster or Limewire and the era of the physical-medium began to end, taking with it the cozy business models of the record companies.

Eventually, music makers figured out that streaming with subscription fees was the right model to get people to pay for songs.  ([Spotify](https://www.spotify.com) being the main one).  The advantage of streaming was that it was even easier to use than pirating the music, and had none of the guilt attached.  

Television and film are following the same way, as is commercial software, as evidenced by Adobe Creative Cloud, Microsoft 365, and a million other SaaS providers.

## Rug Pull

![Open vs Proprietary](/images/misc/lego-open-proprietary.jpg)

But customers of commercial software have become wise to the proprietary equivalent of the [rug-pull](https://en.wiktionary.org/wiki/rug-pull), or "doing an Oracle":  woo the customer, make them depend on you, then milk the relationship for all it's worth.   

Increasingly, the world is turning to open-source software.  As the picture at the top shows, with the right licensing, open-source is _composable_.  The software systems of the future (proprietary or otherwise) are built using the Lego bricks of open-source.

Why is this?  Straight open-source is thankfully immune to the rug-pull manipulation:  you _know_ you'll at least have access to the source code.  But, is that better?

## The Basic Dilemma

Software is to some extent a living thing.  

Software cannot stay useful without effort:  it _has_ to change and adapt to the world around it.  This is a type of evolution, where the agent of evolution is _developer time and skill_.  The most successful software is able to attract large numbers of developers and evolve faster.  Worse software eventually becomes abandoned and dies.   

![Proprietary Feedback Loop](/images/generated/misc/proprietary-feedback-loop.png)

There are two main reasons developers will improve some software:  either they are paid to do it or they want to benefit from the improvements themselves.  Proprietary software tends to fall into the first category (the money has to come from somewhere).  

This is shown in the above diagram.  When you're building proprietary software, you want to create a feedback loop wherein the software _grows_ and _evolves_.  More customers, more functionality, more developers, more money.  Or, if not that - at least something _self sustaining_.

![open-source Feedback Loop](/images/generated/misc/open-source-feedback-loop.png)

Open-source usually falls into the second category - the developers are benefiting from the improvements they make... and so does everyone else.

But this is a dilemma because it seems you can't have it both ways:  you have to pick one.   If you want to sell your code (whether as a SaaS or with licenses) then it's dangerous to open-source it, since another company could come along and copy your business model.  

## A Synergy?

Issues like [Log4Shell](https://en.wikipedia.org/wiki/Log4Shell) really underscore the importance of secure open-source software.  Huge commercial organisations are being built on top of open-source now and it is in their interests to see that it is properly funded and maintained.  

It is simply in no-ones' interests to let popular open-source libraries' feedback loops fall apart.  Somehow, they need to be kept looping.

The solution to the above dilemma is to introduce the aggregator.  

Just as aggregators like Spotify showed how to defeat the issue of music piracy and re-establish a feedback loop in the music industry, we need aggregators for open-source too.  Software Foundations are well-placed to fill this role.

![Combined Feedback Loop](/images/generated/misc/combined-feedback-loop.png)

As shown in the above diagram, foundations need to step into this role and make sure they provide commercial funding and development to important open-source projects.  _Both_ feedback loops are at work here: developers can improve the open-source software via pull-requests just as before.  But, there is also the feedback loop of financial backing to ensure software stays up-to-date.  

Surely, this is the best of both worlds?




