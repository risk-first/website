---
title: Fill-The-Bucket
description: Part of the 'Estimating' Risk-First Series, in which we look at straightforward extrapolation.
url: https://riskfirst.org/estimating/Fill-The-Bucket

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/bucket.svg">Fill The Bucket</image-artifact>'
categories:
 - Estimating
order: 1
---


# Fill-The-Bucket

![If it takes one hour to fill a 5l bucket...](/images/generated/estimating/fill_the_bucket.png)

The simplest type of estimation problem we might face in software development is _simple extrapolation_, as in the example above.  If one developer takes one day to build a web-page for our site, how long will it take to build ten web-pages?  Well, it could be that the answer is around ten days.

We'll name this "estimation by extrapolation" approach "Fill-The-Bucket". It occurs in maths tests everywhere:  _It takes an hour to paint one fence panel.  There are 40 fence panels. How long will the whole fence take?_

The key to Fill-The-Bucket style estimation is that:

 - The work can be measured in units.   
 - Each unit is pretty much the same as another.  
 - Each unit is _independent_ to the others.
 
This is our starting-off point.  It should be pretty clear that these assertions _don't_ hold true for a lot of software development, but let's examine this style of estimating anyway.

## Distribution

In reality, we should expect that different fence panels take slightly different amounts of time to paint. Perhaps one is in an awkward position compared to another, or the wood is of different quality, or the painter is more or less motivated.  

Also, we shouldn't expect measurement in the real world to ever be exact,  we are always going to see a _distribution_ of times. 

Where we are able to see measurements clustering-around-the-mean, this gives rise to the familiar [Normal Distribution](https://en.wikipedia.org/wiki/Normal_distribution) of measurements - the so called "Bell Curve" - which arises out of distributions like height, weight, test scores and so on.  

<div id="simulation" />

<script type="text/javascript">

function stddev(range, mean, variance) {
	const factor = 1 / (Math.sqrt(2* 3.141592 * variance));
	return range.map(r => {
		const num= ((r - mean)*(r - mean));
		const denom = 2 * variance;
		const fact = num / denom;
		
		return factor * Math.exp(-fact);
	});
}

doChart('simulation', 
 {
   'units' : { min: 1, max: 15, value: 10, name: 'Number of Units', step: 1 },
   'mean' : { min: 20, max: 120, value: 60, name: 'Mean time to Complete Unit', step: 1 },
   'variance' : { min: 1, max:50, value: 30, name: 'Variance In Unit Time', step: 1}
 },
 [
	 model => { 
		 var min = 0;
		 var max = 120;
		 
		 return {
	    type: 'line',
	    data: {
	      labels: range(min, max, 1).map(r => Math.round(r)),
	      datasets: [{
	      	label: 'Time To Complete A Single Unit (minutes)',
	      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
	      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
	      	data: stddev(range(min,max,1), model.mean.value, model.variance.value)
	      }]
	    },
	    options: {
	    	scales: {
	            yAxes : [{
	                ticks : {
	                	max : .3,    
	                	min : 0
	                }
	            }]
	    	}
        }
	  }
	 },
	 model => { 
		 var min = 0;
		 var max = 1000;
		 
		 return {
		    type: 'line',
		    data: {
		      labels: range(min / 60, max/60, 10/60).map(r => Math.round(r)),
		      datasets: [{
		      	label: 'Time To Complete All Units (hours)',
		      	backgroundColor: [ 'rgba(132, 99, 255, 0.2)' ],
		      	borderColor: [ 'rgba(132, 99, 255, 1)' ],
		      	data: stddev(range(min,max,10), model.mean.value*model.units.value, model.variance.value * model.units.value)
		      }]
		    },
		    options: {
		    	scales: {
		            yAxes : [{
		                ticks : {
		                	max : .05,    
		                	min : 0
		                }
		            }]
		    	}
	        }
		  }
		 },	 
	 
	]);

</script>

## Mean and Variance

Normal distributions have two independent parameters: the _mean_ (the highest, middle point) and the _variance_ (a measure of the spread).  You can play with both these parameters in the simulation above.

You can fairly easily add up normal distributions like this.  If you have _n_ fence panels to paint, with _m_ as the mean time to paint each panel, and _v_ as the variance, then:
 
  - The mean over all _n_ fence panels is _n x m_.
  - The new variance is _n x v_.
  
## Probability Density  
  
The area under those curves above is the _probability density_.  

When you paint any given fence panel (the first, red chart), you'd expect the time taken to be a single spot from under the curve, picked at random.  Given that there is more area under the curve around the mean, we'd expect our fence-painting times to be clustered around the mean.  

The second, blue chart extrapolates the single panel density to show how long the whole job will take.  It the variance for a single panel is large and the number of panels painted is large, then the time to paint the whole fence could vary by _hours_.  

The area of a _probability density_ curve is normalised to 1, so you can pick a particular interval within it, work out the area of it, and that's the probability of an event occurring within that interval. 
  
## Sampling Error

If you paint the first fence panel in 40 minutes, how sure can you be that this is a good estimate?  What if you extrapolate from this single fence panel?  To paint all 40 might take 26 hours.  How confident are we of this estimate?

After the first fence panel, you just don't know.  After you've painted two or three, you can start to figure out the _sample variance_ $$s^2$$:

$$s^2 = \frac{\sum(x - \bar{x})^2}{n - 1}$$
 
The more samples we make, the more precise the sample variance will be, and so the more confident we should be on our expected time to complete painting the fence.

<div id="simulation2" />

<script type="text/javascript">
function stddev(range, mean, variance) {
	const factor = 1 / (Math.sqrt(2* 3.141592 * variance));
	return range.map(r => {
		const num= ((r - mean)*(r - mean));
		const denom = 2 * variance;
		const fact = num / denom;

		return factor * Math.exp(-fact);
	});
}

function random_normal() 
{  
  const M_PI = 3.14159;	
  return Math.sqrt(-2*Math.log(Math.random())) * Math.cos(2*M_PI*Math.random());
}

var mean = 11;
var variance = 2.5

const samples = range(0, 200, 1).map(i => random_normal()*variance+mean);

function bucket(samples) {
	var out = new Array(20).fill(0);
	samples.forEach(s => {
		var b = Math.round(s);
		if ((b>=0) && (b<20)) {
			out[b] ++;
		}
	});
	return out;
}
function calcMean(s) {
	var tot = s.reduce((a,b) => a+b);
	var len = s.length;
	return tot/len;
}
	
function calcVar(s, mean) {
	var tot = s.map(i => (i - mean)*(i - mean)).reduce((a, b) => a+b);
	var len = s.length - 1;
	return tot / len;
}

doChart('simulation2', 
 {
   'samples' : { min: 2, max: 200, value: 3, name: 'Individual Samples', step: 1 },
 },
 [
	 model => { 
	     var subsam = samples.slice(0, model.samples.value);
		 var mean = calcMean(subsam);
		 var variance = calcVar(subsam, mean);
		 var buckets = bucket(subsam);
	 	 var dist = stddev(range(0, 20, 1), mean, variance).map(r => r* model.samples.value);
	 
	 return {
		    type: 'bar',
		    data: {
		        labels: range(0, 20, 1),
		        datasets: [{
		            label: 'Samples',
		            data: buckets,
		            borderWidth: 1,
		            backgroundColor: 'rgba(132, 99, 255, 0.2)' ,
			      	borderColor:  'rgba(132, 99, 255, 1)' ,
		        },
		        {
		        	type: 'line',
		        	label: 'Normal Distribution Fit',
		        	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
			      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
		        	data: dist
		        }]
		    },
		   
		}}]);

</script>

In the above simulation, we are trying to fit a Normal Distribution, estimated from a number of samples.   

You should be able to see that when you move from two to three samples, the variance will probably change _a lot_.  However moving from twenty to thirty samples means it hardly changes at all.  

This kind of measurement and estimating is the bread-and-butter of all kinds of [Operational Control](../risks/Operational-Risk.md) systems.

## Big-O

Although software development tasks don't often fit into the [Fill-The-Bucket](Fill-The-Bucket.md) domain, lots of things in _data processing_ do.  When talking about _algorithms_, we say fence-panel painting is $$O(n)$$.  That is, the number of operations taken to complete the job is a linear function _**n**_, the number of fence panels.

The same is true for lots of other algorithms - scanning a linked-list, walking a tree, these are often $$O(n)$$.

### Binary Chop.

There are plenty of algorithms too which have other efficiencies.   Let's say you use this algorithm to look up a word in a dictionary.

1.  Establish upper and lower bounds of the search space (i.e. first and last entry of the dictionary)
2.  Find a word about half-way between the two.  Is the word you're looking for _before_ or _after_ this word, or exactly this word?  If the latter, you're done, otherwise, revise either the upper or lower bound to this word and repeat.

This is the [binary chop algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm), in which the number of remaining search-space _halves_ each time you go round step 2.  Therefore, doubling the length of the dictionary only increases the number of operations by 1.  So this algorithm takes $$O(log_2  n)$$ time.

So [Fill-The-Bucket](Fill-The-Bucket.md) is _still_ an appropriate way of estimating for these algorithms.  If you can figure out how long it takes to do steps 1 & 2, and how many times it'll have to do them, you can make a good estimate of the total time.  That is, even though the time won't be _linear_, _extrapolation_ still works.

## Estimating Risk

Let's say we have a problem in the [Fill-The-Bucket](Fill-The-Bucket.md) domain.  How can we use this to estimate risk?

Let's set up a simple scenario, which we've agreed by contract with a client: 

- The client will pay us £10,000 to process 500 client records.
- The client wants the records completed in 20 days.  We can agree extra time in advance, but this costs £300 per day from the contracted price.
- If we miss our delivery date, we pay a penalty of £1,000 per day until the project is complete.
- It takes 1-3 hours to process a client record, and we have 4 staff working 8 hours per day.  Let's model this with a mean of 2 hours and variance of 1 hour.

Let's ignore _all other risks_ and just focus on these monetary ones.  What is the best time to suggest to the client?

<div id="simulation3" />

<script type="text/javascript">
function stddev(range, mean, variance) {
	const factor = 1 / (Math.sqrt(2* 3.141592 * variance));
	return range.map(r => {
		const num= ((r - mean)*(r - mean));
		const denom = 2 * variance;
		const fact = num / denom;

		return factor * Math.exp(-fact);
	});
}

var days = 60;
var mean = 2;
var variance = 1;

doChart('simulation3', 
 {
	'estimate': { min: 20, max: 80, value: 20, name: 'Estimate', step: 1 },
	'records' : { min: 100, max: 700, value: 500, name: 'Records', step: 1 },
	'mean' : { min: 1, max: 3, value: 2, name: 'Mean', step: .1 },
	'variance' : { min: .5, max: 3, value: 1, name: 'Variance', step: .1 },
	'staff' : { min: 1, max: 10, value: 4, name: 'Staff', step: 1 },
	'hours' : { min: 1, max: 17, value: 8, name: 'Hours Per Day', step: 1 },
	
 },
 [
	 model => { 
		 
		 var meanEffort = model.records.value * model.mean.value;
		 var varEffort = model.records.value * model.variance.value;
		 var manPower = model.staff.value * model.hours.value;
		 var daysPDF = stddev(range(0,days,1), meanEffort / manPower, varEffort / manPower);
		 
	 return {
		    type: 'line',
		    data: {
		        labels: range(0, days, 1),
		        datasets: [{
		        	label: 'Days To Complete',
		        	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
			      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
		        	data: daysPDF
		        }
		        ]
		    },
		   
		}},
		
		model => {
			var penalty = (model.estimate.value - 20) * 300;
			var returns = range(0, days, 1).map(d => 10000 - penalty - (Math.max(0, d - model.estimate.value) * 1000));

			return {
			    type: 'line',
			    data: {
			        labels: range(0, days, 1),
			        datasets: [{
			        	label: 'Return',
			        	backgroundColor: [ 'rgba(132, 99, 255, 0.2)' ],
				      	borderColor: [ 'rgba(132, 99, 255, 1)' ],
			        	data: returns
			        }
			        ]
			    },
			   
			}
			
			
		},
		model => {
			var penalty = (model.estimate.value - 20) * 300;
			var returns = range(0, days, 1).map(d => 10000 - penalty - (Math.max(0, d - model.estimate.value) * 1000));
			var meanEffort = model.records.value * model.mean.value;
			var varEffort = model.records.value * model.variance.value;
			var manPower = model.staff.value * model.hours.value;
			var daysPDF = stddev(range(0,days,1), meanEffort / manPower, varEffort / manPower);
			var riskAdjustedReturn = daysPDF.map((v, i) => v * returns[i]);
			
			return {
			    type: 'line',
			    data: {
			        labels: range(0, days, 1),
			        datasets: [{
			        	label: 'Financial Risk',
			        	backgroundColor: [ 'rgba(255, 132, 99, 0.2)' ],
				      	borderColor: [ 'rgba(255, 132, 99, 1)' ],
			        	data: riskAdjustedReturn
			        }
			        ]
			    },
			   
			}
			
			
		}
		]);

</script>

## Analysis

There are three charts above:

 - The top (red) chart is showing the probability density for us completing the work.  Our actual completion time is one point chosen randomly from the area in red. So, we're probably looking at around 32 days.
 - The middle (blue) chart shows our return distribution.  As you can see, it starts sliding down after 20 days, eventually ending up in negative territory.  Leaving the estimate at 20 days gives us the _highest possible_ payout of £10,000, increasing our estimate reduces this maximum.  
 - The bottom (orange) chart multiplies these two together to give us a measure of [financial risk](../risks/Scarcity-Risk.md#funding-risk). Without adjusting the estimate, we're more likely to lose than win.
 
Are you a gambler?  If you can just make everyone work a couple of extra hours' overtime, you'll be much more likely to make the big bucks.  But without cheating like this, it's probably best to give an estimate around 30 days or more.  

## Meta-Analysis

This is a really contrived example, but actually this represents _most of_ how banks, insurance companies, investors etc. work out risk, simply multiplying the probability of something happening by what is lost when it does happen.  But let's look at some criticisms of this:

1. Aren't there other options?  We might be able to work nights to get the project done, or hire more staff, or give bonuses for overtime _or something_.  In fact, in [Pressure](Pressure.md) we'll come back and look at some of these factors.

2. We've actually got a project here which _degrades gracefully_. The costs of taking longer are clearly sign-posted in advance.  In reality, the costs of missing a date might be much more disastrous:  not getting your game completed for Christmas, missing a regulatory deadline, not being ready for an important demo - these are all-or-nothing outcomes where it's a [stark contrast between in-time and missing-the-bus](../risks/Deadline-Risk.md).  

3. Software development isn't generally isn't like this - as we will explore in the following sections, software development is _not_ in the [Fill-The-Bucket](Fill-The-Bucket.md) domain, generally.  

## Failure Modes

The problem is, because this approach works well in insurance and operations and other places, there is a _strong tendency_ for project managers to want to apply it to software development.  

But there are lots of ways [Fill-The-Bucket](Fill-The-Bucket.md) goes wrong, and this happens when you are estimating in scenarios that violate the original conditions:

1. The work can be measured in units.   
2. Each unit is pretty much the same as another.  
3. Each unit is _independent_ to the others. 
 
In [the financial crisis](../risks/Risk-Landscape.md#the-financial-crisis), we saw how estimates of risk failed because they violated point 3.  

Let's have a look at [what happens when we relax these constraints](Kitchen-Cabinet.md).