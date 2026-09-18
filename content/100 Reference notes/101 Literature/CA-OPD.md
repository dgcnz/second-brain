---
authors:
  - "[[Menghao Li]]"
  - "[[Linjie Mu]]"
  - "[[Yin Wang]]"
  - "[[Haotian Hu]]"
  - "[[Yannian Gu]]"
  - "[[Lujiayi Xue]]"
  - "[[Liujian Tang]]"
  - "[[Yu Zhang]]"
  - "[[Fanyi Wang]]"
year: 2026
date: 2026-09-02
tags:
  - paper
url: https://arxiv.org/abs/2609.02401
draft: false
---


> [!tldr] Abstract
> Autoregressive vision language models unify heterogeneous perception tasks but are highly susceptible to compounding errors. On-policy distillation (OPD) bridges the training-inference mismatch by training students on their own rollouts. However, unreliable student predictions, especially early in training, can derail the trajectory and degrade the quality of teacher supervision. While recent interleaved distillation methods allow the teacher to verify and replace student tokens, they primarily rely on rigid ranking metrics rather than exact teacher confidence, and they overlook how intervention decisions can inform token-level supervision. To address this, we introduce Confidence-Aware On-Policy Distillation (CA-OPD), a framework that couples reliable rollout construction with adaptive supervision. CA-OPD utilizes teacher confidence to selectively correct unreliable student transitions, gradually transferring rollout control to the student via a strict-to-relaxed schedule. Crucially, CA-OPD aligns knowledge transfer with these intervention decisions: corrected positions receive direct cross-entropy supervision from the teacher's prediction, while retained positions benefit from the teacher's full predictive distribution. Evaluated in a multi-teacher setting for GUI grounding and optical character recognition, CA-OPD substantially improves the Qwen3.5-0.8B baseline across all six target benchmarks, including gains of $9.50$ points on ScreenSpot-Pro and $6.72$ points on OCRBench-v2 English. Controlled studies further show that the gains depend on intervention placement, progressive rollout control, and intervention-aligned supervision, rather than intervention frequency alone.



## Notes

[Zotero Link](zotero://select/library/items/BJLV6BU3)
