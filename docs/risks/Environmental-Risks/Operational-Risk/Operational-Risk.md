---
title: Operational Risk
description: The risk of loss resulting from inadequate or failed internal processes, people and systems or from external events.

slug: /risks/Operational-Risk


featured: 
  class: c
  element: '<risk class="operational" />'
sidebar_position: 4
tweet: yes
tags: 
 - Risks
 - Legal Risk
 - Operational Risk
 - Environmental Risk
---

<RiskIntro fm={frontMatter} />

When building software, it's tempting to take a very narrow view of the dependencies of a system, but [Operational Risks](/tags/Operational-Risk) are often caused by dependencies we _don't_ consider - i.e. the **Operational Context** within which the system exists and the way that events and changes in that context can impact the smooth running of the system. 

## Worked Example

![Difficulty of providing good support](/img/generated/risks/posters/operational-risk.svg)

Firm A is operating an online service and has customers all around the world in many different time zones.  When there are issues with the service, customers can call in or use an online chat tool to get help.  However, firm A is struggling with the volume of support, the wide variety of requests and the need for staff in multiple different time zones.

They decide to [out-source](/tags/Outsourcing) their support function to a low-cost provider who promises to handle the staffing issues for them.  However, the quality of the support declines and customers are less happy.  Furthermore, because the support function is now at arms-length, firm A has broken a key feedback loop between its customers and its product development staff.  Operational Risks mount up - customer retention declines and issues go unfixed leading to reputational problems.

## Example Threats / Intersection With Other Types of Risk

Any of the risks we've covered so far can knock-on to be an [Operational Risk](/tags/Operational-Risk) - that's one of the main reasons we've left this until the end.  Below is a non-exhaustive look at some of the ways these intersect. 

In reality, there is a long laundry-list of everything that can go wrong due to operating in "The Real World".  Effective [Operational Risk Management](/tags/Operational-Risk) means we have to consider that these dependencies will fail in any number of unusual ways, and we can't be ready for all of them.  Preparing for this comes under the umbrella of [Operations Management](Operations-Mmanagement).

### 1. Process Risk

Process Risk looks at the risks of having processes at all.  But processes are a key part of running a successful operation, so Process Risk "rolls up" into Operational Risk.

**Threat:** Insufficient controls which means you don't notice when some transactions are failing, leaving you out-of-pocket.

**Threat:** Data loss because of bugs introduced during an untested release.

**Threat:** Regulatory change (itself a [Legal Risk](/tags/Legal-Risk), which means you have to adapt your business model and change your processes.

**See:** [Process Risk](/tags/Process-Risk) 

### 2. Agency Risk

An operation is sure to involve decision making by other parties, staff or software systems.  

**Threat:** Key staff leaving

**Threat:** Suppliers changing their terms-of-service.

**Threat:** Reputational damage caused when staff are rude to the customers.
   
**See:**: [Agency Risk](/tags/Agency-Risk) 

### 3. Reliability Risk
 
Your operation is certain to be built on top of key dependencies, many of which you take for granted in terms of their reliability.

**Threat:** A data-centre going off-line, causing your customers to lose access.

**Threat:** A power cut causing backups to fail.

**Threat:** Freak weather conditions affecting ability of staff to get to work, interrupting the development and support teams. 

**See:** [Reliability Risk](/tags/Reliability-Risk)
   
### 4. Security Risk

Your operation has to secure itself against malicious actors that might try to disable it or exploit it in some way. 
 
**Threat:** Hackers exploit weaknesses in a piece of 3rd party software, bringing your service down.
 

:::tip Anecdote Corner

In 2022, The Bank of England fined TSB Bank £48m for operational risk management failures, [citing poor governance and failure to manage outsourcing risks](https://www.bankofengland.co.uk/news/2022/december/tsb-fined-for-operational-resilience-failings).  This was as a result of a 2018 effort by TSB to migrate customer accounts onto a new IT platform.  

All of TSB's branches and a great number of its 5m customers were affected and as well as the fine, TSB had to pay out £32m in compensation to the customers.  

In the UK, financial services are regulated by two bodies: the Financial Conduct Authority (FCA) and the Prudential Regulation Authority (PRA), who investigated the outage.  They both issued fines to TSB, citing a lack of planning and inadequate operational risk management.

:::


 