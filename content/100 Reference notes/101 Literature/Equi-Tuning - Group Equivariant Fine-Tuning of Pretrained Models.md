---
authors:
- '[[Sourya Basu]]'
- '[[Prasanna Sattigeri]]'
- '[[Karthikeyan Natesan Ramamurthy]]'
- '[[Vijil Chenthamarakshan]]'
- '[[Kush R. Varshney]]'
- '[[Lav R. Varshney]]'
- '[[Payel Das]]'
year: 2023
date: 2023-02-04
tags:
- paper
- dl-theory
- equivariance
url: http://arxiv.org/abs/2210.06475
---

> [!tldr] Abstract
> We introduce equi-tuning, a novel ﬁne-tuning method that transforms (potentially non-equivariant) pretrained models into group equivariant models while incurring minimum L2 loss between the feature representations of the pretrained and the equivariant models. Large pretrained models can be equi-tuned for different groups to satisfy the needs of various downstream tasks. Equi-tuned models beneﬁt from both group equivariance as an inductive bias and semantic priors from pretrained models. We provide applications of equituning on three different tasks: image classiﬁcation, compositional generalization in language, and fairness in natural language generation (NLG). We also provide a novel grouptheoretic deﬁnition for fairness in NLG. The effectiveness of this deﬁnition is shown by testing it against a standard empirical method of fairness in NLG. We provide experimental results for equi-tuning using a variety of pretrained models: Alexnet, Resnet, VGG, and Densenet for image classiﬁcation; RNNs, GRUs, and LSTMs for compositional generalization; and GPT2 for fairness in NLG. We test these models on benchmark datasets across all considered tasks to show the generality and effectiveness of the proposed method.



## Notes

[Zotero Link](zotero://select/library/items/PTSR93S3)




> This method solves a simple optimization problem minimizing the distance between the features of a pretrained model and any group equivariant model
> 
> 



> Let ΓX and ΓY be the group actions of G on sets X and Y respectively
> 
> 



> Compositionality is key to excellent human understanding of languages, whereas it is hypothesized that neural networks do not posses such capabilities, leading to their extreme sample inefficiency in modeling languages
> 
> 



> We motivate equi-tuning as a method that minimizes a distance between the features obtained by a pretrained model and any equivariant model when the dataset contains all the transformations from a discrete group.
> 
> 



> Reynold’s opera-
> 
> 



> Now, assuming that ‖g‖2 = 1, we have the optimization as
> 
> 



> To solve (2), we first remove the constraint of equivariance on MG and obtain a lower bound to the solution of (2).
> 
> 



> Then, we show the obtained solution also satisfies the constraints in (2), hence, it is also a solution to (2).
> 
> 



> This is a convex problem with solution
> 
> 



> The assumption ‖g‖2 = 1 is very general and subsumes the entire class of permutation, and special linear groups such as SO(n),
> 
> 



> In contrast, for equi-tuning, we only need to ensure that the group actions are defined on the input and output layers of the pretrained model, which is a key reason for the simplicity and generality of our algorithm.
> 
> 

