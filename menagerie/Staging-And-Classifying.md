![Under Construction](images/state/uc.png)

Our tour is complete.  

We've collected on this journey around the [Risk Landscape](Risk-Landscape) a (hopefully) good, representative sample of [Risks](Glossary#Risk) and where to find them.  But if we are good collectors, then before we're done we should [Stage](https://en.wikipedia.org/wiki/Entomological_equipment_for_mounting_and_storage) our specimens and do some work in classifying what we've seen.

![Staged and Classified Beetle Collection, (Credit: Fir0002, Wikipedia)](images/Beetle_collection.jpg)

If you've been reading closely, you'll notice that a number of themes come up again and again within the different sections.   For example, concepts like **Fit**, **Abstraction**, **Evolution**.  Although we've been looking at patterns of risk across software projects, it's time to look at the _patterns within the patterns_. 

## The Power Of Abstractions

[Abstraction](Glossary#abstraction) appears as a concept continually throughout the book, whether we are looking at [Communication](Communication-Risk), [Complexity Metrics](Complexity-Risk#kolmogorov-complexity), [Map and Territory Risk](Map-And-Territory-Risk) or how it causes [Boundary Risk](Boundary-Risk).  And, so far, we've looked at some complicated examples of abstractions, such as [network protocols](Communication-Risk#network), [dependencies on technology](Software-Dependency-Risk#software-tools) or [Business Processes](Process-Risk#the-purpose-of-process).

There's a good reason for this repetition.   Abstraction is at the heart of _everything we do within software_.  So, let's now _generalize_ what is happening with abstraction, but have in mind a really simple example:  having a name for something.   So, at the simplest end, you might be simply _naming a pattern_ of behaviour we see in the real world, such as "Binge Watching" or "Remote Working", or naming a category of insects as "Beetles".

### Using An Existing Abstraction means:

 - **Mitigating [Feature Risk]():** Because the abstraction is providing you with something _useful_.
 - **Living with [Dependency Risk]():**  We depend on a word in our language, or a function in our library, or a service on the internet.  But all of these things are _unreliable_.  The word might not communicate what you want it to, or be understood by the audience, the function might not work, the service might be down.  Also, language _changes_ and _evolves_, and the words you are using now might not always mean what you want them to mean.  Software too changes and evolves.  We've seen this in [Red Queen Risk](Scarcity-Risk#red-queen-risk) and [Feature Drift Risk](Feature-Risk#feature-drift-risk).
 - **Accepting [Communication Risk](Communication-Risk).** : Because if you are using the abstraction in conversation, the people you are using it with _need to understand it too_. 
 - **Accepting [Map and Territory Risk](Map-And-Territory-Risk)**: Because the abstraction is a simplification, and not the actual thing itself.
 
![Depending on an Abstraction](images/generated/staging-and-classifying/depending-abstraction.png)

### Inventing A New Abstraction means:  

- **Mitigating [Feature Risk](Feature-Risk).**  These abstractions are [Features](Feature-Risk) in the sense that other people can choose to use them, if they fit their requirements.  
- **Creating a [Protocol](Communication-Risk#protocol).**  At the very simplest level (again), this is just introducing _new words to a language_.   Therefore, we create [Protocol Risk](Communication-Risk#protocol-risk):  what if the person we are communicating with _doesn't_ know this word?  
- **Increasing [Complexity Risk](Complexity-Risk).** Because, the more words we have, the more complex the language is.
- **Creating [Boundary Risk](Boundary-Risk).**  By naming something, you _implicitly_ create a boundary, because the world is now divided into "things which _are_ X" and "things which _are not_ X".   Sometimes, this abstraction may literally end up having a physical boundary to enforce this division (such as, "My Property / Not My Property"). _Boundary Risk is created by abstractions._
    
![Inventing an Abstraction](images/generated/staging-and-classifying/inventing-abstraction.png)

### Choosing Between Abstractions means:

 - **Overcoming a [Learning Curve](Communication-Risk#learning-curve)**:  Because you have to _learn_ a name in order to use it (whether a function, a dog, or the name of someone at a party).
 - **Accepting [Boundary Risks](Boundary-Risk).**  Just using _a single word_ means accepting the whole _ecosystem_ of the language the word is in.  Using _French words_ means the [Boundary Risk](Boundary-Risk) of the French Language. 
 - **Accepting [Map And Territory Risk]().** Because the word refers to the _concept_ of the thing, and _not the thing itself_.

![Choosing an Abstraction](images/generated/staging-and-classifying/choosing-abstraction.png)

## Your Feature Risk is Someone Else's Dependency Risk

In the [Feature Risk](Feature-Risk) section, we looked at the problems of _supplying a dependency to someone else_:  you've got to satisfy a demand [Market Risk](), and ensure a close fit with requirements [Conceptual Integrity Risk]().  The section on [Production Risk]() went further, looking at specific aspects of being the supplier of an IT service as a dependency.  

However, over the rest of the [Dependency Risk](Dependency-Risk) sections, we looked at this from the point of view of _being a client to someone else_:  you want to find trustworthy, reliable dependencies that don't give up when you least want them to.

So [Feature Risk](Feature-Risk) _is_ [Dependency Risk](Dependency-Risk):  they’re _two sides of the same coin_.  You face [Dependency Risk]() when you’re a client, [Feature Risk]() when you’re the supplier.   

We've looked at three dimensions of [Feature Risk]():
  - Fit
  - Evolution
  - Audience
  
(recap this)  
  
Dependency Risk has three dimensions too:

- Schedule (things happening in time, running out of stuff.  e.g I need enough money to get this done, etc.  I need enough patience, enough loyalty, trust, entente.)
- Technology (depending on software, hardware, etc.  )
- Organisation (arrangements of [people](), [processes](), product)
- Agency (people/machines/processes/organisations doing what you asked, working with you)
- 

Using a dependency requires learning a _protocol_.    You have to learn to use it.  Maybe it learns you.  This requires changes to your internal model.  


Internal Model      - Communication --  Dependency
   Goal 

### 3.  Coordination Risk And The Garden Of Eden

- similar to _threading/deadlocking issues 
- Coordination is how you deal with abstractions.  and this means communication.

tbd diagram: abstractions -> agency -> coordination -> communication

One thing that should be apparent is that there are similarities in the risks between all the kinds of

- draw a diagram of this system.  mark on all the different risks using numbers.  mention specifically that since this is a diagram, it is a "map".

## Towards A Periodic Table Of Risks

tbd, diagram, explanatory text.

Dependencies, Features, Complexity etc.

![Periodic Table of Risks](images/generated/staging-and-classifying/periodic-table-large.png)


## Patterns

As we said [at the start](A-Pattern-Language), Risk-First is all about developing _A Pattern Language_.  We can use the terms like _"Feature Risk"_ or _"Learning Curve Risk"_ to _explain_ phenomena we see on software projects.   If we want to [De-Risk](De-Risking) our work, we need to be able to explain what the risks are, and what we expect to do about them.

So, lastly in part 2 let's put our language to work, and look at some past project failures.  Can we apply our lexicon to them?  

On to [Stories Of Failure](Stories-Of-Failure).
