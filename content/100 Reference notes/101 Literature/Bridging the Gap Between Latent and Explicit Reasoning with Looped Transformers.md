---
authors:
  - "[[Ying Fan]]"
  - "[[Anej Svete]]"
  - "[[Kangwook Lee]]"
year: 2026
date: 2026-06-30
tags:
  - paper
url: https://arxiv.org/abs/2606.31779
draft: false
---


> [!tldr] Abstract
> Language models typically reason via explicit chain-of-thought (CoT), generating intermediate steps token-by-token. Latent CoT offers an alternative: it performs multi-step reasoning in the model's hidden states, replacing decoded tokens with continuous representations for greater efficiency. However, existing latent CoT methods underperform explicit CoT beyond 1B parameters, and the gap widens with scale. Looped, or recurrent-depth, Transformers, which reuse their weights to increase computation depth without adding parameters, are a natural fit for latent reasoning. We therefore ask whether looped Transformers can bridge this gap. We answer affirmatively with a simple recipe: a looped padded Transformer that processes K latent blocks in parallel for R iterations, with a cross-entropy loss on each latent position's gold CoT-step token, similar to explicit CoT supervision. We instantiate it as LOTUS (Looped Transformers with parallel supervision on latents). LOTUS is, to our knowledge, the first latent-CoT method to bridge the gap to explicit CoT at the 3B scale, while cutting thought-phase latency by 2.5x-6.9x from compact math expressions to natural language. Projecting LOTUS's post-loop latents through the base LM head recovers the gold reasoning steps and even surfaces alternative valid intermediate steps, evidence that its latent space is interpretable and CoT-aligned. Ablations confirm that both the looped backbone and the parallel supervision on gold CoT tokens are essential. Code is available at https://github.com/yingfan-bot/lotus.



## Notes

[Zotero Link](zotero://select/library/items/FZLF3NUD)
