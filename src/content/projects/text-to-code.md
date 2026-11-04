---
title: "Text-to-SQL Explorer"
summary: "A natural-language SQL prototype with statement validation, read-only SQLite execution, and bounded results."
category: "AI & ML"
technologies: ["Python","Gemini","SQLite","Streamlit"]
status: "Educational prototype"
repo: https://github.com/Shubhank2604/TextToCode
order: 6
published: true
sourceRef: "master"
verifiedAt: "2026-11-03"
---

## Problem

Model-generated SQL crosses a trust boundary. The project explores a natural-language interface to a small student database without directly trusting generated statements.

## Flow and controls

A Streamlit interface passes a question to Gemini. Before execution, the application allows exactly one SELECT or WITH statement, rejects state-changing keywords, opens SQLite read-only, and caps displayed results at 100 rows.

The repository includes tests for statement validation, common write-query bypass attempts, database access, and result limits.

## Limitations

These controls support a constrained learning environment. They do not make arbitrary LLM output safe for a production database. A real deployment would need a restricted database role, resource limits, query timeouts, schema permissions, auditing, and isolated execution.
