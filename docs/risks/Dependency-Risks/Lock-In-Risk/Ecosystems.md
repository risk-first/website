


## Ecosystems and Lock-In

Sometimes, one choice leads to another, and you're forced to "double down" on your original choice, and head further down the path of commitment.  

On the face of it, [WordPress](https://en.wikipedia.org/wiki/WordPress) and [Drupal](https://en.wikipedia.org/wiki/Drupal) _should_ be very similar:

 - They are both [Content Management Systems](https://en.wikipedia.org/wiki/Content_management_system).
 - They both use a [LAMP (Linux, Apache, MySql, PHP) Stack](https://en.wikipedia.org/wiki/LAMP_(software_bundle)).
 - They were both started around the same time (2001 for Drupal, 2003 for WordPress).
 - They are both Open-Source, and have a wide variety of [_plugins_](https://en.wikipedia.org/wiki/Plug-in_(computing)), that is, ways for other programmers to extend the functionality in new directions.  

But crucially, the underlying abstractions of WordPress and Drupal are different, so the plugins available for each are different.  The quality and choice of plugins for a given platform, along with factors such as community and online documentation, is often called its _ecosystem_:

> "... a set of businesses functioning as a unit and interacting with a shared market for software and services, together with relationships among them. These relationships are frequently underpinned by a common technological platform and operate through the exchange of information, resources, and artifacts." - [Software Ecosystem, _Wikipedia_](https://en.wikipedia.org/wiki/Software_ecosystem)

You can think of the ecosystem as being like the footprint of a town or a city, consisting of the buildings, transport network and the people that live there.  Within the city, and because of the transport network and the amenities available, it's easy to make rapid, useful moves on the [Risk Landscape](/risks/Risk-Landscape).  In a software ecosystem it's the same: the ecosystem has gathered together to provide a way to mitigate various different [Feature Risks](/tags/Feature-Risk) in a common way.

Ecosystem size is one key determinant of [Lock-In Risk](/tags/Lock-In-Risk):
  
- **A large ecosystem** has a large boundary circumference.  [Lock-In Risk](/tags/Lock-In-Risk) is lower in a large ecosystem because your moves on the [Risk Landscape](/tags/Risk-Landscape) are unlikely to collide with it.  The boundary _got large_ because other developers before you hit the boundary and did the work building the software equivalents of bridges and roads and pushing it back so that the boundary didn't get in their way.  
- In **a small ecosystem**, you are much more likely to come into contact with the edges of the boundary.  _You_ will have to be the developer that pushes back the frontier and builds the roads for the others.  This is hard work.

### Big Ecosystems Get Bigger

In the real world, there is a tendency for _big cities to get bigger_.  The more people that live there, the more services they provide and need, and therefore, the more immigrants they attract.  It's the same in the software world too.  In both cases, this is due to the [_Network Effect_](https://en.wikipedia.org/wiki/Network_effect):

> "... the positive effect described in economics and business that an additional user of a good or service has on the value of that product to others. When a network effect is present, the value of a product or service increases according to the number of others using it." - [Network Effect, _Wikipedia_](https://en.wikipedia.org/wiki/Network_effect)

![WordPress vs Drupal adoption over 8 years, according to [w3techs.com](https://w3techs.com/technologies/history_overview/content_management/all/y)](/img/numbers/wordpress-drupal-chart.png)

You can see the same effect in the software ecosystems with the adoption rates of WordPress and Drupal, shown in the chart above.  Note: this is over _all sites on the internet_, so Drupal accounts for hundreds of thousands of sites.  In 2018, WordPress is approximately 32% of all web-sites.  For Drupal it's 2%.

Did WordPress gain this march because it was always _better_ than Drupal?  That's arguable.  Certainly, they're not different enough that WordPress is 16x better.  That it's this way round could be _entirely accidental_, and a result of [Network Effect](https://en.wikipedia.org/wiki/Network_effect).

But, by now, if they _are_ to be compared side-by-side, WordPress _might be better_ due to the sheer number of people in this ecosystem who are...

 - Creating web sites.
 - Using those sites.
 - Submitting bug requests.
 - Fixing bugs.
 - Writing documentation.
 - Building plugins.
 - Creating features.
 - Improving the core platform.
  
But is bigger always better? Perhaps not.  

### Big Ecosystems Are More Complex

When a tool or platform is popular, it is under pressure to increase in complexity.  This is because people are attracted to something useful and want to extend it to new purposes.  This is known as _The Peter Principle_:  

> "The Peter principle is a concept in management developed by Laurence J. Peter, which observes that people in a hierarchy tend to rise to their 'level of incompetence'." - [The Peter Principle, _Wikipedia_](https://en.wikipedia.org/wiki/Peter_principle)

Although designed for _people_, it can just as easily be applied to any other dependency you can think of.  This means when things get popular, there is a tendency towards [Conceptual Integrity Risk](/tags/Conceptual-Integrity-Risk) and [Complexity Risk](/tags/Complexity-Risk).  

![Java Public Classes By Version (3-9)](/img/numbers/java_classes_by_version.png)

The above chart is an example of this: look at how the number of public classes in Java (a good proxy for the boundary) has increased with each release.   

#### Backward Compatibility

As we saw in [Software Dependency Risk](/tags/Software-Dependency-Risk), The art of good design is to afford the greatest increase in functionality with the smallest increase in  complexity possible, and this usually means [Refactoring](https://en.wikipedia.org/wiki/Refactoring).  But, this is at odds with [Backward Compatibility](/risks/Protocol-Risk#backward-compatibility).

Each new version has a greater functional scope than the one before (pushing back [Lock-In Risk](/tags/Lock-In-Risk)), making the platform more attractive to build solutions in.   But this increases the [Complexity Risk](/tags/Complexity-Risk) as there is more functionality to deal with.  

![Tradeoff between large and small ecosystems](/img/generated/risks/boundary/Boundary-Risk2.svg)

You can see in the diagram above the Peter Principle at play:  as more responsibility is given to a dependency, the more complex it gets and the greater the learning curve to work with it.  Large ecosystems like Java react to [Internal Model Risk](/tags/Internal-Model-Risk) by having copious amounts of literature to read or buy to help, but it is still off-putting.

Because [Complexity is Mass](/risks/Complexity-Risk#complexity-is-mass), large ecosystems can't respond quickly to [Feature Drift](/tags/Feature-Drift-Risk).  This means that when the world changes, new ecosystems are likely to appear to fill gaps, rather than old ones moving in.
