---
title: Kitchen-Cabinet Estimating
description: Part 3 of the 'Estimating' Risk-First Series.
url: https://riskfirst.org/estimating/Kitchen-Cabinet
--image: /images/generated/titles/Just-Risk.png
--featuredimage: images/generated/single/Just-Risk.png
categories:
 - Estimating
order: 3
---

# Kitchen Cabinet

Imagine a scenario where you're helping a friend pack up their kitchen:

 - The kitchen contains 10 cabinets.
 - A cabinet takes one hour to pack.
 - However, each cabinet may have a further cabinet nested within it.  And on _ad infinitum_.
 - There is a 1:5 chance of a cabinet containing another cabinet.
 
How long should you estimate for the job?   (The answer is below)

This was suggested in a [Hacker News]() comment discussing software estimation, and struck a chord with many readers.  It's clear that we are no longer in the [Fill-The-Bucket](Fill-The-Bucket.md) domain anymore; our original intuitions about how long things might take are not going to work here.

As a developer, this 'feels' more real to me than [Fill-The-Bucket](Fill-The-Bucket.md).  _Any_ task I take on has an outside chance of telescoping into something _much worse_.  Here's a recent example:  

 - I wanted to test out a CSS change to my website site. _1 hour?_
 - But in order to avoid wrecking the live version, I would need to test this offline, with [Jekyll](https://jekyllrb.com). _2 hours?_
 - However, this meant getting Jekyll working locally on my mac (again). _3 hours_
 - However, Jekyll didn't install, because it used a later version of [Ruby](https://www.ruby-lang.org/en/) than the one I had.  _4 hours?_
 - The Ruby version Manager (RVM) I had was out-of-date, and needed updating. _5 hours?_
 - And I couldn’t update it because [brew](https://brew.sh) has been disabled by an update to my OS-X installation.  _??? hours_

All-in-all, it just may not have been possible for me to test that CSS change the way I wanted to.  Every task had a further, worse sub-task embedded within it.

_Cabinets within cabinets._

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

Have a play with the simulator here, and see how different numbers of cabinets and probabilities work out.  In particular, what happens when:

 - You have a _single_ cabinet in the original kitchen?
 - You have _thirty_ cabinets in the original kitchen?
 
When the number of initial cabinets is high, we are closer to the "fill-the-bucket" world, with it's normal distribution, and variance-around-a-mean. 
 
But when the number of initial cabinets is low, the distribution is "long-tailed", and tends towards the [Exponential Distribution](https://en.wikipedia.org/wiki/Exponential_distribution), which works in a way similar to [radioactive decay](https://en.wikipedia.org/wiki/Radioactive_decay).  That is, we might best be able to talk about moving kitchens in terms of their half-lives.  That is, given a bunch of infinity-cabinets, we could say how long it would usually take for _half_ of them to be completed.  Then, it'll be the same again for the next half, and so on.

Whereas [Fill-The-Bucket](Fill-The-Bucket.md) was defined with a _mean_ and _variance_, the exponential distribution is modelled with a single parameter, lambda (λ), which is the rate of decay.   

<div id="lambda" />

<script type="text/javascript">

doChart('lambda', 
 {
   'lambda' : { min: 0, max: 1, value: .5, name: 'Lambda', step: 0.01 },
 },
 [
 model => { return {
    type: 'line',
    data: {
      labels: range(0, 20, 1),
      datasets: [{
      	label: 'Exponential Distribution',
      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
      	data: range(0, 20, 1).map(i => model.lambda.value * Math.exp(-i * model.lambda.value))
      },
      ]
    },
     options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  }
 
 }
 
]);

</script>

## Risk In An Exponential World

Let's assume that the exponential distribution _does_ model software development.  Where does that leave us with respect to estimating?

Let's first consider that we have a good grasp on what the half-life (or lambda) might be for development in general.

With any estimate, there are risks both in estimating too much time (you might not be given the work) and in too little time (you wind up missing the delivery date). 

As a developer, I might (if pushed to estimate the project as a single number) pick the half-life point on the graph.  On average, half the projects would be complete before this point, and half after.  

The problem with that is, the ones that finish later might finish _much, much later_.  Picking the half-life point might be a dangerous strategy.  i.e it wouldn't minimize risk.
 
<div id="lambda2" />

<script type="text/javascript">

doChart('lambda2', 
 {
   'lambda' : { min: .01, max: 1, value: .5, name: 'Lambda', step: 0.01 },
   'units' : { min: 1, max: 25, value: 5, name: 'Units', step: 1 },
   'estimate' : { min: 0, max: 20, value: 5, name: 'Estimate', step: 1 },
   'days' : { min: 20, max: 60, value: 20, name: 'Days', step: 1 },
 },
 [
 model => { 
  var lambda = 	 range(0, model.days.value, 1).map(i => model.lambda.value * Math.exp(-i * model.lambda.value))
	 
  return {
    type: 'line',
    data: {
      labels: range(0, model.days.value, 1),
      datasets: [{
      	label: 'Project Completion Date',
      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
      	data: lambda
      },
      ]
    }
  }},
  model => { 
	  var early = range(0, model.days.value, 1).map(i => Math.max(0, model.estimate.value - i));
	  var late = range(0, model.days.value, 1).map(i => Math.max(0, i- model.estimate.value))
	  
	  return {
	    type: 'line',
	    data: {
	      labels: range(0, model.days.value, 1),
	      datasets: [{
	      	label: 'Too-Early Risks',
	      	backgroundColor: [ 'rgba(132, 99, 255, 0.2)' ],
	      	borderColor: [ 'rgba(132, 99, 255, 1)' ],
	      	data: early
	      },
	      {
		      	label: 'Too-Late Risks',
		      	backgroundColor: [ 'rgba(132, 200, 99, 0.2)' ],
		      	borderColor: [ 'rgba(132, 200, 99, 1)' ],
		      	data: late
		      }
	      ]
	    }
	  }
  },
  model => { 
	  var lambda = 	 range(0, model.days.value, 1).map(i => model.lambda.value * Math.exp(-i * model.lambda.value))
	  var early = range(0, model.days.value, 1).map(i => Math.max(0, model.estimate.value - i));
	  var late = range(0, model.days.value, 1).map(i => Math.max(0, i- model.estimate.value))
	  var rar = lambda.map((v, i) => v * (early[i] + late[i]));
	  
	  return {
	    type: 'line',
	    data: {
	      labels: range(0, model.days.value, 1),
	      datasets: [{
	      	label: 'Risk',
	      	backgroundColor: [ 'rgba(255, 132, 99, 0.2)' ],
	      	borderColor: [ 'rgba(255, 132, 99, 1)' ],
	      	data: rar
	      }
	      ]
	    }
	  }
},
 
]);

</script>

## Analysis

We have three graphs above:

 - The top (red) graph simulates completion date.  Our eventual completion date is randomly picked from somewhere in the red area.  Clearly, tasks are likely to complete sooner, rather than later.  
 - The middle (green and blue) graph shows the costs of getting the estimate wrong.  If you hit the date exactly, you minimize risk.  If you overrun, you pick up the green costs.  If you finish early, you pick up the blue costs.  You might question why you have costs for finishing early, but you are being penalized here because your estimate was wrong.  Maybe the product could have shipped sooner if you'd given a more accurate date?
 - The bottom (orange) graph shows our risk profile - it's the costs from the middle multiplied by the probabilities from the top.



## Meta-Analysis



## A Trick

Offering an estimate transfers risk.  



## Next Destination

So far, we've seen two kinds of estimate:  [Fill-The-Bucket](Fill-The-Bucket.md) and [Kitchen-Cabinet](Kitchen-Cabinet.md).  Now, it's time to review a third - estimating [Journeys](Journeys.md) 


 