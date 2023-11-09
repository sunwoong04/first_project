'use strict';

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

function printimediately(print) {
  print();
}
printimediately(() => console.log('hi'));

class UserStorage {
  Login(id, password, onsuccess, onerror) {
    setTimeout(() => {
      if (
        (id === 'choi' && password === 'start') ||
        (id === 'corder' && password === 'coding')
      ) {
        onsuccess(id);
      } else {
        onerror(new Error('not found'));
      }
    }, 2000);
  }

  getStorage(username, onsuccess, onerror) {
    setTimeout(() => {
      if (username === 'choi') {
        onsuccess({
          name: 'choi',
          role: 'admin',
        });
      } else {
        onerror(new Error('not found'));
      }
    }, 1000);
  }
}

let login = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
login.Login(
  id,
  password,
  (username) => {
    login.getStorage(
      username,
      (user) => {
        alert(`hello ${user.name} and your role is ${user.role}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
