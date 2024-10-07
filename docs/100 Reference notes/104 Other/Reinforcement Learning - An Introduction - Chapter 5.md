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
## 5.1 Monte Carlo prediction

first-visit mc
- independence assumptions, easier theoretically
every-visit mc

- [ ] TODO: finish notes
## 5.4 Monte Carlo Control without Exploring Starts

- $\epsilon-$greedy policy
	- All non-greedy actions have minimum probability of $\frac{\epsilon}{|\mathcal{A}|}$
	- Greedy action has probability $(1 - \epsilon) + \frac{\epsilon}{|\mathcal{A}|}$

- [ ] TODO: finish notes

## 5.5 Off-policy Prediction via Importance Sampling

Given a starting state $S_t$, the probability of the subsequent state-action trajectory, $A_t, S_{t+1}, A_{t+1}, \dots, S_T$, under the policy $\pi$ is given by:

$$
\begin{align}
Pr\{A_t, S_{t+1}, A_{t+1}, \dots, S_T \mid S_t, A_{t:T-1} \sim \pi\} & = \prod_{k=t}^{T-1} \pi(A_k \mid S_k) p(S_{k+1} \mid S_k, A_k)
\end{align}
$$


> [!NOTE] Equation 5.3: Important sampling ratio
> 
> $$
> \rho_{t:T-1} \doteq \frac{\prod_{k=t}^{T-1} \pi(A_k \mid S_k) p(S_{k+1} \mid S_k, A_k)}{\prod_{k=t}^{T-1} b(A_k \mid S_k) p(S_{k+1} \mid S_k, A_k)} = \prod_{k=t}^{T-1} \frac{\pi(A_k \mid S_k)}{b(A_k \mid S_k)} \tag{5.3}
> $$

> [!NOTE] Equation 5.4: Value function for target function $\pi$ under behavior policy $b$
> 
> The importance sampling ratio allows us to compute the correct expected value to compute $v_\pi$:
> 
> $$
> \begin{align}
> v_\pi(s) &\doteq \mathbb{E}_b[\rho_{t:T - 1}G_t \mid S_t = s] \tag{5.4} \\
> \end{align}
> $$

> [!NOTE] Equation 5.5: Ordinary importance sampling
> 
> $$
> V(s) \doteq \frac{\sum_{t \in \mathcal{T}(s)} \rho_{t:T-1} G_t}{|\mathcal{T}(s)|} \tag{5.5}
> $$

> [!NOTE] Equation 5.6: Weighted importance sampling
> 
> $$
> V(s) \doteq \frac{\sum_{t \in \mathcal{T}(s)} \rho_{t:T-1} G_t}{\sum_{t \in \mathcal{T}(s)} \rho_{t:T-1}} \tag{5.6}
> $$

![[Pasted image 20240929183258.png|Pasted image 20240929183258.png]]

In practice, weighted importance sampling has much lower error at the beginning.


## 5.6 Incremental Implementation

#todo 

