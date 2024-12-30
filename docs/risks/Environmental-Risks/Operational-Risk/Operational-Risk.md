---
title: Operational Risk
description: Risks of losses or reputational damage caused by failing processes or real-world events.

slug: /risks/Operational-Risk


featured: 
  class: c
  element: '<risk class="operational" />'
sidebar_position: 1
tweet: yes
tags: 
 - Risks
 - Legal Risk
 - Operational Risk
 - Environmental Risk
---

<RiskIntro fm={frontMatter} />

> "The risk of loss resulting from inadequate or failed internal processes, people and systems or from external events." - [Operational Risk, _Wikipedia_](https://en.wikipedia.org/wiki/Operational_risk#Definition)



## Operational Risks

When building software, it's tempting to take a very narrow view of the dependencies of a system, but [Operational Risks](/tags/Operational-Risk) are often caused by dependencies we _don't_ consider - i.e. the **Operational Context** within which the system is operating.<!-- tweet-end -->  Here are some examples:  

 - **[Staff Risks](/tags/Staff-Risk)**: 
   - Freak weather conditions affecting ability of staff to get to work, interrupting the development and support teams. 
   - Reputational damage caused when staff are rude to the customers.
 
 - **[Reliability Risks](/tags/Reliability-Risk)**:
   - A data-centre going off-line, causing your customers to lose access.
   - A power cut causing backups to fail.
   - Not having enough desks for everyone to sit at.
   
 - **[Process Risks](/tags/Process-Risk)**:
   - Regulatory change, which means you have to adapt your business model.
   - Insufficient controls which means you don't notice when some transactions are failing, leaving you out-of-pocket.
   - Data loss because of bugs introduced during an untested release.
 
 - **[Software Dependency Risk](/tags/Software-Dependency-Risk)**:
   - Hackers exploit weaknesses in a piece of 3rd party software, bringing your service down.
 
 - **[Agency Risk](/tags/Agency-Risk)**:
   - Workers going on strike.
   - Employees trying to steal from the company (bad actors).
   - Other crime, such as hackers stealing data.

This is a long laundry-list of everything that can go wrong due to operating in "The Real World".  Although we've spent a lot of time looking at the varieties of [Dependency Risk](/tags/Dependency-Risk) on a software project, with [Operational Risk](/tags/Operational-Risk) we have to consider that these dependencies will fail in any number of unusual ways, and we can't be ready for all of them.  Preparing for this comes under the umbrella of [Operations Management](#operations-management).

 