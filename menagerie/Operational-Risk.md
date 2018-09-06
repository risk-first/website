![Under Construction](images/state/uc.png)

In this section on [Operational Risks], we're going to take our head out of the clouds a bit and start considering the realities of running software systems in the real world.  After all, [Coordination Risk]() and [Map And Terriory Risk]() got a bit theoretical.  Here, we're going to look at [Operational Risks], including [Security Risk]() and [Reputational Risk]: real-world concerns for anyone running a business.  

But before we go there, let's try and recap on where we've come so far.  So far, we've been looking at risks to _systems in general_: 

- [Complexity Risk]: to do with the number of independent components in the system, and their interactions.
- [Dependency Risk]:  how those components rely on each other..
- [Coordination Risk]: the problem of competition over dependencies, and ..
- [Communication Risk]: how they mitigate [Coordination Risk]() by taking on [Communication Risk].

Here is a diagram that shows how these different elements line up:

![Systemic View of Risks](images/kite9/production-1.png)

But, although this is starting to look complicated, in reality, things are _worse_.  We have to contend with [Bad Actors]() from _within_ and _outside_ the system too, and, we have to consider our software a component of a larger _system in the world_, which consists of our _customers_ depending on us.  Our system is embedded within a context which we can't hope to fully understand:

- [Security Risk]: problem of bad actors affecting the system
- [Operational Risk]: problem of _delivering on our promises_ as a dependency.
- [Agency Risk]:  problem of actors _within the system_ having their own agendas.
- [Dependency Risk]: our system relies on a stable environment in which to operate.

![Systemic View of Risks (2)](images/kite9/production-2.png)

## Introducing Operational Risk Management

Operations?

The _software systems_ we build and put into production don't just consist of software.  tbd

Operational Risk is a very broad church, and encompasses pretty much all the real-world things that can go wrong with your enterprise.  Let's try and define what we mean by [Operational Risk]:

> "Operational Risk Management is the oversight of Operational Risk, including the risk of loss resulting from inadequate or failed internal processes and systems; human factors; or external events." - [Operational Risk Management, _Wikipedia_](https://en.wikipedia.org/wiki/Operational_risk_management)

Here are some examples of [Operational Risk]:
 - Freak weather conditions affecting ability of staff to get to work, interrupting the developmemt and support teams.
 - A data-centre going off-line, causing your customers to lose access.
 - Insufficient controls which means you don't notice when some transactions are failing, leaving you out-of-pocket.
 - Data loss because of bugs introduced during an untested release.
 - Hackers breaking into the system and bringing your service down.
 - Reputational damage caused when staff are rude to the customers.
 - Regulatory change, which means you have to adapt your business model.
 
... basically, a long laundry-list of everything that can go wrong due to operating in the Real World.  _Ideally_, when we design our software system, we design in features to _strengthen_ it against [Operational Risks]() such as these.   _However_, we don't get these for free:  they come at the cost of extra [Complexity].

For example, as we saw in [Development Process], a lot of the processes we put in place (e.g. [Continuous Integration]() or various types of [Testing]) are there to mitigate [Operational Risk]() problems caused by _releasing buggy software_.  [Unit Testing]() increases our [Kolmogorov Complexity]() (as there is more code) but we accept this extra complexity as the price for mitigating this [Operational Risk].  [User Acceptance Testing]() increased our [Schedule Risk], but again reduced the likelihood of bugs making it into production.

## Mitigating Operational Risk

Operational Risks, then are things that happen _to_ our carefully constructed, theoretical system, as shown in this diagram:

diagram:  our system -> event -> weakness -> effect -> reaction -> recovery -> adaptation  

(our system: meeting reality, deployment)
(event: detection)
(weakness: minimization (see Security risk))
(effect:  what happens, how much chaos ensues)
(reaction:  monitoring, etc)
(recovery:  how we fix it)
(adaptation: how the system changes in the future)


-- something like this.

Therefore, one of the best defences against [Operational Risk]() is dealing with the issues quickly once they happen.  This requires:

Good [Feedback Loops]() in the form of [Monitoring](Monitoring) 
and rapid response to issues.

tbd, talk with John about this

## Meeting Reality

So in this second model, we are now considering that the world is a dangerous, untrustworthy place where _bad things happen_, either deliberately or accidentally.  And, since we don't have a perfect understanding of the world, most of the [Production Risk]() we face is [Hidden Risks](Glossary#hidden-risk).  

Putting software into production is [Meeting Reality](Meeting-Reality) in the fullest way possible.  The more contact we can give our system with the outside world, the more [Hidden Risks](Glossary#hidden-risk) will materialize.  If we observe these and take action to mitigate them, then our system can get stronger.   cybernetics, antifragile tbd.

It is tempting to delay [Meeting Reality](Meeting-Reality) as long as possible, to "get your house in order".  There is a tension between "you only get one chance to make a first impression" and "gilding the lilly" (perfectionism).  In the past I've seen this stated as:

> Pressure to ship becomes greater than pressure to improve tbd

A Risk-First reframing of this might be the balance between:

- The perceived [Reputational Risk], [Feature Risk]() and [Operational Risk]() of going to production (pressure to improve)
- The perceived [Schedule Risks]() (such as funding, time available, etc) of staying in development (pressure to ship)

The "should we ship?" decision is therefore a complex one.  In [Meeting Reality](Meeting-Reality), we discussed that it's better to do this "sooner, more frequently, in smaller chunks and with feedback".  We can meet [Operational Risk]() on our own terms by doing so: 

|Meet Reality...                   |Techniques                                             | 
|----------------------------------|-------------------------------------------------------|
|**Sooner**                        |Limited Early-Access Programs, Beta Programs, Soft Launches    |
|**More Frequently**               |[Continuous Delivery], [Sprints]()                               |
|**In Smaller Chunks**             |[Modular Releases]() [Microservices]() [Feature Toggles]() Trial Populations   |
|**With Feedback**                 |User Communities, Support Groups, Monitoring, Logging, Analytics|

## External Events and Bad Actors

We're familiar with the concept of taking steps on the [Risk Landscape], wherein we [take action]() to move to a position where the [Attendant Risks](Glossary#attendant-risk) are more acceptable to us.  However, now we have to contend with the idea that external events _also_ change the risk landscape too.  If there is sudden bad weather, we might have a risk of a power-cut, and the losses that might entail to productivity or sales.   If there is a change of government, that might impact the contracts we've written, or the security of our servers or staff.

Being _in production_ is accepting that the [Risk Landscape]() is a volatile, uncaring place.  But it's worse than that, since we also have to contend with [Bad Actors], who are deliberately out to exploit weaknesses in the systems we build.

Ordinarily, when we transact with a [Dependency], it should be the case that after the transaction, there is value on both sides of the transaction.  This could be, _you do my accounting_, I pay you money.  On both sides, financial risks are reduced.  If the price is too high, or too low, we see one or other side getting the better deal, and _capturing an unfair share of the value_. 

With a [Bad Actor], we're in a situation more like a zero-sum game:  value is _taken_ from one party and _transferred_ to the other.  These are exactly the dependency relationships that societies _don't_ condone: there is net _zero_ or _negative_ value in the transaction.

[In this diagram, B does a deal with A, the value of the product B gets from A is always 4, but the price varies with the X axis.  When the price is zero, B captures all the value, but as the price increases, it becomes a worse and worse deal for B, and the net value heads towards zero or negative.](images/deal.png)


- Regulatory Risk  Legal Risk  (Pestle?)

## Security Risk

Complex systems (ones which contain multiple, interacting parts, like the ones in the above diagrams) have to contend with their external environments, and try to minimize the ways in which they get interrupted from outside either by _Bad Actors_ or external events.  In the tbd

Interestingly, security is handled in very similar ways at all sorts of levels:

- **Walls**: defences _around_ the complex system, to protect it's parts from the external environment.  
- **Doors**: ways to get _in_ and _out_ of the complex system, possibly with _locks_.
- **Guards**: to make sure only the right things go in and out.  (i.e. to try and keep out _Bad Actors_).
- **Police**: to defend from _within_ the system, against [Agency Risk]() and _invaders_.
- **Subterfuge**: Hiding, camouflage, disguises, pretending to be something else. tbd   

These work various levels in our own bodies:  our _cells_ have _cell walls_ around them, and _cell membranes_ that act as the guards to allow things in and out.  Our _bodies_ have _skin_ to keep the world out, and we have _mouths_, _eyes_, _pores_ and so on to allow things in and out.  We have an _immune system_ to act as the police.

Our societies work in similar ways: in medieval times, a city would have walls, guards and doors to keep out intruders.  Nowadays, we have customs control, borders and passports.

We're waking up to the realisation that our software systems need to work the same way:  we have [Firewalls]() to protect our organisations, we lock down _ports_ on servers to ensure there are the minimum number of doors to guard and we _police_ the servers ourselves with monitoring tools and anti-virus software.  

    - Security Risk
      - Hacking
      - Denial Of Service
      - Security, Trust and Complexity 
      - oWASp
      
tbd, How much do compilers do for you?   Now, they prevent many kinds of security error.  Libraries too.  

      
      
      
## Operational Risk

When processes fail, this is called *Operational Risk*:

tbd - Wikipedia definition

This is a very specific name for [Reliability Risk]() with regard to processes.  In the UK each year, X number of people are killed in car accidents.  If you regard driving a car from A to B as a process, then you could say that car accidents are [Operational Risk].  Why do we tolerate such costly operational risk in the UK.  Could it be reduced?  Well, yes.  There are lots of ways.  One way is that we could just reduce the speed limit.  
 
It is interesting that we _don't_ do that:  although we know the driving process fails, and fails in a way that is costly to human lives, as a society we value the freedom, the economic efficiency and time savings that come from not mitigating this operational risk.  Changing the speed limit would have it's own risks, of course: there would be a complicated transition to manage.   However, if ten times as many people were killed in car accidents, and it was shown that reducing the speed limit would help, maybe it would be done.  The [Operational Risk]() would outweigh the [Schedule Risk](Schedule-Risk).

The point of this is that we _accept_ [Operational Risk]() as we go.  However, if opportunities rise to mitigate it, which don't leave us with a net risk increase elsewhere, we'll make those improvements.      
      


tbd.  diagram version 3.

Mitigating [Security Risk]() is a trade-off.  You can spent _a lot_ of time and effort on this, only to never face the


secrets:  how to mitigate this

## Effect / Impact

Sometimes, it's possible to measure the impact of Operational Risks.  For example, if a software system fails, and leaves customers unable to access it, this can have a measurable financial impact in lost revenues or damages.   Car recall example tbd. - fight club  

Impact is usually proportional to some of the below variables:

 - Number of customers affected.
 - Number of transactions affected.
 - Size of the transactions
 - Length of time systems were affected.

stuff that can go wrong in production

changing stuff in production is harder than changing it in test, as you have to _migrate_.

all the costs of breaking stuff, and damaging the running of the business.

reputation damage
(you only get one chance to make a first impression)

 - You don't know all the ways the software will get used in production.
 - Different browsers, versions of code, accessiblilty.


- CAn you support all the users?  IS there enough kit?  WIll you know?

Correlation
	- Upgrades ( tell story of Research upgrade that went wrong because we were upgrading at the same time as an outage)
      - Single points of failure.

reputational damage


## Reaction & Recovery

## Reliability Risk

    - Feedback Loops
       - Bug reports, feedback
       - Quality of feedback
       - Internal Controls
         - Agency Risk meets Production Risk (bad act
         ors, controls)



      - Contingency Planning 
      - Disaster Recovery
            - Performance Degradation / Runaway processes  (Performance Risk)
      
            - Support (trade off - promptness vs ability)
      
      Sometimes, the reaction of the company makes things worse - streisand effect? others?

      - Poor monitoring, visibility risk meets operational risk (otherwise, it doesn't matter - good example here)
      - Correlation  (need a good example here)
      - Monitoring Tools and Logs

## Prevention

 - How we learn from our mistakes
 - You can't know everything
 - Reality changes anyway
 
## Performance Risk

There is a lot more to Operational Risk.  Here, we've touched on it, and sketched the edges of it enough for it to be familiar and fit in our framework.

## Reputational Risk

## High-Profile Cases

## Maturity 

https://math.nist.gov/IFIP-UQSC-2011/slides/Oberkampf.pdf
https://www.bsimm.com/framework/intelligence/attack-models.html

OWASP