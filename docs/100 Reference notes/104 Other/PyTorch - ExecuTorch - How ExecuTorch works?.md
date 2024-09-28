---
authors:
  - "[[PyTorch Quantization for TensorRT|PyTorch Quantization for TensorRT]]"
year: 2024
tags:
  - pytorch
  - compilers
  - efficient_dl
  - documentation
url: https://pytorch.org/executorch/main/intro-how-it-works
share: true
---
# What are the steps to run a model with ExecuTorch?

## 1. Export the model

- Capture the pytorch program as a *graph* 
## 2. Compile the exported model to an ExecuTorch program

Captured Graph -> ExecuTorch program

Possible Optimizations:
- Compressing the model (e.g., quantization) 
- Lowering subgraphs to on-device specialized hardware accelerators to improve latency.
- memory planning, i.e. to efficiently plan the location of intermediate tensors to reduce the runtime memory footprint.

## 3. Run the ExecuTorch program to a target device

- Light runtime with memory planning for fast inference :)

## Key Benefits

- Export that is robust and powerful
- Operator Standardization
- Standardization for compiler interfaces (aka delegates) and the OSS ecosystem
- First-party SDK and toolchain
- Ease of customization
- Low overhead runtime and execution
