---
sidebar_position: 4
title: Hiding Places
---



## Where Complexity Hides

So far, we've focused mainly on [Codebase Risk](/tags/Codebase-Risk), but this isn't the only place complexity appears in software.  We're going to cover a few of these areas now, but be warned, this is not a complete list by any means:

 - Algorithmic (Space and Time) Complexity
 - Memory Management
 - Protocols / Types
 - Concurrency / Mutability
 - Networks / Security
 - The Environment
 
### The Environment

The complexity of software tends to reflect the complexity of the environment it runs in, and complex software environments are more difficult to reason about, and more susceptible to [Operational Risk](/tags/Operational-Risk) and [Security-Risk](Agency-Risk#security).  

In particular, when we talk about the environment, we are talking about the number of external dependencies that the software has, and the risks we face when relying on those dependencies.  

So the next stop in the tour is a closer look at [Dependency Risk](/tags/Dependency-Risk).