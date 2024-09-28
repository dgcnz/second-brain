---
authors:
  - "[[Lei Mao|Lei Mao]]"
year: 2024
tags:
  - website
  - paper
url: https://leimao.github.io/blog/PyTorch-Eager-Mode-Quantization-TensorRT-Acceleration/
share: true
---

> [!tldr] Abstract
> The TensorRT acceleration for the quantized PyTorch model from the PyTorch eager mode quantization interface involves three steps:
> 
> 1. Perform PyTorch eager mode quantization on the floating-point PyTorch model in PyTorch and export the quantized PyTorch model to ONNX.
> 2. Fix the quantized ONNX model graph so that it can be parsed by the TensorRT parser.
> 3. Build the quantized ONNX model to a TensorRT engine, profile the performance, and verify the accuracy.> 1
> 
> The source code for this post can be found on [GitHub](https://leimao.github.io/blog/PyTorch-Eager-Mode-Quantization-TensorRT-Acceleration/#:~:text=be%20found%20on-,GitHub,-.) .


