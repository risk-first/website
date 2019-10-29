---
title: Fractals
description: Part of the 'Estimating' Risk-First Series, where we look at estimating fractal value boundaries.
url: https://riskfirst.org/estimating/Fractals
--image: /images/generated/titles/Just-Risk.png
--featuredimage: images/generated/single/Just-Risk.png
categories:
 - Estimating
order: 4
---

# Fractals

Let's summarize what we've seen so far, and introduce a _new way_ of estimating:

|Approach             |Measurable Progress?       |Homogeneous Work       |Defined End-Point?   |
|---------------------|---------------------------|-----------------------|---------------------|
|_looks like:_        |_"I know how far I have to go"_|_"Results equals effort"_|_"I know when I'm done"_|
|Fill-The-Bucket      |Yes                        |Yes                    |Yes                  |
|Kitchen Cabinets     |**No**                     |Yes                    |Yes                  |
|Journey              |Yes                        |**No**                 |Yes                  |
|Fractal-Shape        |Yes                        |Yes                    |**No**               |

So what is a fractal shape?  Let's look at something called the **Coastline Paradox**:

> "The coastline paradox is the counterintuitive observation that the coastline of a landmass does not have a well-defined length. This results from the fractal-like properties of coastlines, i.e., the fact that a coastline typically has a fractal dimension (which in fact makes the notion of length inapplicable)." - [Coastline Paradox, _Wikipedia_](https://en.wikipedia.org/wiki/Coastline_paradox)

## Relevance

The reason this is relevant to software (or hardware, for that matter) is that human value is very much like this.  Consider the iPhone.  The first version arrived in 2007, and looks much as it does today.  The design began in 2005, and the designers knew they had a short period of time to bring this totally new idea to market, with the components they had available.

In successive years, new iPhones arrived, improving on the original.  The screen improved, the networking improved, the software improved.  The complexity of the iPhone and it's eco-system as a whole increased massively.

![Koch Snowflake](https://upload.wikimedia.org/wikipedia/commons/f/fd/Von_Koch_curve.gif)

Just like the [Koch Snowflake](https://en.wikipedia.org/wiki/Koch_snowflake), above, the designers were creating an ever-more-complex perimeter of complexity around an area of _consumer value_.  And, just like the Koch Snowflake, each new version increased the _area_ of value.  

<div id="koch" />

<script type="text/javascript">

var max = 10;

doChart('koch', 
 undefined,
 [
 model => { 	 
  return {
    type: 'line',
    data: {
      labels: range(0, max, 1),
      datasets: [{
      	label: 'Perimeter Length',
      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
      	data: range(0, max, 1).map(i => Math.pow((4/3), i))
      },
      ]
    }
  }},
  model => { 
	  return {
	    type: 'line',
	    data: {
	      labels: range(0, max, 1),
	      datasets: [{
	      	label: 'Area',
	      	backgroundColor: [ 'rgba(255, 132, 99, 0.2)' ],
	      	borderColor: [ 'rgba(255, 132, 99, 1)' ],
	      	data:  range(0, max, 1).map(i => 8-3*(Math.pow(4/9, i)))
	      }
	      ]
	    }
	  }
},
 
]);

</script>
  
## Continuous Refinement

If your problem doesn't have an exact, defined end-goal, there is simply no way of estimating how long it will take to get there _because you never will_.  And, if (like the Koch Snowflake), your solution will _never_ be perfect, then the only approach is _continuous refinement_. 

![Opportunity on the Risk Landscape](/images/estimates/fractal1.png)

You might have some idea (selling hats for dogs?) of some interesting area of value on the [Risk Landscape](/Glossary.md#risk-landscape)  that you want to occupy, as shown in the above diagram.  

Your best bet is to try and colonise the area of value _as fast as possible_ by using as much readily available software as possible.  

![First Version](/images/estimates/fractal2.png)

Maybe version one looks something like the diagram above: a few hastily-assembled components lashed together along with some rough-and-ready web pages.   Hopefully, this kind of design will give you a better idea of what the right answer looks like.

![Second Version](/images/estimates/fractal3.png)

Releasing the first version might fill in some of the blanks, and show you more detail on the [Risk Landscape](/Glossary.md#risk-landscape).  Effectively showing you a more detailed view of the coastline.   Feedback from users will provide you with a better understanding of exactly what this fractal problem-space looks like. 

As you go on [Meeting Reality](../Glossary.md#meeting-reality), the shape of the problem domain comes into focus, and you're able to adjust to match it more exactly.

Is it possible to apply _any_ estimate to problems in the Fractal Shape domain?  Probably not - but whatever effort you put in 

 
## Applying Risk-First

Let's look at the conclusions we reached in [Boundary Risk]():

> - **Human need is [Fractal](https://en.wikipedia.org/wiki/Fractal)**:  this means that over time, software products have evolved to more closely map human needs.   Software that would have delighted us ten years ago lacks the sophistication we expect today.
- **Software and hardware are both improving with time**: due to evolution and the ability to support greater and greater levels of complexity.
- **Abstractions accrete too**:  as we saw in [Process Risk](Process-Risk.md), we _encapsulate_ earlier abstractions in order to build later ones.

If we accept this problem of the fractal nature of human desire, then we have to contend with the fact that our software systems are always going to get continually more complex to serve it.

Therefore, our next stop is to look again at [complexity](Hierarchies.md)...




