# Web workers nima va qanday ustunligi bor?

**Web workers** - asosiy `thread`-dan tashqarida, yangi faylda yangi `thread`-da katta hajmli kodlarni ishlatib, javobini asosiy `thread`-ga qaytarishda ishlatiladigan `Web API`.

Ishlashi quyidagicha:

![web workers](https://miro.medium.com/v2/resize:fit:582/1*JT6Z2FGtV2l9eEmXRLdxLA.png)

```javascript
// main.js
let worker = new Worker("worker.js");

worker.onmessage = function (event) {
	console.log("Result", event);
	document.write(event.data);
};

// worker.js
let result = 0;
for (let i = 0; 1 <= 1000000000; i++) {
	result += i;
}
postMessage(result);
```
