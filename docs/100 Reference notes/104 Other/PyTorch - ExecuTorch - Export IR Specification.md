---
authors:
  - "[[PyTorch - Functionalization in PyTorch - Everything you need to know|PyTorch - Functionalization in PyTorch - Everything you need to know]]"
year: 2024
tags:
  - paper
url: https://pytorch.org/executorch/main/ir-exir.html
share: true
---
The Exported IR is a specification that consists of the following parts:

1. A definition of computation graph model.
2. Set of operators allowed in the graph.

A dialect also provides further constraints meant for a specific purpose or stage in some compilation phase. Some dialects are:
- aten dialect
- edge dialect
- backend dialect

Executorch compilation first exports to aten, then to edge and finally to backend.


## Aten Dialect

- [[PyTorch Functionalization|PyTorch Functionalization]] is performed, removing any tensor aliases and mutations, and allowing for more flexible graph transformations to be made.