---
title: "Parking Management System"
summary: "Parking allocation with database locking, a transactional outbox, Redis reconciliation, and idempotent billing."
category: "Systems & Backend"
technologies: ["Java 17","Spring Boot","MySQL","Redis","Kafka"]
status: "Open-source backend"
repo: https://github.com/Shubhank2604/Park_
order: 3
featuredOrder: 3
published: true
sourceRef: "main"
verifiedAt: "2026-11-03"
---

## Problem

Concurrent slot allocation, broker outages, duplicate messages, and cache drift can each corrupt a parking workflow. This project makes those consistency boundaries explicit.

## Architecture

The application is a modular Spring Boot monolith with authentication, parking-lot, ticket, billing, outbox, and infrastructure modules. MySQL owns durable state; Redis accelerates availability reads; Kafka carries events.

During entry, a compatible slot is selected under a pessimistic database write lock. The slot change, ticket, and outbox intent commit in one transaction. Redis updates happen after commit.

## Reliable event delivery

A relay publishes pending outbox records and waits for broker acknowledgement. Transient failures receive bounded exponential backoff. Exhausted retries retain their error in a dead-lettered MySQL row.

Delivery is at least once. Billing therefore handles exit events idempotently, with a unique invoice-per-ticket constraint preventing duplicate invoices.

## Cache versus source of truth

Redis never allocates a slot. A stale cache may make an availability read inaccurate, but it cannot grant a second database allocation. A scheduled reconciler rebuilds the free-slot sets and counters from authoritative MySQL state.

## Verification

The repository's focused suite exercises locked allocation, outbox serialization, broker acknowledgement, retries, dead-letter transitions, duplicate billing, and cache reconciliation. The documented command is:

```bash
mvn verify
```

## Remaining operational work

Real-service Testcontainers coverage, concurrent failure-injection load tests, operational metrics, and controlled dead-letter replay remain future work. Hibernate-managed schema updates should become versioned migrations before production deployment.

These are implemented consistency mechanisms with documented operational gaps, not a claim of production-scale validation.
