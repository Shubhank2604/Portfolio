---
title: "Splitwise · Expense Sharing API"
summary: "A transactional expense-sharing API with exact-money arithmetic, concurrency-safe balances, and idempotent writes."
category: "Systems & Backend"
technologies: ["Java 17","Spring Boot","MySQL","Flyway","JWT"]
status: "Educational backend"
repo: https://github.com/Shubhank2604/Splitwise
order: 5
featuredOrder: 5
published: true
sourceRef: "master"
verifiedAt: "2026-11-03"
---

## Problem

An expense ledger must stay correct when clients retry, opposite-direction debts arrive concurrently, or a settlement fails halfway through. The API models these failures rather than relying on happy-path CRUD.

## Transaction boundaries

The JWT subject determines the authenticated actor. An expense validates amount, splits, users, and group membership before saving the expense, splits, and ledger updates in one transaction.

Money uses BigDecimal and DECIMAL(19,2). Splits must be positive, unique, and sum exactly to the expense total. A failure rolls the entire mutation back.

## Canonical debt and concurrency

Each user pair is locked in deterministic ID order. Opposing debt is netted into a single canonical direction, including during concurrent first writes.

For example, an $80 debt from Bob to Alice followed by a $50 reverse obligation leaves a single $30 debt from Bob to Alice. The ledger never requires readers to reconcile contradictory rows.

## Idempotency

Actor-scoped Idempotency-Key values and semantic fingerprints protect expense and settlement writes. An exact replay returns the existing result. Reusing the key with changed meaning returns 409 Conflict.

A settlement and its ledger change share a transaction. Missing debt and overpayment are rejected; a complete settlement removes the debt row.

## Verification and schema

Flyway owns schema changes and Hibernate validates them on startup. The current suite includes authentication boundaries, group ownership, arithmetic invariants, rollback, canonical netting, concurrent first writes, and replay tests. Earlier portfolio text describing disabled tests is obsolete.

```bash
mvn verify
```

## Scope

This is an educational implementation. It is not a custodian of real funds or a claim of operational financial certification.
