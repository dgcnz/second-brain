---
authors:
  - "[[Atila Orhon|Atila Orhon]]"
year: 2023
tags:
  - efficient_dl
url: https://x.com/atiorh/status/1707402410870862002
share: true
---
> We compressed the diffusion model using our Mixed-[[Bit Palettization|Bit Palettization]] technique (described in [https://huggingface.co/blog/stable-diffusion-xl-coreml…](https://t.co/cuVQqHGeWA)) which yields an average of 4.04-bits (5.2GB -> 1.3GB) while maintaining higher accuracy than linear 8-bit quantization. Compressed model runs faster too

Notes
- 4 times smaller memory footprint
- Better than linear 8-bit quantization
- Faster inference time