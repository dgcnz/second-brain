---
authors: 
- "[[Mohammadreza Salehi]]"
- "[[Michael Dorkenwald]]"
- "[[Fida Mohammad Thoker]]"
- "[[Efstratios Gavves]]"
- "[[Cees G. M. Snoek]]"
- "[[Yuki M. Asano]]"

year:  2024
tags:
  - paper
url: http://arxiv.org/abs/2407.15447
share: false
---


> [!tldr] Abstract
> Video-based pretraining offers immense potential for learning strong visual representations on an unprecedented scale. Recently, masked video modeling methods have shown promising scalability, yet fall short in capturing higherlevel semantics due to reconstructing predefined low-level targets such as pixels. To tackle this, we present Sinkhorn-guided Masked Video Modelling (SIGMA), a novel video pretraining method that jointly learns the video model in addition to a target feature space using a projection network. However, this simple modification means that the regular L2 reconstruction loss will lead to trivial solutions as both networks are jointly optimized. As a solution, we distribute features of space-time tubes evenly across a limited number of learnable clusters. By posing this as an optimal transport problem, we enforce high entropy in the generated features across the batch, infusing semantic and temporal meaning into the feature space. The resulting cluster assignments are used as targets for a symmetric prediction task where the video model predicts cluster assignment of the projection network and vice versa. Experimental results on ten datasets across three benchmarks validate the effectiveness of SIGMA in learning more performant, temporally-aware, and robust video representations improving upon state-of-the-art methods. Our project website with code is available at: https://quva-lab.github.io/SIGMA.



## Notes

[Zotero Link](zotero://select/library/items/QRWBTSWX)




> However, em-ploying a commonly used L2 reconstruction lossnaïvely is ineffective due to the joint optimizationof both networks leading to a trivial solution asboth networks collapse to the same output irre-spective of the input
> 
> 



> deep features of space-time tubes areregularised by optimal transport uniformly acrossclusters
> 
> 



> high-entropy regularization constraint
> 
> 



> enforces
> 
> 



> similar space-time tube features to be assigned to the same centroid,
> 
> 



> Recent research, includingJEPA [4], has proposed the novel approach of mask feature prediction within the latentspace, demonstrating improved performance on various image benchmarks, at the expense of instability challenges.
> 
> 
> What is the difference between JEPA and iBOT?




> unmasked tubes
> 
> 



> positional information of the masked patches
> 
> 



> we constrain the feature space to be partitioned intoa limited number of clusters
> 
> 
> This reminds me about the epsilon ball covering from yi MA's work




> This can be interpreted as a bottleneck with enforced highentropy
> 
> 
> I should ask about this to mo




> An equipartition constraint is introduced on \protect \mathbf {Q} to enforce that all prototypes are equally used, mitigating the trivial solution of all data points collapsing ontoa single prototype
> 
> 



> assignment can be formulated as an entropy-regularised optimal transport problem
> 
> 

