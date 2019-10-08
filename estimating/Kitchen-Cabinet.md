---
title: Kitchen-Cabinet Estimating
description: Part 1 of the 'Estimating' Risk-First Series.
url: https://riskfirst.org/estimating/Kitchen-Cabinet
--image: /images/generated/titles/Just-Risk.png
--featuredimage: images/generated/single/Just-Risk.png
categories:
 - Estimates
order: 2
---

# Kitchen Cabinet

Imagine a scenario where you're helping a friend pack up their kitchen:

 - The kitchen contains 10 cabinets.
 - A cabinet takes one hour to pack.
 - However, each cabinet may have a further cabinet nested within it.  And on ad infinitum.
 - There is a 1:5 chance of a cabinet containing another cabinet.
 
How long should you estimate for the job?   (The answer is below)

This was suggested in a [Hacker News]() comment discussing software estimation, and struck a chord with many readers.  It's clear that we are no longer in the [Fill-The-Bucket](Fill-The-Bucket.md) domain anymore; our original intuitions about how long things might take are not going to work here.

As a developer, this 'feels' more real to me than [Fill-The-Bucket](Fill-The-Bucket.md).  _Any_ task I take on has an outside chance of telescoping into something _much worse_.  Here's a recent example.  

 - I wanted to test out a css change to my website site (1 hour?)...
 - but in order to avoid wrecking the live version, I would need to do this offline, in [Jekyll](https://jekyllrb.com).. (2 hours?)
 - However, this meant getting Jekyll working locally on my mac (again). (3 hours)
 - However, Jekyll didn't install, because it used a later version of [Ruby](https://www.ruby-lang.org/en/) than the one I had.  (4 hours?)
 - The Ruby version Manager (RVM) I had was out-of-date, and needed updating... (5 hours)
 - and I couldn’t update it because [brew](https://brew.sh) has been disabled by an update to my OS-X installation.  (I think).

All-in-all, it just may not have been possible for me to test that CSS change the way I wanted to.  Every task had a further, worse sub-task embedded within it.

<div id="simulation" />

<script type="text/javascript">

function runSim(model, its) {
	var out=[];
	
	for(var i = 0; i <its; i++) {
		var size = model.cabinets.value;
		var day = 0;
		while ((day < model.time.value) && (size > 0)) {
			var r = Math.random();
			if (r<model.chance.value) {
				size += 1;
			}	
			
			size --;
			day ++;
		}
		
		out[day] = out[day] ? out[day]+1 : 1;
	}
	
	return out;
}

doChart('simulation', 
 {
   'cabinets' : { min: 1, max: 30, value: 10, name: 'Initial Cabinets', step: 1 },
   'chance' : { min: 0, max: 1, value: .2, name: 'Chance Of Nesting', step: .01 },
   'time' : { min: 30, max:200, value: 30, name: 'Duration', step: 1}
 },
 [ model => { return {
    type: 'bar',
    data: {
        labels: [...range(0, model.time.value, 1), model.time.value+"+"],
        datasets: [{
            label: 'Simulations taking',
            data: runSim(model, 1000),
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}}
]);

</script>

## Distribution


There is no _guaranteed_ end-point for this work, but in the case described above, you could end up moving 70 cabinets if you were unlucky.  Have a play with the simulator here, and see how different numbers of cabinets and probabilities work out.  In particular, what happens when:

 - You have a _single_ cabinet in the original kitchen?
 - You have _thirty_ cabinets in the original kitchen?
 
When the number of initial cabinets is low, the distribution tends towards the [Exponential Distribution](https://en.wikipedia.org/wiki/Exponential_distribution), and it works in a way similar to radioactive decay.  That is, we might best be able to talk about moving kitchens in terms of their half-lives.  That is, given a bunch of infinity-cabinets, we could say how long it would usually take for _half_ of them to be completed.  Then, it'll be the same again for the next half, and so on.

Whereas [Fill-The-Bucket](Fill-The-Bucket.md) was defined with a _mean_ and _variance_, the exponential distribution is modelled with a single parameter, lambda (λ).

$$ Y = e^-λx $$

{% raw %}
  $$a^2 + b^2 = c^2$$ --> note that all equations between these tags will not need escaping! 
{% endraw %}

<div id="lambda" />

<script type="text/javascript">

doChart('lambda', 
 {
   'lambda' : { min: 0, max: 1, value: .5, name: 'Lambda', step: 0.01 },
   'units' : { min: 1, max: 25, value: 5, name: 'Units', step: 1 }
 },
 [
 model => { return {
    type: 'line',
    data: {
      labels: range(0, 20, 1),
      datasets: [{
      	label: '',
      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
      	data: range(0, 20, 1).map(i => model.units.value * Math.exp(-i * model.lambda.value))
      },
      ]
    }
  }
 
 }
 
]);

</script>

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

## A Trick

Offering an estimate transfers risk.  



## Next Destination

So far, we've seen two kinds of estimate:  [Fill-The-Bucket](Fill-The-Bucket.md) and [Kitchen-Cabinet](Kitchen-Cabinet.md).  Now, it's time to review a third - estimating [Journeys](Journeys.md) 


 