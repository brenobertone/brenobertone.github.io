---
date: 2024-10-17
draft: false
tags:
  - métodos_II
---


# EDP com sistema de equações características
Seja o problema:
$$
\begin{cases}
xy^2 u_x - yx^2 u_y = x^2 (u - 2y), \\
u(t, t) = 5t.
\end{cases}
$$

Com as equações características:
$$
\frac{dx}{xy^2} = \frac{dy}{-yx^2} = \frac{du}{x^2 (u - 2y)} = dt
$$
Usamos a parametrização
$$
(x, y, u) = (x(t, s), y(t, s), u(t, s))
$$

Encontramos $s$ em função de $x$ e $y$:
$\frac{dx}{xy^2} = \frac{-dy}{yx^2} \implies \frac{dx}{y} = \frac{-dy}{x} \implies x \, dx = -y \, dy \implies \frac{1}{2} x^2 = -\frac{1}{2} y^2 + f_1(s)$
$\implies x^2 + y^2 = f_1(s) \implies f_1^{-1}(x^2 + y^2) = s$

E com base nisso, encontramos $u$:
$\frac{dy}{-yx^2} = \frac{du}{x^2(u-2y)} \implies -\frac{dy}{y} = \frac{du}{u-2y} \implies -udy + 2ydy = ydu \implies 2y \, dy = u \, dy + y \, du \implies 2y \, dy = d(uy) \implies y^2 = uy + f_2(s)$
$\implies uy - y^2 = f_2(s) = f_2(f_1^{-1}(x^2 + y^2)) = f(x^2 + y^2)$

Assim, $uy - y^2 = f(x^2 + y^2)$
$5t^2 - t^2 = f(2t^2) \to 4t^2 = f(2t^2)$
# References
[[Métodos Matemáticos - V2 - Jayme Vaz.pdf]]