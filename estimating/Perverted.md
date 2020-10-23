# EStimates are perverted by agency risks.

As a project manager, I might consider that being late is a bigger risk than being early. Hence the idea of padding estimates.  

Being late (i.e. a too-early estimate) risks:
 - Broken Promises, Damaged Reputation [Trust Risk]()   Personal
 - Being Fired for bad management. [Funding Risk]()     Personal
 - Missing critical dates that co-ordinate with other teams. [Coordination Risk]()  Business
 - Project failure Personal, Business.

But being early (a too-late estimate) risks:
 - Wasted developer time          [Funding Risk]()     Business
 - Parkinsons’ Law (Gold Plating) [Complexity Risk]()  Business
 - Estimate was too long, people go elsewhere          Personal
 

![Risks now and later](/images/generated/estimating/early_late_risks.png)

As a project manager, you're much more likely to put your own interests ahead of the company.  But luckily, the goals of the company and the project manager co-incide for the most part:  managers are incentivised by pay (and maybe bonuses) to bring projects in on time, and doing so looks good on the CV.

Nevertheless, you would expect them to estimate things in a way that benefits their own risk profile, over the company's.  

## A Better Understanding Of Risk

Risk "feeds back" into the estimation process in some unusual ways.   Let's change the model slightly.

- The client will pay us £10,000 to process 500 client records.
- The client wants the records completed in 20 days. **And that's it**.
- If we hit the delivery date, great.  Otherwise, within 25 days **there's a massive argument and annoyance but we get paid eventually anyway.**
- It takes 1-3 hours to process a client record, and we have 3 staff working 8 hours per day.  Let's model this with a mean of 2 hours and standard deviation of 1 hour.

Suddenly, the choice is no longer a sliding scale:  we don't have control of the estimate anymore.  Either we accept the risk of the work, or we don't.   Which should we do?  What does it depend on, now?

## Perverted

Estimates are easily perverted by the risks, as you can see above.  Although [we've discussed it before](Estimates.md), Let's look at [Aranda and Easterbrook, 2005](http://www.cs.toronto.edu/%7Esme/papers/2005/ESEC-FSE-05-Aranda.pdf) again.  

In their research they asked developers split into three groups (A, B and Control) to give individual estimates on how long a piece of software would take to build.   They were each given the same specification.  However:

- Group A was given the hint: "I admit I have no experience with software, but I guess it will take about two months to finish".
- Group B were given the same hint, except with _20_ months.

How long would members of each group estimate the work to take?  The results were startling.  On average,
  
  - Group A estimated 5.1 months.
  - The Control Group estimated 7.8 months.
  - Group B estimated 15.4 months.
  
The anchor mattered more than experience, how formal the estimation method, or anything else. 

What is the reason for this?  Somehow, the _expectation perverts the estimate_.  Why would developers be influenced by this expectation so much?  Here are some possible reasons:

 - They want the work
 - They believe their own estimates to be worse than average
 - They don't want to upset the client
 
Even in a Fill-The-Bucket domain, estimates can be easily corrupted by outside influences.  Effectively, the _estimate itself_ is a risk-management tool.   

In [Estimates](Estimates.md) we said that the main (good) reason for estimating is:

> "**To allow for the creation of _events_.**  As we saw in [Deadline Risk](Deadline-Risk.md), if we can put a date on something, we can mitigate lots of [Coordination Risk](Coordination-Risk.md). Having a _release date_ for a product allows whole teams of people to coordinate their activities in ways that hugely reduce the need for [Communication](Communication-Risk.md).  "Attack at dawn" allows disparate army units to avoid the [Coordination Risk](Coordination-Risk.md) inherent in "attack on my signal".  This is a _good reason for estimating_ because by using events you are mitigating [Coordination Risk](Coordination-Risk.md).  This is often called a _hard deadline_." -- [Estimates, _Risk-First_](Estimates.md)

But here, we've seen that the long-term benefits of good estimates are sacrificed for the short-term gain of a contract won or a client impressed.

Estimating as a technique then is already suspect, even within Fill-The-Bucket domain.  However, as all developers are painfully aware, building software is _not_ like Fill-The-Bucket.  