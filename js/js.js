class person {
  static hi = 'coding';
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static printhi() {
    console.log(person.hi);
  }
}

console.log(person.hi);
person.printhi();

class object {
  constructor(table, chair) {
    this._table = table;
    this.chair = chair;
  }

  get table() {
    return this._table;
  }

  set table(value) {
    this._table = value;
  }
}

const tool = new object('wood', 'stone');

console.log(tool);
