---
title: Debugging Bets
description: Making use of risk and odds while debugging
url: https://riskfirst.org/bets/Debugging-Bets

date: 2019-11-10 16:32:03 +0000
featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/cards.svg">Debugging Bets</image-artifact>'
categories:
 - Bets
 - News
order: 3
---

# Debugging Bets

In [The Purpose Of The Development Team](Purpose-Development-Team.md) we looked at how a development team is all about trying to shift the risk profile in favour of the business.  Perhaps by removing the risk of customers not having the features they want, or not signing up, or not learning about the product.

Then, in [Coding Bets](Coding-Bets.md) we considered the same thing at task level. That is, in choosing to spend time on a given task we are staking our time to improve our risk position.  And, it’s definitely a bet, because sometimes, a piece of coding simply doesn’t end up working the way you want. 

![Article Series](/images/generated/practices/debugging/bets.png)

Now, we’re going to consider the exact same thing again but from the point of view of debugging. I’ve been waiting a while to write this, because I’ve wanted a really interesting bug to come along to allow me to go over how you can apply risk to cracking it.  

Luckily one came along today, giving me a chance to write it up and go over this.  If you've not looked at Risk-First articles before, you may want to review [Risk-First Diagrams Explained](../overview/Risk-First-Diagrams.md), since there'll be lots of diagrams to demonstrate the bets I'm making.

## The Problem

[Symphony](https://symphony.com) is a secure chat platform used mainly by banks.  I have been writing an app ("Tables App") which runs within Symphony and allows you to share and edit tabular data with people in a chat room.    It’s a nice little piece of functionality, allowing banks and their clients to sign off on things in tables (like purchase orders) imported from Excel.  This is way more elegant than email trails.

In order to make this work, we made use of functionality within Symphony called “On-Behalf-Of”, which allows Tables App to post messages as a user, if the user has given prior authorisation.

![Table Editing In Symphony](/images/tables.jpg)

But something wasn’t working - whenever I clicked "post" - no table!

To make matters worse, I was supposed to be doing a presentation on this within **two hours**.  I’d need to make good use of my available time.

## Flow

So, what is supposed to happen?

![Flow of Action](/images/debugging_flow.png)

1.  The user clicks the "post" button in Tables App.
2.  Tables App then makes a request to the Symphony Server for an On-Behalf-Of token.
3.  With this token, Tables App then makes a request to the Encryption Agent to post a message.
4.  The Encryption Agent encrypts the message, and forwards it on to the Symphony Server.  
5.  If that goes well, the message is added to the chat, and is delivered from the Symphony Server to the user's screen.

However, things go south around step 4:   I see the On-Behalf-Of token in Tables App, but using it with the Encryption Agent fails.

## Facts

Bubbling around in my mind were a number of hypotheses about why the demo wasn’t working.  Could it be my code?  Could it be something to do with connectivity? Could it be something on the Symphony side?  

For now, I ignored those voices in my head.  I wanted to use my limited time wisely, so first, I enumerated what I _did_ know:

1.  I knew the Encryption Agent worked.  I have a bot that uses it to post messages - but it’s not doing it On-Behalf-Of anyone, it just posts messages which are _from the bot_.  

2.  The error message in Table App’s log pertained to certificates.  So, there was likely to be some issue with certificates (good work, Sherlock).  

3.  Using `curl` (a command line program for doing HTTP requests), I could perform the same tasks locally, connecting to the Encryption Agent from my PC.  However there, I got a message saying `not able to obtain session`.

4.  Another part of Tables App was also trying to pull back details of who was in a chat room.  This was also failing with a message saying `You need [MANAGE_ROOMS] role`.  But this connected to the Symphony Server directly (not the Encryption Agent), because it didn’t need to encrypt anything.

5. Two week’s prior, I had tested some other On-Behalf-Of functionality out in a different application.  And it had worked fine.  I had scripts and logs to prove it.   But I had two hours left and digging up these scripts and running them again would be expensive.

## Hypotheses

In order to figure out how to use my time, I’d need to enumerate all the hypotheses about what the problem might be, and then work out how best to use my time to test these hypotheses.

![Hypotheses](/images/generated/practices/debugging/hypotheses.png)

In order to generate the list of hypotheses, you have to find the last-known good place, and work forward through all the steps after that that could have failed.  So this is what I came up with:

- `H1`:  The security token being used was corrupted somehow, in my `curl` test.  (unlikely)
- `H2`:  Again pertaining to `curl`, maybe I had a very short life-span of token, and it had expired? (likely) 
- `H3`:  Perhaps Tables App didn’t have the privileges it needed to operate?  (somewhat likely)
- `H4`:  Maybe there was some _new_ problem with the Encryption Agent?  (very likely)
- `H5`:  Maybe I was somehow creating the security token wrongly?   (likely) 
- `H6`:  The fact that `curl` and my server code got different responses is suspicious.  Was my server using the wrong certificate? (quite likely)
- `H7`: Alternatively, since I was running `curl` locally, and the server was running remotely, could it be a connection problem? (somewhat likely)

Were there other things that could have gone wrong?  Maybe, but they didn’t occur to me at that point in time.  Could there be multiple things going wrong?  Quite likely.

## Tests

If we test each hypothesis, we learn something about the system.  But that has a (time) cost:  I had a limited amount of time to try and learn as much as possible.    

### First Test

![Test 1: Curl With Broken Token](/images/generated/practices/debugging/test1.png) 

Although `H1` was unlikely (and therefore I probably wasn’t going to learn much) it was really easy to test.  All I needed to do was try the `curl` command again with a deliberately broken token.  What would the message be?  What came back was a `401 error - unauthorised`.  So it definitely wasn’t `H1`, because the error message was different.

### Second Test

`H6` / `H7` were a fairly easy thing to check.  I could fire up the server locally and test the code there.   I did this and discovered the certificate problem persisted.  I tinkered around a bit with the code, and eventually, it went away.  Instead, I got the `curl` “not able to obtain session” error  message.  

So, although I did have an issue with certificates, it wasn’t the main problem, just a side-show.  `H6` was now ruled out.

Since the code was returning the same result locally and on the server, that really ruled out `H7`.  Also `H2` was ruled out, because the server ran really fast - there wasn’t time for the token to expire.  

![Test 2:  Run Locally](/images/generated/practices/debugging/test2.png) 

## Third Test

Down to just `H3`,`H4` and `H5`.  I had definitely seen On-Behalf-Of working two weeks’ ago, but in that other app.  A fairly quick thing to do would be to try and post the message with that other app, but it wasn't installed.  Instead, I could try my same code out again, but _using the other app's identity_.  I did this, and lo!  I still get the “not able to obtain session” error. 

![Test 3:  Post With Other App](/images/generated/practices/debugging/test3.png) 

This ruled out `H3`.  But there was still a chance I was creating the token wrongly (`H5`). 

## Fourth Test

If I could use this token for an an On-Behalf-Of operation on the Symphony Server (rather than the Encryption Agent), it would prove the token was good, and rule out `H5`.  

This was another simple thing to test, since all I had to do was call a “Room Lookup” function on the Symphony Server, something that didn’t need encryption, and therefore use the Encryption Agent.  Now, although Tables App couldn't do this (fact 4), my other app could, so I could continue with the new identity and try that.

![Test 4:  On-Behalf-Of Against Server](/images/generated/practices/debugging/test4.png) 

## Outcome

Sadly, this meant that I’d actually had to test and rule out _all of the other hypotheses_ in order to arrive at the correct one (`H4`).  I guess it happens.   And the problem at this point is that I can’t fix it on my own: although I found (and fixed) a certificates-related bug in my own code, this one is going to require some support calls.  So, this is a bad outcome:  I couldn't do the presentation but _I did_ manage to figure this all out within an hour.  

## Some Notes

1.  I started by writing down all the things I knew, and all of my hypotheses.  Why?  Surely, time was short!  I did this _because_ time was short.  The reason was, by having all of the facts and hypotheses to hand I was setting up my [Internal Model](../thinking/Glossary.md#internal-model) of the problem, with which I could reason about the new information as I came across it.
2.  I performed four tests, and ended up ruling out six different hypotheses.   That feels like good value-for-time.
3.  In each case, I am trading _time_ to change the risk profile of the problem.  By reducing to zero the likelihood of some risks, I am increasing the likelihood of those left.  So a good test would:
 - a.  Bisect probability space 50/50.  That way the information is maximised.
 - b.  Require the least time-stake up-front in order to learn the information.
4.  Could I have tested `H4` first?  It was, after all the most likely thing in the first place.  If I could have proved that straight off, it would definitely have been better, but I don't think I _could have_, since I also had the certificates issue in play.
5.  What would have definitely been _worse_ would have been trying something long-winded out that doesn't end up proving anything.  A long-running bet which doesn't prove a hypothesis one way or the other is the biggest loss of all.

## Suitability

I have a feeling that this is really the process I use for _every_ bug, whether I am conscious of it or not:  generating hypotheses, ruling some of them out by comparing to the facts I know, and then testing the remaining ones.  However, I think most of the time (maybe as a result of being a developer for a long period) I don't have to do this consciously.  It just _happens_.

Also, I am super-lazy.  I'm always trying to rule of out the hypotheses with the least effort.  Usually, that means lashing together some arrangement of stuff just so see what happens (like the switching identities stuff above).  If testing a hypothesis starts to look onerous, I'll try and find some clever trick to reduce that effort.

Perhaps you have a different process?  Is there another one?  I'd really like to know about it if so.   Please join the GitHub Risk-First team and tell me about it!

## Coming Soon...

In the next (currently unwritten) article, we'll bring this home by looking at testing, and look at the similarities across all of these different practices.  
