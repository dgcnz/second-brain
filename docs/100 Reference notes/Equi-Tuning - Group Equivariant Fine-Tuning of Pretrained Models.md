Authors: [[Sourya Basu]]
> [!done] Main idea
Given non-equivariant pre-trained model $M(x)$, define equivariant model $M_G(x)$, as the average of the inverted predictions for all group actions on input $x$.
$$ M_G(x) = \frac{1}{|G|} \sum_{g \in G} g^{-1}  M(g x)$$


Tags: #dl2