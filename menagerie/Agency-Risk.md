![For Review](images/state/for-review.png)

[Coordinating a team](Coordination-Risk) is difficult enough when everyone on the team has a single [Goal](Glossary#Goal-In-Mind).  But, people have their own goals, too.  Sometimes, the goals harmlessly co-exist with the team's goal, but other times they don't.

![Agency Risk](images/generated/agency-risk.png)

This is [Agency Risk](Agency-Risk).   This term comes from finance and refers to the situation where you (the "principal") entrust your money to someone (the "agent") in order to invest it, but they don't necessarily have your best interests at heart.  They may instead elect to invest the money in ways that help them, or outright steal it.  

> "This dilemma exists in circumstances where agents are motivated to act in their own best interests, which are contrary to those of their principals, and is an example of moral hazard." - [Principal-Agent Problem, _Wikipedia_](https://en.wikipedia.org/wiki/Principal–agent_problem)

The less visibility you have of the agent's activities, the bigger the risk.  However, the whole _point_ of giving the money to the agent was that you would have to spend less time and effort managing it.  

![Mitigating Agency Risk Through Monitoring](images/kite9/agency-risk-monitoring.png)

[Agency Risk](Agency-Risk) clearly includes the behaviour of [Bad Actors](https://en.wiktionary.org/wiki/bad_actor).  But, this is a very strict definition of [Agency Risk](Agency-Risk).   In software development, we're not lending each other money, but we are being paid by the project sponsor, so they are assuming [Agency Risk](Agency-Risk) by employing us.   

As we saw in the previous section on [Process Risk](Process-Risk), [Agency Risk](Agency-Risk) doesn't just apply to people: it can apply to _running software_ or _whole teams_.  

Let's look at some examples of borderline [Agency Risk](Agency-Risk) situations, in order to sketch out where the domain of this risk lies.

## Personal Lives

We can't (shouldn't) expect people on a project to sacrifice their personal lives for the success of the project, right?  Except that ["Crunch Time"](https://en.wikipedia.org/wiki/Video_game_developer#"Crunch_time") is exactly how some software companies work:

> "Game development... requires long working hours and dedication from their employees.  Some video game developers (such as Electronic Arts) have been accused of the excessive invocation of "crunch time".  "Crunch time" is the point at which the team is thought to be failing to achieve milestones needed to launch a game on schedule. " - [Crunch Time, _Wikipedia_](https://en.wikipedia.org/wiki/Video_game_developer#"Crunch_time")

People taking time off, going to funerals, looking after sick relatives and so on are all [Agency Risk](Agency-Risk), but they should be _accepted_ on the project.  They are a necessary [Attendant Risk](Glossary#attendant-risk) of having _staff_ rather than _slaves_.

## The Hero

> "The one who stays later than the others is a hero. " - [Hero Culture, _Ward's Wiki_](http://wiki.c2.com/?HeroCulture)

Conversely, Heroes put in more hours and try to rescue projects single-handedly, often cutting corners like team communication and process in order to get there.   

Sometimes, projects don't get done without heroes.  But other times, the hero has an alternative agenda than just getting the project done:

- A need for control, and for their own vision.
- A preference to work alone.
- A desire for recognition and acclaim from colleagues.
- For the job security of being a [Key Man](https://en.wikipedia.org/wiki/Key_person_insurance).

A team _can_ make use of heroism, but it's a double-edged sword.  The hero can becomes [a bottleneck](Coordination-Risk) to work getting done, and because want to solve all the problems themselves, they [under-communicate](Communication-Risk).  

## Consultancies

When you work with an external consultancy, there is *always* more [Agency Risk](Agency-Risk) than with a direct employee.  This is because as well as your goals and the employee's goals, there is also the consultancy's goals.  

This is a good argument for not using consultancies, but sometimes the technical expertise they bring can outweigh this risk.

Also, try to look for _hungry_ consultancies:  if you being a happy client is valuable to them, they will work at a discount (either working cheaper, harder or longer or more carefully) as a result.

## CV Building

This is when someone decides that the project needs a dose of "Some Technology X", but in actual fact, this is either completely unhelpful to the project (incurring large amounts of [Complexity Risk](Complexity-Risk)), or merely less useful than something else.  

It's very easy to spot CV building:  look for choices of technology that are incongruently complex compared to the problem they solve, and then challenge by suggesting a simpler alternative.    

## Devil Makes Work

Heroes can be useful, but _underused_ project members are a nightmare.   The problem is, people who are not fully occupied begin to worry that actually, the team would be better off without them, and then wonder if their jobs are at risk.

The solution to this is "busy-work":  finding tasks that, at first sight, look useful, and then delivering them in an over-elaborate way ([Gold Plating](https://en.wikipedia.org/wiki/Gold_plating_(software_engineering))) that'll keep them occupied.  This will leave you with more [Complexity Risk](Complexity-Risk) than you had in the first place.

Even if they don't worry about their jobs, doing this is a way to stave off _boredom_.

## Pet Projects

> A project, activity or goal pursued as a personal favourite, rather than because it is generally accepted as necessary or important.  - [Pet Project, _Wiktionary_](https://en.wiktionary.org/wiki/pet_project)

Sometimes, budget-holders have projects they value more than others without reference to the value placed on them by the business.  Perhaps the project has a goal that aligns closely with the budget holder's passions, or its related to work they were previously responsible for.  

Working on a pet project usually means you get lots of attention (and more than enough budget), but due to [Map and Territory Risk](Map-And-Territory-Risk), it can fall apart very quickly under scrutiny.

## Morale Risk

> Morale, also known as Esprit de Corps is the capacity of a group's members to retain belief in an institution or goal, particularly in the face of opposition or hardship - [Morale, _Wikipedia_](https://en.wikipedia.org/wiki/Morale) 

![Morale Risk](images/generated/morale-risk.png)

Sometimes, the morale of the team or individuals within it dips, leading to lack of motivation.  [Morale Risk](Agency-Risk#morale-risk) is a kind of [Agency Risk](Agency-Risk) because it really means that a team member or the whole team isn't committed to the [Goal](Glossary#Goal-In-Mind), may decide their efforts are best spent elsewhere.  [Morale Risk](Agency-Risk#morale-risk) might be caused by:

 - External factors:  Perhaps the employees' dog has died, or they're simply tired of the industry, or are not feeling challenged.
 - If the team don't believe a goal is achievable, they won't commit their full effort to it.  This might be due to to a difference in the evaluation of the risks on the project between the team members and the leader.
 - If the goal isn't considered sufficiently worthy, or the team isn't sufficiently valued.
 - In military science, a second meaning of morale is how well supplied and equipped a unit is.  This would also seem like a useful reference point for IT projects.  If teams are under-staffed or under-equipped, this will impact on motivation too.

## Hubris & Ego

It seems strange that humans are over-confident.  You would have thought that evolution would drive out this trait but apparently it's not so:

> "Now, new computer simulations show that a false sense of optimism, whether when deciding to go to war or investing in a new stock, can often improve your chances of winning." - [Evolution of Narcissism, _National Geographic_](https://news.nationalgeographic.com/news/2011/09/110914-optimism-narcissism-overconfidence-hubris-evolution-science-nature/)

In any case, humans have lots of self-destructive tendencies that _haven't_ been evolved away, and we get by.  

Development is a craft, and ideally, we'd like developers to take pride in their work.   Too little pride means lack of care, but too much pride is _hubris_, and the belief that you are better than you really are.  Who does hubris benefit?  Certainly not the team, and not the goal, because hubris blinds the team to hidden risks that they really should have seen.   

Although over-confidence might be a useful trait when bargaining with other humans, the thesis of everything so far is that [Meeting Reality](Meet-Reality) will punish your over-confidence again and again. 

Perhaps it's a little unfair to draw out one human characteristic for attention.   After all, we are [riddled with biases](https://en.wikipedia.org/wiki/List_of_cognitive_biases).  There is probably an interesting article to be written about the effects of different biases on the software development and project management processes.  This task is left as an exercise for the reader.

## Software Processes And Teams

[Agency Risk](Agency-Risk) doesn't just refer to people - it refers to anything which has agency over it's actions.  

> "Agency is the capacity of an actor to act in a given environment... Agency may either be classified as unconscious, involuntary behavior, or purposeful, goal directed activity (intentional action). " - [Agency, _Wikipedia_](https://en.wikipedia.org/wiki/Agency_(philosophy)) 

There is significant [Agency Risk](Agency-Risk) in running software _at all_.  Since computer systems follow rules we set for them, we shouldn't be surprised when those rules have exceptions that lead to disaster.  For example:
 - A process continually writing log files until the disks fill up, crashing the system.
 - Bugs causing data to get corrupted, causing financial loss.
 - Malware infecting a system, and sending your passwords and data to undesirables.

[Agency Risk](Agency-Risk) also covers _whole teams_ too.  It's perfectly possible that a team within an organisation develops [Goals](Glossary#Goal-In-Mind) that don't align with those of the overall organisation.  For example:
 - A team introduces excessive [Bureaucracy](Process-Risk#bureaucratic-risk) in order to avoid work it doesn't like.
 - A team gets obsessed with a particular technology, or their own internal process improvement, at the expense of delivering business value.
 - A marginalised team tbd.
 
We've looked here at some illustrative examples of [Agency Risk](Agency-Risk), but as we stated at the beginning, [Agency Risk](Agency-Risk) at any level comes down to differences of [Goals](Glossary#goal-in-mind) between the different agents, whether they are _people_, _teams_ or _software_.  
 
So, having looked at agents _individually_, in the next section, we're going to look more closely at [Goals](Glossary#goal-in-mind), and the [Attendant Risks](Glossary#attendant-risk) when aligning them amongst multiple agents.   On to [Coordination Risk](Coordination-Risk).
 