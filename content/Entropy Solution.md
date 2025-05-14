---
tags:
  - math
  - IC-PINN
draft: false
date: 2025-04-27
---
# Entropy Solution
[[Weak Formulation of PDEs]] do not guarantee uniqueness in the solution. 
Imposing these definitions we can ensure that a solution $u$ is unique.
Problem considered:
$$\begin{cases}
u_t + f(u)_x = 0 & \text{in } [0, T) \times \mathbb{R}, \\
u(0, \cdot) = u_0 & \text{on } \mathbb{R},
\end{cases}$$
Where $u$ is the conserved quantity, $f \in C^2(\mathbb{R})$ is the strictly convex flux function.
## Definition: (Entropy, Entropy Flux) pair
Let $\eta, q \in C^1(\mathbb{R})$
$(\eta, q)$ are a convex entropy-entropy flux pair $\iff$ $\eta$ is strictly convex and $q'=f'\eta'$

## Definition: Entropy Admissibility
Let $u$ be a weak solution. 
$u$ is an entropy-admissible solution $\iff$ $\eta(u)_t + q(u)_x \le 0 \ \text{in} \ [0, T)\times\mathbb{R} \quad \forall (\eta, q) \ \text{convex entropy-entropy flux pair}$ 

## Example
In the inviscid [[Burger's Equation]]: $f(u) = \frac{1}{2}u^2$, $\eta(u) = \frac{1}{2}u^2$ , $q(u) = \frac{1}{3}u^3$

# References
[[Improving Weak PINNs for Hyperbolic Conservation Laws- Dual Norm Computation, Boundary Conditions and Systems.pdf]]