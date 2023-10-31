let contadorAceptan = 0
let contadorRechazan = 0
let contadorEmpatan = 0
let universidades = parseInt(prompt('Digite el numero de universidades: '))
for(let i = 0;i<universidades;i++){
    let contA = 0
    let contR = 0
    let contB = 0
    let contX = 0
    let nombre = prompt('Digite el nombre de la universidad numero '+(i+1))
    console.log(`Universidad: ${nombre}`);
    let alumnosaVotar = parseInt(prompt('Digite la cantidad de alumnos que va a votar'))
    for(let j=0;j<alumnosaVotar;j++){
        let voto = prompt('Digite el voto del estudiante numero '+(i+1)).toUpperCase()
        switch(voto){
            case 'A': contA=contA+1;break;
            case 'B': contB=contB+1;break;
            case 'R': contR=contR+1;break;
            case 'X': contX=contX+1;break;
        }
        console.log(`Voto: ${voto}`);
    }
    console.log(`${nombre}: ${contA} aceptan, ${contR} rechazan, ${contB} blancos, ${contX} nulos`);
    if(contA<contR){
        contadorRechazan=contadorRechazan+1
    }else if(contA>contR){
        contadorAceptan=contadorAceptan+1
    }else{
        contadorEmpatan=contadorEmpatan+1
    }
}
console.log(`Universidades que aceptan: ${contadorAceptan}\nUniversidades que rechazan: ${contadorRechazan}\nUniversidades con empate: ${contadorEmpatan}`);