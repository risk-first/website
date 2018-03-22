
You can't build A before you build B.

Adding dependencies to a project also increases Complexity Risk.

Which dependencies should you add?

Code yourself or add a dependency?

Cost of learning the dependency.



how to choose libraries



Example

In a project at work, coming across use of Hazlecast to cache the session IDs.   But, the app is only used once every month, and session IDs can be obtained in milliseconds.   Why cache them?  By doing this, you have introduced extra dependency risk, cache invalidation risks, networking risks, synchronisation risks and so on, for actually no benefit at all.  Unless, it’s CV building.  




Stuck In the Middle Pattern - Scala / Raj.

Using a library vs writing it yourself.  Feature risk