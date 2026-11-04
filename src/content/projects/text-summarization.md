---
title: "Text Summarization with Transformers"
summary: "An abstractive dialogue-summarization experiment fine-tuning PEGASUS with Hugging Face Transformers."
category: "Other / Experiments"
technologies: ["Python","PyTorch","Transformers","PEGASUS"]
status: "Notebook experiment"
repo: https://github.com/Shubhank2604/TextSummarizationUsingTranformers
order: 8
published: true
sourceRef: "main"
verifiedAt: "2026-11-03"
---

## Experiment

The notebook adapts Google's pegasus-cnn_dailymail checkpoint to dialogue summarization using the SAMSum dataset. It tokenizes dialogue inputs and reference summaries, fine-tunes with Hugging Face Trainer, and saves the model and tokenizer.

## Implementation

The training path uses a sequence-to-sequence data collator, gradient accumulation, and separate training and validation splits. Generation uses beam search; evaluation computes ROUGE on reference summaries.

## Limitations

This is a Colab-era training notebook with historical library APIs and local Drive paths. It is not a packaged inference service. I do not publish a comparative quality claim without a reproducible rerun under pinned dependencies.

[Training notebook](https://github.com/Shubhank2604/TextSummarizationUsingTranformers/blob/main/TextSummarization-FineTuningUsingTransformerModel.ipynb)
