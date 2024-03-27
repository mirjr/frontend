# Malumot tiplari (Data Types)

JavaScriptda malumot tiplari qiymatlariga qarab 2 ta turga bo'linadi, `Primitive` & `Non-primitive`:

|               |                   |
| ------------- | ----------------- |
| **Primitive** | **Non-primitive** |
| String        | Object            |
| Number        |                   |
| Boolean       |                   |
| Null          |                   |
| Undefined     |                   |
| BigInt        |                   |
| Symbol        |                   |

## Symbol

In JavaScript, the Symbol data type is a primitive type that is used to create unique and immutable values. It is an alternative to using strings as property keys, and it can help prevent unintended modification of property keys.

Here's an example of how to use the Symbol data type.

- Example 1: Using a Symbol as a property key

```javascript
let s = Symbol("hello");

// Log the symbol to the console
console.log(s); // Symbol(hello)

// Create an object with the symbol as a property
let obj = {
	[s]: "world",
};

// Log the property to the console
console.log(obj[s]); // world
```

In this example, a Symbol is used as a property key on an object. This can be helpful for preventing unintended modification of property keys, as the Symbol value is unique and immutable.

- Example 2: Using a Symbol as a global registry key

```javascript
const MY_SYMBOL = Symbol.for("my symbol");

// Use the symbol as a global registry key
let obj1 = {
	[MY_SYMBOL]: "foo",
};

let obj2 = {
	[MY_SYMBOL]: "bar",
};

console.log(obj1[MY_SYMBOL]); // foo
console.log(obj2[MY_SYMBOL]); // bar
```

In this example, the `Symbol.for()` method is used to create a `Symbol` value that is stored in a global registry. This allows the Symbol value to be accessed and used in multiple places, making it a convenient way to create a global registry key.

- Example 3: Using a Symbol to define a unique iterator

```javascript
const myIterable = {
	[Symbol.iterator]: function* () {
		let i = 0;
		while (true) {
			yield i++;
		}
	},
};

// Use the iterator
for (let value of myIterable) {
	if (value > 5) break;
	console.log(value);
}

// Output:
// 0
// 1
// 2
// 3
// 4
// 5
```

In this example, the `Symbol.iterator` symbol is used to define a unique iterator for an object. This allows the object to be used in a for...of loop, which is a convenient way to iterate over the values of an object.
