2024-09-18 23:00
Status: #baby
Tags:

# Git Subtree
É uma forma de juntar repositórios distintos.

Sejam A e B repositórios.
Rodando esse comando em A, vamos criar uma pasta com todo o código de B em A
`git subtree add --prefix=<directory> <repository_url> <branch>`

O histórico de B é mantido em A.
# References
https://git-memo.readthedocs.io/en/latest/subtree.html#adding-a-subtree-to-a-project
