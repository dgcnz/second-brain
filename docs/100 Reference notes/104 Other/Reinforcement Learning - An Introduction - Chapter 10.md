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
# 10 On-Policy Control with Approximation

Now that we know how to learn value functions, we can tackle the control problem by learning q-value functions instead and using a $\epsilon$-greedy policy over those.

## 10.1 Episodic Semi-gradient Control

> [!NOTE] Equation 10.1: General gradient-descent update for action-value prediction
> 
> $$
> \mathbf{w}_{t+1} = \mathbf{w}_t + \alpha \left[U_t - \hat{q}(S_t, A_t, \mathbf{w}_t) \right] \nabla \hat{q}(S_t, A_t, \mathbf{w}_t) \tag{10.1}
> $$

> [!NOTE] Equation 10.2: Episodic semi-gradient one-step SARSA
> 
> $$
> \mathbf{w}_{t+1} = \mathbf{w}_t + \alpha \left[R_{t+1} + \gamma \hat{q}(S_{t+1}, A_{t+1}, \mathbf{w}_t) - \hat{q}(S_t, A_t, \mathbf{w}_t) \right] \nabla \hat{q}(S_t, A_t, \mathbf{w}_t) \tag{10.2}
> $$

![[Pasted image 20241020163624.png|700]]
