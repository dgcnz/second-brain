---
authors:
  - "[[PyTorch Quantization for TensorRT|PyTorch Quantization for TensorRT]]"
year: 2024
tags:
  - documentation
url: https://pytorch.org/docs/main/quantization.html#prototype-pytorch-2-export-quantization
share: true
---
### Backend/Hardware Support

| Hardware   | Kernel Library             | Eager Mode Quantization              | FX Graph Mode Quantization | Quantization Mode Support |
| ---------- | -------------------------- | ------------------------------------ | -------------------------- | ------------------------- |
| server CPU | fbgemm/onednn              | Supported                            |                            | All Supported             |
| mobile CPU | qnnpack/xnnpack            |                                      |                            |                           |
| server GPU | TensorRT (early prototype) | Not support this it requires a graph | Supported                  | Static Quantization       |

Today, PyTorch supports the following backends for running quantized operators efficiently:

- x86 CPUs with AVX2 support or higher (without AVX2 some operations have inefficient implementations), via x86 optimized by [fbgemm](https://github.com/pytorch/FBGEMM) and [onednn](https://github.com/oneapi-src/oneDNN) (see the details at [RFC](https://github.com/pytorch/pytorch/issues/83888))
- ARM CPUs (typically found in mobile/embedded devices), via [qnnpack](https://github.com/pytorch/pytorch/tree/main/aten/src/ATen/native/quantized/cpu/qnnpack)
- (early prototype) support for NVidia GPU via [TensorRT](https://developer.nvidia.com/tensorrt) through fx2trt (to be open sourced)

Note:
- This is a bit old, as fx2trt is already available in [torch-tensorrt](https://pytorch.org/TensorRT/_modules/torch_tensorrt/fx/fx2trt.html). However, there 
