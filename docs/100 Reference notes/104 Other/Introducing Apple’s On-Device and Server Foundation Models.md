---
authors: 
year: 2024
tags:
  - efficient_dl
url: https://machinelearning.apple.com/research/introducing-apple-foundation-models
share: true
---
## ## Pre-Training

Our foundation models are trained on [Apple's AXLearn framework](https://github.com/apple/axlearn), an open-source project we released in 2023. It builds on top of JAX and XLA, and allows us to train the models with high efficiency and scalability on various training hardware and cloud platforms, including TPUs and both cloud and on-premise GPUs. We used a combination of data parallelism, tensor parallelism, sequence parallelism, and Fully Sharded Data Parallel (FSDP) to scale training along multiple dimensions such as data, model, and sequence length.


## Optimization

> In addition to ensuring our generative models are highly capable, we have used a range of innovative techniques to optimize them on-device and on our private cloud for speed and efficiency. We have applied an extensive set of optimizations for both first token and extended token inference performance.
> 
> Both the on-device and server models use grouped-query-attention. We use shared input and output vocab embedding tables to reduce memory requirements and inference cost. These shared embedding tensors are mapped without duplications. The on-device model uses a vocab size of 49K, while the server model uses a vocab size of 100K, which includes additional language and technical tokens.


> **For on-device inference, we use low-[[Bit Palettization|Bit Palettization]], a critical optimization technique that achieves the necessary memory, power, and performance requirements. To maintain model quality, we developed a new framework using LoRA adapters that incorporates a mixed 2-bit and 4-bit configuration strategy — averaging 3.5 bits-per-weight — to achieve the same accuracy as the uncompressed models.**


> Additionally, we use an interactive model latency and power analysis tool, [Talaria](https://machinelearning.apple.com/research/talaria), to better guide the bit rate selection for each operation. We also utilize activation quantization and embedding quantization, and have developed an approach to enable efficient Key-Value (KV) cache update on our neural engines.

References: [[Talaria - Interactively Optimizing Machine Learning Models for Efficient Inference|Talaria - Interactively Optimizing Machine Learning Models for Efficient Inference]]
Notes:
- Might be useful to look at [[KV Cache|KV Cache]] hardware-dependency

> With this set of optimizations, on iPhone 15 Pro we are able to reach time-to-first-token latency of about 0.6 millisecond per prompt token, and a generation rate of 30 tokens per second. Notably, this performance is attained before employing token speculation techniques, from which we see further enhancement on the token generation rate.


## Model Adaptation

> Our foundation models are fine-tuned for users’ everyday activities, and can dynamically specialize themselves on-the-fly for the task at hand. We utilize adapters, small neural network modules that can be plugged into various layers of the pre-trained model, to fine-tune our models for specific tasks. **For our models we adapt the attention matrices, the attention projection matrix, and the fully connected layers in the point-wise feedforward networks for a suitable set of the decoding layers of the transformer architecture.**

Notes:
- How do you adapt the attention matrices? Is it like a bias? `A[i][j] += lora[i][j]
- Attention projection matrix I suppose referes to the projection matrices $W_Q, W_K, W_V$

By fine-tuning only the adapter layers, the original parameters of the base pre-trained model remain unchanged, preserving the general knowledge of the model while tailoring the adapter layers to support specific tasks.

We represent the values of the adapter parameters using 16 bits, and for the ~3 billion parameter on-device model, the parameters for a rank 16 adapter typically require 10s of megabytes. The adapter models can be dynamically loaded, temporarily cached in memory, and swapped — giving our foundation model the ability to specialize itself on the fly for the task at hand while efficiently managing memory and guaranteeing the operating system's responsiveness.

To facilitate the training of the adapters, we created an efficient infrastructure that allows us to rapidly retrain, test, and deploy adapters when either the base model or the training data gets updated. The adapter parameters are initialized using the accuracy-recovery adapter introduced in the Optimization section.