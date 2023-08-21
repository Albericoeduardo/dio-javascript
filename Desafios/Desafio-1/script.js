const saldoAtual = parseFloat(gets("Insira seu saldo atual: "));
const valorDeposito = parseFloat(gets("Insira o valor do deposito: "));
const valorRetirada = parseFloat(gets("Insira o valor de retirada: "));

const saldoAtualizado = parseFloat(saldoAtual + valorDeposito - valorRetirada)

console.log(`Saldo atualizado na conta: ${saldoAtualizado.toFixed(1)}` )