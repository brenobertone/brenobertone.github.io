---
date: 2024-10-06
draft: false
tags:
  - machine_learning
  - ms960
---


# Non-max supression
Non-Maximum Suppression (NMS) é um algoritmo utilizado em processamento de imagens e visão computacional para selecionar a melhor caixa delimitadora (bounding box) em tarefas de detecção de objetos. Ele ajuda a eliminar caixas redundantes que se sobrepõem, mantendo apenas as que têm a maior pontuação de confiança.

## Como funciona?
1. **Classificação das caixas**: As caixas são classificadas de acordo com sua pontuação de confiança.
2. **Seleção da caixa máxima**: A caixa com a maior pontuação é selecionada como a caixa principal.
3. **Remoção de caixas sobrepostas**: Todas as outras caixas que têm uma sobreposição significativa (IOU - Intersection Over Union) com a caixa principal são removidas.
4. **Repetição**: O processo é repetido para as caixas restantes até que não haja mais caixas a serem processadas.
# References
[[Algoritmo YOLO]]