---
tags:
  - IC-PINN
draft: false
date: 2025-05-04
---
# Loss in weak PINN Architecture

The interior loss is based on the [[L2-W(-1, p) norm]]. So, that the losses for the interior and entropy are:

$$\mathcal{L}_{\text{int}}^u(u_\theta) = \int_{[0,T]} \left( \sup_{\varphi \in \mathcal{S}} \int_D \left( \partial_t u_\theta + \partial_x f(u_\theta) \right) \varphi \, dx \right)^2 dt$$
$$\mathcal{L}_{\text{ent}}^\eta(u_\theta) = \int_{[0,T]} \left( \sup_{\xi \in \mathcal{S}} \int_D \left( \eta(u_\theta)_t + q(u_\theta)_x \right)^\oplus \, \xi \, dx \right)^2 dt$$
Where $\oplus$ denotes the positive part of the entropy residual. Since the entropy conditions requires  $\le 0$, it will ensure only the violation contribute to the loss.

(See 1. and 2.)
Then, it can be shown that the $W^{-1,p}$ norm (the supremum inside the losses) is equivalent to the $w$ that maximizes the energy functional $I(w) = \int_D vwdx - \frac{1}{q} \int_D |\nabla w|^q dx$, which applied to our problem turns into:

$$\mathcal{L}_{\text{PDE}}^u := \frac{|\Omega|}{N_{\text{int}}} \sum_{S_{\text{int}}} \left[ \left( \partial_t u_\theta \, \varphi_\chi - f(u_\theta) \, \partial_x \varphi_\chi \right) - \frac{1}{q} \left| \nabla_x \varphi_\chi \right|^q \right](t_i, x_i)$$
$$
\mathcal{L}_{\text{ent}}^\eta = \frac{|\Omega|}{N_\text{int}} \sum_{N_\text{int}} \left[ \left( \eta(u_\theta)_t + q(u_\theta)_x \right)^\oplus \cdot \xi_\nu - \frac{1}{q} \left| \nabla_x \xi_\nu \right|^q \right](t_i, x_i)
$$
Where  $|\Omega|$ is the area of the domain

With initial condition loss and boundary condition loss:

$$ \mathcal{L}_\text{ic} + \mathcal{L}_\text{bc} = 
\lambda \left(
\frac{1}{N_{ic}} \sum_{S_{ic}} \left( u_\theta(0, x_i) - u_0(x_i) \right)^2 +
\frac{1}{N_{bc}} \sum_{S_{bc}} \left( u_\theta(t_i, x_i) - g(t_i, x_i) \right)^2
\right)
$$

Our total loss becomes

$$
\mathcal{L} = \mathcal{L}^u_{\text{PDE}} + \mathcal{L}^\eta_{\text{ent}} + \mathcal{L}_\text{ic} + \mathcal{L}_\text{bc}
$$

So, we have three neural networks. The training process will involve maximing the loss over $\varphi_\chi$ and $\xi_\nu$ and then minimizing the loss over $u_\theta$. 
$$(u_\theta, \varphi_\chi, \xi_\nu) = \arg\min_{u_\theta} \left( \arg\max_{\varphi_\chi, \xi_\nu} \mathcal{L}(u_\theta, \varphi_\chi, \xi_\nu) \right)$$


# References
1. [[Improving Weak PINNs for Hyperbolic Conservation Laws- Dual Norm Computation, Boundary Conditions and Systems.pdf]]
2. [[variational and topological methods for dirichlet problems with p-laplacian.pdf]]