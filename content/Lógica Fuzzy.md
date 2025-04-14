---
tags:
  - math/fuzzy
draft: false
date:
---
# Lógica Fuzzy
## Contexto
Lógica Fuzzy é uma teoria para modelar conceitos vagos:
- Um número é próximo de outro?
- A comida está quente ou fria?
- Quantos grãos de areia formam um monte?

A modelagem de um [[Sistema Baseado em Regras Fuzzy]] aplicações em diversas áreas, como
- Automação e controle
- Previsão de séries temporais
- Reconhecimento de padrões
- Biomatemática

## Conjuntos Fuzzy
Segundo a lógica clássica, ou crisp, um elemento pertence ou não a um conjunto — sem meio-termo.
Na lógica fuzzy, teremos uma [[função de pertinência]] que descreve o grau de pertencimento de um elemento ao conjunto:
$$
\varphi_A: U \rightarrow [0,1]
$$
Assim, dois conjuntos fuzzy A e B são iguais se e somente se suas funções de pertinência são iguais:
$$
A=B \iff \varphi_A(x) = \varphi_B(x), \forall x \in U
$$
### Intersecção
A intersecção de conjuntos fuzzy é determinada a partir da criação de uma nova função de pertinência, através de uma [[Conjunção Fuzzy]]: $$\varphi_{A\cap B} = \mathcal{C}(\varphi_A(x), \varphi_B(x)), \ \ \forall x \in U$$
### Produto Cartesiano
De forma semelhante à intersecção, definimos o produto cartesiano: $$(A \times B)(x,y) = \mathcal{C}(A(x), B(y)), \ \ \forall(x,y) \in U \times V$$
### União
Para a união, usamos uma [[Disjunção Fuzzy]]
$$(A\cup B)(x) = \mathcal{D}(A(x), B(x)), \ \ \forall x \in U$$
### Complemento
Definimos uma negação fuzzy como uma função crecente como $\eta: [0, 1] \rightarrow [0, 1]$ onde $\eta(0)=1$ e $\eta(1)=0$. Em uma negação forte, $\eta(\eta(a))=a$. O complemento é definido como: $$A^C(x) = \eta(A(x)), \ \ \forall x \in U$$

## Números Fuzzy
Uma abstração que

# References
[[Aula 01 - Motivação à Teoria dos Conjuntos Fuzzy e Revisão da Teoria Clássica.pdf]]
[[Aula 02 - Introdução aos Conjuntos Fuzzy e suas Operações Principais.pdf]]
[[Aula 03 - Sistemas Baseados em Regras. Aplicação 1_ Máquina de Lavar Roupas.pdf]]