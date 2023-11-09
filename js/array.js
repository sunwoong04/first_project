'use strict';

const fruits = ['apple', 'banana'];

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit, index) => console.log(fruit, index));

fruits.push('melon');
console.log(fruits);

fruits.splice(1, 1, 'trie'); //splice = index,제거할 개수, 추가할 거
console.log(fruits);

console.log(fruits.join());
console.log(fruits.slice());

class student {
  constructor(rating, lastName, score, isPass) {
    this.rating = rating;
    this.lastName = lastName;
    this.score = score;
    this.isPass = isPass;
  }
}
const students = [
  new student('a', 'choi', 90, 'true'),
  new student('b', 'cs', 68, 'false'),
  new student('c', 'whe', 88, 'true'),
  new student('d', 'tak', 70, 'false'),
];
const result1 = students.filter((student) => student.isPass === 'true ');
console.log(result1);

const result = students.find((student, index) => student.score === 90);
console.log(result);

const result2 = students.map((student, index) => student.score);
console.log(result2);

const result3 = !students.some((student, index) => student.score <= 50);
console.log(result3);

const result4 = students.reduce((student, index) => student.score === 90);
console.log(result4);

const rabit = {
  name: 'tori',
  color: 'white',
  size: 'null',
  birthday: new Date(),
  jump: () => {
    console.log(`${this.name} can jump`);
  },
};

let json = JSON.stringify(rabit);
console.log(json);

let parse = JSON.parse(json, (key, value) => {
  console.log(key, value);
  return key === 'birthday' ? new Date(value) : value;
});
rabit.jump();
console.log(rabit.birthday.getDate());
console.log(json.birthday);
