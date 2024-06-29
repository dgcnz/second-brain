---
authors:
  - "[[Saurabh Garg|Saurabh Garg]]"
  - "[[Mehrdad Farajtabar|Mehrdad Farajtabar]]"
  - "[[Hadi Pouransari|Hadi Pouransari]]"
  - "[[Raviteja Vemulapalli|Raviteja Vemulapalli]]"
  - "[[Sachin Mehta|Sachin Mehta]]"
  - "[[Oncel Tuzel|Oncel Tuzel]]"
  - "[[Vaishaal Shankar|Vaishaal Shankar]]"
  - "[[Fartash Faghri|Fartash Faghri]]"
year: 2024
tags:
  - paper
  - continual_learning
  - multimodal
url: https://arxiv.org/abs/2310.16226
share: true
---
> [!tldr] Abstract
> Keeping large foundation models up to date on latest data is inherently expensive. To avoid the prohibitive costs of constantly retraining, it is imperative to continually train these models. This problem is exacerbated by the lack of any large scale continual learning benchmarks or baselines. We introduce the first set of web-scale Time-Continual (TiC) benchmarks for training vision-language models: TiC-DataComp, TiC-YFCC, and TiC-Redcaps. TiC-DataComp, our largest dataset, contains over 12.7B timestamped image-text pairs spanning 9 years (2014-2022). We first use our benchmarks to curate various dynamic evaluations to measure temporal robustness of existing models. We show OpenAI's CLIP (trained on data up to 2020) loses ≈8% zero-shot accuracy on our curated retrieval task from 2021-2022 compared with more recently trained models in OpenCLIP repository. We then study how to efficiently train models on time-continuous data. We demonstrate that a simple rehearsal-based approach that continues training from the last checkpoint and replays old data reduces compute by 2.5× when compared to the standard practice of retraining from scratch. Code is available at [this https URL](https://github.com/apple/ml-tic-clip).

