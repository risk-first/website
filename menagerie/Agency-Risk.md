![For Review](images/state/for-review.png)

[Coordinating a team](Coordination-Risk) is difficult enough when everyone on the team has a single [Goal](Glossary#Goal-In-Mind). <!-- tweet-end --> But, people have their own goals, too.  Sometimes, their goals harmlessly co-exist with the team's goal, but other times they don't.

This is [Agency Risk](Agency-Risk).   This term comes from finance and refers to the situation where you (the "principal") entrust your money to someone (the "agent") in order to invest it, but they don't necessarily have your best interests at heart.  They may instead elect to invest the money in ways that help them, or outright steal it.  

> "This dilemma exists in circumstances where agents are motivated to act in their own best interests, which are contrary to those of their principals, and is an example of moral hazard." - [Principal-Agent Problem, _Wikipedia_](https://en.wikipedia.org/wiki/Principal–agent_problem)

The less visibility you have of the agent's activities, the bigger the risk.  However, the whole point of giving the money to the agent was that you would have to spend less time and effort managing it.  

![Mitigating Agency Risk Through Monitoring](images/generated/risks/agency/agency-risk.png)

[Agency Risk](Agency-Risk) clearly includes the behaviour of [Bad Actors](https://en.wiktionary.org/wiki/bad_actor).  But, that's too strict a definition:   <!-- tweet-start -->In software development, we're not lending each other money, but we are being paid by the project sponsor, so they are assuming [Agency Risk](Agency-Risk) by employing us.   <!-- tweet-end -->

As we saw in the previous section on [Process Risk](Process-Risk), <!-- tweet-start -->[Agency Risk](Agency-Risk) doesn't just apply to people: it can apply to _running software_ or _whole teams_  <!-- tweet-end -->- anything which has agency over it's actions.  

> "Agency is the capacity of an actor to act in a given environment... Agency may either be classified as unconscious, involuntary behaviour, or purposeful, goal directed activity (intentional action). " - [Agency, _Wikipedia_](https://en.wikipedia.org/wiki/Agency_(philosophy)) 

Let's look at some examples of borderline [Agency Risk](Agency-Risk) situations, in order to sketch out where the domain of this risk lies.

## Personal Lives

We can't (shouldn't) expect people on a project to sacrifice their personal lives for the success of the project, right?  <!-- tweet-end --> Except that ["Crunch Time"](https://en.wikipedia.org/wiki/Video_game_developer#"Crunch_time") is exactly how some software companies work:

> "Game development... requires long working hours and dedication from their employees.  Some video game developers (such as Electronic Arts) have been accused of the excessive invocation of "crunch time".  "Crunch time" is the point at which the team is thought to be failing to achieve milestones needed to launch a game on schedule. " - [Crunch Time, _Wikipedia_](https://en.wikipedia.org/wiki/Video_game_developer#"Crunch_time")

People taking time off, going to funerals, looking after sick relatives and so on are all acceptable forms of [Agency Risk](Agency-Risk). <!-- tweet-end --> They are the [Attendant Risk](Glossary#attendant-risk) of having _staff_ rather than _slaves_.

## The Hero

> "The one who stays later than the others is a hero. " - [Hero Culture, _Ward's Wiki_](http://wiki.c2.com/?HeroCulture) <!-- tweet-end -->

Heroes put in more hours and try to rescue projects single-handedly, often cutting corners like team communication and process in order to get there.   

Sometimes, projects don't get done without heroes.  But other times, the hero has an alternative agenda than just getting the project done:

- A need for control, and for their own vision.
- A preference to work alone.
- A desire for recognition and acclaim from colleagues.
- For the job security of being a [Key Person](https://en.wikipedia.org/wiki/Key_person_insurance).

A team _can_ make use of heroism, but it's a double-edged sword.  The hero can becomes [a bottleneck](Coordination-Risk) to work getting done, and because want to solve all the problems themselves, they [under-communicate](Communication-Risk).  

## Consultancies

When you work with an external consultancy, there is *always* more [Agency Risk](Agency-Risk) than with a direct employee.  This is because as well as your goals and the employee's goals, there is also the consultancy's goals.  

This is a good argument for avoiding consultancies, but sometimes the technical expertise they bring can outweigh this risk.

## CV Building

CV Building is when someone decides that the project needs a dose of "Some Technology X", but in actual fact, this is either completely unhelpful to the project (incurring large amounts of [Complexity Risk](Complexity-Risk)), or merely a poor alternative to something else.  

It's very easy to spot CV building:  look for choices of technology that are incongruently complex compared to the problem they solve, and then challenge by suggesting a simpler alternative.

## Devil Makes Work

Heroes can be useful, but _underused_ project members are a nightmare.   The problem is, people who are not fully occupied begin to worry that actually, the team would be better off without them, and then wonder if their jobs are at risk.

Even if they don't worry about their jobs, sometimes they need ways to stave off _boredom_.  The solution to this is "busy-work":  finding tasks that, at first sight, look useful, and then delivering them in an over-elaborate way ([Gold Plating](https://en.wikipedia.org/wiki/Gold_plating_(software_engineering))) that'll keep them occupied.  This will leave you with more [Complexity Risk](Complexity-Risk) than you had in the first place.


## Pet Projects

> A project, activity or goal pursued as a personal favourite, rather than because it is generally accepted as necessary or important.  - [Pet Project, _Wiktionary_](https://en.wiktionary.org/wiki/pet_project)

Sometimes, budget-holders have projects they value more than others without reference to the value placed on them by the business.  Perhaps the project has a goal that aligns closely with the budget holder's passions, or its related to work they were previously responsible for.  

Working on a pet project usually means you get lots of attention (and more than enough budget), but it can fall apart very quickly under scrutiny.

## Morale Risk

> Morale, also known as Esprit de Corps is the capacity of a group's members to retain belief in an institution or goal, particularly in the face of opposition or hardship - [Morale, _Wikipedia_](https://en.wikipedia.org/wiki/Morale) 

Sometimes, the morale of the team or individuals within it dips, leading to lack of motivation.  [Morale Risk](Agency-Risk#morale-risk) is a kind of [Agency Risk](Agency-Risk) because it really means that a team member or the whole team isn't committed to the [Goal](Glossary#Goal-In-Mind), may decide their efforts are best spent elsewhere.  [Morale Risk](Agency-Risk#morale-risk) might be caused by:

 - **External Factors**:  Perhaps the employees' dog has died, or they're simply tired of the industry, or are not feeling challenged.
 - **The goal feels unachievable**:  in this case, people won't commit their full effort to it.  This might be due to to a difference in the evaluation of the risks on the project between the team members and the leader.  In military science, a second meaning of morale is how well supplied and equipped a unit is.  This would also seem like a useful reference point for IT projects.  If teams are under-staffed or under-equipped, this will impact on motivation too.
 - **The goal isn't sufficiently worthy**, or the team doesn't feel sufficiently valued.

## Software Processes And Teams

There is significant [Agency Risk](Agency-Risk) in running software _at all_.  Since computer systems follow rules we set for them, we shouldn't be surprised when those rules have exceptions that lead to disaster.  For example:

 - A process continually writing log files until the disks fill up, crashing the system.
 - Bugs causing data to get corrupted, causing financial loss.
 - Malware infecting a system, and sending your passwords and data to undesirables.

[Agency Risk](Agency-Risk) applies to _whole teams_ too.  It's perfectly possible that a team within an organisation develops [Goals](Glossary#Goal-In-Mind) that don't align with those of the overall organisation.  For example:

 - A team introduces excessive [Bureaucracy](Process-Risk#bureaucracy-risk) in order to avoid work it doesn't like.
 - A team gets obsessed with a particular technology, or their own internal process improvement, at the expense of delivering business value.
 - A marginalised team forces their services on other teams in the name of "consistency".   (This can happen a lot with "Architecture", "Branding" and "Testing" teams, sometimes for the better, sometimes for the worse.)

## Security Risk

As shown in the above diagram, to mitigate [Agency Risk](Agency-Risk) _within_ a system, we can apply monitoring and goal-alignment.  Where the [Agency Risk](Agency-Risk) is from an unwanted actors _outside_ the system, we can apply security.  That is, ensuring that the environment we work in is _safe_ for the good actors to operate in, by keeping out the bad actors.

Interestingly, security is handled in very similar ways in all kinds of systems, whether biological, human or organisational.  

- **Walls**: defences _around_ the complex system, to protect it's parts from the external environment.  
- **Doors**: ways to get _in_ and _out_ of the complex system, possibly with _locks_.
- **Guards**: to make sure only the right things go in and out.  (i.e. to try and keep out _Bad Actors_).
- **Police**: to defend from _within_ the system, against internal [Agency Risk](Agency-Risk).
- **Subterfuge**: hiding, camouflage, disguises, pretending to be something else. 

These work various levels in our own bodies:  our _cells_ have _cell walls_ around them, and _cell membranes_ that act as the guards to allow things in and out.  Our _bodies_ have _skin_ to keep the world out, and we have _mouths_, _eyes_, _pores_ and so on to allow things in and out.  We have an _immune system_ to act as the police.

Our societies work in similar ways: in medieval times, a city would have walls, guards and doors to keep out intruders.  Nowadays, we have customs control, borders and passports.

We're waking up to the realisation that our software systems need to work the same way:  we have [Firewalls](https://en.wikipedia.org/wiki/Firewall_(computing)) to protect our organisations, we lock down _ports_ on servers to ensure there are the minimum number of doors to guard and we _police_ the servers ourselves with monitoring tools and anti-virus software and we _guard_ access using passwords and other identification approaches. 

Both [Security Risk](Agency-Risk#security-risk) and [Agency Risk](Agency-Risk) thrive on complexity.  The more complex the systems we create, the more opportunities there are for bad actors to insert themselves and extract their own value.   [Security Risk](Agency-Risk#security-risk) is also a major determinant of [Operational Risk](Operational-Risk), which we will review in a couple of sections time.

## It's About Goals 

We've looked here at some illustrative examples of [Agency Risk](Agency-Risk).  But as we stated at the beginning, [Agency Risk](Agency-Risk) at any level comes down to differences of [Goals](Glossary#goal-in-mind) between the different agents, whether they are _people_, _teams_ or _software_.  
 
So, having looked at agents _individually_, it's time to look more closely at [Goals](Glossary#goal-in-mind), and the [Attendant Risks](Glossary#attendant-risk) when aligning them amongst multiple agents.   

On to [Coordination Risk](Coordination-Risk)...


 