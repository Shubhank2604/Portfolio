---
title: "ContextInvariant"
summary: "Constraint-aware context construction for stateful LLM agents, with preservation contracts and auditable traces."
category: "AI & ML"
technologies: ["Python","LLM infrastructure","SQLite","Token budgeting"]
status: "Research preview"
repo: https://github.com/Shubhank2604/ContextInvariant
order: 1
featuredOrder: 1
published: true
sourceRef: "main"
verifiedAt: "2026-11-03"
---

## Problem

Long-running agents accumulate more information than can fit in a model call. Relevance alone cannot decide which facts are safe to omit: policies, numbers, dependencies, and current state can be structurally required.

ContextInvariant constructs context within a token budget while enforcing explicit preservation constraints. It was previously named ContextOS.

## Architecture

Typed context items enter an optimizer with optional preservation contracts and dependency edges. When constraint enforcement is enabled, the runtime resolves superseded states and conflicts, reserves required items, deduplicates candidates, scores utility, and allocates the remaining budget.

Type-aware compression candidates are validated before acceptance. An iterative dependency-closure check either forces missing requirements into the selection or raises explicit infeasibility. The runtime operates on copies of caller-owned state and records versioned execution traces.

## Engineering decisions

- **Constraints are opt-in.** The unconstrained v0.4 optimization path remains compatible.
- **Required context is a contract.** Exact values and required relationships do not disappear merely because a relevance score is low.
- **Budget failure is explicit.** If protected dependency closure cannot fit, the optimizer reports failure instead of silently relaxing the contract.
- **Lossy changes are checked.** A transformation that violates its preservation contract falls back safely.

## Controlled development results

The 90-case development benchmark compared frozen v0.4 with Full Phase 5 under the same 80% effective token budget.

| Measure | Frozen v0.4 | Full Phase 5 |
| --- | ---: | ---: |
| Selection constraint violations | 77.78% | 11.11% |
| Mean context reduction | 27.20% | 32.38% |
| Successful constrained executions | 90 / 90 | 80 / 90 |

That is an 85.7% relative reduction in selection violations. All 80 feasible constrained cases preserved required values; ten cases were reported as infeasible. This set co-evolved with the runtime, so these are development results, not held-out or production estimates.

## External evaluation and limitations

In 98 matched successful LongBench cases, Phase 5 used 31.58% fewer context tokens than full context. Answer-quality effects were mixed: HotpotQA regressed, while other task deltas were inconclusive or workload-dependent. These results do not establish universally better answer quality.

The positional experiment hit a ceiling across every strategy, so it provides no evidence of mitigating lost-in-the-middle behavior. The runtime does not verify model answers, prevent prompt injection, or guarantee downstream instruction following.

[Research methodology and retained evidence](https://github.com/Shubhank2604/ContextInvariant/blob/main/docs/research.md)
