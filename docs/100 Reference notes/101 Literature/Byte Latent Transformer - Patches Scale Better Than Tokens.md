---
authors:
  - "[[Artidoro Pagnoni|Artidoro Pagnoni]]"
  - "[[Ram Pasunuru|Ram Pasunuru]]"
  - "[[Pedro Rodriguez|Pedro Rodriguez]]"
  - "[[John Nguyen|John Nguyen]]"
  - "[[Benjamin Muller|Benjamin Muller]]"
  - "[[Margaret Li|Margaret Li]]"
  - "[[Chunting Zhou|Chunting Zhou]]"
  - "[[Lili Yu|Lili Yu]]"
  - "[[Jason Weston|Jason Weston]]"
  - "[[Luke Zettlemoyer|Luke Zettlemoyer]]"
  - "[[Gargi Ghosh|Gargi Ghosh]]"
  - "[[Mike Lewis|Mike Lewis]]"
  - "[[Ari Holtzman|Ari Holtzman]]"
  - "[[Srinivasan Iyer|Srinivasan Iyer]]"
year: 2024
tags:
  - paper
  - llm
  - nlp
url: http://arxiv.org/abs/2412.09871
share: true
---


> [!tldr] Abstract
> We introduce the Byte Latent Transformer (BLT), a new byte-level LLM architecture that, for the first time, matches tokenization-based LLM performance at scale with significant improvements in inference efficiency and robustness. BLT encodes bytes into dynamically sized patches, which serve as the primary units of computation. Patches are segmented based on the entropy of the next byte, allocating more compute and model capacity where increased data complexity demands it. We present the first FLOP controlled scaling study of byte-level models up to 8B parameters and 4T training bytes. Our results demonstrate the feasibility of scaling models trained on raw bytes without a fixed vocabulary. Both training and inference efficiency improve due to dynamically selecting long patches when data is predictable, along with qualitative improvements on reasoning and long tail generalization. Overall, for fixed inference costs, BLT shows significantly better scaling than tokenization-based models, by simultaneously growing both patch and model size.



## Notes

[Zotero Link](zotero://select/library/items/S84P5GMK)


