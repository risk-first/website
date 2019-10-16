---
title: Fractals
description: Part 5 of the 'Estimating' Risk-First Series.
url: https://riskfirst.org/estimating/Fractals
--image: /images/generated/titles/Just-Risk.png
--featuredimage: images/generated/single/Just-Risk.png
categories:
 - Estimating
order: 5
---

# Fractals

Let's summarize what we've seen so far, and introduce a _new way_ of estimating:

|Approach             |Measurable Progress?       |Defined End-Point?     |Homogeneous Work     |
|---------------------|---------------------------|-----------------------|---------------------|
|Fill-The-Bucket      |Yes                        |Yes                    |Yes                  |
|Kitchen Cabinets     |Somewhat                   |Yes                    |Yes                  |
|Journey              |Yes                        |Yes                    |No                   |
|Fractal-Shape        |Yes                        |No                     |No                   |

So what is a fractal shape?  

![Koch Snowflake](https://upload.wikimedia.org/wikipedia/commons/f/fd/Von_Koch_curve.gif)

The diagram above is an example of a fractal shape, taken from Wikipedia, and it's animated so that you can see how it's built up.  Wikipedia says:

> "The Koch snowflake can be built up iteratively, in a sequence of stages. The first stage is an equilateral triangle, and each successive stage is formed from adding outward bends to each side of the previous stage, making smaller equilateral triangles. The areas enclosed by the successive stages in the construction of the snowflake converge to 8/5 times the area of the original triangle, while the perimeters of the successive stages increase without bound. Consequently, the snowflake encloses a finite area, but has an infinite perimeter. " - [Koch Snowflake, _Wikipedia_](https://en.wikipedia.org/wiki/Koch_snowflake)

## Relevance

The reason this is relevant to software (or hardware, for that matter) is that human value is very much like this.  Consider the iPhone.  The first version arrived in 2007, and looks much as it does today.  The design began in 2005, and the designers knew they had a short period of time to bring this totally new idea to market, with the components they had available.

In successive years, new iPhones arrived, improving on the original.  The screen improved, the networking improved, the software improved.  The complexity of the iPhone and it's eco-system as a whole increased massively.

Just like the Koch snowflake, above, the designers were creating an ever-more-complex perimeter of complexity around an area of _consumer value_.  And, just like the Koch snowflake, each new version increased the _area_ of value.  

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
## Competition

Let's consider the competition for a second.  Because of the iPhone's huge success, it didn't take long for competitors to catch on.  Their job was easier, since they had a _target to aim at_: hitting the same _area of consumer value_ that the iPhone did, except with their own hardware.

Meanwhile, Apple would be iterating, expanding the perimeter's complexity, and trying to capture more value for their customers.  To sustain a competitive edge, there would need to be _areas of value_ that the iPhone covered that their less-evolved rivals didn't cover.

Successive iterations brought the App-Store, front-and-rear cameras, touch, bluetooth, WiFi and so on.   

## Iteration With Components

If your problem doesn't have a defined end-goal, there is simply no way of estimating how long it will take to get there.  And, if (like the Koch snowflake) your solution will _never_ be perfect, then the only way out is to _iterate_.

As we discussed in [Journeys](), your best bet is to try and colonise the area of value _as fast as possible_ by using as much readily available software as possible.  

-- diagram of this

Maybe version one looks something like the diagram above: a few hastily-assembled components lashed together along with some rough-and-ready web pages.   Hopefully, this kind of design will give you a better idea of what the right answer looks like.

-- diagram of this.

The second version might fill in some of the blanks, and smooth off some raw edges.  Feedback from users will provide you with a better understanding of exactly what this fractal problem-space looks like.

Where you _don't know the answer_, iteration is really the only tool in the box.   
- risk first diagram for iteration

But this comes with a warning:  there are plenty of other problem domains that we've looked at where you _do_ know the answer.  

 - Don't reach for iteration as a first resort.  Make sure you're applying this technique to a relevant project.  Iteration is about scrambling together a few scratch components that may well get replaced in a later iteration.  It's clearly very different from _doing the worst parts first_ that we saw in [Journeys](Journeys.md).
 - Iterating _takes time_.  It involves [Meeting Reality]() with your users in a [large feedback loop]().  Because large feedback loops are more costly than smaller ones, make sure you _definitely need to do this_.

## Applying Risk-First

Let's look at the conclusions we reached in [Boundary Risk]():

> - **Human need is [Fractal](https://en.wikipedia.org/wiki/Fractal)**:  this means that over time, software products have evolved to more closely map human needs.   Software that would have delighted us ten years ago lacks the sophistication we expect today.
- **Software and hardware are both improving with time**: due to evolution and the ability to support greater and greater levels of complexity.
- **Abstractions accrete too**:  as we saw in [Process Risk](Process-Risk.md), we _encapsulate_ earlier abstractions in order to build later ones.

If we accept this problem of the fractal nature of human desire, then we have to contend with the fact that our software systems are always going to get continually more complex to serve it.

Therefore, our next stop is to look again at complexity...




