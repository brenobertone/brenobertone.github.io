Apresentação sobre os estudos de Weak PINNs para Leis de Conservação Hiperbólicas

---

Vamos rapidamente lembrar o que é uma PINN - Physics Informed Neural Network

---

Uma rede neural que incorpora um problema físico em seu treinamento.

Mas como? 

---

Primeiro, escolhemos algum problema modelado por uma EDP. 

O principal exemplo estudado aqui é a equação de Burgers: $\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = \nu \frac{\partial^2 u}{\partial x^2}$

---

Em especial sua versão não viscosa, onde $\nu=0$:

$$\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = 0$$


---

E então definimos um resíduo da EDP, onde $u_\theta$ é uma rede neural totalmente conectada.
$$f_\theta(x, t) := \frac{\partial u_\theta}{\partial t} + u_\theta \frac{\partial u_\theta}{\partial x}$$

---

E então se minimiza a seguinte loss, com gradiente descendente:
$$

\mathcal{L} = \mathcal{L}_{\text{data}} + \mathcal{L}_{\text{physics}} =

\sum_{i=1}^{N_u} |u_\theta(x_i, t_i) - u_i|^2 +

\sum_{i=1}^{N_f} |f_\theta(x_i, t_i)|^2

$$

---

Problema: A solução $u$ nem sempre é contínua

![[file-20250427182248290.gif|300]]

---

Nesses casos, é possível provar que mesmo aproximando bem a solução $u_\theta$, o resíduo da EDP não se minimiza

---

Tomando o caso simplificado, 
$$\left\{
\begin{array}{ll}
u_t + \left( \frac{1}{2}u^2 \right)_x = 0 & \text{in } [0, T) \times \mathbb{R}, \\
u_0(x) = 
\begin{cases}
1, & x < 0 \\
-1, & x \geq 0
\end{cases} & \text{on } \mathbb{R},
\end{array}
\right.$$
Com solução $u(t,x) = \begin{cases} 1, & x < 0 \\ -1, & x > 0 \end{cases} \quad \text{for all } t > 0$

---

E considerando uma família de soluções $\tilde{u}$ tal que $$\tilde{u}(x) \in \begin{cases} [1 - \epsilon, 1 + \epsilon] & \text{for } x < -\epsilon \\ [-1 - \epsilon, -1 + \epsilon] & \text{for } x > \epsilon \\ [-1 - \epsilon, 1 + \epsilon] & \text{for } -\epsilon \leq x \leq \epsilon \end{cases}$$
Nessas condições, é possível provar que $\tilde{u}$ converge para $u$ com taxa $\sqrt\epsilon$, mas que o resíduo é proporcional a $\frac{1}{\sqrt\epsilon}$

---

Um simples experimento, disponível em [Visualization of Shock Profiles and Residuals in Standing Shock Burgers' Equation.ipynb](https://colab.research.google.com/drive/1EtmwEFxQ-yuxj_cbUfcQZbqGULXyOPdK?usp=sharing) deixa o problema bem claro:

![[file-20250505194616006.png|300]]![[file-20250505194620802.png|300]]![[file-20250505194626427.png|300]]

---

Uma solução para isso é usar a forma fraca da EDP, onde


---
# References
- [[Burger's Equation]]
- [[PINN]]
- [[Why do classical PINNs fail]]
- [[Weak Formulation of PDEs]]
- [[Entropy Solution]]
- [[L2-W(-1, p) norm]]
- [[Loss in weak PINN Architecture]]