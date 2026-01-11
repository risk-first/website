---
title: AI As Judge
description: "Using the outputs of one (trained) AI to measure the performance of another"
featured: 
  class: c
  element: '<action>AI-As-Judge</action>'
tags: 
  - AI As Judge
  - AI Practices
practice:
  mitigates:
   - tag: Emergent Behaviour
     reason: "Could catch early signs of unexpected AI behaviour by flagging responses that deviate from expected norms."
     efficacy: High
   - tag: Unintended Cascading Failures
     reason: "Can act as a real-time filter to catch dangerous AI outputs before they propagate (e.g., financial trading AI making reckless decisions)."
   - tag: Social Manipulation
     reason: "Can prevent harmful misinformation, disinformation, and deepfakes from spreading by having a second user-owned AI fact-check or block misleading content."
   - tag: Loss Of Human Control
     reason: "Can enforce alignment principles by rejecting responses that optimise for harmful proxy goals."
   - tag: Unintended Cascading failures
     reason: "Introduces a level of redundancy around AI systems, allowing them to sound the alarm when operational parameters are breached."
---
    
<PracticeIntro details={frontMatter} />
    
 - AI-As-Judge is a mitigation technique where one AI model generates responses while a second AI evaluates and filters them based on predefined rules, helping to enforce content moderation, alignment with ethical guidelines, and safety constraints.   
    
 - Compare with [Human In The Loop](/tags/Human-In-The-Loop), although once trained, the AI is always vigilant.
 
 - Requires extensive training and evaluation on its own, but potentially could be a service provided to enhance controls in 
 
 
## Sources

 - [Using LLM-As-A-Judge for an automated and versatile evaluation](https://huggingface.co/learn/cookbook/llm_judge)