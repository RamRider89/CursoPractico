
/**
Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
*/

let tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// SOLUCION 1

tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    // ExpertPlus
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


/**
 *  Replica el comportamiento de tu condicional anterior con if, else y else if, 
 * pero ahora solo con if (sin else ni else if).
 * */

// SOLUCION 2

tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


/**
 * 
 * 💡 Bonus: si ya eres una experto en el lenguaje, te desafío a comentar cómo 
 replicar este comportamiento con arrays u objetos y un solo condicional. 😏
 * */
let tipoDeSuscripcion = "Expert";
let arrayTipoDeSuscripcion = ["Basic","Free","Expert","ExpertPlus"];
let arrayMessagesToUsers = {
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Free": "Solo puedes tomar los cursos gratis",
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

Object.freeze(arrayTipoDeSuscripcion);
Object.freeze(arrayMessagesToUsers);

try {
    arrayTipoDeSuscripcion.forEach( function(element, index) {
        if (element == tipoDeSuscripcion) {
            menssageToUser(element);
            throw "Tipo de subscripcion encontrada.";
        }
        console.log("Buscando el tipo de subscripcion " + index);
    });
} catch (e) {
  console.log(e);
}

function menssageToUser(argument) {
    console.log("Cuenta: " + argument + " -> " + arrayMessagesToUsers[argument]);
}



/**
 * 💡 Bonus: si ya eres una experto en el lenguaje, te desafío a comentar cómo 
 replicar este comportamiento con arrays u objetos y un solo condicional. 😏
 * */
let tipoDeSuscripcion = "Expert";
let arrayTipoDeSuscripcion = ["Basic","Free","Expert","ExpertPlus"];
let arrayMessagesToUsers = {
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Free": "Solo puedes tomar los cursos gratis",
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

Object.freeze(arrayTipoDeSuscripcion);
Object.freeze(arrayMessagesToUsers);


function confirmarSubscripcion(argument) {
    if (arrayTipoDeSuscripcion[argument]) {
        console.log("Cuenta: " + argument + " -> " + arrayMessagesToUsers[argument]);
    }
}

confirmarSubscripcion(tipoDeSuscripcion);



/**
 *  Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
 * Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
 * */

//Basic Math Quiz
let num = 10;
let num2 = 10;
const result = num + num2;
let questions = {
  q1: `Cuanto es ${num} + ${num2}`
}
function Quizzer() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
    Quizzer();
  }
}
Quizzer();

/***
 * Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
 * Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
 * */

const Quizzer = () =>{
    let response;
    do{
        response = prompt('¿Cuanto es 2 + 2?');
    } while(parseInt(response) != 4);
}

Quizzer();

//Crea una función que pueda recibir cualquier objeto como parámetro e 
//imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
function readObject(object) {
    return Object.entries(object).forEach((element) => {
    console.log(element);
  });
 }
readObject(myCar);

