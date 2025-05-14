---
tags:
  - IC-PINN
draft: false
date: 2025-05-05
---
# $L^2(0, T; W^{-1, p}(D))$ Norm

## Definition
The space $L^2(0, T; W^{-1, p}(D))$ consists of all measurable functions (or distributions) $u$ such that:
$$
u \in L^2(0, T; W^{-1, p}(D)) \quad \text{if} \quad \|u\|_{L^2(0, T; W^{-1, p}(D))} < \infty,
$$
where the norm is given by:
$$
\|u\|_{L^2(0, T; W^{-1, p}(D))} = \left( \int_0^T \|u(t)\|_{W^{-1, p}(D)}^2 \, dt \right)^{1/2}.
$$

Here, $W^{-1, p}(D)$ is the **dual space** of $W_0^{1, p'}(D)$ (where $\frac{1}{p} + \frac{1}{p'} = 1$), equipped with the norm:
$$
\|f\|_{W^{-1, p}(D)} = \sup_{\substack{\phi \in W_0^{1, p'}(D) \\ \|\phi\|_{W^{1, p'}} \leq 1}} \langle f, \phi \rangle.
$$

## Interpretation
- This space is used in the study of **evolutionary PDEs** (e.g., parabolic equations) where the solution has weak time regularity but belongs to a negative Sobolev space in the spatial variable.
- It arises naturally in variational formulations of PDEs with **test functions** in $L^2(0, T; W_0^{1, p'}(D))$.

## Properties
1. **Duality**: The dual of $L^2(0, T; W_0^{1, p'}(D))$ is $L^2(0, T; W^{-1, p}(D))$.
2. **Embeddings**: If $p > 2$, then $L^2(0, T; L^2(D)) \subset L^2(0, T; W^{-1, p}(D))$ under mild assumptions.
3. **Weak Convergence**: Bounded sequences in $L^2(0, T; W^{-1, p}(D))$ admit weakly convergent subsequences.

## References
