'use strict';

const promise = new Promise((resolve, reject) => {
  console.log('loading...');
  setTimeout(() => {
    // resolve('hi');
    reject(new Error('network error'));
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

const chaning = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

chaning
  .then((num) => (num = num * 2))
  .then((num) => (num = num * 3))
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 2000);
    });
  })
  .then((num) => console.log(num));

const gethen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hen`);
    }, 1000);
  });
const getegg = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`egg`);
    }, 1000);
  });
const getfry = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`fry`);
    }, 1000);
  });

gethen().then(getegg).then(getfry).then(console.log);
