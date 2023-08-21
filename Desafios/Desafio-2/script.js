// const saldoAtual = parseFloat(prompt("Insira seu saldo atual: "));
// const valorDeposito = parseFloat(prompt("Insira o valor do deposito: "));
// const valorRetirada = parseFloat(prompt("Insira o valor de retirada: "));

// const saldoAtualizado = (saldoAtual + valorDeposito - valorRetirada).toFixed(1)

// console.log(saldoAtualizado)

const quantidadeAtivos = parseInt(prompt());

//Entrada dos tipos de ativos
const ativos = [ ];
for (let i = 0; i < quantidadeAtivos; i++) {
  const codigoAtivo = prompt();
  ativos.push(codigoAtivo);
}

ativos.sort();

for (j of ativos) {
  console.log(j)
}
