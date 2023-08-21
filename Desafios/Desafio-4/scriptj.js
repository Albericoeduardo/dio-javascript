const valorInicial = parseFloat(prompt());
const taxaJuros = parseFloat(prompt());
const periodo = parseInt(prompt());

const taxa_juros = taxaJuros / 100;
console.log(taxa_juros)

let valorFinal = (valorInicial * ((1 + taxa_juros) ** periodo))

//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.

console.log('Valor final do investimento: R$', valorFinal.toFixed(2));