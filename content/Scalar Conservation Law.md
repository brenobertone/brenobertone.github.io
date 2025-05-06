---
tags:
  - IC-PINN
draft: false
date: 2025-05-03
---
# Scalar Conservation Law
It's a type of PDE that models used to model the conservation of a physical quantity described by a single scalar variable.
$$
\text{General form in one space dimension: } \ \ \frac{\partial u}{\partial t} + \frac{\partial f(u)}{\partial x} = 0 \quad \forall x \in \mathbb{R},\  t \ge0
$$
Where:
- $u(x,t)$ is the unknown scalar quantity (mass, energy, momentum...)
- $f(u)$ sets the speed and direction of propagation

Notice that discontinuities may appear in the solution, so the [[Weak Formulation of PDEs]] paired with an [[Entropy Solution]] might be needed to solve it.
# References