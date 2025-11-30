---
authors:
- '[[Daniel Cores]]'
- '[[Michael Dorkenwald]]'
- '[[Manuel Mucientes]]'
- '[[Cees G. M. Snoek]]'
- '[[Yuki M. Asano]]'
year: 2025
tags:
- paper
- llm
- video
- temporal
url: http://arxiv.org/abs/2410.07752
date: '2024-10-10'
---

> [!tldr] Abstract
> Large language models have demonstrated impressive performance when integrated with vision models even enabling video understanding. However, evaluating video models presents its own unique challenges, for which several benchmarks have been proposed. In this paper, we show that the currently most used video-language benchmarks can be solved without requiring much temporal reasoning. We identified three main issues in existing datasets: (i) static information from single frames is often sufficient to solve the tasks (ii) the text of the questions and candidate answers is overly informative, allowing models to answer correctly without relying on any visual input (iii) world knowledge alone can answer many of the questions, making the benchmarks a test of knowledge replication rather than video reasoning. In addition, we found that open-ended questionanswering benchmarks for video understanding suffer from similar issues while the automatic evaluation process with LLMs is unreliable, making it an unsuitable alternative. As a solution, we propose TVBench, a novel open-source video multiple-choice question-answering benchmark, and demonstrate through extensive evaluations that it requires a high level of temporal understanding. Surprisingly, we find that most recent state-of-the-art video-language models perform similarly to random performance on TVBench, with only a few models such as Qwen2-VL, and Tarsier clearly surpassing this baseline.



## Notes

[Zotero Link](zotero://select/library/items/K22SRJKW)


