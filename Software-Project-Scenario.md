Where do the risks of the project lie?  

Let's first consider a project that's in production, and has paying clients using it.  How should we decide how to spend our time on a day to day basis?  What actions should we take?

![Reality](images/reality.png)

##  Modelling The Risk Landscape

If we want to take the right actions, we need to have a good [Internal Model](internal_model.md).  Sometimes, we will know that our model is deficient, and our time should be spend _improving_ it, perhaps by talking to our clients, or the support staff, or other developers.

Our [Goal In Mind](goal_in_mind.md) might be to grow our user base, but there are [Attendant Risks](attendant_risk.md) that come with that goal, such as:

1. The users can’t access it
2. The data gets lost, stolen. 
3. The data is wrong or corrupted
4. There are bugs that prevent the functionality working
5. The functionality isn’t there that the user needs.

## Outcomes

As well as the positive outcome of our goal, we can also predict some negative outcomes if these risks materialise:

* Losing Revenue
* Legal Culpability
* Losing Users
* Bad Reputation
* etc.

## Evaluating Risk

Let's consider a single risk:  that the website gets hacked, and sensitive data is stolen.  How we evaluate this risk is going to depend on a number of factors:

* How many users we have
* The importance of the data
* How much revenue will be lost
* Risk of litigation
* etc.

We've seen [in the example of hacks on LinkedIn and Ashley Maddison](https://www.acunetix.com/blog/articles/password-hashing-and-the-ashley-madison-hack/) that passwords were not held as hashes in the database.  The problem is, at the time of implementing the password storage, the evaluation of the risk was low.  Perhaps, the risk of not shipping quickly was deemed greater.  

However, as the number of users of the sites increased, the risk increased too, but there was no re-evaluation of the risk otherwise they would have addressed it.  This was a costly _failure to update the [Internal Model](internal_model.md)_.

## Tacit and Explicit Modelling

As we saw in the example of the [Dinner Party](Introduction), creating an internal model is something _we just do_:  we have this functionality in our brains already.  When we scale this up to a whole project team, we can expect the individuals on the project to continue to do this, but we might also want to consider _explicitly_ creating a [risk register for the whole project](https://en.wikipedia.org/wiki/Risk_register).  

Whether we do this explicitly or not, we are still individually following this model.

