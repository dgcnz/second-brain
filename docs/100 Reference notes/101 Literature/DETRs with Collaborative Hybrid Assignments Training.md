---
authors:
  - "[[Zhuofan Zong|Zhuofan Zong]]"
  - "[[Guanglu Song|Guanglu Song]]"
  - "[[Yu Liu|Yu Liu]]"
year: 2023
tags:
  - paper
  - object_detection
  - computer_vision
  - transformers
url: https://arxiv.org/abs/2211.12860v5
share: true
---
> [!tldr] Abstract
> In this paper, we provide the observation that too few queries assigned as positive samples in DETR with one-to-one set matching leads to sparse supervision on the encoder's output which considerably hurt the discriminative feature learning of the encoder and vice visa for attention learning in the decoder. To alleviate this, we present a novel collaborative hybrid assignments training scheme, namely o-DETR, to learn more efficient and effective DETR-based detectors from versatile label assignment manners. This new training scheme can easily enhance the encoder's learning ability in end-to-end detectors by training the multiple parallel auxiliary heads supervised by one-to-many label assignments such as ATSS and Faster RCNN. In addition, we conduct extra customized positive queries by extracting the positive coordinates from these auxiliary heads to improve the training efficiency of positive samples in the decoder. In inference, these auxiliary heads are discarded and thus our method introduces no additional parameters and computational cost to the original detector while requiring no hand-crafted non-maximum suppression (NMS). We conduct extensive experiments to evaluate the effectiveness of the proposed approach on DETR variants, including DAB-DETR, Deformable-DETR, and DINO-Deformable-DETR. The state-of-the-art DINO-Deformable-DETR with Swin-L can be improved from 58.5% to 59.5% AP on COCO val. Surprisingly, incorporated with ViT-L backbone, we achieve 66.0% AP on COCO test-dev and 67.9% AP on LVIS val, outperforming previous methods by clear margins with much fewer model sizes. Codes are available at \url{[this https URL](https://github.com/Sense-X/Co-DETR)}.

## Notes

Beats [[EVA-02 - A Visual Representation for Neon Genesis|EVA-02 - A Visual Representation for Neon Genesis]] on object detection.

Weights for CO-DINO Swin-L (64.1 box AP on COCO val): https://github.com/Sense-X/Co-DETR?tab=readme-ov-file
