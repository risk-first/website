---
title: Timed Thinking
description: A handy approach for getting serious thinking done, despite the distractions of the modern world.
url: https://riskfirst.org/2019/07/25/Timed-Thinking

featured: 
  class: bg1
  element: '<risk class="internal-model" />'
categories:
 - News
date: 2019-07-25 16:32:03 +0000
order: 4
---

# Timed Thinking

This isn’t a normal [Risk-First](https://riskfirst.org) article, but I wanted to get this out there anyway, because I’ve not seen this discussed much before, and actually, it has a big impact on the way I develop software, so you might find some use out of it too.

I want to discuss a method which I’m going to call “Timed Thinking” (really just the first term that came into my head) an approach I’ve used over the last few years along with regular journal-keeping and creating to-do lists to organise my thoughts and my time.  I find it especially useful in times of anxiety or indecision, or when trying to prune design-space for some software I want to build.

Now, this may well be obvious to a lot of people already, a critiscm you could level at much of the content on [Risk-First](https://riskfirst.org).  There's no huge innovation or insight here, but after a bit of searching, I couldn't find documentation on anything like this.  (Aside:  [MindTools.com](https://www.mindtools.com) seems to be a fairly exhaustive list of tools-for-thinking).  So if people can get excited about something as mundane as [Getting Things Done (GTD)](http://gettingthingsdone.com) then perhaps people can find value in this.

## How To Do Timed Thinking

1. Get a large pad of paper and a pencil.
2. Create a time-box of 30 minutes (set a time on your phone).  Remove all distractions such as the Internet (i.e. aeroplane mode), family, pets etc.  Don't be at your desk.  
3. Start by noting what you want to think about at the top of the page.  
4. Begin writing on that subject, mainly in longhand.  It doesn’t need to be neat.
5. Write continuously on the subject at-hand.  If you find yourself stopping and looking out the window, bring yourself back.  By writing continuously, you’re creating a feedback loop with yourself: you’ll be able to check that you’re doing the thinking you’re supposed to be doing, and not getting distracted.
6. Feel free to use multiple sheets at the same time.  I often have my stream-of-consciousness long-hand going on on one sheet, with a mind map of important concepts on a second sheet, and a third sheet containing a “stack” (in the software sense) of sub-items to think about that I update as they occur to me.
7. **Don’t stop.** Honestly, just keep going, even when you think you’ve exhausted everything.  Usually, the best ideas arrive towards the end.
8. Feel free to add arrows, circle terms, bullet some points, mind-maps, whatever.   
9. But, you can’t look anything up on the Internet as you go.  That needs to go into a to-do-later list, which you’ll keep on one of the sheets of paper.
10. Eventually, you’ll have a whole bunch of notes.   I usually end up with 4-5 sides of A4 after 30 minutes.  You might go faster or slower.  The point is to try and keep up a steady pace of writing and scribbling.
11. In the last 5 minutes, stop and get the laptop out.  Write up a summary email/evernote entry/whatever containing the main points of what you wrote.
12. You should feel happy about discarding your long-hand scribbles now, but if you want you can keep them for posterity.

## Why do this?  

 - Thinking is hard, especially nowadays in our distraction-driven, social media world.  Concentration is a rare resource.
 - You’re training yourself to think constantly on a single topic for 30 minutes without recourse to the internet.
 - By writing down everything as you go, you’re creating a feedback loop with the “supervisory” parts of your brain. They'll notice when you stop paying attention and get you back on track.
 - When your imagination suggests some crazy idea, the only way you can test this idea is against your Internal Model.  The great thing about only relying on this is that the feedback loop is instant: you can write down a statement and immediately pick it apart.   In Risk-First, we talk about Unit Tests having a short feedback loop, but  honestly this is as short as it gets.   
 - Because of that, you can cover a lot of ground, and reduce the state-space very quickly.   It’s all very well working on a project and trying out some [Spike Solutions](../bets/Coding-Bets.md#spike-solutions-a-new-technology-bet) to decide which way to go, but quite often you can trim the search space just by thinking really hard around the subject.

## Examples

### Debugging

I use this approach sometimes to work through bugs.   I'll start the session by listing out things I know (evidence) about the problem, along with other assumptions, and then build up a map of where the issues might lie.  

I might then proceed to identify a number of hypotheses about what the bug might be, and then, simply by exposing these hypotheses in long-hand, manage to test them against the existing evidence and assumptions.

Surprisingly, I've found many bugs this way without even opening a debugger.  Even when this doesn't work, I will usually end up with a list of _experiments_ to perform.  Since I've got half an hour, I might have time to work out what _order_ to perform these experiments.

Ideally, you'll want to perform debugging experiments that -whatever the outcome- teach you something useful about the code.  So really, you'll want an experiment that "binary chops" the set of hypotheses about where the bug will be.  And, you'll probably want to do these experiments in order of quickest-to-perform first.

### Designing

As you might expect, a [Risk-First](https://riskfirst.org) approach to software design would be one where you don't introduce unnecessary risk to your project, be it in the form of [Dependency Risks](../risks/Dependency-Risk.md) (try not to add them), [Complexity Risks](../risks/Complexity-Risk.md) (keep the codebase nice and tight), [Feature Risks](../risks/Feature-Risk.md) (make sure you're building the right thing) and so on.  

It's tempting to just throw code together and then hammer out the issues as you go.  Maybe even, this is how some people think Agile should work.   

But you can do a lot of work up-front with Timed Thinking.  Take your design.   Think hard about it using the above technique.  Consider all the [Risks](../risks/Risk-Landscape.md) from the Risk-First collection.  Work out which ones are going to sink you.  Can you re-design to avoid them entirely?  Probably you can.

You can also think about this from a constraints point-of-view.  Start the session by enumerating all the constraints you are under.  Then, start to try and design within the space that's left.   Or, start with the design _you already have in mind_ and subject it to all the constraints you can think of.  Even within half an hour, this can be tremendously insightful.

### Prioritising

I keep a to-do list at work, but I find it quite easy to get caught in a position of not knowing what to do next:   there are things that take a long time, things that are urgent, things that are important, things that depend on other things, things that look like they might be important but actually aren't, things that I look forward to doing and things that I don't, things that I could delegate and things that need to be done at certain times.

The reason I get paralysed is that none of that is enumerated on the to-do list itself.  Even if it were, I would need to load the whole thing explicitly into short-term memory in order to manipulate the graph and untangle it.   Which is a lot of work in itself, but is totally tractable within a half-hour focused Timed Thinking session.

## Other Types of Thinking

Timed Thinking is a relatively organised approach to thinking.  Maybe its even "forcing" a process that happens naturally.   

As Rich Hickey discusses in [Hammock-Driven Development](https://www.youtube.com/watch?v=f84n5oFoZBc), sleeping is a great way of problem solving.  I frequently find myself knowing the solution to problems first-thing in the morning.  

Another strategy I find particularly useful is "goofing-off".  When faced with a development problem which doesn't yield to the usual approach of everyday hammering-at-the-keyboard, I'll usually just goof-off for about ten minutes, checking out a website or texting.  

Somehow, this is often enough time for my subconscious brain to solve the problem for me.   In fact, goofing-off is my go-to approach because it's a lot more relaxed than Timed Thinking.  That's something I tend to roll out only when goofing-off has definitely failed me.

## Open Questions

- This shares a lot of the hallmarks of [Brainstorming](https://en.wikipedia.org/wiki/Brainstorming), where people throw ideas at a white-board in a room, or [Brainwriting](https://en.wikipedia.org/wiki/6-3-5_Brainwriting) where people _write_ their ideas down and share them on paper, in order to avoid the problem of certain dominant personalities taking over the process.  Timed Thinking (as I practice it) is a solo pursuit - how you would handle reporting back results, or combining the inputs of a whole team is an open question.

- Agile de-prioritises planning and strategy in favour of, well, agility. "Responding to change over following a plan" as the [Agile Manifesto](https://agilemanifesto.org) has it.  But, a lot of the complaints I hear within the teams I am in is that people in positions of responsibility _aren't doing enough deep thinking_, possibly because their calendars are chock-full of meetings.   Is there a case for making thinking time an Agile practice?  And using Timed Thinking as a way to make sure it happens?   There doesn't seem to be any Practice like Timed Thinking.   Could we improve our process by incorporating sessions like this?


