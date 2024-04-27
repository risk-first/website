
### Refactoring

The term "refactoring" probably stems from the mathematical concept of _(Factorization)[https://en.wikipedia.org/wiki/Factorization]_.  Factorizing _polynomial equations_ or _numbers_ means to identify and make clear their distinct components.

tbd: SoC

Most coders use the phrase "refactoring", and intuitively understand what it is.  It shouldn't have been hard to find a clear explanation for this page, but sadly it was.  There are some very woolly definitions of "refactoring" around, such as:

> "**Refactoring (n)**: a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior""  -- [Refactoring.com](https://www.refactoring.com)

What do "easier to understand" (which makes sense) and "cheaper to modify" mean?   Let's try and be more specific.   With Refactoring, we are trying to:

- Mitigate [Communication Risk](../risks/Communication-Risk.md) by making the _intent_ of the software clearer. This can be done by breaking down larger functions and methods into smaller ones with helpful names, and naming elements of the program clearly, and
- Mitigate [Complexity Risk](../risks/Complexity-Risk.md) by employing _abstraction_ and _modularization_ to remove duplication and reduce cross-cutting concerns.   By becoming less complex, the code has less [Inertia](../risks/Complexity-Risk.md).

On **Refactoring**, Kent Beck says:

> "If a programmer sees a one-minute ugly way to get a test working and a ten-minute way to get it working with a simpler design, the correct choice is to spend the ten minutes. " -- Kent Beck, _Extreme Programming Explained_

This is a bold, not-necessarily-true assertion.  How does that ratio stack up when applied to _hours_ or _days_?  But you can see how it's motivated:  Kent is saying that the nine extra minutes of [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) are _nothing_ compared to the carry cost of [Complexity Risk](../risks/Complexity-Risk.md) on the project.