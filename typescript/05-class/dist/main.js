"use strict";
class Car {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this._color = color;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (value && value.trim()) {
            this._color = value.trim();
        }
    }
    // protected qilingan metodlarni faqat shu ota class ichida ishlata olamiz
    drive() {
        console.log(`${this.brand} ${this.model} is being driven`);
    }
}
class Bugatti extends Car {
    constructor(brand, model, _color) {
        super(brand, model, _color);
        // protected qilingand metodlar faqat ota/bola class-lar ichida ishlaydi
        // this.brand
        // this.model = 'Hacked!!!' //Cannot assign to 'model' because it is a read-only property
    }
    isBarnd() {
        return this.brand;
    }
}
const car1 = new Car("Chevrolet", "Nexia 3", "black");
const car2 = new Bugatti("Bugatti", "S2021", "white");
// car2.drive() //Property 'drive' is private and only accessible within class 'Car'
// car2.brand //Property 'brand' is protected and only accessible within class 'Car' and its subclasses
car2.isBarnd;
// Class
class Human {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    fullName() {
        return "New string";
    }
    getAge() {
        return `You are ${this.age} years old`;
    }
}
class Cal {
    constructor(x, y, admin, userName) {
        this.x = x;
        this.y = y;
        this.admin = admin;
        this.name = "";
        this.x = x;
        this.y = y;
        this.admin = admin;
        this.name = userName;
    }
    sum() {
        return this.x + this.y;
    }
}
class CalTwo extends Cal {
    constructor(x, y, admin, name) {
        super(x, y, admin, name);
    }
    testMet() {
        return this.admin;
    }
}
let calObj = new Cal(15, 20, true, "Vali");
let calObj2 = new CalTwo(10, 10, false, "Halim");
class ModuleMenuItem {
    constructor() {
        this.name = "";
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
let modul_1 = new ModuleMenuItem();
modul_1.setName("Vali");
class Odam {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class User extends Odam {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    setRole(newRole) {
        return (this.role = newRole);
    }
    getFullInfo() {
        return `My name is ${this.name}, I'm ${this.age} years old, I'm an ${this.role}`;
    }
}
class Admin extends Odam {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    setRole(newRole) {
        return (this.role = newRole);
    }
    getFullInfo() {
        return `My name is ${this.name}, I'm ${this.age} years old, I'm an ${this.role}`;
    }
}
let user = new User("Ali", 25, "user");
let admin = new Admin("Vali", 30, "admin");
