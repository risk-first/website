---
title: De-Risking
description: Terms to use when talking about risk on a project.
url: https://riskfirst.org/thinking/De-Risking

featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/de-risking.svg">De-Risking</image-artifact>'
categories:
 - Thinking Risk-First
order: 6
redirect_from: 
 - /De-Risking
---

# De-Risking

It's important not only to consider the [Attendant Risks](../thinking/Glossary.md#attendant-risk) you're trying to mitigate, but the ones you're likely to pick up in the process.  This means picking a careful path through the [Risk Landscape](../thinking/Glossary.md#risk-landscape).  This is the essence of _De-Risking_. 

> "To take steps to make (something) less risky or less likely to involve a financial loss." - [De-Risk,_OxfordDictionaries.com_](https://en.oxforddictionaries.com/definition/de-risk)

Some simple examples of this might be:

- **Safety-nets and ropes** de-risk climbing.  But, the activity of climbing itself is otherwise much unchanged.
- **Backups and Source-Control** de-risk the development process by reducing the impact of computer failure.  Our process is changed _slightly_ by this imposition, but we're not massively inconvenienced.
- **Insurance** de-risks owning a house, going on holiday or driving a car.  Usually, the payment is small enough not to impact us too much.
- **The National Health Service (NHS)** de-risks medical expense by pooling health-care costs across the entire population.  If you were struck down with a debilitating illness, then at least you wouldn't also have to pay to get better. 

Let's look at some common strategies for De-Risking.

## Mitigate

**Mitigating** risk is taking steps towards minimising either its likelihood or impact (as we discussed in the [Evaluating Risk](Evaluating-Risk.md) section).  Safety-nets, for example, mitigate the impact of hitting the ground.  This is the main approach we will be looking at in Part 2.   We'll break down risk into its different types and look at the general mitigations for each.  

## Avoid

**Avoiding** risk, means taking a route on the [Risk Landscape](../thinking/Glossary.md#risk-landscape) _around_ the risk.  For example, if you are working in a team which has no experience of relational databases, then _storing data in files_ might be a way to avoid the [Learning Curve Risk](../risks/Communication-Risk.md#learning-curve-risk) associated with this technology.  

Of course, you may pick up other, more serious [Attendant Risks](../thinking/Glossary.md#attendant-risk) as a result: Relational Databases are software solutions to many kinds of [Coordination Risk](../risks/Coordination-Risk.md) problem.

_Not_ launching an online service _avoids_ the [Operational Risk](../risks/Operational-Risk.md) involved in running one.  Although you avoid the upsides too.

## Transfer

**Transferring** risk means _making it someone else's problem_.  For example, when I buy home insurance, the personal consequence of my house burning down is reduced.  It hasn't gone away completely, but at least the financial element of it is handled by the insurance company.

In part 2, we'll see how **Transfer** of risk is an essential feature of [Software-as-a-Service (SaaS)](../risks/Software-Dependency-Risk.md).  Inside organisations, **Transfer** of risk can become a political game:

> "... ownership results in ‘one throat to choke’ for audit functions [and] from ownership comes responsibility. A lot of the political footwork in an enterprise revolves around trying to not own technologies. Who wants to be responsible for Java usage across a technology function of dozens of thousands of staff, any of whom might be doing crazy stuff? You first, mate. " - [Why Are Enterprises So Slow?, _zwischenzugs.com_](https://zwischenzugs.com/2018/10/02/why-are-enterprises-so-slow/)

## Ignore / Accept

**Accepting** risk is to deal with it when it arises.   One example is the [Key Person Risk](../risks/Scarcity-Risk.md#staff-risk) involved in having a super-star programmer on the team.  Although there would be fallout if they left, they are often mitigating more risk than they cause.  

Another example is using particular software dependencies:   building a mobile application which requires a Facebook account to log in might give rise to the risk that people without Facebook accounts can't log in, but might simplify the software to such an extent that it's worthwhile.

Whereas **Accepting** a risk seems to imply an eyes-wide-open examination; **Ignoring** seems to imply that either the risk is so insignificant it doesn't warrant evaluation, or so daunting that it can't be stared down.  Either way, **Ignoring** a risk amounts to the same thing as **Accepting** it, since you're not doing anything about it. 

**Accepting** a risk has to occur _before_ we can **Mitigate** it.  

### A Nice Problem To Have

**Ignoring** or **Accepting** risks is a lot less work than **Mitigating** them, and sometimes it can feel negligent to just add them to the backlog or risk-register without doing anything immediately about them.  One useful test I have found is whether "This would be a nice problem to have".  For example:

> "Running out of space in the database would be a nice problem to have, because it would mean we have lots of users"
> "Users complaining about lacking function X would be a nice problem to have, because it would mean they were using the system"

Applying this kind of logic at the start of a project leads you towards building a [Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product).

### Learned Helplessness

Sometimes risks just go away on their own.  [Learned Helplessness](https://en.wikipedia.org/wiki/Learned_helplessness), on the other hand, is where we _could_ do something about the risk, but fail to see that as an option:

> "Learned helplessness is behaviour typical of animals, and in rare cases humans, that occurs when the subject endures repeatedly painful or otherwise aversive stimuli which it is unable to escape or avoid. After such experience, the organism often fails to learn or accept "escape" or "avoidance" in new situations where such behavior would likely be effective. " - [Learned Helplessness, _Wikipedia_](https://en.wikipedia.org/wiki/Learned_helplessness)

## Contain

**Containing** risks means setting aside sufficient time or money to deal with them if they occur.  This is an excellent approach for [Hidden Risk](../thinking/Glossary.md#hidden-risk) or entire sets of minor [Attendant Risks](../thinking/Glossary.md#attendant-risk).  

Whenever a project-manager builds slack into a project plan, this is **Containment**.   "Time-Boxing" is also containment: this is where you give a piece of work a week (say) to prove itself.  If it can't be done in this time, we move on and try a different approach.

In the section on [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) we are going to look in detail at how this works. 

## Exploit

**Exploiting** as a strategy usually means taking advantage of the upside of a risk.   For example, ensuring enough stock is available to mitigate the risk of a rush on sales over the Christmas period, or ensuring your website has enough bandwidth to capture all the traffic headed towards it after it's featured on television.  

Going back to the example of home insurance, the Insurance company is **exploiting** the risk of my house burning down by selling me insurance.  This is a common pattern:  wherever there is risk, there is likely to be a way to profit from it.  

Later, in the section on [Process Risk](../risks/Process-Risk.md) we'll be looking at how **exploiting risk** can happen organically within a company. 

## Re-cap

Let's look at the journey so far.

 - In [A Simple Scenario](A-Simple-Scenario.md) we looked at how risk pervades every goal we have in life, big or small.  We saw that risk stems from the fact that our [Internal Model](../thinking/Glossary.md#Internal-Model) of the world couldn't capture everything about reality, and so some things were down to chance.  
 
 - In the [Development Process](Development-Process.md) we looked at how common software engineering conventions like Unit Testing, User Acceptance Testing and Integration could help us manage the risk of taking an idea to production, by _gradually_ introducing it to reality in stages.

 - Then, generalizing the lessons of the Development Process article, we examined the idea that [Meeting Reality](Meeting-Reality.md) frequently helps flush out [Hidden Risks](../thinking/Glossary.md#hidden-risk) and improve your [Internal Model](../thinking/Glossary.md#Internal-Model).
 
 - In [Just Risk](Just-Risk.md) we took a leap of faith: could _everything_ we do just be risk management?  And we looked at the RAID log and thought that maybe it could be.   
 
 - [Evaluating Risk](Evaluating-Risk.md) was an aside, looking at some terminology and the useful concept of a Risk Register.
 
 - We looked at [Cadence](Cadence.md) and how feedback loops allow you to navigate the [Risk Landscape](../thinking/Glossary.md#risk-landscape) more effectively, by showing you more quickly when you're going wrong.
 
What this has been building towards is supplying us with a vocabulary with which to communicate to our team-mates about which Risks are important to us, which actions we believe are the right ones, and which tools we should use.

In the next section we will see [an example of this in action](A-Conversation.md).


