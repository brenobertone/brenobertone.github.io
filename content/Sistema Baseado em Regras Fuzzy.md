---
tags:
  - math/fuzzy
draft: false
date: "{{2025-04-15}}"
---
# Sistema Baseado em Regras Fuzzy
Vamos estudar como um sistema baseado em regras fuzzy funciona em cima do exemplo da máquina de lavar roupa.

Variáveis independentes: Peso e sujeira
Variável dependente: Quantidade de detergente

Podemos dividir esse processo em três etapas:

**Dicionário:** Define conjuntos fuzzy sobre as variáveis
![[file-20250415083124375.png|200]]![[file-20250415083145962.png|200]]
![[file-20250415082116245.png|200]]![[file-20250415082136176.png|200]]
**Base de Regras:** Estabelece relação entre as variáveis
![[file-20250415082200552.png|300]]
**Método de Inferência:** Usado para obter o output do sistema
Os dois principais métodos de inferência são:
## Mamdani
Esse método terá como output um conjunto fuzzy, mas permite a interpretação de um número real utilizando a defuzzificação. 
![[file-20250415083300976.png|200]]![[file-20250415083312033.png|200]]
### Passos: 
1. Calcular a ativação de cada regra, usando o mínimo entre cada variável
![[file-20250415082828274.png|450]]
2. Calcular a função de pertinência do output como a união dos $w_i$ com o consequente adequado da regra
![[file-20250415083031766.png|450]]
3. Calcular o output real usando centroide
![[file-20250415083444582.png|450]]

## Takagi-Sugeno
Esse método terá como output uma função real. 
![[file-20250415084250171.png|200]]![[file-20250415084300651.png|200]]
### Passos:
1. Calcular a ativação de cada regra, usando o mínimo entre cada variável
![[file-20250415082828274.png|450]]
2. Calcular o output usando a média ponderada do consequente da regra pelas ativações.
![[file-20250415084340969.png|450]]

# References
[[Aula 03 - Sistemas Baseados em Regras. Aplicação 1_ Máquina de Lavar Roupas.pdf]]
[[Aula 04 - Sistemas Baseados em Regras. Aplicação 2_ Backing Up a Truck..pdf]]
[[Aula 05 - Método de Inferência de Takagi-Sugeno.pdf]]