---
tags:
  - computer-vision
  - survey
draft: true
date: 2026-09-04
---

> [!warning] Written by Claude (Fable 5.1) on 2026-09-04 from a sweep of NeurIPS 2025, ICCV 2025, ICLR 2026, CVPR 2026, ECCV 2026 orals and venue-less releases, Sept 2025 to Sept 2026. Maybe will be refined manually later.

Shape of the year
- Award slates are feed-forward spatial intelligence (D4RT, SAM 3D, TRELLIS.2, RayZer, VGGT-Ω, DA3).
- Biggest thematic move: perception collapsing into generation. Headline papers are all Google; the academic versions extract one capability from a frozen generator.
- No new default SSL backbone since DINOv3 (Aug 2025). The interesting SSL papers went back to pixel reconstruction, not diffusion.
- Many orals are corrections of folklore (texture bias, registers, REPA, "visual quality predicts world-model usefulness").

## Generators as perception priors
- [[Video models are zero-shot learners and reasoners]] (DeepMind, 2509.20328). Veo 3 does segmentation, edges, mazes zero-shot.
- [[Image Generators are Generalist Vision Learners]] (Google, 2604.20329). Tuned frontier image generator vs specialists. No DINO baselines.
- [[Video Generation Models are General-Purpose Vision Learners|GenCeption]] (DeepMind, 2607.09024). Video diffusion backbone matches D4RT and VGGT-Ω with 7 to 500x less data.
- [[Monocular Normal Estimation via Shading Sequence Estimation|RoSE]] (ICLR oral, 2602.09929). Normals as shading-sequence prediction with an image-to-video generator.
- [[TRACE - Your Diffusion Model is Secretly an Instance Edge Detector|TRACE]] (ICLR oral, 2503.07982). Instance edges from a frozen diffusion model.
- [[Self-Supervised Learning of Motion Concepts by Optimizing Counterfactuals|Opt-CWM]] (NeurIPS spotlight, 2503.19953). Flow and occlusion from a next-frame predictor via counterfactuals, no labels.
- [[FlashWorld - High-quality 3D Scene Generation within Seconds|FlashWorld]] (ICLR oral, 2510.13678). Distils a video diffusion prior into feed-forward 3DGS.
- [[Physical Object Understanding with a Physically Controllable World Model]] (CVPR highlight, 2606.00439). Objects emerge from sampled futures.

## Feed-forward 3D and 4D
- [[Efficiently Reconstructing Dynamic Scenes One D4RT at a Time|D4RT]] (CVPR best paper, 2512.08924). One query-based transformer for dynamic 4D.
- [[VGGT-$Ω$|VGGT-Ω]] (CVPR oral, 2605.15195). 0.2B to 10B, power-law gains, dynamic scenes.
- [[Depth Anything 3 - Recovering the Visual Space from Any Views|Depth Anything 3]] (ICLR oral, 2511.10647). Plain DINO transformer, one depth-ray target, beats VGGT.
- [[MapAnything - Universal Feed-Forward Metric 3D Reconstruction|MapAnything]] (Meta, 2509.13414). Any input mix to metric geometry.
- [[SAM 3D - 3Dfy Anything in Images|SAM 3D]] (CVPR honourable mention, 2511.16624).
- [[Geometric Context Transformer for Streaming 3D Reconstruction|LingBot-Map]] (ECCV oral, 2604.14141). Streaming 3D, 20 FPS, 10k frames.
- [[ZipMap - Linear-Time Stateful 3D Reconstruction via Test-Time Training|ZipMap]] (CVPR, 2603.04385). TTT layers compress a scene into hidden state.
- [[RayZer - A Self-supervised Large View Synthesis Model|RayZer]] (ICCV honourable mention, 2505.00702). View synthesis from unposed images.
- [[Emergent Outlier View Rejection in Visual Geometry Grounded Transformers]] (2512.04012). VGGT separates distractor views internally.

## Representation learning and SSL
- [[DINOv3]] (2508.10104). Still the default frozen encoder.
- [[In Pursuit of Pixel Supervision for Visual Pre-training|Pixio]] (Meta FAIR, 2512.15715). MAE plus 2B images matches DINOv3 on depth, 3D, segmentation.
- [[MuM - Multi-View Masked Image Modeling for 3D Vision|MuM]] (2511.17309). Multi-view MIM beats DINOv3 and CroCo v2 on matching and pose.
- [[Back to Basics - Let Denoising Generative Models Denoise|JiT]] (Kaiming He, 2511.13720). Denoise raw pixels with a plain ViT, no tokenizer.
- [[Scaling Language-Free Visual Representation Learning|Web-SSL]] (ICCV, 2504.01017). Language-free SSL to 7B matches CLIP on VQA.
- [[Perception Encoder - The best visual embeddings are not at the output of the network|Perception Encoder]] (NeurIPS oral, 2504.13181). Best features in intermediate layers.
- [[V-JEPA 2.1 - Unlocking Dense Features in Video Self-Supervised Learning|V-JEPA 2.1]] (2603.14482). Dense predictive loss; the only V-JEPA successor.
- [[Steerable Visual Representations|SteerViT]] (ECCV oral, 2604.02327). Text-gated cross-attention steers a frozen ViT.
- [[AnyUp - Universal Feature Upsampling|AnyUp]] (ICLR oral, 2510.12764). Encoder-agnostic feature upsampling.

## Corrections and audits
- [[ImageNet-trained CNNs are not biased towards texture - Revisiting feature reliance through controlled suppression|CNNs are not texture-biased]] (NeurIPS oral, 2509.20234).
- [[Vision Transformers Don't Need Trained Registers]] (NeurIPS spotlight, 2506.08010).
- [[Representation Entanglement for Generation - Training Diffusion Transformers Is Much Easier Than You Think|REG]] (NeurIPS oral, 2507.01467). Replaces REPA-style alignment.
- [[World-in-World - World Models in a Closed-Loop World|World-in-World]] (ICLR oral, 2510.18135). Visual quality does not predict task success; controllability does.
- [[Learning to See Before Seeing - Demystifying LLM Visual Priors from Language Pre-training|Learning to See Before Seeing]] (ICLR oral, 2509.26625). Text-only LLMs acquire visual priors.
- [[Why Diffusion Models Don't Memorize - The Role of Implicit Dynamical Regularization in Training|Why Diffusion Models Don't Memorize]] (NeurIPS best paper, 2505.17638).
- [[FINER - MLLMs Hallucinate under Fine-grained Negative Queries|FINER]] (CVPR oral, 2603.17662).

## Diffusion and generation fundamentals
- Representation Autoencoders line (NYU): [[Diffusion Transformers with Representation Autoencoders|RAE]] (2510.11690), [[Scaling Text-to-Image Diffusion Transformers with Representation Autoencoders|Scale-RAE]] (2601.16208), [[Improved Baselines with Representation Autoencoders|RAEv2]] (2605.18324). Diffuse in frozen DINOv2 latents.
- [[Repurposing Geometric Foundation Models for Multi-view Diffusion|GLD]] (ECCV oral, 2603.22275). Geometry-model features as the diffusion latent.
- [[Exploring Diffusion Transformer Designs via Grafting|Grafting]] (NeurIPS oral, 2506.05340). Architecture edits at under 2% of pretraining compute.
- [[Mean Flows for One-step Generative Modeling|Mean Flows]] (NeurIPS oral, 2505.13447). One-step generation from scratch.
- [[Self Forcing - Bridging the Train-Test Gap in Autoregressive Video Diffusion|Self Forcing]] (NeurIPS spotlight, 2506.08009). Streaming AR video diffusion.

## World models and embodied
- Closed releases: [Genie 3](https://deepmind.google/blog/genie-3), [Marble](https://www.worldlabs.ai/blog/marble-world-model), [Atlas](https://www.worldlabs.ai/blog/atlas).
- [[NitroGen - An Open Foundation Model for Generalist Gaming Agents|NitroGen]] (CVPR honourable mention, 2601.02427). 40k hours of gameplay.
- [[A Frame is Worth One Token - Efficient Generative World Modeling with Delta Tokens|Delta Tokens]] (CVPR highlight, 2604.04913).
- [[Knowledge Insulating Vision-Language-Action Models - Train Fast, Run Fast, Generalize Better|Knowledge Insulating VLAs]] (NeurIPS spotlight, 2505.23705).

## Segmentation, tracking, VLMs
- [[SAM 3 - Segment Anything with Concepts|SAM 3]] (2511.16719).
- [[Molmo2 - Open Weights and Data for Vision-Language Models with Video Understanding and Grounding|Molmo2]] (CVPR oral, 2601.10611). Open video pointing and tracking.
- [[CoTracker3 - Simpler and Better Point Tracking by Pseudo-Labelling Real Videos|CoTracker3]] (ICCV, 2410.11831).
- [[The SA-FARI Dataset - Segment Anything in Footage of Animals for Recognition and Identification|SA-FARI]] (CVPR oral, 2511.15622). 11,609 camera-trap videos, 99 species.
- [[Chain-of-Visual-Thought - Teaching VLMs to See and Think Better with Continuous Visual Tokens|Chain-of-Visual-Thought]] (ECCV oral, 2511.19418). VLMs reason through tokens distilled from DINO, depth, segmentation.
- [[DepthLM - Metric Depth From Vision Language Models|DepthLM]] (ICLR oral, 2509.25413). A stock VLM does metric depth.

Caveats: ECCV 2026 awards not announced yet. RayZer's award category differs between sources.
