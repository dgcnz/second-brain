---
authors:
  - "[[Fred Hohman]]"
  - "[[Mary Beth Kery]]"
  - "[[Donghao Ren]]"
  - "[[Dominik Moritz]]"
year: 2024
tags:
  - paper
  - efficient_dl
url: https://arxiv.org/abs/2310.04621
share: true
---
> [!info] Abstract
> On-device machine learning (ML) promises to improve the privacy, responsiveness, and proliferation of new, intelligent user experiences by moving ML computation onto everyday personal devices. However, today's large ML models must be drastically compressed to run efficiently on-device, a hurtle that requires deep, yet currently niche expertise. To engage the broader human-centered ML community in on-device ML experiences, we present the results from an interview study with 30 experts at Apple that specialize in producing efficient models. We compile tacit knowledge that experts have developed through practical experience with model compression across different hardware platforms. Our findings offer pragmatic considerations missing from prior work, covering the design process, trade-offs, and technical strategies that go into creating efficient models. Finally, we distill design recommendations for tooling to help ease the difficulty of this work and bring on-device ML into to more widespread practice.


## Notes

> Specific techniques on models weights help reduce size, but to get an efficient model comes from more careful design of the loss function, the system, which parts should and should not be modeled with ML.
- [ ] How does the design of a loss function affect a model's efficiency? *Note to myself to look into this in the future.*

![[Pasted image 20240629123429.png]]
> Although posttraining quantization is considered “easy” [E9] as far as ML compression techniques go, practitioners emphasized that it still often takes complex code to implement and there are many algorithm variations [[A survey of quantization methods for efficient neural network inference]] to experiment with [T5]. For models that need high accuracy, post-training quantization may not be enough to hit budget without unacceptable accuracy degradation [E9, E4, E13, E5].

- Okay, so it's important to try a bunch of quantization techniques. Got it.

> **“If you want to go to lower bit quantization, such as 4 or below, it’s almost impossible to use post-training quantization because the difference in accuracy gets way too big. So for this level of compression you need to do training-aware compression.” — E9**

- Cool, I didn't know that training aware compression was such an important thing to consider, from an industry perspective, not just research.

> Although training-aware compression is considered the best form of optimization [[A survey of quantization methods for efficient neural network inference]], a major drawback is that is must be included in initial model training: “Not starting early with compression is a dead end,” [E3].

- [ ] Why is that though? Why should compression-aware training happen from the start and not in the middle of training or even in finetuning? #rq


> [...] practitioners suggest estimating how much compression will be feasible with simple post-training quantization. To estimate quantization savings before training a model, **first initialize the ML model architecture with random weights, then quantize, and test the model’s speed and size on-device**


> Strategy #6: Compression can degrade the accuracy of a model and change its behavior in unpredictable ways. It is essential to create a robust evaluation pipeline (e.g., defining metrics, curating test sets) before you start optimizing your model, so that you can reliably observe shifts in model error afterwards. To prevent degradation from a failed optimization, compare optimized models with varying amounts of compression to your original model, inspecting the metrics, subpopulation behaviors, and internals, such as weights and activations, to ensure they are within expected ranges.

Okay, Robust evaluation pipeline is fundamental: Need to create unit tests, and for quantization specifically check that the distributions of weights (obviously) and activations (less obviously) are within the expected ranges. The latter might happen because of compounding degradation, this mean that errors in early layers caused by quantization might compound to later layers in unexpected ways.