In this section on [Production Risks], we're going to take our head out of the clouds a bit and start considering the realities of running software systems in the real world.  After all, [Coordination Risk] and [Agency Risk] got a bit theoretical.  Here, we're going to look at [Operational Risk], [Security Risk] and [Reputational Risk]: real-world concerns for anyone running a business.  

But before we go there, let's try and recap on where we've come so far.  So far, we've been looking at risks to _systems in general_: 

- [Complexity Risk]: to do with the number of independent components in the system, and their interactions.
- [Dependency Risk]:  how those components rely on each other..
- [Coordination Risk]: the problem of competition over dependencies, and ..
- [Communication Risk]: how they mitigate [Coordination Risk] by taking on [Communication Risk].

Here is a diagram that shows how these different elements line up:

tbd. diagram.  circle of our system.  inside some components etc.

But, although this is starting to look complicated, in reality, things are _worse_.  We have to contend with [Bad Actors] from _within_ and _outside_ the system too, and, we have to consider our software a component of a larger _system in the world_, which consists of our _customers_ depending on us.  

- [Security Risk]: problem of bad actors affecting the system
- [Agency Risk]:  problem of actors within the system having their own agendas.
- [Operational Risk]: problem of _delivering on our promises_ as a dependency.

tbd, another diagram, different labels. add customers, bad actors, agency risk.

## Operational Risk

tbd definition.

As we saw in [Development Process], a lot of the processes we put in place in the software development process ([Continuous Integration], [Testing], tbd) are there to mitigate [Operational Risk].  







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




