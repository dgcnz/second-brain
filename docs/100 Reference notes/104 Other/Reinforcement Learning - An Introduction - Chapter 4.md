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
## 4.1 Policy evaluation

> [!NOTE] Equations 4.3 and 4.4
> 
> $$
> \begin{align}
> v_{\pi}(s) &\doteq \mathbb{E}_{\pi}[G_t \mid S_t = s] \\
> &= \mathbb{E}_{\pi}[R_{t+1} + \gamma G_{t+1} \mid S_t = s] && (\text{from (3.9)})\\
> &= \mathbb{E}_{\pi}[R_{t+1} + \gamma v_{\pi}(S_{t+1}) \mid S_t = s] && (4.3)\\
> &= \sum_a \pi(a \mid s) \sum_{s',r} p(s', r \mid s, a) \left[ r + \gamma v_{\pi}(s') \right] && (4.4),
> \end{align}
> $$

> [!NOTE] Equation 4.5
> 
> $$
> \begin{align}
> v_{k+1}(s) &\doteq \mathbb{E}_{\pi} [ R_{t+1} + \gamma v_k(S_{t+1}) \mid S_t = s ] \\
& = \sum_a \pi(a \mid s) \sum_{s', r} p(s', r \mid s, a) \left[ r + \gamma v_k(s') \right] && (4.5),
> \end{align}
> $$

![[Pasted image 20240917104341.png|600]]
## 4.2 Policy Improvement

> [!NOTE] Equation 4.6
> 
> $$
> \begin{align}
> q_\pi(s, a) &\doteq  \mathbb{E}[R_{t+1} + \gamma v_\pi(S_{t+1}) \mid S_t = s, A_t = a] && (4.6)\\
> 			&= \sum_{s', r}p(s', r \mid s, a)[r + \gamma v_\pi(s')] \\ 
> \end{align}
> $$

## 4.3 Policy Iteration

![[Pasted image 20240917104526.png|600]]
## 4.4 Value Iteration

> "This algorithm is called value iteration. It can be written as a particularly simple update operation that combines the policy improvement and truncated policy evaluation steps."

> [!NOTE] Equation 4.10
>
> $$
> \begin{align}
> v_{k+1} &\doteq \max_{a} \mathbb{E} [R_{t+1} + \gamma v_k(S_{t+1}) \mid S_t =s, A = a] \\
> 		&= \max_{a} \sum_{s', r}p(s', r \mid s, a)[r + \gamma v_k(s')] && (4.10) \\ 
> \end{align}
> $$

![[Pasted image 20240917104618.png|600]]

## 4.5 Asynchronous Dynamic Programming 

> "These algorithms update the values of states in any order whatsoever, using whatever values of other states happen to be available. [...] To converge correctly, however, an asynchronous algorithm must continue to update the values of all the states: it can’t ignore any state after some point in the computation. Asynchronous DP algorithms allow great flexibility in selecting states to update."

