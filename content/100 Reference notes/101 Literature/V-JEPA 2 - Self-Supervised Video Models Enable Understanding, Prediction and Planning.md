---
authors:
  - "[[Mido Assran]]"
  - "[[Adrien Bardes]]"
  - "[[David Fan]]"
  - "[[Quentin Garrido]]"
  - "[[Russell Howes]]"
  - "[[ Mojtaba]]"
  - "[[ Komeili]]"
  - "[[Matthew Muckley]]"
  - "[[Ammar Rizvi]]"
  - "[[Claire Roberts]]"
  - "[[Koustuv Sinha]]"
  - "[[Artem Zholus]]"
  - "[[Sergio Arnaud]]"
  - "[[Abha Gejji]]"
  - "[[Ada Martin]]"
  - "[[Francois Robert Hogan]]"
  - "[[Daniel Dugas]]"
  - "[[Piotr Bojanowski]]"
  - "[[Vasil Khalidov]]"
  - "[[Patrick Labatut]]"
  - "[[Francisco Massa]]"
  - "[[Marc Szafraniec]]"
  - "[[Kapil Krishnakumar]]"
  - "[[Yong Li]]"
  - "[[Xiaodong Ma]]"
  - "[[Sarath Chandar]]"
  - "[[Franziska Meier]]"
  - "[[Yann LeCun]]"
  - "[[Michael Rabbat]]"
  - "[[Nicolas Ballas]]"
year: 2025
tags:
  - paper
url: http://arxiv.org/abs/2506.09985
share: true
---


> [!tldr] Abstract
> A major challenge for modern AI is to learn to understand the world and learn to act largely by observation. This paper explores a self-supervised approach that combines internet-scale video data with a small amount of interaction data (robot trajectories), to develop models capable of understanding, predicting, and planning in the physical world. We first pre-train an action-free joint-embedding-predictive architecture, V-JEPA 2, on a video and image dataset comprising over 1 million hours of internet video. V-JEPA 2 achieves strong performance on motion understanding (77.3 top-1 accuracy on Something-Something v2) and state-of-the-art performance on human action anticipation (39.7 recall-at-5 on Epic-Kitchens-100) surpassing previous task-specific models. Additionally, after aligning V-JEPA 2 with a large language model, we demonstrate state-of-the-art performance on multiple video question-answering tasks at the 8 billion parameter scale (e.g., 84.0 on PerceptionTest, 76.9 on TempCompass). Finally, we show how self-supervised learning can be applied to robotic planning tasks by post-training a latent action-conditioned world model, V-JEPA 2-AC, using less than 62 hours of unlabeled robot videos from the Droid dataset. We deploy V-JEPA 2-AC zero-shot on Franka arms in two different labs and enable picking and placing of objects using planning with image goals. Notably, this is achieved without collecting any data from the robots in these environments, and without any task-specific training or reward. This work demonstrates how self-supervised learning from web-scale data and a small amount of robot interaction data can yield a world model capable of planning in the physical world.



## Notes

[Zotero Link](zotero://select/library/items/66UNEX86)


