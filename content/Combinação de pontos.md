2024-08-25 22:15
Status: #child
Tags: [[programação linear]]

# Combinação de pontos
#### Imports
```python
import micropip
await micropip.install('numpy')
await micropip.install('matplotlib')
import numpy as np
import matplotlib.pyplot as plt
import random
import typing
```

#### Criando os gráficos
```python

x1 = np.array([1, 3])
x2 = np.array([4, 2])

def linear_combination() -> np.ndarray:
	return x1*(2*random.random() - 1) + x2*(2*random.random() - 1)

def positive_linear_combination() -> np.ndarray:
	return x1*random.random() + x2*random.random()

def convex_combination() -> np.ndarray:
	k = random.random()
	return x1*k + x2*(1-k)

def plot_combinations(combinator: typing.Callable) -> None:
	plt.clf()
	points = [combinator() for i in range(10000)]
	plt.scatter([x[0] for x in points], [x[1] for x in points], c='blue', s=1)
	plt.scatter([x1[0], x2[0]], [x1[1], x2[1]], c='red')

	plt.xlim(0, 5)
	plt.ylim(0, 5)
	plt.xlabel('x')
	plt.ylabel('y')
	plt.show()

```

#### Plotando
```python
# plot_combinations(positive_linear_combination)
# plot_combinations(linear_combination)
plot_combinations(convex_combination)
```

# References
[[Programação Linear - Antonio Carlos Moretti.pdf]]
