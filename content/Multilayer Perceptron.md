2024-09-21 14:39
Status: #baby
Tags: [[machine learning]] [[ms960]]

# Multilayer Perceptron
Rede neural vanilla.
![[Pasted image 20240921152417.png|350]]

Treinada usando [[Backpropagation]] para aproximar o gradiente e [[Gradiente Descendente]] para atualizar os parâmetros.

#### Inicialização dos pesos
- Começar com pesos aleatórios: Se todos começam igual, a rede se comporta como apenas um neurônio.
- Começar com valores pequenos: $W$ é grande $\implies$ $Z=wx+b$ é grande $\implies \sigma'(z) \approx 0 \implies$ treinamento lento 

#### Definição matemática
$\bullet ^{[K]}$ representa $\bullet$ na k-ésima camada 

Sejam:
- A entrada $x \in \mathbb{R}^{n^{[k]}}$
- O número de neurônios $n^{[k]}$
- A função de ativação $g^{[k]}(x)$
- O peso $w^{[k]} \in \mathbb{R}^{n^{[k]} \times n^{[k-1]}}$
- O bias $w^{[k]} \in \mathbb{R}^{n^{[k]} \times 1}$
- $Z^{[k]}=(w^{[k]})^T A^{[k-1]} + w^{[k]}$
- $A^{[k]}=g^{[k]}(x)(Z^{[k]})$. Definimos $A^{[0]}=x$

# References
[[Aula 3 MS960.pdf]]