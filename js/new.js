'use strict';

const student = {
  name: 'anna',
  level: 1,
};

console.log(student.name);

const { name, level } = student; //위에꺼랑 같은 코드
console.log(name, level);
/////////////////////////////////////////
const animals = ['monkey', 'dog'];

const [frist, seconde] = animals;
console.log(frist);
///////////////////////////////////////////
const person1 = {
  name: 'choi',
  job: {
    title: 'engineer',
    manager: {
      name: 'bob',
    },
  },
};
const person2 = {
  name: 'bob',
};

function printmanager(person) {
  console.log(person.job?.manager?.name);
}
printmanager(person1);
printmanager(person2);
//////////////////////////////////////////
const iscat = true;
console.log(iscat ? 'cat' : 'dog');
///////////////////////////////////////

const num = '';
const age = 0;
console.log(num ?? 'guest');
console.log(age ?? 'undifined');
//??는 값이 없으면 뒤에 있는걸 실행시키는거고
//||는 or로 앞에가 false면 뒤에있는걸 실행시킴
//false는 false 0 undifined null로 ||는 문제가 많음
