---
authors:
  - "[[Michael Linghzhi Li|Michael Linghzhi Li]]"
  - "[[Meng Dong|Meng Dong]]"
  - "[[Jiawei Zhou|Jiawei Zhou]]"
  - "[[Alexander M. Rush|Alexander M. Rush]]"
year: 2019
tags:
  - gcn
  - graphs
  - gnn
url: https://arxiv.org/abs/1911.05256
share: true
---
> [!info] Abstract
> Graph neural networks (GNNs) are a powerful tool to learn representations on graphs by iteratively aggregating features from node neighbourhoods. Many variant models have been proposed, but there is limited understanding on both how to compare different architectures and how to construct GNNs systematically. Here, we propose a hierarchy of GNNs based on their aggregation regions. We derive theoretical results about the discriminative power and feature representation capabilities of each class. Then, we show how this framework can be utilized to systematically construct arbitrarily powerful GNNs. As an example, we construct a simple architecture that exceeds the expressiveness of the Weisfeiler-Lehman graph isomorphism test. We empirically validate our theory on both synthetic and real-world benchmarks, and demonstrate our example's theoretical power translates to strong results on node classification, graph classification, and graph regression tasks.

Interesting insight:
- “Using this hierarchy, we can derive theoretical results which provide insight into GNNs. For example, we show that no matter how many layers are added, networks which only aggregate over immediate neighbors cannot learn the number of triangles in a node’s neighbourhood” (Li et al., 2019, p. 1) 

HOWEVER:
- you can bypass this by encoding geometric information like position and orientation, see [[Fast, Expressive SE(n) Equivariant Networks through Weight-Sharing in Position-Orientation Space|Fast, Expressive SE(n) Equivariant Networks through Weight-Sharing in Position-Orientation Space]] slides

[Michael Lingzhi Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+M+L), [Meng Dong](https://arxiv.org/search/cs?searchtype=author&query=Dong,+M), [Jiawei Zhou](https://arxiv.org/search/cs?searchtype=author&query=Zhou,+J), [Alexander M. Rush](https://arxiv.org/search/cs?searchtype=author&query=Rush,+A+M)