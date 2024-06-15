---
authors:
  - "[[John Denker|John Denker]]"
  - "[[Sara Solla|Sara Solla]]"
  - "[[Yann LeCun|Yann LeCun]]"
year: 1989
tags:
  - paper
  - efficient_vision
  - efficient_dl
  - dl_theory
url: https://proceedings.neurips.cc/paper/1989/hash/6c9882bbac1c7093bd25041881277658-Abstract.html
share: true
---
> [!info] Abstract
> We have used information-theoretic ideas to derive a class of practical and nearly optimal schemes for adapting the size of a neural network. By removing unimportant weights from a network, several improvements can be expected: better generalization, fewer training examples required, and improved speed of learning and/or classification. The basic idea is to use second-derivative information to make a tradeoff between network complexity and training set error. Experiments confirm the usefulness of the methods on a real-world application.

 > [!important] OBD Pruning Algorithm 
 > Use saliency measure based on Hessian (loss wrt parameters) to pick which parameters to prune. Finetune afterwards.
 
 
 