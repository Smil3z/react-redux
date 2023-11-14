let colors = ['orange', 'blue', 'black'];
// .push modifies the original Array
colors.push('purple'); // OK in vanilla JS, NOT OK for redux

// Make a copy of the array with a new item
let colorsCopy = [...colors, 'red'];

console.log('colors', colors);
console.log ('colorsCopy', colorsCopy);

let person = { firstName: 'stephon'};

let personCopy = {...person, lastName: 'tonge'};
