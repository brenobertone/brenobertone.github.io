---
tags:
  - IC-PINN
draft: false
date: 2025-05-06
---
# PINN
Physics-Informed Neural Networks (PINNs) integrate physical laws into the training process using differential equations. Define the problem with a PDE:

$$
\mathcal{F}(u(x,t)) = 0, \quad x \in \Omega, \quad t \in [0,T]
$$

Construct a neural network $u_\theta(x,t)$ to approximate the solution, and compute derivatives using automatic differentiation:

$$
\frac{\partial u_\theta}{\partial t}, \quad \frac{\partial u_\theta}{\partial x}, \quad \frac{\partial^2 u_\theta}{\partial x^2}, \dots
$$

For example, the residual for the heat equation is:

$$
f_\theta(x,t) := \frac{\partial u_\theta}{\partial t} - \alpha \frac{\partial^2 u_\theta}{\partial x^2}
$$

The total loss is:

$$
\mathcal{L} = \mathcal{L}_{\text{data}} + \mathcal{L}_{\text{physics}} = \sum_{i=1}^{N_u} |u_\theta(x_i, t_i) - u_i|^2 + \sum_{i=1}^{N_f} |f_\theta(x_i, t_i)|^2
$$

Train by minimizing $\mathcal{L}$ using gradient-based optimization.


# References