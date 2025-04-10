2024-10-22 14:48
Status: #child
Tags: [[programação linear]]

# Custo Relativo
É o critério para escolha quem entra na base $B$ do [[Simplex]]. 
Avaliamos qual é que mais minimiza a função, isto é procuramos o $s_i$ mínimo.

Sua expressão é o vetor coluna:
$$S_i = (c^T_N  -C^T_B A^{-1}_B A_N), \quad i\in N$$


Estudando [[Solução básica de um PPL]], temos que:
$$x_b = A_B^{-1}b - A_B^{-1}A_NX_N$$
E também que:
$$f(x) = f(x_B|x_N)=[\frac{c^T_B}{c^T_N}][x_B|x_N] = c^T_Bx_B + c^T_Nx_N$$
Combinando, chegamos em:
$$
f(x) = c^T_B A^{-1}_B b + (c^T_N  -C^T_B A^{-1}_B A_N)x_N
$$

# References
[[Programação Linear - Antonio Carlos Moretti.pdf]]
https://www.youtube.com/watch?v=0qaAG8wdGHQ&ab_channel=PedroMunari