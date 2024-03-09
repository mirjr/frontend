# 1. `void` type nima?

Hech qanday return qiymat qaytarmaydigan funksiyaning typei void bo'ladi.

The `void` type denotes the absence of having any type at all. It is a little like the opposite of the any type.

```typescript
function log(message): void {
  console.log(messsage);
}
```

# 2. `unknown` type nima?

TypeScript 3.0 introduced a new unknown type which is the type-safe counterpart of the any type.

The main difference between unknown and any is that unknown is much less permissive than any: we have to do some form of checking before performing most operations on values of type unknown, whereas we don't have to do any checks before performing operations on values of type any.

```typescript
let a: any;
let b: unknown;
let x = "Something";

x = a;
x = b; // Type 'unknown' is not assignable to type 'string'.ts(2322)
```

# 3. `never` type nima?

Hech narsa qaytarmaydigan tip.

The never type is a type that contains no values. Because of this, you cannot assign any value to a variable with a never type.

Typically, you use the never type to represent the return type of a function that always throws an error. For example:

```typescript
function raiseError(message: string): never {
  throw new Error(message);
}
```

# 4. `union` type nima?

```typescript
function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}
```

# 5. `optional props` nima?

```typescript
type User = {
  name: string;
  age?: number;
};
let user: User;
user = { name: "Ali" };

let user2: Required<User>;
user2 = { name: "Vali", age: 22 };
```

# 6. `enum` nima?

An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric. Lets start with numeric.

An enum is a group of named constant values. Enum stands for enumerated type.

To define an enum, you follow these steps:

- First, use the enum keyword followed by the name of the enum.
- Then, define constant values for the enum.

The following shows the syntax for defining an enum:

```typescript
enum name {constant1, constant2, ...};

// ----- //
enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'.
```

# 7. `abstract` class nima?

An abstract class is typically used to define common behaviors for derived classes to extend. Unlike a regular class, an abstract class cannot be instantiated directly.

To declare an abstract class, you use the abstract keyword:

```typescript
abstract class Employee {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

class Contractor extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}

let john = new FullTimeEmployee("John", "Doe", 12000);
let jane = new Contractor("Jane", "Doe", 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());

// John Doe makes 12000 a month.
// Jane Doe makes 16000 a month.
```

# 8. `function overload` nima?

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(15, 20));
console.log(add("Hello ", "World"));
console.log(add("Hello ", 22));
console.log(add(23, " World"));
```

# 7. `access modifiers` nima?

TypeScript provides three types of access modifiers: `public`, `private`, and `protected`. Members (properties and methods) of the TypeScript class are public by default, therefore you don't need to precede members with the public keyword.

![access modifiers in typescript](https://cdn-images-1.medium.com/v2/resize:fit:2280/1*iKmqnZARLRh1tHwTHKJWFw.png)
