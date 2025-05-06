---
tags:
  - IC-PINN
draft: false
date: 2025-04-27
---
# Burger's Equation
Equation studied in fluid mechanics and applied mathematics. Useful as a simplified model for fluid flows, shockwaves and turbulence. It is an example of an advection-diffusion equation.
$$\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = \nu \frac{\partial^2 u}{\partial x^2}$$

When $\nu=0$, whe have the inviscid Burger's equation, in which shockwaves and discontinuities arise

![[file-20250427182248290.gif|300]]

Notice that the Inviscid Burger's Equation can be written as a [[Scalar Conservation Law]]:
$$\left\{
\begin{array}{ll}
u_t + \left( \frac{1}{2}u^2 \right)_x = 0 & \text{in } [0, T) \times \mathbb{R}, \\
u(0, \cdot) = u_0 & \text{on } \mathbb{R},
\end{array}
\right.$$


# References
https://www.clawpack.org/riemann_book/html/Burgers.html