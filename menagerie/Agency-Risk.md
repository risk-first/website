[Coordinating a team](Coordination-Risk) is difficult enough when everyone on the team has a single [Goal](Goal-In-Mind).  But, people have their own goals, too.  Sometimes, the goals harmlessly co-exist with the team's goal, but other times they don't.

This is **Agency Risk**.   This term comes from finance (again), and refers to the situation where you entrust your money to someone (the "agent") in order to invest it, but the don't necessarily have your best interests at heart.  They may instead elect to invest the money in ways that help them, or outright steal it.  

> "This dilemma exists in circumstances where agents are motivated to act in their own best interests, which are contrary to those of their principals, and is an example of moral hazard." - [Principal-Agent Problem, _Wikipedia_](https://en.wikipedia.org/wiki/Principal–agent_problem)

The less visibility you have of the agent's activities, the bigger the risk.  However, the whole _point_ of giving the money to the agent was that you would have to spend less time and effort managing it.  Hence the dilemma.  So, **Agency Risk** flourishes where there is [Invisibility Risk](Communication-Risk).

**Agency Risk** clearly includes the behaviour of [Bad Actors](https://en.wiktionary.org/wiki/bad_actor).  But, this is a very strict definition of **Agency Risk**.   

In software development, we're not lending each other money, but we are being paid by the project sponsor, so they are assuming **Agency Risk** by employing us.   Let's look at some examples of borderline **Agency Risk** situations, in order to sketch out where the domain of this risk lies.

## CV Building

This is when someone decides that the project needs a dose of "Some Technology X", but in actual fact, this is either completely unhelpful to the project (incurring large amounts of [Complexity Risk](Complexity-RisK), or merely less useful than something else.  

It's very easy to spot CV building:  look for choices of technology that are incongruently complex compared to the problem they solve, and then challenge by suggesting a simpler alternative.    

## Consultancies

When you work with an external consultancy, there is *always* more [Agency Risk](Agency-Risk) than with a direct employee.  This is because as well as your goals and the employee's goals, there is also the consultancy's goals.  

This is a good argument for not using consultancies, but sometimes the technical expertise they bring can outweigh this risk.

Also, try to look for _hungry_ consultancies:  if you being a happy client is valuable to them, they will work at a discount (either working cheaper, harder or longer or more carefully) as a result.

## The Hero

> "The one who stays later than the others is a hero. " - [Hero Culture, _Ward's Wiki_](http://wiki.c2.com/?HeroCulture)

[Hero Programmers](http://wiki.c2.com/?HeroCulture) put in more hours and try to deliver the projects single-handedly, often cutting corners like team communication and process in order to get there.   

Sometimes, this can be of benefit to the project: maybe the last push is what is needed to get it over the line?   

However, sometimes, the hero has an alternative agenda than just getting the project done:
- A need for control, and for their own vision.
- A preference to work alone.
- A desire for recognition and acclaim from colleagues.
- For the job security of being a [Key Man](https://en.wikipedia.org/wiki/Key_person_insurance).

A team _can_ make use of heroism, but it's a double-edged sword.  The hero can becomes a bottleneck to work getting done, and because want to solve all the problems themselves, they under-communicate.

## Devil Makes Work

Heroes can be useful, but _underused_ project members are a nightmare.   The problem is, people who are not fully occupied begin to worry that actually, the team would be better off without them, and then wonder if their jobs are at risk.

The solution to this is "busy-work":  finding tasks that, at first sight, look useful, and then delivering them in an over-elaborate way ([Gold Plating](https://en.wikipedia.org/wiki/Gold_plating_(software_engineering))) that'll keep them occupied.  This will leave you with more [Complexity Risk](Complexity-Risk) than you had in the first place.

Even if they don't worry about their jobs, doing this is a way to stave off _boredom_.

## Pet Projects

> A project, activity or goal pursued as a personal favourite, rather than because it is generally accepted as necessary or important.  - [Pet Project, _Wiktionary_](https://en.wiktionary.org/wiki/pet_project)

Sometimes, budget-holders have projects they value more than others without reference to the value placed on them by the business.  Perhaps the project has a goal that aligns closely with the budget holder's passions, or its related to work they were previously responsible for.  Working on a pet project usually means you get lots of attention (and more than enough budget), but much like [Map and Territory Risk](Map-And-Territory-Risk), it can fall apart very quickly under scrutiny.

## Morale Risk

Morale, also known as Esprit de Corps is the capacity of a group's members to retain belief in an institution or goal, particularly in the face of opposition or hardship - [Wikipedia] 

Sometimes, the morale of the team or individuals within it dips, leading to lack of motivation.  **Morale Risk** is a kind of Agency Risk** because it really means that a team member or the whole team isn't committed to the [Goal](Goal-In-Mind), may decide their efforts are best spent elsewhere.  **Morale Risk** might be caused by:
 - External factors.  Perhaps the employees' dog has died, or they're simply tired of the industry, or are not feeling challenged.
 - If the team don't believe a goal is achievable, they won't commit their full effort to it.  This might be due to to a difference in the evaluation of the risks on the project between the team members and the leader.
 - If the goal isn't considered sufficiently worthy, or the team isn't sufficiently valued.
 - In military science, a second meaning of morale is how well supplied and equipped a unit is.  This would also seem like a useful reference point for IT projects.  If teams are under-staffed or under-equipped, this will impact on motivation too.

## Hubris & Ego

It seems strange that humans are over-confident.  You would have thought that evolution would drive out this trait but apparently it's not so.  According to tbd, over-confidence is useful when you're in a negotiating position.  And individually, humans are risk-takers 

Development is a craft, and ideally, we'd like developers to take pride in their work.   Too little pride means lack of care, but too much pride is _hubris_, and the belief that you are better than you really are.  Who does hubris benefit?  Certainly not the team, and not the goal.  

Although over-confidence might be a useful trait when bargaining with other humans, the thesis of everything so far is that reality will punish your over-confidence again and again.  



