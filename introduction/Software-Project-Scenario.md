Where do the risks of the project lie?  

How do we decide what _needs to be done today_ on a software project?  

Let's look again at the simple risk framework and try to apply it:

![Reality](images/reality.png)

## Goal In Mind

Let's consider a project that's in production, and has paying clients using it.  How should we decide how to spend our time on a day to day basis?  What actions should we take?  (In [Scrum](frameworks/agile.md) terminology, this might be our _Sprint Goal_?).

If we want to take the right actions, we need to have a good [Internal Model](internal_model.md).  

Sometimes, we will know that our model is deficient, and our time should be spend _improving_ it, perhaps by talking to our clients, or the support staff, or other developers, or reading.  

But let's say for example, today our [Goal In Mind](goal_in_mind.md) is to grow our user base.  

## Attendant Risks

What are the [Attendant Risks](attendant_risk.md) that come with that goal?  Here are some to get us started:

1. The users can’t access it
2. The data gets lost, stolen. 
3. The data is wrong or corrupted
4. There are bugs that prevent the functionality working
5. The functionality isn’t there that the user needs.

I'm sure you can think of some more. 

## Evaluating The Risks.

Next, we can look at each of these risks and consider the threat they represent.  Usually, when [evaluating a risk](introduction/Risk-Theory.md) we consider both it's **impact** and **likelihood**.  

The same [Attendant Risks](Attendant-Risk) will be evaluated differently depending on the _nature of the project_ and the mitigations you already have in place.  For example:

* If they **can’t access it**, does that mean that they’re stuck unable to get on the train?  Or they can’t listen to music?  
* If the **data is lost**, does this mean that no one can get on the plane?  Or that the patients have to have their CAT scans done again?  Or that people’s private information is scattered around the Internet?
* If the **data is wrong**, does that mean that the wrong people get sent their parcels?  Do they receive the wrong orders?  Do they end up going to the wrong courses?
* If there are **bugs**, does it mean that their pictures don’t end up on the internet?  Does it mean that they have to restart the program?  Does it mean that they’ll waste time, or that they end up thinking they have insurance but haven’t?  
* If there is **missing functionality**, will they not buy the system?  Will they use a competitor’s product?  Will they waste time doing things a harder or less optimal way?

## Outcomes

As part of evaluating the risks, we can also _predict_ the negative outcomes if these risks materialise and we don't take action.

* Losing Revenue
* Legal Culpability
* Losing Users
* Bad Reputation
* etc.

## Stolen Data

Let's consider a single risk:  that the website gets hacked, and sensitive data is stolen.  How we evaluate this risk is going to depend on a number of factors:

* How many users we have
* The importance of the data
* How much revenue will be lost
* Risk of litigation
* etc.

We've seen [in the example of hacks on LinkedIn and Ashley Maddison](https://www.acunetix.com/blog/articles/password-hashing-and-the-ashley-madison-hack/) that passwords were not held as hashes in the database.  (A practice which experienced developers mainly would see as negligent).  

How does our model explain what happened here?

- It's possible that _at the time of implementing the password storage_, hashing was considered, but the evaluation of the risk was low:  Perhaps, the risk of not shipping quickly was deemed greater.  And so they ignored this concern.
- It's also possible that for the developers in question this was a [Hidden Risk](terminology/Attendant-Risk.md), and they hadn't even considered it. 
- However, as the number of users of the sites increased, the risk increased too, but there was no re-evaluation of the risk otherwise they would have addressed it.  This was a costly _failure to update the [Internal Model](internal_model.md)_.

When exposing a service on the Internet, it's now a good idea to _look for trouble_:  you should go out and try and improve your [Internal Model](internal_model.md).   

Thankfully, this is what sites like [OWASP](https://www.owasp.org/index.php/Top_10-2017_Top_10) are for:  they _tell you about the [Attendant Risks](Attendant-Risk)_ and further, try to provide some evaluation of them to guide your actions.

## Tacit and Explicit Modelling

As we saw in the example of the [Dinner Party](Introduction), creating an internal model is something _we just do_:  we have this functionality in our brains already.  When we scale this up to a whole project team, we can expect the individuals on the project to continue to do this, but we might also want to consider _explicitly_ creating a [risk register for the whole project](introduction/Risk-Theory.md).  

Whether we do this explicitly or not, we are still individually following this model.

