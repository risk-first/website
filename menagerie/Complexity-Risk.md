
**Complexity Risk** are the risks to your project due to its underlying complexity.  This could be down to the size of the codebase, the number of modules, the interconnectedness of the modules and how well-factored the code is.   

Often, programmers think about **Complexity Risk** as **Technical Debt** (see below), but there's a bit more to it than that.

## What Complexity Means






## Future Complexity




## Technical Debt





##



You don't know how complex something is until you do it?

You can't create an internal model of the whole system.

Especially not in advance.

Kitchen Analogy

## Technical Debt

Technical Debt is caused by **unnecessary complexity** within the software system.   It’s often hard to make the case for minimising technical debt: it often feels that there are more important priorities, especially when technical debt can be “swept under the carpet” and forgotten about until later.  

Technical debt manifests when you are merging new code and existing code.  The more existing code you have, the harder the merge.  Also, if we have some requirements and some existing code, and we are creating new code, then the situation is always harder when we have more of the existing code to work from.  

The solution to technical debt is refactoring.  This is well named:  consolidating the functionality down into the minimum number of orthogonal design factors of the system.   A well-factored system is not necessarily the simplest one:  it could be that there are further abstractions that could be made.  However, a well-factored system is one that most ably supports future merging, without introducing problems for the person doing the merge.  

Kitchen Analogy:  Technical Debt is like not clearing up the kitchen after cooking.

Technical Debt is also _rework_

IT's also when, to make a change, you have to do lots of work... technical debt is like inertia... it's harder to change projects with lots of tech debt.

Is technical debt _unnecessary complexity_?  

## Devil makes work
This is an _antipractice_ where idle people will add [Complexity Risk](Complexity-Risk) to your project


gold plating software engineering

Complexity Risk is heavily mitigated by **Compilers** and **UNit Tests**.

Complexity risk isn't bad in itself, but it's inertia that slows us down.
Starting a new project is always easier than continuing an existing one.  And, more exciting.

uSers and data add to complexity risk, especially hetrogenous requirements from lots of different users - should you add users like this?

Inertia

- You could describe complexity risk as inertia.   
- If you're carrying a lot of complexity, it makes the project _hard to change_.
- If you're _scared of making changes_ it's _hard to change_.

Testing and Code coverage (and compilation) _mitigate_ inertia, because it gives you the confidence to make change without having the entire project in your head.


## Dead-End Risk

**Dead-End Risk** is where you build functionality that you _think_ is useful, only to find out later that actually, it was 
a dead-end, and is superceded by something else.

For example, let's say that the Accounting sub-system needed password access (so you built this).  Then the team realised that you needed a way to _change the password_ (so you built that).   Then, that you needed to have more than one user of the Accounting system so they would all need passwords (ok, fine).  

Finally, the team realises that actually logging-in would be something that all the sub-systems would need, and that it had already been implemented more thoroughly by the Approvals sub-system.   

At this point, you realise you're in a **Dead End**:  
 - Either you carry on making minor incremental improvements to the accounting password system (carrying the extra **Complexity Risk** of duplicated functionality), or
 - You rip out the accounting password system, and merge in the Approvals system, surfacing new, hidden **Complexity Risk** in the process, due to the difficulty in migrating users from the old to new way of working.
 
 
 
 
 

Sometimes, the path from your starting point to your goal on the [Risk Landscape](Risk-Landscape) will take you to dead ends:  places 
where the only way towards your destination is to lose something, and do it again another way.

## Examples

-- The Re-write


## Mitigating Practices

[Design](Big-Design

