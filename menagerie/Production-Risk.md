![Under Construction](images/state/uc.png)

In this section on [Production Risks], we're going to take our head out of the clouds a bit and start considering the realities of running software systems in the real world.  After all, [Coordination Risk] and [Map And Terriory Risk] got a bit theoretical.  Here, we're going to look at [Operational Risk], [Security Risk] and [Reputational Risk]: real-world concerns for anyone running a business.  

But before we go there, let's try and recap on where we've come so far.  So far, we've been looking at risks to _systems in general_: 

- [Complexity Risk]: to do with the number of independent components in the system, and their interactions.
- [Dependency Risk]:  how those components rely on each other..
- [Coordination Risk]: the problem of competition over dependencies, and ..
- [Communication Risk]: how they mitigate [Coordination Risk] by taking on [Communication Risk].

Here is a diagram that shows how these different elements line up:

[Systemic View of Risks](images/kite9/production-1.png)

But, although this is starting to look complicated, in reality, things are _worse_.  We have to contend with [Bad Actors] from _within_ and _outside_ the system too, and, we have to consider our software a component of a larger _system in the world_, which consists of our _customers_ depending on us.  

- [Security Risk]: problem of bad actors affecting the system
- [Operational Risk]: problem of _delivering on our promises_ as a dependency.
- [Agency Risk]:  problem of actors _within the system_ having their own agendas.

[Systemic View of Risks (2)](images/kite9/production-2.png)

So in this second model, we are now considering that the world is a dangerous, untrustworthy place where _bad things happen_, either deliberately or accidentally.  

We'll look at each of these three types of risk one-at-a-time as usual, but before we do let's address the deliberately / accidentally dimension. 

We're familiar with the concept of taking steps on the [Risk Landscape], wherein we [take action] to move to a position where the [Attendant Risks] are more acceptable to us.  However, now we have to contend with the idea that the world is _also_ moving us on the risk landscape too.  If there is sudden bad weather, we might have a risk of a power-cut, and the losses that might entail to productivity or sales.  But, we also have to contend with [Bad Actors], who also take us to a place of worse risk.

Ordinarily, when we transact with a [Dependency], it should be the case that after the transaction, there is value on both sides of the transaction.  This could be, _you do my accounting_, I pay you money.  On both sides, financial risks are reduced.  If the price is too high, or too low, we see one or other side getting the better deal, and _capturing an unfair share of the value_. 

With a [Bad Actor], we're in a situation more like a zero-sum game:  value is _taken_ from one party and _transferred_ to the other.  These are exactly the dependency relationships that societies _don't_ condone: there is net _zero_ or _negative_ value in the transaction.

[In this diagram, B does a deal with A, the value of the product B gets from A is always 4, but the price varies with the X axis.  When the price is zero, B captures all the value, but as the price increases, it becomes a worse and worse deal for B, and the net value heads towards zero or negative.](images/deal.png)

## Security Features

Complex systems (ones which contain multiple, interacting parts, like the ones in the above diagrams) have to contend with their external environments, and try to minimize the ways in which they get interrupted from outside either by _Bad Actors_ (as shown above) or external environmental events.

Security is handled in very similar ways at all sorts of levels:

- **Walls**: defences _around_ the complex system, to protect it's parts from the external environment.
- **Doors**: ways to get _in_ and _out_ of the complex system.
- **Guards**: to make sure only the right things go in and out.  (i.e. to try and keep out _Bad Actors_.
- **Police**: to defend from _within_ the system, against [Agency Risk] and _invaders_.

These work various levels in our own bodies:  our _cells_ have _cell walls_ around them, and _cell membranes_ that act as the guards to allow things in and out.  Our _bodies_ have _skin_ to keep the world out, and we have _mouths_, _eyes_, _pores_ and so on to allow things in and out.  We have an _immune system_ to act as the police.

Our societies work in similar ways: in medieval times, a city would have walls, guards and doors to keep out intruders.  Nowadays, we have customs control, borders and passports.

We're waking up to the realisation that our software systems need to work the same way:  we have [Firewalls] to protect our organisations, we lock down _ports_ on servers to ensure there are the minimum number of doors to guard and we _police_ the servers ourselves with monitoring tools and anti-virus software.  

tbd.  diagram version 3.

## Operational Risk

In the finance world, _Operational Risks_ have a very specific meaning under [Basel II], which isn't very helpful to us here.  Instead, I am going to draw on a slightly wider definition, from _Operational Risk Management_:

> "ORM is the oversight of operational risk, including the risk of loss resulting from inadequate or failed internal processes and systems; human factors; or external events." - [Operational Risk Management, _Wikipedia_](https://en.wikipedia.org/wiki/Operational_risk_management)

As we saw in [Development Process], a lot of the processes we put in place in the software development process ([Continuous Integration], [Testing], tbd) are there to mitigate [Operational Risk].  For software, [Operational Risk] occurs to our _production systems_.   





stuff that can go wrong in production

changing stuff in production is harder than changing it in test, as you have to _migrate_.

all the costs of breaking stuff, and damaging the running of the business.


reputation damage
(you only get one chance to make a first impression)



 - You don't know all the ways the software will get used in production.
 - Different browsers, versions of code, accessiblilty.


- CAn you support all the users?  IS there enough kit?  WIll you know?



Upgrades ( tell story of Research upgrade that went wrong because we were upgrading at the same time as an outage)

Production Risk
  Overview: 	
    - Overall definition: anything that can go wrong with the production system.  Loss of data, hacking, poor user experience.
    - In general, meeting reality when there are things at stake.
    - Ideally, move production risks _forward_, and deal with them before they are production.
    - Tension:  you can only make a first impression once, vs.  gilding the lilly, perfectionism.
    - Consider risk.
    - Measuring Impact (affected users, losses in currency etc).
    
  Specifics:
    - Operational Risk:
      - Single points of failure.
      - Poor monitoring, visibility risk meets operational risk (otherwise, it doesn't matter - good example here)
      - Correlation  (need a good example here)
      - Contingency Planning 
      - Disaster Recovery
      - Datacentres (Aws etc)
      - Performance Degradation / Runaway processes  (Performance Risk)
      - Monitoring Tools and Logs
    - Feedback Loops
       - Bug reports, feedback
       - Quality of feedback
       - Internal Controls
         - Agency Risk meets Production Risk (bad actors, controls)
    - Reputational Risk:
      - Support (trade off - promptness vs ability)
    - Security Risk
      - Hacking
      - Denial Of Service
      - Security, Trust and Complexity 
  

Regulatory Risk  Legal Risk  (Pestle?)

Competition - this is the game, everything else is practice.3


REALITY RISK - if you don't meet reality, how will you know if you'll survive it?  Reality is very good at surfacing hidden risks.


