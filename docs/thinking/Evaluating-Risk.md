---
title: Evaluating Risk
description: Eisenhower's box, NPV and Discounting explained.


featured: 
  class: bg3
  element: '<risk href="/public/templates/risk-first/redesign/risks/attendant_risk_v2.svg"><code>Urgent</code><title>Evaluating Risk</title></risk>'
sidebar_position: 12
redirect_from: 
 - /Evaluating-Risk
tweet: yes
---

# Evaluating Risk

Let's look at some tools to help us decide when to do "urgent" work vs. when to do "important" work.

![Discount](/img/generated/principles/discount.svg)

It's very easy to get caught up in the day-to-day bustle of doing urgent things and lose sight of what's really important.  This is true of life in general but is definitely an occupational hazard in software development!  So in this section, I'll present an approach for reconciling this tension via a process of evaluating risk.

## Eisenhower's Box

![A basic Eisenhower box](/img/generated/introduction/eisenhowers_box.svg) 

As shown in the table above, [Eisenhower's Box](https://en.wikipedia.org/wiki/Time_management) (named after the president) is a tool to help evaluate urgency and importance.  It's a simple model allowing us to consider _two_ aspects of risk at the same time:

 - How valuable the work is (Importance, Value).
 - How soon it is needed (Urgency, Time, Speed).

The problem is, we now need to choose whether to do something that is _urgent_ or something that is _important_?  This is a problem that we face all the time.  In order to resolve this, I'm going to 

## Discounting

We can use [Net Present Value](https://en.wikipedia.org/wiki/Net_present_value) to discount value in the future, which offers us a way to reconcile these two variables.  The further in the future the value is realised, the bigger the discount.  This is done because payment _now_ is better than payment in the future:  there is the risk that something will happen to prevent that future payment.  This is why we have _interest rates_ on loan payments.

![Net Present Value Discounting](/img/charts/npv.svg)

In the diagram above, you can see two future payments: Payment **A** of £100 due in one year, and Payment **B** of £150 due in 10 years.  By discounting at a given rate (here at a high rate of 20% per year) we can compare their worth _now_.  At this discount rate, Payment **A**  - arriving next year - has a far greater value.  

## Net Present Risk

Can we do the same thing with risk?  Let's introduce the concept of **Net Present Risk**, or NPR:

> Net Present Risk is the _Impact_ of a Future risk, discounted to a common level of _Urgency_.

Let's look at a quick example to see how this could work out.  Let's say you had the following risks:

- Risk **A**, which will cost you £50 in 5 days' time.
- Risk **B**, which will cost you £70 in 8 days' time.

![Net Present Risk, 6% Discount Rate](/img/charts/npr1.svg)

Which has the biggest NPR?  Well, it depends on the discount rate that you apply.  The graph above  assumes we are discounting at 6% per _day_.  On this basis, the biggest NPR is **B**, at about £45. 

![Net Present Risk, 20% Discount Rate](/img/charts/npr2.svg)

However, the graph above increases the discount factor to 20% and we get a different result:  Now, risk **A** is bigger.  

Because this is _Net_ Present Risk, we can also use it to make decisions about whether or not to mitigate risks.   Let's assume the cost of mitigating any risk _right now_ is £40.  Under the 6% regime, only Risk **B** is worth mitigating today, because you spend £40 today to get rid of £45 of risk (today).  

Under the 20% regime, neither are worth mitigating.  The 20% Discount Rate may reflect that sometimes, future risks just don't materialise.   

## Discounting the Future To Zero

I have worked in teams sometimes where the blinkers go down and the only thing that matters is _now_.    Anything with a horizon over a week is irrelevant.   Regimes of such [hyper-inflation](https://en.wikipedia.org/wiki/Hyperinflation) are a sure sign that something has _really broken down_ within a project.  Consider in this case a Discount Factor of 60% per day, and the following risks:

- Risk A, £10 cost, happening _tomorrow_
- Risk B, £70 cost, happening in _5 days_.  

Risk B is almost irrelevant under this regime, as this graph shows:

![Net Present Risk, 60% Discount Rate](/img/charts/npr3.svg)

Why do things like this happen?  Often, the people involved are under incredible job-stress:  usually they are threatened on a daily basis and therefore feel they have to react.  In a similar way, publicly-listed companies also often apply short-term focus because they only care about the _next annual report_. That limits their horizons and ability to consider future risk.

Under these circumstances, we often see _Pooh-Bear Procrastination_:

<!-- markdown-link-check-disable -->

> "Here is Edward Bear coming downstairs now, bump, bump, bump, on the back of his head, behind Christopher Robin. It is, as far as he knows, the only way of coming downstairs, but sometimes he feels that there really is another way…if only he could stop bumping for a moment and think of it!" - [A. A. Milne, _Winne-the-Pooh_](http://amzn.eu/d/acJ5a2j)

<!-- markdown-link-check-enable -->

## The Problem With Discounting

Discounting helps explain why people procrastinate, even though studies have shown humans don't [discount properly like this](https://en.wikipedia.org/wiki/Hyperbolic_discounting) and there have been lots of economics studies investigating how discount rate varies with culture, age and socio-economic background.

Enough with the numbers and the theory:  we need a practical framework, rather than a scientifically rigorous analysis.  For software development, you should probably _give up_ on trying to compute risk numerically.  You _can't_ work out how long a software project will take based purely on an analysis of (say) _function points_.  (Whatever you define them to be).

- First, there isn't enough scientific evidence for an approach like this.  We can look at collected data about historic IT projects, but techniques and tools advance rapidly.
- Second, IT projects have too many confounding factors, such as experience of the teams, 
technologies, used, problem domain, clients etc.  That is, the risks faced by IT projects are _too diverse_ and _hard to quantify_ to allow for meaningful comparison from one to the next.
- Third, as soon as you _publish a date_ it changes the expectations of the project (see [Student Syndrome](/risks/Staff-Risk#student-syndrome)).
- Fourth, metrics get [misused](/tags/Map-And-Territory-Risk) and [gamed](/tags/Agency-Risk).

## Discounting In A Crisis

Reality is messy.  Dressing it up with numbers doesn't change that and you risk [fooling yourself](/tags/Map-And-Territory-Risk).  If this is the case, is there any hope at all in what we're doing?  Yes:   _forget precision_.  You should, with experience, be able to hold up two separate risks and answer the question, "is this one bigger than this one?"  

Lots of projects start with good intentions.  Carefully evaluating the risks of your actions or inaction is great when the going is good.  But then when the project is hit with delays everything goes out of the window.

In the next section, on [Crisis Mode](Crisis-Mode) we'll see that actually risk management is _still occurring_, but in a subtly different way.


