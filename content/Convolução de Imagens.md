2024-09-25 17:00
Status: #baby
Tags: [[machine learning]] [[ms960]]

# Convolução de Imagens
Sejam:
- Uma imagem $X \in \mathbb{R}^{h \times w \times c}$
- Um kernel $W \in \mathbb{R}^{k \times k \times c}$

A dimensão da imagem $X*W$ será dada por:
$$n_{h/w} = \left\lfloor \frac{h/w - k + 2p}{s} + 1 \right\rfloor$$
Onde $p=$ padding,  $s=$ stride

Exemplo de duas convoluções
![[Pastedimage20240925172842.png|450]]
Perceba que após uma convolução, a imagem resultante tem apenas um canal.

![[Pastedimage20240925173143.png|450]]

# References
[[Aula 10 MS960.pdf]]