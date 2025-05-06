---
tags:
  - IC-PINN
draft: false
date: 2025-05-04
---
# L2 Convergence for Smooth Approximations of the Inviscid Burgers Equation

We consider the inviscid [[Burger's Equation]]:
$$
\partial_t u + \partial_x f(u) = 0, \quad f(u) = \frac{1}{2}u^2
$$
with initial condition
$$
u_0(x) =
\begin{cases}
1, & x < 0 \\
-1, & x \geq 0
\end{cases}
$$

The entropy solution is time-independent:
$$
u(x) =
\begin{cases}
1, & x < 0 \\
-1, & x \geq 0
\end{cases}
$$

We define a family of smooth approximate solutions $\tilde{u}_\varepsilon(x)$ satisfying:
$$
\tilde{u}_\varepsilon(x) \in
\begin{cases}
[1 - \varepsilon, 1 + \varepsilon], & x < -\varepsilon \\
[-1 - \varepsilon, -1 + \varepsilon], & x > \varepsilon \\
[-1 - \varepsilon, 1 + \varepsilon], & -\varepsilon \le x \le \varepsilon
\end{cases}
$$

We show:
$$
\| \tilde{u}_\varepsilon - u \|_{L^2} \lesssim \sqrt{\varepsilon}
$$

---

### Step 1: Domain Decomposition

Let $D = [-R, R]$ for some $R > 1$, and split the domain into three regions:

- Region I: $x < -\varepsilon$
- Region II: $-\varepsilon \le x \le \varepsilon$
- Region III: $x > \varepsilon$

---

### Step 2: Estimate in Regions I and III

In Region I, $u(x) = 1$ and $\tilde{u}_\varepsilon(x) \in [1 - \varepsilon, 1 + \varepsilon]$, so:
$$
| \tilde{u}_\varepsilon(x) - u(x) | \le \varepsilon
$$

Thus:
$$
\int_{-R}^{-\varepsilon} |\tilde{u}_\varepsilon(x) - u(x)|^2 dx \le \varepsilon^2 (R - \varepsilon)
$$

Similarly for Region III:
$$
\int_{\varepsilon}^{R} |\tilde{u}_\varepsilon(x) - u(x)|^2 dx \le \varepsilon^2 (R - \varepsilon)
$$

---

### Step 3: Estimate in Region II

On $[-\varepsilon, \varepsilon]$, the solution jumps from $1$ to $-1$, and the approximation satisfies:
$$
| \tilde{u}_\varepsilon(x) - u(x) | \le 2 + \varepsilon
$$

Hence:
$$
\int_{-\varepsilon}^{\varepsilon} |\tilde{u}_\varepsilon(x) - u(x)|^2 dx
\le (2 + \varepsilon)^2 \cdot 2\varepsilon \lesssim \varepsilon
$$

---

### Step 4: Combine Estimates

Summing all regions:
$$
\| \tilde{u}_\varepsilon - u \|_{L^2(D)}^2
\le 2\varepsilon^2 (R - \varepsilon) + C\varepsilon
\Rightarrow \| \tilde{u}_\varepsilon - u \|_{L^2(D)} \le C \sqrt{\varepsilon}
$$

---

### Conclusion

The smooth approximations $\tilde{u}_\varepsilon$ converge to the entropy solution $u$ in $L^2(D)$ with rate:
$$
\| \tilde{u}_\varepsilon - u \|_{L^2} \lesssim \sqrt{\varepsilon}
$$

# References