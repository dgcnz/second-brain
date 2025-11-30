---
authors:
- '[[Deepak Pathak]]'
- '[[Pulkit Agrawal]]'
- '[[Alexei A. Efros]]'
- '[[Trevor Darrell]]'
year: 2017
tags:
- paper
- rl
url: https://arxiv.org/abs/1705.05363
date: '2017-05-15'
---

> [!tldr] Abstract
> 
> In many real-world scenarios, rewards extrinsic to the agent are extremely sparse, or absent altogether. In such cases, curiosity can serve as an intrinsic reward signal to enable the agent to explore its environment and learn skills that might be useful later in its life. We formulate curiosity as the error in an agent's ability to predict the consequence of its own actions in a visual feature space learned by a self-supervised inverse dynamics model. Our formulation scales to high-dimensional continuous state spaces like images, bypasses the difficulties of directly predicting pixels, and, critically, ignores the aspects of the environment that cannot affect the agent. The proposed approach is evaluated in two environments: VizDoom and Super Mario Bros. Three broad settings are investigated: 1) sparse extrinsic reward, where curiosity allows for far fewer interactions with the environment to reach the goal; 2) exploration with no extrinsic reward, where curiosity pushes the agent to explore more efficiently; and 3) generalization to unseen scenarios (e.g. new levels of the same game) where the knowledge gained from earlier experience helps the agent explore new places much faster than starting from scratch. Demo video and code available at [this https URL](https://pathak22.github.io/noreward-rl/)


**(a) Which and how many environment(s) are the techniques tested on?**
1. VizDoom: 2 maps, 1 for training and 1 for testing. Each map is different both in terms of layout and textures.
2. Super Mario Bros: 4 levels (1 for pre-training and 3 for testing). Levels might have different lightning (day/night), etc.

**(b) What methods is the proposed technique compared to?**
- In all experiments, the technique is ablated as follows:
	- A3C (baseline)
	- A3C + ICM
	- A3C + ICM (pixels)
- In experiment 3.1, ICM is compared to TRPO + VIME.

**(c) How are hyperparameters set? Does this result in a fair comparison?**
- For the comparison between ICM and TRPO (+ VIME), the hyperparameters for TRPO and TRPO + VIME are taken from a concurrent work that tests on the same environment. Unless we expect the other work to have chosen suboptimal hyperparameters in comparison to the current work, it doesn't strike me as unfair.
- For the ICM ablation, no mention of the hyperparameters is made.  

**(d) Which quantities are measured?** 
- For the comparison between ICM and TRPO (+ VIME), mean and median score (at convergence) are used. They state ICM is also better in terms of convergence rate but don't provide any quantitative measure because both algorithms have "different setups".
- For the ICM ablation, the Extrinsic Rewards per Episode is measured at each training iteration. This metric basically shows the average success rate of the agent (in reaching the goal).

(e) Is it clear which experimental procedure was followed? (e.g. number of runs, ...) 
(f) Is it clear what the spread is between such runs? How is this spread reported? 
(g) Are results presented clear and interpretable way?