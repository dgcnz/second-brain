---
authors:
  - "[[Song Han|Song Han]]"
year: 2023
tags:
  - lecture
url: https://www.dropbox.com/scl/fi/1mo0umu0qtq7uxap2l5m3/lec06.pdf?rlkey=bdl2mgusgajddjuvjxb0fot36&e=2&dl=0
share: true
---
Content:
1. Quantization Granularity
	1. Per tensor quantization: same quantization parameters for the entire matrix
	2. Per channel quantization: sometimes each channels have considerably different weight distributions, have different quantization parameters per channel/row
	3. Group quantization: similar idea
2. Dynamic Range Clipping
	- To quantize activations, we must keep track of activations statistics
	- Use KL divergence to measure information loss
	- Allocating dynamic range to outliers hurts representation ability (see below image)
	- ![[Pasted image 20240802170501.png|Pasted image 20240802170501.png]]
3. Rounding

Quantization Aware Training
- To minimize the loss of accuracy, especially aggressive quantization with 4 bits and lower bit width, neural network will be trained/fine-tuned with quantized weights and activations.
- **Usually, fine-tuning a pre-trained floating point model provides better accuracy than training from scratch.**