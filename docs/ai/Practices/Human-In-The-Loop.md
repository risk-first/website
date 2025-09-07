---
title: Human In The Loop
description:  Consistent human oversight in critical AI systems.
featured: 
  class: c
  element: '<action>Human In The Loop</action>'
tags: 
  - Human In The Loop
  - AI Practice
practice:
  mitigates:
   - tag: Loss Of Human Control
     reason: "Maintaining consistent human oversight in critical AI systems, ensuring that final decisions or interventions rest with human operators rather than the AI."
   - tag: Synthetic Intelligence With Malicious Intent
     reason: See Example of "Centaur" War Teams
   - tag: Unintended Cascading failures
     reason: "Human oversight of automated systems can help shortcut cascading failure."
---

<PracticeIntro details={frontMatter} />

- Maintaining consistent human oversight in critical AI systems, ensuring that final decisions or interventions rest with human operators rather than the AI.  
- AI may suggest diagnoses or treatments, but a certified professional reviews and confirms before enacting them.  In the above NHS Grampian example, the AI is augmenting human decision making with a third opinion, rather than replacing human judgement altogether (yet).
- Some proposals mandate that human operators confirm critical actions (e.g., missile launches), preventing AI from unilaterally making life-or-death decisions.  This might work in scenarios where response time isn't a factor.

## Types Of Human In The Loop

> - **Semi-autonomous operation**: machine performs a task and then stops and waits for approval from the human operator before continuing. This control type is often referred to as "human in the loop."
> - **Supervised autonomous operation**, where the machine, once activated, performs a task under the supervision of a human and will continue performing the task unless the human operator intervenes to halt its operation. This control type is often referred to as “human on the loop.”
> - **Fully autonomous operation**, where the machine, once activated, performs a task and the human operator does not have the ability to supervise its operation and intervene in the event of system failure. This control type is often referred to as “human out of the loop.”

From: https://s3.us-east-1.amazonaws.com/files.cnas.org/hero/documents/CNAS_Autonomous-weapons-operational-risk.pdf