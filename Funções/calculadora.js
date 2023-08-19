function calculadora() {
    const operacao = prompt("Qual operação voce deseja?")
    const num1 = Number(prompt("Qual o numerador?"))
    const num2 = Number(prompt("Qual o denominador?"))

    switch(operacao){
        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
        break;
        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
        break;
        case "/":
            console.log(`${num1} / ${num2} = ${num1 / num2}`)
        break;
        case "*":
            console.log(`${num1} * ${num2} = ${num1 * num2}`)
        break;
    }
}

calculadora();