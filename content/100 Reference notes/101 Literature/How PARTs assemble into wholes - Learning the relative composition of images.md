---
authors:
  - "[[Melika Ayoughi]]"
  - "[[Samira Abnar]]"
  - "[[Chen Huang]]"
  - "[[Chris Sandino]]"
  - "[[Sayeri Lala]]"
  - "[[Eeshan Gunesh Dhekane]]"
  - "[[Dan Busbridge]]"
  - "[[Shuangfei Zhai]]"
  - "[[Vimal Thilak]]"
  - "[[Josh Susskind]]"
  - "[[Pascal Mettes]]"
  - "[[Paul Groth]]"
  - "[[Hanlin Goh]]"
year: 2025
date: 2025-06-04
tags:
  - paper
  - ssl
  - vit
url: http://arxiv.org/abs/2506.03682
draft: true
---


> [!tldr] Abstract
> The composition of objects and their parts, along with object-object positional relationships, provides a rich source of information for representation learning. Hence, spatial-aware pretext tasks have been actively explored in self-supervised learning. Existing works commonly start from a grid structure, where the goal of the pretext task involves predicting the absolute position index of patches within a fixed grid. However, grid-based approaches fall short of capturing the fluid and continuous nature of real-world object compositions. We introduce PART, a self-supervised learning approach that leverages continuous relative transformations between off-grid patches to overcome these limitations. By modeling how parts relate to each other in a continuous space, PART learns the relative composition of images—an off-grid structural relative positioning process that generalizes beyond occlusions and deformations. In tasks requiring precise spatial understanding such as object detection and time series prediction, PART outperforms strong grid-based methods like MAE and DropPos, while also maintaining competitive performance on global classification tasks with minimal hyperparameter tuning. By breaking free from grid constraints, PART opens up an exciting new trajectory for universal self-supervised pretraining across diverse datatypes—from natural images to EEG signals—with promising potential in video, medical imaging, and audio.



## Notes

[Zotero Link](zotero://select/library/items/BRPB36RF)
