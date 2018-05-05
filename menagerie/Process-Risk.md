**Process Risk**, as we will see, is the risk you take on whenever you embark on a process.   This is the final part of our analysis of different [Dependency Risks](Dependency-Risk), so at the end of this section we're going to summarise what we've learned about [Dependency Risk](Dependency-Risk) so far. 

But first, what exactly is a process?    

tbd.  definition

## Elaboration

In the software development world, and the business world generally, processes usually involve _forms_.  If you're filling out a form (whether on paper or on a computer) then you're involved in a process of some sort, whether an "Account Registration" process, "Loan Application" process or "Consumer Satisfaction Survey" process.  

Later in this section we'll look at 

## The Purpose Of Process

Process exists to mitigate other kinds of risk, and for this reason, we'll be looking at them again in [Practices](Process).  In this section, we'll look mainly at how you can deal with **Process Risk** where you are a client of the process.  However, in the later section we'll look at how you can use process design to your advantage mitigating risk on your own project.

But until we get there, let's look at some examples of how process can mitigate other risks:

 - [Coordination Risk](Coordination-Risk):   You can often use process to help people coordinate.  For example, a production Line is a process where work being done by one person is pushed to the next person when it's done.  A meeting booking process ensures that people will all attend a meeting together at the same place and time, and that a room is available for it. 
 - [Dependency Risk](Dependency-Risk): You can use processes to make dependencies explicit and mitigate dependency risk.  For example, a process for hiring a car will make sure there is a car available at the time you need it.  Alternatively, if we're processing a loan application, we might need evidence of income or bank statements.  We can push this [Dependency Risk] onto the person asking for the loan, by making it part of the process and not accepting the application until this has been provided.
 - [Complexity Risk](Complexity-Risk): Working within a process can reduce the amount of Complexity you have to deal with.  We accept that processes are going to slow us down, but we appreciate the reduction in risk this brings.  (They allow us to trade Complexity for schedule risk).  For example, setting up a server might be complex, but filling in a form to do the job might simplify things.  Clearly, the complexity hasn't gone away, but it's hidden within the process.  Process therefore can provide [Abstraction].
 - **Operational Risk**:  Operational Risk is the risk of people not doing their job properly (tbd).  But, by having a process, (and asking, did this person follow the process?) you can draw a distinction between a process failure and a personnel failure.  For example, making a loan to a money launderer _could_ be a failure of the loan agent.   But, if they followed the _process_, it's a failure of the Process itself. 

## Evolution Of Business Process

Before we get to examining different *Process Risks*, let's consider how processes form.  Specifically, we're going to look at *Business Process*:

tbd

Business Processes often arise in response to an unmet need within an organisation.  And, as we said above, they are usually there to mitigate other risks.  Let's look at an example lifecycle of how that can happen:

tbd image.

1.  Person `B` in a company starts doing `A`.  A is really useful!   B gets busy.  No one cares.  But then, B goes on holiday.  A doesn't get done, and people now care:  the [Dependency Risk](Dependency-Risk) is apparent. 

tbd

2.  Either, B co-opts other people to help, gets given a team (T), or someone else forms a team T containing B to get the job done "properly".  T has control of A (it might be a resource, some source of complexity, whatever).  However, it needs to supply the company with A reliably and responsibly, otherwise there will be problems.  They can't simply sit on the resource and do nothing, but at the same time, so they try and please all of their clients as far as possible.  This is a good deal for their clients, but they end up absorbing a lot of risk. 

tbd

3. T organises bureaucratically, so that there is a controlled process (P) by which A can get done.  Like a cell, they have arranged a protective barrier around themselves, the strength of which depends on the power conferred to them by control of A.  P probably involves filling in a form (or following some other [Protocol](Communication-Risk)).   They can now deal with requests on a first-come-first-served basis: [Resource Risk] and [Dependency Risk] are externalized.  

tbd

4.  But, there are abuses of A: people either misuse it, or use it too much.  People do things in the wrong order.  T reacts and sets up sign-off, authorization or monetary barriers around B, increasing the bureauratic load involved in using A.  But, also by requiring these things, they move risk *out of* their team. 

tbd
 
5.  There are further abuses of A:  bureaucratic load increases to match, increasing the amount of _process_ to use A.  This corresponds to greater **Process Risk** for clients of T.

tbd

6.  Person C, who has experience working with team T acts as a middleman for customers requiring some variant of A.  They are able to help navigate the bureaucratic process (deal with Process Risk).  The cycle potentially starts again, except with process risk being dealt with by someone else. 

In each step, you can see how the organisation evolves to mitigate risk around the use (and misuse) of `A`:  First, [Dependency Risk](Dependency-Risk), then [Coordination Risk](Coordination-Risk), then [Dependency Risk](Dependency-Risk) and finally, the **Process Risk** of the process that was created to mitigate everything else.  This is an example of _Process following Strategy_: 

> In this conception, you can see how the structure of an organisation (the teams and processes within it, the heirarchy of control) will 'evolve' from the resources of the organisation and the strategy it pursues.  Processes evolve to meet the needs of the organisation, 

- [MInzberg, strategy safari]


In each step, the actors involved have been acting in good faith:   they are working to mitigate risk in the organisation.  The **Process Risk** that accretes along the way is an _unintended consequence_:  There is no guarantee that the process that arises will be humane and intuitive.  Many organisational processes end up being baroque or Kafkaesque, forcing unintuitive contortions on their users.  Dealing with complex processes is a [Communication Risk](Communication-Risk) because you have to translate your requirements into the language of the process.

But [Parkinson's Law] takes this one step further:  the human actors shaping the organisation will abuse their positions of power in order to further their own careers (this is [Agency Risk](Agency-Risk), which we will come to in a future section):

tbd - parkinson's law

## An Example - Release Process

For many years I have worked in the Finance Industry, and it's given me time to observe how, across an entire industry, process can evolve, both in response to regulatory pressure but also because of organisational maturity, and mitigating risks:

1. Initially, I could release software by logging onto the production accounts with a password that everyone knew, and deploy software or change data in the database.  
2. The first issue with this is bad actors.  How could you know that the numbers weren't being altered in the databases? Production auditing came in so that at least you could tell _who was changing what_, in order to point the blame later.
3. But, there was still plenty of scope for deliberate or accidental damage.  I personally managed to wipe production data on one occasion by mistaking it for a development environment. Eventually, passwords were taken out of the hands of developers and you needed approval to "break glass" to get onto production.  
4. Change Requests were introduced.  This is another approval process which asks you to describe what you want to change in production, and why you want to change it.  In most places, this was quite an onerous process, so the unintended consequence was that release cadence was reduced.
5. The change request software is generally awful, making the job of raising change requests tedious and time-consuming.  Therefore, developers would _automate_ the processes for release, sometimes including the process to write the change request.  This allowed them to improve release cadence, at the expense of owning more code.
6. Auditors didn't like the fact that this automation existed, because effectively, that meant that developers could get access to production with the press of a button, effectively taking you back to step 1.   So auditing of Change Requests had to happen.

... and so on.  tbd.  

## Process Risks

**Process Risk**, then, is a type of [Dependency Risk](Dependency Risk), where you are relying on a process.  In a way, it's no different from any other kind of [Dependency Risk].   But [Process Risk] manifests itself in fairly predictable ways:

 - [Reliability Risk](Dependency-Risk): If _people_ are part of the process, there's the chance that they forget to follow the process itself, and miss steps or forget your request completely.  The reliability is related to the amount of [Complexity Risk] the process is absorbing.
 - [Visibility Risk]: Usually, processes (like other dependencies) trade [Complexity Risk] for visibility:  it's often not possible to see how far along a process is to completion.  Sometimes, you can do this to an extent.  For example, when I send a package for delivery, I can see roughly how far it's got on the tracking website.  But, this is still less-than-complete information, and is a representation of reality.    
 - Process Fit Risk/ [Dead-End Risk](Dependency-Risk): You have to be careful to match the process to the outcome you want.  Much like choosing a [Software Dependency](Software-Dependency-Risk), initiating a process has no guarantee that your efforts won't be wasted and you'll be back where you started from.  The chances of this happening increase as you get further from the standard use-case for the process, and the sunk cost increases with the length of time the process takes to report back.
 - [Agency Risk](Agency-Risk): Due to Parkinson's Law, above.
	
## Operational Risk

When processes fail, this is called *Operational Risk*:

tbd - Wikipedia definition

This is a very specific name for [Reliability Risk] with regard to processes.  In the UK each year, X number of people are killed in car accidents.  If you regard driving a car from A to B as a process, then you could say that car accidents are [Operational Risk].  Why do we tolerate such costly operational risk in the UK.  Could it be reduced?  Well, yes.  There are lots of ways.  One way is that we could just reduce the speed limit.  
 
It is interesting that we _don't_ do that:  although we know the driving process fails, and fails in a way that is costly to human lives, as a society we value the freedom, the economic efficiency and time savings that come from not mitigating this operational risk.  Changing the speed limit would have it's own risks, of course: there would be a complicated transition to manage.   However, if ten times as many people were killed in car accidents, and it was shown that reducing the speed limit would help, maybe it would be done.  The [Operational Risk] would outweigh the [Schedule Risk](Schedule Risk).

The point of this is that we _accept_ [Operational Risk] as we go.  However, if opportunities rise to mitigate it, which don't leave us with a net risk increase elsewhere, we'll make those improvements.      

## Feedback Loops

[Operational Risk] is usually incurred for outliers: processes tend to work well for the common cases, because *practice makes perfect*.  Processes are really tested when unusual situations occur.  Having mechanisms to deal with edge-cases can incur [Complexity Risk]Complexity-Risk), so often it's better to try and have clear boundaries of what is "in" and "out" of the process' domain.

Sometimes, processes are _not_ used commonly.  How can we rely on them anyway?  Usually, the answer is to build in extra feedback loops anyway:

- Testing that backups work, even when no backup is needed.
- Running through a disaster recovery scenario at the weekend.
- Increasing the release cadence, so that we practice the release process more.

The feedback loops allow us to perform [Retrospectives and Reviews](Review) to improve our processes.

## Sign-Offs

Often, Processes will include sign-off steps.  The Sign-Off is an interesting mechanism:  by signing off on something for the business, people are usually in some part staking their reputation on something being right.  Therefore, you would expect that sign-off involves a lot of [Agency Risk](Agency-Risk):  people don't want to expose themselves in career-limiting ways.  Therefore, the bigger the risk they are being asked to swallow, the more cumbersome and protracted the sign off process.  Often, Sign Offs boil down to a balance of risk for the signer:  on the one hand, personal risk from signing off, on the other, the risk of upsetting the rest of the staff waiting for the sign-off, and the [Dead End Risk] of all the effort gone into getting the sign off if they don't.  

This is a nasty situation, but there are a couple of ways to de-risk this: 
 - break signoffs down into bite-size chunks of risk that are acceptable to those doing the sign-off.  
 - Agree far-in-advance the sign-off criteria.  As discussed in [Risk Theory](Risk-Theory), people have a habit of heavily discounting future risk, and it's much easier to get agreement on the criteria than it is to get the sign-off. 

## Dependencies - A Quick Review

Dependency of any kind is a choice in which you are trying to choosing a position of lower [Attendant Risk](Risk) than you would have without the dependency. 

So, we've looked at different types of dependencies.   


|What does the risk look like?   |Software Dependency     |Process             |Event                 |Person                         |
|----------------------|----------------------------------|--------------------|----------------------|-------------------------------|
|[Dependency Risk][1]  |[Software Dependency Risk][2]     |[Process Risk][3]   |[Deadline Risk][4]    |[Key-Man Risk][5]              |
|----------------------|----------------------------------|--------------------|----------------------|-------------------------------|
|Risks Mitigated       |[Complexity Risk][6] from having  |[Complexity Risk][6]|[Coordination Risk][7]|[Resource Coordination Risk][8]| 
|                      |to do the process yourself        |                    |                      |                               |
|----------------------|----------------------------------|--------------------|----------------------|-------------------------------|
|[Communication Risk]  |Understanding the API, using it   |Filling in forms    |Communicating the     |- Being misunderstood          |
|                      |                                  |wrongly.            |right place and time  |- Instructions not followed    |
|                      |                                  |                    |to everyone           |                               |
|----------------------|----------------------------------|--------------------|----------------------|-------------------------------|
|[Invisibility Risk]   |Understanding the API, but not the|You don't know how  |- Will people show up?|                               |
|                      |implementation.    Debugging      |far along the work  |- Will it be what you |                               |
|                      |is harder.                        |might be            | expect?              |                               |
|----------------------|----------------------------------|--------------------|----------------------|-------------------------------|
|[Feature Risk]        |The product might not work how you|Might not           |Is this:              |Do the available staff have    |
|                      |expected.  If features are missing|cater to your exact |-What you want        |the skills you need?           |
|                      |you might be stuck.               |use case            |-When you want it?    |                               |
|----------------------|----------------------------------|--------------------|----------------------|-------------------------------|
|                      |                                  |                      |                    |                          |
|[Dead End Risk]       |                                  |                      |                    |                          |
|                      |                                  |                      |                    |                          |

[1]: (Dependency-Risk)
[2]: (Software-Dependency-Risk)
[3]: (Process-Risk)
[4]: (Deadline-Risk)


