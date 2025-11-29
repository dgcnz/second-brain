---
tags:
  - pytorch
  - compilers
share: true
---
Given a program/function of PyTorch operators, functionalization will return a new function, that:
1. Has the same semantics as the old function
2. Has no mutations in it

Functionalization operates at the level of our ATen API.

More info on [[PyTorch - Functionalization in PyTorch - Everything you need to know]]
