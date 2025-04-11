---
date: 2024-08-17
draft: false
tags:
  - math/programação_linear
---


# Problema de Programação Linear
Sejam $$x \in \mathbb{R}^n, A \in \mathbb{R}^{m\times n}, b \in \mathbb{R}^m$$ 
O PPL genérico tem a seguinte definição:
Minimizar/Maximizar $f(x) = c^tx$
Sujeito a:
	$Ax >= b / Ax <= b /  Ax = b$
	$x >= 0 / x <= 0 / \text{sinal livre}$

No entanto, a forma padrão é necessária para a utilização do algoritmo simplex:
Minimizar/Maximizar $f(x) = c^tx$
Sujeito a:
	$Ax = b$
	$x >= 0$


Observe que $posto(A)\leq m \leq n$
Se $posto(A)=n$, a área factível é um ponto.
Ou seja, espera-se que $m<n$
# References
[[Programação Linear - Antonio Carlos Moretti.pdf]]