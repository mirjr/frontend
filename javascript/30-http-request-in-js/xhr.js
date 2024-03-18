const postsAPI = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url, body) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = "json";

		if (body) xhr.setRequestHeader("Content-type", "application/json");
		xhr.onload = () => {
			if (xhr.status >= 400) reject(xhr);
			else resolve(xhr.response);
		};

		xhr.onerror = () => reject("Error");

		xhr.send(JSON.stringify(body));
	});
}

document.getElementById("button").addEventListener("click", () => {
	sendRequest("GET", postsAPI).then(console.log).catch(console.log);
	// sendRequest("POST", postsAPI, {data: "New Data"}).then(console.log).catch(console.log);
	// sendRequest("PUT", postsAPI + "/100", { data: "new data 2" })
	// 	.then(console.log)
	// 	.catch(console.log);

	// sendRequest("DELETE", postsAPI + "/1", {})
	// 	.then(console.log)
	// 	.catch(console.log);

	// sendRequest("PUT", postsAPI + "/3", { title: "bla bla" })
	// 	.then(console.log)
	// 	.catch(console.log);
});
