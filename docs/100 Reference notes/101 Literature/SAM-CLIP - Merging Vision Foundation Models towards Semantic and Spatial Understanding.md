---
authors:
  - "[[Haoxiang Wang|Haoxiang Wang]]"
  - "[[Fartash Faghri|Fartash Faghri]]"
  - "[[Raviteja Vemulapalli|Raviteja Vemulapalli]]"
  - "[[Mehrdad Farajtabar|Mehrdad Farajtabar]]"
  - "[[Sachin Mehta|Sachin Mehta]]"
  - "[[Mohammad Rastegari|Mohammad Rastegari]]"
  - "[[Oncel Tuzel|Oncel Tuzel]]"
  - "[[Hadi Pouransari|Hadi Pouransari]]"
  - "[[Pavan Kumar Anasosalu Vasu|Pavan Kumar Anasosalu Vasu]]"
year: 2024
tags:
  - paper
  - efficient_dl
  - efficient_vision
url: https://arxiv.org/abs/2310.15308
share: true
---
> [!info] Abstract
> The landscape of publicly available vision foundation models (VFMs), such as CLIP and Segment Anything Model (SAM), is expanding rapidly. VFMs are endowed with distinct capabilities stemming from their pre-training objectives. For instance, CLIP excels in semantic understanding, while SAM specializes in spatial understanding for segmentation. In this work, we introduce a simple recipe to efficiently merge VFMs into a unified model that absorbs their expertise. Our method integrates techniques of multi-task learning, continual learning, and distillation. Further, it demands significantly less computational cost compared to traditional multi-task training from scratch, and it only needs a small fraction of the pre-training datasets that were initially used to train individual models. By applying our method to SAM and CLIP, we obtain SAM-CLIP: a unified model that combines the capabilities of SAM and CLIP into a single vision transformer. Compared with deploying SAM and CLIP independently, our merged model, SAM-CLIP, reduces storage and compute costs for inference, making it well-suited for edge device applications. We show that SAM-CLIP not only retains the foundational strengths of SAM and CLIP, but also introduces synergistic functionalities, notably in zero-shot semantic segmentation, where SAM-CLIP establishes new state-of-the-art results on 5 benchmarks. It outperforms previous models that are specifically designed for this task by a large margin, including +6.8% and +5.9% mean IoU improvement on Pascal-VOC and COCO-Stuff datasets, respectively.