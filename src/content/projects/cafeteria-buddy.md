---
title: "CafeteriaBuddy"
summary: "Menu-image extraction and personalized cafeteria recommendations with deterministic dietary exclusions and administrator review."
category: "AI & ML"
technologies: ["Python","Next.js","Azure OCR","SQLite","Gemini"]
status: "HackDay project, extended prototype"
repo: https://github.com/Shubhank2604/CafeteriaBuddy
order: 4
featuredOrder: 4
published: true
sourceRef: "main"
verifiedAt: "2026-11-03"
---

## Problem

Cafeteria menus arrive as images, while employees reason in terms of ingredients, preferences, restrictions, and meals. CafeteriaBuddy turns menus into reviewable structured data and explains why a dish is recommended or excluded.

Originally developed as MealWorks, it placed **3rd among 39 teams and 90+ participants at MathWorks HackDay**.

## Architecture

A Next.js app validates uploads and invokes a Python processing bridge. Azure Document Intelligence extracts layout-aware text. Parsers recover stations and dishes, and a canonical catalogue resolves recurring food names.

An administrator reviews the extracted menu before publication. Employee preferences then feed a deterministic matching layer; optional Gemini generation can polish recommendation language.

## Engineering decisions

Hard exclusions remain deterministic. The LLM cannot promote a dish excluded for an allergy or hard-avoid rule. This keeps the decision inspectable, at the cost of conservative false positives.

Provider adapters support a credential-free demo with local OCR fixtures and stub AI. This tests the orchestration path without claiming that fixtures measure general OCR capability. SQLite keeps the local product inspectable and targets a single-instance deployment.

## Regression baselines

| Evaluation | Fixture scope | Result |
| --- | --- | --- |
| Restriction rules | 36 labeled pairs | Recall 1.000; precision 0.714 |
| Menu parser | 2 layouts, 11 stations, 55 labels | Precision and recall 1.000 |

Eight ambiguous restriction cases were excluded unnecessarily. The parser result measures parsing after fixture text extraction, not Azure OCR accuracy.

## Safety and limitations

The evidence does not validate medical safety, ingredient completeness, or unseen menu layouts. Uncertain items need confirmation with the cafe. Administrator review deliberately provides a correction point rather than treating OCR output as authoritative.

[Architecture and trade-offs](https://github.com/Shubhank2604/CafeteriaBuddy/blob/main/docs/architecture.md)
