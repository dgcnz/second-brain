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
# 2 Multi-armed Bandits

## 2.2 Action-value Methods


> [!NOTE] Equation 2.1: Sample-average Method
> 
> $$
> Q_t(a) \doteq \frac{\text{sum of rewards when } a \text{ taken prior to } t}{\text{number of times } a \text{ taken prior to } t} = \frac{\sum_{i=1}^{t-1} R_i \cdot \mathbb{1}_{A_i = a}}{\sum_{i=1}^{t-1} \mathbb{1}_{A_i = a}} \tag{2.1}
> $$ 

> [!NOTE] Equation 2.2: Greedy Action Selection
> 
> $$
> A_t \doteq \underset{a}{\arg\max} Q_t(a) \tag{2.2}
> $$

## 2.4 Incremental Implementation


> [!NOTE] Equation 2.4: Incremental Sample-average method
> 
> $$
> Q_{n+1} = Q_n + \frac{1}{n}[R_n - Q_n] \tag{2.4}
> $$
> 
> Where:
> - $Q_1$  is usually initialized to zero.
> - $R_n$ is the reward received after the $n$-th selection of action $a$
> - $Q_n$ denote the estimate of its action value after it has been selected $n-1$ times


## 2.5 Tracking a Nonstationary Problem


> [!NOTE] Equation 2.7: Two learning rate conditions to ensure convergence
> 
> $$
> \sum_{n=1}^{\infty} \alpha_n(a) = \infty \quad \text{and} \quad \sum_{n=1}^{\infty} \alpha_n^2(a) < \infty \tag{2.7}
> $$


## 2.6 Optimistic Initial Values

TLDR: Initializing $Q_1(a)$ to a positive non-zero number encourages exploration.

## 2.7 Upper-Confidence-Bound Action Selection


> [!NOTE] Equation 2.10: UCB action selection
> 
> $$
> A_t \doteq \underset{a}{\arg\max} \left[ Q_t(a) + c \sqrt{\frac{\ln t}{N_t(a)}} \right] \tag{2.10}
> $$
> 
> Where:
> - $c > 0$ controls the degree of exploration.

