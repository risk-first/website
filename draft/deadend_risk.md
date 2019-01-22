

---imported

## Dead-End Risk and Boundary Risk

When you choose something to depend on, you can't be certain that it's going to work out in your favour.  Sometimes, the path from your starting point to your goal on the [Risk Landscape](Risk-Landscape) will take you to dead ends:  places where the only way towards your destination is to lose something, and do it again another way.  This is [Dead End Risk](Complexity-Risk#Dead-End-Risk), which we looked at before. 

[Boundary Risk](Boundary-Risk) is another feature of the [Risk Landscape](Risk-Landscape):  when you make a decision to use one dependency over another, you are picking a path on the risk landscape that _precludes_ other choices.  After all, there's not really much cost in a [Dead End](Complexity-Risk#Dead-End-Risk) if you've not had to follow a path to get to it.  

We're also going to look at [Boundary Risk](Boundary-Risk) in more detail later, but I want to introduce it here. Here are some examples:
 
- If I choose to program some software in Java, I will find it hard to integrate libraries from other languages.  The dependencies available to Java software are different to those in Javascript, or C#.  Having gone down a Java route, there are _higher risks_ associated with choosing incompatible technologies.  Yes, I can pick dependencies that use C# (still), but I am now facing greater complexity risk than if I'd just chosen to do everything in C# in the first place.
- If I choose one database over another, I am _limited to the features of that database_.  This is not the same as a dead-end:  I can probably build what I want to build, but the solution will be "bounded" by the dependency choices I make.    One of the reasons we have standards like [Java Database Connectivity (JDBC)](https://en.wikipedia.org/wiki/Java_Database_Connectivity) is to mitigate [Dead End Risk](Complexity-Risk#dead-end-risk) around databases, so that we can move to a different database later.
- If I choose to buy a bus ticket, I've made a decision not to travel by train, even though later on it might turn out that the train was a better option.  Buying the bus ticket is [Boundary Risk](Boundary-Risk):  I may be able to get a refund, but having chosen the dependency I've set down a path on the risk landscape.

---

