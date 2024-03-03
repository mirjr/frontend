// type Book = {
//   readonly author: string;
//   title: string;
//   pages?: number;
//   price: number | string;
// };

// let data: Book[];

// data.push({
//   author: "Mixail Bulgakov",
//   title: "Usta va Margarita",
//   price: "$10",
// });

// ---- Function type ---- //
function myFunc(): void {}

function myFunc2(): number {
  return 0;
}

function myFunc3(): string {
  return "";
}

function myFunc4(arg: string | number): string | number {
  return 0 || "";
}

// ----
type Sum = (num1: number, num2: number, tax?: number) => number;

function sum<Sum>(num1: number, num2: number) {
  return num1 + num2;
}

const sum2: Sum = (num1, num2) => {
  return num1 + num2;
};

// unknown
let x: unknown;

x = "";
let s = "s";
if (typeof x === "string") {
  s = x;
}

let x2: unknown;
x2 = [545445];
let s2 = [554444];
if (Array.isArray(x2)) {
  s2 = x2;
}

type Obj = { name: string; age?: number };
let user: Obj = { name: "John" };
if ("age" in user) {
  console.log(`Name: ${user.name}, age: ${user.age}`);
} else {
  console.log(`Name: ${user.name}`);
}
