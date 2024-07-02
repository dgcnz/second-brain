---
authors:
  - "[[Beilei Cui|Beilei Cui]]"
  - "[[Mobarakol Islam|Mobarakol Islam]]"
  - "[[Long Bai|Long Bai]]"
  - "[[Hongliang Ren|Hongliang Ren]]"
year: 2024
tags:
  - paper
  - efficient_dl
  - efficient_vision
  - transformers
url: https://arxiv.org/abs/2401.06013
share: true
---
> [!info] Abstract
> Purpose: Depth estimation in robotic surgery is vital in 3D reconstruction, surgical navigation and augmented reality visualization. Although the foundation model exhibits outstanding performance in many vision tasks, including depth estimation (e.g., DINOv2), recent works observed its limitations in medical and surgical domain-specific applications. This work presents a low-ranked adaptation (LoRA) of the foundation model for surgical depth estimation. Methods: We design a foundation model-based depth estimation method, referred to as Surgical-DINO, a low-rank adaptation of the DINOv2 for depth estimation in endoscopic surgery. We build LoRA layers and integrate them into DINO to adapt with surgery-specific domain knowledge instead of conventional fine-tuning. During training, we freeze the DINO image encoder, which shows excellent visual representation capacity, and only optimize the LoRA layers and depth decoder to integrate features from the surgical scene. Results: Our model is extensively validated on a MICCAI challenge dataset of SCARED, which is collected from da Vinci Xi endoscope surgery. We empirically show that Surgical-DINO significantly outperforms all the state-of-the-art models in endoscopic depth estimation tasks. The analysis with ablation studies has shown evidence of the remarkable effect of our LoRA layers and adaptation. Conclusion: Surgical-DINO shed some light on the successful adaptation of the foundation models into the surgical domain for depth estimation. There is clear evidence in the results that zero-shot prediction on pre-trained weights in computer vision datasets or naive fine-tuning is not sufficient to use the foundation model in the surgical domain directly. Code is available at [this https URL](https://github.com/BeileiCui/SurgicalDINO).

References:
- [[LoRA - Low-Rank Adaptation of Large Language Models|LoRA - Low-Rank Adaptation of Large Language Models]]

Keywords:
- [[LoRa Adapter|LoRa Adapter]]