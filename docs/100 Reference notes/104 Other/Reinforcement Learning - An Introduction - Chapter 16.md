---
authors:
  - "[[Richard S. Sutton|Richard S. Sutton]]"
  - "[[Andrew G. Barton|Andrew G. Barton]]"
year: 2018
tags:
  - textbook
  - rl1
url: 
share: true
---
# 16 Applications and Case Studies
## 16.5 Human-level Video Game Play

DQN's Network architecture: Conv2d + RELU blocks  for feature extraction and linear layers for output.
![[Pasted image 20241020203656.png|Pasted image 20241020203656.png]]


> [!NOTE] Equation 16.3: DQN Semi-Gradient update rule
> 
> $$
> \mathbf{w}_{t+1} = \mathbf{w}_{t} + \alpha \left[ R_{t+1} + \gamma \max_{a} \hat{q}(S_{t+1}, a; \mathbf{w}_{t}) - \hat{q}(S_t, A_t; \mathbf{w}_{t}) \right] \nabla \hat{q}(S_t, A_t; \mathbf{w}_{t})
> $$

> [!FAQ]- What are the three modifications to Q-learning that make DQN?
> 1. Experience Replay: Useful to use data better and remove the dependence of successive experiences on the current weights.
> 2. "Double Q-learning": Keep a copy of the network at the previous step to provide targets to avoid divergence and oscillations.
> 3. Clip the error term $R_{t+1} + \gamma \max_{a} q(S_{t+1}, a; \mathbf{w}_{t}) - q(S_t, A_t; \mathbf{w}_{t})$ to $[-1, 1]$ to improve stability.

