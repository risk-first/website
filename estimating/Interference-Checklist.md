---
title: Interference Checklist
description: Part of the 'Estimating' Risk-First Track, example Risk Checklist
url: https://riskfirst.org/estimating/Interference-Checklist

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/checklist.svg">Interference Checklist</image-artifact>'
categories:
  - Estimating
order: 9
tweet: yes
---

# Interference Checklist

Here is an example "Interference Checklist", which you can use to estimate the risk on your stories / tasks.  For an explanation of how this works, check out the previous article [On Story Points](On-Story-Points.md).

This is just meant to be used as a starting point - feel free to adapt this to the specifics of your own projects and environments.

## Some Simple Instructions

1.  Next time you are asked to estimate a piece of work, run through the checklist.  
2.  Assign a "point value" of your own to any important items.  You can use numbers, S-M-L, whatever.
3.  Total up the points.   For a _low score_ you should feel fairly happy about hitting a given end-date for a piece of work.  For a high score, you should have low confidence in your estimate.
4.  Consider breaking up risky work into smaller units to isolate the risks individually.   
5.  Consider removing unnecessary risk from the project. 
6.  After, or during a piece of work, add any new risks you discover to the checklist to remind you about them next time.

Download this in [PDF](https://riskfirst.org/estimating/Interference-Checklist.pdf) or [Numbers](https://riskfirst.org/estimating/Interference-Checklist.numbers) format.

| **Area**                                     | **Concern**                                                                       | **Notes** | **Point Value** |
| -------------------------------------------- | --------------------------------------------------------------------------------- | --------- | --------------- |
| **[Communication Risks](../risks/Communication-Risk.md)**    |                                                                                   |           |                 |
| **\- [Channel Risk](../risks/Communication-Risk.md#channel-risk)**  | Requires input from other team members                                            |           |                 |
|                                                            | Requires input from other teams                                                   |           |                 |
|                                                            | Requires input from other departments                                             |           |                 |
|                                                            | Input required, not clear from who, but further up the hierarchy                  |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Protocol Risk](../risks/Communication-Risk.md#protocol-risk)**  | Requires agreement on a protocol / data format with another team                  |           |                 |
|                                              | Requires regular meetings                                                         |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Learning-Curve Risk](../risks/Communication-Risk.md#learning-curve-risk)** | Requires learning an unfamiliar technology / standard                             |           |                 |
|                                              | Untrained staff involved in the delivery                                          |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Invisibility Risk](../risks/Communication-Risk.md#invisibility-risk)** | Specifications not available                                                      |           |                 |
|                                              | Reverse-Engineering Required                                                      |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Internal-Model Risk](../risks/Communication-Risk.md#internal-model-risk)**                   | Involves reconciliation with another data source                                  |           |                 |
|                                              | Involves real-time data synchronisation                                           |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Map-And-Territory Risk](../risks/Map-And-Territory-Risk.md)**  | Use of metrics                                                                    |           |                 |
|                                              | Use of bonuses                                                                    |           |                 |
|                                              | Competing targets / KPIs                                                          |           |                 |
|                                              |                                                                                   |           |                 |
| **[Coordination Risks](../risks/Coordination-Risk.md)**  | Task will require an approval from someone outside the team                       |           |                 |
|                                              | Task requires sign-off from a committee/board                                     |           |                 |
|                                              | Requires other tasks to be completed                                              |           |                 |
|                                              | Work must be coordinated amongst multiple stakeholders                            |           |                 |
|                                              | Approvals are required from multiple stakeholders                                 |           |                 |
|                                              | Different timezones involved                                                      |           |                 |
|                                              | Data must be synchronised across different machines                               |           |                 |
|                                              | Developers will be required to work together                                      |           |                 |
|                                              | Teams are required to work together                                               |           |                 |
|                                              |                                                                                   |           |                 |
| **[Complexity Risks](../risks/Complexity-Risk.md)** |                                                                                   |           |                 |
| **\- [Codebase Risk](../risks/Complexity-Risk.md#codebase-risk)** | Involves refactoring                                                              |           |                 |
|                                              | Introduces new languages / DSLs                                                   |           |                 |
|                                              | Requires adding significant code                                                  |           |                 |
|                                              | Can’t be easily unit-tested                                                       |           |                 |
|                                              | Requires manual testing                                                           |           |                 |
|                                              | Requires deleting significant code                                                |           |                 |
|                                              | Creates new repos                                                                 |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Dead-End Risk](../risks/Complexity-Risk.md#dead-end-risk)** | Involves experimentation about best approach                                      |           |                 |
|                                              | No prior work exists in this area                                                 |           |                 |
|                                              | Significant algorithmic innovation is required                                    |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Boundary Risk](../risks/Boundary-Risk.md)**   | Ecosystem choice                                                                  |           |                 |
|                                              | Platform choice                                                                   |           |                 |
|                                              | App stores                                                                        |           |                 |
|                                              | Language choice                                                                   |           |                 |
|                                              | Market choice                                                                     |           |                 |
|                                              |                                                                                   |           |                 |
| **[Feature Risks](../risks/Feature-Risk.md)**  |                                                                                   |           |                 |
| **\- [Conceptual Integrity Risk](../risks/Feature-Risk.md#conceptual-integrity-risk)** | Requires new interface to be added                                                |           |                 |
|                                              | Requires refactoring of existing interfaces                                       |           |                 |
|                                              | Deprecates existing functionality                                                 |           |                 |
|                                              | Requested by multiple stakeholders                                                |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Regression Risk](../risks/Feature-Risk.md#regression-risk)** | Changes existing functionality                                                    |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Feature-Access Risk](../risks/Feature-Risk.md#feature-access-risk)**| Interface Experimentation required                                                |           |                 |
|                                              | Varied user population                                                            |           |                 |
|                                              | Accessibility requirements                                                        |           |                 |
|                                              | Localisation Requirements                                                         |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Implementation Risk](../risks/Feature-Risk.md#implementation-risk)** | Developer unfamiliar with the requirements / system                               |           |                 |
|                                              | Known corner-cases                                                                |           |                 |
|                                              | Home-grown protocols vs. standards                                                |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Feature-Fit](../risks/Feature-Risk.md#feature-fit-risk)**| Success criteria hard to define                                                   |           |                 |
|                                              | Difficult-to-access user base                                                     |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Market Risk](../risks/Feature-Risk.md#market-risk)**  | Rapidly changing market                                                           |           |                 |
|                                              | Market needs are not clear                                                        |           |                 |
|                                              | Market itself is uncertain                                                        |           |                 |
|                                              | Product needs to find it’s market                                                 |           |                 |
|                                              |                                                                                   |           |                 |
| **[Agency Risks](../risks/Agency-Risk.md)** /| 3rd Party involved                                                                |           |                 |
| **[Trust Risk](../risks/Communication-Risk.md#trust--belief-risk)** / | Competitor involvement                                                            |           |                 |
| **[Security Risks](../risks/Agency-Risk.md#security)**| General public involved                                                           |           |                 |
|                                              | Available on the open internet                                                    |           |                 |
|                                              | Requires authentication / authorisation schemes                                   |           |                 |
|                                              | Requires cryptography                                                             |           |                 |
|                                              | Involves crowdsourcing                                                            |           |                 |
|                                              | Involves untrusted data-sources                                                   |           |                 |
|                                              | Involves multiple processes / threads cooperating                                 |           |                 |
|                                              | Involves payments                                                                 |           |                 |
|                                              | Involves security infrastructure: firewalls, proxies, VPN etc.                    |           |                 |
|                                              |                                                                                   |           |                 |
| **[Dependency Risks](../risks/Dependency-Risk.md)** |                                                                                   |           |                 |
| **\- [Software Dependency Risk](../risks/Software-Dependency-Risk.md)**| Requires the introduction of a new dependency                                     |           |                 |
|                                              | … which is immature                                                               |           |                 |
|                                              | … which must be chosen from competing alternatives                                |           |                 |
|                                              | … which is Open-Source                                                            |           |                 |
|                                              | … which is In-House                                                               |           |                 |
|                                              | … which is Commercial                                                             |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Scarcity Risk](../risks/Scarcity-Risk.md)**                         | Requires booking time with a 3rd party                                            |           |                 |
|                                              | Requires specific licenses / approvals                                            |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Funding Risk](../risks/Scarcity-Risk.md#funding-risk)**  | Requires payment by a customer for completed work                                 |           |                 |
|                                              | Requires agreement on pricing / budget                                            |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Staff Risk](../risks/Scarcity-Risk.md#staff-risk)**  | Requires involvement from other members of staff                                  |           |                 |
|                                              | Requires hiring-in new specialist skills                                          |           |                 |
|                                              | Has dependency on key-persons                                                     |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Red-Queen Risk](../risks/Scarcity-Risk.md#red-queen-risk)** | Dependency on rapidly changing/unpublished standards                              |           |                 |
|                                              | Dependency on rapidly evolving 3rd party code                                     |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk)** | Task is repetitive                                                                |           |                 |
|                                              | Task takes a long time                                                            |           |                 |
|                                              | Task is unusually tedious                                                         |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Reliability Risk](../risks/Dependency-Risk.md#reliability-risk)** | Has strict reliability / response time requirements                               |           |                 |
|                                              | Has unusual hosting requirements                                                  |           |                 |
|                                              | Unfamiliar hardware involved                                                      |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Process Risk](../risks/Process-Risk.md)**       | Unfamiliar process for releasing                                                  |           |                 |
|                                              | New CI Steps Needed                                                               |           |                 |
|                                              | Unfamiliar approvals required                                                     |           |                 |
|                                              |                                                                                   |           |                 |
| **\- [Deadline Risk](../risks/Deadline-Risk.md)**     | Has components that must be completed during certain time windows (e.g. weekends) |           |                 |
|                                              | Has components that must be completed before drop-dead dates                      |           |                 |
|                                              |                                                                                   |           |                 |
| **[Operational Risk](../risks/Operational-Risk.md)**                         | Requires new or extra production support                                          |           |                 |
|                                              | Requires special roll-out                                                         |           |                 |
|                                              | Legal Requirements                                                                |           |                 |
|                                              | Regulatory Requirements                                                           |           |                 |
|                                              |                                                                                   |           |                 |