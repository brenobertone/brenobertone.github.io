2024-09-04 19:41
Status: #child
Tags: [[métodos I]]

# Polinômios de Legendre
São uma família de polinômios ortogonais no intervalo $[-1, 1]$
$$
\int_{-1}^{1} P_n(x) P_m(x) dx = \frac{2}{2n+1} \delta_{mn}
$$
Os primeiros polinômios de Legendre são:
1.	$P_0(x) = 1$
2.	$P_1(x) = x$
3.	$P_2(x) = \frac{1}{2}(3x^2 - 1)$
4. $P_3(x) = \frac{1}{2}(5x^3 - 3x)$
E podem ser gerados usando a [[Fórmula de Rodrigues]]
$$
P_n(x) = \frac{1}{2^n n!}\frac{d^n}{dx^n}[(x^2-1)^n]
$$
São as soluções da EDO:
$$
(1 - x^2) \frac{d^2 y}{dx^2} - 2x \frac{dy}{dx} + n(n+1)y = 0
$$



# References
[[Métodos Matemáticos - V1 - Jayme Vaz.pdf]]