---
date: 2024-10-12
draft: false
tags:
  - math/métodos_II
---


# Transformada de Fourier de senos e cossenos
Saindo da definição de [[Transformada de Fourier]] e da fórmula de Euler, podemos definir essas transformadas como:

$$\mathcal{F}_c[f(x)] = \sqrt\frac{2}{\pi} \int_0^\infty f(x)cos(kx)dx$$
$$\mathcal{F}_s[f(x)] = \sqrt\frac{2}{\pi} \int_0^\infty f(x)sin(kx)dx$$
Observe que, independentemente da paridade de $f(x)$, a transformada inversa retorna uma função par para cosseno e ímpar para seno.

Assim, garantimos as igualdades apenas para $x>0$:
$\mathcal{F^{-1}}_c[\mathcal{F}_c[f(x)]] = f(x)$ 
$\mathcal{F^{-1}}_s[\mathcal{F}_s[f(x)]] = f(x)$

# References
[[Métodos Matemáticos - V2 - Jayme Vaz.pdf]]