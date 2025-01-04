---
title: Security Risk
description: Risks due to hostile agents and events from inside or outside of the system.

slug: /risks/Security-Risk


featured: 
  class: c
  element: '<risk class="security" />'
sidebar_position: 1
tweet: yes
tags: 
 - Risks
 - Security Risk
 - Environmental Risk
part_of: Operational Risk
---

<RiskIntro fm={frontMatter} />

Security Risk is a subset of [Operational Risk](/tags/Security-Risk) looking at dangers to the operation due to hostile agents (bad actors) or events occurring.  

As we already discussed in [Agency Risk](/tags/Agency-Risk), _within_ a system we may wish to prevent our agents from causing accidental (or deliberate) harm, but we also have [Agency Risk](/tags/Agency-Risk) from unwanted agents _outside_ the system.  So security is also about ensuring that the environment we work in is _safe_ for the good actors to operate in while keeping out the bad actors.

Interestingly, security is handled in very similar ways in all kinds of systems, whether biological, human or institutional: 

- **Walls**: defences _around_ the system, to protect its parts from the external environment.  
- **Doors**: ways to get _in_ and _out_ of the system, possibly with _locks_.
- **Guards**: to make sure only the right things go in and out.  (i.e. to try and keep out _bad actors_).
- **Police**: to defend from _within_ the system against internal [Agency Risk](/tags/Agency-Risk).
- **Subterfuge**: hiding, camouflage, disguises, pretending to be something else.

These work at various levels in **our own bodies**:  our _cells_ have _cell walls_ around them, and _cell membranes_ that act as the guards to allow things in and out.  Our _bodies_ have _skin_ to keep the world out, and we have _mouths_, _eyes_, _pores_ and so on to allow things in and out.  We have an _immune system_ to act as the police.

**Our societies** work in similar ways: in medieval times, a city would have walls, guards and gates to keep out intruders.  Nowadays, we have customs control, borders and passports.

We're waking up to the realisation that our software systems need to work the same way:  we have [Firewalls](https://en.wikipedia.org/wiki/Firewall_(computing)) and we lock down _ports_ on servers to ensure there are the minimum number of _doors_ to guard,  we _police_ the servers with monitoring tools, and we _guard_ access using passwords and other identification approaches. 

## Worked Example

For a firm wanting to strengthen its security posture, there is almost an unlimited variety of third party tools and services they can turn to to help them.  The choice is bewildering and it's often hard to separate out the genuinely useful from the distractions.  

![Security as a mitigation for Agency Risk](/img/generated/risks/posters/security-risk.svg)

In the diagram above, a firm decides to address security risk with training, multi-factor authentication schemes, endpoint detection and response (EDR) and encrypting it's data.  In many scenarios, these are all good practices if implemented correctly.  However, [Agency Risk](/tags/Agency-Risk) and [Security Risk](Agency-Risk#security) thrive on complexity:  the more complex the systems we create, the more opportunities there are for bad actors to insert themselves and extract their own value.  The dilemma is, _increasing security_ also means increasing [Complexity Risk](/tags/Complexity-Risk), because secure systems are necessarily more complex than insecure ones.  

:::tip Anecdote Corner

CrowdStrike's Falcon tool is an Endpoint Detection and Response (EDR) tool designed to detect attacks aimed at compromising staff's personal computers, such as [ransomware](https://en.wikipedia.org/wiki/Ransomware), [Advanced Persistent Threats](https://en.wikipedia.org/wiki/Advanced_persistent_threat) and [Zero-Day Exploits](https://en.wikipedia.org/wiki/Zero-day_vulnerability).  As more and more staff moved outside of corporate firewalls during the COVID-19 pandemic, tools like this were seen as more and more valuable.

However, what clients of CrowdStrike were unware of was the company's extremely lax approach to quality assurance of its product - they pushed  code out to computers around the world without any rigorous testing, which was a disaster waiting to happen.  In July 2024 a CrowdStrike release caused widespread sytems crashes and a global IT outage as Windows PC's rebooted over and over again, unable to start properly.  

It is estimated that [Fortune 500 companies suffered $5.4bn of losses](https://nypost.com/2024/07/24/business/microsoft-to-take-hit-as-fortune-500-suffers-5-4b-in-crowdstrike-losses-study) due to the outage.

:::

## Regulation and Compliance 



## Example Threats

### 1. Cybersecurity Threats

Some examples include malware, phishing, Zero-Day Exploits and Distributed Denial of Service (DDos) attacks.  

**See:**  [Mitre Att&ck](https://attack.mitre.org) is a database of Cyber-Security Risk threats, broken down into:

 - Tactics: the reasons why an adversary is performing an action.
 - Techniques: how the adversary will attack.
 - Defences: things you can do to defend against adversaries.
 

### 2.  Physical Security Threats

**Threat:** External actors engaged in unauthorized access, theft or vandalism.

**Threat:** Natural disasters such as fires, floods or earthquakes.

### 3.  Personnel-Based Threats

**Threat**: Insider attacks (see [Agency Risk](tag/Agency-Risk) for more examples.

**Threat**: Social engineering - persuading employees to reveal sensitive information or grant elevated access.

### 4. Software Supply Chain Threats

**Threat**: The software supply chain - malware can be embedded in third-party components.  


#### Examples of Common Supply Chain Attacks

| Attack Name                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                    | Example                                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [Dependency/Manifest Confusion](https://fossa.com/blog/dependency-confusion-understanding-preventing-attacks/)                                                 | An attacker publishes a package with the same name as a private package used by a specific company but in a public repository. If the company's build system is not properly configured, it may pull the malicious public package instead of the intended private one.                                                                                         | [Alex Birsan](https://medium.com/@alex.birsan/dependency-confusion-4a5d60fec610)                  |
| [Package Stealing/Hijacking](https://jfrog.com/blog/five-examples-of-infection-methods-attackers-use-to-spread-malicious-packages/#Software-Package-Hijacking) | Attackers can sometimes take over abandoned or poorly maintained packages and introduce malicious changes. They then publish the updated malicious version, and dependent systems automatically pull in these updates.                                                                                                                                         | [us-parser-js](https://www.rapid7.com/blog/post/2021/10/25/npm-library-ua-parser-js-hijacked-what-you-need-to-know/)                                                                             |
| [Malicious Forks/Masquerading](https://www.bleepingcomputer.com/news/security/35-000-code-repos-not-hacked-but-clones-flood-github-to-serve-malware/)          | An attacker might create a fork of a popular open-source project, introduce malicious changes, and then attempt to promote or advertise this fork to unsuspecting users.                                                                                                                                                                                       | [Stephen Lacy](https://twitter.com/stephenlacy/status/1554697077430505473)                        |
| [RepoJacking](https://www.bleepingcomputer.com/news/security/millions-of-github-repos-likely-vulnerable-to-repojacking-researchers-say/)                       | An attack where a malicious actor registers a username and creates a repository used by an organization in the past but which has since changed its name. Doing so results in any project or code that relies on the dependencies of the attacked project to fetch dependencies and code from the attacker-controlled repository, which could contain malware. | [CTX](https://www.synopsys.com/blogs/software-security/cyrc-vulnerability-analysis-repo-jacking/) |
| [Piggybacking on Legitimate Packages/Pull Request Sneaking](https://github.com/mortenson/pr-sneaking)                                                          | Some attackers contribute malicious code to popular and legitimate projects, usually through pull requests. If not thoroughly reviewed, the malicious code might get merged into the main project.                                                                                                                                                             | [Teleport](https://goteleport.com/blog/hack-via-pull-request/)                                    |
| [Download Count Inflation/Star Jacking](https://www.crn.com/news/security/checkmarx-attackers-hijacking-github-ratings-to-infect-as-many-targets-as-possible-) | To make a malicious package look popular and trustworthy, attackers artificially inflate the download count.                                                                                                                                                                                                                                                   | [Pampyio](https://www.pepy.tech/projects/pampyio)                                                 |
| [Trojan Package](https://jfrog.com/blog/five-examples-of-infection-methods-attackers-use-to-spread-malicious-packages/#Trojan-Package)                         | In the trojan package infection method, the attacker publishes a fully functional library but hides malicious code in it.                                                                                                                                                                                                                                      | `lemaaa`                                                                                          |
| [Joke Packages](https://dev.to/codesphere/javascript-flaws-5-stupid-npm-packages-5fi)                                                                          | Not strictly an attack, but publishing packages as jokes.  Can harm the supply chain and cause dependency bloat.                                                                                                                                                                                                                                               | [true](https://www.npmjs.com/package/true)                                                        |
| [Cache Poisoning](https://snyk.io/blog/cache-poisoning-in-popular-open-source-packages/)                                                                       | Exploiting weaknesses in parameter handling by package managers.                                                                                                                                                                                                                                                                                               | [Rack](https://security.snyk.io/vuln/SNYK-RUBY-RACK-1061917)                                      |
| [TypoSquatting](https://jfrog.com/blog/five-examples-of-infection-methods-attackers-use-to-spread-malicious-packages/#Typosquatting)                           | Typosquatting is the practice of obtaining (or squatting) a famous name with a slight typographical error.                                                                                                                                                                                                                                                     | "Amzon.com"                                                                                       |                                                                                       |

**See:** [JFrog Blog on Infection Methods](https://jfrog.com/blog/five-examples-of-infection-methods-attackers-use-to-spread-malicious-packages/)

### 5. Hardware Supply Chain Threats

**Threat**: Malicious modifications to hardware components. 

**See**: 
 - [Alleged compromised chip in a network router](https://www.theverge.com/2018/10/5/17942838/apple-amazon-china-hack-servers-supermicro)
 - [concerns around Huawei](https://news.sky.com/story/huawei-blocked-tech-must-be-stripped-from-uks-5g-network-by-2027-12028177) 
 - [The NSA modifying hardware](https://arstechnica.com/tech-policy/2014/05/photos-of-an-nsa-upgrade-factory-show-cisco-router-getting-implant/). 

### 6. Emerging Technology Risks

**Threat**: Internet-of-Things (IOT) smart devices get exploited (e.g. baby monitors, thermostats).

**Threat**: AI tools generating personalised phishing emails, deepfakes, spam.

**Threat**: Eventually, quantum computing may pose a threat to existing encryption algorithms.