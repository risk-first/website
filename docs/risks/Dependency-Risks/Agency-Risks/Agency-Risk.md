---
title: Agency Risk
description: Risks due to the fact that things you depend on have agency, and they have their own goals to pursue.

slug: /risks/Agency-Risk
tags:
 - Risks
 - Goal
 - Agency Risk
 - Agent
 - Security Risk
definitions: 
 - name: Agent
   description: blah
featured: 
  class: c
  element: '<risk class="agency" />'
sidebar_position: 12
tweet: yes
part_of: Dependency Risk
---

<RiskIntro fm={frontMatter} />

Coordinating a team is difficult enough when everyone on the team has a single [Goal](/tags/Goal).  But other people and organisations you might be involved with have their own goals too.  Sometimes their goals harmlessly co-exist with yours, other times they don't.   Even the software systems we employ can often have goals that run counter to our own.


In this section, we are going to take a closer look at how [Agency Risk](/tags/Agency-Risk) arises, in particular we will:

  - apply the concept of [Agency Risk](/tags/Agency-Risk) in software development
  - define a model for understanding [Agency Risk](/tags/Agency-Risk)
  - look at some common issues in software development, and analyse how they have their roots in [Agency Risk](/tags/Agency-Risk)
  - look at how [Agency Risk](/tags/Agency-Risk) applies to not just to people, but _whole teams_ and _software agents_
  - look at the various ways to mitigate [Agency Risk](/tags/Agency-Risk), irrespective of what type of agent we are looking at.  (We'll specifically consider _software agents_, _humans_ and _cells in the body_.)

## The Principle-Agent Dilemma

To introduce [Agency Risk](/tags/Agency-Risk), let's first look at the **Principal-Agent Dilemma**.  This term comes from finance and refers to the situation where you (the "principal") entrust your money to someone (the "agent") in order to invest it, but they don't necessarily have your best interests at heart.  They may instead elect to invest the money in ways that help them, or outright steal it.  

> "This dilemma exists in circumstances where agents are motivated to act in their own best interests, which are contrary to those of their principals, and is an example of moral hazard." - [Principal-Agent Problem, _Wikipedia_](https://en.wikipedia.org/wiki/Principal–agent_problem)

The less visibility you have of the agent's activities, the bigger the risk.  However, the _whole point_ of giving the money to the agent was that you would have to spend less time and effort managing it, hence the dilemma.  

## Worked Example

A the core of the Principal-Agent Problem is the issue that we _want_ our agents to do work for us so we don't have the responsibility of doing it ourselves.  However, we pick up the second-order responsibility of managing the agents instead.  

![Agency Risk](/img/generated/risks/posters/agency-risk.svg)

The example above highlights an automatic trading algorithm.  There is significant risk that this one day might stop working or behave erratically - causing huge losses in the process.  This risk can be reduced by [Monitoring](/tags/Monitoring).  However, monitoring takes time and adds complexity to an operation, and maybe even kicks the can down the road as you'll need to figure out whether the monitoring is being done properly! 

## Example Threats

**Agency risk** arises when there is a conflict of interest between agents (e.g., managers, representatives, or intermediaries) and principals (e.g., shareholders, clients, or owners). Agents may prioritise their own interests over the principals', leading to potential risks. Here are some **examples of threats related to agency risk**:

### 1. Goal Misalignment

**Threat**: A contractor's work is sub-par because they prioritise their firm's interests over the interests of their client.

**Threat**: A developer chooses a software dependency because they want exposure to it, rather than for its fit with the problem.

**Threat**: A project manager rushes software out with bugs in to hit a performance target, irrespective of the reputational damage that will ensue.
   
### 2. Misuse of Resources

**Threat**: Employees use company assets or time for personal projects.

### 3. Lack of Transparency

**Threat**: A software company withholds critical information about security vulnerabilities to avoid it damaging sales.

### 4. Moral Hazard

**Threat**: An executive approves a risk merger without adequate due diligence to boost their reputation or ego.

### 5. Conflicts of Interest

**Threat**: a staff member recommends a contracting firm because they'll receive some kind of benefit if it is used.


:::tip Anecdote Corner

In 2014, Uber (the taxi service) were in the spotlight due to [the God View Scandal](https://en.wikipedia.org/wiki/Controversies_surrounding_Uber#God_view_and_privacy_concerns).   "God View" was a tool used to track customer movements in real-time and Uber had granted employees the power to use this tool without oversight.  Inevitably, this was misused by employees to spy on ex-partners and celebrities: out of curiosity and for darker reasons.   

This led to a PR crisis and a change in data privacy policies for Uber and highlighted the danger of employee access to sensitive data in general.  Similar scandals occurred at [Snapchat](https://www.vice.com/en/article/snapchat-employees-abused-data-access-spy-on-users-snaplion/) and with [Apple Siri](https://www.forbes.com/sites/jeanbaptiste/2019/07/30/confirmed-apple-caught-in-siri-privacy-scandal-let-contractors-listen-to-private-voice-recordings/)  too.   

:::