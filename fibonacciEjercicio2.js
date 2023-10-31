//ejercicio 1
let lista = [0, 1]
let resultado = 0
let contador = 0
let n = parseInt(prompt('Digite un número para revisar si esta entre los fubonacci: '))
while (n > lista[contador]) {
    contador = contador+1
    resultado = lista[(contador - 1)]
    resultado = resultado + lista[contador]
    lista.push(resultado)
}
if (n == lista[contador]) {
    console.log('El numero '+n+', si forma parte de los numeros fubonacci\n:)');
} else {
    console.log('El numero ' + n + ', no forma parte de los numeros fubonacci\n:(');
}