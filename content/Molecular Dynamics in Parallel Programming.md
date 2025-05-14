---
tags: 
draft: false
date: 2025-05-14
---
# Molecular Dynamics in Parallel Programming
At the atomic level, physics models for forces and interactions are used to compute the molecular trajectories. 
![[file-20250514135537230.gif|150]]

Numerical integrals are used to solve Newton's second law.

Its vastly used in biophysics, chemistry, and material sciences

---

The most common algorithm used is the [[Verlet Integration]]

This algorithm cannot be parallelized across time steps due to strong data dependencies between successive states.

However, within each time step, atom updates are **embarrassingly parallel**, since the position and velocity updates for each atom can be computed independently once the forces are known.

---

The simulations can be further parallelized using domain decomposition

Dividing the simulation into many spatial subdomain, and assign one subdomain for each processor.

Each of them will handle the particles and interactions inside it and communicate with neighbor processes for boundary interactions
![[file-20250514142014427.png|150]]

**Pros:**
- scales well with particle number
- reduces number of interactions: $\binom{n_0 + n_1 + n_2 + n_3}{2} \ge \binom{n_0}{2} + \binom{n_1}{2} + \binom{n_2}{2} + \binom{n_3}{2}$
- locality: short-range forces only affect closer particles
**cons:**
- load imbalance for unequal particle distribution
- hard on non homogeneous meshs
- long-range forces may require more communication between subdomains.

---

## Success example clipped from wikipedia
[STMV](https://www.ks.uiuc.edu/Research/STMV/)
[Using massively parallel simulation and Markovian models to study protein folding: Examining the dynamics of the villin headpiece](https://pubs.aip.org/aip/jcp/article/124/16/164902/295393/Using-massively-parallel-simulation-and-Markovian)
![[file-20250514134847744.png|450]]

# References
[[https://en.wikipedia.org/wiki/Molecular_dynamics]]
[Molecular Dynamics in 5 Minutes](https://www.youtube.com/watch?v=veBZYlD6AF4&ab_channel=MDSimulators)
[[molecular dynamics for all.pdf]]
[[Using massively parallel simulation and Markovian models to study protein folding- Examining the dynamics of the villin headpiece.pdf]]