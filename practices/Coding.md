## What Is It

**Coding** is the main practice that identifies us as working on a _software project_:  Actually entering instructions in a language that the computer will understand, be it Java, C++, Matlab, Excel or _whatever_.   It is transferring the ideas in your head into steps that the computer can understand.

-- add a standard definition of coding or hacking here.

Often, this can be called "programming", "hacking" or "development", although that latter term tends to connotate more than just programming work, such as [Requirements Capture](Requirements-Capture) or [Documentation](Documentation), but we're considering those separately on different pages.

## How It Works

In [Development Process](Development-Process) we introduced the following diagram to show what is happening when we do some coding.  Let's generalize a bit from this diagram:

- We start with a [Goal In Mind](Goal-In-Mind) to implement _something_.
- We build an [Internal Model](Internal-Model) of how we're going to meet this goal (though coding, naturally)
- Then, we find out how well our idea stands up when we [Meet Reality](Meet-Reality) and try it out in our code-test-run-debug cycle.
- As we go, the main outcome is that we change reality, and create code, but along the way, we discover where our [Internal Model](Internal-Model) was wrong, in the form of surfacing [Hidden Risks](Hidden-Risks).

![Coding](images/dev_process_code.png)

As with any [Practice](Practices), we are coding to minimize [Attendant Risks](Risk).  We might want...

- **To Build** or improve some features which our clients will find useful. -- [Feature Risk](Feature-Risk)
- **To Automate** some process that takes too long or is too arduous.  -- [Process Risk](Process-Risk)
- **To Explore** how our tools, systems or dependencies work (also called [Hacking]()). -- [Dependency Risk](Dependency-Risk)
- **To Refactor** our codebase, to reduce complexity. -- [Complexity Risk](Complexity-Risk)
- **To Clarify** our product, making our software more _presentable_ and _easier to understand_.  -- [Communication Risk](Communication-Risk)

... and so on.   As usual, the advice is to _reduce risk_ in the most meaningful way possible, all the time.  This might involve coding _or it might not_.

## Where It's Used

Since the focus of this site is on _software methodologies_, you shouldn't be surprised to learn that _all_ of the methodologies use **Coding** as a central focus.  ...And [Programming M10R](PM) considers this to be _the_ practice that matters.  

## Variations

### Building Features

Most commonly, the reason we are **Coding** is same as the one in the [Development Process](Development-Process) page: we want to put features in the hands of our customers.  I.e. we want to mitigate [Feature Risk](Feature-Risk).  

That is, we believe our clients don't have the features they need to see in the software.  

By coding, we are mitigating [Feature Risk](Feature-Risk) in exchange for [Complexity Risk](Complexity-Risk) in terms of the extra code we now have on the project, and [Schedule Risk](Schedule-Risk), because by spending time or money coding we now have less time or money to do other things.

> “Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” - Bill Gates

And you can see _why_ this is true:  the more code you write, the more [Complexity Risk](Complexity-Risk) you now have on the project, and the more [Dead End Risk](Dead-End-Risk) you've picked up in case it's wrong.

### Prototyping

Users often have trouble _conceiving_ of what they want in software, let alone _explaining_ that to developers in any meaningful way.  

Let's look at how that can happen.  

Imagine for a moment, that there was such a thing as **The Perfect Product**, and a **User** wants to build it with a **Coder**:
 - The Perfect Product might be _conceptually elusive_, and it might take several attempts for the **User** to find it's form. [Conceptual Integrity Risk](Feature-Risk)
 - It might be hard for the **User** to _communicate_ the idea of it in writing or words:  where do the buttons go? What do they do?  What are the key abstractions?  [Communication Risk](Communication-Risk)
 - It might be hard too, for the **Coder** to work with this description.  Since his [Internal Model](Internal-Model) is different from the **User**'s, they have different ideas about the _meaning_ of what the **User** is communicating.  [Communication Risk](Communication-Risk)
 - Then, implementing the idea of whatever is in the **Coder**'s [Internal Model](Internal-Model) takes _effort_, and therefore involves [Schedule Risk](Schedule-Risk)
 - Finally, we have a feedback loop, so the **User** can improve their [Internal Model](Internal-Model) and see the previously unforeseen [Hidden Risks](Risk).
 - Then, you can go round again.

![Coding Communication Risks](images/coding_communication_risk.png)

The problem here is that this is a very _protracted feedback loop_.  This is mitigated by prototyping, because that's all about shortening the feedback loop as far as possible:  
 - By working together, you mitigate [Communication Risk](Communication-Risk)
 - By focusing on one or two elements (such as UI design), you can minimize [Schedule Risk](Schedule-Risk)
 
One assumption of Prototyping is that **User**s can iterate towards **The Perfect Product**.  But it might not be so:   the Conceptual gap between their own ideas and what they really _need_ might prove too great.  After all, bridging this gap is the job of the [Designer](Design):

> “It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.”
> — Steve Jobs 

### Automating

Automation is one of the key practices of [DevOps](DevOps) - the idea that people in general are poor at repeatable tasks, and anything people do repeatedly _should_ be automated.  This is mitigating [Process Risk](Process-Risk) at the expense of attendant [Complexity Risk](Complexity-Risk) and [Schedule Risk](Schedule-Risk).

Since this is a trade-off, you have to be careful about how you weigh the [Process Risk](Process-Risk):  clearly, it exists _into the future_, and you are making a bet that increased risk now will pay off in decreased [Process Risk](Process-Risk) over the lifetime of the project.  This is a hard thing to judge:
 - How long will the mitigation last before the process changes again?
 - How much [Process Risk](Process-Risk) are we carrying, week-to-week?  (A good way to answer this is to look at past-performance).
 - How much [Complexity Risk](Complexity-Risk) will we gain?

### Tool Use
 
In general, unless the problem is somehow _specific to your circumstances_ it may well be better to skip direct coding and pick up some new tools to help with the job.  For Automation, say, tools are a different trade off:  you are mitigating [Process Risk](Process-Risk) in return for [Dependency Risk](Dependency-Risk) and some smaller amounts of:
 - [Communication Risk](Communication-Risk) because now you (and the rest of the team) have to understand the tool.
 - [Schedule Risk](Schedule-Risk) in the time it takes to learn and integrate the tool.
 - [Complexity Risk](Complexity-Risk) because your project necessarily becomes more complex for the addition of the tool.

Tools in general are _good_ and _worth using_ if they offer you a better risk return than you would have had from not using them.  But, this is a low bar -  some tools offer _amazing_ returns on investment.  The [Silver Bullets](Silver-Bullets) article describes in general some of these: 
 - Assemblers
 - Compilers
 - Garbage Collection
 - Type Systems
 - Libraries
 - Build Tools
 - etc.

A _really good tool_ offers such advantages that not using it becomes _unthinkable_:  Linux is heading towards this point.   For Java developers, the JVM is there already.  


Picking new tools should be done **very carefully**:  you may be stuck with your choices for some time.  Here is my short guide to doing this. 
 

### Refactoring




- Tools, compilers, dependency risk.

### Benchmarking

### For The Sake Of It

### Outsourcing / Offshoring


### Pair Programming / Mob Programming


Too Many Cooks?



## See Also