let multiplicador = 37
let multiplicando = 12
//let multiplicador = parseInt(prompt('Ingrese multiplicador: '))
// let multiplicando = parseInt(prompt('Ingrese multiplicando: '))
let resultado = 0
let prueba = 0
while (multiplicador != 1) {
    prueba = multiplicador % 2
    if (prueba == 1) {
        resultado = resultado + multiplicando
    }
    multiplicador = parseInt(multiplicador / 2)
    multiplicando = multiplicando * 2
}
resultado = resultado + multiplicando
console.log('hola '+resultado);