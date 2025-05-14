---
tags: 
draft: false
date: 2025-05-14
---
# Verlet Integration
A numerical method to integrate Newton's equation of motion, i.e., to compute the trajectory and velocity of a particle from the forces acting on it using $F=ma$.

## Definition
Consider second order differential equation of type $\ddot{x}=A(x(t))$ with initial conditions $x(t_0)=x_0$ and $\dot{x}(t_0)=x_0$

Let $x_1 = x_0 + v_0\Delta t + \frac{1}{2}A(x_0)\Delta t^2$ 
We can approximate 
$$x(t_n) \approx x_{n} = x_{n-1} - v_{n-1}\Delta t + A(x_{n-1})\Delta t^2$$
$$v(t_n) \approx v_{n} = v_{n-1} + \frac{A(x_{n-1}) + A(x_n)}{2}\Delta t$$


# References
[[https://en.wikipedia.org/wiki/Verlet_integration]]