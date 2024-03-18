# JavaScriptda HTTP so'rovlarni qanday yuborish mumkin?

HTTP so'rovlarni asosan quyidagi uch usulda qilish mumkin:

- **XHR** (XmlHttpRequest)

  ```javascript
  // XHR
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
  	sendRequest("POST", postsAPI, {}).then(console.log).catch(console.log);
  });
  ```

- **Fetch**
- **Axios**
