---
tags:
  - cnn
date: 2024-01-01
---

Splits the computation into two steps: [depthwise convolution](https://paperswithcode.com/method/depthwise-convolution) applies a single convolutional filter per each input channel and [pointwise convolution](https://paperswithcode.com/method/pointwise-convolution) is used to create a linear combination of the output of the depthwise convolution.

Related ideas are often used to reduce the size/complexity of convolutional layers. It reduces expressivity of convolutions but its less parameters. For example [[Exploiting Redundancy - Separable Group Convolutional Networks on Lie Groups]]

Also used in (ConvNext) [[A ConvNet for the 2020s]]


![[Pasted image 20240409113907.png]]
