// const square = function (x) {
//   return x * x;
// }

// const squareArrow = x => x * x;

// console.log(square(8));
// console.log(squareArrow(9));

// Challenge - Use arrow functions
// getFirstName

const getFirstName = (name) => {
  const firstName = name.split(' ')[0];
  console.log(firstName);
}

const getFirstName2 = (name) => name.split(' ')[0];

getFirstName('Mike Smith');

console.log(getFirstName2('John Denver'));