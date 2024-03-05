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
