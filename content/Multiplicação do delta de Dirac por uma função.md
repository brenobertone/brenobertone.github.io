2024-09-12 14:44
Status: #child
Tags: [[métodos II]]

# Multiplicação do delta de Dirac por uma função
Queremos encontrar uma interpretação para $f(x)\delta(x-a)$, onde $f(x)$ é infinitamente diferenciável. 
Claramente, $f(x)\phi(x)$ é uma [[Função Teste]]. Assim:
$$
\int_{-\infty}^{\infty} f(x)\delta(x-a) \phi(x) \, dx 
= 
f(a)\phi(a)
=
\int_{-\infty}^{\infty} f(a) \delta(x-a) \phi(x) \, dx
$$
E portanto,
$$
\begin{cases}
f(x)\delta(x-a) = f(a)\delta(x-a)
\\
x \delta(x) = 0
\end{cases}
$$
A segunda expressão evidencia o suporte da função delta ser igual a $x=0$

# References
[[Métodos Matemáticos - V2 - Jayme Vaz.pdf]]
[[Delta de Dirac]]