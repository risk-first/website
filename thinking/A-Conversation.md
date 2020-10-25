---
title: A Conversation
description: A conversation about software development using Risk-First vocabulary.
url: https://riskfirst.org/thinking/A-Conversation

featured: 
  class: bg3
  element: '<risk class="communication" />'
categories: 
 - Thinking Risk-First
order: 7
redirect_from: 
 - /A-Conversation
---


# A Conversation

After so much theory, it seems like it's time to look at how we can apply these principles in the real world.

The following is based on a summary of a real issue around the time of writing.  It's heavily edited and anonymized, and I've tried to add the Risk-First vocabulary along the way, but otherwise, it's real.

Some background:  **Synergy** is an online service with an app-store, and **Eve** and **Bob** are developers working for **Large Corporation LTD**, which wants to have an application accepted into Synergy's app-store.  

Synergy's release process means that the app-store submission must happen in a few weeks, so this is something of a hard deadline: if we miss it, the next opportunity for release will be four months away.

## A Risk Conversation

**Eve**:  We've got a problem with the Synergy security review.  

**Bob**:  Tell me.

**Eve**:  Well, you know Synergy did their review and asked us to upgrade our Web Server to only allow TLS version 1.1 and greater?  

**Bob**:  Yes, I remember:   we discussed it as a team and thought the simplest thing would be to change the security settings on the Web Server, but we all felt it was pretty risky.  We decided that in order to flush out [Hidden Risk](../thinking/Glossary.md#hidden-risk), we'd upgrade our entire production site to use it _now_, rather than wait for the app launch.

**Eve**:  Right, and it _did_ flush out [Hidden Risk](../thinking/Glossary.md#hidden-risk): some of our existing software broke on Windows 7, which sadly we still need to support.  So, we had to back it out.

**Bob**:  Ok, well I guess it's good we found out _now_.  It would have been a disaster to discover this after the app had gone live on Synergy's app-store.

**Eve**:  Yes.  So, what's our next-best action to mitigate this?  

**Bob**:  Well, we could go back to Synergy and ask them for a reprieve, but I think it'd be better to mitigate this risk now if we can... they'll definitely want it changed at some point.

**Eve**:  How about we run two web-servers?  One for the existing content, and one for our new Synergy app?  We'd have to get a new external IP address, handle DNS setup, change the firewalls, and then deploy a new version of the Web Server software on the production boxes.

**Bob**:  This feels like there'd be a lot of [Attendant Risk](../thinking/Glossary.md#attendant-risk):  we're adding [Complexity Risk](../risks/Complexity-Risk.md) to our estate, and all of this needs to be handled by the Networking Team, so we're picking up a lot of [Process Risk](../risks/Process-Risk.md).  I'm also worried that there are too many steps here, and we're going to discover loads of [Hidden Risks](../thinking/Glossary.md#hidden-risk) as we go.

**Eve**:  Well, you're correct on the first one.  But, I've done this before not that long ago for a Chinese project, so I know the process - we shouldn't run into any new [Hidden Risk](../thinking/Glossary.md#hidden-risk).

**Bob**:  OK, fair enough.  But isn't there something simpler we can do?  Maybe some settings in the Web Server?

**Eve**:  Well, if we were using Apache, yes, it would be easy to do this.  But, we're using Baroque Web Server, and it _might_ support it, but the documentation isn't very clear.

**Bob**:  OK, and upgrading to Apache is a _big_ risk, right?  We'd have to migrate all of our configuration... 

**Eve**:  Yes, let's not go there.  So, _changing_ the settings on Baroque, we have the risk that it's not supported by the software and we're back where we started.  Also, if we isolate the Synergy app stuff now, we can mess around with it at any point in future, which is a big win in case there are other [Hidden Risks](../thinking/Glossary.md#hidden-risk) with the security changes that we don't know about yet.

**Bob**:  OK, I can see that buys us something, but time is really short and we have holidays coming up.  

**Eve**:  Yes. How about for now, we go with the isolated server, and review next week?  If it's working out, then great, we continue with it.  Otherwise, if we're not making progress next week, then it'll be because our isolation solution is meeting more risk than we originally thought.   In that case, we can attempt the settings change instead.

**Bob**:  Fair enough, it sounds like we're managing the risk properly, and because we can hand off a lot of this to the Networking Team, we can get on with mitigating our biggest risk on the project, the authentication problem, in the meantime.

**Eve**:  Right.  I'll check in with the Networking Team each day and make sure it doesn't get forgotten.

## Isn't It Obvious?

At this point, you might be wondering what all the fuss is about.   This stuff is all obvious!  It's what we do anyway!  Perhaps.  Risk management _is_ what we do anyway: 
 
 > "We’ve survived 200,000 years as humans.  Don’t you think there’s a reason why we survived? We’re good at risk management. " - [Nassim Nicholas Taleb, author of _The Black Swan_](https://www.zerohedge.com/news/2018-03-13/taleb-best-thing-society-bankruptcy-goldman-sachs)
 
The problem is that although all this _is_ obvious, it appears to have largely escaped codification within the literature, practices and methodologies of software development.  Further, while it is obvious, there is a huge hole: successful De-Risking depends heavily on individual experience and talent.  

In the [next section](One-Size-Fits-No-One.md), we are going to briefly look at software methodology, and how it comes up short in when addressing risk.



 