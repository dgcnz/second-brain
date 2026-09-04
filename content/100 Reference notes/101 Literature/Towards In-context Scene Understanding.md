---
authors:
- "[[Ivana Bala\u017Eevi\u0107]]"
- '[[David Steiner]]'
- '[[Nikhil Parthasarathy]]'
- "[[Relja Arandjelovi\u0107]]"
- "[[Olivier J. H\xE9naff]]"
year: 2023
tags:
- paper
url: http://arxiv.org/abs/2306.01667
date: '2023-06-02'
draft: true
---

> [!tldr] Abstract
> In-context learning—the ability to configure a model’s behavior with different prompts—has revolutionized the field of natural language processing, alleviating the need for task-specific models and paving the way for generalist models capable of assisting with any query. Computer vision, in contrast, has largely stayed in the former regime: specialized decoders and finetuning protocols are generally required to perform dense tasks such as semantic segmentation and depth estimation. In this work we explore a simple mechanism for in-context learning of such scene understanding tasks: nearest neighbor retrieval from a prompt of annotated features. We propose a new pretraining protocol—leveraging attention within and across images—which yields representations particularly useful in this regime. The resulting Hummingbird model, suitably prompted, performs various scene understanding tasks without modification while approaching the performance of specialists that have been finetuned for each task. Moreover, Hummingbird can be configured to perform new tasks much more efficiently than finetuned models, raising the possibility of scene understanding in the interactive assistant regime.



## Notes

[Zotero Link](zotero://select/library/items/MSS5NSDA)




> attention across images by updating the spatial representation of each image with features retrieved from a memory bank
> 
> 



> spatial attention pooling mechanism
> 
> 

