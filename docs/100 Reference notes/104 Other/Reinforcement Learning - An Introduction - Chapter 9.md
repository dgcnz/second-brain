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
# 9. On-policy  prediction with approximation

**Problem setting**: In most real scenarios, the number of states is too large for tabular learning algorithms, so we will approximate the value function by a learned, parametrized function:
$$\hat{v}(s, \mathbf{w}) \approx v_\pi(s)$$
- Examples of possible modelling choices for this function could be linear functions, non linear functions, neural networks, etc.
- $\mathbf{w} \in R^d$ , $d \ll |\mathcal{S}|$ , which means that updating on state affects multiple: *generalization*
- This formulation allows for partially observable states.
- Side note: not all convergence proofs apply to all function classes (for more info see [UCL x DeepMind 7/13](https://youtu.be/ook46h2Jfb4?si=uEHHuZOyzDgkmLqr))
## 9.1 Value-function approximation

New notation! ($s\to u$ is an update rule for $v(s)$ using new expression $u$)  

> [!WARNING]- How does the learning setting differ between neural networks (supervised) and reinforcement learning?
> RL requires modeling to allow:
> - online learning (while interacting with environment), incrementally acquire data
> 	- Remember that supervised learning suffers from catastrophic forgetting
> - Non-stationary target functions
> 
> Supervised Learning assumes iid sampling from a fixed but unknown data distribution

## 9.2 The Prediction Objective ($\overline{VE}$) 

> [!FAQ]- Why do we need a prediction objective now? What has changed?
> In the tabular setting we had two nice properties:
> - the learned value function could actually converge exactly to the true value function
> - the value of a state was decoupled from other states
> 
> Without these two, we must say which states are most important to us.

> [!NOTE] Equation 9.1
> 
> $$
> \begin{align}
> \overline{VE}(\mathbf{w}) &\doteq \sum_{s \in \mathcal{S}}  \mu(s) \left[v_{\pi}(s) - \hat{v}(s, \mathbf{w})\right]^2 && (9.1)
> \end{align}
> $$

Where:
- $\mu(s)$ is the *state distribution* (reminder: non-negative, sums to one)

For on-policy episodic tasks, $\mu(s)$ is called the *on-policy distribution*, which can be defined as follows:

> [!NOTE] Equations 9.2 and 9.3
> 
> $$
> \begin{align}
> \eta(s) = h(s) + \sum_{\bar{s}} \eta(\bar{s}) \sum_a \pi(a \mid \bar{s})p(s \mid \bar{s}, a), && \text{for all } s \in S  && (9.2)
> \end{align}
> $$
> 
> $$
> \begin{align}
> \mu(s) = \frac{\eta(s)}{\sum_{s'}\eta(s')} && (9.3)
> \end{align}
> $$

Where:
-  $h(s)$ is the probability that an episode begins in a state $s$.
- $\eta(s)$ is the number of time steps spent on average in a state $s$ for a single episode.
	- Interpretation of 2 terms: Time is spent in a $s$ if an episode starts in $s$ or if another state transitions into $s$.


- $\overline{VE}$ only guaranties local optimality.


## 9.3 Stochastic-gradient and Semi-gradient Methods