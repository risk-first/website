





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
    - Reputational Risk:
      - Support (trade off - promptness vs ability)
    - Security Risk
      - Hacking
      - Denial Of Service 
    - Feedback Loops
       - Bug reports, feedback
       - Quality of feedback
       - Internal Controls
         - Agency Risk meets Production Risk (bad actors, controls)
  

Regulatory Risk  Legal Risk  (Pestle?)

Competition - this is the game, everything else is practice.3




