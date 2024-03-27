# TDZ (Tempororal dead zone) nima?

Bu `let` & `const`-ning shu `scope` boshidan to ular elon qilingan qatorgacha bo'lgan vaqt oralig'i.

```javascript
if (true) {
	// TDZ start
	console.log(x); // x is dead
	alert(1);
	let x = 1; // TDZ end
}
```
