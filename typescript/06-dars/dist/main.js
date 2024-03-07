"use strict";
// type berish
const input = document.getElementById("input");
const num = 1;
function add(a, b) {
    return a + b;
}
console.log(add(15, 20));
console.log(add("Hello ", "World"));
console.log(add("Hello ", 22));
console.log(add(23, " World"));
// generics
function sum(arg, arg2) {
    return Object.assign(Object.assign({}, arg), arg2);
}
const out = sum({ name: "John" }, { age: 22 });
let obj = {
    name: "John",
    skills: ["a", "b"],
};
class MyClass {
    constructor(malumot, malumot2) {
        this.data = malumot;
        this.data2 = malumot2;
    }
    getFullInfo() {
        return `Hi, my name is ${this.data}, I'm ${this.data2} years old.`;
    }
}
const obj2 = new MyClass("Steve", 22);
// Readonly
let obj3 = { name: "John" };
// obj3.name = 'Steve' //Cannot assign to 'name' because it is a read-only property.ts(2540)
// Required
let obj4 = { name: "Jack", age: 25 }; //Property 'age' is missing in type '{ name: string; }' but required in type 'Required<myType2>'
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
cats.boris;
const todo3 = {
    title: "Clean room",
    completed: false,
};
todo3;
const todo4 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
todo4;
const todoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
};
todoInfo;
