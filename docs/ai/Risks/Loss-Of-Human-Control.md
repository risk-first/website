---
title: Loss of Human Control
description: AI systems operating autonomously with minimal human oversight can lead to scenarios where we cannot override or re-align them with human values.
featured:
  class: c
  element: '<risk class="process">Loss of Human Control over AI</risk>'
tags:
 - AI-Risk
 - Loss-of-Human-Control
sidebar_position: 3
tweet: yes
---

AI systems that act without robust human oversight can evolve in ways that defy our attempts at control or correction. In the short term, engineers have to wrestle with new approaches to defining acceptable behaviour (see Amodei et al):  even just cleaning an environment is a hard goal to pin down (clean doesn't mean devoid of any furniture, for example).  How do you allow the AI to learn and improve without enabling "Reward Hacking", where it finds ways to game the reward function (a la Goodhart's law).  

The problem is that human oversight is _expensive_: we want to have a minimum level of oversight without worrying that things will go wrong. 

## Sources

- **Superintelligence** [Nick Bostrom, 2014](https://doi.org/10.1093/acprof:oso/9780199678112.001.0001): Explores potential pathways by which advanced AI might become misaligned with human objectives, as well as strategies to maintain control, such as the "Paper-clip Maximiser".

- **Concrete Problems in AI Safety** [Amodei et al., 2016](https://arxiv.org/abs/1606.06565): Discusses technical challenges of ensuring AI remains controllable, including reward hacking, unintended behaviours, and safe exploration.

- **Asilomar AI Principles** [Future of Life Institute, 2017](https://futureoflife.org/ai-principles/): Guidelines emphasising the need for human values and safety considerations to guide AI development.  Ensuring that humans remain "in control" is a key principle (but is hard to pin down).

## How This Is Already Happening

 - **[Stock Market ‘Flash Crashes’](https://en.wikipedia.org/wiki/Flash_crash):** Automated high-frequency trading bots have occasionally triggered large market swings with minimal human intervention, underscoring our reliance on—and vulnerability to—autonomous algorithms.

 - **[Boeing 737 MAX MCAS Issue (2018–2019)](https://mashable.com/article/boeing-737-max-aggressive-risky-ai):** Although not purely an AI system, automated flight software repeatedly overrode pilot inputs, contributing to two tragic crashes—illustrating how over-reliance on opaque automation can lead to disastrous outcomes.  This was caused by systemic failures at Boeing, driven by a cost-cutting culture and short-term focus on shareholder returns.
 
  - **Healthcare Diagnostic Tools:** Systems that recommend or even autonomously administer treatments based on patient data can outpace human doctors’ ability to review every decision, making interventions more difficult if the AI fails.  [NHS Grampian: breast cancer detection.](https://ukstories.microsoft.com/features/nhs-grampian-is-working-with-kheiron-medical-technologies-university-of-aberdeen-and-microsoft-to-support-breast-cancer-detection/)

## Mitigations

### Kill-Switch Mechanisms

- **Description:** Fail-safe systems capable of shutting down or isolating AI processes if they exhibit dangerous behaviours.
- **Examples:**  
  - **Google DeepMind’s ‘Big Red Button’ concept** (2016), proposed as a method to interrupt a reinforcement learning AI without it learning to resist interruption.  
  - **Hardware Interrupts in Robotics:** Physical or software-based emergency stops that immediately terminate AI operation.  
- **Efficacy:** High – An explicit interruption capability can avert catastrophic errors or runaway behaviours, but it's more likely that they will be employed once the error has started, in order to prevent further harm.
- **Ease of Implementation:** Medium – Requires robust design and consistent testing to avoid workarounds by advanced AI.

### Human-in-the-Loop Controls

- Maintaining consistent human oversight in critical AI systems, ensuring that final decisions or interventions rest with human operators rather than the AI.  
- AI may suggest diagnoses or treatments, but a certified professional reviews and confirms before enacting them.  In the above NHS Grampian example, the AI is augmenting human decision making with a third opinion, rather than replacing human judgement altogether (yet).
- Some proposals mandate that human operators confirm critical actions (e.g., missile launches), preventing AI from unilaterally making life-or-death decisions.  This might work in scenarios where response time isn't a factor.

- **Efficacy:** Medium – Reduces risk by limiting autonomy on high-stakes tasks; however, humans may become complacent or fail to intervene effectively if over-trusting AI.  
- **Ease of Implementation:** Moderate – Policy, regulatory standards, and user training are needed to embed human oversight effectively.

### Replication Control

- Replication control becomes relevant when an AI system can duplicate itself—or be duplicated—beyond the reach of any central authority (analogous to a computer virus—though with potentially far greater autonomy and adaptability).  
- An organization/person builds a very capable AI with some misaligned objectives. If they distribute its model or code openly, it effectively becomes “in the wild.”
- Could controls be put in place to prevent this from happening? TODO: figure this out.

- **Efficacy:** Medium – Limits the spread of potentially rogue AI copies.  
- **Ease of Implementation:** Low – In open-source communities or decentralized systems, controlling replication requires broad consensus and technical enforcement measures.
