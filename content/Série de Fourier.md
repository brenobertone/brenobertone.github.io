---
date: 2024-08-10
draft: false
tags:
  - métodos_II
---


# Série de Fourier
É uma série trigonométrica usada para representar funções periódicas. A forma geral de uma série de Fourier é dada por:
$$\frac{a_0}{2} + \sum_{n=1}^{\infty} a_ncos(nx) + b_nsen(nx)$$

Onde $a_n$ e $b_n$ são dados por:

$$
a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)dx
$$
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)cos(nx)dx \qquad b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)sen(nx)dx
$$

A [[Ortogonalidade de Funções]] desempenha um papel importante no estudo das séries de Fourier. É útil saber que o conjunto $\{1, cos(nx), sen(nx)\}$,  $n\in \mathbf{N}$ é ortogonal em $[-\pi, \pi]$

#### Exemplo de cálculo dos coeficientes de Fourier
![[attachments/imagens em notas/08_25_2024_74643_PM.pdf]]

# References
[[Métodos Matemáticos - V2 - Jayme Vaz.pdf]]