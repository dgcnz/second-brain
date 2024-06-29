---
authors:
  - "[[Xiuying Wei|Xiuying Wei]]"
  - "[[Skander Moalla|Skander Moalla]]"
  - "[[Razvan Pascanu|Razvan Pascanu]]"
  - "[[Caglar Gulcehre|Caglar Gulcehre]]"
year: 2024
tags:
  - paper
  - efficient_dl
  - llm
  - transformers
url: https://arxiv.org/abs/2406.16450v1
share: true
---
> [!tldr] Abstract
> State-of-the-art results in large language models (LLMs) often rely on scale, which becomes computationally expensive. This has sparked a research agenda to reduce these models' parameter count and computational costs without significantly impacting their performance. Our study focuses on transformer-based LLMs, specifically targeting the computationally intensive feedforward networks (FFN), which are less studied than attention blocks. We consider three candidate linear layer approximations in the FFN by combining efficient low-rank and block-diagonal matrices. In contrast to many previous works that examined these approximations, our study i) explores these structures from the training-from-scratch perspective, ii) scales up to 1.3B parameters, and iii) is conducted within recent Transformer-based LLMs rather than convolutional architectures. We first demonstrate they can lead to actual computational gains in various scenarios, including online decoding when using a pre-merge technique. Additionally, we propose a novel training regime, called \textit{self-guided training}, aimed at improving the poor training dynamics that these approximations exhibit when used from initialization. Experiments on the large RefinedWeb dataset show that our methods are both efficient and effective for training and inference. Interestingly, these structured FFNs exhibit steeper scaling curves than the original models. Further applying self-guided training to the structured matrices with 32\% FFN parameters and 2.5× speed-up enables only a 0.4 perplexity increase under the same training FLOPs. Finally, we develop the wide and structured networks surpassing the current medium-sized and large-sized Transformer in perplexity and throughput performance. Our code is available at \url{[this https URL](https://github.com/CLAIRE-Labo/StructuredFFN/tree/main)}.


## Notes
- [ ] Note to self: Read this in depth ⏫  #personal

