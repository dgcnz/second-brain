---
authors:
  - "[[Yongxian Wei]]"
  - "[[Zixuan Hu]]"
  - "[[Li Shen]]"
  - "[[Zhenyi Wang]]"
  - "[[Chun Yuan]]"
  - "[[Dacheng Tao]]"
year: 2025
date: 2025
tags:
  - paper
url: https://proceedings.iclr.cc/paper_files/paper/2025/hash/8c96b559340daa7bb29f56ccfbbc9c2f-Abstract-Conference.html
draft: false
---


> [!tldr] Abstract
> Vision-language models such as CLIP have demonstrated strong zero-shot performance, but their considerable size and inefficient inference limit customizable deployment for users. While knowledge distillation is a solution, it still requires the original data, which is not always available due to copyrights and privacy concerns. For many users seeking open-vocabulary customization, Data-Free Knowledge Distillation (DFKD) emerges as a promising direction. Upon rethinking DFKD, we find that existing methods fail on CLIP due to their heavy reliance on BatchNorm layers, which are unexpectedly unusable in CLIP. Based on our findings, we adopt image-text matching to achieve DFKD for CLIP, enabling customization based on arbitrary class texts. This involves (i) inversing a surrogate dataset from CLIP based on text prompts; and (ii) distilling a student model from CLIP using the surrogate dataset. Specifically, we introduce style dictionary diversification to enhance the diversity of synthetic images. To prevent uncontrollable semantics introduced by diversification, we propose a class consistency maintaining strategy to ensure the consistency of synthetic images. Based on synthetic images with various styles, we further propose meta knowledge distillation to train the student model with good generalization ability. Moreover, we introduce a simple yet effective method to enable customization based on few example images. Comprehensive experiments showcase the superiority of our approach across twelve customized tasks, achieving a 9.33% improvement compared to existing DFKD methods.



## Notes

[Zotero Link](zotero://select/library/items/C8B6K9IJ)
