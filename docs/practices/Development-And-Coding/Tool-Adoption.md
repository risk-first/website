---
title: Adoption (Tools)
description: Implementing and utilising specific tools in the development process.
tags: 
  - Tool-Adoption
  - Development-Coding
practice:
  aka: 
   - "Tool Integration"
   - "Software Tools"
   - "Development Tools"
  mitigates:
   - tag: Schedule Risk
     reason: "Facilitates the use of specialized tools to improve development efficiency and quality."
   - tag: Process Risk
     reason: "Reduces the risk of manual errors by automating repetitive tasks."
   - tag: Operational Risk
     reason: "Enhances operational efficiency through the use of appropriate tools."
  attendant:
   - tag: Software Dependency Risk
     reason: "Creates dependencies on specific tools and their continued support."
   - tag: Funding Risk
     reason: "Can incur costs associated with acquiring and maintaining tools."
   - tag: Complexity Risk
     reason: "Integrating multiple tools can add complexity to the development process."
   - tag: Boundary Risk
     reason: Once tools become embedded in the process, they can be hard to change.
  related:
   - ../Planning-and-Management/Change-Management
   - ../Development-and-Coding/Coding
   - ../Deployment-and-Operations/Automation
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Software tools are programs and utilities that help developers create, debug, maintain, or otherwise support software development." - [Software tool, _Wikipedia_](https://en.wikipedia.org/wiki/Software_tool)

Tool Adoption in software development involves implementing and utilizing specific tools to enhance the development process. This includes tools for coding, debugging, testing, and project management. The use of appropriate tools helps in improving efficiency, quality, and collaboration among team members.

## Discussion


### Tool Use
 
In general, unless the problem is somehow _specific to your circumstances_ it may well be better to skip direct coding and pick up some new tools to help with the job.  

Tools in general are _good_ and _worth using_ if they offer you a better risk return than you would have had from not using them.  

But, this is a low bar -  some tools offer _amazing_ returns on investment.  The [Silver Bullets](../complexity/Silver-Bullets.md) article describes in general some of these: 
 - Assemblers
 - Compilers
 - Garbage Collection
 - Type Systems
 - Libraries
 - Build Tools
 - etc.

A _really good tool_ offers such advantages that not using it becomes _unthinkable_:  Linux is heading towards this point.   For Java developers, the JVM is there already.  

Picking new tools and libraries should be done **very carefully**:  you may be stuck with your choices for some time.  Here is a [short guide that might help](../risks/Dependency-Risk.md).


## See Also

<TagList tag="Tool-Adoption" />
