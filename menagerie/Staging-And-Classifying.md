![Under Construction](images/state/uc.png)

Our tour is complete.  

We've collected on this journey around the [Risk Landscape](Risk-Landscape) a (hopefully) good, representative sample of [Risks](Glossary#Risk) and where to find them.  But if we are good collectors, then before we're done we should [Stage]() our collection on some solid [Mounting Boards], and do some work in classifying what we've seen.

tbd collecting image

If you've been reading closely, you'll notice that a number of themes come up again and again within the different sections.   For example:

 - **Fit**:  
 - **Abstraction**
 - **Evolution** 


## Some Observations

### Your Feature Risk is Someone Else's Dependency Risk

In the [Feature Risk](Feature-Risk) section, we looked at the problems of _supplying a dependency to someone else_:  you've got to satisfy a demand [Market Risk], and ensure a close fit with requirements [Conceptual Integrity Risk].  The section on [Production Risk]() went further, looking at specific aspects of being the supplier of an IT service as a dependency.  

However, over the rest of the [Dependency Risk](Dependency-Risk) sections, we looked at this from the point of view of _being a client to someone else_:  you want to find trustworthy, reliable dependencies that don't give up when you least want them to.

So [Feature Risk](Feature-Risk) _is_ [Dependency Risk](Dependency-Risk):  they’re _two sides of the same coin_.  In a dependency, you’re a client, whereas feature risk, you’re the supplier. 

tbd image comparing the two

### The Power Of Abstractions

_Abstraction_ appears as a concept continually throughout the book, whether we are looking at [Communication](Communication-Risk), [Complexity Metrics](Complexity-Risk#kolmogorov-complexity), [Map and Territory Risk](Map-And-Territory-Risk) or how it causes [Boundary Risk](Boundary-Risk).  And, so far, we've looked at some complicated examples of abstractions, such as [network protocols](Communication-Risk#network), [dependencies on technology](Software-Dependency-Risk#software-tools) or [Business Processes](Process-Risk#the-purpose-of-process).

There's a good reason for this repetition.   Abstraction is at the heart of _everything we do within software_.  So, let's now _generalize_ what is happening with abstraction, but have in mind _a really simple example_:  giving a name to something.

#### **Inventing an Abstraction** means:  

- **Creating a [Feature](Feature-Risk) that can be _used_ for some purpose. **  So, at the simplest end, you might be simply _naming a pattern_ of behaviour we see in the real world, such as "Binge Watching" or "Remote Working", or naming your dog, "Alfie".
 - **Creating a [boundary](Boundary-Risk).**  By naming something, you _implicitly_ create a boundary, because the world is now divided into "things which _are_ X" and "things which _are not_ X".   Sometimes, this abstraction may literally end up having a physical boundary to enforce this division (such as, "My Property / Not My Property"). _Boundary Risk is created by abstractions._
 - **Creating a [protocol](Communication-Risk#protocol)**  At the very simplest level (again), this is just introducing _new words to a language_.   Therefore, we create [Protocol Risk](Communication-Risk#protocol-risk):  what if the person we are communicating with _doesn't know this word?  
    
tbd, diagram.


#### **Using an Abstraction** means:

 - **Overcoming a [Learning Curve](Communication-Risk#learning-curve)**:  Because you have to _learn_ a name in order to use it (whether a function, a dog, or the name of someone at a party).
 - **Dealing with [Boundary Risks](Boundary-Risk).**  Even learning _a single word_ to use, but the word will come as part of the whole _ecosystem_ of a language.  Using _french words_ 
    * [Communicating with the 
    * Which means, Boundary Risk:  the bigger the abstraction, the bigger the risk.

* Abstractions Change and Evolve
    * You face Red Queen Risk
    * Feature Drift risk
    * Regression Risk
    * What is Rich Hickey doing in this space?





- A Section on Abstraction, and what it really means.

Dependency Risk is basically three things:

- Schedule (things happening in time, running out of stuff.  e.g I need enough money to get this done, etc.  I need enough patience, enough loyalty, trust, entente.)
- Technology (depending on software, hardware, etc.  )
- Organisation (arrangements of people, processes, technology to achieve some goal)
- Agency (people/machines/processes/organisations doing what you asked, working with you)

Using a dependency requires learning a _protocol_.    You have to learn to use it.  Maybe it learns you.  This requires changes to your internal model.  


Internal Model      - Communication --  Dependency
   Goal 





### Coordination Risk 

- similar to _threading/deadlocking issues 


One thing that should be apparent is that there are similarities in the risks between all the kinds of

Production risk == security risk??


Boehm..  OWASP..



How much do compilers do for you?


- draw a diagram of this system.  mark on all the different risks using numbers.  mention specifically that since this is a diagram, it is a "map".




1.  Classifying Risks
  - Dependencies and Features are the same
    - Dependency risks are all 2-sided.  (Counterparty risk)
    - Communication is a Dependency
    - Fit Risk / Communication Risk - buckets 
      - Fit risk example from work:  choosing the right format.  
      - Why standards can never be perfect.
      - Mention Kanban = the control is the physical object
    - Dependencies and Coordination
      
  - On Abstraction (see notes in evernote)
  
  - Periodic Table of Risks
  
2.  Failure Modes

  - Understanding Failure:  what exactly does it mean to fail?

  - Personal Failures

     - CapsLock: complexity, not using tools.
     - Configuration Tool (Complexity, feature fit, bugs in hibernate, difficulty mapping domain model)
     - Wide Learning  (Funding, but also complexity), did we know what we were building?  Agency risk
     - AreAye - needless complexity XMLBox
     - Agora: Notes / Typing. (Complexity Risk)  Archipelago
     - PDC: website redesign. funding.  i.e. schedule risk
     - Hawk:  complexity risk in the software.  but actually, they made it work.  offshoring.
     - Dark:  market/feature fit?  
     - J10: marketing / market fit / Complexity in spades.  algorithmic complexity
     - DSL:  complexity (code generation).  complexity = layers.  team dynamics.  
     - REF:  complexity. agency risk. failure of goals.  m&t.
     - REF Testing:  complexity risk.  communication risk?
     - HSC: Trader Comments:  feature fit.
     - HSC: Takeover of Symph: Complexity (of change)
     - TT: Feature Fit
     
  - Boehm.
  
  
3.  What's To Come
  - risk based debugging.
  - risk based coding.

4.  On to Part 3.
 - I'm a better coder for knowing this.
 - We're all naturalists now.


derisking

https://wwwx.cs.unc.edu/~welch/class/comp145/media/docs/Boehm_Term_NE_Fail.pdf

https://www.worksoft.com/top-software-failures-of-2017-so-far

https://sites.hks.harvard.edu/m-rcbg/ethiopia/Publications/Top%2010%20Reasons%20Why%20Systems%20Projects%20Fail.pdf