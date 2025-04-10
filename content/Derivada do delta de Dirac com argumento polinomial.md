2024-09-17 14:09
Status: #baby
Tags: [[métodos II]]

# Derivada do delta de Dirac com argumento polinomial
![[Pasted image 20240917140925.png|150]]
$$\int_{-\infty}^{\infty} \delta'(x^3+3x) \phi(x) dx$$
$$Seja \quad w = x^3+3x \implies dw=(3x^2+3)dx = x'(w)dx$$
$$ =\int_{-\infty}^{\infty} \delta'(w) \frac{\phi(x(w))}{x'(w)} dw = -\int_{-\infty}^{\infty} \delta(w) \frac{d}{dx} \left(\frac{\phi(x(w))}{x'(w)}\right) dw = -\int_{-\infty}^{\infty} \delta(w) \frac{\phi'(x(w)) \cdot x'(w) - \phi(x(w)) \cdot x''(w)}{(x'(w))^2} dw$$
Onde $x(w) = \frac{2^{1/3}}{\left( \sqrt{w^2 + 4} - w \right)^{1/3}} - \frac{\left( \sqrt{w^2 + 4} - w \right)^{1/3}}{2^{1/3}} \implies x(0) = 0 , \quad x'(0)=\frac{1}{3} \quad e \quad x''(0)=0$
$$= -\frac{\phi'(0) \cdot 1/3 - \phi(0) \cdot 0}{(1/3)^2} = -3 \phi'(0) = 3\int_{-\infty}^{-\infty}\delta'(x)\phi(x)dx$$

# References
[[Métodos Matemáticos - V2 - Jayme Vaz.pdf]]
[[Derivada do delta de Dirac]]