---
authors:
  - "[[Haochen Wang|Haochen Wang]]"
  - "[[Junsong Fan|Junsong Fan]]"
  - "[[Yuxi Wang|Yuxi Wang]]"
  - "[[Kaiyou Song|Kaiyou Song]]"
  - "[[Tong Wang|Tong Wang]]"
  - "[[Zhaoxiang Zhang|Zhaoxiang Zhang]]"
year: 2023
tags:
  - paper
  - foundation_models
  - vit
url: https://arxiv.org/abs/2309.03576
share: true
---
> [!tldr] Abstract
> As it is empirically observed that Vision Transformers (ViTs) are quite insensitive to the order of input tokens, the need for an appropriate self-supervised pretext task that enhances the location awareness of ViTs is becoming evident. To address this, we present DropPos, a novel pretext task designed to reconstruct Dropped Positions. The formulation of DropPos is simple: we first drop a large random subset of positional embeddings and then the model classifies the actual position for each non-overlapping patch among all possible positions solely based on their visual appearance. To avoid trivial solutions, we increase the difficulty of this task by keeping only a subset of patches visible. Additionally, considering there may be different patches with similar visual appearances, we propose position smoothing and attentive reconstruction strategies to relax this classification problem, since it is not necessary to reconstruct their exact positions in these cases. Empirical evaluations of DropPos show strong capabilities. DropPos outperforms supervised pre-training and achieves competitive results compared with state-of-the-art self-supervised alternatives on a wide range of downstream benchmarks. This suggests that explicitly encouraging spatial reasoning abilities, as DropPos does, indeed contributes to the improved location awareness of ViTs. The code is publicly available at [this https URL](https://github.com/Haochen-Wang409/DropPos).


# Notes

![[Pasted image 20250114202919.png|Pasted image 20250114202919.png]]

Maybe expected, but fixed position embeddings achieve better performance than learnable position embeddings.