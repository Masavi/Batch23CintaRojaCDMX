// Variables (X)
// Tipos de Datos (X)
// Estructuras de Control (X)
// Funciones (X)

/* function miFuncion(){
    console.log("Soy una función");
} */

/* let miFuncion = () => {
    return "Hola! Soy una arrow function!";
} */

let miFuncion = () => {
    console.log("Hola! soy una arrow function!");
}

/* 
console.log(miFuncion()); */

let resta = (num1, num2) => {
    let resultado = num1 - num2;
    return resultado;
} 

// SCOPE -> ALCANCE

// Variable Global
let numero = 10;

let multiplicar = () => {
    return numero * numero;
}

/* console.log(multiplicar()); */



let exponenteSuma = () => {
    
    return (suma(5, 3))*(suma(5,3)) 
}

let suma = (num1, num2) => {
  // Variable Local
  let numero = num1 + num2;
  return numero;
};

/* console.log(exponenteSuma()); */

// Arreglos y Objetos

// Arreglos

let arreglo = [];

/* console.log(arreglo);
console.log(typeof(arreglo)); */

arreglo = [
    "manzana",
    "pera",
    "pinia"
];

/* console.log(arreglo[2]); */

// ¿Cómo llenar un arreglo con un For?

let arregloNumeros = [];

for(let i=0; i<3; i++){
    //let numero = i + 1;
    arregloNumeros.push(i+1);
}

/* console.log(arregloNumeros); */
arregloNumeros[5] = "Hola";
/* console.log(arregloNumeros); */

let directores = [
    "Stanley Kubrick",
    "Quentin Tarantino",
    "Guillermo del Toro",
    "Miyasaki",
    "Alfonso Cuaron",
    "Jean Goddard",
    "Michael Bay",
    "Luis Buñuel"
];

//console.log(directores[0]);
//console.log(directores.length);

// ¿Cómo leer los elementos de un arreglo?
/* for(let i= (directores.length - 1); i >= 0; i--){
    console.log(i);
    console.log(directores[i]);
} */

function cuantosParametros(){
    // Cosas mágicas pasan...
    console.log(arguments.length);
}   

//cuantosParametros(1,"hola",true,[1,"hola",true]);

//cuantosParametros(1, true, [5,4,2,true], "hola") -> 4


let miArreglo = [
    1,
    "texto",
    false
];

let objeto = {
    numero: 10,
    booleano: true,
    arreglo: [1,2,3],
    funcion: () => {
        console.log("Soy funcion");
    }
}

console.log(objeto.funcion());

/* console.log(objeto["numero"]);
console.log(objeto.numero); */