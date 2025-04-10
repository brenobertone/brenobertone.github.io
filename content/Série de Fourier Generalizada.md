---
date: 2024-09-04
draft: false
tags:
  - métodos_II
---


# Série de Fourier Generalizada
Seja $\{ \phi_n(x)\}_{n=0}^\infty$ um conjunto funções ortogonais em $[a, b]$ com peso $\rho$.
Então, os coeficientes de Fourier serão:
$$c_n = \frac{\int_a^b \phi_n^*(x) f(x) \rho(x) \, dx}{\int_a^b |\phi_n(x)|^2 \rho(x) \, dx} = \frac{\langle \phi_n | f \rangle}{\|\phi_n\|^2}.$$

Quando $f$ e $\phi_n$ são funções polinomiais, podemos calcular os $n$ primeiros $\phi_n$ com a [[Fórmula de Rodrigues]] e usá-los como base para representar $f$
##### Exemplo com [[Polinômios de Legendre]]
![[Pastedimage20240905090242.png|450]]![[Pastedimage20240905100759.png|499]]

##### Exemplo com polinômios de Laguerre
![[Pastedimage20240917134712.png|450]]

# References
[[Métodos Matemáticos - V2 - Jayme Vaz.pdf]]
[[Série de Fourier]]
[[Ortogonalidade de Funções]]