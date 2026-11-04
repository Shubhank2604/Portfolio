---
title: "Music Genre Classification & Recommendation"
summary: "Acoustic-feature experiments with dense and convolutional classifiers and prediction-space song matching."
category: "Other / Experiments"
technologies: ["Python","Librosa","Keras","MFCC"]
status: "Notebook experiment"
repo: https://github.com/Shubhank2604/MusicRecommendation-GenreClassification
order: 9
published: true
sourceRef: "main"
verifiedAt: "2026-11-03"
---

## Experiment

The notebook extracts MFCC features from segmented audio and compares dense and convolutional classifiers across ten genre labels. A later step uses prediction-vector distance to suggest related tracks.

## Implementation

Librosa loads audio at 22,050 Hz and extracts 13 MFCC coefficients. Keras experiments include dense models with regularization and a convolutional model with pooling, normalization, and dropout.

## Evaluation caveat

The code splits extracted segments rather than explicitly grouping by original song. Segments from the same track can therefore cross dataset boundaries, so a reported test accuracy could overstate generalization. Recommendation selection is a heuristic experiment, not a validated ranking system.

I retain the project as a smaller learning experiment and omit headline accuracy claims.

[Source notebook](https://github.com/Shubhank2604/MusicRecommendation-GenreClassification/blob/main/Music_Audio_Analysis_and_Recommendation.ipynb)
