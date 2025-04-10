2024-10-24 16:55
Status: #child
Tags: [[ms960]] [[machine learning]]

# Siamese Neural Network
É a associação do output da mesma rede com inputs distintos.

A ideia foi introduzida no DeepFace como uma métrica de distância entre as imagens de faces.

Nesse caso, é removido o último layer da rede de reconhecimento facial, e o feature map é usado como uma representação vetorial da imagem. 

O objetivo é encontrar uma rede tal que se $x \neq y$, o output da rede é grande e se $x = y$ o output é grande.

Uma boa de conseguir isso é usando uma [[Triplet Loss]]
# References
[[DeepFace- Closing the Gap to Human-Level Performance in Face Verification.pdf]]
[[Aula 13 MS960.pdf]]