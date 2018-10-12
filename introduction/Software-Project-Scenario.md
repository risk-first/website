![For Review](images/state/for-review.png)

Where do the risks of the project lie? <!-- tweet-end --> 

How do we decide what _needs to be done today_ on a software project? <!-- tweet-end --> 

Let's look again at the simple risk framework from the [introduction](A-Simple-Scenario) and try to apply it at the level of the _entire project_.

![Taking action changes reality, but it changes your perception of the attendant risks too](images/generated/model_vs_reality.png)

## Today's Action

How should we decide how to spend our time today?  

What actions should we take?  (In [Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)) terminology, what is our _Sprint Goal_?).

Let's say that we are working in a Startup, on a project building an online service.  As we discussed previously, we could call this a [Goal](Glossary#goal-in-mind), but we could also restate it as mitigating [Risk](Glossary#attendant-risk), which gives more clarity about our intentions.   For the startup, launching the Online Service is about mitigating ([Funding-Risk](Scarcity-Risk#funding-risk)), in order to keep the startup alive. 

## Attendant Risks

What are the [Attendant Risks](Glossary#attendant-risk) that come with that goal?  Here are some to get us started:

1. The users can’t access the system
2. The data gets lost, stolen. 
3. The data is wrong or corrupted
4. There are bugs that prevent the functionality working
5. The functionality isn’t there that the user needs ([Feature Risk](Feature-Risk)).
6. Our [Internal Model](Glossary#Internal-Model) of the market is poor, and we could be building the wrong thing.

I'm sure you can think of some more. 

![Our Goal, With Attendant Risks](images/generated/software_project_scenario_action.png)

## Evaluating The Risks

Next, we can look at each of these risks and consider the threat they represent.  The same [Attendant Risks](Glossary#attendant-risk) will be evaluated differently depending on the _nature of the project_ and the mitigations you already have in place.  For example:

* If they **can’t access it**, does that mean that they’re stuck unable to get on the train?  Or they can’t listen to music?  
* If the **data is lost**, does this mean that no one can get on the plane?  Or that the patients have to have their CAT scans done again?  Or that people’s private information is scattered around the Internet?
* If the **data is wrong**, does that mean that the wrong people get sent their parcels?  Do they receive the wrong orders?  Do they end up going to the wrong courses?
* If the **security is compromised** and all the data exposed, does that mean confidential details are shared on the Internet, or that they just need to create a new password?
* If there is **missing functionality**, will they not buy the system?  Will they use a competitor’s product?  Will they waste time doing things a harder or less optimal way?
* If our **[Internal Model](Glossary#Internal-Model) is wrong**, then is there a chance we are building something for a non-existent market?  Or annoying our customers?  Or leaving an opportunity for competitors?

### A Single Attendant Risk:  Getting Hacked

Let's consider a single risk:  that the website gets hacked, and sensitive data is stolen. <!-- tweet-end --> How we evaluate this risk is going to depend on a number of factors:

* How many users we have
* The importance of the data
* How much revenue will be lost
* Risk of litigation
* etc.

#### Ashley Maddison

In 2016, Ashley Maddison, a website specialising in aiding extra-marital affairs, [suffered a data breach](https://en.wikipedia.org/wiki/Ashley_Madison_data_breach), revealing the personal details of all of their clients on the Internet.  The sensitive nature of their business contrasts sharply with the reported sloppiness of their security arrangements. 

Can our risk model explain what happened here?

- It's possible that for the developers in question, security concerns were a [Hidden Risk](Glossary#Hidden-Risk): they were not aware of the dangers of being hacked.
- It's possible that _at the time of setting up the security arrangements_, stronger security was considered, but the evaluation of the risk was low:  Perhaps, the risk of not shipping quickly was deemed greater.  And so they ignored this concern.
- It's also possible that _for Ashley Maddison_ the perceived impact of any data-breach was considered low.  The impact is on the _customers_, rather than the _company_.
- But, as the number of users of the sites increased, the risk increased too, but there was (apparently) no re-evaluation of the risk otherwise they would have addressed it.  This was a costly _failure to update the [Internal Model](Glossary#Internal-Model)_.

![Attendant Risks of Improved Security](images/generated/software_project_scenario_action_2.png)

This story highlights a couple of important lessons.  <!-- tweet-start -->First, when exposing a service on the Internet, it's now a good idea to _look for trouble_:  you should go out and try and improve your [Internal Model](Glossary#Internal-Model).<!-- tweet-end -->   Thankfully, this is what sites like [OWASP](https://www.owasp.org/index.php/Top_10-2017_Top_10) are for:  they _tell you about the [Attendant Risks](Glossary#attendant-risk)_ <!-- tweet-end --> and further, try to provide some evaluation of them to guide your actions.   Second, you shouldn't expect an organisation with a morally-questionable business model to have your best interests at heart.

## Actions Are Dependent On Risk Evaluation

So, _evaluating risks against one another other_ allows us to determine what actions we should pursue on any given day, by answering the question:

Which actions give us the biggest benefit in terms of mitigating [Attendant Risk](Glossary#attendant-risk)?

For example, it's worth considering that if we're just starting this project, risks 1-4 in our diagram above are _negligible_.   It makes complete sense from a risk-evaluation perspective that we're only going to spend time building functionality or improving our understanding of the market. 

## Tacit and Explicit Modelling

As we saw in the example of the [Dinner Party](A-Simple-Scenario), creating an internal model is something _we just do_<!-- tweet-end -->:  we have this functionality in our brains already.  When we scale this up to a whole project team, we can expect the individuals on the project to continue to do this, but we might also want to consider _explicitly_ creating a [risk register for the whole project](Risk-Theory).  

In the next section, we're going to take a quick aside into looking at some [Risk Theory](Risk-Theory) around this.
