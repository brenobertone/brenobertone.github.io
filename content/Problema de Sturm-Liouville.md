---
date: 2024-09-15
draft: false
tags:
  - math/métodos_I
---


# Problema de Sturm-Liouville

$$
\frac{d}{dx}\left[p(x)\frac{dy}{dx}\right] + \left[\lambda w(x) - q(x)\right]y = 0
$$

onde $p(x)$, $w(x)$ e $q(x)$ são funções conhecidas, $y(x)$ é a função desconhecida e $\lambda$ é o parâmetro chamado de valor próprio.
### Propriedades

1. **Autoadjuntividade**: O operador diferencial $L[y] = \frac{d}{dx}\left[p(x)\frac{dy}{dx}\right] - q(x)y$ é autoadjunto, o que garante que os valores próprios $\lambda$ são reais e que as funções próprias associadas a diferentes valores de $\lambda$ são ortogonais entre si.
2. **Ortogonalidade**: As funções próprias associadas a diferentes valores próprios são ortogonais com relação à função peso $w(x)$:
$$
\int_a^b w(x) y_n(x) y_m(x) dx = 0 \quad \text{se} \quad \lambda_n \neq \lambda_m
$$
3. **Condições de Contorno**: Os problemas de Sturm-Liouville vêm com condições de contorno, que podem ser de Dirichlet (valores fixos nas bordas), Neumann (derivada fixada nas bordas) ou mistas.

#### Exemplo de solução
# References
[[Métodos Matemáticos - V1 - Jayme Vaz.pdf]]