---
tags:
  - physics
  - f315
draft: false
date: 2025-04-28
---
# Angular Momentum of the System
The total angular momentum of the system is the sum of the angular momentum of the center of mass and the angular momentum of the system in relation to the center of mass.

If the net torque is zero, then the angular momentum remains constant.

$$L = R\times P + \sum_\alpha r'_\alpha\times p'_\alpha$$

The angular momentum of a particle is defined as $L = r \times p$, where $r=R+r'$

This allows for representing the position vector in respect to the center of mass

![[file-20250517185321677.png|250]]

Summing over $\alpha$ particles:
	$L = \sum_\alpha L_\alpha = \sum_\alpha (r_\alpha \times p_\alpha) = \sum_\alpha (r_\alpha \times p_\alpha) = \sum_\alpha (r_\alpha \times m_\alpha \dot{r_\alpha})$

Now, using $r_\alpha = R + r_\alpha'$:
	$L = \sum_\alpha ((R + r_\alpha') \times m_\alpha (\dot{R} + \dot{r_\alpha'}))$
	
	$L = \sum_\alpha m_\alpha [(R\times\dot{R}) + (R \times \dot{r_\alpha'}) + (r_\alpha'\times\dot{R}) + (r_\alpha'\times\dot{r_\alpha'})].$

Note that $\sum_\alpha m_\alpha r_\alpha'=0$, so the middle terms also go to zero
$$\implies L = R\times P + \sum_\alpha r'_\alpha\times p'_\alpha$$

# References
- [[Classical Dynamics of Particles and Systems-Thornton.pdf]]