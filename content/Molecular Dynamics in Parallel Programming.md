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

Works well with conservative forces, which can be derived from a potential field depending only on the particles position. 
$$U=U(r_1​,r_2​,…,r_N​) \implies F_i=-\nabla_{r_i} U(r_1​,r_2​,…,r_N​)$$

---

## Algorithm Basis

The most common algorithm used is the [[Verlet Integration]]

This algorithm cannot be parallelized across time steps due to strong data dependencies between successive states.

However, within each time step, atom updates are **embarrassingly parallel**, since the position and velocity updates for each atom can be computed independently once the forces are known.

---

## Decomposition

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

## Great projects
- **STMV**: 1 million atoms simulated over $50ns$
- **Folding@home**: Using hardware from volunteers over the world to get more than 2 exaflops of computer power
- **Anton**: Specialized supercomputer that can compute simulations of miliseconds

--- 

## Great tools
- GROMACS: Useful for most simulations. Is fast and easy to implement. 
- **OPENMM**: Useful for experimentation. Offers customization and integration with python
- **NAMD**: Useful for scalability. Can scale beyond 500,000 cores.
- **AMBER**: Useful for refined simulations. Offers detailed force fields and precise molecular interactions. 

---


# References
será?  [Intro to Molecular Dynamics: Coding MD From Scratch](https://www.youtube.com/watch?v=ChQbBqndwIA&ab_channel=PolymerTheory)
[Molecular Dynamics in 5 Minutes](https://www.youtube.com/watch?v=veBZYlD6AF4&ab_channel=MDSimulators)
[[molecular dynamics for all.pdf]]
[[Using massively parallel simulation and Markovian models to study protein folding- Examining the dynamics of the villin headpiece.pdf]]