// Check da Tabela de pontos: roda com `node test-tabela.js`
// Stub do document, porque o script mexe no DOM e aqui nao tem navegador.
const fs = require('fs'), assert = require('assert');

let html = '';
global.document = { getElementById: () => ({ set innerHTML(v) { html = v; } }) };

// Se as referencias do template nao existirem, isto estoura ReferenceError.
eval(fs.readFileSync('Tabela de pontos.js', 'utf8'));

assert.ok(html.includes('matheus'), 'nome do jogador nao foi pra tela');

adicionarVitoria(paulo);                        // +3
adicionarEmpate(paulo);                         // +1
adicionarDerrota(paulo);                        // +0
assert.strictEqual(paulo.pontos, 4, `pontos=${paulo.pontos}, esperado 4`);
assert.strictEqual(paulo.vitoria, 1);
assert.strictEqual(paulo.empate, 1);
assert.strictEqual(paulo.derrota, 1);

console.log('ok - tabela renderiza e pontuacao confere (3+1+0=4)');
