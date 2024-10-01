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
## 7.1 $n$-step TD prediction

One-step return:

$$
G_{t:t+1} \doteq R_{t+1} + \gamma V_t(S_{t+1})
$$

> [!NOTE] Equation 7.1: $n$-step return
> 
> $$
> G_{t:t+n} \doteq R_{t+1} + \gamma R_{t+2} + \dots + \gamma^{n-1} R_{t+n} + \gamma^n V_{t + n - 1}(S_{t+n}) \tag{7.1}
> $$



