2024-11-12 15:10
Status: #child
Tags: [[ms960]] [[machine learning]]

# Triplet Loss
É uma função custo que associa um input de referência com um input associado e com um não associado. 

Seu objetivo é aprender semelhança e dissimilhança. 

A referência é conhecida como âncora, o associado é o positivo e o não associado o negativo.

A distância âncora-positivo deve ser minimizada e a distância âncora-negativo deve ser maximizada.

Adicionamos também um hiperparâmetro chamado margem $\alpha$ para evitar as soluções triviais.
$$\|f(A) - f(P)\|^2 - \|f(A) - f(N)\|^2 + \alpha \leq 0$$
# References
[[Aula 13 MS960.pdf]]