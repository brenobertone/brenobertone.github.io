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
### Caracterização e Representação
Um conjunto Fuzzy é definido como **normal** se possui ao menos um elemento com pertinência 1:
$$\sup_{u \in U} A(u) = 1 \iff \forall \epsilon > 0, \, \exists u \in U \,:\, A(u) > 1 - \epsilon$$
E **subnormal** se:
$$\sup_{u \in U} A(u) < 1$$
O **cerne** é definido como: $$Cerne(A) = \{u \in U \,:\, A(u) = 1\}$$
Assim, podemos observar que o $Cerne(A)$ é o conjunto clássico com todos os elementos de pertinência 1. Se o conjunto fuzzy é subnormal, $Cerne(A) = \emptyset$

O **suporte** de A é definido como o conjunto clássico de todos os elementos que possuam *alguma* pertinência: $$Supp(A) = \{u \in U \,:\, A(u) > 0\}$$
E finalmente, definimos o $\alpha$-nível como o conjunto de elementos com pertinência maior ou igual a $\alpha$: $$[A]^\alpha = \{u \in U \,:\, A(u) \geq \alpha\}, \, \forall \alpha \in(0,1]$$
E se $U$ for um espaço topológico, $[A]^0$ é o fecho de $Supp(A)$, isto é: $$[A]^0 = \overline{\text{Supp}(A)}$$
??????????????????????????????????????????????????????????
![[file-20250415112032899.png|400]]
## Números Fuzzy
Uma abstração que pode representar um o número "aproximadamente $a$".

É definido como um conjunto fuzzy $A \in \mathcal{F}(\mathbb{R})$ em que todos seus $\alpha \text{-níveis}$ são intervalos compactos e não vazios.

Vamos denotar os $\alpha \text{-níveis}$ de um numero fuzzy como $[A]^\alpha = [a_I^\alpha, a_S^\alpha], \, \, \forall \alpha \ \in [0,1]$
**Exemplo:** $\alpha \text{-níveis}$ de um número fuzzy triangular $\text{T(a, m, b)}$:
- $[a_I^\alpha, a_S^\alpha] = [(m-a)\alpha + a, (m-b)\alpha + b], \, \, \forall \alpha \ \in [0,1]$




# References
[[Aula 01 - Motivação à Teoria dos Conjuntos Fuzzy e Revisão da Teoria Clássica.pdf]]
[[Aula 02 - Introdução aos Conjuntos Fuzzy e suas Operações Principais.pdf]]
[[Aula 03 - Sistemas Baseados em Regras. Aplicação 1_ Máquina de Lavar Roupas.pdf]]
[[Aula 07 - Caracterização e Representação de Conjuntos Fuzzy.pdf]]


![[file-20250414201536370.png]]
![[file-20250414201917813.png]]
