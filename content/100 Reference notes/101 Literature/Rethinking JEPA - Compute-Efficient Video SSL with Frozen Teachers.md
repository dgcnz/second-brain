---
authors:
- '[[Xianhang Li]]'
- '[[Chen Huang]]'
- '[[Chun-Liang Li]]'
- '[[Eran Malach]]'
- '[[Josh Susskind]]'
- '[[Vimal Thilak]]'
- '[[Etai Littwin]]'
year: 2025
tags:
- paper
- video
- ssl
url: http://arxiv.org/abs/2509.24317
date: '2025-09-29'
---

> [!tldr] Abstract
> Video Joint Embedding Predictive Architectures (V-JEPA) learn generalizable off-the-shelf video representation by predicting masked regions in latent space with an exponential moving average (EMA)-updated teacher. While EMA prevents representation collapse, it complicates scalable model selection and couples teacher and student architectures. We revisit masked-latent prediction and show that a frozen teacher suffices. Concretely, we (i) train a target encoder with a simple pixel-reconstruction objective under V-JEPA masking, then (ii) freeze it and train a student to predict the teacher's latents on masked regions. This leads to a two-stage, unregularized scheme that we refer to as SALT (Static-teacher Asymmetric Latent Training). SALT decouples optimization into pixel reconstruction (teacher) and masked latent prediction (student), increasing transparency, efficiency, and scalability while preserving the ability of representation to generalize under frozen evaluation. Empirically, our student models outperform recently proposed V-JEPA 2 encoders under frozen backbone evaluation across diverse benchmarks. They are also more compute-optimal: at matched pretraining FLOPs, our method achieves higher probing accuracy, and its scaling curves dominate V-JEPA's accuracy-FLOPs Pareto frontier. Finally, we find that student quality is remarkably robust to teacher quality: high-performing students emerge even with small, sub-optimal teachers. This points to a compute budget allocation that should overwhelmingly favor the student. These results position SALT as a simple, scalable, and compute-efficient alternative to EMA-based self-distillation for video representation learning.



## Notes

>[!NOTE] Summary
>2-phase training:
>- **Phase 1**: ViT-L Teacher is trained with pixel reconstruction loss (à la [[VideoMAE - Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training|VideoMAE]])
>- **Phase 2**: Student is trained on masked latent prediction (à la [[Revisiting Feature Prediction for Learning Visual Representations from Video|V-JEPA]]) to match frozen teacher's latents. 


![[Pasted image 20251112120024.png]]

>[!important] Key Observations
>- Student's downstream performance always exceeds teacher's performance and corresponding V-JEPA 2.
>- Teacher's metrics (performance on downstream, size, length of training) does not correlate highly with downstream student performance.
>- Student's loss correlates highly with downstream performance.
>- The best setup is allocating a modest ~40k training iterations to the teacher and maximizing training iterations for the student (80k-200k).


[Zotero Link](zotero://select/library/items/VFZDG74M)


