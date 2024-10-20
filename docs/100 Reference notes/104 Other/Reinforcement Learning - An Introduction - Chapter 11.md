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
# 11 Off-policy Methods with Approximation

Off-policy case is a bit tricky, previously [[Reinforcement Learning - An Introduction - Chapter 5|Reinforcement Learning - An Introduction - Chapter 5]] we adjusted our target $G_t$ with the importance sampling ratio so that its expectation was $v_{\pi}$ and not $v_b$. 

However, for semi-gradient methods with function approximation, another factor comes in: By following the behavior policy, the **distribution of updates** is also biased! 

There are 2 solutions:
1. **Importance sampling** - Corrects the distribution of updates
2. **True gradient methods** - To avoid relying on the distribution for stability

## 11.1 Semi-gradient Methods

> [!NOTE] Equation 11.1: Per-step importance sampling ratio
> 
> $$
> \rho_t \doteq \rho_{t:T-1} = \frac{\pi(A_t \mid S_t)}{b(A_t \mid S_t)}
> $$

> [!FAQ]- What does a high/low importance sampling ratio imply about the action taken?
> - High: The action was taken rarely under the behavior policy
> - Low: The action was taken often under the behavior policy

> [!NOTE] Equation 11.2: Update rule for semi-gradient off-policy TD(0)
> 
> $$
> \mathbf{w}_{t+1} = \mathbf{w}_t + \alpha \rho_t \delta_t \nabla \hat{v}(S_t, \mathbf{w}_t) \tag{11.2}
> $$

> [!NOTE] Equation 11.3: Definition of $\delta_t$ for semi-gradient off-policy TD(0)
> 
> $$
> \delta_t \doteq R_{t+1} + \gamma \hat{v}(S_{t+1}, \mathbf{w}_t) - \hat{v}(S_t, \mathbf{w}_t) \tag{11.3}
> $$

> [!NOTE] Equation 11.5: Update rule for semi-gradient off-policy SARSA
> 
> $$
> \mathbf{w}_{t+1} = \mathbf{w}_t + \alpha \rho_t \delta_t \nabla \hat{q}(S_t, A_t, \mathbf{w}_t) \tag{11.5}
> $$

> [!NOTE] Equation 11.6: Definition of $\delta_t$ for semi-gradient off-policy SARSA
> 
> $$
> \delta_t \doteq R_{t+1} + \gamma \sum_a \pi(a \mid S_{t+1}) \hat{q}(S_{t+1}, a, \mathbf{w}_t) - \hat{q}(S_t, A_t, \mathbf{w}_t) \tag{11.6}
> $$

Also:
- eq 11.6: n-step version of semi-gradient Sarsa
- eq 11.7: semi-gradient version of n-step tree-backup algorithm

## 11.2 Examples of Off-policy Divergence

Baird's counterexample: Shows that even the simplest  bootstrapping (DP, TD) with function approximation can diverge if updates aren't done under on-policy distribution.

> Another way to try to prevent instability is to use special methods for function approximation. In particular, stability is guaranteed for function approximation methods that do not extrapolate from the observed targets. These methods, called averagers, include nearest neighbor methods and locally weighted regression, but not popular methods such as tile coding and artificial neural networks (ANNs).

## 11.3 The Deadly Triad

Instability arises when we combine the following 3 elements:
1. Function approximation
2. Bootstrapping
3. Off-policy training

## 11.4 Linear Value-function Geometry

TLDR: Using the geometry of the value function, we find that $\overline{BE}$ measures how far off $\mathbf{w}$ is from $v_\pi$.

> [!NOTE] Equation 11.11: $\mu$-norm
> 
> $$
> ||\mathbf{v}||^2_\mu \doteq \sum_{s \in \mathcal{S}} \mu(s) v(s)^2
> $$

> [!NOTE] Equation 11.17 and 11.18: Bellman error
> 
> $$
> \begin{align}
> \bar{\delta}_{\mathbf{w}}(s) &\doteq \left( \sum_a \pi(a \mid s) \sum_{s', r} p(s', r \mid s, a)[r + \gamma v_{\mathbf{w}}(s')] \right) - v_{\mathbf{w}}(s) \tag{11.17} \\
> &= \mathbb{E}_\pi[R_{t+1} - \gamma v_{\mathbf{w}}(S_{t+1}) - v_{\mathbf{w}}(S_{t}) \mid S_t = s, A_t \sim \pi]
> \end{align}
> $$

> [!NOTE] Equation 11.19: Mean-square Bellman error
> 
> $$
> \overline{BE}({\mathbf{w}}) \doteq || \bar{\delta} ||^2_\mu
> $$

## 11.5 Gradient Descent in the Bellman Error

TLDR: Semi-gradient SGD might diverge, but true SGD doesn't! Sadly, both TDE and BE yield bad minima.

Let's first take an easier case, minimizing $\overline{TDE}$.

> [!NOTE] Mean-squared temporal difference error
> 
> $$
> \begin{align}
> \overline{TDE}(\mathbf{w}) &= \sum_{s \in \mathcal{S}} \mu(s) \mathbb{E}\left[\delta_t^2 \mid S_t = s, A_t \sim \pi \right] \\
> &= \sum_{s \in \mathcal{S}} \mu(s) \mathbb{E}\left[\rho_t \delta_t^2 \mid S_t = s, A_t \sim b \right] \\
> &= \mathbb{E}_b\left[\rho_t \delta_t^2 \right]
> \end{align}
> $$

This yields the following.

> [!NOTE] Equation 11.23: Weight update of naive residual-gradient algorithm
> 
> $$
> \begin{align}
> \mathbf{w}_{t+1} &= \mathbf{w}_t - \frac{1}{2} \alpha \nabla(\rho_t \delta_t^2) \\
>  &= \mathbf{w}_t - \alpha \rho_t \delta_t \nabla(\delta_t) \\
>  &= \mathbf{w}_t - \alpha \rho_t \delta_t (\nabla \hat{v}(S_t, \mathbf{w}_t) - \gamma \nabla \hat{v}(S_{t+1}, \mathbf{w}_t)) \tag{11.23} \\
> \end{align}
> $$

Conclusion: 
> Minimizing the TDE is naive; by penalizing all TD errors it achieves something more like temporal smoothing than accurate prediction.
> Although the naive residual-gradient algorithm converges robustly, it does not necessarily converge to a desirable place.

Doing the same for $\overline{BE}$ yields the residual-gradient algorithm. But it's not a good choice either.
## 11.6 The Bellman Error is Not Learnable

TLDR: $\overline{BE}$ is not learnable but $\overline{TDE}$  and $\overline{PBE}$ are. Since minimizing $\overline{TDE}$ is naive, next section: minimize $\overline{PBE}$.

> Here we use the term in a more basic way, to mean learnable at all, with any amount of experience. It turns out many quantities of apparent interest in reinforcement learning cannot be learned even from an infinite amount of experiential data. These quantities are well defined and can be computed given knowledge of the internal structure of the environment, but cannot be computed or estimated from the observed sequence of feature vectors, actions, and rewards

## 11.7 Gradient-TD Methods

TLDR: To minimize $\overline{PBE}$ using SGD efficiently we use two separate estimates for dependent expectations. This yields two algorithms: GTD2 and TDC.

> [!NOTE] Equation 11.27: Gradient of $\overline{PBE}$
> 
> $$
> \nabla \overline{PBE}(\mathbf{w}) = 2 \mathbb{E} \left[ \rho_t (\gamma_{t+1} - \mathbf{x}_t) \mathbf{x}_t^\top \right] \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^\top \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right]
> $$

First and last term are not independent, thus we must have separate estimates.  

> [!NOTE] Equation 11.28: Definition of $\mathbf{v}$
> 
> Grouping the last two terms of the gradient of $\overline{PBE}$, we get a new vector $\mathbf{v}\in \mathbb{R}^d$ which we can estimate and store efficiently:
> 
> $$
> \mathbf{v} \approx \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^\top \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right]
> $$

> [!NOTE] Update rule for $\mathbf{v}$
> 
> $$
> \mathbf{v}_{t+1} = \mathbf{v}_t + \beta \rho_t (\delta_t - \mathbf{v}_t^\top \mathbf{x}_t) \mathbf{x}_t
> $$
> 
> Where:
> - $\beta$ is a learning rate

Using $\mathbf{v}$, we can now update $\mathbf{w}$, which yields the GTD2 algorithm:

> [!NOTE] Equation 11.29: Update rule for GTD2
> 
> $$
> \begin{align}
>     \mathbf{w}_{t+1} &= \mathbf{w}_t - \frac{1}{2}\alpha \nabla \text{PBE}(\mathbf{w}_t) \quad \tag{the general SGD rule} \\
>     &= \mathbf{w}_t - \frac{1}{2}\alpha 2 \mathbb{E} \left[ \rho_t (\gamma_{t+1} - \mathbf{x}_t) \mathbf{x}_t^\top \right] \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^\top \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \quad 
> \tag{from (11.27)} \\
>     &= \mathbf{w}_t + \alpha \mathbb{E} \left[ \rho_t (\mathbf{x}_t - \gamma \mathbf{x}_{t+1}) \mathbf{x}_t^\top \right] \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^\top \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \quad \tag{11.29} \\
>     &\approx \mathbf{w}_t + \alpha \mathbb{E} \left[ \rho_t (\mathbf{x}_t - \gamma \mathbf{x}_{t+1}) \mathbf{x}_t^\top \right] \mathbf{v}_t \quad \tag{based on (11.28)} \\
>     &\approx \mathbf{w}_t + \alpha \rho_t (\mathbf{x}_t - \gamma \mathbf{x}_{t+1}) \mathbf{x}_t^\top \mathbf{v}_t \quad \tag{sampling}
> \end{align}
> $$

> [!FAQ]- What is the complexity of GTD2?
> $O(d)$ per step if $x_t^T v_t$ computed first

We can do a bit more algebra to get to a better algorithm: TDC (TD(0) with Gradient Correction) or also known as GTD(0).

> [!NOTE] Equation: Update rule for TDC
> 
> $$
> \begin{align}
>     \mathbf{w}_{t+1} &= \mathbf{w}_t + \alpha \mathbb{E} \left[ \rho_t (\mathbf{x}_t - \gamma \mathbf{x}_{t+1}) \mathbf{x}_t^\top \right] \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^\top \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \\
>     &= \mathbf{w}_t + \alpha \left( \mathbb{E} \left[ \rho_t \mathbf{x}_t \mathbf{x}_t^\top \right] - \gamma \mathbb{E} \left[ \rho_t \mathbf{x}_{t+1} \mathbf{x}_t^\top \right] \right) \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^\top \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \\
>     &= \mathbf{w}_t + \alpha \left( \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^\top \right] - \gamma \mathbb{E} \left[ \rho_t \mathbf{x}_{t+1} \mathbf{x}_t^\top \right] \right) \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^\top \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \\
>     &= \mathbf{w}_t + \alpha \left( \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] - \gamma \mathbb{E} \left[ \rho_t \mathbf{x}_{t+1} \mathbf{x}_t^\top \right] \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^\top \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \right) \\
>     &\approx \mathbf{w}_t + \alpha \left( \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] - \gamma \mathbb{E} \left[ \rho_t \mathbf{x}_{t+1} \mathbf{x}_t^\top \right] \mathbf{v}_t \right) \quad &\text{(based on (11.28))} \\
>     &\approx \mathbf{w}_t + \alpha \rho_t \left( \delta_t \mathbf{x}_t - \gamma \mathbf{x}_{t+1} \mathbf{x}_t^\top \mathbf{v}_t \right), \quad &\text{(sampling)}
> \end{align}
> $$

Summary from the lectures

![[Pasted image 20241020202242.png|700]]
