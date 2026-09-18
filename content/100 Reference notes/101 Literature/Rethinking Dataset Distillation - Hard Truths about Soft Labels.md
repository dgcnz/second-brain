---
authors:
  - "[[Priyam Dey]]"
  - "[[Aditya Sahdev]]"
  - "[[Sunny Bhati]]"
  - "[[Konda Reddy Mopuri]]"
  - "[[Venkatesh Babu Radhakrishnan]]"
year: 
date: 
tags:
  - paper
url: https://openaccess.thecvf.com/content/CVPR2026/html/Dey_Rethinking_Dataset_Distillation_Hard_Truths_about_Soft_Labels_CVPR_2026_paper.html
draft: false
---


> [!tldr] Abstract
> Despite the perceived success of large-scale dataset distillation (DD) methods, recent evidence [20] finds that simple random image baselines perform on-par with state-of-theart DD methods like SRe2L [28] due to the use of soft labels during downstream model training. This is in contrast with the findings in coreset literature, where high-quality coresets consistently outperform random subsets in the hardlabel (HL) setting. To understand this discrepancy, we perform a detailed scalability analysis to examine the role of data quality under different label regimes, ranging from abundant soft labels (termed as SL+KD regime) to fixed soft labels (SL) and hard labels (HL). Our analysis reveals that high-quality coresets fail to convincingly outperform the random baseline in both SL and SL+KD regimes. In the SL+KD setting, performance further approaches nearoptimal levels relative to the full dataset, regardless of subset size or quality, for a given compute budget. This performance saturation calls into question the widespread practice of using soft labels for model evaluation, where unlike the HL setting, subset quality has negligible influence. A subsequent systematic evaluation of five large-scale and four small-scale DD methods in the HL setting reveals that only RDED [25] reliably outperforms random baselines on ImageNet-1K, but can still lag behind strong coreset methods due to its over-reliance on easy sample patches. Based on this, we introduce CAD-Prune, a compute-aware pruning metric that efficiently identifies samples of optimal difficulty for a given compute budget, and use it to develop CA2D, a compute-aligned DD method, outperforming current DD methods on ImageNet-1K at various IPC settings. Together, our findings uncover many insights into current DD research and establish useful tools to advance dataefficient learning for both coresets and DD.



## Notes

[Zotero Link](zotero://select/library/items/DGZ7RRWW)
