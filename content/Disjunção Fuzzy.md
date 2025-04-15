---
tags:
  - math/fuzzy
draft: false
date: 2025-04-14
---
# Disjunção Fuzzy

Uma função $\mathcal{D} : [0,1] \times [0,1] \to [0,1]$, crescente em ambos os argumentos, é uma disjunção *fuzzy* se:

$$\mathcal{D}(0,0) = 0 \ \ e \ \ \mathcal{D}(0,1) = \mathcal{D}(1,0) = \mathcal{D}(1,1) = 1$$

Uma conorma triangular ou t-conorma é uma operação binária  
$\triangle: [0,1] \times [0,1] \to [0,1]$, com $a \triangle b \equiv \triangle(a, b)$, tal que:

$$
1. \ Comutativa: \ \ \ a \triangle b = b \triangle a
$$
$$
2. \ Associativa: \ \ \ (a \triangle b) \triangle c = a \triangle (b \triangle c)
$$
$$
3. \ Monótona\ Crescente \ \ \ b \leq c \Rightarrow a \triangle b \leq a \triangle c
$$
$$
	1. \ Identidade \ \ \ a \triangle 0 = a
$$
$\forall \ a, b, c \in [0,1]$.

$$
\text{1. Máximo: }\ \nabla_M(a, b) = \max(a, b)
$$
$$
\text{2. Soma probabilística: }\ \nabla_P(a, b) = a + b - a \cdot b
$$
$$
\text{3. Łukasiewicz: } \ \nabla_L(a, b) = \min(1, a + b)
$$
$$
\text{4. Drástica: } \ 
\nabla_D(a, b) =
\begin{cases}
a, & \text{se } b = 0 \\
b, & \text{se } a = 0 \\
1, & \text{caso contrário}
\end{cases}
$$


# References
[[Aula 02 - Introdução aos Conjuntos Fuzzy e suas Operações Principais.pdf]]