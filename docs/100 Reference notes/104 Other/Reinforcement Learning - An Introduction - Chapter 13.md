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
  
> [!FAQ]- What is the most important reason for using policy gradient methods instead of value-based methods?
> They allow you to inject prior knowledge about the desired form of the policy.

## 13.2 The Policy Gradient Theorem

> [!FAQ]- How does continuous policy parametrization help convergence? Compare it to VBMs.
> With VBMs, a small change in value function could drastically change the policy.
> With PGMs, a small change in policy parameters will only change the policy slightly, which helps optimization.

> [!NOTE] Equation 13.4: Performance $J(\boldsymbol{\theta})$ for the episodic case
> 
> $$
>  J(\boldsymbol{\theta}) \doteq v_{\pi_{\boldsymbol{\theta}}}(s_0) \tag{13.4}
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
>   &= \mathbb{E}_{\pi} \left[ \sum_a q_{\pi}(S_t, a) \nabla \pi(a \mid S_t, \boldsymbol{\theta}) \right] \\
> \end{align}
> $$
## 13.4 REINFORCE with Baseline

#todo 

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


