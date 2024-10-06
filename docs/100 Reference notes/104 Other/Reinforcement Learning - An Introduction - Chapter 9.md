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
> \overline{VE}(\mathbf{w}) &\doteq \sum_{s \in \mathcal{S}}  \mu(s) \left[v_{\pi}(s) - \hat{v}(s, \mathbf{w})\right]^2 && \tag{9.1}
> \end{align}
> $$

Where:
- $\mu(s)$ is the *state distribution* (reminder: non-negative, sums to one)

For on-policy episodic tasks, $\mu(s)$ is called the *on-policy distribution*, which can be defined as follows:

> [!NOTE] Equations 9.2 and 9.3
> 
> $$
> \begin{align}
> \eta(s) = h(s) + \sum_{\bar{s}} \eta(\bar{s}) \sum_a \pi(a \mid \bar{s})p(s \mid \bar{s}, a), && \text{for all } s \in S  && \tag{9.2}
> \end{align}
> $$
> 
> $$
> \begin{align}
> \mu(s) = \frac{\eta(s)}{\sum_{s'}\eta(s')} && \tag{9.3}
> \end{align}
> $$

Where:
-  $h(s)$ is the probability that an episode begins in a state $s$.
- $\eta(s)$ is the number of time steps spent on average in a state $s$ for a single episode.
	- Interpretation of 2 terms: Time is spent in a $s$ if an episode starts in $s$ or if another state transitions into $s$.


- $\overline{VE}$ only guarantees local optimality.


## 9.3 Stochastic-gradient and Semi-gradient Methods

> [!NOTE] Equations 9.4 and 9.5
> 
> $$
> \begin{align}
> 	\mathbf{w}_{t+1} &= \mathbf{w}_t - \frac{1}{2} \alpha \nabla \left[v_{\pi}(S_t) - \hat{v}(S_t, \mathbf{w}_t) \right] && \tag{9.4} \\
> 	 &= \mathbf{w}_t + \alpha \left[v_{\pi}(S_t) - \hat{v}(S_t, \mathbf{w}_t) \right] \nabla \hat{v}(S_t, \mathbf{w}_t) && \tag{9.5}
> \end{align}
> $$

However, since we don't know the true  $v_\pi(s)$, we can replace it with the *target output* $U_t$: 

> [!NOTE] Equation 9.7
> 
> $$
> \begin{align}
> 	\mathbf{w}_{t+1} &= \mathbf{w}_t + \alpha \left[U_t - \hat{v}(S_t, \mathbf{w}_t) \right] \nabla \hat{v}(S_t, \mathbf{w}_t) && \tag{9.7}
> \end{align}
> $$

Where:
- $U_t$ *should* be an unbiased estimate of $v_\pi(s)$, that is:
	- $\mathbb{E}[U_t \mid S_t=s] = v_\pi(s)$
	- With local optimum convergence guarantees.

![[Pasted image 20240923171752.png|Pasted image 20240923171752.png]]

Examples of $U_t$:
- Monte Carlo target: $U_t = G_t$  (that is, the reward achieved until the end of the episode), unbiased.
-  Bootstrapping targets are biased because they depend on $\mathbf{w}$ through $\hat{v}(S_t, \mathbf{w})$ .
	- To make them unbiased, you can treat the dependent expressions as constants (stop the gradient flow). This yields *semi-gradient methods*.

*Semi-gradient methods*:
- Do not converge as robustly as gradient methods, aside from the linear case.
- Faster, enable online/continual learning.

![[Pasted image 20240923172823.png|Pasted image 20240923172823.png]]

## 9.4 Linear Methods

> [!NOTE] Equation 9.8
> 
> $$
> \begin{align}
> 	\hat{v}(s, \mathbf{w}) \doteq \mathbf{w}^\intercal \mathbf{x}(s) = \sum_{i=1}^d w_i x_i(s) && \tag{9.8}
> \end{align}
> $$
> 
> Where:
> - $\mathbf{x}(s) = \left(x_1(s), \dots, x_d(s)\right)^\intercal$

- The gradient Monte Carlo algorithm converges to the global optimum of the VE under linear function approximation if $\alpha$ is reduced over time according to the usual conditions.
- Chapter also explores the convergence of TD(0) with SGD and linear approximation and finds it converges to the *TD fixed point* (Eqs. 9.11, 9.12), $\mathbf{w}_{TD}$. This is not the global optimum, but a point near the local optimum.


> [!NOTE] Equation 9.14
> 
> Interpretation: The asymptotic error of the TD method is no more than $\frac{1}{1-\gamma}$ times the *smallest possible error*.
> 
> $$
> \begin{align}
> 	\overline{VE}(\mathbf{w}_{TD}) & \leq \frac{1}{1-\gamma} \min_{\mathbf{w}} \overline{VE}(\mathbf{w}) \tag{9.14}
> \end{align}
> $$


![[Pasted image 20240923173826.png|Pasted image 20240923173826.png]]

> [!NOTE] Equation 9.15
> 
> $$
> \mathbf{w}_{t+n} \doteq \mathbf{w}_{t+n-1} + \alpha \left[ G_{t:t+n} - \hat{v}(S_t, \mathbf{w}_{t+n-1}) \right] \nabla \hat{v}(S_t, \mathbf{w}_{t+n-1}), \quad 0 \leq t < T, \tag{9.15}
> $$

> [!NOTE] Equation 9.16
> 
> $$
> G_{t:t+n} \doteq R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{n-1} R_{t+n} + \gamma^n \hat{v}(S_{t+n}, \mathbf{w}_{t+n-1}), \quad 0 \leq t \leq T - n. \tag{9.16}
> $$


## 9.5 Feature Construction for Linear Methods

- 9.5.1 Polynomials
- 9.5.2 Fourier Basis
- 9.5.3 Coarse coding
- 9.5.4 Tile Coding
- 9.5.5 Radial Basis Functions

## 9.6 Selecting Step-Size Parameters Manually

“The classical choice t =1/t, which produces sample averages in tabular MC methods, is not appropriate for TD methods, for nonstationary problems, or for any method using function approximation.” (Sutton and Barto, 2020, p. 244)


> [!NOTE] Equation 9.19
>  Suppose you wanted to learn in about $\tau$ experiences with substantially the same feature vector. A good rule of thumb for setting the step-size parameter of *linear SGD methods* is:
>  
> $$
> \begin{align}
> 	\alpha \doteq \left(\tau \mathbb{E}\left[\mathbf{x}^\intercal\mathbf{x}\right]\right)^{-1} \tag{9.19}
> \end{align}
> $$


