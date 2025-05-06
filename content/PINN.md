---
tags:
  - IC-PINN
draft: false
date: 2025-05-06
---
# PINN
Physics-Informed Neural Networks (PINNs) are a type of neural network that incorporate physical laws, typically expressed as differential equations, directly into the training process. They're used to solve forward and inverse problems in scientific computing, especially where data is sparse or expensive to obtain.

Define the physical problem using a differential equation, e.g., a partial differential equation (PDE):

$$

\mathcal{F}(u(x,t)) = 0, \quad x \in \Omega, \quad t \in [0,T]

$$

Construct a neural network $u_\theta(x, t)$ to approximate the solution.

Use automatic differentiation to compute derivatives of the network output with respect to inputs:

$$

\frac{\partial u_\theta}{\partial t}, \quad \frac{\partial u_\theta}{\partial x}, \quad \frac{\partial^2 u_\theta}{\partial x^2}, \dots

$$

Define the physics-informed residual (example: heat equation):

$$

f_\theta(x,t) := \frac{\partial u_\theta}{\partial t} - \alpha \frac{\partial^2 u_\theta}{\partial x^2}

$$

Construct the total loss:

$$

\mathcal{L} = \mathcal{L}_{\text{data}} + \mathcal{L}_{\text{physics}} =

\sum_{i=1}^{N_u} |u_\theta(x_i, t_i) - u_i|^2 +

\sum_{i=1}^{N_f} |f_\theta(x_i, t_i)|^2

$$

Train the neural network by minimizing $\mathcal{L}$ using gradient-based optimization.


# References