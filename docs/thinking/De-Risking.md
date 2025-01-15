---
title: Derisking
description: What can you do with the risks on a software project?


featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/de-risking.svg">De-Risking</image-artifact>'
tags:
 - Take Action
 - Risk Landscape
 - Upside Risk
 - Share
 - Avoid
 - Exploit
 - Reduce
 - Retain
 - Control
 - Ignore
 - Monitor
definitions:
 - name: Take Action
   description: Refers to any activity in the project. Actions are taken in order to manage some risk. At the same time, Taking Action usually means interacting with reality and updating the Internal Model.
   anchor: what-is-taking-action
 - name: Exploit
   description:  Take advantage of an upside risk or opportunity.
   anchor: exploit
 - name: Reduce
   description:  Minimise the impact of a risk arising.
   anchor: reduce
 - name: Share
   description:  Sharing with another party the burden or loss of a risk.
   anchor: share
 - name: Avoid
   description:  Taking a route on the risk landscape around the risk.
   anchor: avoid
 - name: Retain
   description:  Accepting a risk you can't reduce, share or avoid.
   anchor: retain
 - name: Ignore
   description: Ignoring a risk entirely.
   anchor: ignore
   part_of: Retain
 - name: Control
   description: Accepting a risk but making provisions to ensure it doesn't worsen.
   anchor: control
   part_of: Retain
 - name: Monitor
   description: Identifying, quantifying and measuring a risk to help manage it.
   anchor: monitor
   part_of: Retain
sidebar_position: 8
redirect_from: 
 - /De-Risking
tweet: yes
---

# Derisking

In this section, we're going to more closely at what, so far, we've called "[Taking Action](/tags/Take-Action)" and separate out different ways this can be done.   We'll introduce the correct risk management terms and give examples of how to apply these to software development.

## What is Taking Action?

So far in Risk-First, we've talked about [Taking Action](/tags/Take-Action) as having two effects:

 1. It's the way in which we [Meet Reality](/tags/Meeting-Reality) to learn about the world and uncover [Hidden Risks](/tags/Hidden-Risk).
 2. It's the way we change our position on the [Risk Landscape](/tags/Risk-Landscape) via actions with a positive [Payoff](/tags/Payoff).
 
As we saw in the discussion of [Payoff](Consider-Payoff), any time you take action you are accruing [attendant risk](/tags/Attendant-Risk), and we want to take actions with the most favourable payoff.  So here we are going to look at common ways in which we can lean the payoff in our favour.  This is called _derisking_:   

> "To remove the risk from; to make safe. " - [Derisk, _Wiktionary_](https://en.wiktionary.org/wiki/derisk)

|Strategy                                       |Effect On Stakes _(Downsides, Attendant Risks)_ | Effect on Payoff _(Goals Achieved, Risks Reduced)_ |
|-----------------------------------------------|:----------------------------------------------:|:--------------------------------------------------:|
| [Reduce](#reduce)                             | _reduce_                                       |                                                    |
| [Exploit](#exploit)                           |                                                | _increase_                                         |
| [Avoid](#avoid)                               | _zero_                                         | _zero_                                             |
| [Share](#share)                               | _modify ownership_                             | _modify ownership_                                  |
| [Retain](#retain)&nbsp;_consisting&nbsp;of..._|                                                |                                                    |
| &nbsp;&nbsp; - [Ignore](#ignore)              |                                                |                                                    |
| &nbsp;&nbsp; - [Control](#control)            | _limit_                                        |                                                    |
| &nbsp;&nbsp; - [Monitor](#monitor)            | _monitor_                                      |                                                    |

The table above lists a set of _generic strategies_ for derisking which we'll look at in more detail below.  I'll give general examples for each and then we'll turn them into specific tactics you can use in software development.

## Reduce 

**Reducing** or **Mitigating** risk is taking steps towards minimising the **impact** (as we discussed in the [Evaluating Risk](Evaluating-Risk) section) of a risk arising.  

> "To reduce, lessen, or decrease and thereby to make less severe or easier to bear." - [Mitigate, _Wiktionary_](https://en.wiktionary.org/wiki/mitigate) 

### General Examples

- **Safety-nets and ropes** mitigates some of the risks of climbing.  The fall damage you'll take when you lose your grip is hopefully much reduced but the activity of climbing itself is otherwise much unchanged.  

- **Backups and Source-Control** mitigates the impact of computer failure.  Hardware _still fails_ but the impact is less if we can restore from a recent backup.  Our process is changed _slightly_ by this imposition but we're not massively inconvenienced.

- **Fire alarms** don't stop a fire but by helping get people out of the building faster they save lives.

### Specific Tactics

1.  **Do Risky Things Early**:  If you are building some software process which has ten steps in it, and the 9th step has a high probability of not being implementable, then _build the 9th step first_.  If you succeed, you've massively reduced the risk of the process construction.  IF you fail, you'll only have lost the time it took to build that one step.  _Build a proof of concept_.

1.  **Take Care With Dependencies**: Choose popular technologies and known reliable components. Whilst hiring people is hard work at the best of times, hiring PL/1 programmers is _really hard_. This tactic is explored in much more depth in [On Software Dependencies](/risks/On-Software-Dependencies)

1.  **Redundancy**: Avoid single points of failure.   For example, Pair Programming is a control espoused by [Extreme Programming](/tags/Extreme-Programming) to reduce [Key Person Risk](/tags/Agency-Risk) and [Communication Risk](/tags/Communication-Risk).  See [Dependency Risks](/tags/Dependency-Risks) for more on this.  

1.  **Create Options**:  Using _feature flags_ allows you to turn off functionality in production, avoiding an all-or-nothing commitment.  Working in branches gives the same optionality while developing. 

1.  **Practising**:  Running fire-drills or rehearsing risky scenarios helps to de-risk those occurring.

## Exploit

**Exploiting** or **enhancing** as a strategy usually means taking advantage of the upside of a risk or opportunity.  That is, either increasing the probability or impact respectively of it happening.

### General Examples

- **Buying extra stock** to exploit the opportunity of a rush on sales over the Christmas period.

- **Mergers** are a way for a firm to double down on exploiting a particular market, whilst at the same time reducing the risk of competition.

- **Locating In A Busy City** might exploit a sales opportunity, whilst at the same time perhaps increasing rental costs.

- **Star Players**: Sports teams will often spend lavishly on a star player in the hope of winning the title, risking their balance sheet in the process.
  
### Specific Tactics

1. **Address multiple risks**: Writing some unit tests on your project might be an opportunity to build your reputation in your team as well as be an opportunity to _get better at testing_ and perhaps learn some new tools which improve your CV... if you exploit the opportunity in the right way.

1. **Forecast**: It's often worth doing some forecasting to see what would happen if certain opportunities occur.  Will the servers stay up if you are unexpectedly featured in the news?  

1. **Environmental Scanning**:  Technology changes quickly, so keep track of the latest trends to see if any of them are an opportunity for you or your project.

1. **Going all-in**: Making a big bet on the most promising opportunity might work better than trying to be balanced, especially if there is competition.  Compare with...

1. **Barbell Strategy**: Have a low-risk bet that will pay the rent (e.g. some consulting) whilst also having a high-risk bet that might pay high dividends (e.g. your AI-based trading algorithm).

## Avoid

**Avoiding** risk, means taking a route on the [Risk Landscape](/tags/Risk-Landscape) _around_ the risk.  Neither the stakes or the payoff are changed.  

### General Examples

 - **Avoiding flying** means that you're not going to be killed in a plane crash.  However, you also lose the benefits that flying affords.  

 - **Don't Launch a SaaS**: _Not_ launching an online service _avoids_ the [Operational Risk](/tags/Operational-Risk) involved in running one.  Although you'll need to look for some other way to make a living.

### Specific Tactics

1.  **Avoid Unfamiliar Technologies**:  If you are working in a team which has no experience of relational databases, then storing data in files _might_ be a way to avoid the [Internal Model Risk](/tags/Internal-Model-Risk) associated with this technology.  Of course, you may pick up other, more serious risks as a result: Relational Databases are software solutions to many kinds of [Coordination Risk](/tags/Coordination-Risk) problem, such as concurrent writes or consistency.

2.  **Do Your Research**:  If you're not clear about the risks of a particular decision up front, it can be hard to avoid them.  Although, some of the biggest breakthroughs come from people _not_ following this advice such as the Wright Brothers inventing powered flight and Percy Spencer inventing the microwave oven.  Don't spend your life avoiding all risks.

3.  **Specialise and focus**:  Software that performs well at a single, novel purpose will be in competition with fewer alternatives and have a smaller risk surface overall.  You can avoid the risk of competition by looking for an unoccupied niche.  

## Share

**Sharing** or **transferring** risk means making it someone else's problem too. 

> "Sharing with another party the burden of loss or the benefit of gain, from a risk, and the measures to reduce a risk" - [Risk Sharing, _Wikipedia_](https://en.wikipedia.org/wiki/Risk_management#Risk_sharing)

### General Examples

- **Insurance** de-risks owning a house, going on holiday or driving a car.  Usually, the payment is small enough not to impact us too much.   For the owner, the risk hasn't gone away completely, but at least the financial loss element of it is handled by the insurance company.

- **The National Health Service (NHS)** derisks health care across the UK population.  You still have the risk of illness but not the financial risk of also have to pay to get better. 

- **High Ladders**:  a policy of mine is to avoid working up high ladders or with unfamiliar power tools.  I just don't trust myself with this.  I employ professionals to do these jobs even though conceivably I could do them myself.

### Specific Tactics

1. **Software as a Service**: [Software-as-a-Service (SaaS)](/risks/On-Software-Dependencies) is an example of transferring risk, since another party is responsible for making sure the service is up-and-running, backed up, etc.  

1. **Employ Good People**: Having staff is a great way to share risk, whether you are a firm or a team.  The employee takes care of some of the risk for you.  In return, you're paying them a wage which helps them manage their own risks.  This is the time-tested, win-win symbiosis of a good trade.    

1. **Escalating**: If your team is receiving poor service from a supplier it might be in your interests to share this risk with say the legal department or procurement team.  
 
1. **Taking Responsibility**: If your firm is struggling to deal with a certain risk, why not become the expert and make yourself indispensable?  In the section on [Process Risk](/tags/Process-Risk) we'll be looking at how this can happen organically within a company.    
 
1. **Delegating Responsibility**: Putting people in charge of specific risks shares or transfers the responsibility away from you.  Note that inside organisations, transfer of risk can become a political game:

> "... ownership results in ‘one throat to choke’ for audit functions (and) from ownership comes responsibility. A lot of the political footwork in an enterprise revolves around trying to not own technologies. Who wants to be responsible for Java usage across a technology function of dozens of thousands of staff, any of whom might be doing crazy stuff? You first, mate. " - [Why Are Enterprises So Slow?, _zwischenzugs.com_](https://zwischenzugs.com/2018/10/02/why-are-enterprises-so-slow/)

## Retain

**Retaining** or **accepting** risk is to realise that you can't reduce, share or avoid _everything_ because that would be too time-consuming.  Some risks you just have to accept.   Within the generic strategy of retaining a risk, there are three further sub-strategies worth considering: [Ignoring](#ignore), [Controlling](#control) and [Monitoring](#monitor).

## Ignore

**Ignoring** a risk entirely, or indefinitely postponing dealing with it might acceptable if all the other options are worse. 

### General Examples

- **War** is a risk that is usually accepted by businesses.  You're unlikely to be able to buy insurance against this.

- **Key Staff**: Having a super-star on the team is risky as they might leave.  But sometimes they are a risk worth accepting because of the value they bring.  This is covered in more detail in [Agency Risk](/tags/Agency-Risk).

### Specific Tactics

1. **Look for nice problems to have**: Worrying about running out of space in the database might be worth ignoring.  Clearly it is a risk, would be a _nice problem to have_, because it could only happen if we had more users.   Similarly, worrying about a missing piece of functionality might be  worth ignoring:  if users start complaining then that's _a nice problem to have_ as they are using your software and want to see it improve.

1. **Accept Dependencies**:  Building a mobile application which requires a social account to log in might give rise to the risk that people without social accounts can't log in, but might simplify development to such an extent that it's worth ignoring for the time being.

## Control

**Controlling** or **containing** risks means that you accept the risk but you have provisions in place (i.e. **preventive controls**) for when things get out of hand.  

There is a grey area here, because on the one hand you are [retaining](#retain) some of the risk but also trying to [reduce](#reduce) its worst features.  

### General Examples

- **Stop-Loss Trades** are an investment where should the trade start losing too much money, the trade is closed out, limiting the downside.

- **Incident Reporting Plans**: often businesses will have a procedure for dealing with irregular behaviour (such as a cyberattack). 

- **Regulations**: firms such as banks or drug companies operate under heavy regulation, designed to control and limit both the amount of risk they take on and that expose their customers to.

- **Training** people on risky tasks doesn't stop them performing the task, but might prevent them taking too many unnecessary risks.

- **Seatbelts**: could be considered a preventive control to stop people flying through the windscreen when they crash their car.

### Specific Tactics    

1. **Time-Boxing**: give an approach a week (say) to prove itself.  If it can't be done in this time, we move on and try a different approach.

1. **Emergency Funds**: Setting aside sufficient money to deal with a risk if it occurs.

1. **Slack**: Accepting that sometimes tasks run long and building this into the plan.  [Schedule Risk](/tags/Schedule-Risk) examines in detail how this works. 

## Monitor

**Monitoring** a risk, or creating a **detective control** is aimed at identifying and quantifying risk so that it can be managed properly. 

### General Examples

- **Financial Reports** help investors keep an eye on the risk of their stocks.

- **Health and Safety** inspections are valuable for businesses as they might help highlight increasingly risky working practices.

- **Modelling** is often helpful in complex environments like building design or finance where it's not easy to see risks clearly.  

## Specific Tactics

1.  **Establish Metrics** that allow you to observe the performance of the systems you build.   [Internal Model Risk](/tags/Internal-Model-Risk) covers this in more detail.

1.  **Second opinions** and **audits** correct for errors in monitoring by people who can be too close to the problem.

1.  **Sharing data** on performance might help with accountability and awareness of certain risks.

1.  **Dashboards and Logging** are good examples of monitoring in action used extensively in software products.

## A Vocabulary

Here we've been building towards a vocabulary with which to communicate to our team-mates about which risks are important to us (_reduce_, _exploit_, _share_, _retain_, _control_, _monitor_).  This helps us discuss which actions we believe are the right ones and how we should deal with them.

In the next section we will look at the indicators that tell you when to apply these levers.  On to [Cadence](Cadence).


