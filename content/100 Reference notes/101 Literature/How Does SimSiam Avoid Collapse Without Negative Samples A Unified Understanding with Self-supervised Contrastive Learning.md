---
authors:
- '[[Chaoning Zhang]]'
- '[[Kang Zhang]]'
- '[[Chenshuang Zhang]]'
- '[[Trung X. Pham]]'
- '[[Chang D. Yoo]]'
- '[[In So Kweon]]'
year: 2022
tags:
- paper
- dl_theory
- computer_vision
- contrastive_learning
- ssl
url: http://arxiv.org/abs/2203.16262
date: '2022-03-30'
---

> [!tldr] Abstract
> To avoid collapse in self-supervised learning (SSL), a contrastive loss is widely used but often requires a large number of negative samples. Without negative samples yet achieving competitive performance, a recent work (Chen & He, 2021) has attracted signiﬁcant attention for providing a minimalist simple Siamese (SimSiam) method to avoid collapse. However, the reason for how it avoids collapse without negative samples remains not fully clear and our investigation starts by revisiting the explanatory claims in the original SimSiam. After refuting their claims, we introduce vector decomposition for analyzing the collapse based on the gradient analysis of the l2-normalized representation vector. This yields a uniﬁed perspective on how negative samples and SimSiam alleviate collapse. Such a uniﬁed perspective comes timely for understanding the recent progress in SSL.



## Notes

[Zotero Link](zotero://select/library/items/CNFGBTJ6)


- [x] Read [[Exploring Simple Siamese Representation Learning]]
- [x] Read [[How Does SimSiam Avoid Collapse Without Negative Samples A Unified Understanding with Self-supervised Contrastive Learning]]

 

Cool blog: https://www.nowozin.net/sebastian/blog/thoughts-on-trace-estimation-in-deep-learning.html


Now I undestand better 

---

Here’s a concise recap of the unified theoretical framework for covariance-regularized SSL methods:

1. **Core Objective**  
    Every method optimizes
    
    L  =  Lalign(z1,z2)⏟enforce view‐invariance  +  λ Ω ⁣(Σ)⏟prevent collapse by “expanding” features,\mathcal L \;=\;\underbrace{\mathcal L_{\rm align}(z_1,z_2)}_{\text{enforce view‐invariance}} \;+\;\lambda\,\underbrace{\Omega\!\bigl(\Sigma\bigr)}_{\text{prevent collapse by “expanding” features}},
    
    where Σ\Sigma is the batch covariance of the dd-dimensional embeddings.
    
2. **Alignment Term**
    
    - Matches two augmented views of the same image (e.g. MSE or cosine loss).
        
    - Drives invariance but by itself admits the trivial solution z≡z\equiv constant.
        
3. **Regularizer Ω(Σ)\Omega(\Sigma)**  
    Encodes two essential _second-moment effects_ (per Zhang et al., 2022):
    
    - **De-centering**: enforces non-zero variance in _every_ dimension (so features can’t collapse to a constant).
        
    - **De-correlation**: penalizes linear correlations between dimensions (so features can’t collapse onto a lower‐dimensional subspace).
        
4. **VICReg vs. Coding-Rate (SimDINO)**
    
    - **Coding-rate** uses the exact log-det term  
        Rε(Σ)=12log⁡det⁡(I+αΣ)\displaystyle R_\varepsilon(\Sigma)=\tfrac12\log\det\bigl(I+\alpha\Sigma\bigr),  
        which _simultaneously_ maximizes variance (all eigenvalues > 0) and enforces isotropy (decorrelation).
        
    - **VICReg** approximates −Rε-R_\varepsilon via its second-order Taylor expansion around Σ=0\Sigma=0:
        
        −log⁡det⁡(I+αΣ)  ≈  −α tr Σ  +  α22 tr Σ2, -\log\det(I+\alpha\Sigma) \;\approx\; -\alpha\,\mathrm{tr}\,\Sigma \;+\;\tfrac{\alpha^2}{2}\,\mathrm{tr}\,\Sigma^2,
        
        yielding two simple surrogates:
        
        - A **variance hinge** ∑jmax⁡(0,1−σj)2\sum_j\max(0,1-\sigma_j)^2 enforcing σj>1\sigma_j>1,
            
        - A **covariance penalty** ∑i≠jΣij2\sum_{i\neq j}\Sigma_{ij}^2 pushing off-diagonals to zero.
            
5. **Information-Theoretic Interpretation**
    
    - log⁡det⁡Σ\log\det\Sigma (up to constants) is the differential entropy of a Gaussian with covariance Σ\Sigma.
        
    - Maximizing RεR_\varepsilon under the alignment constraint is an instance of **InfoMax** (maximize representation entropy while matching positives).
        
    - Contrasting contrastive losses (InfoNCE) and these non-contrastive criteria reveals they are dual formulations of the same underlying entropy-alignment trade-off.
        
6. **Practical Consequences**
    
    - **Stability & Robustness:** explicit Ω\Omega avoids the need for large negatives, momentum encoders, or architectural tricks—works with moderate batch sizes.
        
    - **Interpretability:** VICReg’s variance/covariance terms correspond directly to whitening; coding-rate gives a principled entropy measure.
        
    - **Hyperparameters:** surrogates (VICReg) need two weights (λvar,λcov\lambda_{\rm var},\lambda_{\rm cov}); coding-rate needs just one strength parameter γ\gamma (plus ε\varepsilon).
        

> **Take-home**: All successful negative-free SSL methods boil down to “align your positives” **and** “keep your covariance full-rank and (ideally) isotropic.” VICReg-style losses do this by simple variance + covariance penalties; coding-rate methods do it by directly maximizing a log-det entropy objective.

---

Here’s a concise explanation:

**Decorrelation** in SSL means **removing linear correlations** between different feature‐dimensions so that each coordinate carries unique information. Concretely, if Z∈RB×dZ\in\mathbb R^{B\times d} are batch embeddings, their (empirical) covariance

Σ=1B (Z−Zˉ)⊤(Z−Zˉ)\Sigma = \frac1B\,(Z-\bar Z)^\top(Z-\bar Z)

has off-diagonal entries Σij\Sigma_{ij} measuring linear correlation between dimensions ii and jj. **Decorrelation** drives Σij→0\Sigma_{ij}\to0 for i≠ji\neq j, ensuring the learned features span the full dd-dimensional subspace rather than collapse onto a lower-dimensional manifold ([Wikipedia](https://en.wikipedia.org/wiki/Decorrelation?utm_source=chatgpt.com "Decorrelation")).

- In VICReg, this is done explicitly by adding a term ∑i≠jΣij2\sum_{i\neq j}\Sigma_{ij}^2 to the loss, which directly penalizes off-diagonal covariance ([arXiv](https://arxiv.org/abs/2105.04906?utm_source=chatgpt.com "VICReg: Variance-Invariance-Covariance Regularization for Self-Supervised Learning")).
    
- More generally, feature decorrelation has been shown to prevent _dimensional collapse_—where all information piles into a few axes—by **standardizing** the covariance matrix toward an identity form ([arXiv](https://arxiv.org/abs/2105.00470?utm_source=chatgpt.com "On Feature Decorrelation in Self-Supervised Learning")).
    

---

## Why does the _coding rate_ regularizer also decorrelate?

The **coding-rate** regularizer used in SimDINO (and related Maximal Coding Rate Reduction (MCR²) methods) is

Rε(Σ)=12log⁡det⁡ ⁣(I+dε2 Σ),R_\varepsilon(\Sigma) =\tfrac12\log\det\!\bigl(I + \tfrac{d}{\varepsilon^2}\,\Sigma\bigr),

and the SSL loss includes −γ Rε(Σ)-\gamma\,R_\varepsilon(\Sigma) to _maximize_ this quantity ([arXiv](https://arxiv.org/pdf/2502.10385?utm_source=chatgpt.com "[PDF] Simplifying DINO via Coding Rate Regularization - arXiv")).

1. **Determinant ∝ volume:** det⁡(Σ)\det(\Sigma) equals the squared volume of the ellipsoid defined by Σ\Sigma; the term log⁡det⁡(I+αΣ)\log\det(I+\alpha\Sigma) thus measures the _log-volume_ of the representation cloud ([Wikipedia](https://en.wikipedia.org/wiki/Determinant?utm_source=chatgpt.com "Determinant")).
    
2. **Maximizing volume enforces spread:** To maximize det⁡\det, the model must push _all_ eigenvalues λi(Σ)\lambda_i(\Sigma) away from zero—i.e. preserve variance in every direction.
    
3. **Isotropy → decorrelation:** For a fixed total variance ∑iλi\sum_i \lambda_i, the product ∏iλi\prod_i\lambda_i (hence det⁡\det) is maximized precisely when all λi\lambda_i are equal; that is, Σ\Sigma becomes _proportional to the identity_, which implies zero off-diagonal entries (perfect decorrelation) ([Mathematics Stack Exchange](https://math.stackexchange.com/questions/3968015/whats-the-geometric-intuition-of-the-determinant-of-a-covariance-matrix?utm_source=chatgpt.com "What's the geometric intuition of the determinant of a covariance ...")).
    
4. **Global surrogate:** Unlike VICReg’s separate variance and off-diagonal penalties, log⁡det⁡\log\det is a single **global** measure of entropy (volume) that inherently couples variance preservation and decorrelation—a principled InfoMax criterion under Gaussian assumptions ([arXiv](https://arxiv.org/abs/2006.08558?utm_source=chatgpt.com "Learning Diverse and Discriminative Representations via the Principle of Maximal Coding Rate Reduction")).
    

Put simply, by **maximizing the coding rate** (log-det of the covariance), the model is driven to occupy an isotropic, full-rank region in feature space, which **automatically decorrelates** the dimensions without needing an explicit off-diagonal penalty ([Cross Validated](https://stats.stackexchange.com/questions/151315/what-is-the-intuitive-geometric-meaning-of-minimizing-the-log-determinant-of?utm_source=chatgpt.com "What is the intuitive (geometric?) meaning of minimizing the log ..."), [ICML](https://icml.cc/media/icml-2024/Slides/32737.pdf?utm_source=chatgpt.com "[PDF] Matrix Information Theory for Self-Supervised Learning")).

---

**References**

- Decorrelation definition: Wikipedia “Decorrelation” ([Wikipedia](https://en.wikipedia.org/wiki/Decorrelation?utm_source=chatgpt.com "Decorrelation"))
    
- Dimensional collapse & need for decorrelation: Hua _et al._ (2021) ([arXiv](https://arxiv.org/abs/2105.00470?utm_source=chatgpt.com "On Feature Decorrelation in Self-Supervised Learning"))
    
- VICReg’s explicit covariance penalty: Bardes _et al._ (2021) ([arXiv](https://arxiv.org/abs/2105.04906?utm_source=chatgpt.com "VICReg: Variance-Invariance-Covariance Regularization for Self-Supervised Learning"))
    
- Determinant as volume: Wikipedia “Determinant” ([Wikipedia](https://en.wikipedia.org/wiki/Determinant?utm_source=chatgpt.com "Determinant"))
    
- Geometric intuition of det⁡(Σ)\det(\Sigma): Math.SE ([Mathematics Stack Exchange](https://math.stackexchange.com/questions/3968015/whats-the-geometric-intuition-of-the-determinant-of-a-covariance-matrix?utm_source=chatgpt.com "What's the geometric intuition of the determinant of a covariance ..."))
    
- Log-det in InfoMax SSL: Statistics.SE on log-det ﹙Jacobian, log-likelihood﹚ ([Cross Validated](https://stats.stackexchange.com/questions/151315/what-is-the-intuitive-geometric-meaning-of-minimizing-the-log-determinant-of?utm_source=chatgpt.com "What is the intuitive (geometric?) meaning of minimizing the log ..."))
    
- SimDINO coding rate reg.: Wu _et al._ (2025) “Simplifying DINO…” ([arXiv](https://arxiv.org/pdf/2502.10385?utm_source=chatgpt.com "[PDF] Simplifying DINO via Coding Rate Regularization - arXiv"))
    
- MCR² principle: Yu _et al._ (2020) ([arXiv](https://arxiv.org/abs/2006.08558?utm_source=chatgpt.com "Learning Diverse and Discriminative Representations via the Principle of Maximal Coding Rate Reduction"))
    
- CorInfoMax’s second-order MI: Ozsoy _et al._ (2022) ([NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2022/file/e4cd50120b6d7e8daff1749d6bbaa889-Paper-Conference.pdf?utm_source=chatgpt.com "[PDF] Self-Supervised Learning with an Information Maximization Criterion"))
    
- Matrix Info Theory unifying view: Zhang _et al._ (ICML 2024) ([ICML](https://icml.cc/media/icml-2024/Slides/32737.pdf?utm_source=chatgpt.com "[PDF] Matrix Information Theory for Self-Supervised Learning"))