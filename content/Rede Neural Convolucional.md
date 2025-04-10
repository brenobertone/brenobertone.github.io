---
date: 2024-09-25
draft: false
tags:
  - machine_learning
  - ms960
---


# Rede Neural Convolucional
Tipo de rede mais usado no processamento de imagens.

A convolução permite um detector de features invariante a translação
$\implies$ quantidade de parâmetros é reduzida

É uma rede que intercala camadas de:
- Convolução
- [[Camada de Pooling]]
- Fully-connected (Layer de um [[Multilayer Perceptron]])

Na camada de convolução, fazemos $g^{[k]}(W^{[k]} * X^{[k]} + b^{[k]})$, análogo ao fully-connected

# References
[[Aula 10 MS960.pdf]]