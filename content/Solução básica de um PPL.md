---
date: 2024-09-15
draft: false
tags:
  - math/programação_linear
---


# Soluções básicas de um PPL
São as soluções de um [[Problema de Programação Linear]] com mais variáveis que equações de restrição.
Fixamos $(n-m)$ variáveis como $0$ e resolvemos o sistema $m \times m$ resultante.

Seja um PPL na forma padrão, com $n>m$ e $posto(A)=m$.
Vamos permutar as colunas de $A$ e particionar o problema:
$$
\begin{align*}
A &= [B \,|\, N] \\
c &= [c_B \,|\, c_N] \\
x &= [x_B \,|\, x_N]
\end{align*}
$$
Por construção, $B$ será uma matriz base $\iff$ $posto(B)=m$.
Temos:
$Ax = Bx_B + Nx_N = b$ 
onde fazemos $x_N = 0$ para encontrar as soluções básicas $x_B=B^{-1}b$

# References
[[Programação Linear - Antonio Carlos Moretti.pdf]]