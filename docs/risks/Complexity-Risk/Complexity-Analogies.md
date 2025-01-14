---
sidebar_position: 3
title: Analogies For Complexity
---

So, we've looked at some measures of software structure complexity.  We can say "this is more complex than this" for a given piece of code or structure.  We've also looked at three ways to manage it:  [Abstraction](/tags/Abstraction) and [Modularisation](/risks/Complexity-Risk#hierarchies-and-modularisation) and via [Dependencies](/risks/Complexity-Risk#languages-and-dependencies).  

However, we've not really said why complexity entails [Risk](/tags/Attendant-Risk).  So let's address that now by looking at three analogies, [Mass](/risks/Complexity-Risk#complexity-is-mass), [Technical Debt](/risks/Complexity-Risk#technical-debt) and [Mess](/risks/Complexity-Risk#kitchen-analogy)  

## Complexity is Mass

The first way to look at complexity is as **Mass** :  a software project with more complexity has greater mass than one with less complexity.  

Newton's Second Law states:

> F = _m_**a**,    ( Force = Mass x Acceleration )

That is, in order to move your project _somewhere new_ and make it do new things, you need to give it a push.  The more mass it has the more **Force** you'll need to move (accelerate) it.  

You could stop here and say that the more lines of code a project contains, the greater its mass.  And that makes sense because in order to get it to do something new you're likely to need to change more lines.  

But there is actually some underlying sense in which this is true in the real, physical world too, as discussed in a [Veritasium](https://www.youtube.com/user/1veritasium) video.  To paraphrase:

> "Most of your mass you owe due to <!--replace $E=mc^2$ -->E=mc²<!--endreplace -->, you owe to the fact that your mass is packed with energy because of the **interactions** between these quarks and gluon fluctuations in the gluon field... what we think of as ordinarily empty space... that turns out to be the thing that gives us most of our mass." - [Your Mass is NOT From the Higgs Boson, _Veritasium_](https://www.youtube.com/watch?annotation_id=annotation_3771848421&feature=iv&src_vid=Xo232kyTsO0&v=Ztc6QPNUqls)

I'm not an expert in physics _at all_ so there is every chance that I am pushing this analogy too hard.  But, by substituting quarks and gluons for pieces of software we can (in a very handwaving-y way) say that more connected software has more **interactions** going on, and therefore has more mass than simple software. 

If we want to move _fast_ we need simple code-bases. 

At a basic level, [Complexity Risk](/tags/Complexity-Risk) heavily impacts on [Schedule Risk](/tags/Schedule-Risk):  more complexity means you need more force to get things done, which takes longer.

## Technical Debt

The most common way we talk about [Complexity Risk](/tags/Complexity-Risk) in software is as [Technical Debt](/risks/Complexity-Risk#technical-debt):

> "Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite... The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organisations can be brought to a stand-still under the debt load of an unconsolidated implementation, object-oriented or otherwise." - [Ward Cunningham, 1992, _Wikipedia, Technical Debt_](https://en.wikipedia.org/wiki/Technical_debt)

Building a low-complexity first-time solution is often a waste:  in the first version, we're usually interested in reducing [Feature Fit Risk](/tags/Feature-Fit-Risk) as fast as possible. That is, putting working software in front of users to get [feedback](/thinking/Meeting-Reality).  We would rather carry [Complexity Risk](/tags/Complexity-Risk) than take on more [Schedule Risk](/tags/Schedule-Risk).

So a quick-and-dirty, over-complex implementation mitigates the same [Feature  Fit Risk](/tags/Feature-Fit-Risk) and allows you to [Meet Reality](/thinking/Meeting-Reality) faster.  

But having mitigated the [Feature Fit Risk](/tags/Feature-Fit-Risk) this way, you are likely exposed to a higher level of [Complexity Risk](/tags/Complexity-Risk) than would be desirable.  This "carries forward" and means that in the future, you're going to be slower.  As in the case of a real debt, "servicing" the debt incurs a steady, regular cost.

### Kitchen Analogy

It’s often hard to make the case for minimising [Technical Debt](/risks/Complexity-Risk#technical-debt): it often feels that there are more important priorities, especially when technical debt can be “swept under the carpet” and forgotten about until later.  (See [Discounting](/thinking/Evaluating-Risk#discounting-the-future-to-zero).)

One helpful analogy I have found is to imagine your code-base is a kitchen.   After preparing a meal (i.e. delivering the first implementation), _you need to tidy up the kitchen_.  This is just something everyone does as a matter of _basic sanitation_. 

Now of course, you could carry on with the messy kitchen.  When tomorrow comes and you need to make another meal, you find yourself needing to wash up saucepans as you go, or working around the mess by using different surfaces to chop on.  

It's not long before someone comes down with food poisoning.   

![Complexity Risk and its implications](/img/generated/risks/complexity/complexity-risk-impact.svg)

We wouldn't tolerate this behaviour in a restaurant kitchen, so why put up with it in a software project?  This state-of-affairs is illustrated in the above diagram.  Not only does [Complexity Risk](/tags/Complexity-Risk) slow down future development, it can be a cause of [Operational Risks](/tags/Operational-Risk) and [Security Risks](/tags/Security-Risk).

## Feature Creep

In Brooks' essay "No Silver Bullet - Essence and Accident in Software Engineering", a distinction is made between:

> - **Essence**:  _the difficulties inherent in the nature of the software._
> - **Accident**: _those difficulties that attend its production but are not inherent._   - [ Fred Brooks, _No Silver Bullet_](https://en.wikipedia.org/wiki/No_Silver_Bullet)

The problem with this definition is that we are accepting features of our software as _essential_.  

Applying Risk-First, if you want to mitigate some [Feature Fit Risk](/tags/Feature-Fit-Risk) then you have to pick up [Complexity Risk](/tags/Complexity-Risk) as a result.  But, that's a _choice you get to make_.  

![Mitigating Feature Risk](/img/generated/risks/complexity/feature-creep.svg)

Therefore, [Feature Creep](https://en.wikipedia.org/wiki/Feature_creep) (or [Gold Plating](https://en.wikipedia.org/wiki/Gold_plating_(software_engineering))) is a failure to observe this basic equation:  instead of considering this trade off, you're building _every feature possible_.  This will impact on [Complexity Risk](/tags/Complexity-Risk).

Sometimes, feature-creep happens because either managers feel they need to keep their staff busy, or the staff decide on their own that they need to [keep themselves busy](/tags/Agency-Risk).  This is something we'll return to in [Agency Risk](/tags/Agency-Risk).

## Complexity  -Ends: An Example

Imagine a complex software system composed of many sub-systems.  Let's say that the Accounting sub-system needed password protection (so you built this).  Then the team realised that you needed a way to _change the password_ (so you built that).   Then, you needed to have more than one user of the Accounting system so they would all need passwords (OK, fine).  

Finally, the team realises that actually authentication would be something that all the sub-systems would need, and that it had already been implemented more thoroughly by the Approvals sub-system.   

At this point, you realise you're in a **Dead End**:
  
 - **Option 1: Continue.** You carry on making minor incremental improvements to the accounting authentication system (carrying the extra [Complexity Risk](/tags/Complexity-Risk) of the duplicated functionality).
 - **Option 2: Merge.** You rip out the accounting authentication system and merge in the Approvals authentication system, consuming lots of development time in the process, due to the difficulty in migrating users from the old to new way of working.  There is [Implementation Risk](/tags/Implementation-Risk) here.
 - **Option 3: Remove.** You start again, trying to take into account both sets of requirements at the same time, again, possibly surfacing new hidden [Complexity Risk](/tags/Complexity-Risk) due to the combined approach.  Rewriting code can _seem_ like a way to mitigate [Complexity Risk](/tags/Complexity-Risk) but it usually doesn't work out too well.  As Joel Spolsky says:

> There’s a subtle reason that programmers always want to throw away the code and start over. The reason is that they think the old code is a mess. And here is the interesting observation: they are probably wrong. The reason that they think the old code is a mess is because of a cardinal, fundamental law of programming:  _It’s harder to read code than to write it._    - [Things You Should Never Do, Part 1, _Joel Spolsky_](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/)

Whichever option you choose, this is a dead end because with hindsight, it would probably have been better to do authentication in a common way _once_.  But it's hard to see these dead-ends up-front because of the complexity of the system in front of you.

### Avoiding Dead Ends

Working in a complex environment makes it harder to see developmental dead-ends.
 
Sometimes, the path across the [Risk Landscape](/risks/Risk-Landscape) will take you to dead ends, and the only benefit to be gained is experience.  No one deliberately chooses a dead end - often you can take an action that doesn't pay off, but frequently the dead end appears from nowhere:  it's a [Hidden Risk](/tags/Hidden-Risk).  The source of a lot of this hidden risk is the complexity of the [risk landscape](/tags/Risk-Landscape).

[Version Control Systems](https://en.wikipedia.org/wiki/Version_control) like [Git](https://en.wikipedia.org/wiki/Git) are a useful mitigation of dead ends, because using them means that at least you can _go back_ to the point where you made the bad decision and go a different way.  Additionally, they provide you with mitigations against the [Reliability Risk](/tags/Reliability-Risk) of using hard-disk.
