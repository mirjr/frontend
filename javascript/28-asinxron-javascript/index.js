function loadScript(src, callback) {
	let script = document.createElement("script");
	script.src = src;
	script.onload = () => callback(script);
	document.head.append(script);
}

console.log(0);
// loadScript("./script.js");

loadScript("./my/script.js", (script) => {
	console.log(`Cool, the ${script.src} is loaded, let's load one more`);
	loadScript("./my/script2.js", function (script) {
		console.log(`Cool, the second script is loaded`);
	});
});

// newFunction();
function newFunction() {
	console.log("Yangi funksiya");
}
console.log(1);
