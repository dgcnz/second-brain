---
tags:
  - computer_vision
  - video
  - world-models
draft: false
date: 2026-01-11
---
Do we need separate Video Encoders like VJEPA?
Can we use pretrained image encoders like dinov2 (with minimal adaptation) for understanding video?
Can we train image encoders with video objectives and 

in between the backbone layers
- trainable adapters
	- [[Multi-View Foundation Models]] (technically not video, but related)
	- [[Exploring Temporally-Aware Features for Point Tracking]]
- attention over memory (qk)
	- [[MeMViT - Memory-Augmented Multiscale Vision Transformer for Efficient Long-Term Video Recognition]]
	- [[Memory Consolidation Enables Long-Context Video Understanding]]

after the backbone layers
- [[Advancing Video Self-Supervised Learning via Image Foundation Models]]
- [[Recurrent Video Masked Autoencoders]]



---
## some evidence of plausibility

DINOv2/DINOv3 features does incredibly well on video tasks (video classification, dense forecasting, intuitive physics).

From [[DINOv3]].

![[Pasted image 20260112180327.png|600]]

Small caveat here, in the [[V-JEPA 2 - Self-Supervised Video Models Enable Understanding, Prediction and Planning|V-JEPA 2]] paper they report 
![[Pasted image 20260113180225.png|600]]

From [[Back to the Features - DINO as a Foundation for Video World Models]]

![[Pasted image 20260112181303.png|500]]

![[Pasted image 20260112181328.png|400]]


[[Perception Encoder - The best visual embeddings are not at the output of the network|PEcore]] also does incredibly well, and their video adaptation is very simple: from (video, label) pairs, they average the last-layer features and train it contrastively. 
