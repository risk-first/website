---
title: Kitchen Cabinets
description: Part of the 'Estimating' Risk-First Track, where we look at exponential distributions in estimates.
url: https://riskfirst.org/estimating/Kitchen-Cabinet

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/cupboard.svg">Kitchen Cabinets</image-artifact>'
categories:
 - Estimating
order: 2
---

# Kitchen Cabinets

Imagine a scenario where you're helping a friend pack up their kitchen:

 - The kitchen contains 10 cabinets.
 - A cabinet takes one hour to pack.
 - However, each cabinet may have a further cabinet nested within it.  And on _ad infinitum_.
 - There is a 1:5 chance of a cabinet containing another cabinet.
 
How long should you estimate for the job?   (The answer is below)

This was suggested in a [Hacker News](https://news.ycombinator.com) comment discussing software estimation, and struck a chord with many readers.  It's clear that we are no longer in the [Fill-The-Bucket](Fill-The-Bucket.md) domain anymore; our original intuitions about how long things might take are not going to work here.

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
   'time' : { min: 30, max:200, value: 50, name: 'Duration', step: 1}
 },
 [ model => { return {
    type: 'bar',
    data: {
        labels: [...range(0, model.time.value, 1), model.time.value+"+"],
        datasets: [{
            label: 'Simulations taking',
            data: runSim(model, 1000),
            backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
      		borderColor: [ 'rgba(255, 99, 132, 1)' ],
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

The above chart simulates the kitchen cabinet scenario.  Have a play and see how different numbers of cabinets and probabilities work out.  In particular, what happens when:

 - You have _thirty_ cabinets in the original kitchen?
 - You have a _single_ cabinet in the original kitchen, and say a .8 chance-of-nesting?
 
When the number of initial cabinets is high, we are closer to the [Fill-The-bucket](Fill-The-Bucket.md) world, with it's normal distribution, and variance-around-a-mean. 
 
But when the number of initial cabinets is low, the distribution is "long-tailed" and tends towards the [Exponential Distribution](https://en.wikipedia.org/wiki/Exponential_distribution), which works in a way similar to [radioactive decay](https://en.wikipedia.org/wiki/Radioactive_decay).  We might best be able to talk about moving kitchens in terms of their half-lives.  

That is, given a bunch of infinity-cabinets, we could say how long it would usually take for _half_ of them to be completed.  Then, it'll be the same again for the next half, and so on.

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
      	label: 'Probability Density',
      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
      	data: range(0, 20, 1).map(i => model.lambda.value * Math.exp(-i * model.lambda.value))
      },
      {
      	label: 'Proportion of Projects Completed',
      	data: range(0, 20, 1).map(i => 1 - Math.exp(-model.lambda.value * i))
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

As you can see from playing with the above chart, with low values of lambda, our completion time is much more likely to take longer.

But what (if anything) does this lambda parameter represent?  It could be:

 - **Unplanned re-work**.  Often, version one is lacking in features, and makes incorrect assumptions, which can only be unpicked by throwing away large chunks of work and starting again.   
 - **Unforeseen Dependencies**. Like the above CSS/Jekyll/Ruby example, doing the work uncovers extra work that needs to be done.

## Risk In An Exponential World

Let's assume that the exponential distribution _does_ model software development.  Where does that leave us with respect to estimating risk?  

With any estimate, there are risks in both under- and over- estimating: 

 - **Too Long**: In estimating too much time,  you might not be given the work or your business might [miss the opportunity in the marketplace](../risks/Scarcity-Risk.md#opportunity-risk).  A too cautious risk might doom a potentially successful project before it has even started.

 - **Too Short**: If you estimate too little time, you might miss important coordinating dates with your marketing team, or miss the Christmas window, or run out of "runway".  

For the sake of our simulation's simplicity, let's assume that being a day long on the estimate is as bad as being a day short and that the cost is _linear_ in both directions. 

See how this plays out in the following set of charts.
 
<div id="lambda2" />

<script type="text/javascript">

const days = 20;


doChart('lambda2', 
 {
   'lambda' : { min: .01, max: 1, value: .25, name: 'Lambda', step: 0.01 },
   'estimate' : { min: 0, max: 20, value: 6, name: 'Estimate', step: .5 },
 },
 [
 model => { 
  var lambda = 	 range(0, days, 1).map(i => model.lambda.value * Math.exp(-i * model.lambda.value))
	 
  return {
    type: 'line',
    data: {
      labels: range(0, days, 1),
      datasets: [{
      	label: 'Probability Density',
      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
      	data: lambda
      },
      {
      	label: 'Proportion of Projects Completed',
      	data: range(0, days, 1).map(i => 1 - Math.exp(-model.lambda.value * i))
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
  }},
  model => { 
	  var early = range(0, days, 1).map(i => Math.max(0, model.estimate.value - i));
	  var late = range(0, days, 1).map(i => Math.max(0, i- model.estimate.value))
	  
	  return {
	    type: 'line',
	    data: {
	      labels: range(0, days, 1),
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
  },
  model => { 
	  var lambda = 	 range(0, days, 1).map(i => model.lambda.value * Math.exp(-i * model.lambda.value))
	  var early = range(0, days, 1).map(i => Math.max(0, model.estimate.value - i));
	  var late = range(0, days, 1).map(i => Math.max(0, i- model.estimate.value))
	  var rar = lambda.map((v, i) => v * (early[i] + late[i]));
	  
	  return {
	    type: 'line',
	    data: {
	      labels: range(0, days, 1),
	      datasets: [{
	      	label: 'Risk',
	      	backgroundColor: [ 'rgba(255, 132, 99, 0.2)' ],
	      	borderColor: [ 'rgba(255, 132, 99, 1)' ],
	      	data: rar
	      }
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
	},
	model => {
		var k = model.estimate.value;
		var l = model.lambda.value;
		
		var early = l * (   (Math.exp(-k*l) / (l*l))   + ((k*l - 1) / (l*l)) )
		var late = (Math.exp(-k*l) / l);
		var total = early + late;
		
		return {
			type: 'bar',
		    data: {
		        labels: ['Too Early', 'Too Late', 'Total'],
		        datasets: [{
		            label: 'Risk',
		            data: [early, late, total],
		            borderWidth: 1,
		            backgroundColor: [ 'rgba(132, 99, 255, 0.2)', 'rgba(132, 200, 99, 0.2)', 'rgba(99, 99, 99, 0.2)' ],
			      	borderColor: [ 'rgba(132, 99, 255, 1)', 'rgba(132, 200, 99, 1)', 'rgba(99, 99, 99, 1)' ],
		        }]
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
	}]);

</script>

## Analysis

We have four charts above:

 - The top (red) chart is our exponential probability density.  Our eventual completion date is randomly picked from somewhere in the red area.  The grey overlay shows the rate at which projects are likely to be completed.  
 - The second (green and blue) chart shows the costs of getting the estimate wrong.  If you hit the date exactly, you minimize risk.  If you overrun, you pick up the green costs.  If you finish early, you pick up the blue costs.  You might question why you have costs for finishing early, but you are being penalized here because your estimate was wrong.  Maybe the product could have shipped sooner if you'd given a more accurate date?
 - The third (orange) chart shows our risk profile - it's the (green and blue) costs from the middle multiplied by the probabilities (in red) from the top.
 - The bottom (green and blue) chart is the area under the risk profiles from the third chart.  That is, we're providing a simple way to compare the early risk with the late risk.
 
### Balancing Risk

Keeping lambda at .25, at four days, the too-early risk is the same as the too-late risk.  This might seem like a good choice for the project.   

But, it's not the point of _lowest_ risk.  

For that, you'll have to go somewhere around three days.  This is roughly the mean length of the project - with this lambda, half of all projects would be completed before this point, and half after. But the too-late risk is much greater than the too-early risk.  

So an important question at this point might be: _who bears this risk?_    In the models above, we make the simplifying assumption that too-early and too-late risks have the same cost, but in reality, missing deadlines can be damaging to your _personal_ reputation, and we'll unpack that [later](Control.md).

## Meta-Analysis

### Knowing Lambda

Is lambda predictable on a project?  It doesn't appear that there have been any efforts in our industry to decide such a thing, even though we _know_ that re-work and uncovering new problems happens.  We also know that if we ship some code, there will be bugs in it.  How many?  How much work will they take to fix?

### When Does Risk Happen?

Too-early and too-late risks are both [Scarcity Risks](../risks/Scarcity-Risk.md): they reflect the fact that time/budget/staff/opportunity are scarce resources which you can run out of.  

But where is the risk accrued?   If you give an estimate, you lock in a maximum too-early risk _at that point_.  From then on, the clock is ticking:  too-early risk decreases towards zero as the due-date approaches.

This is important:  the point at which you present your estimate is the point of highest too-early risk.  It's also the point at which this risk is either accepted or rejected.  

![Accepting an estimate](/images/generated/estimating/accept_estimate.png)

The diagram above is an example of this.   A supplier is bidding for a contract with a client.  The client has functionality they want build (or [Feature Risk](../risks/Feature-Risk.md) as we call it on Risk-First).  The supplier needs money to keep their business going ([Funding Risk](../risks/Scarcity-Risk.md#funding-risk) on this diagram).  

If the estimate is accepted, the supplier's [Funding Risk](../risks/Scarcity-Risk.md#funding-risk) is transferred to the client (the requester of the estimate).  Conversely, the trade is that the client's [Feature Risk](../risks/Feature-Risk.md) is transferred to the supplier.

If the supplier is short on opportunities or funds, there is a tendency to under-estimate.  That's because the [Feature Risk](../risks/Feature-Risk.md) is a problem for the supplier _in the future_, whereas their [Funding Risk](../risks/Scarcity-Risk.md#funding-risk) is a problem _right now_.  

You can often see suppliers under-bid on projects because of this future discounting, which we discussed before in [Evaluating Risk](../thinking/Evaluating-Risk.md#discounting).  

This analysis also suggests something else:   the process of giving and accepting estimates _transfers risk_.  This is a key point which we'll return to [later](Control.md). 

### Too-Late Risk

Conversely, too-late risk accrues only _after_ the delivery date has passed.  Like too-early risk, there is probably a maximal limit on this too, which occurs at the point the project is cancelled due to lack of funds!

The problem with projects in the [Kitchen Cabinet](Kitchen-Cabinet.md) domain is that _elapsed time is no indication of remaining time_.  The exponential distribution is exactly the same shape at every point in time (we're dealing with half-lives, remember?).

This means that clients often keep projects running for far longer than they should, assuming success is just around the corner.  This is an example of the [Sunk Cost Fallacy](https://en.wikipedia.org/wiki/Sunk_cost).

### Being On-Time

There is an alternative to too-early or too-late risk.  You can always choose to be _on time_.  This is definitely a choice: Just like a student can always hand _something_ in on assignment day (even if it's just a title scrawled on a piece of paper), you can always hand in whatever work you have.  

Then, instead of worrying about [Scarcity Risks](../risks/Scarcity-Risk.md), you are letting [Feature Risk](../risks/Feature-Risk.md) vary to take up the slack.

So far, we've seen two kinds of estimate:  [Fill-The-Bucket](Fill-The-Bucket.md) and [Kitchen-Cabinet](Kitchen-Cabinet.md).  Now, it's time to review a third - estimating [Journey Style](Journeys.md), and looking at how we can minimise [Feature Risk](../risks/Feature-Risk.md) within an available budget.


 