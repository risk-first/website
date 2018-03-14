## Recap

Let's look at the journey so far:

 - In the [Introduction](Introduction) we looked at how risk pervades every goal we have in life, big or small.  We saw that risk stems from the fact that our [Internal Model](Internal-Model) of the world couldn't capture everything about reality, and so some things were down to chance.  
 
 - In the [Development Process](Development-Process) we looked at how common software engineering conventions like Unit Testing, User Acceptance Testing and Integration could help us manage the risk of taking an idea to production, by _gradually_ introducing it to reality in stages.
 
 - In [It's All Risk Management](All-Risk-Management) we took a leap of faith:  Could _everything_ we do just be risk management?  And we looked at the RAID log and thought that maybe it could be.   
 
 - Next, in [A Software Project Scenario](Software-Project-Scenario) we looked at how you could treat the project-as-a-whole as a risk management exercise, and treat the goals from one day to the next as activities to mitigate risk.
 
 - [Some Risk Theory](Risk-Theory) was an aside, looking at some terminology and the concept of a Risk Register.
 
 - Finally, generalized the lessons of the Development Process article:  [Meeting Reality](Meeting-Reality) frequently helps flush out [Hidden Risks](Attendant-Risk) and improve your [Internal Model](Internal-Model).
 
## Purpose


## Cadence

Let's go back to the model again:

![Reality 2](images/reality2.png).

How _fast_ should we go round this loop?  Is there a right answer?  The longer you leave your [goal in mind](Goal-In-Mind), the longer it'll be before you find out how it really stacks up against reality.  

Testing your [goals in mind](Goal-In-Mind) against reality early and safely is how you'll manage risk effectively, and to do this, you need **Feedback Loops**:

 - **Bug Reports and Feature Requests** tell you how the users are getting on with the software.
 - **Dog-Fooding** (i.e using the software you write yourself) can be faster though.
 - [Monitoring Tools and Logs](Production-Risk) allow you to find out how your software is doing in reality.
 - [Continuous Delivery](DevOps) (CD) is about putting software into production as soon as it's written.   
 - **Integration Testing** is a faster way of meeting _some_ reality than continually deploying code and re-testing it manually.
 - **Unit Testing** is a faster feedback loop than Integration Testing. 

.. and so on.

So, why have we done all this? 

 