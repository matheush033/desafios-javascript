# Desafios JavaScript

Exercícios de lógica em JavaScript puro, sem dependência nenhuma.

## Os desafios

| Arquivo | O que faz | Como rodar |
|---|---|---|
| `Conversor de moedas.js` | Converte um valor de dólar para real e mostra num `alert`. Cotação fixa no código (`5.32`). | Console do navegador |
| `Tabela de pontos.js` | Tabela de pontuação de jogador: vitória vale 3 pontos, empate 1, derrota 0. Os botões atualizam a tela. | Precisa de HTML com `<table id="tabelaJogadores">` |
| `Desbloquear Phone.js` | Lógica de `if/else` comparando senha digitada com a correta. | Fragmento de exercício — `input`, `password`, `unlockPhone()` e `tryAgain()` vêm do enunciado |
| `Mentalista.js` | Vazio — desafio ainda não feito. | — |

## Tabela de pontos

É o único com estado e o único testável. O HTML mínimo:

```html
<table><tbody id="tabelaJogadores"></tbody></table>
<script src="Tabela de pontos.js"></script>
```

Check da pontuação:

```bash
node test-tabela.js
```
