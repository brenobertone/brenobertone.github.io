2024-09-12 14:30
Status: #child
Tags: [[métodos II]]

# Escala e reflexão delta de Dirac
Queremos definir $\delta(ax)$, $a \neq 0$. 

Aplicando a mudança de variável $ax=y$, e lidando com os casos $a > 0$ e $a < 0$ chegamos na expressão:
$$
\int_{-\infty}^{\infty} \delta(ax) \phi(x) \, dx = \frac{1}{|a|}\int_{-\infty}^{\infty} \delta_n(y) \phi(y/a) \, dy = \frac{\phi(0)}{|a|}
$$
Ou seja,
$$
\delta(ax) = \frac{\delta(x)}{|a|}
$$

# References
[[Métodos Matemáticos - V2 - Jayme Vaz.pdf]]
[[Delta de Dirac]]