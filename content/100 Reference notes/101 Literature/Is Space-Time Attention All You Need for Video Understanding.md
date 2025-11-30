---
authors:
- '[[Gedas Bertasius]]'
- '[[Heng Wang]]'
- '[[Lorenzo Torresani]]'
year: 2021
date: 2021-06-09
tags:
- paper
- video
- ssl
- computer_vision
- vit
url: http://arxiv.org/abs/2102.05095
---

> [!tldr] Abstract
> We present a convolution-free approach to video classiﬁcation built exclusively on self-attention over space and time. Our method, named “TimeSformer,” adapts the standard Transformer architecture to video by enabling spatiotemporal feature learning directly from a sequence of framelevel patches. Our experimental study compares different self-attention schemes and suggests that “divided attention,” where temporal attention and spatial attention are separately applied within each block, leads to the best video classiﬁcation accuracy among the design choices considered. Despite the radically new design, TimeSformer achieves state-of-the-art results on several action recognition benchmarks, including the best reported accuracy on Kinetics-400 and Kinetics-600. Finally, compared to 3D convolutional networks, our model is faster to train, it can achieve dramatically higher test efﬁciency (at a small drop in accuracy), and it can also be applied to much longer video clips (over one minute long). Code and models are available at: https://github.com/ facebookresearch/TimeSformer.


## Notes

[Zotero Link](zotero://select/library/items/IHA5NMFJ)


