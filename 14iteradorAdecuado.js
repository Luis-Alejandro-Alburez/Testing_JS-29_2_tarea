/*      ELIJA EL ITERADOR ADECUADO       

Hay muchos mÃ©tod de iteraciÃ³n en JavaScript que puedes
elegir.  AdemÃ¡ de aprender la sintaxis correcto para usar
los mÃ©todos de iteraciÃ³n, tambiÃ©n es importante aprender
a elegir el mÃ©todo correcto para diferentes escensrios.
Los ejercicios a continuaciÃ³n te darÃ¡n la oportunidad
de hacerlo.


INSTRUCCIONES:

PASO 1:
Reemplace la palabra method en la primera llamada al
mÃ©todo con un mÃ©todo que harÃ¡ algo con cada uno de los
valores en la matriz y devolverÃ¡ undefined.

PASO 2:
En la segunda llamada al mÃ©todo, reemplace la palabra
method con un mÃ©todo que devolverÃ¡ una matriz solo con
aquellos elementos mÃ¡s largos que 7 caracteres.

PASO 3:
En la tercera llamada al mÃ©todo, reemplace la palabra
method con un mÃ©todo que acepte una matriz que contenga
mÃºltiples valores y devuelve un solo valor.

PASO 4:
En la cuarta llamada al mÃ©todo, reemplace la palabra method
con un mÃ©todo que devolverÃ¡ una nueva matriz de nÃºmeros
devuletos por la funciÃ³n.

PASO 5:
En la quinta llamada al mÃ©todo, reemplace la palabra
method con un mÃ©todo que devolverÃ¡ un valor booleano.*/

const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.every((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);
console.log(longCities);

// Choose a method that will return a single value
const word = cities.some((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);
console.log(smallerNums);

// Choose a method that will return a boolean value

console.log(nums.every((num) => num < 0));
