

### Pair Programming / Mob Programming

In the main, [Review](Review.md)) is the main way to mitigate [Coordination Risk](../risks/Coordination-Risk.md). For example:
 - [Code Reviews](Review.md)
 - [Stand Up Meetings](Review.md)
 - [Presentations & Demos](Review.md)
 - [Training](Review.md)
 
**Pair Programming** however _combines_ the review with the process of coding: there are now two heads at each terminal.  What does this achieve?  
 - Clearly, we mitigate [Key-Man Risk](../risks/Coordination-Risk.md) as we've got two people doing every job.  
 - Knowledge is transferred at the same time, too, mitigating [Specialist Risk](../risks/Coordination-Risk.md).  
 - Proponents also argue that this mitigates [Complexity Risk](../risks/Complexity-Risk.md), as the software will be better quality.
 - Since the pair spend _so much time together_, the communication is very _high bandwidth_, so this mitigates [Communication Risk](../risks/Communication-Risk.md)
 
But, conversely, there is a cost to **Pair Programming**:
 - Having two people doing the job _one person could do_ intimates [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).
 - Could the same [Complexity Risk](../risks/Complexity-Risk.md) be mitigated just with more regular [Code Reviews](Review.md)?
 - Sometimes, asking members of a team to work so closely together is a recipe for disaster.  [Team Risk](../risks/Coordination-Risk.md)
 - Not every pair programmer "shares" the keyboard time evenly, especially if ability levels aren't the same.
 - There is only one **Feedback loop**, so despite the fact you have two people, you can only [Meet Reality](../thinking/Meeting-Reality.md) serially.  
   
 **Mob Programming** goes one stage further and suggests that we can write better software with _even more people around the keyboard_.  So, what's the right number?  Clearly, the usual trade-off applies:  are you _mitigating_ more risk than you're _gaining_?   
 