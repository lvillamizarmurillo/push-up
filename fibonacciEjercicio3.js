//ejercicio 3
let lista = [0, 1]
let resultado = 0
let n = 11
//let n = parseInt(prompt('Digite un número'))
for (let i = 1; i < n; i++){
    resultado = lista[(i-1)]
    resultado = resultado + lista[i]
    lista.push(resultado)
}
console.log(lista);
