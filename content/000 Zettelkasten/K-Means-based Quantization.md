---
tags:
  - efficient_dl
draft: true
---

Perform clustering on weights, and replace weights with cluster `int` index matrix (to which cluster each weight entry belongs to) and a list of `float` centroids.

Storing integers consumes less memory while you can keep fully precision on the float centroids (although you lose precision because it does not necessarily correspond to an actual value in the previous weight matrix).

Resources:
- https://scikit-learn.org/stable/auto_examples/cluster/plot_color_quantization.html
- [[TinyML and Efficient Deep Learning Computing - Lecture 5]]
![[Pasted image 20240613132833.png]]