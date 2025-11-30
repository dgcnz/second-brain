---
authors:
- '[[Artidoro Pagnoni]]'
- '[[Ram Pasunuru]]'
- '[[Pedro Rodriguez]]'
- '[[John Nguyen]]'
- '[[Benjamin Muller]]'
- '[[Margaret Li]]'
- '[[Chunting Zhou]]'
- '[[Lili Yu]]'
- '[[Jason Weston]]'
- '[[Luke Zettlemoyer]]'
- '[[Gargi Ghosh]]'
- '[[Mike Lewis]]'
- '[[Ari Holtzman]]'
- '[[Srinivasan Iyer]]'
year: 2024
tags:
- paper
- llm
- nlp
url: http://arxiv.org/abs/2412.09871
date: '2024-12-13'
---

> [!tldr] Abstract
> We introduce the Byte Latent Transformer (BLT), a new byte-level LLM architecture that, for the first time, matches tokenization-based LLM performance at scale with significant improvements in inference efficiency and robustness. BLT encodes bytes into dynamically sized patches, which serve as the primary units of computation. Patches are segmented based on the entropy of the next byte, allocating more compute and model capacity where increased data complexity demands it. We present the first FLOP controlled scaling study of byte-level models up to 8B parameters and 4T training bytes. Our results demonstrate the feasibility of scaling models trained on raw bytes without a fixed vocabulary. Both training and inference efficiency improve due to dynamically selecting long patches when data is predictable, along with qualitative improvements on reasoning and long tail generalization. Overall, for fixed inference costs, BLT shows significantly better scaling than tokenization-based models, by simultaneously growing both patch and model size.



## Notes

[Zotero Link](zotero://select/library/items/S84P5GMK)


