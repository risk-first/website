---
title: A Simple Scenario
description: What is the one thing every project needs to control to be successful?

tags:
  - Take Action
  - Internal Model
  - Goal
  - Attendant Risk
  - Hidden Risk
  - Meeting Reality
  - Risk
  - Upside Risk

definitions:
  - name: Attendant Risk
    description: A Risk you expect to face as the result of Taking Action.
    anchor: attendant-risks
    own_term: true
    part_of: Risk
  - name: Hidden Risk
    description: Risks you aren't aware of when you consider Taking Action. i.e. an unknown unknown.
    anchor: hidden-risks
    own_term: true
    part_of: Risk
  - name: Goal
    description: A picture of the future that an individual or team carries within their Internal Model; An imagined destination on the Risk Landscape. A specific Upside Risk we'd like to nurture and realize.
    anchor: goal-in-mind
featured:
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/redesign/risks/goal.svg">A Simple Scenario</image-artifact>'
sidebar_position: 1
redirect_from:
  - /A-Simple-Scenario
tweet: yes
---

# A Simple Scenario

We manage risk all the time without realising it. Every decision—from what to have for lunch to whether to change jobs—involves weighing up what might go wrong. Software development works the same way: we're used to thinking of design as balancing trade-offs, but those trade-offs are fundamentally about risk, even if we don't use that word.

This section introduces some terms for thinking about risk. Before diving into software, let's consider a simpler example: organising a dinner party. It sounds harmless enough, but there's plenty that can go wrong—which makes it perfect for exploring how we think about risk.

## Goal In Mind

We want our dinner party to succeed. That means we have a **[Goal](/tags/Goal)** in mind: friends leaving happy after good food and conversation. Achieving that goal requires preparation.

This goal exists only _in our heads_—it's part of our **[Internal Model](/tags/Internal-Model)** of reality. We all carry mental models that help us predict what will happen, and we act based on those predictions. These models are incomplete (the world is complex), but they're useful.

:::info What Does Internal Model Mean?
Risk-First borrows the term "Internal Model" from the finance industry, where it was used in the [2004 Basel II capital requirements rules](https://en.wikipedia.org/wiki/Basel_II) (i.e. rules to say how much money (or capital) banks needed to keep handy for any crises that might arise). In Basel II there was an "Internal Model Method", where a bank could create _its own_ model for how much capital it needed to store. The catch was, the bank would have to demonstrate via simulations that this would have been adequate for any crisis occurring in the previous ten years.

Sadly, the financial crisis of 2007 demonstrated very quickly that just looking at the last ten years probably wasn't enough.

Interestingly, the term was previously used in [Cybernetics Theory](https://en.wikipedia.org/wiki/Cybernetics) which looked at concepts of feedback and control in dynamically evolving systems, which is exactly what we're looking at here too.
:::

Without preparation, things could go wrong. Perhaps there's nothing in the house to eat. Perhaps the dish takes longer than expected and guests leave hungry. Perhaps you're missing ingredients, or you're unsure how to cook what you've planned.

## Attendant Risks

These _nagging doubts_ are what we call [Attendant Risks](/tags/Attendant-Risk): the risks that come to mind when you think through what might happen.

![Goal, with the risks you know about](/img/generated/introduction/goal_in_mind.svg)

We can choose to address these risks: shop early, prep ingredients ahead of time, or do a practice run. Or we can wing it and hope for the best.

How much effort we put into managing [Attendant Risks](/tags/Attendant-Risk) depends on how serious we think they are. If there's a 24-hour shop nearby, getting ingredients early feels less urgent (though the shop _could still be closed_).

Other examples: when you exchange currency before travelling, you know exchange rates might shift against you. If you're holidaying in Japan, you're aware earthquakes are possible. These are attendant risks—you know they exist, even if you can't predict them precisely.

## Hidden Risks

[Attendant Risks](/tags/Attendant-Risk) are risks you're aware of. You may not be able to _quantify_ them exactly, but you know they exist. **[Hidden Risks](/tags/Hidden-Risk)** are different: these are risks you _don't_ know about. If you're poaching eggs for dinner, perhaps you didn't know that fresh eggs poach best. Donald Rumsfeld famously called these "unknown unknowns":

> "Reports that say that something hasn't happened are always interesting to me, because as we know, there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns—the ones we don't know we don't know. And if one looks throughout the history of our country and other free countries, it is the latter category that tend to be the difficult ones." - [Donald Rumsfeld, _Wikipedia_](https://en.wikipedia.org/wiki/There_are_known_knowns)

![Goal, the risks you know about and the ones you don't](/img/generated/introduction/hidden_risks.svg)

Different people know about different risks. What's an [Attendant Risk](/tags/Attendant-Risk) for one person might be a [Hidden Risk](/tags/Hidden-Risk) for another. Which risks we're aware of depends on our **knowledge** and **experience**—and that varies from person to person (or team to team).

Hidden risks become attendant all the time. For instance, the health risks from microplastics were largely unknown a decade ago; now they're widely discussed. Your dinner party might reveal that a guest is vegetarian—something you didn't think to check.

## Taking Action and Meeting Reality

As the dinner party gets closer, we make our preparations and the inadequacies of the [Internal Model](/tags/Internal-Model) become apparent. We learn what we didn't know and the [Hidden Risks](/tags/Hidden-Risk) reveal themselves. Other things we were worried about don't materialise. Things we thought would be minor risks turn out to be greater.

![How Taking Action affects Reality, and also changes your Internal Model](/img/generated/introduction/model_vs_reality.svg)

Our model is forced to [Meet Reality](/tags/Meeting-Reality), and the model changes, forcing us to deal with these risks, as shown in the diagram above.

In Risk-First, whenever we try to _do something_ about a risk, it is called [Taking Action](/tags/Take-Action). [Taking Action](/tags/Take-Action) _changes_ reality, and with it your [Internal Model](/tags/Internal-Model) of the risks you're facing. That's because it's only by interacting with the world that we add knowledge to our [Internal Model](/tags/Internal-Model) about what works and what doesn't. Even something as passive as _checking the shop opening times_ is an action, and it improves on our [Internal Model](/tags/Internal-Model) of the world.

If we had a good [Internal Model](/tags/Internal-Model) and [took the right actions](/tags/Take-Action), we should see positive outcomes. If we failed to manage the risks, or took inappropriate actions, we'll probably see negative outcomes.

## Recap

So what happened here?

1. We started with a **goal** and thought about what might get in the way.
2. We used our **internal model** to identify which **risks** needed attention.
3. We **took action** to address those risks—which sometimes created new ones.
4. As the event approached, our internal model met reality. Some worries didn't materialise; others turned out to be bigger than expected. **Hidden risks** surfaced. We adjusted and repeated.

This cycle—goal, risks, action, feedback—applies to software projects just as much as dinner parties.

<BoxOut title="New Terms" link="/thinking/Glossary" linkText="View Glossary">
Risk-First uses existing terminology where possible, but introduces a few new terms. This box summarises what we've covered. Terms marked as Risk-First originals are flagged.
<TermList details={frontMatter} /> 
</BoxOut>

Before we apply these ideas to software development, let's look at the visual language we'll use to show risks and trade-offs: [Risk-First Diagrams](Risk-First-Diagrams).
