![Under Construction](images/state/uc.png)

As we saw in [A Conversation](A-Conversation), it's important not only to consider the [Attendant Risks](Glossary#attendant-risk) you're trying to mitigate, but the ones you're likely to pick up in the process.  This means picking a careful path through the [Risk Landscape](Glossary#risk-landscape).  This is the essence of _De-Risking_. 

> "To take steps to make (something) less risky or less likely to involve a financial loss." - [De-Risk,_OxfordDictionaries.com_](https://en.oxforddictionaries.com/definition/de-risk)

Some simple examples of this might be:

- Safety-nets and ropes de-risk climbing.  But, the activity of climbing itself is otherwise much unchanged.
- Backups and Source-Control de-risk the development process by reducing the impact of computer failure.  Our process is changed _slightly_ by this imposition, but we're not massively inconvenienced.
- tbd.
- tbd.

Let's look at some common strategies for De-Risking.  This is probably not an exhaustive set, but it's a good starting point.

## Mitigate

**Mitigating** the risk is taking steps towards minimising either it's likelihood or impact (as we discussed in the [Risk Theory](Risk-Theory) section).  This is the main approach we will be looking at in Part 2.   We'll break down risk into its different types and look at the general mitigations for each.  The examples above of De-Risking were all mitigations.  (Safety-nets, for example, mitigate the impact of hitting the ground.)  

## Avoid

**Avoiding** a risk, means taking a route on the [Risk Landscape](Glossary#risk-landscape) _around_ the risk.  For example, if you are working in a team which has no experience of relational databases, then _storing data in files_ might be a way to avoid the [Learning-Curve Risk](Communication-Risk#learning-curve-risk) associated with this technology.  

Of course, you may pick up other, more serious [Attendant Risks](Glossary#attendant-risk) as a result: Relational Databases are software solutions to many kinds of [Coordination Risk](Coordination-Risk) problem.

## Transfer

**Transferring** risk means _making it someone else's problem.  For example, when I buy home insurance, the impact of my house burning down is reduced.  It hasn't gone away completely, but at least the financial element of it is handled by the insurance company.

In part 2, we'll see how **Transfer** of risk is an essential feature of [Software as a Service](Software-Dependency-Risk).  Inside organisations, **Transfer** of risk can become a political game:

> "... ownership results in ‘one throat to choke’ for audit functions [and] from ownership comes responsibility. A lot of the political footwork in an enterprise revolves around trying to not own technologies. Who wants to be responsible for Java usage across a technology function of dozens of thousands of staff, any of whom might be doing crazy stuff? You first, mate. " - [Why Are Enterprises So Slow?, _zwischenzugs.com_](https://zwischenzugs.com/2018/10/02/why-are-enterprises-so-slow/)

## Ignore / Accept

**Accepting** a risk is to deal with it when it arises.   One example is the [Key-Man Risk](Scarcity-Risk#staff-risk) involved in having a super-star programmer on the team.  Although there would be fallout if they left, they are usually mitigating more risk than they cause.  Another example is using particular software dependencies:   I might build a mobile application which requires a Facebook account to log in.  This might give rise to the risk that some people can't log in, but might simplify the software to such an extent that it's worthwhile.

Whereas **Accepting** a risk seems to imply an eyes-wide-open examination, **Ignoring** seems to imply that either the risk is so insignificant it doesn't warrant evaluation, or so daunting that it can't be stared down.  Either way, **Ignoring** a risk amounts to the same thing as **Accepting** it, since you're not doing anything about it. 

**Accepting** a risk has to occur _before_ we can **Mitigate** it.  As we've discussed previously, what we decide to mitigate on a daily basis will depend on the evaluation of where we can best mitigate [Attendant Risk](Glossary#attendant-risk).   

### A Nice Problem To Have

**Ignoring** or **Accepting** risks is a lot less work than **Mitigating** them, and sometimes it can feel negligent to just add them to the backlog or risk-register.  One useful test I have found is whether "This would be a nice problem to have".  For example:

> "Running out of space in the database would be a nice problem to have, because it would mean we have lots of users"
> "Users complaining about lacking function X would be a nice problem to have, because it would mean they were using the system"

Applying this kind of logic at the start of a project leads you towards building a [Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product).

### Learned Helplessness

Sometimes, risks just go away on their own.  [Learned Helplessness](https://en.wikipedia.org/wiki/Learned_helplessness) on the other hand, is where we _could_ do something about the risk, but fail to see that as an option:

> "Learned helplessness is behaviour typical of animals, and in rare cases humans, that occurs when the subject endures repeatedly painful or otherwise aversive stimuli which it is unable to escape or avoid. After such experience, the organism often fails to learn or accept "escape" or "avoidance" in new situations where such behavior would likely be effective. " - [Learned Helplessness, _Wikipedia_](https://en.wikipedia.org/wiki/Learned_helplessness)

## Contain

**Containing** risks means setting aside sufficient time or money to deal with them if they occur.  This is an excellent approach for [Hidden Risk](Glossary#hidden-risk) or entire sets of minor [Attendant Risks](Glossary#attendant-risk).  

Whenever a project-manager builds slack into a project plan, this is **Containment**.  In the section on [Schedule Risk](Scarcity-Risk#schedule-risk) we are going to look in detail at how this works. 

## Exploit

**Exploiting** as a strategy usually means taking advantage of the upside of a risk.   For example, ensuring enough stock is available to mitigate the risk of a rush on sales over the Christmas period, or ensuring your website has enough bandwidth to capture all the traffic headed towards it after it's featured on television.  

Going back to the example of home insurance, the Insurance company are **exploiting** the risk of my house burning down by selling me insurance.  This is a common pattern:  wherever there is risk, there is likely to be a way to profit from it.  

Later, in the section on [Process Risk](Process-Risk) we'll be looking at how **exploiting risk** can happen organically within a company. 

## Isn't It Obvious?

At this point, you might be wondering what all the fuss is about.   This stuff is all obvious!  It's what we do anyway!  Perhaps.  Risk management _is_ what we do anyway: 
 
 > "We’ve survived 200,000 years as humans.  Don’t you think there’s a reason why we survived? We’re good at risk management. " - [Nassim Nicholas Taleb, author of _The Black Swan_](https://www.zerohedge.com/news/2018-03-13/taleb-best-thing-society-bankruptcy-goldman-sachs)
 
The problem is that although all this _is_ obvious, it appears to have largely escaped codification within the literature, practices and methodologies of software development.  Further, while it is obvious, there is a huge hole:   Successful De-Risking depends heavily on individual experience and talent.  

If there are three take-aways from Risk-First, it is these:

- Concentrate on Risks, not Goals (goals are risks in disguise, anyway)
- Every action you take is De-Risking _something_ (or should be)
- tbd.


Risk-First has stressed the existence of [Hidden Risk](Glossary#hidden-risk) over and again, but _it's only hidden if you're not expecting it_.  In part 2, we are going to look at all the places where [Hidden Risk](Glossary#hidden-risk) lives.



