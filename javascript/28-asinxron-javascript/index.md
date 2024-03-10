# Asinxron JavaScript (Callback, promise, async/await) haqida gapiring.

Asinxron dasturlash deb kodni dasturni bloklamaydigan holda yozish va asinxron kodlar bilan to'g'ri ishlashga aytiladi. Asinxron kodlarga misol, setTimeout, setInterval, EventListener, HTTP Request va hkz.

Ular bilan ishlash uchun `callback`, `async/await`, `promise`-lardan foydalanamiz.

```javascript
// callback
setTimeout(() => {
	console.log("Coming from Callback");
}, 1000);

function getData(callback) {
	const Http = new XMLHttpRequest();
	const url = "https://jsonplacholder.typicode.com/posts";
	Http.open("GET", url);
	Http.send();

	Http.onreadystatechange = (e) => {
		callback(e);
	};
}
getData((e) => console.log(e));

btn.EddEventListner("click", () => {
	console.log("Button clicked");
});

// promise
fetch(url).then((data) => data.json());

const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Coming from promise!");
	}, 2000);
});

myPromise
	.then((data) => data + ", yes it is right")
	.then((data) => +", surly")
	.then(console.log);

// Async await
async function someFunction() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("From async/await");
			reject(new Error("Oops, something wrong!!!"));
		}, 2000);
	});

	let result = await promise;
	console.log(result);
}
someFunction();
```
