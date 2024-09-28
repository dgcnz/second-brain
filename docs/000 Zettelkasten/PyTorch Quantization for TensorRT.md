---
tags:
  - quantization
  - efficient_dl
share: true
---

There seems to be quite a few possible ways to do this:
- [[PyTorch Eager Mode Quantization TensorRT Acceleration|PyTorch Eager Mode Quantization TensorRT Acceleration]] 
	- 1. torchao quantization 2. ONNX conversion 3. Graph Surgery (changing some ops in the onnx graph) 4.. tensorrt conversion
	- Seems very cumbersome
- 