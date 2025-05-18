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

$$x(t_{n+1}) \approx x_{n+1} = x_{n} + v_{n}\Delta t + \frac{A(x_{n})\Delta t^2}{2}$$
$$v(t_{n+1}) \approx v_{n+1} = v_{n} + \frac{A(x_{n}) + A(x_n+1)}{2}\Delta t$$


# References
[[https://en.wikipedia.org/wiki/Verlet_integration]]