---
title: "FinSight AI"
summary: "Financial research with hybrid retrieval, deterministic calculations, and evidence-checked OpenAI responses."
category: "AI & ML"
technologies: ["Python","Qdrant","BM25 / RRF","OpenAI","MiniLM"]
status: "Open-source application"
repo: https://github.com/Shubhank2604/FinSight-AI
order: 2
featuredOrder: 2
published: true
sourceRef: "master"
verifiedAt: "2026-11-03"
---

## Problem

A fluent financial answer can still cite the wrong company, mix reporting years, or compute a ratio from incompatible values. FinSight separates evidence retrieval, calculation, generation, and verification so each failure can be inspected.

## Architecture

Page-aware document extraction feeds a persistent local Qdrant index and a BM25 index. CPU-based MiniLM embeddings provide dense retrieval; Reciprocal Rank Fusion and deterministic financial reranking select the final context.

A rule-based router chooses document research, educational responses, or typed financial tools. Structured OpenAI generation handles supported explanations, and the mandatory verifier checks evidence before results are displayed.

## Evidence and calculation boundaries

Verified financial facts bind company, metric, year, currency, and normalized value. Deterministic tools calculate EMI, portfolio projections, ratios, margins, and metric-specific year-over-year growth.

Zero denominators, incompatible reporting periods, conflicting facts, and incomplete inputs lead to clarification or rejection. Calculation answers can use tools directly without an OpenAI call. Confidence diagnostics are binary gates, not calibrated probabilities.

## Reliability decisions

- Embedding identity includes model revision and ingestion version, preventing incompatible indexes from being mixed.
- Long input chunks use complete token windows rather than silently losing their tails.
- An index journal supports interrupted-operation recovery, while Qdrant remains authoritative.
- The app exposes document scope, citations, calculation inputs, and assumptions.
- Independent evaluation paths score retrieval, citations, routing, and application outcomes.

## Evaluation context

The supported default branch now uses OpenAI and local MiniLM embeddings. Older benchmark artifacts describe their own recorded source revisions and must not be treated as current application scores.

My [earlier retrieval note](/writing/building-retrieval-systems-that-know-their-limits/) preserves an August 2026 experiment in which BM25 outperformed the hash-embedding hybrid baseline.

## Limitations

Verified output covers a defined set of canonical financial facts, source excerpts, and deterministic tool results. It does not establish arbitrary narrative entailment or accuracy on every PDF layout. Web and vision remain experimental. Queries are independent; displayed history is not conversation memory.

[Architecture and recovery contracts](https://github.com/Shubhank2604/FinSight-AI/blob/master/docs/architecture.md)
