---
title: Kill Switch
description:  Fail-safe systems capable of shutting down or isolating AI processes if they exhibit dangerous behaviours.
featured: 
  class: c
  element: '<action>Kill Switch Mechanism</action>'
tags: 
  - Kill Switch
  - Practice
practice:
  mitigates:
   - tag: Loss Of Human Control
     reason: "An explicit interruption capability can avert catastrophic errors or runaway behaviours"
---

<PracticeIntro details={frontMatter} />

### Kill-Switch Mechanisms

- **Examples:**  
  - **Google DeepMind’s ‘Big Red Button’ concept** (2016), proposed as a method to interrupt a reinforcement learning AI without it learning to resist interruption.  
  
  - **Hardware Interrupts in Robotics:** Physical or software-based emergency stops that immediately terminate AI operation.  
  
- **Efficacy:** High – An explicit interruption capability can avert catastrophic errors or runaway behaviours, but it's more likely that they will be employed once the error has started, in order to prevent further harm.
- **Ease of Implementation:** Medium – Requires robust design and consistent testing to avoid workarounds by advanced AI.

