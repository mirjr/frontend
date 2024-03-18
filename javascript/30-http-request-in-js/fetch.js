const postsAPI = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url, body) {
	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: body ? { "Content-type": "application/json" } : {},
	}).then((response) => {
		if (response.status >= 400) {
			throw Error("Error occured");
		}
		return response.json();
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
