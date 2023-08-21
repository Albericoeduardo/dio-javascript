let saldoTotal = parseInt(prompt());
let valorSaque = parseInt(prompt());
let saldoDisponivel = saldoTotal;

if (valorSaque <= saldoDisponivel) {
    saldoDisponivel -= valorSaque
    console.log(`Saque realizado com sucesso. Novo saldo: ${saldoDisponivel}`)
}else if (valorSaque > saldoDisponivel) {
    console.log("Saldo insuficiente. Saque não realizado")
}