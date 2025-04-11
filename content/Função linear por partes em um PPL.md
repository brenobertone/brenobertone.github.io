---
date: 2024-09-15
draft: false
tags:
  - math/programação_linear
---


# Função linear por partes em um PPL
Podemos lidar com funções lineares por partes em um PPL criando variáveis auxiliares, definindo a função objetivo com elas e aplicando as restrições do problema.

A função objetivo será definida como:
- $f(x) = z_1(x_1) + z_2(x_2) + ... + z_n(x_n)$
Onde $z_n$ é uma função linear por partes.


#### Exemplo da página 122
Modelaríamos a produção do produto 1 da seguinte maneira:

$x_1 = x_1^1+ x_1^2$
$z_1(x_1) = 300x_1^1 + 250x_1^2$
s.a.
$0 \leq x_1^1 \leq 50$
$0 \leq x_1^2$

E essa seria uma parcela do PPL a ser resolvido
![[attachments/imagens em notas/09_15_2024_21150_PM.pdf]]

# References
[[Programação Linear - Antonio Carlos Moretti.pdf]]