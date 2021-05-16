/*****************************************
 * ARREGLOS EN JAVASCRIPT
*/
var nombre = ['Pablo', 'Carlos', 'Ana', 'Teresa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

console.log(nombre[2]);
console.log(vegetales[1]);
console.log(vegetales[1]);

nombre[1] = 'Jose';
console.log(nombre[1]);
vegetales[2] = 'Nabo';
console.log(vegetales[2]);

console.log(nombre.length); //length siver para ver la cantidad de elementos de un array

/**************************
 * OPERACIONES CON ARREGLOS
 */


var frutas = ['pera', 'manzana', 'uva', 'sandia'];
console.log(frutas);

for (var i = 0; i <= frutas.length - 1; i++){
    console.log(frutas[i]);
}