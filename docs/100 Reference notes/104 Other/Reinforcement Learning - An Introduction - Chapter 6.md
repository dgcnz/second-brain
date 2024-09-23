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
## 6.4 Sarsa: On-policy TD Control

> [!NOTE] Equation 6.7
> 
> $$
> \begin{align}
> Q(S_t, A_t) \leftarrow Q(S_t, A_t) + \alpha \left[ R_{t+1} + \gamma Q(S_{t+1}, A_{t+1}) - Q(S_t, A_t) \right]  
> \end{align}
> $$

![[Pasted image 20240917101226.png|900]]
## 6.5 Q-learning: Off-policy TD Control

> [!NOTE] Equation 6.8
> 
> $$
> \begin{align}
> Q(S_t, A_t) \leftarrow Q(S_t, A_t) + \alpha \left[ R_{t+1} + \gamma \max_a Q(S_{t+1}, a) - Q(S_t, A_t) \right]  
> \end{align}
> $$

![[Pasted image 20240917101536.png|700]]

## 6.6 Expected SARSA

> [!NOTE] Equation 6.9
> 
> $$
> \begin{align}
> Q(S_t, A_t) &\leftarrow Q(S_t, A_t) + \alpha \left[ R_{t+1} + \gamma \mathbb{E}_\pi [Q(S_{t+1}, A_{t+1}) \mid S_{t+1}] - Q(S_t, A_t) \right]   \\
>  &= Q(S_t, A_t) + \alpha \left[ R_{t+1} + \gamma \sum_a \pi(a \mid S_{t+1}) Q(S_{t+1}, a)  - Q(S_t, A_t) \right]  && (6.9)
> \end{align}
> $$

It's more computationally demanding but it's more stable and fares better than q learning and sarsa.

## 6.7 Maximization Bias and Double Learning


> "All the control algorithms that we have discussed so far involve maximization in the construction of their target policies"

this causes maximization bias:
- think of estimating the mean of N(-0.1, 1)
- this estimate might at some point be 0.1 and the other option might be correctly 0
- the optimal choice is to pick 0, but because we take the max of an estimate, we positively bias ourselves

The general way to solve it is to estimate two different value functions, one for getting the value ($Q_2$) and the other for obtaining the best action $Q_1$.

$$
\begin{align}
A^* &= \text{argmax}_a Q_1(a) \\
Q_2(A^*) &= Q_2(\text{argmax}_a Q_1(a))
\end{align}
$$

This effectively debiases the estimate $\mathbb{E}[Q_2(A^*)] = q(A^*)$


