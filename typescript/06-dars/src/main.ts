// type berish
const input = document.getElementById("input") as HTMLInputElement;

const num: number = 1;

// (num as any as string).concat();

// function overloading
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

// generics
function sum<T, U>(arg: T, arg2: U): T & U {
  return { ...arg, ...arg2 };
}

type myType = { name: string };

const out = sum<myType, { age: number }>({ name: "John" }, { age: 22 });

interface MyInterface<T, U> {
  name: T;
  skills: U;
}

let obj: MyInterface<string, string[]> = {
  name: "John",
  skills: ["a", "b"],
};

class MyClass<T, U> {
  data: T;
  data2: U;
  constructor(malumot: T, malumot2: U) {
    this.data = malumot;
    this.data2 = malumot2;
  }

  getFullInfo(): string {
    return `Hi, my name is ${this.data}, I'm ${this.data2} years old.`;
  }
}

const obj2 = new MyClass<string, number>("Steve", 22);

// Utility types: Partial, Readonly, Pick, Required, Omit, Awaited
type myType2 = {
  name: string;
  age?: number;
};

// Readonly
let obj3: Readonly<myType2> = { name: "John" };
// obj3.name = 'Steve' //Cannot assign to 'name' because it is a read-only property.ts(2540)

// Required
let obj4: Required<myType2> = { name: "Jack", age: 25 }; //Property 'age' is missing in type '{ name: string; }' but required in type 'Required<myType2>'

// Awaited
type A = Awaited<Promise<string>>;

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<boolean | Promise<number>>;

// Partial
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

// Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

// Pick<Type, Keys>

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo2, "title" | "completed">;

const todo3: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo3;

// Omit<Type, Keys> --- The opposite of Pick

interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview2 = Omit<Todo3, "description">;

const todo4: TodoPreview2 = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo4;

type TodoInfo = Omit<Todo3, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;

// Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<"a" | "b" | "c", "a">;
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
type T2 = Exclude<string | number | (() => void), Function>;
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "circle" }>;
