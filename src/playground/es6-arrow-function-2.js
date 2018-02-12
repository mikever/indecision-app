// arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// }

// console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Mike',
  cities: ['New Orleans', 'Gainesville', 'Ocala'],

  printPlacesLived () {
    return this.cities.map((city) => `${this.name} has lived in ${city}.`);
  }
};

// console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  // array of numbers
  // multiplyBy - single number
  // method: multiply - return new array where numbers have been multiplied - use map

  numbers: [1, 2, 3],
  multiplyBy: 2,

  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());