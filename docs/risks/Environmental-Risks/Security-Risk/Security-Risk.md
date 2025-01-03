---
title: Security Risk
description: Risks due to hostile agents and events from inside or outside of the system.

slug: /risks/Security-Risk


featured: 
  class: c
  element: '<risk class="security" />'
sidebar_position: 3
tweet: yes
tags: 
 - Risks
 - Security Risk
 - Environmental Risk
---

<RiskIntro fm={frontMatter} />

Security Risk is a subset of [Operational Risk](/tags/Security-Risk) looking at dangers to the operation due to hostile agents (bad actors) or events occurring.  

As we already discussed in [Agency Risk](/tags/Agency-Risk), _within_ a system we may wish to prevent our agents from causing accidental (or deliberate) harm, but we also have [Agency Risk](/tags/Agency-Risk) from unwanted agents _outside_ the system.  So security is also about ensuring that the environment we work in is _safe_ for the good actors to operate in while keeping out the bad actors.

Interestingly, security is handled in very similar ways in all kinds of systems, whether biological, human or institutional: 

- **Walls**: defences _around_ the system, to protect its parts from the external environment.  
- **Doors**: ways to get _in_ and _out_ of the system, possibly with _locks_.
- **Guards**: to make sure only the right things go in and out.  (i.e. to try and keep out _bad actors_).
- **Police**: to defend from _within_ the system against internal [Agency Risk](/tags/Agency-Risk).
- **Subterfuge**: hiding, camouflage, disguises, pretending to be something else.

These work at various levels in **our own bodies**:  our _cells_ have _cell walls_ around them, and _cell membranes_ that act as the guards to allow things in and out.  Our _bodies_ have _skin_ to keep the world out, and we have _mouths_, _eyes_, _pores_ and so on to allow things in and out.  We have an _immune system_ to act as the police.

**Our societies** work in similar ways: in medieval times, a city would have walls, guards and gates to keep out intruders.  Nowadays, we have customs control, borders and passports.

We're waking up to the realisation that our software systems need to work the same way:  we have [Firewalls](https://en.wikipedia.org/wiki/Firewall_(computing)) and we lock down _ports_ on servers to ensure there are the minimum number of _doors_ to guard,  we _police_ the servers with monitoring tools, and we _guard_ access using passwords and other identification approaches. 

## Worked Example

For a firm wanting to strengthen its security posture, there is almost an unlimited variety of third party tools and services they can turn to to help them.  The choice is bewildering and it's often hard to separate out the genuinely useful from the distractions.  

![Security as a mitigation for Agency Risk](/img/generated/risks/posters/security-risk.svg)

In the diagram above, a firm decides to address security risk with training, multi-factor authentication schemes, endpoint detection and response (EDR) and encrypting it's data.  In many scenarios, these are all good practices if implemented correctly.  However, [Agency Risk](/tags/Agency-Risk) and [Security Risk](Agency-Risk#security) thrive on complexity:  the more complex the systems we create, the more opportunities there are for bad actors to insert themselves and extract their own value.  The dilemma is, _increasing security_ also means increasing [Complexity Risk](/tags/Complexity-Risk), because secure systems are necessarily more complex than insecure ones.  

:::tip Anecdote Corner

CrowdStrike's Falcon tool is an Endpoint Detection and Response (EDR) tool designed to detect attacks aimed at compromising staff's personal computers, such as [ransomware](https://en.wikipedia.org/wiki/Ransomware), [Advanced Persistent Threats](https://en.wikipedia.org/wiki/Advanced_persistent_threat) and [Zero-Day Exploits](https://en.wikipedia.org/wiki/Zero-day_vulnerability).  As more and more staff moved outside of corporate firewalls during the COVID-19 pandemic, tools like this were seen as more and more valuable.

However, what clients of CrowdStrike were unware of was the company's extremely lax approach to quality assurance of its product - they pushed  code out to computers around the world without any rigorous testing, which was a disaster waiting to happen.  In July 2024 a CrowdStrike release caused widespread sytems crashes and a global IT outage as Windows PC's rebooted over and over again, unable to start properly.  

It is estimated that [Fortune 500 companies suffered $5.4bn of losses](https://nypost.com/2024/07/24/business/microsoft-to-take-hit-as-fortune-500-suffers-5-4b-in-crowdstrike-losses-study) due to the outage.

:::

## Regulation and Compliance 



## Example Threats

**See:**  [Mitre Att&ck](https://attack.mitre.org) is a database of Security Risk threats, broken down into:

 - Tactics: the reasons why an adversary is performing an action.
 - Techniques: how the adversary will attack.
 - Defences: things you can do to defend against adversaries.
 

##
