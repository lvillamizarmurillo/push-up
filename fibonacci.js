let primerNumero = [0, 1]
let resultado = 0
let n = 11
//let n = parseInt(prompt('Digite un número'))
for (let i = 1; i < n; i++){
    resultado = primerNumero[(i-1)]
    resultado = resultado + primerNumero[i]
    primerNumero.push(resultado)
}
console.log(primerNumero[n]);