const valor = parseFloat(prompt());
let saldo = 0;

if (valor > 0) {
  saldo += valor;
  console.log(`Deposito realizado com sucesso!\n Saldo atual: ${saldo}`)
} else if (valor < 0) {
  console.log("Valor invalido! Digite um valor maior que zero.")
} else {
  console.log("Encerrando o programa...")
}