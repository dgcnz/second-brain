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
# 13 Policy Gradient Methods

- Value-based methods: learn action-value estimates.
- Policy Gradient methods: learn **parameterized policies**, $\pi(a \mid s, \boldsymbol{\theta})$. 
	- (policies that don't consult a value function). 
- Actor-critic methods: learn both.
	- Actor $\to$ policy
	- Critic $\to$ value function

Notation:
- $\boldsymbol{\theta}$: policy parameters
- $\mathbf{w}$ : value function parameters

> [!FAQ]- How do we learn parametrized policies?
> - 0-order: random search, grid search, heuristics
> - 1-order: use first-order derivative (gradient)
> - 2-order: user second-order statistics (hessian, etc) 
> [ref:slides]

> [!NOTE] Equation 13.1: Gradient ascent update of policy parameters
> 
> $$
> \boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t + \alpha \widehat{\nabla J(\boldsymbol{\theta})} \tag{13.1}
> $$

## 13.1 Policy Approximation and its Advantages

> [!FAQ]- What is in practice enforced to ensure exploration for PGMs?
> That the policy never becomes deterministic.

> [!NOTE] Equation 13.2: Soft-max in action preferences
> 
> $$
> \pi(a \mid s, \boldsymbol{\theta}) \doteq \frac{e^{h(s, a, \boldsymbol{\theta})}}{\sum_{b} e^{h(s, b, \boldsymbol{\theta})}} \tag{13.2}
> $$

> [!FAQ]- Which conditions must the problem fulfill in order to reasonably consider the *Soft-max in action preferences* parametrization?
> The action space must be discrete and small enough.

> [!NOTE] Equation 13.3: Linear parametrization of policy preferences $h$
> 
> $$
> h(s, a, \boldsymbol{\theta}) \doteq \boldsymbol{\theta}^\intercal \mathbf{x}(s, a) \tag{13.3}
> $$
> 
> where $\mathbf{x}(s, a)$ is a feature vector that describes the state-action pair.

> [!FAQ]- What are the advantage of parametrizing policies according to the *soft-max in action preferences* in comparison with $\epsilon-$greedy policies?
> 1. Enables policies to approach a deterministic policy. $\epsilon$-greedy policies always maintain a minimum non-greedy probability $\epsilon$.
> 2. It enables truly stochastic policies. $\epsilon$-greedy policies force the policy to be almost greedy, but sometimes the best policy is to do $x$ with probability $p$ and $y$ with probability $1-p$ (e.g. poker bluffing). 
  
> [!FAQ]- What is the most important reasons for using policy gradient methods instead of value-based methods?
> 1. They allow you to inject prior knowledge about the desired form of the policy. (ref:book)
> 2. Ensures smooth updates of the policy. (ref:book/slides)
> 3. Allows continuous action spaces. (ref:slides)
> 4. Allows for stochastic policies. (ref:slides)

> [!FAQ]- How do we inject inductive biases into the policy parametrization?
>  - Policy form (e.g, gaussian, etc)
>  - Initialization
## 13.2 The Policy Gradient Theorem

> [!FAQ]- How does continuous policy parametrization help convergence? Compare it to VBMs.
> With VBMs, a small change in value function could drastically change the policy.
> With PGMs, a small change in policy parameters will only change the policy slightly, which helps optimization.

> [!NOTE] Equation 13.4: Performance $J(\boldsymbol{\theta})$ for the episodic case
> 
> $$
>  J(\boldsymbol{\theta}) \doteq v_{\pi_{\boldsymbol{\theta}}}(s_0) \tag{13.4} = \mathbb{E}_{\pi_{\boldsymbol{\theta}}}[G_0]
> $$

> [!FAQ]- What problem/question does the Policy Gradient Theorem answer?
> How can we estimate the performance gradient with respect to the policy parameter when the gradient depends on the unknown effect of policy changes on the state distribution?
> 
> **The policy gradient theorem allows for an estimate of the performance gradient irrespective of the derivative of the state distribution.**

> [!NOTE] Equation 13.5: Policy gradient theorem
> 
> $$
> \nabla J(\boldsymbol{\theta}) \propto \sum_s \mu(s) \sum_a q_{\pi}(s, a) \nabla \pi(a \mid s, \boldsymbol{\theta}) \tag{13.5}
> $$

## 13.3 REINFORCE: Monte Carlo Policy Gradient

> [!NOTE] Equation 13.6: *All-actions* policy gradient
> 
> $$
> \begin{align}
>   \nabla J(\boldsymbol{\theta}) &\propto \sum_s \mu(s) \sum_a q_{\pi}(s, a) \nabla \pi(a \mid s, \boldsymbol{\theta}) \\
>   &= \mathbb{E}_{\pi} \left[ \sum_a q_{\pi}(S_t, a) \nabla \pi(a \mid S_t, \boldsymbol{\theta}) \right] \tag{13.6} \\
> \end{align}
> $$
> 
> Personal note about notation:
> - $\mathbb{E}_{\pi}$ is a bit misleading because it can have two interpretations:
>   1. $\mathbb{E}_{A_t \sim \pi \mid S_t = s}$: Expectation over actions given a state.
>   2. $\mathbb{E}_{S_t \sim \mu}$: Expectation over the states given the on-policy distribution $\mu$. Since this distribution depends on the policy and the purpose of this expectation is to be sampled through experience for SGD, the abuse of notation is understandable.
>      - To further this point, $\mathbb{E}_{\pi}[f]$ effectively means: The experience gathered from the policy $\pi$ to update the parameters through SGD will correctly weigh $f$ eventually.


> [!NOTE] Equation 13.7: *All-actions* policy gradient update rule
>  
>  $$
>  \boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t + \alpha \sum_a \hat{q}(S_t, a, \mathbf{w}) \nabla \pi(a \mid S_t, \boldsymbol{\theta}) \tag{13.7}
>  $$

Derivation of the REINFORCE gradient:

$$
\begin{align*}
\nabla J(\boldsymbol{\theta}) &\propto \mathbb{E}_{\pi} \left[ \sum_a \pi(a | S_t, \boldsymbol{\theta}) q_{\pi}(S_t, a) \frac{\nabla \pi(a | S_t, \boldsymbol{\theta})}{\pi(a | S_t, \boldsymbol{\theta})} \right] \\
&= \mathbb{E}_{\pi} \left[ q_{\pi}(S_t, A_t) \frac{\nabla \pi(A_t | S_t, \boldsymbol{\theta})}{\pi(A_t | S_t, \boldsymbol{\theta})} \right] \quad \text{(replacing } a \text{ by the sample } A_t \sim \pi) \\
&= \mathbb{E}_{\pi} \left[ G_t \frac{\nabla \pi(A_t | S_t, \boldsymbol{\theta})}{\pi(A_t | S_t, \boldsymbol{\theta})} \right], \quad \text{(because } \mathbb{E}_{\pi}[G_t | S_t, A_t] = q_{\pi}(S_t, A_t))
\end{align*}
$$


> [!NOTE] Equation 13.8: REINFORCE update rule
> 
> $$
> \boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t + \alpha G_t \frac{\nabla \pi(A_t | S_t, \boldsymbol{\theta})}{\pi(A_t | S_t, \boldsymbol{\theta})} \tag{13.8}
> $$
> 

This choice of performance measure $G_t \frac{ \nabla \pi(A_t | S_t, \boldsymbol{\theta})}{\pi(A_t | S_t, \boldsymbol{\theta})}$ is intuitive:

- $\nabla \pi(A_t | S_t, \boldsymbol{\theta})$: Is the direction that maximizes the probability of selecting $A_t$ in state $S_t$.
- This gradient is proportional to $G_t$, which means that the larger the return, the larger the update.
- This gradient is inversely proportional to $\pi(A_t | S_t, \boldsymbol{\theta})$, which means that the larger the probability of selecting $A_t$, the smaller the update. 
	- This is importance because it prevents frequency bias: *actions should be chosen not because they are frequent, but because they have high return*.


This vector is called the *eligibility vector*. 
- [ ] #todo: Check if $G_t$ is part of this vector or not. 

![[Pasted image 20241007105059.png|Pasted image 20241007105059.png]]
Note:
- For simplicity, $\frac{\nabla \pi(A_t | S_t, \boldsymbol{\theta})}{\pi(A_t | S_t, \boldsymbol{\theta})}$ is written as $\nabla \ln \pi(A_t | S_t, \boldsymbol{\theta})$.
- REINFORCE has good theoretical convergence properties.

> [!FAQ]- Why does REINFORCE yield slow learning?
> Because as a Monte Carlo method, it has high variance.

**DISCLAIMER: For uva-rl1, this method is called REINFORCE v2. REINFORCE v1 uses the full return at each step**
## 13.4 REINFORCE with Baseline

The policy gradient can be generalized to include any baseline function $b(s)$, as long as it is independent of the action. 

> [!NOTE] Equation 13.10: Baseline policy gradient
> 
> $$
> \nabla J(\boldsymbol{\theta}) \propto \sum_s \mu(s) \sum_a \left( q_{\pi}(s, a) - b(s) \right) \nabla \pi(a \mid s, \boldsymbol{\theta}) \tag{13.10}
> $$

> [!FAQ]- Why is $b(s)$'s independence to $a$ a requirement for this generalization to be valid?
> 
> If $b(s)$ is independent of $a$, then the term involving $b(s)$ will zero-out:
> 
> $$
> \sum_a b(s) \nabla \pi(a \mid s, \boldsymbol{\theta}) = b(s) \nabla \sum_a \pi(a \mid s, \boldsymbol{\theta}) = 0
> $$

> [!NOTE] Equation 13.11: Baseline policy gradient update rule
> 
> $$
> \boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t + \alpha \left( G_t - b(S_t) \right) \nabla \pi(A_t \mid S_t, \boldsymbol{\theta}) \tag{13.11}
> $$

- In general, the baseline leaves the expected value of the update unchanged, but **affects the variance**.
	- Think about as a normalization, the baseline can act as a way to zero-mean the value distribution per each state, thus helping the learning algorithm to differentiate better between bad and good actions **relative to each state's particular action-value distribution**.
- Natural choice: $b(s) = \hat{v}(S_t, \mathbf{w})$.

![[Pasted image 20241007211203.png|Pasted image 20241007211203.png]]
- Setting the learning rate for $\mathbf{w}$ is as normal, but for $\boldsymbol{\theta}$, it is not obvious.

## 13.5 Actor-Critic Methods

TLDR: Expand usage of the baseline/value function with multi-step returns, lambda TD, etc. Helps with variance. Adds bias but can be controlled with lambda TD, etc.

Example: 
- Use value function as baseline
- Use one-step returns with value bootstrap as target

> [!NOTE] Equation 13.12, 13.13 and 13.14: One-step Actor-critic update rule
> 
> $$
> \begin{align}
>     \theta_{t+1} &\doteq \theta_t + \alpha \left( G_{t:t+1} - \hat{v}(S_t, \mathbf{w}) \right) \frac{\nabla \pi(A_t | S_t, \theta_t)}{\pi(A_t | S_t, \theta_t)} \quad \tag{13.12} \\
>     &= \theta_t + \alpha \left( R_{t+1} + \gamma \hat{v}(S_{t+1}, \mathbf{w}) - \hat{v}(S_t, \mathbf{w}) \right) \frac{\nabla \pi(A_t | S_t, \theta_t)}{\pi(A_t | S_t, \theta_t)} \quad \tag{13.13} \\
>     &= \theta_t + \alpha \delta_t \frac{\nabla \pi(A_t | S_t, \theta_t)}{\pi(A_t | S_t, \theta_t)} \quad \tag{13.14}
> \end{align}
> $$

![[Pasted image 20241020212513.png|800]]
## 13.6 Policy Gradient for Continuing Problems

> [!NOTE] Equation 13.15: Average rate of reward per time step
> 
> $$
> \begin{align}
> 	J(\boldsymbol{\theta}) &\doteq  r(\pi) \doteq \lim_{h \to \infty} \frac{1}{h} \sum_{t=1}^h\mathbb{E} \left[ R_t \mid S_t, A_{0:t-1} \sim \pi \right] \tag{13.15} \\
> 	&= \lim_{t \to \infty} \mathbb{E} \left[R_t \mid S_t, A_{0:t-1} \sim \pi \right] \\\
> 	&= \sum_s \mu(s) \sum_a \pi(a \mid s) \sum_{s', r} p(s', r \mid s, a) r
> \end{align}
> $$
> 
> Where:
> - $\mu(s) \doteq \lim_{t\to \infty} \mathbb{P} \left[S_t = s \mid A_{0:t} \sim \pi \right]$ is the steady-state distribution of states under $\pi$, which is assumed to exist and to be independent of $S_0$ (an ergodicity assumption).

Note: not part of the course readings, missing remaining notes for this subsection.


## 13.7 Policy Parameterization for Continuous Actions


> TLDR: parametrize policy by a distribution statistics, for example, mean and variance of gaussian.

*todo: add notes*

$d \tau$

## Extra: Deterministic Policy Gradients

- Use deterministic policy as target policy
- Use stochastic policy as behavior policy (example: target + noise)


![[Pasted image 20241020213317.png|500]]

![[Pasted image 20241020213339.png|500]]

DPG with q-learning update
![[Pasted image 20241020213450.png|500]]

Only works with continous actions
Discrete actions will cause gradient inconsistencies

![[Pasted image 20241020213623.png|500]]


Deep DPG = DPG + modification to use neural nets to generalise
- Use experience replay
- "double-q learning"


