![Under Construction](images/state/uc.png)

### Abstraction

The process of removing physical, spatial, or temporal details or attributes in the study of objects or systems in order to more closely attend to other details of interest.

### Agent

Agency is the capacity of an actor to act in a given environment.  We use the term _agent_ to refer to any process, person, system or organisation with agency.

### Feedback Loop

The process of testing an [Internal Model](#internal-model) by testing it, through [taking action](#taking-action) to [Meet Reality](#meet-reality).  Typically, we talk about short or long feedback loops, depending on the intervals between [Meeting Reality](#meet-reality).

### Goal In Mind

A picture of the future that an individual or team carries within their [Internal Model](Glossary#internal-model);  An imagined destination on the [Risk Landscape](#risk-landscape).

### Internal Model

The model of reality held by an individual, team, software system or other [Agent](#agent).   You can regard the concept of [Internal Model](#internal-model) as being what you _know_ and what you _think_ about a certain situation.  An internal model _represents_ reality:  reality is made of matter, whereas the internal model is information.

Obviously, because we've all had different experiences, and our brains are wired up differently, everyone will have a different [Internal Model](#internal-model) of reality.  

- Within an organisation, we might consider the [Internal Model](#internal-model) of a _team of people_ to be the shared knowledge, values and working practices of that team.
- Within a software system, we might consider the [Internal Model](#internal-model) of a single server, and what knowledge it has of the world.
- A codebase is a team's [Internal Model](#internal-model) written down and encoded as software.

### Meet Reality

Any moment where we test an [Internal Model](#internal-model) by exposing it's predictive power against reality.  Note that "Reality" might be limited in some way, for example, a trial period or test users.  

### Pay-Off

Pay-Off refers to the _value_ of the [actions we take](#taking-action).  When we decide on a course of action, we have in mind a risk we wish to manage.  If the action is likely to have a big positive effect on the risk of a project, we say it has a promising pay off, whereas if the action fails to manage the risk, then it hasn't _paid off_.  

### Risk

A possibility of loss or cost.  Anything that _can_ go wrong on a project, or is _going_ wrong, but so far hasn't been quantified.  We talk about risk because we wish to recognise both the range of possibilities and the range of cost.  

Usually broken down into: 

#### Attendant Risk

A Risk you expect to face as the result of [Taking Action](#taking-action).

#### Hidden Risk

Risks you aren't aware of when you consider [Taking Action](#taking-action).  i.e. an _unknown unknown_.

#### Mitigated Risk

Risks that, as a result of [Taking Action](#taking-action) have been minimized. 

#### Upside Risk

The possibility of things going well, and leaving us with a benefit.  We may [take action](#taking-action) to maximize the likelihood and return of upside risks.

### Risk Landscape

A hypothetical landscape on which risks can be placed.  [Taking Action](#taking-action) means making a move on the [Risk Landscape](#risk-landscape) to reposition a project so that it has a different profile of [Attendant Risks](#attendant-risk).

### Taking Action

Refers to any activity in the project.  Actions are usually in order to manage some kind of risk.  At the same time, [Taking Action](#taking-action) usually means interacting with reality and updating the [Internal Model](#internal-model).

## Glossary Of Risk Types

<!--latex\small -->

| Risk             | Definition                                                               |
|------------------|--------------------------------------------------------------------------|
|[Boundary](Boundary-Risk)|Risks due to the choices we make around dependencies, and the limitations they place on our ability to change.|
|[Agency](Agency-Risk)|Risks due to the fact that things you depend on have agency, and they have their own goals to pursue.|
|[Channel](Communication-Risk#channel-risk)|Risks due to the inadequacy of the physical channel used to communicate our messages. e.g. noise, loss, interception, corruption.|
|[Communication](Communication-Risk)|Risks due to the difficulty of communicating with other entities, be they people, software, processes etc.|
|[Codebase](Complexity-Risk#codebase-risk)|The specific risks to a project of having a large, complex codebase to manage.|
|[Complexity](Complexity-Risk)|Risks caused by the weight of complexity in the systems we create, and their resistance to change and comprehension.|
|[Conceptual-integrity](Feature-Risk#conceptual-integrity-risk)|Risk that the software you provide is too complex, or doesn't match the expectations of your clients' internal models.|
|[Coordination](Coordination-Risk)|Risks that a group of agents cannot work together in a mutually beneficial way, and their behaviour devolves into competition.|
|[Dead-End](Complexity-Risk#dead-end-risk)|The risk that a particular approach to a change will fail.  Caused by the fact that at some level, our internal models are not a complete reflection of reality.|
|[Deadline](Deadline-Risk)|Where the use of a dependency has some kind of deadline, which can be missed.|
|[Dependency](Dependency-Risk)|Risks faced by depending on something else.  e.g. an event, process, person, piece of software or an organisation.   |
|[Feature-Access](Feature-Risk#feature-access-risk)|Risks due to some clients not having access to some or all of the features in your product.|
|[Feature-Drift](Feature-Risk#feature-drift-risk)|Risk that the features required by clients will change and evolve over time.   |
|[Feature](Feature-Risk)|Risks you face when providing features for your clients.|
|[Feature-Fit](Feature-Risk#feature-fit-risk)|Risk that the needs of the client don't coincide with services provided by the supplier.|
|[Funding](Scarcity-Risk#funding-risk)|A particular scarcity risk, due to lack of funding.|
|[Implementation](Feature-Risk#implementation-risk)|Risk that the functionality you are providing doesn't match the features the client is expecting, due to poor or partial implementation.|
|[Internal-Model](Communication-Risk#internal-model-risk)|Risks to communication caused by the fact that the internal models of the participants are semantically incompatible in some way.  |
|[Invisibility](Communication-Risk#invisibility-risk)|Risks caused by the choice of abstractions we use in communication.|
|[Learning-Curve](Communication-Risk#learning-curve-risk)|Risks due to the difficulty faced in updating an internal model.|
|[Map-And-Territory](Map-And-Territory-Risk)|Risks due to the differences between reality and the internal model of reality, and the assumption that they are equivalent. |
|[Market](Feature-Risk#market-risk)|Risk that the value your clients place on the features you supply will change, over time.|
|[Message](Communication-Risk#message-risk)|Risks caused by the difficulty of composing and interpreting messages in the communication process.|
|[Operational](Operational-Risk)|Risks of losses or reputational damage caused by failing processes or real-world events.|
|[Opportunity](Scarcity-Risk#opportunity-risk)|Risk that a particular set of market conditions.|
|[Process](Process-Risk)|Risks due to the fact that when dealing with a dependency, we have to follow a particular protocol of communication, which may not work out the way we want.|
|[Protocol](Communication-Risk#protocol-risk)|Risks due to the failure of encoding or decoding messages between two parties in communication.  |
|[Red-Queen](Scarcity-Risk#red-queen-risk)|The general risk that the competitive environment we operate within changes over time.|
|[Regression](Feature-Risk#regression-risk)|Risk that the functionality you provide changes for the worse, over time.|
|[Reliability](Dependency-Risk#reliability-risk)|Risks of not getting benefit from a dependency due to it's reliability.|
|[Scarcity](Scarcity-Risk)|Risk of not being able to access a dependency in a timely fashion due to it's scarcity.|
|[Schedule](Scarcity-Risk#schedule-risk)|The aspect of dependency risk related to time.|
|[Security](Agency-Risk#security-risk)|Agency Risks due to actors from outside the system.|
|[Software Dependency](Software-Dependency-Risk)|Dependency Risk due to software dependencies.|
|[Staff](Scarcity-Risk#staff-risk)|The aspect of dependency risks related to employing people.|
|[Trust-And-Belief](Communication-Risk#trust--belief-risk)|Risk that a party we are communicating with can't be trusted, as it has agency or is unreliable in some other way.  |
