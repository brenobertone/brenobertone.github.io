2024-10-06 16:23
Status: #baby
Tags: [[machine learning]]

# One-vs-One
Estratégia de classificação multiclasse.
Para cada par de classes no problema, criamos um classificador binário.

Assim, se temos $n$ classes, teremos $\frac{n(n-1)}{2}$ classificadores.

Para a classificação final, escolhemos a classe com mais vitórias individuais.

É bem utilizado com:
- poucas classes (número de classificadores cresce quadraticamente)
- classes balanceadas
- classificadores rápidos

# References