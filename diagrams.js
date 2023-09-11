class Dog {
  constructor(color, height, length, weight, age) {
    this.color = color;
    this.height = height;
    this.length = length;
    this.weight = weight;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  sit() {
    console.log("Sit method of dog");
  }

  bark() {
    console.log("Bark method of dog");
  }

  run() {
    console.log("Run method of dog");
  }

  eat() {
    console.log("Eat method of dog");
  }
}

class AccessModifiers {
  publicpublicAttribute;
  _privateAttribute;
  #protectedAttribute;

  constructor() {
    this.publicpublicAttribute = "Public  +";
    this._privateAttribute = "Private  -";
    this.#protectedAttribute = "Protected  #";
  }

  publicMethod() {
    console.log("This is a public method");
  }

  _privateMethod() {
    console.log("This is a private method");
  }

  #protectedMethod() {
    console.log("This is a protected method");
  }
}

const accessModifiers = new AccessModifiers();

class TaskList {
  _tasks = ["First Task", "Second Task"];

  addTask(task) {
    this._tasks.push(task);
  }

  removeTask(task) {
    this._tasks.splice(this._tasks.indexOf(task), 1);
  }

  getAllTasks() {
    return this._tasks;
  }
}

const tasks = new TaskList();
tasks.addTask("Third Task");
tasks.removeTask("First Task");
console.log(tasks.getAllTasks());
