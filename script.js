let numberOne  = prompt("Por Favor insira o primeiro numero")
let numberTwo  = prompt("Por Favor insira o segundo numero numero")

let soma  = Number(numberOne) + Number(numberTwo)

let sub = Number(numberOne) - Number(numberTwo)
let mult = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let restDiv = Number(numberOne) % Number(numberTwo)

alert(`
A soma dos dois números ${soma} `)
alert(`A subtração dos dois números; ${sub}`)
alert(`A multiplicação dos dois números;${mult}`)
alert(`A divisão dos dois números;${div}`)
alert(`O resto da divisão dos dois números;${restDiv}`)