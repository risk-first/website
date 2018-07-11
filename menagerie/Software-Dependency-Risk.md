![Draft](images/state/draft.png)

In this section, we're going to look specifically at _Software_ dependencies, although many of the concerns we'll raise here apply equally to all the other types of dependency we outlined in [Dependency Risk](Dependency-Risk). 

## Kolmogorov Complexity: Cheating

In the earlier section on [Complexity Risk](Complexity-Risk) we tackled [Kolmogorov Complexity](Complexity-Risk#Kolmogorov-Complexity), and the idea that your codebase had some kind of minimal level of complexity based on the output it was trying to create.  This is a neat idea, but in a way, we cheated.  Let's look at how.

We were trying to figure out the shortest (Javascript) program to generate this output:

```
abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd
```

And we came up with this:

```javascript
const ABCD="ABCD";                                           (11 symbols)

function out() {                                             (7 symbols)
    return ABCD.repeat(10)                                   (7 symbols)
}                                                            (1 symbol)
```

Which had **26** symbols in it.  

Now, here's the cheat:  The `repeat()` function was built into Javascript in 2015 in [ECMAScript 6.0](http://www.ecma-international.org/ecma-262/6.0/).  If we'd had to program it ourselves, we might have added this:

```javascript
function repeat(s,n) {                                       (10 symbols)
    var a=[];                                                (7 symbols)
    while(a.length<n){                                       (9 symbols)  
        a.push(s)                                            (6 symbols)
    }                                                        (1 symbol)
    return a.join('');                                       (10 symbols)
}                                                            (1 symbol)
```
... which would be an extra **44** symbols (in total **70**), and push us completely over the original string encoding of **53** symbols.   So, _encoding language is important_.   

Conversely, if ECMAScript 6.0 had introduced a function called `abcdRepeater(n)` we'd have been able to do this:

```javascript
function out() {                                             (7 symbols)
    return abcdRepeater(10)                                  (6 symbols)
}                                                            (1 symbol)
``` 

.. and re-encode to **14** symbols.  Now, clearly there are some problems with all this:

1.  Clearly, _language matters_:  the Kolmogorov complexity is dependent on the language, and the features the language has built in.  
2.  The exact Kolmogorov complexity is uncomputable anyway (it's the _theoretical_ minimum program length).  It's just a fairly abstract idea, so we shouldn't get too hung up on this.  There is no function to be able to say, "what's the Kolmogorov complexity of string X"
3.  What is this new library function we've created?   Is `abcdRepeater` going to be part of _every_ Javascript?  If so, then we've shifted [Codebase Risk](Complexity-Risk) away from ourselves, but we've pushed [Communication Risk](Communication-Risk) and [Dependency Risk](Dependency-Risk) onto every _other_ user of Javascript. (Why these?  Because `abcdRepeater` will be clogging up the documentation and other people will rely on it to function correctly.)
4.  Are there equivalent functions for every single other string?  If so, then compilation is no longer a tractable problem: is `return abcdRepeater(10)` correct code?  Well, now we have a massive library of different `XXXRepeater` functions to compile against to see if it is...  So, what we _lose_ in [Kolmogorov Complexity](Complexity-Risk) we gain in [Runtime Complexity](Complexity-Risk#space-and-time-complexity).
5.  Language design, then, is about _ergonomics_.  After you have passed the relatively low bar of providing [Turing Completeness](https://en.wikipedia.org/wiki/Turing_completeness), the key is to provide _useful_ features that enable problems to be solved, without over-burdening the user with features they _don't_ need.  And in fact, all software is about this.

![Software Dependency Ergonomics:  finding the sweet spot between too many features and too few](images/kite9/software-dependency-ergonomics.png)

## Ergonomics Examined

Have a look at some physical tools, like a hammer, or spanner.  To look at them, they are probably _simple_ objects, obvious, strong and dependable.  Their entire behaviour is encapsulated in their form.  Now, if you have a drill or sander to hand, look at the design of this too.  If it's well-designed, then from the outside it is simple, perhaps with only one or two controls.  Inside, it is complex and contains a motor, perhaps a transformer, and is maybe made of a hundred different components.

But outside, the form is simple, and designed for humans to use.   This is _[ergonomics](https://en.wikipedia.org/wiki/Human_factors_and_ergonomics)_:

> "Human factors and ergonomics (commonly referred to as Human Factors), is the application of psychological and physiological principles to the (engineering and) design of products, processes, and systems. The goal of human factors is to reduce human error, increase productivity, and enhance safety and comfort with a specific focus on the interaction between the human and the thing of interest."  - [Human Factors and Ergonomics, _Wikipedia_](https://en.wikipedia.org/wiki/Human_factors_and_ergonomics)

### Interfaces

The interface of a tool is the part we touch and interact with.  By striving for simplicity, the interface reduces [Communication Risk](Communication-Risk).  

The interface of a system expands when you ask it to do a wide variety of things.   An easy-to-use drill does one thing well: it turns drill-bits at useful levels of torque for drilling holes and sinking screws.  But if you wanted it to also operate as a lathe, a sander or a strimmer (all basically mechanical things going round) you would have to sacrifice the ergonomic simplicity for a more complex interface, probably including adapters, extensions, handles and so on.

So, we now have split complexity into two:
 - The inner complexity of the tool (how it works internally, it's own [Kolmogorov Complexity](Complexity-Risk#Kolmogorov-Complexity)).
 - The complexity of the instructions that we need to write to make the tool work (the interface [Kolmogorov Complexity](Complexity-Risk#Kolmogorov-Complexity)). 
 
![Types of Complexity For a Software Dependency](images/kite9/software-dependency-complexity.png)


### Software Tools

In the same way as with a hand-tool, the bulk of the complexity of a software tool is hidden behind it's interface.  But, the more complex the _purpose_ of the tool, the more complex the interface will be.

Software is not constrained by _physical_ ergonomics in the same way as a tool is.  But ideally, it should have conceptual ergonomics:  ideally, complexity is hidden away from the user behind the [Application Programming Interface (API)](https://en.wikipedia.org/wiki/Application_programming_interface).  This is the familiar concept of [Abstraction](Glossary#abstraction) we've already looked at.   

That is, the tool should be as simple to use and understand as possible.  This is the [Principal Of Least Astonishment](https://en.wikipedia.org/wiki/Principle_of_least_astonishment):

 - **The abstractions should map easily to how the user expects the tool to work.** For example, I _expect_ the trigger on a drill to start the drill turning.  
 - **The abstractions should leverage existing idioms and knowledge.** In a new car, I _expect_ to know what the symbols on the dashboard mean, because I've driven other cars.
 - **The abstractions provide me with only the functions I need.** Because everything else is confusing and gets in the way.  

The way to win, then, is to allow a language to be extensible as-needed with features written by third parties.  By supplying mechanisms for extension a language can provide insurances against the [Boundary Risk](Boundary-Risk) of adopting it. 

## Types Of Software Dependencies

There are lots of ways you can depend on software.  Here though, we're going to focus on just three main types:  
 1. **Code Your Own**: write some code ourselves to meet the dependency.
 2. **Software Libraries**:  importing code from the Internet, and using it in our project.  Often, libraries are Open Source (this is what we'll consider here).
 3. **Software as a Service**: calling a service on the Internet, (probably via `http`)  This is often known as [SaaS, or Software as a Service](https://en.wikipedia.org/wiki/Software_as_a_service).
 
All 3 approaches involve a different risk-profile.  Let's look at each in turn, from the perspective of which risks get mitigated, and which risks are accentuated. 
 
## 1. Code Your Own

Initially, writing our own code was the only game in town:  when I started programming, you had a user guide, BASIC and that was pretty much it.  Tool support was very thin-on-the-ground.  Programs and libraries could be distributed as code snippets _in magazines_ which could be transcribed and run, and added to your program.  This spirit lives on somewhat in StackOverflow and JSFiddle, where you are expected to "adopt" others' code into your own project.  

One of the hidden risks of embarking on a code-your-own approach is that the features you need are _not_ apparent from the outset.  What might appear to be a trivial implementation of some piece of functionality can often turn into it's own industry as more and more hidden [Feature Risk](Feature-Risk) is uncovered.  

For example, as we discussed in our earlier treatment of [Dead-End Risk](Complexity-Risk#dead-end-risk), building log-in screens _seemed like a good idea_.  However, this gets out-of-hand fast when you need:
 - A password reset screen
 - To email the reset links to the user
 - An email verification screen
 - A lost account screen
 - Reminders to complete the sign up process
 - ... and so on.

![Code your own mitigates immediate feature risk, but at the expense of schedule risk, complexity risk and communication risk.  There is also a hidden risk of features you don't yet know you need.](images/kite9/software-dependency-code-your-own.png) 

### Unwritten Software

Sometimes, you will pick up a dependency on _unwritten software_.  This commonly happens when work is divided amongst team members, or teams.  

![Sometimes, a module you're writing will depend on unwritten code](images/kite9/software-dependency-unwritten-1.png)

If a component **A** of our project _depends_ on **B** for some kind of processing, you might not be able to complete **A** before writing **B**.   This makes _scheduling_ the project harder, and if component **A** is a risky part of the project, then the chances are you'll want to mitigate risk there first.  

But it also hugely increases [Communication Risk](Communication-Risk) because now you're being asked to communicate with a dependency that doesn't really exist yet, _let alone_ have any documentation.

There are a couple of ways to do this:

- **Standards**:  If component **B** is a database, a queue, mail gateway or something else with a standard interface, then you're in luck.   Write **A** to those standards, and find a cheap, simple implementation to test with.  This gives you time to sort out exactly what implementation of **B** you're going for.  This is not a great long-term solution, because obviously, you're not using the _real_ dependency- you might get surprised when the behaviour of the real component is subtly different.  But it can reduce [Schedule Risk](Schedule-Risk) in the short-term.
- **Coding To Interfaces**:  If standards aren't an option, but the surface area of **B** that **A** uses is quite small and obvious, you can write a small interface for it, and work behind that, using a [Mock](https://en.wikipedia.org/wiki/Mock_object) for **B** while you're waiting for finished component.  Write the interface to cover only what **A** _needs_, rather than everything that **B** _does_ in order to minimize the risk of [Leaky Abstractions](https://en.wikipedia.org/wiki/Leaky_abstraction).

![Coding to a standard on an interface breaks the dependency on unwritten software](images/kite9/software-dependency-unwritten-2.png)

### Conway's Law

If the dependency is being written by another person, another team or in another country, communication risks pile up.  When this happens, you will want to minimize _as much as possible_ the interface complexity, since the more complex the interface, the worse the [Communication Risk](Communication-Risk) will be.  The tendency then is to make the interfaces between teams or people _as simple as possible_, modularizing along these organisational boundaries.

In essence, this is [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law):

> "organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations." — [M. Conway, Conway's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Conway%27s_law)

## 2.  Software Libraries

By choosing a particular software library, we are making a move on the [Risk Landscape](Glossary#Risk-Landscape) in the hope of moving to place with more favourable risks.  Typically, using library code offers a [Schedule Risk](Schedule-Risk) and [Complexity Risk](Complexity-Risk) [Silver Bullet](Silver-Bullets).  But, in return we expect to pick up:
- [Communication Risk](Communication-Risk): because we now have to learn how to communicate with this new dependency.
- [Boundary Risk](Boundary-Risk) - because now are limited to using the functionality provided by this dependency.  We have chosen it over alternatives and changing to something else would be more work and therefore costly.   

But, it's quite possible that we could wind up in a worse place than we started out, by using a library that's out-of-date, riddled with bugs or badly supported.  i.e. Full of new, hidden [Feature Risk](Feature-Risk).  

It's _really easy_ to make bad decisions about which tools to use because the tools don't (generally) advertise their deficiencies.  After all, they don't generally know how _you_ will want to use them.  

### Software Libraries - Hidden Risks

Currently, choosing software dependencies looks like a "bounded rationality"-type process:

> "Bounded rationality is the idea that when individuals make decisions, their rationality is limited by the tractability of the decision problem, the cognitive limitations of their minds, and the time available to make the decision. " - [Bounded Rationality, _Wikipedia_](https://en.wikipedia.org/wiki/Bounded_rationality)

Unfortunately, we know that most decisions _don't_ really get made this way.  We have things like [Confirmation Bias](https://en.wikipedia.org/wiki/Confirmation_bias) (looking for evidence to support a decision you've already made) and [Cognitive Inertia](https://en.wikipedia.org/wiki/Cognitive_inertia) (ignoring evidence that would require you to change your mind) to contend with.   

But, leaving that aside, let's try to build a model of what this decision making process _should_ involve.  Luckily, other authors have already considered the problem of choosing good software libraries, so let's start there.

In the table below, I am summarizing three different sources, which give descriptions of which factors to look for when choosing open-source libraries.  

| Concern                                                                                                                               | <img src="images/generated/coordination-risk.png" width="300"/> | <img src="images/generated/boundary-risk.png" width="300" /> | <img src="images/generated/feature-risk.png" width="300"/>    | <img src="images/generated/communication-risk.png" width="300" /> | Source       | 
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------:|:-------------:|:-------------------:|:------------------:|--------------| 
| Is the project "famous"?                                                                                                                                                                                  |                   | X             | X                   | X                  | [sd2]  [sd3] | 
| Is there evidence of a large user community on user forums or e-mail list archives?                                                                                                                       |                   | X             | X                   | X                  | [sd1]        | 
| Who is developing and maintaining the project? (Track Record)                                                                                                                                             |                   | X             | X                   | X                  | [sd3]        | 
| What are the mechanisms for supporting the software (community support, direct email, dedicated support team), and how long will the support be available? The more support, the better                   |                   |               | X                   | X                  | [sd1]        | 
| Is the API to your liking?                                                                                                                                                                                |                   |               |                     | X                  | [sd2]        | 
| Are there examples of using the software successfully in the manner you want to use it?                                                                                                                   |                   |               | X                   |                    | [sd1]        | 
| Are all the features you need, and think you will need, included?                                                                                                                                         |                   |               | X                   |                    | [sd1]        | 
| How mature is the project?                                                                                                                                                                                |                   |               | X                   |                    | [sd2]        | 
| In respect to the software licence, do you have the right to use the software in its intended production environment, or the right to distribute it along with your software?                             |                   |               | X                   |                    | [sd1]        | 
| What is its deprecation or versioning policy? Does it have one? If not then it may be more unstable and features may disappear without warning between versioning, especially if releases are frequent.   |                   | X             | ![Regression Risk](images/generated/regression-risk.png)     | X                  | [sd1]        | 
| What does the codebase look like?                                                                                                                                                                         |                   |               | ![Implementation Risk](images/generated/implementation-risk.png) |                    | [sd3]        | 
| How frequent are its releases?                                                                                                                                                                            |                   |               | X                   |                    | [sd1] [sd2] [sd3]| 
| How well documented is the project?                                                                                                                                                                       |                   |               |                     | X                  | [sd2]        | 
| Does the software have evidence of a sustainable future (e.g. is there a roadmap)?                                                                                                                        |                   | X             |                     |                    | [sd1]        | 
| Does the software support open standards? If it does, it will be easier to replace the software should it come to the end of its lifetime                                                                 |                   | X             |                     |                    | [sd1]        | 
| Does the version you intend to use come from a forked open-source project, or is it from the original source project? If so, which source is more appropriate?                                            |                   | X             |                     |                    | [sd1]        | 
| Are there any alternatives to the software?                                                                                                                                                               |                   | X             |                     |                    | [sd1]        | 
| Has your community converged on using a particular software package?                                                                                                                                      | X                 |               |                     |                    | [sd1]        | 
| **Totals**                                                                                                                                                                                                | **1**             | **9**         | **15**              | **8**              |              | 

[sd1]: https://www.software.ac.uk/resources/guides/defending-your-code-against-dependency-problems
[sd2]: https://stackoverflow.com/questions/2960371/how-to-choose-an-open-source-library
[sd3]: https://www.forbes.com/sites/forbestechcouncil/2017/07/20/open-source-to-use-or-not-to-use-and-how-to-choose/2/#39e67e445a8c

Some take-aways:

 - [Feature Risk](Feature-Risk) is the biggest concern.   How can you be sure that the project will do what you want it to do ahead of schedule?  Will it contain bugs or missing features?  By looking at factors like _release frequency_ and _size of the community_ you get a good feel for this which is difficult to fake.
 - [Boundary Risk](Boundary-Risk) is also very important.  You are going to have to _live_ with your choices for the duration of the project, so it's worth spending the effort to either ensure that you're not going to regret the decision, or that you can change direction later.
 - Third is [Communication Risk](Communication-Risk):  how well does the project deal with it's users?  If a project is "famous", then it has communicated its usefulness to a wide, appreciative audience.  Avoiding [Communication Risk](Communication-Risk) is also a good reason to pick _tools you are already familiar with_.
  
### Complexity Risk? 
 
One thing that none of the sources consider (at least from the outset) is the [Complexity Risk](Complexity-Risk) of using a solution:    
 - Does it drag in lots of extra dependencies that seem unnecessary for the job in hand?  If so, you could end up in [Dependency Hell](https://en.wikipedia.org/wiki/Dependency_hell), with multiple, conflicting versions of libraries in the project.
 - Do you already have a dependency providing this functionality?  So many times, I've worked on projects that import a _new_ dependency when some existing (perhaps transitive) dependency has _already brought in the functionality_.  For example, there are plenty of libraries for [JSON](https://en.wikipedia.org/wiki/JSON) marshalling, but if I'm also using a web framework the chances are it already has a dependency on one already.
 - Does it contain lots of functionality that isn’t relevant to the task you want it to accomplish?  e.g. Using Java when a shell script would do (on a non-Java project)
 
To give an extreme example of this, I once worked on an application which used [Hazlecast](https://en.wikipedia.org/wiki/Hazelcast) to cache log-in session tokens for a 3rd party datasource.  But, the app is only used once every month, and session IDs can be obtained in milliseconds.   So... why cache them?  Although Hazlecast is an excellent choice for in-memory caching across multiple JVMs, it is a complex piece of software (after all, it does lots of stuff).  By doing this, you have introduced extra dependency risk, cache invalidation risks, networking risks, synchronisation risks and so on, for actually no benefit at all...  Unless, it’s about [CV Building](Agency-Risk#CV_building).  

Sometimes, the amount of complexity _goes up_ when you use a dependency for _good reason_.   For example, in Java, you can use [Java Database Connectivity (JDBC)](https://en.wikipedia.org/wiki/Java_Database_Connectivity) to interface with various types of database.  [Spring Framework](https://en.wikipedia.org/wiki/Spring_Framework) (a popular Java library) provides a thing called a `JDBCTemplate`.  This actually makes your code _more_ complex, and can prove very difficult to debug.  However, it prevents some security issues, handles resource disposal and makes database access more efficient.  None of those are essential to interfacing with the database, but not using them is [Technical Debt](Complexity-Risk#technical-debt) that can bite you later on.  

![Software Libraries Risk Tradeoff](images/kite9/software-dependency-library.png) 

## 3.  Software as a Service

Businesses opt for Software as a Service (SaaS) because:
- It vastly reduces the [Complexity Risk](Complexity-Risk) they face in their organisations. e.g. managing the software or making changes to it.
- Payment is usually based on _usage_, mitigating [Schedule Risk](Schedule-Risk).  e.g. Instead of having to pay for in-house software administrators, they can leave this function to the experts.
- Potentially, you outsource the [Operational Risk](Operational-Risk) to a third party. e.g. ensuring availability, making sure data is secure and so on.

SaaS is now a very convenient way to provide _commercial_ software.   Popular examples of SaaS might be [SalesForce](https://en.wikipedia.org/wiki/Salesforce.com), or [GMail](https://en.wikipedia.org/wiki/Gmail).  Both of which follow the commonly-used [Freemium](https://en.wikipedia.org/wiki/Freemium) model, where the basic service is provided free, but upgrading to a paid account gives extra benefits.  

By providing the software on their own servers, the commercial organisation has a defence against _piracy_, as well as being able to control the [Complexity Risk](Complexity-Risk) of the their environment (e.g. not having to support _every_ version of the software that's ever been released).

The trade-off of SaaS looks a lot like library code:

| Concern                                                                                                                                                               | <img src="images/generated/operational-risk.png" width="300"/> | <img src="images/generated/boundary-risk.png" width="300" /> | <img src="images/generated/feature-risk.png" width="300"/>    | <img src="images/generated/communication-risk.png" width="300" /> | <img src="images/generated/schedule-risk.png" width="300" /> | Source       | 
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------:|:-------------:|:-------------------:|:------------------:|:------------------:|---------------| 
|How does the support process hold up in your trial runs?                                                                                                               |X                  |               |                     |                    |                    | [sd4]         |
|What's the backup plan? _(It's vital that you understand how your data are protected, and what redundancies are available should your SaaS provider have an outage.)_  |X                  |X              |                     |                    |                    | [sd4] [sd5]   |
|What happens to your data if you sever ties with the vendor?                                                                                                           |                   |X              |                     |                    |                    | [sd4]         |
|Are your current and future user environments supported? _(e.g. Browser Compatibility)_                                                                                |                   |X              |X                    |                    |                    | [sd4]         |
|Can you test in parallel? _(i.e. run existing and new SaaS system together)_                                                                                           |                   |               |X                    |                    |                    | [sd4]         |
|How does functionality compare to maturity?                                                                                                                            |                   |               |X                    |                    |                    | [sd4]         |
|What's the pricing model? _(What might cause a price increase?)_                                                                                                       |                   |X              |                     |                    |X                   | [sd4]         |
|What migration and training assistance options are available?                                                                                                          |                   |               |                     |X                   |                    | [sd4]         |
|What integration options are available?  _(Are there APIs you can use to get at your data?)_                                                                           |                   |               |                     |X                   |                    | [sd5]         |
|Security _(What standards and controls are in place?)_                                                                                                                 |X                  |               |                     |                    |                    | [sd5]         |                       
|Service Level Agreements (SLAs):  _(What are the guarantees?  What happens when the service levels are not met?)_                                                      |X                  |               |                     |                    |                    | [sd5]         |
|Global Reach.  _(Is the service usable everywhere you need it?)_                                                                                                       |X                  |               |                     |                    |                    | [sd5]         |
|**Totals**                                                                                                                                                             |**5**              |**4**          |**3**                |**2**               |**1**               |               |

[sd4]: https://www.zdnet.com/article/saas-checklist-nine-factors-to-consider-when-selecting-a-vendor/
[sd5]: http://sandhill.com/article/how-to-evaluate-saas-vendors-five-key-considerations/

tbd.  diagram of how this works out: [feature risk], [communication risk]() being mitigated, but [Protocol Complexity Risk], [Fit Risk], [Dead End/Boundary Risk], [Costs?], [Red Queen Risk].
internal vs external risks.

### A Matrix of Options

These are not the only ways to provide a dependency, and there's clearly no one _right_ way.   Although here we have looked just at "Commercial Saas" and "Free Open Source", in reality, these are just points in a two-dimensional space involving _Pricing_ and _Hosting_.   

Let's expand this view slightly and look at where different pieces of software sit on these axes:

| Pricing                        	|                    On Premises 3rd Party                                                                             | In Cloud / Browser 3rd Party                           	                                     | Risk Profile                                                                                                    |
|--------------------------------	|-----------------------------------------------------------                                                           |--------------------------------------------------------	                                     |------------------------------------------------------------------------------	|
| Free                           	| **OSS Libraries** <br /><ul><li>Tools</li><li>Java</li><li>Firefox</li>Linux</li><li>Programming Languages</li></ul> | **Freemium**<ul><li>Splunk</li><li>Spotify</li><li>GitHub</li></ul>                             | *<ul><li>Low Boundary Risk Drives Adoption</li><li>Value In Network Effect</li></ul>*                         	|
| Advertising Supported          	| **Commercial Software**<ul><li>Lots of phone apps</li><li>e.g. Angry Birds</li></ul>                                 | **Commercial SaaS** <ul><li>Google Search</li><li>Gmail</li><li>Twitter</li></ul>               | *<ul><li>Low Boundary Risk</li><li>High Availability Of Substitutes</li></ul>*                            	|
| Monthly / Metered Subscription 	| **Commercial Software**<ul><li>Oracle Databases</li><li>Windows</li><li>Office</li></ul>                             | **Commercial SaaS** <ul><li>Office 365</li><li>SalesForce</li><li>Amazon Web Services</li></ul> | *Easy arguments for reduced: <ul><li>Complexity Risk</li><li>Communication Risk</li><li>Coordination Risk</li></ul>* <br /> *Higher Boundary Risk*	|
|                                    |                                                                                                                      | *Transferred: <ul><li>Operational Risk</li></ul>*                                               |                                                                                 |

- Where there is value in the [Network Effect](), it's often a sign that the software will be free, or open source:  programming languages and linux are the obvious examples of this.  Bugs are easier to find when there are lots of eyes looking, and learning the skill to use the software has less [Boundary Risk](Boundary-Risk) if you know you'll be able to use it at any point in the future.
- At the other end of the spectrum, clients will happily pay for software if it clearly **reduces complexity**.  Take [Amazon Web Services].  The essential trade here is that you substitute the complexity of hosting and maintaining various pieces of software, in exchange for monthly payments ([Funding Risk](Schedule-Risk#Funding-Risk) for you).  Since AWS services are specific to Amazon, there is significant [Boundary Risk]() in choosing this option.
- In the middle there are lots of **substitute options** and therefore high competition.  Because of this, prices are pushed towards zero, adn and therefore often advertising is used to monetarize the product.  [Angry Birds]() is a classic example:  initially, it had demo and paid versions, however [Rovio]() discovered there was much more money to be made through advertising than from the [paid-for app]().

tbd.  include diagram


### Risks Mitigated

So far, we've considered only how [Software Dependencies](Software-Dependency-Risk) can alleviate complexity from our codebases.  But with [Software Dependencies](Software-Dependency-Risk) we can construct dependency networks to give us all kinds of features and mitigate all kinds of risk.  

Let's look at some:

|Risk                                                 |Examples of Software Mitigating That Risk                                |
|-----------------------------------------------------|-------------------------------------------------------------------------|
|[Coordination Risk](Coordination-Risk)               |Calendar tools,  Bug Tracking, Distributed Databases                     |
|[Map-And-Territory-Risk](Map-And-Territory-Risk)     |The Internet, generally.  Excel, Google, "Big Data", Reporting tools     |
|[Schedule-Risk](Schedule-Risk)                       |Planning Software, Project Mangement Software                            |
|[Communication-Risk](Communication-Risk)             |Email, Chat tools, CRM tools like SalesForce, Forums, Twitter            |
|[Process-Risk](Process-Risk)                         |Reporting tools, online forms, process tracking tools                    |
|[Agency-Risk](Agency-Risk)                           |Auditing tools, transaction logs                                         |  
|[Operational-Risk](Operational-Risk)                 |Support tools like ZenDesk, Grafana, InfluxDB, Geneos                    |
|[Feature-Risk](Feature-Risk)                         |Every piece of software you use!                                         |

Often, the feature that you're looking for in a piece of software is to mitigate some kind of risk.  I might start using [WhatsApp](https://en.wikipedia.org/wiki/WhatsApp) for example, because I want to be able to send my friends photos and text messages.  However, it's likely that those same features are going to allow us to mitigate [Communication-Risk](Communication-Risk) and [Coordination Risk](Coordination-Risk) when we're next trying to meet up.   
  

tbd.  dependency diagram, showing complexity, feature, schedule risk on the left, feature risk, boundary risk, communication risk on the right.

So, adopting any library is a trade-off:   tbd. bring it back to ergonomics


### Moving On

_[Boundary Risk](Boundary-Risk)_ keeps coming up as a concern, both in [SaaS](#software-as-a-service) and [Software Libraries](#software-libraries).  Let's take a closer look in the [next section](Boundary-Risk).

