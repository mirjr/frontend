const actions = {
  seyName(greeting, answer) {
    console.log(`${greeting}, my name is ${this.name}. ${answer}`);
  },
};

const users = [
  { name: "John", age: 56 },
  { name: "Jack", age: 23 },
];

users.forEach((user) => {
  // actions.seyName.call(user, "Hi", "What is your name?");
  const myFunc = actions.seyName.bind(user, "Hi", "What is your name?");
  myFunc();
});

// ---------- //
const handdleClick = (arg) => {
  console.log(arg, this.location.host);
};

const btnClick = handdleClick.bind(document.querySelector("button"), "Nothing");

document.querySelector("button").addEventListener("click", btnClick);
