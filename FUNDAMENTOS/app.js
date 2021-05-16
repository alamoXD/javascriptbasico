/********************* 
**VARIABLES  
**********************/
/*var primernombre = 'Mardo';
console.log(primernombre);

var edad = 34;
var sueldo = 1800.90;

console.log(edad);

var tienetrabajo = false;
console.log (tienetrabajo);

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

tienetrabajo = null;
console.log (tienetrabajo); */

/*var primerNombre,edad,sexo, esSoltero;
primerNombre = "Mardo"
edad = "21"
sexo = "M"
esSoltero = false
console.log('El nombre es:' + primerNombre +', y su edad es:' + edad + ', ¿Es soltero?:' + esSoltero);
 
edad = 'Veinte';
console.log(edad);


/*************
 * OPERADORES-Matemáticas (+,-,*,/)
 ************

var edadMardo, edadCarva, diferenciaEdad, sumadeEdades, yearActual, yearMardo, yearCarva;

edadMardo = 22;
edadCarva = 21;
yearActual = 2021;


diferenciaEdad = edadMardo - edadCarva;
sumadeEdades = edadCarva + edadMardo;

yearMardo = yearActual - edadMardo
yearCarva = yearActual - edadCarva

console.log(diferenciaEdad);
console.log(sumadeEdades);
console.log("Año en que nació Mardo:" + yearMardo);
console.log("Año en que nació Carva:" + yearCarva);  
console.log(yearActual * 5);
console.log(yearActual / 2);

//OPERADORES LÓGICOS

var mayorMardo = edadMardo < edadCarva;
console.log(mayorMardo);
//el == sirve para ver la igualdad...

//OPERADOR typeof 
console.log(typeof edadMardo);
console.log(mayorMardo);
console.log(typeof 'Mardo es mayor que Carva'); */


//OPERADORES UNARIOS ARITMÉTICOS
//++ Incremento
//-- Decremento

/*var edadBelen = 20;
var edadCristina = 21;

//edadBelen++;
console.log(++edadBelen);

//console.log(--edadBelen); NO FUNCIONA MIRAR BIEN

//OPERADORES DE ASIGNACION
//=
var a = 5;
var b = 18;

//ESTO SIRVE PARA RESUMIR OPERACIONES 
// a = a + b
a += b;
a -= b;
a *= b; 
a /= b;
var c;
c = a % b; // % (Operador Modulo) devuelve el resto de una division.
*/

//EJERCICIO DE CODIFICACION
//Se tienen los siguientes datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/*Formula:  IMC: al peso dividido entre la altura al cuadrado, 
luego comparar e indicar si el IMC de Carlos es superior al de LUIS*/

//Solucion:

var imcLuis = pesoLuis / alturaLuis** 2;
var imcCarlos = pesoCarlos / alturaCarlos** 2;

console.log('La masa corporal de Carlos es:' + imcCarlos);
console.log('La masa corporal de Luis es:' + imcLuis);

var diferenciaMasa = imcCarlos > imcLuis;
console.log('El indice de masa corporlas de Carlos es superior:' + diferenciaMasa);

