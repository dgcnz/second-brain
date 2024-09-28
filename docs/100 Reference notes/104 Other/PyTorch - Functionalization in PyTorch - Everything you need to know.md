---
authors:
  - "[[Brian Hirsh|Brian Hirsh]]"
year: 2023
tags:
  - documentation
url: https://dev-discuss.pytorch.org/t/functionalization-in-pytorch-everything-you-wanted-to-know/965
share: true
---
Given a program/function of PyTorch operators, functionalization will return a new function, that:
1. Has the same semantics as the old function
2. Has no mutations in it

Exposed in [functorch API](https://pytorch.org/functorch/0.2.0/generated/functorch.experimental.functionalize.html?highlight=functionalize#functorch.experimental.functionalize).

Functionalization operates at the level of our ATen API.

Why?
- Compilers don't like mutations: Graph partitioning is harder if nodes have side effects, etc.

Notes:
- [[PyTorch Functionalization|PyTorch Functionalization]]