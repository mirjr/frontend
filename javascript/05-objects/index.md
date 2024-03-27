# Obyektlar qanday ishlaydi? Primitiv qiymatlardan farqi nima?

Obyektlar primitiv qiymatlardan farqli o'laroq `call stack`-da `reference` saqlaydi. Bu `reference` bizni obyektning `Heap`-da joylashgan manziliga olib boradi. Shu sababli obyeklar `mutable`, primitiv qiymatlar `immutable` deyiladi.

![objects](https://miro.medium.com/v2/resize:fit:1400/0*G6tlNZ5FsUqm4grJ.png)

```javascript
let x = 12;

let person = {
	name: "John",
	age: 22,
};
// call stack             //
// x => address(12345) => value=12
// call stack                                   // Heap
// perosn => addres(54321) => value(1n2n3n4n5) => address(1n2n3n4n5n) => value={name:'John',age:22}
```
