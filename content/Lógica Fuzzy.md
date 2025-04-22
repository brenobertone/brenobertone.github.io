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
E finalmente, definimos o $\alpha\text{-nível}$ como o conjunto clássico de elementos com pertinência maior ou igual a $\alpha$: $$[A]^\alpha = \{u \in U \,:\, A(u) \geq \alpha\}, \, \forall \alpha \in(0,1]$$
O $\alpha\text{-nível}$ faz o caminho inverso da função de pertinência e pode ser interpretado como uma função inversa multivalorada.

E se $U$ for um espaço topológico, $[A]^0$ é o fecho de $Supp(A)$, isto é: $$[A]^0 = \overline{\text{Supp}(A)}$$

Usando os teoremas abaixo, podemos representar conjuntos fuzzy em termos de conjuntos clássicos
![[file-20250415142240390.png|400]]
![[file-20250415112032899.png|400]]
## Números Fuzzy
Uma abstração que pode representar um o número "aproximadamente $a$".

É definido como um conjunto fuzzy $A \in \mathcal{F}(\mathbb{R})$ em que todos seus $\alpha \text{-níveis}$ são intervalos compactos e não vazios.

Vamos denotar os $\alpha \text{-níveis}$ de um numero fuzzy como $[A]^\alpha = [a_I^\alpha, a_S^\alpha], \, \, \forall \alpha \ \in [0,1]$
**Exemplo:** $\alpha \text{-níveis}$ de um número fuzzy triangular $\text{T(a, m, b)}$:
- $[a_I^\alpha, a_S^\alpha] = [(m-a)\alpha + a, (m-b)\alpha + b], \, \, \forall \alpha \ \in [0,1]$

Conhecendo as [[Operações Intervalares]], definimos as operações com números fuzzy:
![[file-20250415132552439.png|400]]
**Exemplo:**
![[file-20250415135029831.png|400]]

## Princípio de Extensão de Zadeh
O **Princípio de Extensão de Zadeh** permite aplicar funções clássicas a conjuntos fuzzy.
Seja uma função clássica:
$$
f: X \to Y
$$
E um conjunto fuzzy $A \subseteq X$, com função de pertinência $\mu_A(x)$. A imagem fuzzy $B = f(A) \subseteq Y$ terá função de pertinência:
$$
\mu_B(y) = \sup_{x \in X,\ f(x) = y} \mu_A(x)
$$
Ou seja:
> A pertinência de $y$ no conjunto fuzzy imagem $B$ é o **maior grau de pertinência** entre todos os $x$ que satisfazem $f(x) = y$.
>
   Você está "empurrando" os graus de pertinência através da função $f$, pegando o maior grau que chega em cada ponto da imagem.
### Exemplo:
Se $A$ é definido por:
$$
A = \{ (1,\ 0.2),\ (2,\ 0.5),\ (3,\ 0.9) \}
$$
e a função é:
$$
f(x) = x^2
$$
então:
$$
f(A) = \{ (1,\ 0.2),\ (4,\ 0.5),\ (9,\ 0.9) \}
$$
Porque:
- $f(1) = 1 \Rightarrow \mu_{f(A)}(1) = 0.2$
- $f(2) = 4 \Rightarrow \mu_{f(A)}(4) = 0.5$
- $f(3) = 9 \Rightarrow \mu_{f(A)}(9) = 0.9$
Se houver múltiplos $x$ com o mesmo $f(x)$, use o maior valor de $\mu_A(x)$.

# References
[[Aula 01 - Motivação à Teoria dos Conjuntos Fuzzy e Revisão da Teoria Clássica.pdf]]
[[Aula 02 - Introdução aos Conjuntos Fuzzy e suas Operações Principais.pdf]]
[[Aula 03 - Sistemas Baseados em Regras. Aplicação 1_ Máquina de Lavar Roupas.pdf]]
[[Aula 07 - Caracterização e Representação de Conjuntos Fuzzy.pdf]]
[[Aula 09 - O Princípio de Extensão de Zadeh.pdf]]