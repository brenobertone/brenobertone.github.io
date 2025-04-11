---
date: 2024-10-17
draft: false
tags:
  - math/matematica_IV
---


# Integral real com variável complexa
Seja a integral $\int_{-\infty}^\infty \frac{1}{x^2+1}dx$

Podemos calcular a integral de contorno $\oint_C \frac{1}{z^2+1}dz = \int_{-R}^R \frac{1}{z^2+1}dz + \int_{C_R}\frac{1}{z^2+1}dz$
![[Pastedimage20241017215231.png|100]]
Pelo [[Teorema dos Resíduos]], temos que 
$$\oint_C \frac{1}{z^2+1}dz = 2\pi i \frac{1}{2i} = \pi$$
Pelo [[Lema de Jordan]], temos que
$$\int_{C_R}\frac{1}{z^2+1}dz=0$$

Assim: 
$$\oint_C \frac{1}{z^2+1}dz = \int_{-R}^R \frac{1}{z^2+1}dz = \int_{-\infty}^\infty \frac{1}{x^2+1}dx = \pi$$


# References
[[James Ward Brown, Ruel V. Churchill - Variáveis complexas e aplicações (2015).pdf]]