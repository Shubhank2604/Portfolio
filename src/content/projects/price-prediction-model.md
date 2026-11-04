---
title: "Bengaluru House Price Prediction"
summary: "A housing-regression notebook with locality encoding, outlier analysis, and model comparison."
category: "Other / Experiments"
technologies: ["Python","Pandas","NumPy","scikit-learn"]
status: "Notebook experiment"
repo: https://github.com/Shubhank2604/PricePredictionModel
order: 10
published: true
sourceRef: "master"
verifiedAt: "2026-11-03"
---

## Experiment

A regression model estimates Bengaluru home prices from locality, square footage, bathrooms, and bedroom count. The source includes cleaning, exploratory plots, model comparison, and exported model/column artifacts.

## Data decisions

The notebook normalizes square-footage ranges, groups infrequent localities, and removes selected price-per-square-foot and bedroom-count outliers. Locality is one-hot encoded.

Although the original README mentions balcony and availability, the implemented model drops those columns. The portfolio follows the notebook rather than repeating the broader input description.

## Models and limitations

Linear regression is evaluated with a train/test split and shuffle-split cross-validation. Grid search also explores Lasso and decision trees.

Preprocessing happens before splitting, and some estimator parameters use older scikit-learn APIs. Treat this as a learning notebook requiring a fresh reproducibility pass, not a current property valuation service.

[Source notebook](https://github.com/Shubhank2604/PricePredictionModel/blob/master/bengaluru_home_prices_final.ipynb)
