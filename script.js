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
    this.create = function (name, type) {
        switch (type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
        }
    };
}
function say() {
    console.log("Hi, i am " + this.name + " and i am a " + this.type);
}
var employeeFactory = new EmployeeFactory();
var employees = [];
employees.push(employeeFactory.create("Patric", 1));
employees.push(employeeFactory.create("John", 2));
employees.forEach(function (item) {
    say.call(item);
});
//Singleton Pattern
function Process(state) {
    this.state = state;
}
var Singleton = (function () {
    function ProcessManager() {
        this.numProcess = 0;
    }
    var pManager;
    function createProcessManager() {
        pManager = new ProcessManager();
        return pManager;
    }
    return {
        getProcessManager: function () {
            if (!pManager) {
                pManager = createProcessManager();
                return pManager;
            }
        }
    };
})();
var processManager = Singleton.getProcessManager();
var processManager2 = Singleton.getProcessManager();
console.log(processManager === processManager2);
//Strategy pattern
function Fedex() {
    this.calculate = function (package) {
        return 2.45;
    };
}
function UPS() {
    this.calculate = function (package) {
        return 1.56;
    };
}
function USPS() {
    this.calculate = function (package) {
        return 4.5;
    };
}
function Shipping() {
    var _this = this;
    this.company = "";
    this.setStrategy = function (company) {
        _this.company = company;
    };
    this.calculate = function (package) {
        return _this.company.calculate(package);
    };
}
var fedex = new Fedex();
var ups = new UPS();
var usps = new USPS();
var package = { from: "Alabama", to: "Georgia", weight: 1.56 };
var shipping = new Shipping();
shipping.setStrategy(fedex);
shipping.setStrategy(ups);
shipping.setStrategy(usps);
console.log("Fedex: ", shipping.setStrategy(fedex));
console.log("Ups: ", shipping.setStrategy(ups));
console.log("Usps: ", shipping.setStrategy(usps));
//Iterator pattern
var items = [1, 2, "hello", true, "world"];
function Iterator(items) {
    this.items = items;
    this.index = 0;
}
Iterator.prototype = {
    hasNext: function () {
        return this.index < this.items.length;
    },
    next: function () {
        return this.items[this.index++];
    }
};
var iter = new Iterator(items);
console.log(iter.next());
console.log(iter.next());
console.log(iter.hasNext());
