class UserStorage {
  Login(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'choi' && password === 'start') ||
          (id === 'corder' && password === 'coding')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }
  getStorage(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'choi') {
          resolve({
            name: 'choi',
            role: 'admin',
          });
        } else {
          reject(new Error('not found'));
        }
      }, 1000);
    });
  }
}

let login = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
login
  .Login(id, password)
  .then(login.getStorage)
  .then((user) => alert(`hello${user.name},you have a ${user.role}role`))
  .catch(console.log);
