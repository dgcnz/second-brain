---
tags:
  - quantization
  - efficient_dl
share: true
---

There seems to be quite a few possible ways to do this:
- [[PyTorch Eager Mode Quantization TensorRT Acceleration]] , seems a bit cumbersome:
	1. torchao quantization 
	2. ONNX conversion
	3. Graph Surgery (changing some ops in the onnx graph)
	4. tensorrt conversion
- Not sure if it works, but would be ideal
	1. torch.export
	2. torchao quantization
	3. tensorrt conversion
- Less ideal would be:
	1. torchao quantization
	2. torch.export
	3. tensorrt conversion
	- I've already sort of tried this using the [vgg ptq example from tensorrt](https://github.com/pytorch/TensorRT/blob/main/examples/dynamo/vgg16_ptq.py), but torch.export complained that it couldn't translate the quantized operations