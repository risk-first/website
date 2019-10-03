
# Kitchen Cabinet

Imagine this scenario:

 - You're asked to help move house.  Specifically, help a friend pack up their kitchen.
 - Each cabinet in the kitchen will take _one hour_. 
 - There are ten cabinets in the kitchen (and nothing else).
 - However, kitchens _may_ be nested in cabinets.  And on ad infinitum.
 
If there is a 1:5 chance of a cabinet containing another kitchen, how long should you estimate for the job?   (The answer is below)

This was suggested in a [Hacker News]() comment discussing software estimation, and struck a chord with many readers.  It's clear that we are no longer in the [Fill-The-Bucket](Fill-The-Bucket.md) domain anymore; our original intuitions about how long things might take are not going to work here.

As a developer, this 'feels' more real to me than [Fill-The-Bucket](Fill-The-Bucket.md).  _Any_ task I take on has an outside chance of telescoping into something _much worse_.  Here's a recent example.  

 - I wanted to test out a css change to my website site (1 hour?)...
 - but in order to avoid wrecking the live version, I would need to do this offline, in [Jekyll](https://jekyllrb.com).. (2 hours?)
 - However, this meant getting Jekyll working locally on my mac (again). (3 hours)
 - However, Jekyll didn't install, because it used a later version of [Ruby](https://www.ruby-lang.org/en/) than the one I had.  (4 hours?)
 - The Ruby version Manager (RVM) I had was out-of-date, and needed updating... (5 hours)
 - and I couldn’t update it because [brew](https://brew.sh) has been disabled by an update to my OS-X installation.  (I think).

All-in-all, it just may not have been possible for me to test that CSS change the way I wanted to.  Every task had a further, worse sub-task embedded within it.

## Distribution

-- simulator for this

There is no _guaranteed_ end-point for this work, but in the case described above, you could end up moving 70 cabinets if you were unlucky.  Have a play with the simulator here, and see how different numbers of cabinets and probabilities work out.

This is an example of the [Exponential Distribution](https://en.wikipedia.org/wiki/Exponential_distribution), and it works in a way similar to radioactive decay.  That is, we might best be able to talk about moving kitchens in terms of their half-lives.  That is, given a bunch of infinity kitchens (or cabinets), we could say how long it would usually take for _half_ of them to be completed.  Then, it'll be the same again for the next half, and so on.

Whereas [Fill-The-Bucket](Fill-The-Bucket.md) was defined with a _mean_ and _variance_, the exponential distribution is modelled with a single parameter, lambda (λ).

Y = e^-λx

-- playing with lambda, simulator


## Risk In An Exponential World

Let's assume that the exponential distribution _does_ model software development.  Where does that leave us with respect to estimating?

As a developer, I might (if pushed to estimate the project as a single number) pick the half-life point on the graph.  On average, half the projects would be complete before this point, and half after.  

The problem with that is, the ones that finish later might finish _much, much later_.  Picking the half-life point might be a dangerous strategy.  i.e it wouldn't minimize risk.

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
 
 
-- simulator with risks included.

As a project manager, you're much more likely to put your own interests ahead of the company.  But luckily, the goals of the company and the project manager co-incide for the most part:  managers are incentivised by pay (and maybe bonuses) to bring projects in on time, and doing so looks good on the CV.

Nevertheless, you would expect them to estimate things in a way that benefits their own risk profile, over the company's.  

Also, this offers some explanation of [Aranda and Easterbrook's Result](Fill-The-Bucket.md#perverted).


## Next Destination

So far, we've seen two kinds of estimate:  [Fill-The-Bucket](Fill-The-Bucket.md) and [Kitchen-Cabinet](Kitchen-Cabinet.md).  Now, it's time to review a third - estimating [Journeys](Journeys.md) 


 