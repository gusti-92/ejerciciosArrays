'use strict'

/* 
1. Pida 6 números por pantalla y los meta en un array.
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola.
3. Ordenarlo y mostrarlo.
4. Invertir su órden y mostrarlo.
5. Mostrar cuántos elementos tiene el array.
6. Búsqueda de un valor introducido por un usuario, que nos diga si lo encuentra y su índice.
(Se valorará el uso de funciones).
*/

var lista = [];


for (let index = 0; index < 6; index++) {
    var numeros = prompt('introduce 6 números');
    lista.push(numeros);
    document.write('<li>' + numeros + '</li>');

   };

lista.sort();
lista.reverse()
console.log(lista);
console.log('la cantidad de elementos en este array es de ' + lista.length);

var busquedas = lista.find (list => list == 6);
console.log( busquedas)  

var busqueda = lista.findIndex(list=> list = 6);
console.log('el número de índice del número 6 es ' + busqueda);
