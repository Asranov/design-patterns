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
//Creational Pattern
//  1.Singleton
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.showMessage = function () {
        console.log("Hello from Singleton!");
    };
    return Singleton;
}());
var singleton1 = Singleton.getInstance();
var singleton2 = Singleton.getInstance();
singleton1.showMessage();
console.log(singleton1 === singleton2);
