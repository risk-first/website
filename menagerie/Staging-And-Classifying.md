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
 - **Living with [Dependency Risk]():**  We depend on a word in our language, or a function in our library, or a service on the Internet.  But all of these things are _unreliable_.  The word might not communicate what you want it to, or be understood by the audience, the function might not work, the service might be down.  Also, language _changes_ and _evolves_, and the words you are using now might not always mean what you want them to mean.  Software too changes and evolves.  We've seen this in [Red Queen Risk](Scarcity-Risk#red-queen-risk) and [Feature Drift Risk](Feature-Risk#feature-drift-risk).
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

In the [Feature Risk](Feature-Risk) section, we looked at the problems of _supplying a dependency to someone else_:  you've got to satisfy a demand [Market Risk](Feature-Risk#market-risk), and service a segment of the user community [Feature Access Risk](Feature-Risk#feature-access-risk).  The section on [Operational Risk](Operational-Risk) went further, looking at specific aspects of being the supplier of an IT service as a _dependency_.  

However, over the rest of the [Dependency Risk](Dependency-Risk) sections, we looked at this from the point of view of _being a client to someone else_:  you want to find trustworthy, reliable dependencies that don't give up when you least want them to.

So [Feature Risk](Feature-Risk) and [Dependency Risk](Dependency-Risk) are _two sides of the same coin_.  You face [Dependency Risk](Dependency-Risk) when you’re a client, [Feature Risk](Feature-Risk) when you’re the supplier.   

Further, to _use_ a dependency requires the client and the supplier to communicate.  And, this entails _learning protocols_ and other types of [Communication Risk](Communication-Risk).    You have to learn to use it.  Maybe it learns you.  This requires changes to your internal model.  

![Features And Dependencies](images/generated/staging-and-classifying/features-and-dependencies.png)

These relationships of features/dependencies are the basis of [Supply Chains](https://en.wikipedia.org/wiki/Supply_chain) and the world-wide network of goods and services that forms the modern economy.  The incredible complexity of this network _should_ mean incredible [Complexity Risk](Complexity-Risk), too, but because humans are good at [Coordinating](Coordination-Risk) and managing our dependencies, and we rely on market mechanisms to help us allocate dependencies efficiently.

## The Original Risk

As we discussed in [Dependency Risk](Dependency-Risk), _depending on things_ is necessary for life, whether it is oxygen, food or sunlight.  Minimising [Dependency-Risk](Dependency-Risk) is therefore the goal of all life.  For some species, this also means dealing with [Feature Risk](Feature-Risk):  there's no point trying to supply a fruit that no creature will eat, for example.

Our problems really start when we try to [Coordinate](Coordination-Risk) with the dependencies themselves or each other.  As discussed in the section on [Coordination](Coordination-Risk), coordination is the root of [Communication Risk](Communication-Risk), as without coordination, we don't have to care about what the world is trying to tell us, or what we are trying to tell the world.

 - Communication Risk then begets [Map and Territory Risk](Map-And-Territory-Risk), because 
 - Communication Risk also means [Complexity Risk](Complexity-Risk), because now we have built a communication [graph](Complexity-Risk#connectivity), and we saw how to calculate how complex that is. 
 - As discussed in [Boundary Risk](Boundary-Risk), this is at a confluence of [Dependency Risk](Dependency-Risk), [Communication Risk](Communication-Risk) and [Complexity Risk](Complexity-Risk).
 
The below diagram shows how this causality plays out.
 
![The Origin Of Risk](images/generated/staging-and-classifying/origin-of-risk.png)

## Towards A Periodic Table Of Risks

As we said [at the start](A-Pattern-Language), Risk-First is all about developing _A Pattern Language_.  We can use the terms like "[Feature Risk](Feature-Risk)"_ or "[Learning Curve Risk](Communication-Risk#learning-curve-risk)" to _explain_ phenomena we see on software projects.   If we want to [De-Risk](De-Risking) our work, we need to be able to explain what the risks are, and what we expect to do about them.

The diagram below compiles all of the risks we've seen so far on the journey across the risk landscape.  Just like a periodic table, there are perhaps others left to discover.   Please help by reporting back what you see.

In the next section, we will be looking at some [Stories Of Failure](Stories-Of-Failure), and trying to apply the patterns we've learnt.

![Periodic Table of Risks](images/generated/staging-and-classifying/periodic-table-large.png)

