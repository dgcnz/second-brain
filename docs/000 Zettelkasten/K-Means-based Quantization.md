---
tags:
  - efficient_dl
share: true
---
Perform clustering on weights, and replace weights with cluster `int` index matrix (to which cluster each weight entry belongs to) and a list of `float` centroids.

Storing integers consumes less memory while you can keep fully precision on the float centroids (although you lose precision because it does not necessarily correspond to an actual value in the previous weight matrix).

Resources:
- https://scikit-learn.org/stable/auto_examples/cluster/plot_color_quantization.html
- https://hanlab.mit.edu/courses/2023-fall-65940

![[Pasted image 20240613132833.png|Pasted image 20240613132833.png]]Source: https://www.dropbox.com/scl/fi/eos92o2fgys6gk0gizogl/lec05.pdf?rlkey=2hohvi8jcvjw3f8m8vugfa2mz&e=2&dl=0