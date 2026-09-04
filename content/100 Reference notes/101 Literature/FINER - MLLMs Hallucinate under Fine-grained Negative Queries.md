---
authors:
  - "[[Rui Xiao]]"
  - "[[Sanghwan Kim]]"
  - "[[Yongqin Xian]]"
  - "[[Zeynep Akata]]"
  - "[[Stephan Alaniz]]"
year: 2026
date: 2026-03-18
tags:
  - paper
url: https://arxiv.org/abs/2603.17662
draft: false
---


> [!tldr] Abstract
> Multimodal large language models (MLLMs) struggle with hallucinations, particularly with fine-grained queries, a challenge underrepresented by existing benchmarks that focus on coarse image-related questions. We introduce FIne-grained NEgative queRies (FINER), alongside two benchmarks: FINER-CompreCap and FINER-DOCCI. Using FINER, we analyze hallucinations across four settings: multi-object, multi-attribute, multi-relation, and ``what'' questions. Our benchmarks reveal that MLLMs hallucinate when fine-grained mismatches co-occur with genuinely present elements in the image. To address this, we propose FINER-Tuning, leveraging Direct Preference Optimization (DPO) on FINER-inspired data. Finetuning four frontier MLLMs with FINER-Tuning yields up to 24.2\% gains (InternVL3.5-14B) on hallucinations from our benchmarks, while simultaneously improving performance on eight existing hallucination suites, and enhancing general multimodal capabilities across six benchmarks. Code, benchmark, and models are available at \href{https://explainableml.github.io/finer-project/}{https://explainableml.github.io/finer-project/}.



## Notes

[Zotero Link](zotero://select/library/items/FEAYMVWM)
