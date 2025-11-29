---
tags:
  - efficient_dl
  - transformers
share: true
---
Seems to be similar to [[K-Means-based Quantization]].

> [...] we use **6-bit palettization**, a type of quantization that compresses model weights from a 16-bit floating-point representation to just 6 bits per parameter. The name “palettization” refers to a technique similar to the one used in computer graphics to work with a limited set of colors: the color table (or “palette”) contains a fixed number of colors, and the colors in the image are replaced with the indexes of the closest colors available in the palette. This immediately provides the benefit of drastically reducing storage size, and thus reducing download time and on-device disk use.

![[Pasted image 20240613132045.png]]
References:
- https://huggingface.co/blog/stable-diffusion-xl-coreml#what-is-mixed-bit-palettization
- https://huggingface.co/blog/fast-diffusers-coreml

Notes:
- Multiplying by this weight matrix intuitively should be slower, it would be interesting to see what is the tradeoff speed vs memory. This tweet [[Tweet - Stable Diffusion XL on iPhone with Core ML!]] suggests that it runs faster than the non-quantized alternative.