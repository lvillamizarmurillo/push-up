//ejercicio 3
let lista = [0, 1]
let resultado = 0
let n = parseInt(prompt('Digite un número para listar la cantidad de numeros a mostrar de los fubonacci: '))
for (let i = 1; i < n; i++){
    resultado = lista[(i-1)]
    resultado = resultado + lista[i]
    lista.push(resultado)
}
console.log(lista);
