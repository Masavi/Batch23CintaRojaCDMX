// Variables
var miVariable = "Hola";
//console.log("Estoy en la consola");
//console.log(miVariable);
//console.log(miVariable2);

// var -> JAVASCRIPT
let miVariable2 = "ECMA";
//console.log(miVariable2);
 
// Tipos de Datos
let numeroRomanoAntiguo = 10;
let booleano = true;
let texto = "texto";

//console.log(booleano);
//console.log( typeof(booleano) );

//let edad = 20;
//console.log("Eres mayor de edad");

// Estructuras de Control

// CONDICIONAL IF-ELSE
/* let miEdad = 18;

if(miEdad > 17){
    console.log("Eres mayor");
} else if(miEdad < 18){
    console.log("Eres menor");
}
 */


 // CICLOS FOR (FOR LOOPS)

/*  for( let i=0; i<=10; i++){
     console.log(i);
 }



 for( let i=0; i<=25; i++){
    if(i%2 == 0){
        console.log(i + " es par");
    }
 } */

/*
---------------------------------------------
               Ejercicio
A partir de una variable que contenga una cadena de texto,
se debe mostrar mediante un console log esa misma cadena pero
alternando entre minúsculas y mayúsculas

var = "perritosalchicha"

El resultado en consola debe mostrarse como sigue
= "pErRiToSaLcHiChA"

---------------------------------------------
*/


/*
-----------------SOLUCIÓN--------------------
*/

/* 1) ¿Cómo obtengo el tamaño de mi palabra ?
var palabra = "hola";
palabra.length -> devuelve el tamaño

2) ¿Cómo itero sobre mi palabra ?
for (i = 0; i < palabra.length; i++) {
}

3) ¿Cómo sé cuándo es minúscula y cuándo es mayúscula ?
var palabra = "hola"; */

// Los pares (0,2,4..) deben ser minúsculas
//palabra.charAt(0);
//RESULT: h

// Los nones (1,3,5..) deben ser minúsculas
//palabra.charAt(1);
//RESULT: o

/* Haciendo uso de una condición, evaluamos
   si el residuo de i dividio entre 2 es 0.
   Si es así, se trata de un número par.

   if(i%2 == 0)
*/

//4) ¿Cómo muestro en pantalla estas mínusculas y mayúsculas juntas ?

/* Mientras el FOR itera, podemos ir guardando
   en una nueva variable cada letra mínscula o
   mayúscula que se encuentre.

   if(i%2 == 0){
     miNuevaCadena = miNuevaCadena + str.charAt(i).toLowerCase();
   } else miNuevaCadena = miNuevaCadena + str.charAt(i).toUpperCase();

   Luego imprimimos nuestra nueva cadena con un console log.

   -> console.log(miNuevaCadena);
*/


//Integrando las respuestas anteriores, tenemos el siguiente código
/* let str = "perritosalchicha";
let miNuevaCadena = "";

for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
        miNuevaCadena = miNuevaCadena + str.charAt(i).toLowerCase();
    } else miNuevaCadena = miNuevaCadena + str.charAt(i).toUpperCase();
}

console.log(miNuevaCadena); */


// Funciones
function saludar(){
    console.log("Hola Persona!");
}

//saludar();

function saludar2(){
    return "Hola Persona!";
}


/* let resultado = saludar2();
console.log(resultado); */

//console.log(saludar2());

function suma(num1, num2){
    return num1 + num2;
}

//let resultado = suma(5,3);
//console.log(resultado);

function ejercicio(cadena){
                            
    let miNuevaCadena = "";

    for (let i = 0; i < cadena.length; i++) {
        if (i % 2 == 0) {
            miNuevaCadena = miNuevaCadena + cadena.charAt(i).toLowerCase();
        } else miNuevaCadena = miNuevaCadena + cadena.charAt(i).toUpperCase();
    }

    console.log(miNuevaCadena);
}

ejercicio("perritosalchicha");
ejercicio("bernardo");