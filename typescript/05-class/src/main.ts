class Car {
  protected brand: string;
  readonly model: string;
  private _color: string;

  constructor(brand: string, model: string, color: string) {
    this.brand = brand;
    this.model = model;
    this._color = color;
  }

  get color() {
    return this._color;
  }
  set color(value: string) {
    if (value && value.trim()) {
      this._color = value.trim();
    }
  }

  // protected qilingan metodlarni faqat shu ota class ichida ishlata olamiz
  private drive() {
    console.log(`${this.brand} ${this.model} is being driven`);
  }
}

class Bugatti extends Car {
  constructor(brand: string, model: string, _color: string) {
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

// ---------- //
// Interface
interface HumanInterface {
  name: string;
  age: number;
  getAge(): string;
}

interface PersonInterface extends HumanInterface {
  fullName(): string;
}

// Class
abstract class Human implements HumanInterface {
  name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }
  get age() {
    return this._age;
  }
  abstract getAge(): string;
}

class Person implements PersonInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  fullName(): string {
    return "New string";
  }
  getAge(): string {
    return `You are ${this.age} years old`;
  }
}
