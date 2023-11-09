class UserStorage {
  Login(id, password, success, error) {
    setTimeout(() => {
      if (id === 'choi' && password === 'start') {
        success(id);
      } else {
        error(new Error('not found'));
      }
    }, 2000);
  }
  GetStorage(username, success, error) {
    setTimeout(() => {
      if (username === 'choi') {
        success({
          name: 'choi',
          role: 'admin',
        });
      } else {
        error(new Error('not found'));
      }
    }, 2000);
  }
}

let login = new UserStorage();
let id = prompt('enter your id');
let password = prompt('enter your password');
login.Login(
  id,
  password,
  (id) => {
    login.GetStorage(
      id,
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
