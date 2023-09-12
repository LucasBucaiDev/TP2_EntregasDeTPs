//Ej 1

const archivo = 'archivo.txt';
const fs = require('fs');

function leerArchivoComoString(archivo) {
    let leerArchivo = fs.readFileSync(archivo, 'utf-8')
    return leerArchivo;
}

console.log(leerArchivoComoString(archivo));

//Ej 2

let flag = false;
let newPath = 'Que_tal.txt'
let textoAEscribir = 'Nuevo texto'

function escribirTextoEnArchivo(newPath, textoAEscribir, flag)  {
  if(flag){
    console.log('El archivo no existe');
  } else {
    fs.writeFileSync(newPath, textoAEscribir)
  }
  
}

console.log(leerArchivoComoString(archivo));


//Ej 3
let texto = '123 | 456 | 789 | 1bc | 10'
let separador = ' | '

transformarStringEnArrayDeNumeros = (texto, separador) => {
   let partesDeArray = texto.split(separador);
   let numerosDeArray = partesDeArray.filter((partesDeArray) => !isNaN(Number(partesDeArray)))
   let numerosConvertidos = numerosDeArray.map((numerosDeArray) => Number(numerosDeArray));
    return numerosConvertidos
}
console.log(transformarStringEnArrayDeNumeros(texto, separador));

//Ej 4
let arrayNumeros = [123, 456, 789, 10] 
let separador2 = ','
transformarArrayDeNumerosAUnSoloString = (arrayNumeros, separador2) => {
    let output = arrayNumeros.join(separador2)
    return output
}
console.log(transformarArrayDeNumerosAUnSoloString(arrayNumeros, separador2));

//Ej 5
let array1 = [1, 5, 10]
let array2 = [2, 3, 8, 11]

combinarDosArrays = (array1, array2) => {
    let newArray = array1.concat(array2)
    let newOutput = newArray.sort((a,b) => a-b)
    return newOutput
}
console.log(combinarDosArrays(array1, array2));

//Ej 6
let arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]

combinarNArrays = (arrays)  => {
    let newArrayFormArrays = arrays.flat()
    let newOutput2 = newArrayFormArrays.sort((a,b) => a-b)
    return newOutput2
}
console.log(combinarNArrays(arrays));
