## What Is It 

Most forms of testing are about isolating a particular _characteristic_ of your system, and exploring it from a risk perspective.  It could be:

- **Performance Testing** addresses the risk of [not being able to support all the users](Production-Risk)
- **Usability Testing** tries to see whether people struggle to make sense of your software, usually because the assumptions of their [Internal Models](Internal-Model) differ from those embedded in the system, or that the system isn't adequately [transparent](Visibility-Risk) about it's own model.
- **Security Testing** addresses the risk that your software could be used against you or its users [by hackers](Production-Risk).

## How It Works

- (need a new type of diagram for this)

The whole purpose of testing is to [meet reality](Meeting-Reality) early, ahead of putting software in front of real users, where you face [Production Risks](Production-Risk), like reputation damage and financial penalties.

Given this, the best approach to test planning should be risk-based: consider which risks you want to mitigate, and test accordingly:

 - Identify Risks
 - Evaluate Risks
 - Prioritise Risks
 - Plan tests from the top of the priority list down.
 
This should work at _every level_ within a project.  If you are building a new feature, you should consider:

- Is it going to connect to third-party systems?  If so, I should build **System Integration Tests** to cover the [Dependency Risk](Dependency-Risk) associated with this, and the chance that in the future, the interface will change. 
- Does my code do what I expect?  I probably should build a **Unit Test** to mitigate [Complexity Risk](Complexity-Risk). 
- Will users understand the software I build for them?  I should probably do some [Beta Testing](https://en.wikipedia.org/wiki/Software_testing#Beta_testing) or [Corridor Testing](https://www.usability.gov/what-and-why/glossary/corridor-testing.html) to mitigate [Visiblity Risk](Visibility-Risk).

## Where It's Used

- [Waterfall](Waterfall) initially was conceived with a long, manual testing phase to be performed on the _whole system_ after development
- [Extreme Programming](Agile) championed the use of **Unit Tests** in order to test individual subsystems, as well as having an **On-Site Customer** to act as a testing resource when needed.
- [Lean]

## Practicalities

## Variations


### White-Box and Black-Box Testing


### Testing Level (wide, narrow)


### Automated vs Manual

Often, the decision of whether to automate a test will be based on whether or not it can be expressed _objectively_.  For example, ensuring the UI "looks ok and doesn't glitch" is entirely _subjective_:  you'll need to express this in a manual test.  But checking that a REST endpoint "returns the right error code" is _objective_, and is therefore a candidate for automation.

Automated tests look roughly the same, irrespective of the scope they are trying to test.  
 - We have a **System Under Test**, which may be a single class, or a whole executable.  
 - We have some input conditions for the test, and some expected outputs.
 - When the test is executed, we compare the actual outputs with the expected ones. 

![Testing Process](images/testing_process.png)





The more _automated_ a test is, the more cheaply it can be re-used.  However, the process of automation takes longer, and so adds [Schedule Risk](Schedule-Risk].  Whether or not it's worth automating is to some extend going to depend on how much you [value  future time](Risk-Theory).

**Automated Testing** has an interesting effect on managing [Complexity Risk](Complexity-Risk):  Although you may initially write a Unit Test (say) to mitigate the risk of [having implemented a feature wrongly](Feature-Risk), you are also given insurance against future change breaking that feature.  


### Testing Team

Sometimes, testing is handled by external teams.  ...

### Test-Driven Development

Also called test-first development.

### Code Coverage


## Feedback Loops & Risks Mitigated

There are so many different types of testing and this guide is not meant to be exhaustive.  Instead, here is a table covering some of the main types of testing and the risks they mitigate:

|Risk|Mitigation|
|----|----------|
|[Boundary Risk](Boundary-Risk)             |System Integration Testing<br />CI Deployment|
|  |CI Deployment   |
|  - Context Risk          |User Acceptance Testing |
|  - Configuration Risk    |
|  - Production Secret Risk|
|------------------------|----------------------------|
|Dependency Risk
| - On Other Teams
| - On Unwritten Software
|- On 3rd Party Libraries## Attendant Risks
|------------------------|----------------------------|
|Production Risk  |
| - Reputation Risk|
| - Data Theft|
| - Security Risk|
| - Failures |
| - SPOFs|





- Risks caused by using these practices


## What Is It

There are an enormous number of different ways to test software, and the reason for having so many different ways is that they all cover different technical circumstances and risks.  Let's look at just a few:



Because each addresses a different risk, the technique for each is different.



## How It Works



##



### Unit Testing

### Integration Testing

Where we test a few classes, or a small amount of code.  
- **Integration Testing**:  Where we test how the software works as-a-whole, and test that it will work with other systems 
- **Corridor Testing**:  Asking a few, random people to use the system-under-test, in order to see if it confuses them, or not.
- **User Acceptance Testing**:  Asking users to review new features, and make sure that 
- **Regression Testing**

|


Test plans / design



## Feedback Loops & Risks Mitigated

[Meeting Reality](Meeting-Reality), in test terms means setting up a _fixture_:   

[Testing Picture]()

The _entire environment_ (or the reality, if you will) of the test is fixed, and controlled.  We can then examine how the system being tested behaves within this environment.  This is why we often use the term _Mock_ in testing: we are asking something else to stand in for reality.


## Attendant Risks

Firstly, it can be easy to fool yourself with tests:  just because your tests pass does _not_ mean your code is perfect.  Vigilance is required against [Map And Territory Risk](Map-And-Territory-Risk):

- Do the tests explore the behaviour of the system the same way the users will?
- Can you be sure you haven't written a "null test", one that passes when it should fail?
- Have you covered the "cracks" between the different parts of the system?  Just because all the _components_ of a bicycle are fine, it doesn't mean that the _bike itself will work_.

Second, Testing is a double-edged sword.  While it allows you to mitigate various [Feature Risks](Feature-Risk), by adding test-code to your project you are necessarily increasing the [complexity](Complexity-Risk).  Maintaining tests is hard work, and if you're not careful, _running_ tests can take time and slow down builds and add delay through [Process Risk](Process-Risk). 

Third, if you are [exploring functionality](Prototyping) in order to flush out requirements, understand user behaviour or figure out performance characteristics, then there is _no point in building tests_ yet: what you are doing is exploratory at best and the extra code will [slow you down](Complexity-Risk).

For these reasons, focus on writing the _smallest number of tests that mitigates the risks_.  Consider using static analysis and code coverage tools to help you work out whe

## See Also

[Risk Based Agile Testing](https://www.amazon.co.uk/Risk-Driven-Agile-Testing-risk-based-effective-ebook/dp/B06XGL4CDL/ref=sr_1_1?ie=UTF8&qid=1521908627&sr=8-1&keywords=risk+based+agile+testing) by Martin Ivison, which covers a lot of this ground in much more detail. 
