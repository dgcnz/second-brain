---
authors:
  - "[[Yuhan Chen|Yuhan Chen]]"
  - "[[Ang Lv|Ang Lv]]"
  - "[[Jian Luan|Jian Luan]]"
  - "[[Bin Wang|Bin Wang]]"
  - "[[Wei Lu|Wei Lu]]"
year: 2024
tags:
  - paper
  - dl_theory
  - transformers
  - posembed
url: https://arxiv.org/abs/2410.21216
share: true
---
> [!tldr] Abstract
> Many positional encodings (PEs) are designed to exhibit long-term decay, based on an entrenched and long-standing inductive opinion: tokens farther away from the current position carry less relevant information. We argue that long-term decay is outdated in the era of LLMs, as LLMs are now applied to tasks demanding precise retrieval of in-context information from arbitrary positions. Firstly, we present empirical analyses on various PEs, demonstrating that models inherently learn attention with only a local-decay pattern while forming a U-shape pattern globally, contradicting the principle of long-term decay. Furthermore, we conduct a detailed analysis of rotary position encoding (RoPE, a prevalent relative positional encoding in LLMs), and found that the U-shape attention is caused by some learned components, which are also the key factor limiting RoPE's expressiveness and [this http URL](http://extrapolation.inspired/) by these insights, we propose High-frequency rotary Position Encoding (HoPE). HoPE replaces the specific components in RoPE with position-independent ones, retaining only high-frequency signals, which also breaks the principle of long-term decay in theory. HoPE achieves two major advantages: (1) Without constraints imposed by long-term decay, contradictory factors that limit spontaneous attention optimization and model extrapolation performance are removed. (2) Components representing positions and semantics are are optimized. These enhances model's context awareness and extrapolation, as validated by extensive experiments.

