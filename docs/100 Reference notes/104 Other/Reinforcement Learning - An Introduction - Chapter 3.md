---
authors:
  - "[[Richard S. Sutton|Richard S. Sutton]]"
  - "[[Andrew G. Barton|Andrew G. Barton]]"
year: 2018
tags:
  - textbook
url: 
share: true
---
## 3.1 The Agent-Environment Interface


> [!NOTE] Equation 3.1: Trajectory
> 
> $$ 
> S_0,A_0,R_1,S_1,A_1,R_2,S_2,A_2,R_3, \dots  \tag{3.1}
> $$


> [!NOTE] Equation 3.2: MDP dynamics
> 
> $$ 
> p(s', r \mid s, a) \doteq \Pr \{ S_t = s', R_t = r \mid S_{t-1} = s, A_{t-1} = a \} \tag{3.2}
> $$ 


You can obtain the *state-transition probabilities* and the with the law of total probability.
You can obtain the expected reward also.

## 3.2  Goals and Rewards

> [!FAQ]- What is the reward hypothesis?
> 
> The reward hypothesis is the idea that **all of what we mean by goals** and purposes can be well thought of as the **maximization** of the expected value of the cumulative sum of a received scalar signal (called **reward**). 


- The reward signal is your way of communicating to the agent what you want it to achieve **not how you want it to achieve it**.


## 3.3 Returns and Episodes

> [!NOTE] Equation 3.7: Undiscounted return
> 
> $$
> G_t \doteq R_{t+1} + R_{t+2} + R_{t+3} + \dots + R_T \tag{3.7}
> $$

> [!NOTE] Equation 3.8: Discounted return
> 
> $$
> G_t \doteq R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \dots = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \tag{3.8}
> $$
> 
> Where $\gamma$ is the discount rate.


> [!NOTE] Equation 3.9: Recursive definition of return
>  
>  You can group Eq 3.8 into a recursive definition of the return.
> 
> $$
> G_t \doteq R_{t+1} + \gamma G_{t+1} \tag{3.9}
> $$


## 3.4 Unified Notation for Episodic and Continuing Tasks

![[Pasted image 20240928215826.png|Pasted image 20240928215826.png]]

## 3.5 Policies and Value Functions

A policy $\pi(a \mid s)$ is a probability distribution over actions given states.

> [!NOTE] Equation 3.12: State-value function
> 
> $$
> v_{\pi}(s) \doteq \mathbb{E}_{\pi}[G_t \mid S_t = s] \;\; \forall s \in \mathcal{S} \tag{3.12}
> 
> $$

> [!NOTE] Equation 3.13: Action-value function
> 
> $$
> q_{\pi}(s, a) \doteq \mathbb{E}_{\pi}[G_t \mid S_t = s, A_t = a] \;\; \forall s \in \mathcal{S}, a \in \mathcal{A} \tag{3.13}
> $$

> [!NOTE] Equation 3.14: Bellman equation for $v_{\pi}$
> 
> $$
> \begin{align}
> v_\pi(s) &\doteq \mathbb{E}_{\pi}[G_t \mid S_t = s] \\
> &= \mathbb{E}_{\pi}[R_{t+1} + \gamma G_{t+1} \mid S_t = s] \tag{by (3.9)} \\
> &= \sum_{a} \pi(a \mid s) \sum_{s', r} p(s', r \mid s, a) \left[r + \gamma \mathbb{E}_{\pi}\left[G_{t+1} \mid S_{t+1} = s'\right]\right] \\
> &= \sum_{a} \pi(a \mid s) \sum_{s', r} p(s', r \mid s, a) [r + \gamma v_\pi(s')] \tag{3.14}
> \end{align}
> $$

## 3.6 Optimal Policies and Optimal Value Functions

> [!NOTE] Equation 3.15: Optimal state-value function
> 
> $$
> v_*(s) \doteq \max_{\pi} v_{\pi}(s) \tag{3.15}
> $$

> [!NOTE] Equation 3.16: Optimal action-value function
> 
> $$
> q_*(s, a) \doteq \max_{\pi} q_{\pi}(s, a) \tag{3.16}
> $$

> [!NOTE] Equation 3.17
> 
> $$
> q_*(s, a) = \mathbb{E}[R_{t+1} + \gamma v_*(S_{t+1}) \mid S_t = s, A_t = a] \tag{3.17}
> $$

> [!NOTE] Equation 3.18 and 3.19: Bellman optimality equations for $v_*$
> 
> $$
> \begin{align}
> v_*(s) &= \max_{a \in \mathcal{A}(s)} q_{\pi_*}(s, a) \\
> &= \max_{a} \mathbb{E}_{\pi_*}[G_t \mid S_t = s, A_t = a] \tag{by (3.9)}\\
> &= \max_{a} \mathbb{E}_{\pi_*}[R_{t+1} + \gamma G_{t+1} \mid S_t = s, A_t = a] \\
> &= \max_{a} \mathbb{E}[R_{t+1} + \gamma v_*(S_{t+1}) \mid S_t = s, A_t = a] \tag{3.18} \\
> &= \max_{a} \sum_{s', r} p(s', r \mid s, a) [r + \gamma v_*(s')] \tag{3.19} \\
> \end{align}
> $$

> [!NOTE] Equation 3.20: Bellman optimality equation for $q_*$
> 
> $$
> \begin{align}
> q_*(s, a) &= \mathbb{E}[R_{t+1} + \gamma \max_{a'} q_*(S_{t+1}, a') \mid S_t = s, A_t = a] \\
> &= \sum_{s', r} p(s', r \mid s, a) [r + \gamma \max_{a'} q_*(s', a')] \tag{3.20}
> \end{align}
> $$


**Any policy that is greedy with respect to the optimal evaluation function $v_*$ is an optimal policy.**




