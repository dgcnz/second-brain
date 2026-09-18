---
authors:
  - "[[Mary Phuong]]"
  - "[[Christoph H Lampert]]"
year: 
date: 
tags:
  - paper
url: https://cvml.ista.ac.at/papers/phuong-icml2019.pdf
draft: false
---


> [!tldr] Abstract
> Knowledge distillation, i.e. one classiﬁer being trained on the outputs of another classiﬁer, is an empirically very successful technique for knowledge transfer between classiﬁers. It has even been observed that classiﬁers learn much faster and more reliably if trained with the outputs of another classiﬁer as soft labels, instead of from ground truth data. So far, however, there is no satisfactory theoretical explanation of this phenomenon. In this work, we provide the ﬁrst insights into the working mechanisms of distillation by studying the special case of linear and deep linear classiﬁers. Speciﬁcally, we prove a generalization bound that establishes fast convergence of the expected risk of a distillation-trained linear classiﬁer. From the bound and its proof we extract three key factors that determine the success of distillation: data geometry – geometric properties of the data distribution, in particular class separation, has an immediate inﬂuence on the convergence speed of the risk; optimization bias – gradient descent optimization ﬁnds a very favorable minimum of the distillation objective; and strong monotonicity – the expected risk of the student classiﬁer always decreases when the size of the training set grows.



## Notes

[Zotero Link](zotero://select/library/items/XCCP2H3G)
