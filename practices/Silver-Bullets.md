---
title: Silver Bullets
description: A critique of Fred Brooks' 1975 essay on improvements to software engineering.
url: https://riskfirst.org/practices/Silver-Bullets

featured: 
  class: bg1
  element: '<action>Silver Bullet</action>'
categories:
 - Practices
order: 4
---


# Silver Bullets

In the original “Mythical Man-Month”, 1975, Fred Brooks (who said many very insightful things also) posited:

> “There is no single development, in either technology or management technique, which by itself promises even one order-of magnitude improvement within a decade in productivity, in reliability, in simplicity"

Many years ago, I bought the 20th Anniversary Edition of “The Mythical Man-Month” and read the essay  '“No Silver Bullet” Refired’.  (So that would have been 1995).  In this, Fred talks about the potential Silver Bullet of re-use, and is cautiously optimistic. 

I think if he’d written this in 2005 (at which point Java was big news, and we downloaded libraries like Xerces and Tomcat from the internet) he would have said that this had been a resounding Silver Bullet success:  there just needed to be some other things in place first:  like the internet, open source communities, widespread adoption of Java etc.

So, why do people constantly go on about the idea that there are “no silver bullets”?  (Note that I’ve just recently watched this) There totally are silver bullets…  what Brooks wrote in 1975 is not necessarily true today.  

The rate at which technology was improving in 1975 was slower than today.  Given that Brooks’ time-frame was ten years, and there was but one silver bullet, you would expect us to be having more of them today:  ten years is a long time in IT now.  

But, there’s a second problem.  That is, they creep up on you, and become part of the scenery without you even noticing their contribution.   And, it’s really easy to underplay the importance of some massive ground-shift in opinion after it’s happened.  

In a way, this is like AI: as soon as a computer can do it, it’s not AI anymore.  Poor AI.  Self-driving cars, speech-to-text, text-to-speech, etc.  

Here are some silver bullets.   I’m sure there are better ones, feel free to suggest some.

## 1.  Assembly Language

It’s difficult to underplay the importance of having mnemonics (which imply a meaning) instead of just numbers.  Numbers you have to remember, and hold in your head.  Mnemonics leap off the page and give you a meaning.  It’s a pretty simple translation, granted, but it’s a huge, easy win.  This gives us a clue as to where to find silver bullets in the future:  look for ways in which we can make the task of defining software more human.

## 2.  Higher Level Languages

Suddenly, anyone can program, by typing stuff in and watching what happens on the screen.  No one has to worry about memory location, bytes, bits, that kind of thing.  Ok, it’s not suitable for everything but still, a huge win.  My favourite example is Excel.  No one even realises that doing Excel formulas is even programming.  You don’t worry about garbage collection, or deployment, or linkers.  But, it’s undeniably happening. 

## 3.  Library Code

By creating a language that allows libraries to work together, suddenly, the lone programmer doesn’t have to do it all herself.  (This was Brooks’ re-use option).  Also, we have google now.  And github.  I can type a few keywords in and instantly discover all the libraries in a given area.  I have to make a value-judgement on whether any of them are good, but still, I have the choice of not building it myself.

## 4.  Garbage Collection

So, you don’t have to worry about memory anymore.  Awesome.  A whole set of bugs rendered irrelevant.

## 5.  Type Systems

Stopping you breaking your memory models.  Catching loads of bugs.  These were probably around when Brooks wrote his book, but maybe wouldn’t have been widely used like they are today.

## 6.  The Internet

Instead of distributing libraries on floppy disks and charging a lot, you can now download them off the internet.   Also, you can easily find out about libraries and languages that are out there by searching for them, or reading newsgroups or whatever.  Gone are the days when I had to own a manual in order to understand something: I can just download it now.  

## 7.  Open Source

Not only can you find out how the libraries work, but if you find some like-minded people you can work together on solving a common problem.  A problem shared is a problem halved.  Or whatever.   It’s self-organisation on a huge scale.  

## 8.  Stack Overflow / QA Sites Generally

If downloading the manual doesn’t cover it, just ask a question and then for no money people round the world will figure out the answer for you.  I have no idea why, but it works.

## 9.  Commodity Hardware & Operating Systems

Brooks talked a lot in the 20th edition about the explosion in micro-computers.   He also talks about consolidation of operating systems, which has made a huge difference.   He would be amazed at what this has become.  Both those things are hugely more advanced now.  We have computers in our pockets.  OS X, Windows, iOS… they’re even free.

I was just going to put Linux here, and say how, we used to have to worry about getting files off one machine and into a format for another machine, and finding the right media to do it... that’s gone away.  Linux standardises at such a high level that you can assume so much about the platform you’re running on.

Also, we now even have cloud computing - you can just provision hardware in seconds.  It used to take months to buy kit and get it set up and connected to the internet.  

## 10.  Web Standards

To put my software in front of users, I don’t have to send them a CD with a client program on it anymore.  No, I just point them to a “URL”, whereupon their browser will download the client in “HTML”, “Javascript” and “CSS”, and, even though they might not be using exactly the same browser as me, it’ll run for them anyway, and they’ll see my software.

Even just the improvements to browsers over the last ten years have been huge.   Anyone remember programming for IE4 or 5?  

## 11.  Containerization

To most people, this might not seem like a "10X" improvement, but believe me, if you've worked in a large organisation, provisioning hardware can sometimes take _months_.  Spinning up containerized, virtual servers not only means more efficient hardware usage and fewer single points-of-failure, but it means that those _months_ could turn into _minutes_.  

## 12.  AI?

Building a self-driving car with `for` loops and `if`s would be _inconceivable_.  But, just maybe it can be done with deep learning and computer vision?  It's looking likely, but we'll see.

## Epilogue

Brooks signs off the book in an epilogue called “Fifty Years of Wonder, Excitement, and Joy”.  And he’s totally right.  The silver bullets are coming thick and fast.  I expect to see golden bullets in my lifetime.  As he says:

“Not only is the end not in sight, the pace is not slackening.  We have many future joys"