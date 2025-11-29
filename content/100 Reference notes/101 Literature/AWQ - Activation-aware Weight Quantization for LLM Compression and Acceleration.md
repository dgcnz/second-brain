---
authors:
  - "[[Ji Lin]]"
  - "[[Jiaming Tang]]"
  - "[[Haotian Tang]]"
  - "[[Shang Yang]]"
  - "[[Wei-Ming Chen]]"
  - "[[Wei-Chen Wang]]"
  - "[[Guangxuan Xiao]]"
  - "[[Xingyu Dang]]"
  - "[[Chuang Gan]]"
  - "[[Song Han]]"
year: 2023
tags:
  - paper
  - efficient_dl
  - quantization
url: https://arxiv.org/abs/2306.00978
share: true
---
> [!tldr] Abstract
> Large language models (LLMs) have fundamentally transformed the capabilities of numerous applications, from natural language processing to more intricate domain-specific tasks in robotics and autonomous driving. Moreover, the importance of on-device LLMs has grown significantly in the recent years. Running LLMs on edge devices not only promises reduced latency and improved user experience but also aligns with the increasing need for user privacy, as data processing can occur locally. However, the astronomical model sizes of modern LLMs and constraints of the edge devices, primarily in terms of memory size and bandwidth, pose significant deployment challenges. In this paper, we propose Activation-aware Weight Quantization (AWQ), a hardware-friendly approach for LLM low-bit weight-only quantization. Our method is based on the observation that weights are not equally important: protecting only 1% of salient weights can greatly reduce quantization error. We then propose to search for the optimal per-channel scaling that protects the salient weights by observing the activation, not weights. AWQ does not rely on any backpropagation or reconstruction, so it can well preserve LLMs' generalization ability on different domains and modalities, without overfitting to the calibration set. AWQ outperforms existing work on various language modeling and domain-specific benchmarks (coding and math). Thanks to better generalization, it achieves excellent quantization performance for instruction-tuned LMs and, for the first time, multi-modal LMs. Alongside AWQ, we implement TinyChat, an efficient and flexible inference framework tailored for on-device LLM/VLMs, offering more than 3x speedup over the Huggingface FP16 implementation on both desktop and mobile GPUs. It also democratizes the deployment of the 70B Llama-2 model on mobile GPUs.