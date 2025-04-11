---
date: 2024-08-20
draft: false
tags:
  - math/programação_linear
---


# Mudança de variável em PPL
Em um problema padrão temos $x>=0$.
As mudanças para cada um dos casos possíveis são as seguintes:

 $x<=0, x=-x' \implies x'>=0$

x é livre de sinal
Substituímos ele por duas outras variáveis positivas. 
$x = x_{+} - x_{-}$
Na solução ótima $x_{+}=0 \vee x_{-}=0$, acredito que isso ocorra pelo uso de [[Direção Extrema]].

# References
[[Programação Linear - Antonio Carlos Moretti.pdf]]