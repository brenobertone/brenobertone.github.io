---
date: 2024-08-29
draft: false
tags:
  - machine_learning
  - ms960
---


# Regressão Logística
Sejam:
- uma variável de entrada $x \in \mathbb{R}^n$. 
- E parâmetros treináveis $w \in \mathbb{R}^n$, $b \in \mathbb{R}$

A regressão logistíca é uma função que recebe $x$ e retorna uma probabilidade.

E é definida pela composição da [[Função Sigmóide]] com $w^Tx + b$.
$\implies$ Teremos uma [[Fronteira de Decisão]] linear. 

Podemos criar mais variáveis para contornar isso, caso necessário.
![[Pastedimage20240829165750.png|250]] 
Uma função adequada é $\sigma((w')^Tx' + b)$, onde $x'=[x_1, x_2, x_1^2, x_2^2]$

A melhor função custo é a [[Entropia Cruzada]]
# References
[[Aula 2 MS960.pdf]]