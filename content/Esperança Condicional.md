---
tags:
  - me310
draft: false
date: 2025-04-29
---
# Esperança Condicional

$$
E[X \mid Y = y] = 
\begin{cases}
\sum_x x \, p_{X \mid Y}(x \mid y), & \text{caso discreto,} \\
\int_{-\infty}^{\infty} x \, f_{X \mid Y}(x \mid y) \, dx, & \text{caso contínuo.}
\end{cases}
$$

A esperança condicional satifaz todas as propriedades da esperança incondicional

Queremos ainda definir $E[X|Y]$ como uma variável aleatória. 
Para isso, consideramos a função $\psi: \mathbb{R} \to \mathbb{R} | \psi(y) = E[X|Y=y]$
Assim, definimos:

$$
E[X|Y] = \psi(Y)
$$



# References
[[Esperancacondicional.pdf]]