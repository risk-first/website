---
title: Fractals
description: Part of the 'Estimating' Risk-First Series, where we look at estimating with uncertain boundaries.
url: https://riskfirst.org/estimating/Fractals

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/fractal.svg">Fractals</image-artifact>'
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

So, that means:

 - The _area_ of a landmass is a fixed amount, but
 - the _perimeter_ gets longer and longer, and more and more complex, the more accurately you measure it.
 
Let's look at a simple mathematical example of a shape like this, the [Koch Snowflake](https://en.wikipedia.org/wiki/Koch_snowflake).

![Koch Snowflake](https://upload.wikimedia.org/wikipedia/commons/f/fd/Von_Koch_curve.gif)

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

As the animation shows, this shape is created by adding extra triangles to each side of the existing shape.  As the number of steps increases, the _area_ settles down to 8, whilst the total _perimeter_ begins to increase more and more rapidly.

## Relevance

The reason this is relevant to software (or hardware, for that matter) is that human value is very much like this.  Consider the iPhone.  The first version arrived in 2007, and looks much as it does today.  The design began in 2005, and the designers knew they had a short period of time to bring this totally new idea to market, with the components they had available.

In successive years, new iPhones arrived, improving on the original.  The screen improved, the networking improved, the software improved.  The complexity of the iPhone and it's eco-system as a whole increased massively.


Just like the [Koch Snowflake](https://en.wikipedia.org/wiki/Koch_snowflake), above, the designers were creating an ever-more-complex perimeter of complexity around an area of _consumer value_.  And, just like the Koch Snowflake, each new version increased the _area_ of value.  

## Continuous Refinement

If your problem doesn't have an exact, defined end-goal, there is simply no way of estimating how long it will take to get there _because you never will_.  And, if (like the Koch Snowflake), your solution will _never_ be perfect, then the only approach is _continuous refinement_. 

![Opportunity on the Risk Landscape](/images/estimates/fractal1.png)

You might have some idea (selling hats for dogs?) of some interesting area of value on the [Risk Landscape](../thinking/Glossary.md#risk-landscape)  that you want to occupy, as shown in the above diagram.  

Your best bet is to try and colonise the area of value _as fast as possible_ by using as much readily available software as possible.  

![First Version](/images/estimates/fractal2.png)

Maybe version one looks something like the diagram above: a few hastily-assembled components lashed together along with some rough-and-ready web pages.   Hopefully, this kind of design will give you a better idea of what the right answer looks like.

![Second Version](/images/estimates/fractal3.png)

Releasing the first version might fill in some of the blanks, and show you more detail on the [Risk Landscape](../thinking/Glossary.md#risk-landscape).  Effectively showing you a more detailed view of the coastline.   Feedback from users will provide you with a better understanding of exactly what this fractal problem-space looks like. 

![Third Version](/images/estimates/fractal4.png)

As you go on [Meeting Reality](../thinking/Glossary.md#meet-reality), the shape of the problem domain comes into focus, and you're able to _refine_ your solution to match it more exactly.

Is it possible to estimate problems in the Fractal Shape domain?  The best you might be able to do is to match two competing objectives:

- Building Product:  By building functionality you head towards your [Goal](../thinking/Glossary.md#goal-in-mind) on the [Risk Landscape](../thinking/Glossary.md#risk-landscape).  But how do you know this is the right goal?
- [Meeting Reality](../thinking/Glossary.md#meet-reality):  By putting your product "out there" you find your customers and your niche in the market, and you explore the [Risk Landscape](../thinking/Glossary.md#risk-landscape).  But this takes time and effort away from _building product_.

With this in mind, you estimate a useful amount of time to go round this cycle, fixing the time but letting the deliverable vary.
 
## Parsimonious Yachtsman 

The fractal nature of many software development tasks is both a blessing and a curse.  It's a blessing because it means that sometimes, software developers can achieve almost-miracles of creating huge chunks of value in no time at all.  But that capability somehow ends up being _an expectation_.   The startup idea of "throwing together an MVP (Minimum Viable Product)" is taken as gospel.  Kyle Prifogle pushes against this when he writes:

> "Lets explore this point more by means of an extended analogy. Suppose that you wanted to start a new business as a yachting captain... This is in many ways analogous to when a startup company decides that they want to serve the fortune 500, companies that have petabytes and beyond of data. However, you as a startup founder have to operate lean, and you are only willing to spend $10,000 on a boat. If you were to walk up to the owner of the multi-million dollar yacht and say, I’ll give you $10,000 for that boat, you would be laughed off the dock. " - [Kyle Prifogle, _Dear Startup_](http://kyleprifogle.com/dear-startup/)

Buying yachts is _not_ in the Fractal problem space.  It's much more [Fill-The-Bucket](Fill-The-Bucket.md): more money means more yacht.  So, it's not a great analogy.  But the point is that the _expectation_ is for a value-miracle to occur, simply by adopting the practice of MVP or agile development.

## Where To Find Fractal Spaces

Not all software development problems are squarely in the [Fractal](Fractals.md) space, but those that are are generally tasks like building user interfaces, games, interactivity and usability.  This is where the curse comes in:  it's _hard to know what to build_ and _you are never done_.  

Although there are some high-profile wins with these types of problems, generally they are _hard_.
 
## Applying Risk-First

Let's look at the conclusions we reached in [Boundary Risk](../risks/Boundary-Risk.md):

> - **Human need is [Fractal](https://en.wikipedia.org/wiki/Fractal)**:  this means that over time, software products have evolved to more closely map human needs.   Software that would have delighted us ten years ago lacks the sophistication we expect today.
- **Software and hardware are both improving with time**: due to evolution and the ability to support greater and greater levels of complexity.
- **Abstractions accrete too**:  as we saw in [Process Risk](../risks/Process-Risk.md), we _encapsulate_ earlier abstractions in order to build later ones.

If we accept this problem of the fractal nature of human desire, then we have to contend with the fact that our software systems are always going to get continually more complex to serve it.

So that's _four_ different styles of estimating.  Time for [number five](Change.md).




