

ceremony
practices
bureacratic overhead


How do frameworks change the risk landscape?

What are the risks in choosing a framework?

How does choosing a framework (at all) modify our risk landscape?

How should we choose a framework, then?

Evolution of software


Stuck In the Middle Pattern - Scala.



Example

In a project at work, coming across use of Hazlecast to cache the session IDs.   But, the app is only used once every month, and session IDs can be obtained in milliseconds.   Why cache them?  By doing this, you have introduced extra dependency risk, cache invalidation risks, networking risks, synchronisation risks and so on, for actually no benefit at all.  Unless, it’s CV building.  
