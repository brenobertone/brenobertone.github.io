---
date: 2024-10-06
draft: false
tags:
  - machine_learning
---


# One-vs-Rest
Estratégia de classificação multiclasse.
Criamos um classificador para cada classe. Nele, a sua classe é positiva e as outras são negativas

A classificação final é aquela com maior confiança individual.

Funciona melhor que o [[One-vs-One]] para:
- classes desbalanceadas
- número grande de classes
- classificadores lentos

# References