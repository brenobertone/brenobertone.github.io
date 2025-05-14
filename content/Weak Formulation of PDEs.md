---
tags:
  - math
  - IC-PINN
draft: false
date: 2025-04-27
---
# Weak Formulation of PDEs
Some PDEs have solutions that after some point lead to a discontinuity in the solution.
An example is the inviscid [[Burger's Equation]].
Let's see how we can work around it using the weak formulation:
$$\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = \frac{\partial u}{\partial t} +\frac{\partial}{\partial x} (\frac{u^2}{2}) = 0$$
Let $\varphi$ be a test function which is $0$ on the boundaries $\partial\Omega$ and has square-integrable derivatives
$$\implies \varphi\frac{\partial u}{\partial t} + \varphi\frac{\partial}{\partial x} (\frac{u^2}{2}) = 
\int_0^t \int_{x_L}^{x_R} \varphi \frac{\partial u}{\partial t} \, dx \, dt
+ 
\int_0^t \int_{x_L}^{x_R} \varphi \frac{\partial}{\partial x} \left( \frac{u^2}{2} \right) \, dx \, dt
= 0
$$
Using integration by parts to transfer the derivative from $u$ to $\varphi$, aware that $\varphi=0 \ \ \forall x \in \partial\Omega$
$$
\implies \int_0^t \int_{x_L}^{x_R}
\left[
\frac{\partial \varphi}{\partial t}
+
\frac{\partial}{\partial x} \left( \frac{u^2}{2} \right)
\right]
\, dx \, dt = 0
\quad \forall \, \varphi(x,t) \in C_c^1(\Omega \times \mathbb{R}_+)
$$
Here, we find the solution as a distribution.

Usually, they are not unique, but more conditions can be added, such as [[Entropy Solution]] to establish uniqueness.


# References
[[Improving Weak PINNs for Hyperbolic Conservation Laws- Dual Norm Computation, Boundary Conditions and Systems.pdf]]
[Weak Solutions of a PDE and Why They Matter](https://www.youtube.com/watch?v=zQJkve_hnHk&ab_channel=BeyondtheBigBang)
[Weak formulation](https://en.wikipedia.org/wiki/Weak_formulation)