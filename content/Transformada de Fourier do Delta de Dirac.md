---
date: 2024-10-12
draft: false
tags:
  - métodos_II
---


# Transformada de Fourier do Delta de Dirac
OBS: O Jayme tem uma demonstração mais complicada, mas não entendo o que tem de errado nessa. 

Aplicando a definição de [[Transformada de Fourier]] no [[Delta de Dirac]], temos a implicação direta:
$$
\mathcal{F}[\delta(x)] = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^\infty \delta(x)e^{ikx}dx =  \frac{1}{\sqrt{2\pi}}
$$

E aplicando a transformada inversa, obtemos uma outra expressão para $\delta(x)$:
$$
\delta(x) = \frac{1}{2\pi} \int_{-\infty}^\infty e^{-ikx}dk
$$

E assim podemos interpretar a seguinte integral dupla:
$$\int_{-\infty}^{\infty} \delta(x) f(x) \, dx = \frac{1}{2\pi} \int_{-\infty}^\infty\int_{-\infty}^\infty e^{-ikx}f(x) \ dk \ dx = f(0)$$

# References
[[Métodos Matemáticos - V2 - Jayme Vaz.pdf]]