## What Is It

There are an enormous number of different ways to test software, and the reason for having so many different ways is that they all cover different technical circumstances and risks.  Let's look at just a few:

- **Performance Testing** addresses the risk of [not being able to support all the users](Production-Risk)
- **Usability Testing** tries to see whether people struggle to make sense of your software, usually because the assumptions of their [Internal Models](Internal-Model) differ from those embedded in the system, or that the system isn't adequately [transparent](Visibility-Risk) about it's own model.
- **Security Testing** addresses the risk that your software could be used against you or its users [by hackers](Production-Risk).

... and so on.

Because each addresses a different risk, the technique for each is different.

### Automated vs Manual

Often, the decision of whether to automate a test will be based on whether or not it can be expressed _objectively_.  For example, ensuring the UI "looks ok and doesn't glitch" is entirely _subjective_:  you'll need to express this in a manual test.  But checking that a REST endpoint "returns the right error code" is _objective_, and is therefore a candidate for automation.

The more _automated_ a test is, the more cheaply it can be re-used.  However, the process of automation takes longer, and so adds [Schedule Risk](Schedule-Risk].  Whether or not it's worth automating is to some extend going to depend on how much you [value  future time](Risk-Theory).

**Automated Testing** has an interesting effect on managing [Complexity Risk](Complexity-Risk):  Although you may initially write a Unit Test (say) to mitigate the risk of [having implemented a feature wrongly](Feature-Risk), you are also given insurance against future change breaking that feature.  

## How It Works

The whole purpose of testing is to [meet reality](Meeting-Reality) early, ahead of putting software in front of real users, where you face [Production Risks](Production-Risk), like reputation damage and financial penalties.

Given this, the best approach to test planning should be risk-based: consider which risks you want to mitigate, and test accordingly:

 - Identify Risks
 - Evaluate Risks
 - Prioritise Risks
 - Plan tests from the top of the priority list down.
 
This should work at _every level_ within a project.  If you are building a new feature, you should consider:

- Is it going to connect to third-party systems?  If so, I should build **System Integration Tests** to cover the [Dependency Risk](Dependency-Risk) associated with this, and the chance that in the future, the interface will change. 
- Does my code do what I expect?  I probably should build a **Unit Test** to mitigate [Complexity Risk](Complexity-Risk) 

  


**Automated Testing**

### Unit Testing

### Integration Testing

Where we test a few classes, or a small amount of code.  
- ****:  Where we test how the software works as-a-whole, and test that it will work with other systems 
- **Corridor Testing**
- **User Acceptance Testing**
- **Regression Testing**




Test plans / design



## Feedback Loops

### 1. 


## Risks Mitigated




## Attendant Risks