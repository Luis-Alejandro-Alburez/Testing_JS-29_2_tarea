/*        DocumentaciÃ³n del iterador      

Existen muchos mÃ©todos incorporados (built-in) de matrices,
la lista completa de cuales son la puedes encontrae 
en MDN's Array iteration methods page
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

La documentaciÃ³n de cada mÃ©todo contiene varias seccione:

1. Una descripciÃ³n corta de lo que hace el mÃ©todo.
2. Un bloque con la sintaxis del mÃ©todo.
3. Una lista de parÃ¡metros que acepta o requiere el mÃ©todo.
4. El valor de retorno de la funciÃ³n.
5. Una extensa descripciÃ³n.
6. Ejemplos de uso.
7. InformaciÃ³n adicional.

En las siguientes instrucciones, hay algunos errores
en el cÃ³digo. Utilia la documentaciÃ³n de un mÃ©todo
determinado para determinar el error o completa
el espacio en blanco para que el cÃ³digo
se ejecute correctamente.
*/

/*INSTRUCCIONES:
    
    Paso 1:
    En el cÃ³digo existe una matriz llamada words.
    Queremos crear una nueva matriz de palabaras
    interesantes.
    Lo primero que queremos hacer es comprobar si hay
    palabras con una longitud inferior a 6 caracteres.
    Hay una falla en la llamada al mÃ©todo words.some().
    Corrija este mÃ©todo para que true se muestre en consola.
    
    Para obtener mÃ¡s informaciÃ³n consulte la
    documentaciÃ³n del mÃ©todo some() en MDN.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    
    
    PASO 2:
    El mÃ©todo .some() devolviÃ³ true, lo que significa que
    hay palabras en la matriz con menos de seis caracteres.
    Use el mÃ©todo .filter() para guardar las palabras
    con mÃ¡s de 5 caracteres en una nueva variable llamada
    interestingWords, declarada como const

    PASO 3:
    En la Ãºltima lÃ­nea esta el cÃ³digo
    console.log(interestingWords.every((word) => { } ));

    Completa el cÃ³digo entre parÃ©ntesis para comprobar
    si cada elemento tiene mÃ¡s de 5 caracteres.
    Si lo hace, el resultado serÃ¡ true.
    
    */
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Falta algo en la llamada al mÃ©todo a continuaciÃ³n.

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Utiliza filter para crear un nuevo array

const interestingWords = words.filter((word) => {
  return word.length > 5;
});

console.log(interestingWords);

// Asegurate de descomentar el siguiente cÃ³digo y arregla
// el error antes de ejecutarlo

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);
