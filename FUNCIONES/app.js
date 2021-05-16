/*function bienvenido(){
    return 'Hola Bienvenido a mi caleta'
}
var mensaje = bienvenido();
console.log(mensaje);

//Partes de una funcion
//Entradas(parametros), codigo, salida (return)

function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;
}

var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor)
console.log(cuadradoNumero(5));
*/

/**********************
 * FUNCION QUE CONVIERTE DE GRADOS A FAHRENHEIT.
 *********/

//32F = 0C, 68F = 20C.
// C = (F -32) * 5/9

/* function convertirFahaCelsius(gradoFah){
    var celsius = (gradoFah - 32) * 5 / 9
    return celsius;
}

var tempUno = convertirFahaCelsius(32);
var tempDos = convertirFahaCelsius(68);
console.log(tempUno);
console.log(tempDos);

*/

/***********************************
 * FUNCION CALCULAR EDAD POR AÑO DE NACIMIENTO
 */

/* function calcularEdad(yearNacimiento){
    return 2021-yearNacimiento;
}

var edad1 = calcularEdad(1999);
var edad2 = calcularEdad(2001);
var edad3 = calcularEdad(1974);
var edad4 = calcularEdad(1970);
console.log(edad1);
console.log(edad2);
console.log(edad3);
console.log(edad4);

*/

/************************
 * Ejercicio de codificacion 3
 * 
 * calcular cuantos años le falta a la persona para que se jubile.
 * Una persona se jubila a los 65 años
 * Enviar como datos a la funcion su año de nacimiento y su nommbre.
 */

/*
 edadMardo = 21;
var Nombre1 = 'Mardo';
var edadJubilacion = 65;
var JubilacionM = JubilacionMardo(edadJubilacion, edadMardo)
var yearsrestantes = edadJubilacion - edadMardo;

function JubilacionMardo(yearsrestantes) {
    return edadJubilacion - edadMardo;
}
console.log(Nombre1 +' le faltan ' + yearsrestantes + ' años');


/*********************************************
 * FUNCIONES COMO EXPRESIONES
 *********************************************
var nombre;
var prueba = function(n){
  return 'Hola ' + n; 
}
console.log(prueba(nombre));
*/

//ARGUMENTOS NULOS
/*
var a;
a = null;
var valorNulo = function(a){
    return a;
}
    console.log(valorNulo(a));
*/

//Argumentos por default
/*
var sumar = function(a= 5, b=3, c=3){ //el numero mas igual seria el numero por defecto
    return a + b + c;
}
console.log(sumar(10,null,7));            */

//Plantillas de cadenas (template string)
/*
var nombre = 'Pablo';
console.log(`El nombre es: ${nombre}`);

var a = 5;
var b = 10;
//console.log('La suma es:' +(a + b));
console.log(`La suma es : ${a + b}`);

*/

/****************************
 * Ejercicio 4
 * 
 * Implementar una función que nos permita evaluar el 
 * porcentaje de respuestas positivas y negativas de un examen
 * La función debe recibir el nombre, y la cantidad de respuestas
 * positivas y negativas
 * 
 * La Función debe calcular el porcentaje que representa cada 
 * tipo de respuesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(> 90%), B(70% - 89%), C(45% - 69%), D(<45%)
 * 
 *****************************/

var calcularScore = function( nombre, pos, neg){
    var porPos= (pos / 100) * 100;
    var posNeg= (neg / 100) * 100;
    var score = ''

    if(porPos > 90){
        score = 'A';
    }else if(porPos >=70){
        score = 'B'; 
    }else if(porPos >=45){
        score = 'C';
    }else{
        score = 'D';  
    }
    return `${nombre} tiene el score ${score}, Positivas:${porPos}%, Negativas:${posNeg}%`
}

var resultado = calcularScore('Pablo', 95, 5);
console.log(resultado);



