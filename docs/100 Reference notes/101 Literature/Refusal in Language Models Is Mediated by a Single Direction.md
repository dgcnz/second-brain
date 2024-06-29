---
authors:
  - "[[Andy Arditi|Andy Arditi]]"
  - "[[Oscar Obeso|Oscar Obeso]]"
  - "[[Aaquib Syed|Aaquib Syed]]"
  - "[[Daniel Paleka|Daniel Paleka]]"
  - "[[Nina Rimsky|Nina Rimsky]]"
  - "[[Wes Gurnee|Wes Gurnee]]"
  - "[[Neel Nanda|Neel Nanda]]"
year: 2024
tags:
  - paper
  - transformers
  - mechinterp
  - interpretability
url: https://arxiv.org/abs/2406.11717
share: true
---
> [!info] Abstract
> Conversational large language models are fine-tuned for both instruction-following and safety, resulting in models that obey benign requests but refuse harmful ones. While this refusal behavior is widespread across chat models, its underlying mechanisms remain poorly understood. In this work, we show that refusal is mediated by a one-dimensional subspace, across 13 popular open-source chat models up to 72B parameters in size. Specifically, for each model, we find a single direction such that erasing this direction from the model's residual stream activations prevents it from refusing harmful instructions, while adding this direction elicits refusal on even harmless instructions. Leveraging this insight, we propose a novel white-box jailbreak method that surgically disables refusal with minimal effect on other capabilities. Finally, we mechanistically analyze how adversarial suffixes suppress propagation of the refusal-mediating direction. Our findings underscore the brittleness of current safety fine-tuning methods. More broadly, our work showcases how an understanding of model internals can be leveraged to develop practical methods for controlling model behavior.