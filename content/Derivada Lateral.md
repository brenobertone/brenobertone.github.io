---
date: 2024-08-13
draft: false
tags:
  - métodos_II
---


# Derivada Lateral
Seja uma função $f$ e um ponto $x_0$. A derivada lateral é quando nos aproximamos de $x_0$ positivamente ou negativamente. 
É como se calculassemos a derivada em um ponto infinitesalmente maior/menor que $x_0$.

Formalmente podemos definir como:

$$f(x_0\pm0) = \lim_{x\to x_0^\pm}f(x)$$
$$f'_\text{-}(x_0) = \lim_{h \to 0} \frac{f(x_0 - h) - f(x_0 + 0)}{h}  $$
$$f'_\text{+}(x_0) = \lim_{h \to 0} \frac{f(x_0 - 0) - f(x_0 - h)}{h}  $$
# References
[[Métodos Matemáticos - V2 - Jayme Vaz.pdf]]