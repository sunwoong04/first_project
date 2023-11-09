async function self_intro() {
  return 'choi';
}

const user = self_intro();
user.then(console.log);
console.log(user);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(10000);
  return 'apple';
}

async function getBanana() {
  await delay(10000);
  return 'banana';
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromsie = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromsie;
  return `${apple}+${banana}`;
}

pickFruits().then(console.log);
