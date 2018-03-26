
[Waterfall](https://en.wikipedia.org/wiki/Waterfall_model) is a linear, stepwise approach to the processes involved in delivering a software system, and it really represents a family of methodologies, such as [RUP](https://en.wikipedia.org/wiki/Rational_Unified_Process) or [SSADM](https://en.wikipedia.org/wiki/Structured_systems_analysis_and_design_method).

## Major Practices

The specifics differ from one formulation to another, but generally speaking the process looks something like this:

![Waterfall Methodology](images/methodology_waterfall.png)

As shown in the diagram above, the software process is broken into distinct stages, usually including:

- [Requirements Capture](Requirements-Capture)
- [Design](Big-Design-Up-Front)
- [Implementation](Development)
- [Verification](Testing)
- [Delivery](Delivery) and [Operations](Support)
- [Sign Offs](Sign-Off) at each stage

### Variations

- [Prototyping](Prototyping):  Picking a particularly high-risk part of the project (such as UI elements) and delivering it first.  
- [Business Case](Analysis): Adding a stage in the at the start of the project to perform some benefits calculations.
- [Cycles](Prioritisation): Delivering in multiple, incremental stages.

## Risks Mitigated

### 1.  [Cost Of Implementation](Schedule-Risk)

It's likely that the Waterfall-Style methodologies were inspired by the construction industry, wherein we try to [Design Up Front](Design) in order to avoid the cost of re-work:  once concrete is poured, it's expensive to change it again, compared to the cost of updating the design in a diagram.   

Also, when Waterfall was originally conceived, automated testing techniques were not well established.  If you expect to perform a large [manual testing cycle](Testing) for each release, then clearly, doing fewer releases looks cheaper on paper.  

But, while _in principle_, Waterfall aims to _contain_ the cost of implementation.  However, in practice, because of [Requirements Drift](Feature-Risk), [Student Syndrome](Schedule-Risk) and [Complexity Risk](Complexity-Risk), the schedules get more inaccurate the larger the project.

### 2.  [Lots Of Stakeholders](Coordination-Risk)

In any construction project, there are likely to be lots of stakeholders - landowners, neighbours, government, clients and so on.   

Waterfall tries to mitigate this risk by getting [Sign-Offs](Sign-Off) as it goes along.

Additionally, by putting in the work at the planning and design stage, hopefully this means lots of staff can work together and not interfere with each other when the time for construction comes.

### 4.  [Agency Risk](Agency-Risk)

Because of it's step-wise delivery and reduction in visibility risk, Waterfall documentation can be used as the basis for [contracted delivery](Contract), and this is useful in situations where you are employing 3rd parties or putting work to tender.  

This is very different from the way [Agency Risk](Agency-Risk) is mitigated in, say [Scrum](Scrum), which relies on the [On Site Customer](On-Site-Customer) to police the implementation team.

### 5.  [Bureaucratic Risk](Bureaucratic-Risk)

Where projects can get tied up in lots of red tape, a Waterfall process can supply enough gravitas in the form of documentation and ceremony in order to appease bureaucracy, in a way that [Lean](Lean) or [Agile](Agile) methods do not.    

Additionally, because a [plan](Delivery-Plan) can be based on the [Design](Design), you can include bureaucratically-onerous tasks in the plan and work on these in parallel.

## Attendant Risks

### 1. [Complexity Risk](Complexity-Risk)

One of the biggest problems in sticking to a [Design](Design), rather than letting the design evolve, is that you are not going to be practicing [Refactoring](Refactoring) in order to keep down 

### 2.  [Production Risk](Production-Risk)

The fewer different [phases or cycles](Prioritisation) in your project, the fewer times you will [Meet Reality](Meet-Reality) 

