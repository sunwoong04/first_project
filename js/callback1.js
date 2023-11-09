'use strict';

class Counter {
  constructor(setTimes) {
    this.Counter = 0;
    this.callback = setTimes;
  }

  increase() {
    this.Counter++;
    console.log(this.Counter);
    if (this.Counter === 5) {
      this.callback(this.Counter);
    }
  }
}
function printsomething(num = 'default message') {
  console.log(`ya ${num}`);
}

let count = new Counter(printsomething);
count.increase();
count.increase();
count.increase();
count.increase();
count.increase();

const iscat = true;
console.log(iscat ? 'cat' : 'dog');
