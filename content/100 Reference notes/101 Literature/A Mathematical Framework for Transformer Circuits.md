---
authors:
  - "[[Nelson Elhage]]"
  - "[[Neel Nanda]]"
  - "[[Catherine Olsson]]"
  - "[[Tom Henighan]]"
  - "[[Nicholas Joseph]]"
  - "[[Ben Mann]]"
  - "[[Amanda Askell]]"
  - "[[Yuntao Bai]]"
  - "[[Anna Chen]]"
  - "[[Tom Conerly]]"
  - "[[Nova DasSarma]]"
  - "[[Dawn Drain]]"
  - "[[Deep Ganguli]]"
  - "[[Zac Hatfield-Dodds]]"
  - "[[Danny Hernandez]]"
  - "[[Andy Jones]]"
  - "[[Jackson Kernion]]"
  - "[[Liane Lovitt]]"
  - "[[Kamal Ndousse]]"
  - "[[Dario Amodei]]"
  - "[[Tom Brown]]"
  - "[[Jack Clark]]"
  - "[[Jared Kaplan]]"
  - "[[Sam McCandlish]]"
  - "[[Christopher Olah]]"
year: 2021
tags:
  - paper
  - mechinterp
  - transformers
url: https://transformer-circuits.pub/2021/framework/index.html
share: true
---
> [!tldr] Abstract
> Transformer [1] language models are an emerging technology that is gaining increasingly broad real-world use, for example in systems like GPT-3 [2], LaMDA [3], Codex [4], Meena [5], Gopher [6], and similar models.  However, as these models scale, their open-endedness and high capacity creates an increasing scope for unexpected and sometimes harmful behaviors.  Even years after a large model is trained, both creators and users routinely discover model capabilities – including problematic behaviors – they were previously unaware of.
> 
> One avenue for addressing these issues is mechanistic interpretability, attempting to reverse engineer the detailed computations performed by transformers, similar to how a programmer might try to reverse engineer complicated binaries into human-readable source code.  If this were possible, it could potentially provide a more systematic approach to explaining current safety problems, identifying new ones, and perhaps even anticipating the safety problems of powerful future models that have not yet been built.  A previous project, the [Distill Circuits thread](https://distill.pub/2020/circuits/) [7], has attempted to reverse engineer vision models, but so far there hasn’t been a comparable project for transformers or language models. 
> 
> In this paper, we attempt to take initial, very preliminary steps towards reverse-engineering transformers.  Given the incredible complexity and size of modern language models, we have found it most fruitful to start with the simplest possible models and work our way up from there.  Our aim is to discover simple algorithmic patterns, motifs, or frameworks that can subsequently be applied to larger and more complex models.  Specifically, in this paper we will study transformers with two layers or less which have only attention blocks – this is in contrast to a large, modern transformer like GPT-3, which has 96 layers and alternates attention blocks with MLP blocks.
> 
> We find that by conceptualizing the operation of transformers in a new but mathematically equivalent way, we are able to make sense of these small models and gain significant understanding of how they operate internally.  Of particular note, we find that specific attention heads that we term “induction heads” can explain in-context learning in these small models, and that these heads only develop in models with at least two attention layers.  We also go through some examples of these heads operating in action on specific data.
> 
> We don’t attempt to apply to our insights to larger models in this first paper, but in a [forthcoming paper](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html), we will show that both our mathematical framework for understanding transformers, and the concept of induction heads, continues to be at least partially relevant for much larger and more realistic models – though we remain a very long way from being able to fully reverse engineer such models.
