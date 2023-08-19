let array = ["string", 1, 2, "palavra", true]
array.push()
array.pop()
array.shift()
array.unshift(3)
array.indexOf()

console.log(array.splice(0, 3))

console.log(array)

array.forEach(function(i){
    console.log(i)
})

var xicara = {
    cor: "azul",
    tamanho: "grande",
    funcao: tomarCafe()
}