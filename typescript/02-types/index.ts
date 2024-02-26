// TypeScript Array Type

let skills: string[] = [];

skills = ["javaScript", "Python"];

let anyArr: any[];
anyArr = [98, "june", 15, "06", "tiger"];

let newArr: (number | string | boolean)[]; // union
newArr = [98, "june", 15, "06", "tiger", true];

let user: {
  name: string;
  age: number;
  skils: {
    programming: string[];
    bio: string[];
  };
};

user = {
  name: "Ali",
  age: 22,
  skils: {
    programming: ["JavaScript", "React JS", "Next JS"],
    bio: ["Autodock", "Autodock Vina"],
  },
};

interface User {
  name: string;
  age: number;
  skills: {
    programming: string[];
    bio: string[];
  };
}
const user2: User = {
  name: "Vali",
  age: 25,
  skills: {
    programming: ["python", "java"],
    bio: ["pymol", "vmd"],
  },
};

let x: 10; // type 10
x = 10;

// Tuple
let tree: [string, number];
tree = ["banana", 5];

let y: [10, 20];
y = [10, 20];

const rgb: [number, number, number] = [255, 255, 255];
// console.log(rgb[0]);

// Optional Tuple Elements
let bgColor: [number, number, number, number?];
let headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// TypeScript Enum
enum ROLES {
  USER = 10,
  MODERATOR,
  ADMIN,
  OWNER,
}
enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

// TypeScript union Type
let myVar: string | number;

// TypeScript String Literal Types
let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
// mouseEvent = 'mouseover'; // compiler error

// TypeScript Type Aliases
type myType = string | number;
let input: myType;
input = 10;
input = "10";

type withName = { name: string };
type withAge = { age: number };
type withNameAndAge = withName & withAge;

let value: withName | withAge | withNameAndAge;

value = { name: "Ali", age: 44 };

// TypeScript never Type
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
  // make the function valid
  return neverOccur();
}

let neverOccur = () => {
  throw new Error("Never!");
};
