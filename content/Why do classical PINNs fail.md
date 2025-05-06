---
tags:
  - IC-PINN
draft: false
date: 2025-04-27
---
# Why do classical PINNs fail
Is this note, we are examining how classical PINNs with $L^p$ norms cannot approximate discontinuous solutions to nonlinear hyperbolic conservation laws.

As an example, let's use the inviscid [[Burger's Equation]], with initial conditions:

$$\left\{
\begin{array}{ll}
u_t + \left( \frac{1}{2}u^2 \right)_x = 0 & \text{in } [0, T) \times \mathbb{R}, \\
u_0(x) = 
\begin{cases}
1, & x < 0 \\
-1, & x \geq 0
\end{cases} & \text{on } \mathbb{R},
\end{array}
\right.$$

The exact solution is $u(t,x) = \begin{cases} 1, & x < 0 \\ -1, & x > 0 \end{cases} \quad \text{for all } t > 0$

We consider solutions $\tilde{u}$ so that $\tilde{u}(x) \in \begin{cases} [1 - \epsilon, 1 + \epsilon] & \text{for } x < -\epsilon \\ [-1 - \epsilon, -1 + \epsilon] & \text{for } x > \epsilon \\ [-1 - \epsilon, 1 + \epsilon] & \text{for } -\epsilon \leq x \leq \epsilon \end{cases}$

Is possible to show that these solutions converge at the rate of $\sqrt \epsilon$ (2.)

In (1.), it is shown that the PDE residual grows at a rate $\frac{1}{\sqrt\epsilon}$

So smaller $e$ will aproximate a better solution but give a bigger PDE residual.

An experiment on this can be found in [Visualization of Shock Profiles and Residuals in Standing Shock Burgers' Equation.ipynb](https://colab.research.google.com/drive/1EtmwEFxQ-yuxj_cbUfcQZbqGULXyOPdK?usp=sharing), with the following graphs: 

![[file-20250505194616006.png|300]]![[file-20250505194620802.png|300]]

![[file-20250505194626427.png|300]]

# References
1. [[Improving Weak PINNs for Hyperbolic Conservation Laws- Dual Norm Computation, Boundary Conditions and Systems.pdf]]
2. [[L2 Convergence for Smooth Approximations of the Inviscid Burgers Equation]]