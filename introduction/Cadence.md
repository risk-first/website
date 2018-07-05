![For Review](images/state/for-review.png)

Let's go back to the model again, introduced in [Meeting Reality](Meeting-Reality):

![Reality 2](images/generated/model_vs_reality_2.png)

As you can see, it's an idealized **Feedback Loop**.  

How _fast_ should we go round this loop?  Is there a right answer?  The longer you leave your [goal in mind](Glossary#Goal-In-Mind), the longer it'll be before you find out how it really stacks up against reality.  

Testing your [goals in mind](Glossary#Goal-In-Mind) against reality early and safely is how you'll manage risk effectively, and to do this, you need to set up **Feedback Loops**. e.g.

 - **Bug Reports and Feature Requests** tell you how the users are getting on with the software.
 - [Monitoring Tools and Logs](Operational-Risk) allow you to find out how your software is doing in reality.
 - **Dog-Fooding** i.e using the software you write yourself might be faster than talking to users.
 - [Continuous Delivery](DevOps) (CD) is about putting software into production as soon as it's written.   
 - **Integration Testing** is a faster way of meeting _some_ reality than continually deploying code and re-testing it manually.
 - **Unit Testing** is a faster feedback loop than Integration Testing. 
 - **Compilation** warns you about logical inconsistencies in your code.
 
.. and so on.

### Time / Reality Trade-Off

This list is arranged so that at the top, we have the most visceral, most _real_ feedback loop, but at the same time, the slowest.   

At the bottom, a good IDE can inform you about errors in your [Internal Model](Glossary#Internal-Model) in real time, by way of highlighting compilation errors .  So, this is the fastest loop, but it's the most _limited_ reality.

Imagine for a second that you had a special time-travelling machine.  With it, you could make a change to your software, and get back a report from the future listing out all the issues people had faced using it over its lifetime, instantly.

That'd be neat, eh?  If you did have this, would there be any point at all in a compiler?   Probably not, right?  

The whole _reason_ we have tools like compilers is because they give us a short-cut way to get some limited experience of reality _faster_ than would otherwise be possible.  Because, cadence is really important:  the faster we test our ideas, the more quickly we'll find out if they're correct or not.

### Development Cycle Time

One thing that often astounds me is how developers can ignore the fast feedback loops at the bottom of the list, because the ones nearer the top _will do_.   In the worst cases, changing two lines of code, running the build script, deploying and then manually testing out a feature.  And then repeating.

If you're doing it over and over, this is a terrible waste of time.  And, you get none of the benefit of a permanent suite of tests to run again in the future.  

The [Testing Pyramid](http://www.agilenutshell.com/episodes/41-testing-pyramid) hints at this truth: 

- **Unit Tests** have a _fast feedback loop_, so have _lots of them_.
- **Integration Tests** have a slightly _slower feedback loop_, so have _few of them_.   Use them when you can't write unit tests (at the application boundaries).
- **Manual Tests** have a _very slow feedback loop_, so have _even fewer of them_.  Use them as a last resort.

### Production

You could take this section to mean that [Continuous Delivery](DevOps) (CD) is always and everywhere a good idea.  I _guess_ that's not a bad take-away, but it's clearly more nuanced than that.  

Yes, CD will give you faster feedback loops, but getting things into production is not the whole story:   the feedback loop isn't complete until people have used the code, and reported back to the development team.  

The right answer is to use the fastest feedback loop possible, _which actually does give you feed back_.

## Recap

Let's look at the journey so far:

 - In [A Simple Scenario](A-Simple-Scenario) we looked at how risk pervades every goal we have in life, big or small.  We saw that risk stems from the fact that our [Internal Model](Glossary#Internal-Model) of the world couldn't capture everything about reality, and so some things were down to chance.  
 
 - In the [Development Process](Development-Process) we looked at how common software engineering conventions like Unit Testing, User Acceptance Testing and Integration could help us manage the risk of taking an idea to production, by _gradually_ introducing it to reality in stages.
 
 - In [It's All Risk Management](All-Risk-Management) we took a leap of faith:  Could _everything_ we do just be risk management?  And we looked at the RAID log and thought that maybe it could be.   
 
 - Next, in [A Software Project Scenario](Software-Project-Scenario) we looked at how you could treat the project-as-a-whole as a risk management exercise, and treat the goals from one day to the next as activities to mitigate risk.
 
 - [Some Risk Theory](Risk-Theory) was an aside, looking at some terminology and the useful concept of a Risk Register.
 
 - Then, generalizing the lessons of the Development Process article, we examined the idea that [Meeting Reality](Meeting-Reality) frequently helps flush out [Hidden Risks](Glossary#hidden-risk) and improve your [Internal Model](Glossary#Internal-Model).
 
 - Finally, above, we looked at [Cadence](Cadence), and how feedback loops allow you Navigate the Risk Landscape more effectively, by showing you more quickly when you're going wrong.
 
What this has been building towards is supplying us with a vocabulary with which to communicate to our team-mates about which Risks are important to us, which actions we believe are the right ones, and which tools we should use.

Let's have a [look at an example](A-Conversation) of how this might work:
