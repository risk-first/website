---
title: Legal Risk
description: Risks due to the legal context in which an operation is running.

slug: /risks/Legal-Risk


featured: 
  class: c
  element: '<risk class="legal" />'
sidebar_position: 2
tweet: yes
tags: 
 - Risks
 - Legal Risk
 - Environmental Risk
part_of: Operational Risk
---

<RiskIntro fm={frontMatter} />

Software and software services are becoming an increasingly important part of the modern world.  As the [Security Risk](/tags/Security-Risk) article shows, the result is that software has become a critical dependency in the functioning of the modern world, irrespective of whether that software is provided via open source or commercial avenues.  

Jurisdictions around the world are working hard to strengthen their laws guarding against the negative externalities caused by software - whether through increased security requirements, supply chain regulations or data controls.  

If you are building software, you need to account for the [Legal Risks](/tags/Legal-Risk) around that activity.   

## Worked Example

An online gaming firm is considering adding forum features, where players can discuss tactics and events related to their game and upload images and videos that they've created related to the game.  

![Mitigating Feature Risk Leads to Legal Risk](/img/generated/risks/posters/legal-risk.svg)

But as the above diagram shows, mitigating these [Feature Fit Risks](/tags/Feature-Fit-Risk) naively exposes the firm to [Leagl Risks](/tags/Legal-Risk).  For example:

  - One of the players uploads copyrighted media.  They copyright holder may then file a [DCMA takedown notice](https://www.dmca.com/FAQ/What-is-a-DMCA-Takedown) to have it removed.
  - Content might be uploaded that breaks privacy laws, e.g [General Data Protection Regulation (GDPR)](https://gdpr-info.eu).
  - Harmful or illegal content such as hate speech may be uploaded.
  
In addition, as laws differ across jurisdictions, the firm may have to deal with cases where content is legal in one area but illegal in another.  To mitigate some of these legal risks the firm may have to extend their [Terms of Service](https://en.wikipedia.org/wiki/Terms_of_service), DMCA processes or employ content moderators.

## Example Threats


### 1. Intellectual Property Rights

**Threat**: Copyrights, patents and trademarks apply when distributing software.   

### 2.  Licensing

**Threat**: A lot of the dependencies you might rely on to build software will be licensed (whether open source or otherwise).  It's important to manage these licenses.  One common issue in this area is [CopyLeft](https://en.wikipedia.org/wiki/Copyleft) - the requirement to distribute derivative works under the same license as the original.

### 3. Contracts

### 4. Tax / Sales Laws

### 


:::tip Anecdote Corner

Google purchased Android, Inc in 2005 for it's Android mobile operating system and wanted to incorporate Java - a multi-platform language and runtime environment developed originally by Sun Microsystems.  However, Google and Sun were unable to agree to the terms of a license.  As a result, Google decided to implement its own version of Java, based partly on available open source implementations at the time.  The Android platform finally saw release in 2008 in the HTC Dream handset.

In 2010, Oracle acquired Sun and decided to sue Google for copyright and patent infringement, asking for several billion in damages.  The court case hinged around whether Google's copying of the Java APIs constituted fair use:  were the functional designs of APIs copyrightable or not?  Over the next 10 years, the case went through the various layers of the US court system, the verdict flip-flopping in each case.  Eventually, in 2021, the US Supreme Court sided with Google, deciding that the its use of the Java APIs was fair.

A key take-away from this is that legal decisions are not clear-cut and getting into legal battles is a long, drawn out process.  In retrospect, Google would have been better off working through their licensing issues with Sun or collaborating on the nascent [OpenJDK](https://openjdk.org) project instead of ploughing their own furrow.   

:::