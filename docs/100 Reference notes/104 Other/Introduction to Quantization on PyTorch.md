---
authors:
  - "[[Raghuraman Krishnamoorthi|Raghuraman Krishnamoorthi]]"
  - "[[James Reed|James Reed]]"
  - "[[Min Ni|Min Ni]]"
  - "[[Chris Gottbrath|Chris Gottbrath]]"
  - "[[Seth Weidman|Seth Weidman]]"
year: 2020
tags:
  - website
  - efficient_dl
  - quantization
url: https://pytorch.org/blog/introduction-to-quantization-on-pytorch/
share: true
---

## Notes

> Quantization aware training is typically only used in CNN models when post training static or dynamic quantization doesn’t yield sufficient accuracy. This can occur with models that are highly optimized to achieve small size (such as Mobilenet).

> Currently, operator coverage is limited and may restrict the choices listed in the table below: The table below provides a guideline.

| Model Type       | Preferred scheme            | Why                                                                   |
| ---------------- | --------------------------- | --------------------------------------------------------------------- |
| LSTM/RNN         | Dynamic Quantization        | Throughput dominated by compute/memory bandwidth for weights          |
| BERT/Transformer | Dynamic Quantization        | Throughput dominated by compute/memory bandwidth for weights          |
| CNN              | Static Quantization         | Throughput limited by memory bandwidth for activations                |
| CNN              | Quantization Aware Training | In the case where accuracy can't be achieved with static quantization |

Does the Transformer row apply also for vision transformers? Since the number of tokens is quite large.

| Model        | Float Latency (ms) | Quantized Latency (ms) | Inference Performance Gain | Device              | Notes                                                                                          |
| ------------ | ------------------ | ---------------------- | -------------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| BERT         | 581                | 313                    | 1.8x                       | Xeon-D2191 (1.6GHz) | Batch size = 1, Maximum sequence length= 128, Single thread, x86-64, Dynamic quantization      |
| Resnet-50    | 214                | 103                    | 2x                         | Xeon-D2191 (1.6GHz) | Single thread, x86-64, Static quantization                                                     |
| Mobilenet-v2 | 97                 | 17                     | 5.7x                       | Samsung S9          | Static quantization, Floating point numbers are based on Caffe2 run-time and are not optimized |

So I should expect something around ~2x latency improvement with dynamic quantization