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
function myFunc() { }
function myFunc2() {
    return 0;
}
function myFunc3() {
    return "";
}
function myFunc4(arg) {
    return 0 || "";
}
function sum(num1, num2) {
    return num1 + num2;
}
var sum2 = function (num1, num2) {
    return num1 + num2;
};
// unknown
var x;
x = "";
var s = "s";
if (typeof x === "string") {
    s = x;
}
var x2;
x2 = [545445];
var s2 = [554444];
if (Array.isArray(x2)) {
    s2 = x2;
}
var user = { name: "John" };
if ("age" in user) {
    console.log("Name: ".concat(user.name, ", age: ").concat(user.age));
}
else {
    console.log("Name: ".concat(user.name));
}
