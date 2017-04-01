 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos
var nombre1 = {
  name: "Dumar", 
  height: 170, 
  sport: "Skydiving"
}

var nombre2 = {
  name: "Dalilah", 
  height: 180, 
  sport: "Football"
}

// 1. Añadir propiedades a objetos
athletes = [nombre1, nombre2];
function addWinToAthletes(array, event) {
  array.forEach(function (athlete) {
    athlete.win = function () {
      console.log(`${this.name} won the ${event}`);
    }
  })
}
addWinToAthletes(athletes, 'Tennis');


// 2. Voltea un String




// 3. Remueve numeros impares




// 4. Funcion constructora




// 5. Reflexion


/////// Pruebas //////////
// var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
// console.log(michaelPhelps.constructor === Athlete)
// console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')


// __________________________________________
//Codigo de Pruebas:  No alteres el codigo debajo de esta linea.

// function assert(test, message, test_number) {
//   if (!test) {
//     console.log(test_number + "false");
//     throw "ERROR: " + message;
//   }
//   console.log(test_number + "true");
//   return true;
// }

// assert(
//   nombre1 instanceof Object,
//   "The value of nombre1 should be an Array.",
//   "1. "
// )
// assert(
//   nombre2 instanceof Object,
//   "The value of nombre2 should be an Array.",
//   "2. "
// )
// assert(
//   nombre1.name != undefined,
//   "The Array'nombre1' should have attribute 'name'.",
//   "3. "
// )
// assert(
//   nombre1.height != undefined,
//   "The Array'nombre1' should have attribute 'height'.",
//   "4. "
// )
// assert(
//   nombre2.sport != undefined,
//   "The Array'nombre2' should have attribute 'sport'.",
//   "5. "
// )
// assert(
//   nombre2.name != undefined,
//   "The Array'nombre2' should have attribute 'name'.",
//   "6. "
// )
// assert(
//   nombre2.height != undefined,
//   "The Array'nombre2' should have attribute 'height'.",
//   "7. "
// )
// assert(
//   nombre2.sport != undefined,
//   "The Array'nombre2' should have attribute 'sport'.",
//   "8. "
// )
