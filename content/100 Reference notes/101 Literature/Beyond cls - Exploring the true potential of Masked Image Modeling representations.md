---
authors:
  - "[[Marcin Przewięźlikowski]]"
  - "[[Randall Balestriero]]"
  - "[[Wojciech Jasiński]]"
  - "[[Marek Śmieja]]"
  - "[[Bartosz Zieliński]]"
year: 2024
tags:
  - paper
  - dl_theory
  - vit
  - transformers
url: https://arxiv.org/abs/2412.03215
share: true
---



> [!tldr] Abstract
> Masked Image Modeling (MIM) has emerged as a popular method for Self-Supervised Learning (SSL) of visual representations. However, for high-level perception tasks, MIM-pretrained models offer lower out-of-the-box representation quality than the Joint-Embedding Architectures (JEA) - another prominent SSL paradigm. To understand this performance gap, we analyze the information flow in Vision Transformers (ViT) learned by both approaches. We reveal that whereas JEAs construct their representation on a selected set of relevant image fragments, MIM models aggregate nearly whole image content. Moreover, we demonstrate that MIM-trained ViTs retain valuable information within their patch tokens, which is not effectively captured by the global [cls] token representations. Therefore, selective aggregation of relevant patch tokens, without any fine-tuning, results in consistently higher-quality of MIM representations. To our knowledge, we are the first to highlight the lack of effective representation aggregation as an emergent issue of MIM and propose directions to address it, contributing to future advances in Self-Supervised Learning.

## Notes


> “An alternative strategy is to summarize the image representation as the average value of patch tokens, i.e. PN i=1 zL,i N , sometimes even removing the [cls] token from the model [2, 33]. However, this typically leads to representations of worse quality [24]” (Przewięźlikowski et al., 2024, p. 3)

That's not true, [24]([[An image is worth 16x16 words - Transformers for image recognition at scale]]) says that that pooling performs worse with the same lr as [cls], but if you change the learning rate they are both equivalent.


Summary:
- “The patch tokens of MAE assign more attention to themselves.” (Przewięźlikowski et al., 2024, p. 6)
- “Patch tokens of MAE attend to patches more selectively than those of JEA” (Przewięźlikowski et al., 2024, p. 6)
- “The [cls] token of MAE attends primarily to itself.” (Przewięźlikowski et al., 2024, p. 5)
- “The [cls] token of MAE attends to the patches too uniformly to select only the relevant ones.” (Przewięźlikowski et al., 2024, p. 5)
- Paper proposes a small network that aggregates patch representations and gives SOTA to MAE in Image Classification

