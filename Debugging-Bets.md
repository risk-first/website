---
title: Debugging Bets
description: Making use of risk and odds while debugging
url: https://riskfirst.org/Debugging-Bets
image: /images/generated/titles/Purpose-Development-Team.png
date: 2019-11-09 16:32:03 +0000
featuredimage: images/generated/single/Deubgging-Bets.png
categories:
 - Practices
 - News
order: 3
---

# Debugging Bets

In [The Purpose Of The Development Team](Purpose-Development-Team.md) we looked at how a development team is all about trying to shift the risk profile in favour of the business.  Perhaps by removing the risk of customers not having the features they want, or not signing up, or not learning about the product.

Then, in [Coding Bets](Coding-Bets.md) we considered the same thing at task level. That is, in choosing to spend time on a given task we are staking our time to improve our risk position.  And, it’s definitely a bet, because sometimes, a piece of coding simply doesn’t end up the way you want. 

Now, we’re going to consider the exact same thing again but from the point of view of debugging. I’ve been waiting a while to write this, because I’ve wanted a really interesting bug to come along to allow me to go over how you can apply risk to cracking it.  

Luckily one came along today, giving me a chance to write it up and go over this.

## The Problem

Symphony is a secure chat platform used mainly by banks.  I have been writing an app which runs within Symphony and allows you to share and edit tabular data with people in a chat room.    It’s a nice little piece of functionality, allowing banks and their clients to sign off on things in tables (like orders) imported from Excel.

In order to make this work, we made use of functionality within Symphony called “On Behalf Of”, which allows our app to post messages as a user, if the user has given prior authorisation to the app.

But something wasn’t working - whenever I posted the message - no table!

To make matters worse, I was supposed to be doing a presentation on this within two hours.  I’d need to make good use of my available time.

## Flow

So, what is supposed to happen?

1.  The user clicks a button in the app.
2.  The app then makes a request to the Symphony Server for an on behalf of token.
3.  With this token, it then makes a request to the Symphony Agent to post a message.
4.  The Symphony Agent encrypts the message, and forwards it on to the Symphony Server.  
5.  If that goes well, it returns a 200 response to my app, saying the message is posted. 

However, things go south around step 4:   I see the token, but using with the agent fails.

## Facts

Bubbling around in my mind were a number of hypotheses about why the demo wasn’t working.  Could it be my code?  Could it be something to do with connectivity? Could it be something on the Symphony side?  

For now, I ignored those voices in my head.  I wanted to use my limited time wisely, so first, I enumerated what I did know:

1.  I knew that I could post messages ok to the Symphony Agent.  I have a bot that does this... but it’s not doing it On-Behalf-Of anyone.

2.  The error message in the app’s log pertained to certificates.  So, there was likely to be some issue with certificates.  

3.  Using cur (a command line program for doing HTTP requests), I could perform the same tasks locally, connecting to the Symphony Agent from my PC.  However there, I got a message saying “not able to obtain session”.

4.  Another part of my app was also trying to pull back details of who was in a chat room.  This was also failing with a message saying “You need [MANAGE_ROOMS] role”. This connected to the Symphony Server directly (not the Agent), because it didn’t need to encrypt anything.

5. Two week’s prior, I had tested some other On-Behalf-Of functionality out in a different application.  And it had worked fine.  I had the logs to prove it.   But I had two hours left and disinterring these and running them again would be expensive.

## Hypotheses

In order to figure out how to use my time, I’d need to enumerate all the hypotheses about what the problem might be, and then decide which of those hypotheses was the best use of my time to test.

In order to generate the hypotheses, you have to find the last-known good place, and work forward through all the steps after that that could have failed.  So this is what I came up with:

H1.  The security token being used was corrupted somehow, in my curl test.  (unlikely)
H2.  Again pertaining to curl, maybe I had a very short life-span of token, and it had expired? (likely) 
H3.  Perhaps my app didn’t have the privileges it needed to operate?  (somewhat likely)
H4.  Maybe there was some problem with the Symphony agent?  (The symphony agent was a piece of infrastructure used to encrypt messages before they left the bank).  (very likely)
H5.  Maybe I was somehow creating the security token wrongly?   (likely) 
H6.  The fact that curl and my server code got different responses is suspicious.  Was my server using the wrong certificate? (quite likely)
H 7. Alternatively, since I was running curl locally, and the server was running remotely, could it be a connection problem? (somewhat likely)

Were there other things that could have gone wrong?  Maybe, but they didn’t occur to me at that point in time.  Could there be multiple things going wrong?  Quite likely.

## Tests

If we test each hypothesis, we learn something about the system.  But that has a (time) cost:  I had a limited amount of time to try and learn as much as possible.    

## First Test

Although H1 was unlikely (and therefore I probably wasn’t going to learn much) it was really easy to test.  All I needed to do was try the curl command again with a deliberately broken token.  What would the message be?  What came back was a 401 error - unauthorised.  So it definitely wasn’t H1.

## Second Test

H6/7 were a fairly easy thing to check.  I could fire up the server locally and tested the code there.   I did this and discovered the certificate problem persisted.  I tinkered around a bit with the code, and eventually, it went away.  Instead, I got the curl “not able to obtain session” error  message.  

So, although I did have an issue with certificates, it wasn’t the main problem, just a sideshow.  H6 and H7 now ruled out.

Also H2 was ruled out, because the server ran really fast - there wasn’t time for the token to expire.  

## Third Test

Down to just H3,4,5.  I had definitely seen the code working two weeks’ ago, but in another app.  A fairly quick thing to do would be to try and post the message with my other app.  It was just a case of switching identities.  I did this, and lo!  I still get the “not able to obtain session” error. 

This ruled out H3.  But there was still a chance I was creating the token wrongly.  If I could do an on-behalf-of operation on the Symphony Server rather than the agent, it would prove H5 was the case and not H4.  

This was another simple thing to test, since all I had to do was call a “Room Lookup” function on the server, something that didn’t need the agent.  

## Outcome

Sadly, this meant that I’d actually had to test and rule out all of the hypotheses in order to arrive at the correct one.    I guess it happens.   And the problem at this point is that I can’t fix it on my own: although I found (and fixed) a bug in my own code, this one is going to require some support calls.  So, this is a bad outcome, but I did manage to figure this all out within an hour.  

## Some Notes

1.  I started by writing down all the things I knew, and all of my hypotheses.  Time was short.  But I did this because time was short.  The reason was, by having all of the facts and hypotheses to hand I was setting up my [Internal Model] of the problem, with which I could reason about the new information as I came across it.

2.  I performed three tests, and ended up ruling out six different hypotheses.   That feels like good value for money.

3.  In each case, I am trading time to change the risk profile of the problem.  By reducing to zero the likelihood of some hypotheses, I am increasing the likelihood of those left.  So a good test would:
 a.  Bisect probability space 50/50.  That way the infomation is maximised
 b.  Require the least time-stake up-front in order to learn the information.





 



 


