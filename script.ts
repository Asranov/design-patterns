//Design Pattern
// Creational Pattern - How objects are created.
//  -SINGLETON
//  -PROTOTYPE
//  -BUILDER
//  -FACTORY

// Structural Pattern - How objects relate to each other.
//  -FACADE
//  -PROXY

// Behavioral Pattern - How objects communicate with each other.
//  -ITERATOR
//  -OBSERVER
//  -MEDIATOR
//  -STATE

// ---------------------------------------------------------------- //

//Factory Pattern
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name)
        break;
      case 2:
        return new Tester(name)
        break;
    }
  }
}

function say() {
  console.log("Hi, i am " + this.name + " and i am a " + this.type);
}

const employeeFactory: any = new EmployeeFactory();
const employees: any[] = []
employees.push(employeeFactory.create("Patric", 1))
employees.push(employeeFactory.create("John", 2))

employees.forEach((item) => {
  say.call(item)
})

//Singleton Pattern
function Process(state) {
  this.state = state;
}

const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0
  }

  let pManager

  function createProcessManager() {
    pManager = new ProcessManager()
    return pManager
  }

  return {
    getProcessManager: () => {
      if (!pManager) {
        pManager = createProcessManager()
        return pManager
      }
    }
  }
})()

const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

console.log(processManager === processManager2)