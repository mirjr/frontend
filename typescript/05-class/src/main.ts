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

interface MyName {
	name: string;
}

class Cal implements MyName {
	name = "";
	constructor(
		private x: number,
		private y: number,
		protected admin: boolean,
		userName: string
	) {
		this.x = x;
		this.y = y;
		this.admin = admin;
		this.name = userName;
	}

	sum(): number {
		return this.x + this.y;
	}
}

class CalTwo extends Cal {
	constructor(x: number, y: number, admin: boolean, name: string) {
		super(x, y, admin, name);
	}

	testMet(): boolean {
		return this.admin;
	}
}

let calObj = new Cal(15, 20, true, "Vali");
let calObj2 = new CalTwo(10, 10, false, "Halim");

interface IModuleMenuItem {
	getName(): string;
}

class ModuleMenuItem implements IModuleMenuItem {
	private name: string = "";

	public getName(): string {
		return this.name;
	}

	public setName(newName: string) {
		this.name = newName;
	}
}

let modul_1 = new ModuleMenuItem();
modul_1.setName("Vali");

// console.log(modul_1.getName());

interface IOdam {
	name: string;
	age: number;
	getFullInfo(): string;
}

abstract class Odam implements IOdam {
	constructor(public name: string, public age: number) {}

	abstract getFullInfo(): string;
}

class User extends Odam {
	constructor(name: string, age: number, public role: string) {
		super(name, age);
	}

	setRole(newRole: string): string {
		return (this.role = newRole);
	}
	getFullInfo(): string {
		return `My name is ${this.name}, I'm ${this.age} years old, I'm an ${this.role}`;
	}
}

class Admin extends Odam {
	constructor(name: string, age: number, public role: string) {
		super(name, age);
	}

	setRole(newRole: string): string {
		return (this.role = newRole);
	}
	getFullInfo(): string {
		return `My name is ${this.name}, I'm ${this.age} years old, I'm an ${this.role}`;
	}
}

let user = new User("Ali", 25, "user");
let admin = new Admin("Vali", 30, "admin");
