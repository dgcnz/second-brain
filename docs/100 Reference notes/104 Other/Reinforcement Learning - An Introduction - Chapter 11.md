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
## 11.1 Semi-gradient Methods

> [!NOTE] Equation 11.1: Per-step importance sampling ratio
> 
> $$
> \rho_t \doteq \rho_{t:T-1} = \frac{\pi(A_t \mid S_t)}{b(A_t \mid S_t)}
> $$


#todo

## 11.4 Linear Value-function Geometry

TODO:
- [x] 11.11 mu norm equation ✅ 2024-10-01
- [x] 11.17 and 11.18 bellman error ✅ 2024-10-01
- [x] 11.19 mean square bellman error ✅ 2024-10-01

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

> [!NOTE] Mean-squared temporal difference error
> 
> $$
> \begin{align}
> \overline{TDE}(\mathbf{w}) &= \sum_{s \in \mathcal{S}} \mu(s) \mathbb{E}\left[\delta_t^2 \mid S_t = s, A_t \sim \pi \right] \\
> &= \sum_{s \in \mathcal{S}} \mu(s) \mathbb{E}\left[\rho_t \delta_t^2 \mid S_t = s, A_t \sim b \right] \\
> &= \mathbb{E}_b\left[\rho_t \delta_t^2 \right]
> \end{align}
> $$

> [!NOTE] Equation 11.23: Weight update of naive residual-gradient algoritm
> 
> $$
> \begin{align}
> \mathbf{w}_{t+1} &= \mathbf{w}_t - \frac{1}{2} \alpha \nabla(\rho_t \delta_t^2) \\
>  &= \mathbf{w}_t - \alpha \rho_t \delta_t \nabla(\delta_t) \\
>  &= \mathbf{w}_t - \alpha \rho_t \delta_t (\nabla \hat{v}(S_t, \mathbf{w}_t) - \gamma \nabla \hat{v}(S_{t+1}, \mathbf{w}_t)) \tag{11.23} \\
> \end{align}
> $$

