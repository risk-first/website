

## Agency In Software Development

In software development, we're not lending each other money, but we _are_ being paid by the project sponsor, so they are assuming [Agency Risk](/tags/Agency-Risk) by employing us.  

[Agency Risk](/tags/Agency-Risk) doesn't just apply to people: it can apply to _running software_ or _whole teams_  - anything which has agency over its actions.  

> "Agency is the capacity of an actor to act in a given environment... Agency may either be classified as unconscious, involuntary behaviour, or purposeful, goal directed activity (intentional action). " - [Agency, _Wikipedia_](https://en.wikipedia.org/wiki/Agency_(philosophy)) 
  

## A Model For Agency Risk  
  
![Goal Hierarchy](/img/generated/risks/agency/hierarchy.svg)

Although the definition of [Agency Risk](/tags/Agency-Risk) above pertains to looking after other people's money, this is just a single example of a wider issue which is best understood by appreciating that humans have a _hierarchy of concern_ with respect to their goals, as shown in the diagram above.  This hierarchy has arisen from millennia of evolution and helps us prioritise competing goals, generally in favour of _preserving our genes_.  

The model above helps us explain the principal-agent problem:  when faced with the dilemma of self-interest (perhaps protecting their family) vs. their employer, they will choose their family.  But it goes further - this model explains a lot of human behaviour.  It explains why some people:

 - will help their friends and colleagues every day, but perhaps fail to give to charities helping people in far worse conditions.
 - love their pets (who they consider in the _immediate family_ group) but eat other animals (somewhere off the bottom).
 - why people can be fiercely _nationalistic_ and tribal (supporting the goals of the third level) and also be against _immigration_ (helping people in the fourth level).

[Agency Risk](/tags/Agency-Risk) clearly includes the behaviour of [Bad Actors](https://en.wiktionary.org/wiki/bad_actor) but is not limited to them:  there are various "shades of grey" involved.  We can often understand and sympathise with the decisions agents make based on an understanding of this hierarchy.   

**NB:** Don't get hung up on the fact the diagram only has four levels.  You might want to add other levels in their depending on your personal circumstances.  The take-away is that there is a hierarchy at all, and that at the top, the people/things we care about _most_ are few in number.

## Agency Risk In Software Development

We shouldn't expect people on a project to sacrifice their personal lives for the success of the project, right?  Except that ["Crunch Time"](https://en.wikipedia.org/wiki/Video_game_developer#"Crunch_time") is exactly how some software companies work:

> "Game development... requires long working hours and dedication...  Some video game developers (such as Electronic Arts) have been accused of the excessive invocation of 'crunch time'.  'Crunch time' is the point at which the team is thought to be failing to achieve milestones needed to launch a game on schedule. " - [Crunch Time, _Wikipedia_](https://en.wikipedia.org/wiki/Video_game_developer#"Crunch_time")

People taking time off, going to funerals, looking after sick relatives and so on are all acceptable forms of [Agency Risk](/tags/Agency-Risk). They are the a risk of having _staff_ rather than _slaves_.

![Heroism](/img/generated/risks/agency/heroism.svg)

Where an agent _excessively_ prioritises their own goals over the group we term this selfishness or perhaps nepotism.  Conversely, putting the tribe's or the team's needs over your own is _heroism_.

### The Hero

> "The one who stays later than the others is a hero. " - [Hero Culture, _Ward's Wiki_](https://wiki.c2.com/?HeroCulture)

Heroes put in more hours and try to rescue projects single-handedly, often cutting corners like team communication and process in order to get there.   

Sometimes projects don't get done without heroes.  But other times, the hero has an alternative agenda to just getting the project done:

- A need for control and for their own vision.
- A preference to work alone.
- A desire for recognition and acclaim from colleagues.
- For the job security of being a [Key Person](https://en.wikipedia.org/wiki/Key_person_insurance).

A team _can_ make use of heroism but it's a double-edged sword.  The hero can become [a bottleneck](/tags/Coordination-Risk) to work getting done and because they want to solve all the problems themselves, they [under-communicate](/tags/Communication-Risk).  

### CV Building

CV Building is when someone decides that the project needs a dose of "Some Technology X", but in actual fact, this is either completely unhelpful to the project (incurring large amounts of [Complexity Risk](/tags/Complexity-Risk)), or merely a poor alternative to something else.  

It's very easy to spot CV building:  look for choices of technology that are incongruently complex compared to the problem they solve and then challenge by suggesting a simpler alternative.

### Devil Makes Work

Heroes can be useful, but _underused_ project members are a nightmare.   The problem is, people who are not fully occupied begin to worry that actually the team would be better off without them, and then wonder if their jobs are at risk.

Even if they don't worry about their jobs, sometimes they need ways to stave off _boredom_.  The solution to this is "busy-work":  finding tasks that, at first sight, look useful, and then delivering them in an over-elaborate way that'll keep them occupied.  This is also known as [_Gold Plating_](https://en.wikipedia.org/wiki/Gold_plating_(software_engineering)).  This will leave you with more [Complexity Risk](/tags/Complexity-Risk) than you had in the first place. 

### Pet Projects

> "A project, activity or goal pursued as a personal favourite, rather than because it is generally accepted as necessary or important."  - [Pet Project, _Wiktionary_](https://www.wordnik.com/words/pet%20project)

Sometimes budget-holders have projects they value more than others without reference to the value placed on them by the business.  Perhaps the project has a goal that aligns closely with the budget holder's passions, or it's related to work they were previously responsible for.  

Working on a pet project usually means you get lots of attention (and more than enough budget), but it can fall apart very quickly under scrutiny.

### Morale Failure

![Morale Failure](/img/generated/risks/agency/morale.svg)

> "Morale, also known as Esprit de Corps, is the capacity of a group's members to retain belief in an institution or goal, particularly in the face of opposition or hardship" - [Morale, _Wikipedia_](https://en.wikipedia.org/wiki/Morale) 

Sometimes the morale of the team or individuals within it dips, leading to lack of motivation.  Losing morale is a kind of [Agency Risk](/tags/Agency-Risk) because it really means that a team member or the whole team isn't committed to the [Goal](/tags/Goal) and may decide their efforts are best spent elsewhere.  Morale failure might be caused by:

 - **External Factors**:  perhaps the employee's dog has died, or they're simply tired of the industry, or are not feeling challenged.
 - **The goal feels unachievable**:  in this case people won't commit their full effort to it.  This might be due to a difference in the evaluation of the risks on the project between the team members and the leader.  In military science, a second meaning of morale is how well supplied and equipped a unit is.  This would also seem like a useful reference point for IT projects.  If teams are under-staffed or under-equipped, it will impact on motivation too.
 - **The goal isn't sufficiently worthy**, or the team doesn't feel sufficiently valued.
 
 
 
### Teams

[Agency Risk](/tags/Agency-Risk) applies to _whole teams_ too.  It's perfectly possible that a team within an organisation develops [Goals](/tags/Goal) that don't align with those of the overall organisation.  For example:

 - A team introduces excessive [Bureaucracy](Process-Risk#bureaucracy) in order to avoid work it doesn't like.
 - A team gets obsessed with a particular technology, or their own internal process improvement, at the expense of delivering business value.
 - A marginalised team forces their services on other teams in the name of "consistency".   (This can happen a lot with "Architecture", "Branding" and "Testing" teams, sometimes for the better, sometimes for the worse.)

When you work with an external consultancy, there is *always* more [Agency Risk](/tags/Agency-Risk) than with a direct employee.  This is because as well as your goals and the employee's goals, there is also the consultancy's goals.  

This is a good argument for avoiding consultancies, but sometimes the technical expertise they bring can outweigh this risk. 
 
