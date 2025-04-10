---
date: 2024-09-20
draft: false
tags:
  - métodos_I
---


# Funções de Bessel
As funções de Bessel de primeira espécie $J_n(x)$ são soluções da equação diferencial de Bessel de ordem $n$, dada por:

$$x^2 \frac{d^2 y}{dx^2} + x \frac{dy}{dx} + (x^2 - n^2) y = 0$$
A solução regular dessa equação em $x = 0$ é a função $J_n(x)$, que pode ser escrita como uma série de potências:

$$J_n(x) = \sum_{k=0}^{\infty} \frac{(-1)^k}{k! \, \Gamma(k + n + 1)} \left(\frac{x}{2}\right)^{2k+n}$$



# References
[[Métodos Matemáticos - V1 - Jayme Vaz.pdf]]