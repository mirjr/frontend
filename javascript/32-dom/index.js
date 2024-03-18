let ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
	if (e.target.localName === "li") console.log(e.target.dataset.id);
});
