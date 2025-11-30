---
authors:
- '[[Hangbo Bao]]'
- '[[Li Dong]]'
- '[[Songhao Piao]]'
- '[[Furu Wei]]'
year: 2022
tags:
- paper
- vit
- computer_vision
- ssl
url: http://arxiv.org/abs/2106.08254
date: '2021-06-15'
---

> [!tldr] Abstract
> We introduce a self-supervised vision representation model BEIT, which stands for Bidirectional Encoder representation from Image Transformers. Following BERT [DCLT19] developed in the natural language processing area, we propose a masked image modeling task to pretrain vision Transformers. Speciﬁcally, each image has two views in our pre-training, i.e., image patches (such as 16×16 pixels), and visual tokens (i.e., discrete tokens). We ﬁrst “tokenize” the original image into visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEIT, we directly ﬁne-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder. Experimental results on image classiﬁcation and semantic segmentation show that our model achieves competitive results with previous pre-training methods.



## Notes

[Zotero Link](zotero://select/library/items/RJPJ5QKW)


