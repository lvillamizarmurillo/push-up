//El ejercicio pide por defecto entre el rango 1000 y 1500
//Pero puede cambiar el rango, jugando con las variables comienzo y final
let comienzo = 1000 
let final = 1500
let comienzoExtra = comienzo
let contador1 = 0
let contador2 = 0
let bandera = false
let prueba1 = 0
let prueba2 = 0
while (bandera!=true) {
    for (let j = comienzo; j <= final;j++){
        for (let i = 0; i < comienzo; i++) {
            prueba1 = comienzo % i
            if (prueba1 == 0) {
                contador1 = contador1 + i
            }
        }
        for (let i = 0; i < final; i++) {
            prueba2 = final % i
            if (prueba2 == 0) {
                contador2 = contador2 + i
            }
        }
        if ((final == contador1) && (comienzo == contador2)) {
            console.log(final + ' y ' + comienzo + ' son numeros amistosos');
            bandera = true
        } else {
            comienzo = comienzo + 1
            contador1 = 0
            contador2 = 0
        }
    }
    final = final - 1
    comienzo = comienzoExtra
}