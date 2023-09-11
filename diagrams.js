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
