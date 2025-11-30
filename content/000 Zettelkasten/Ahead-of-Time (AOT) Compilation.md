---
tags:
  - compilers
  - pytorch
  - optimization
draft: true
---

Generally: Compilation that occurs before the program is executed.

Specifically to ML (PyTorch): 
- When a model is AOT compiled (using `torch.jit.script`(or trace) or `torch.export`), the entire program is translated from python into an intermediate representation that is independent of it. That is, you don't need a python interpreter to run that IR.
- Note: torchscript is AOT in the sense that it requires to capture the whole graph before runtime but it performs further optimizations just-in-time.