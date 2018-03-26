## What Is It

**Coding** is the main practice that identifies us as working on a _software project_:  Actually entering instructions in a language that the computer will understand, be it Java, C++, Matlab, Excel or _whatever_.   It is transferring the ideas in your head into steps that the computer can understand.

-- add a standard definition of coding or hacking here.

Often, this can be called "programming", "hacking" or "development", although that latter term tends to connotate more than just programming work, such as [Requirements Capture](Requirements-Capture) or [Documentation](Documentation), but we're considering those separately on different pages.

## How It Works

In [Development Process](Development-Process) we introduced the following diagram to show what is happening when we do some coding:

![Coding](images/dev_process_code.png)

Let's generalize a bit from this diagram:

- We start with a [Goal In Mind](Goal-In-Mind) to implement _something_.
- We build an [Internal Model](Internal-Model) of how we're going to meet this goal (though coding, naturally)
- Then, we find out how well our idea stands up when we [Meet Reality](Meet-Reality) and try it out in our code-test-run-debug cycle.
- As we go, the main outcome is that we change reality, and create code, but along the way, we discover where our [Internal Model](Internal-Model) was wrong, in the form of surfacing [Hidden Risks](Hidden-Risks).

As with any [Practice](Practices), we are coding to minimize [Attendant Risks](Risk).  We might want...

- **To Build** or improve some features which our clients will find useful. [Feature Risk](Feature-Risk)
- **To Automate** some process that takes too long or is too arduous. [Process Risk](Process-Risk)
- **To Explore** how our tools, systems or dependencies work (also called [Hacking]()). [Dependency Risk](Dependency-Risk)
- **To Refactor** our codebase, to make our software simpler. [Complexity Risk](Complexity-Risk)

... and so on.   As usual, the advice is to _reduce risk_ in the most meaningful way possible, all the time.  This might involve coding _or it might not_.

## Where It's Used

Since the focus of this site is on _software methodologies_, you shouldn't be surprised to learn that _all_ of the methodologies use **Coding** as a central focus.  ...And [Programming M10R](PM) considers this to be _the_ practice that matters.  

## Variations

### Building Features

Most commonly, the reason we are **Coding** is same as the one in the [Development Process](Development-Process) page: we want to put features in the hands of our customers, i.e. we want to mitigate [Feature Risk](Feature-Risk).  That is, we believe our clients don't have the features they need to see in the software.  

By coding, we are mitigating [Feature Risk](Feature-Risk) in exchange for [Complexity Risk](Complexity-Risk) in terms of the extra code we now have on the project, and [Schedule Risk](Schedule-Risk), because by spending time or money coding we now have less time or money to do other things.

> “Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” - Bill Gates

And you can see _why_ this is true:  the more code you write, the more [Complexity Risk](Complexity-Risk) you now have on the project, and the more [Dead End Risk](Dead-End-Risk) you've picked up in case it's wrong.

### Prototyping

Users often have trouble _conceiving_ of what they want in software, let alone _explaining_ that to developers in any meaningful way.  Let's look at how that can happen.  Imagine for a moment, that there was such a thing as The Perfect Product.  It doesn't exist 

Perfect Product - User's Conception Of It's Design - User's Understanding Of It - User's Explanation Of It - Developer's Understanding Of the Explanation - Developer's Ability To Implement It. 


Steve Jobs - users don't know what they want until they see it.



Sometimes, we will code to reduce [Communication Risk](Communication-Risk) by making our software more _presentable_ and _easier to understand_.  


But at the same time, we need to consider that  

### Automating

### Refactoring

- Dead end risk too

### Learning

### Benchmarking

### For The Sake Of It

### Outsourcing / Offshoring


### Pair Programming / Mob Programming


Too Many Cooks?



## See Also