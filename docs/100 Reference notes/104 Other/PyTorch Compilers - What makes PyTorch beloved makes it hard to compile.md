---
authors:
  - "[[Peng Wu|Peng Wu]]"
year: 2022
tags:
  - presentation
url: https://chips-compilers-mlsys-22.github.io/assets/slides/PyTorch%20Compilers%20(Compiler%20&%20Chips%20Symposium%202022).pdf
share: true
---
**Multiple pytorch compilers**
- TorchScript (torch.jit.script, torch.jit.trace)
	- supports python subset
	- full graph capture = [[Ahead-of-Time (AOT) Compilation|Ahead-of-Time (AOT) Compilation]]
	- executed by TS interpreter
- nnc, nvfuser
- torch.fx
- torch.package, torch.deploy
- torch-mlir
- TorchDynamo, TorchInductor
	- TorchDynamo captures partial graphs (if strict=False), and falls-back to eager.


**What makes TorchDynamo graph capture sound and out-of-the-box?**
- Partial graph capture: Ability to skip unwanted parts of eager
- Guarded graphs: Ability to check if captured graph is valid for execution
	- Note: Basically, it inserts assertions/runtime checks to see that the partial graph is sound at runtime, if not, it jit recompiles.
- Just-in-time recapture: recapture a graph if captured graph is invalid for execution

**Dynamo workflow**
- Captures FX Graph
- Sends FX Graph to compiler hook to compile (which can be another compiler like TRT or torchscript)

![[Pasted image 20240926160205.png|800]]

Note: tbh this seems like an arbitrary separation, because torchdynamo also is meant for inference (torch.export), but this is probably because this tutorial is 2 years old


