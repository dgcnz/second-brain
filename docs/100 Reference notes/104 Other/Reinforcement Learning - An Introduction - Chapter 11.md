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



