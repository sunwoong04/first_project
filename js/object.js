//object  = {key: 'value'}

const choi = { name: 'choi', age: '20' };
const age = 20;
const name = 'choi';

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

print(choi);

const obj1 = {}; //object literal
const obj2 = new Object(); // object construct //2개 있음

function printperson(object, key) {
  console.log(object['name']);
}
printperson(choi, 'name');

const array = { fruit: 'apple', food: 'fish' };
const array1 = {};
for (key in array) {
  array1[key] = array[key];
}
console.log(array1);

array4 = Object.assign({}, array);
console.log(array4);
