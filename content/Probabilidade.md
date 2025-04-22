---
tags:
  - math/probability
draft: false
date: 2025-04-20
---
# Probabilidade

## Espaço de Probabilidade
Definimos como a tripla $(\Omega, \mathcal{F}, P)$, onde:
- $\Omega$ é o espaço amostral
- $\mathcal{F}$ é o conjunto de eventos: a coleção de subconjuntos mensuráveis de $\Omega$, formando uma [[Sigma-Álgebra]].
- $P$ é uma função de probabilidade, que satifaz os axiomas de Kolmogorov:
	- $P(A) \ge 0$
	- $P(\Omega) = 1$
	- $P\left( \bigcup_{n=1}^{\infty} A_n \right) = \sum_{n=1}^{\infty} P(A_n)$, onde $A_n$ são eventos disjuntos

## Independência e Probabilidade Condicional
Considerando dois eventos $A$ e $B$.

Eles são independentes $\iff$ $P(A \cap B) = P(A) \cdot P(B)$ 
Eles são dependentes $\iff$ $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$, $P(B) \ne 0$
Teorema de Bayes: $P(A|B) = \frac{P(B|A)P(A)}{P(B)}$

## Variáveis Aleatórias
Uma variável aleatória é uma função $X: \Omega \rightarrow \mathbb{R}$, denotada por letras maiúsculas. 
Definimos sua **função de distribuição acumulada** como: $F_X(x) = P(X \leq x), \quad -\infty < x < \infty.$

Para uma variável aleatória discreta, sua **função de probabilidade**: $F_X(x) = \sum_{y \leq x} p_X(y), \quad -\infty < x < \infty$

E no caso contínuo, a função **densidade de probabilidade**: $F_X(x) = \int_{-\infty}^{x} f_X(y) \, dy, \quad -\infty < x < \infty$
Podemos encontrar uma probabilidade de um intervalo a partir da densidade: $P(a \leq X \leq b) = \int_a^b f_X(x) \, dx$

## Esperança (Valor Esperado)
A **esperança** ou **valor esperado** de uma variável aleatória $X$ é uma medida da tendência central da distribuição de $X$. É calculada como a média ponderada de todos os possíveis valores de $X$, onde as probabilidades dos valores são usadas como pesos.

Para uma variável aleatória discreta: $\mathbb{E}[X] = \sum_{i} x_i P(x_i)$
Para uma variável aleatória contínua: $\mathbb{E}[X] = \int_{-\infty}^{\infty} x f_X(x) \, dx$

## Variância
A **variância** de uma variável aleatória $X$ é uma medida da dispersão dos valores de $X$ em torno de sua expectativa. 

![[file-20250421215355694.png|250]]
A variância é dada por: $\text{Var}(X) = \mathbb{E}[(X - \mathbb{E}[X])^2] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$
A variância quantifica o quanto os valores de $X$ se afastam da média.

## Momentos
Os **momentos** são dados por: $\mathbb{E}[X^n], \quad n = 1, 2, \dots$
Enquanto os **momentos centrais** são definidos como: $\mathbb{E}[(X - \mathbb{E}[X])^n], \quad n = 1, 2, \dots$

Em particular, a **média** é o primeiro momento ($n = 1$) e a **variância** é o segundo momento central ($n = 2$).

Além disso, temos os **momentos absolutos** e **momentos absolutos centrais**, dados por: $\mathbb{E}[|X|^r]$ e $\mathbb{E}[|X - \mathbb{E}[X]|^r], \quad r > 0$

## Distribuição Conjunta e Independência
Definimos a **função de distribuição conjunta**: $F_{X,Y}(x, y) = P(X \leq x, Y \leq y), \quad -\infty < x, y < \infty$

No caso discreto: $p_{X,Y}(x, y) = P(X = x, Y = y), \quad -\infty < x, y < \infty$
E no caso contínuo: $f_{X,Y}(x, y) = \frac{\partial^2 F_{X,Y}(x, y)}{\partial x \, \partial y}, \quad -\infty < x, y < \infty$

E caso as variáveis sejam independentes:
$F_{X,Y}(x, y) = F_X(x) \cdot F_Y(y)$
$p_{X,Y}(x, y) = p_X(x) \cdot p_Y(y)$
$f_{X,Y}(x, y) = f_X(x) \cdot f_Y(y)$

## Vetor Aleatório
![[file-20250422082346833.png]]
![[file-20250422082401788.png]]
![[file-20250422082500459.png]]
![[file-20250422082516021.png]]
![[file-20250422082555035.png]]
![[file-20250422082714926.png]]
![[file-20250422082745386.png]]
![[file-20250422090707780.png]]
![[file-20250422090722749.png]]
![[file-20250422090816867.png]]


# References
[[Allan Gut - An Intermediate Course in Probability.pdf]]