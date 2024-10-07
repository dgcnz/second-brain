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
## 6.1 TD Prediction

> [!NOTE] Equation 6.2: TD(0) update
> 
> $$
> \begin{align}
> V(S_t) &\leftarrow V(S_t) + \alpha \left[ R_{t+1} + \gamma V(S_{t+1}) - V(S_t) \right]  \tag{6.2}  \\
> \end{align}
> $$

> [!NOTE] Equations 6.3 and 6.4: Relationship between TD(0), MC and DP
> 
> $$
> \begin{align}
> v_\pi(s) &\doteq \mathbb{E}_\pi[G_t \mid S_t = s] \tag{6.3} \\
> &= \mathbb{E}_\pi[R_{t+1} + \gamma G_{t+1} \mid S_t = s]  \tag{from (3.9)} \\
> &= \mathbb{E}_\pi[R_{t+1} + \gamma v_\pi(S_{t+1}) \mid S_t = s] \tag{6.4} \\
> \end{align}
> $$

> [!faq]- Why is (6.3) called the Monte Carlo *estimate*?
> Because the expected value is not known, and sampled returns are used in its place.

> [!faq]- Why is (6.4) called the Dynamic Programming *estimate*?
> Although the expectation is known, the value function is not, as we use the estimate $V(S_t)$.

> [!faq]- By looking at the previous two answers, what does TD(0) estimate and how does that differ from the previous methods?
> TD(0) maintains both an estimate of the value function and uses a sample reward as the estimate to the expectation.



> [!NOTE] Equation 6.5: TD error
> 
> $$
> \begin{align}
> \delta_t &\doteq R_{t+1} + \gamma V(S_{t+1}) - V(S_t) \tag{6.5} 
> \end{align}
> $$

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


