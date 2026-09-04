---
authors:
  - "[[Quentin Garrido]]"
  - "[[Tushar Nagarajan]]"
  - "[[Basile Terver]]"
  - "[[Nicolas Ballas]]"
  - "[[Yann LeCun]]"
  - "[[Michael Rabbat]]"
year: 2026
date: 2026-01-08
tags:
  - paper
  - video
  - world-models
url: http://arxiv.org/abs/2601.05230
draft: false
---


> [!tldr] Abstract
> Agents capable of reasoning and planning in the real world require the ability of predicting the consequences of their actions. While world models possess this capability, they most often require action labels, that can be complex to obtain at scale. This motivates the learning of latent action models, that can learn an action space from videos alone. Our work addresses the problem of learning latent actions world models on in-the-wild videos, expanding the scope of existing works that focus on simple robotics simulations, video games, or manipulation data. While this allows us to capture richer actions, it also introduces challenges stemming from the video diversity, such as environmental noise, or the lack of a common embodiment across videos. To address some of the challenges, we discuss properties that actions should follow as well as relevant architectural choices and evaluations. We find that continuous, but constrained, latent actions are able to capture the complexity of actions from in-the-wild videos, something that the common vector quantization does not. We for example find that changes in the environment coming from agents, such as humans entering the room, can be transferred across videos. This highlights the capability of learning actions that are specific to in-the-wild videos. In the absence of a common embodiment across videos, we are mainly able to learn latent actions that become localized in space, relative to the camera. Nonetheless, we are able to train a controller that maps known actions to latent ones, allowing us to use latent actions as a universal interface and solve planning tasks with our world model with similar performance as action-conditioned baselines. Our analyses and experiments provide a step towards scaling latent action models to the real world.



## Notes

[Zotero Link](zotero://select/library/items/LHT2EQ7Z)
