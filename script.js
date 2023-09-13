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
//Observer pattern
function Subject() {
    this.observers = [];
}
Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    unSubscribte: function (fnToRemove) {
        this.observers = this.objects.filter(function (fn) {
            if (fn != fnToRemove) {
                return fn;
            }
        });
    },
    fire: function () {
        this.observers.forEach(function (fn) {
            fn.call();
        });
    }
};
var subject = new Subject;
function Observer1() {
    console.log("Observer 1 firing");
}
function Observer2() {
    console.log("Observer 2 firing");
}
subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.fire();
//Proxy pattern
function CryptocurrencyAPI() {
    this.getValue = function (coin) {
        console.log("Calling External Cryptocurrency API...");
        switch (coin) {
            case "Bitcoin":
                return "$500";
            case "Litecoin":
                return "$50";
            case "Ethereum":
                return "$175";
        }
    };
}
// const api = new CryptocurrencyAPI()
// console.log(api.getValue("Litecoin"));
// console.log(api.getValue("Bitcoin"));
// console.log(api.getValue("Ethereum"));
function CryptocurrencyProxy() {
    this.api = new CryptocurrencyAPI();
    this.cache = {};
    this.getValue = function (coin) {
        if (this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    };
}
var proxy = new CryptocurrencyProxy();
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
//Mediator pattern
function Member(name) {
    this.name = name;
    this.chatroom = null;
}
Member.prototype = {
    send: function (message, toMember) {
        this.chatroom.send(message, this, toMember);
    },
    receive: function (message, fromMember) {
        console.log("".concat(fromMember.name, " to ").concat(this.name, ": ").concat(message));
    }
};
function Chatroom() {
    this.members = {};
}
Chatroom.prototype = {
    addMember: function (member) {
        this.members[member.name] = member;
        member.chatroom = this;
    },
    send: function (message, fromMember, toMember) {
        toMember.receive(message, fromMember);
    }
};
var chatRoom = new Chatroom();
var bob = new Member("Bob");
var tim = new Member("Tim");
var john = new Member("John");
chatRoom.addMember(bob);
chatRoom.addMember(tim);
chatRoom.addMember(john);
bob.send("Hey, John", john);
john.send("Hi, Bob", bob);
