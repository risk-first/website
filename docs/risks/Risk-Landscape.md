---
title: The Risk Landscape
description: A way to think about the risks you face on a software project.

tags:
  - Risk Landscape

definitions:
  - name: Risk Landscape
    description: A hypothetical landscape on which risks can be placed. Taking Action means making a move on the Risk Landscape to reposition a project so that it has a different profile of Attendant Risks.
    own_term: true

featured:
  class: c
  element: '<risk href="/public/templates/risk-first/redesign/risks/attendant_risk_v2.svg"><code>Attendant</code><title>Risk Landscape</title></risk>'
sidebar_position: 2
tweet: yes
---

# The Risk Landscape

What does the "Risk Landscape" look like on a software project?

Just as I can tell you that the landscape outside your window will probably will have some trees, fields and buildings, and that the buildings are likely to be joined together by roads, we can make generalisations about the landscape of risks on a software project too.

This is the Risk Landscape: the kinds of risks you will encounter as you try and deliver some software.

A typical project might start in a position of having "No Functionality" and "No Users", ready to make a journey across the landscape to a place of "Sustainable Monthly Revenues" or "Meeting Key Requirements".

To get there, we need to avoid the pitfalls dotted around the landscape like "Running out of Budget" or "Drowning In Complexity". Each of these are types of risks we face on the Risk Landscape.

Our job as developers is to _navigate_ across this landscape, testing the way as we go, trying to get to a position of _more favourable risk_.

It's tempting to think of the [Risk Landscape](/risks/Risk-Landscape) as being like a [Fitness Landscape](https://en.wikipedia.org/wiki/Fitness_landscape). That is, you have a "cost function" which is your height above the landscape, and you try and optimise by moving downhill in a [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent) fashion.

However, there's a problem with this: we don't have that cost function. We can only _guess_ at what risks there are. We have to go on our _experience_. For this reason, I prefer to think of the [Risk Landscape](/risks/Risk-Landscape) as a terrain which contains various categories of _fauna_ or _obstacles_ which we will find as we explore it.

## Why Should We Categorise The Risks?

A lot of knowledge and understanding of the world starts by naming and categorising things.

If we were studying insects, this might be a guide giving you a description and a picture of each insect, telling you where to find it and how it lives. That doesn't mean that this is _all_ there is to know, but it's a start. Just as a scientist could spend an entire lifetime studying a particular species of bee, each of the risks we'll look at really has a whole sub-discipline of Computer Science attached to it, which we can't possibly hope to cover in any great depth.

As software developers, we can't hope to know the specifics of the whole discipline of [Complexity Theory](https://en.wikipedia.org/wiki/Complexity_theory), or [Concurrency Theory](<https://en.wikipedia.org/wiki/Concurrency_(computer_science)>). But, we're still required to operate in a world where these things exist. So, we may as well get used to them and ensure that we respect their primacy. We are operating in _their_ world, so we need to know the rules.

Once we can spot and name different types of risk we can then think about their characteristics and how to manage or avoid them.

This is a "spotters' guide" to software risks: where to find them and what to do about them.

## Our Tour Itinerary

Below is a table outlining the different risks we'll see. There _is_ an order to this: the later risks are written assuming a familiarity with the earlier ones. Hopefully, you'll stay to the end and see everything, but you're free to choose your own tour if you want to.

<TagList tag="Risk Category" />
       
After the last stop on the tour, in [Staging and Classifying](Staging-And-Classifying) we'll have a recap about what we've seen and make some guesses about how things fit together.

Also on that page is a [periodic table](Staging-And-Classifying#towards-a-periodic-table-of-risks) showing a diagrammatic view of how all these risks fit together.
