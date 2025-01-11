
## Mitigating Agency Risk

Let's look at three common ways to mitigate [Agency Risk](/tags/Agency-Risk):  [Monitoring](#monitoring), [Security](#security) and [Goal Alignment](#goal-alignment).  Let's start with Monitoring.

### Monitoring

![Mitigating Agency Risk Through Monitoring](/img/generated/risks/agency/monitoring.svg)

A the core of the Principal-Agent Problem is the issue that we _want_ our agents to do work for us so we don't have the responsibility of doing it ourselves.  However, we pick up the second-order responsibility of managing the agents instead.  

As a result (and as shown in the above diagram), we need to _Monitor_ the agents.  The price of mitigating [Agency Risk](/tags/Agency-Risk) this way is that we have to spend time doing the monitoring ([Schedule Risk](/tags/Schedule-Risk)) and we have to understand what the agents are doing ([Complexity Risk](/tags/Complexity-Risk)).  

Monitoring of _software process_ agents is an important part of designing reliable systems and it makes perfect sense that this would also apply to _human_ agents too.  But for people, the _knowledge of being monitored_ can instil corrective behaviour.  This is known as the Hawthorne Effect:

> "The Hawthorne effect (also referred to as the observer effect) is a type of reactivity in which individuals modify an aspect of their behaviour in response to their awareness of being observed." - [Hawthorne Effect, _Wikipedia_](https://en.wikipedia.org/wiki/Hawthorne_effect)

### Security

Security is all about _setting limits_ on agency - both within and outside a system, so when we talk about "Security Risk" we are really talking about a failure to limit agency.

![Related Risks](/img/generated/risks/agency/agency-risks.svg)

_Within_ a system we may wish to prevent our agents from causing accidental (or deliberate) harm but we also have [Agency Risk](/tags/Agency-Risk) from unwanted agents _outside_ the system.  So security is also about ensuring that the environment we work in is _safe_ for the good actors to operate in while keeping out the bad actors.

Interestingly, security is handled in very similar ways in all kinds of systems, whether biological, human or institutional: 

- **Walls**: defences _around_ the system, to protect its parts from the external environment.  
- **Doors**: ways to get _in_ and _out_ of the system, possibly with _locks_.
- **Guards**: to make sure only the right things go in and out.  (i.e. to try and keep out _bad actors_).
- **Police**: to defend from _within_ the system against internal [Agency Risk](/tags/Agency-Risk).
- **Subterfuge**: hiding, camouflage, disguises, pretending to be something else.

These work at various levels in **our own bodies**:  our _cells_ have _cell walls_ around them, and _cell membranes_ that act as the guards to allow things in and out.  Our _bodies_ have _skin_ to keep the world out, and we have _mouths_, _eyes_, _pores_ and so on to allow things in and out.  We have an _immune system_ to act as the police.

**Our societies** work in similar ways: in medieval times, a city would have walls, guards and gates to keep out intruders.  Nowadays, we have customs control, borders and passports.

We're waking up to the realisation that our software systems need to work the same way:  we have [Firewalls](https://en.wikipedia.org/wiki/Firewall_(computing)) and we lock down _ports_ on servers to ensure there are the minimum number of _doors_ to guard,  we _police_ the servers with monitoring tools, and we _guard_ access using passwords and other identification approaches. 

![Security as a mitigation for Agency Risk](/img/generated/risks/agency/security-risk.svg)

[Agency Risk](/tags/Agency-Risk) and [Security Risk](Agency-Risk#security) thrive on complexity:  the more complex the systems we create, the more opportunities there are for bad actors to insert themselves and extract their own value.  The dilemma is, _increasing security_ also means increasing [Complexity Risk](/tags/Complexity-Risk), because secure systems are necessarily more complex than insecure ones.

### Goal Alignment

As we stated at the beginning, [Agency Risk](/tags/Agency-Risk) at any level comes down to differences of [Goals](/tags/Goal) between the different agents, whether they are _people_, _teams_ or _software_. 

#### Skin In The Game 

If you can _align the goals_ of the agents involved, you can mitigate [Agency Risk](/tags/Agency-Risk).  Nassim Nicholas Taleb calls this "skin in the game": that is, the agent is exposed to the same risks as the principal.

> "Which brings us to the largest fragilizer of society, and greatest generator of crises, absence of 'skin in the game.' Some become antifragile at the expense of others by getting the upside (or gains) from volatility, variations, and disorder and exposing others to the downside risks of losses or harm." - [Nassim Nicholas Taleb, _Antifragile_](https://a.co/d/07LfBTI)

Mafia bosses understand this theory well:  in order to engender _complete loyalty_ in your soldiers, you threaten their families.  Follow the rules or your family gets whacked! 

Another example of this is [The Code of Hammurabi](https://en.wikipedia.org/wiki/Code_of_Hammurabi), a Babylonian legal text composed c. 1755–1750 BC.  One law states:

> "The death of a homeowner in a house collapse necessitates the death of the house's builder... if the homeowner's son died, the builder's son must die also." - [Code of Hammurabi, _Wikipedia_](https://en.wikipedia.org/wiki/Code_of_Hammurabi#Theories_of_purpose)

Luckily, these kinds of exposure aren't very common on software projects!  [Fixed Price Contracts](/thinking/One-Size-Fits-No-One#waterfall) and [Employee Stock Options](https://en.wikipedia.org/wiki/Employee_stock_option) are two exceptions.

#### Needs Theory

David McClelland's Needs Theory suggests that there are two types of skin-in-the-game: the _intrinsic_ interest in the work being done and _extrinsic_ factors such as the recognition, achievement, or personal growth derived from it.   

> "Need theory... proposed by psychologist David McClelland, is a motivational model that attempts to explain how the needs for achievement, power, and affiliation affect the actions of people from a managerial context... McClelland stated that we all have these three types of motivation regardless of age, sex, race, or culture. The type of motivation by which each individual is driven derives from their life experiences and the opinions of their culture. " - [Need Theory, _Wikipedia_](https://en.wikipedia.org/wiki/Need_theory)

So one mitigation for [Agency Risk](/tags/Agency-Risk) is therefore to employ these extrinsic factors.  For example, by making individuals responsible and rewarded for the success or failure of projects, we can align their personal motivations with those of the project.  

> "One key to success in a mission is establishing clear lines of blame." - [Henshaw's Law, _Akin's Laws Of Spacecraft Design_](https://spacecraft.ssl.umd.edu/akins_laws.html)

But _extrinsic motivation_ is a complex, difficult-to-apply tool.  In [Internal Model Risk](/tags/Internal-Model-Risk) we will come back to this and look at the various ways in which it can go awry.

![Collective Code Ownership, Individual Responsibility](/img/generated/risks/agency/cco.svg)

Tools like [Pair Programming](https://en.wikipedia.org/wiki/Pair_programming) and [Collective Code Ownership](https://en.wikipedia.org/wiki/Collective_ownership) are about mitigating [Staff Risks](/tags/Staff-Risk) like [Key Person Risk](https://en.wikipedia.org/wiki/Key_person_insurance#Key_person_definition) and [Internal Model Risk](/tags/Internal-Model-Risk), but these push in the opposite direction to _individual responsibility_.   

This is an important consideration:  in adopting _those_ tools, you are necessarily setting aside certain _other_ tools to manage [Agency Risk](/tags/Agency-Risk) as a result.
