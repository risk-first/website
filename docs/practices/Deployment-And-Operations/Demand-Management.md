---
title: Demand Management
description: The practice of forecasting, planning, and managing the demand for resources to ensure that the best use is made of them.
tags:
  - Demand Management
  - Practice
featured:
  class: c
  element: "<action>Demand Management</action>"
practice:
  aka:
    - "Demand Planning"
    - "Demand Forecasting"
    - "Resource Planning"
    - "Capacity Planning"
    - "Resource Scaling"
  mitigates:
    - tag: Reliability Risk
      reason: "Helps in efficiently allocating scarce dependencies to meet the most critical demands."
    - tag: Deadline Risk
      reason: "Ensures that the demand is managed to meet delivery schedules."
    - tag: Market Risk
      reason: "Aligns production with market demand, reducing the risk of under or overproduction."
  attendant:
    - tag: Complexity Risk
      reason: "Forecasting and planning demand can add complexity to project management."
    - tag: Funding Risk
      reason: "Inaccurate demand forecasts can lead to resource misallocation."
  related:
    - ../Planning-And-Management/Prioritising
    - ../Planning-And-Management/Requirements-Capture
---

<PracticeIntro details={frontMatter} />

## Description

> "Demand management is a planning methodology used to forecast, plan for and manage the demand for products and services. It is a key process in supply chain management." - [Demand Management, _Wikipedia_](https://en.wikipedia.org/wiki/Demand_management)

Demand Management involves forecasting, planning, and managing the demand for products or services to ensure they align with business objectives and customer needs. This practice helps in balancing supply and demand, optimizing resource utilization, and enhancing customer satisfaction by ensuring timely delivery of products or services.

## Variations

| **Demand Management Type** | **Description**                                                                              | **Reference**                                                                           |
| -------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Capacity Planning**      | Determining the production capacity needed to meet changing demands for products.            | [Capacity Planning, Wikipedia](https://en.wikipedia.org/wiki/Capacity_planning)         |
| **Load Balancing**         | Distributing workloads across multiple resources to optimize response time and availability. | [Load Balancing, Wikipedia](<https://en.wikipedia.org/wiki/Load_balancing_(computing)>) |
| **Auto-Scaling**           | Automatically adjusting compute resources based on current demand levels.                    | [Autoscaling, Wikipedia](https://en.wikipedia.org/wiki/Autoscaling)                     |
| **Queueing**               | Using buffers to manage bursts of demand and smooth processing over time.                    | [Message Queue, Wikipedia](https://en.wikipedia.org/wiki/Message_queue)                 |

See also: [Reliability Risk](/risks/Reliability-Risk)

## Used By

<MethodList tag="Demand Management" />
