---
tags:
  - mechinterp
  - transformers
share: true
---
> "A transformer starts with a token embedding, followed by a series of “residual blocks”, and finally a token unembedding. Each residual block consists of an attention layer, followed by an MLP layer. Both the attention and MLP layers each “read” their input from the residual stream (by performing a linear projection), and then “write” their result to the residual stream by adding a linear projection back in. Each attention layer consists of multiple heads, which operate in parallel." [[A Mathematical Framework for Transformer Circuits|A Mathematical Framework for Transformer Circuits]]


![[Pasted image 20240811144250.png|Pasted image 20240811144250.png]]