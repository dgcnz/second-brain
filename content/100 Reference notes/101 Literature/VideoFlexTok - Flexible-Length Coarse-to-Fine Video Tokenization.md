---
authors:
  - "[[Andrei Atanov]]"
  - "[[Jesse Allardice]]"
  - "[[Roman Bachmann]]"
  - "[[Oğuzhan Fatih Kar]]"
  - "[[R Devon Hjelm]]"
  - "[[David Griffiths]]"
  - "[[Peter Fu]]"
  - "[[Afshin Dehghan]]"
  - "[[Amir Zamir]]"
year: 2026
date: 2026-04-14
tags:
  - paper
url: https://arxiv.org/abs/2604.12887
draft: false
---


> [!tldr] Abstract
> Visual tokenizers map high-dimensional raw pixels into a compressed representation for downstream modeling. Beyond compression, tokenizers dictate what information is preserved and how it is organized. A de facto standard approach to video tokenization is to represent a video as a spatiotemporal 3D grid of tokens, each capturing the corresponding local information in the original signal. This requires the downstream model that consumes the tokens, e.g., a text-to-video model, to learn to predict all low-level details "pixel-by-pixel" irrespective of the video's inherent complexity, leading to high learning complexity. We present VideoFlexTok, which represents videos with a variable-length sequence of tokens structured in a coarse-to-fine manner -- where the first tokens (emergently) capture abstract information, such as semantics and motion, and later tokens add fine-grained details. The generative flow decoder enables realistic video reconstructions from any token count. This representation structure allows adapting the token count according to downstream needs and encoding videos longer than the baselines with the same budget. We evaluate VideoFlexTok on class- and text-to-video generative tasks and show that it leads to more efficient training compared to 3D grid tokens, e.g., achieving comparable generation quality (gFVD and ViCLIP Score) with a 5x smaller model (1.1B vs 5.2B). Finally, we demonstrate how VideoFlexTok can enable long video generation without prohibitive computational cost by training a text-to-video model on 10-second 81-frame videos with only 672 tokens, 8x fewer than a comparable 3D grid tokenizer.



## Notes

[Zotero Link](zotero://select/library/items/77UGH727)
