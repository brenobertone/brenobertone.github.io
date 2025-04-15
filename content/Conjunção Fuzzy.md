---
tags:
  - math/fuzzy
draft: false
date: 2025-04-14
---
# Conjunção Fuzzy

Uma função $\mathcal{D} : [0,1] \times [0,1] \to [0,1]$, crescente em ambos os argumentos, é uma conjunção *fuzzy* se:

$$\mathcal{C}(0,0) = \mathcal{C}(0,1) = \mathcal{C}(1,0) = 0 \ \ e \ \ \mathcal{C}(1,1) = 1$$

Uma norma triangular ou t-norma é uma operação binária  
$\triangle: [0,1] \times [0,1] \to [0,1]$, com $a \triangle b \equiv \triangle(a, b)$, tal que:

$$
\text{1. \ Comutativa:} \ \ \ a \triangle b = b \triangle a
$$
$$
\text{2. \ Associativa:} \ \ \ (a \triangle b) \triangle c = a \triangle (b \triangle c)
$$
$$
\text{2. \ Monótona\ Crescente:} \ \ \ b \leq c \Rightarrow a \triangle b \leq a \triangle c
$$
$$
\text{3. \ Identidade:} \ \ \ a \triangle 1 = a
$$
$\forall \ a, b, c \in [0,1]$.

## Exemplos de T-normas

$$
\text{1. Mínimo: }\ \triangle_M(a, b) = \min(a, b)
$$
$$
\text{2. Produto: }\ \triangle_P(a, b) = a \cdot b
$$
$$
\text{3. Łukasiewicz: } \ \triangle_L(a, b) = \max(0, a + b - 1)
$$
$$
\text{4. Drástica: } \ 
\triangle_D(a, b) =
\begin{cases}
a, & \text{se } b = 1 \\
b, & \text{se } a = 1 \\
0, & \text{caso contrário}
\end{cases}
$$
	
# References
[[Aula 02 - Introdução aos Conjuntos Fuzzy e suas Operações Principais.pdf]]