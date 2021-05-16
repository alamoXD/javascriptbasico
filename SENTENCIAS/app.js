/**********************************
 * SENTENCIAS CONDICIONALES
 */

/*var nombre = 'Pablo';
var edad = 70;
// edad < 12 es un niño
// edad > 11, es de 18 , es un adolecente
// edad > 17, es < 60, es un adulto
// edad > 60, es un anciano

if (edad <12){
    console.log(nombre + ' es un niño');
}else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente');
}else if ((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto');
}else{
    console.log(nombre + ' es un anciano.');
}*/

/**********************************************
 * OPERADOR TERNARIO
 ***************************/

/* var nombre = 'Pablo';
var edad = 17;
edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' es un adolescente'); */

/************************************************
 * SENTENCIA SWITCH
 **********************************************/

/* var mes = 8;
 switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
        default:
        console.log('Mes no considerado en esta lista');
}
*/


/************************************
 * Sentencias repetitivas - Bucles
 * Sentencia For
 * Sentencia While
 * Sentencia Do..While
 */

//Sentencia for

/*for (var i = 0;i <= 10;i++){
    console.log(i);
}*/


//for (var i = 0;i <= 10;i+=2){
  //  console.log(i);
//}

/******************************************
 * SENTENCIA WHILE
 **************************************

var i = 1;
while(i <= 10){
    console.log(i);
    i++;
} /*

/****************************************
 * SENTENCIA DO..WHILE
 ***********************

var i = 1;
do{
    console.log(i);
    i++
}while(i <=10)
*/

/***********************************
 * VALORES VERDADEROS Y FALSOS
 */

//Valores falsos: undefined, null, 0, 
//Valores verdaderos: NOR valores falses


/*var edad;
edad = 10

if(edad){
    console.log('Variable esta definida');
}else{
    console.log('Variable no definida');
}   




/***********************
 * Ejercicio de sentencias
 */


/*************************************
 * Tienes dos alumnos, Pablo y Maria.
 * Pablo tiene las siguientes notas en el curso: 14, 8, 16.
 * Maria tiene las siguientes notas: 12,18,10.
 * 
 * Calcular el promedio de cada alumno, ademas indicar quien tiene mas promedio e indicar si esta aprobado 
 * (MEDIA MINIMA 13)
 */

var alumno1 = 'Pablo';
var alumno2 = 'Maria';

var MediaPablo = (14 + 8 + 16) /3;
var MediaMaria = (12+ 18 + 16) /3;
MediaPablo >= 13 ? console.log(MediaPablo + ' esta aprobado') : console.log(MediaPablo + ' esta suspenso');
MediaMaria >= 13 ? console.log(MediaMaria + ' esta aprobada') : console.log(MediaMaria + ' esta suspensa');
if(MediaMaria > MediaPablo){
    console.log(' Maria tiene mas media que Pablo');
}else{
    console.log('Pablo tiene mas media que Maria');
}
       