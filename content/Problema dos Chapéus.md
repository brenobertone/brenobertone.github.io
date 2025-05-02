---
tags:
  - me310
draft: false
date: 2025-04-29
---
# Problema dos Chapéus
Temos $N$ pessoas. Vamos calcular a esperança e a variância do número de pessoas que saem com o próprio chapéu.

Seja $X$ o número de pessoas que saem com o próprio chapéu:

$$
X = X_1 + X_2+ \ ... \ + X_N, \quad 
\begin{cases}
X_i = 1 \text{, se a i-ésima pessoa pega o próprio chapéu} \\
X_i = 0 \text{, caso contrário}
\end{cases}
$$
Obs: $X_i = \mathbb{1_{A_i}}$ 

## Esperança de $X$:
$$
E[X] = \sum_{i=1}^n E[\mathbb{1_{A_i}}] = \sum_{i=1}^n P[A_i] = N \frac{1}{N} =1
$$

## Variância de $X$:
$$
Var(X) = Var(\sum_{i=1}^n E[\mathbb{1_{A_i}}]) = \sum_{i=1}^n Var(\mathbb{1_{A_i}}) + 2 \sum_{1 \le i \le j \le N} Cov(\mathbb{1_{A_i}}, \mathbb{1_{A_j}})
$$
Onde:
$$Var(\mathbb{1_{A_i}}) = E[\mathbb{1_{A_i}}^2] - E[\mathbb{1_{A_i}}]^2 = P[A_i] - P[A_i]^2 = \frac{1}{N} - \frac{1}{N^2}$$
$$
Cov(\mathbb{1_{A_i}}, \mathbb{1_{A_j}}) = E[\mathbb{1_{A_i}}\mathbb{1_{A_j}}] - E[\mathbb{1_{A_i}}]E[\mathbb{1_{A_j}}] = E[\mathbb{1_{A_i \cap A_j}}] - P(A_i)P(A_j) = 
$$
$$= P(A_i \cap A_j) - P(A_i)P(A_j) = P(A_i \cap A_j) - \frac{1}{N^2}$$
$$
\text{Ainda temos que: }P(A_i \cap A_j) = P(A_i|A_j)P(A_j) = \frac{1}{N-1}\frac{1}{N}
$$
$$
\implies Cov(\mathbb{1_{A_i}}, \mathbb{1_{A_j}}) = \frac{1}{N-1}\frac{1}{N} - \frac{1}{N^2}
$$

E finalmente (exercício resolver o somatório!): 
$$
Var(X) = \sum_{i=1} [\frac{1}{N} - \frac{1}{N^2}] + 2 \sum_{1 \le i \le j \le N} [\frac{1}{N-1}\frac{1}{N} - \frac{1}{N^2}] = 1
$$

# References