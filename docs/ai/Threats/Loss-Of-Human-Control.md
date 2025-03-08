---
title: Loss Of Human Control
description: AI systems operating autonomously with minimal human oversight can lead to scenarios where we cannot override or re-align them with human values.
featured:
  class: c
  element: | 
    '<risk class="process" /><description style="text-align: center">Loss of 
    Human Control</description>'
tags:
 - AI Threats
 - Loss Of Human Control
sidebar_position: 3
tweet: yes
part_of: AI Threats
---

<AIThreatIntro fm={frontMatter} />

## Risk Score: Low

AI systems may operate autonomously in ways that humans cannot predict or control. If AI entities develop objectives that misalign with human values, we may be unable to stop or correct their actions before harm ensues.

## Description

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
