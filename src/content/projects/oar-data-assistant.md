---
title: "OAR Data Assistant"
summary: "A local RAG prototype for discovering institutional data definitions through natural-language queries."
category: "AI & ML"
technologies: ["LangChain","ChromaDB","Ollama","Streamlit"]
status: "Prototype"
repo: https://github.com/Shubhank2604/chatbot
order: 7
published: true
sourceRef: "master"
verifiedAt: "2026-11-03"
---

## Problem

Users may know an institutional question without knowing the field name or dictionary entry that answers it. This assistant maps natural language to structured data definitions.

## Architecture

CSV rows become LangChain documents. Local Ollama embeddings are stored in Chroma. Intent detection, reformulation, decomposition, MMR retrieval, and optional reranking shape the context passed to a local Llama model.

The portfolio describes the architecture only; it does not reproduce institutional source data, operational identifiers, or private records.

## Limitations

The checked-in source dictionary has sparse definitions, examples, and aliases. Answer quality therefore depends on enriching the source. Re-ingestion can duplicate records without resetting the index, and reranking is disabled by default for demo reliability.

This is a prototype, not evidence of a deployed institutional assistant.
