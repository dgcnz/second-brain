---
authors:
- '[[Carl Doersch]]'
- '[[Abhinav Gupta]]'
- '[[Alexei A. Efros]]'
year: 2016
tags:
- paper
- ssl
url: https://arxiv.org/abs/1505.05192
date: '2015-05-19'
---

> [!tldr] Abstract
> This work explores the use of spatial context as a source of free and plentiful supervisory signal for training a rich visual representation. Given only a large, unlabeled image collection, we extract random pairs of patches from each image and train a convolutional neural net to predict the position of the second patch relative to the first. We argue that doing well on this task requires the model to learn to recognize objects and their parts. We demonstrate that the feature representation learned using this within-image context indeed captures visual similarity across images. For example, this representation allows us to perform unsupervised visual discovery of objects like cats, people, and even birds from the Pascal VOC 2011 detection dataset. Furthermore, we show that the learned ConvNet can be used in the R-CNN framework and provides a significant boost over a randomly-initialized ConvNet, resulting in state-of-the-art performance among algorithms which use only Pascal-provided training set annotations.

# Notes

![[Pasted image 20250113171820.png |400]]


![[Pasted image 20250113145443.png|400]]