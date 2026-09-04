---
tags:
  - cnn
  - theory
date: 2024-01-01
---

- [[How do vision transformers work?]] states that the key advantage of Self Attention over Convolutions is not the long range dependencies (global attention) but rather its data specificity (aka input dependency)
- This is related to [[Mamba - Linear-Time Sequence Modeling with Selective State Spaces]]'s insight :
	- "We identify a key limitation of prior models: the ability to efficiently select data in an input-dependent manner (i.e. focus on or ignore particular inputs)."
	

There **most likely** is work on input-dependent convolutions:
- [ ] [[CKConv - Continuous Kernel Convolution For Sequential Data]] is probably related, but haven't read it in full.  Check this.
- [ ] Review literature on input-dependent convolutions