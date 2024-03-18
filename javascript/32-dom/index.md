# DOM nima?

- Document Object Model

# Elementlarni qanday yo'llar bilan tanlab olishni bilasiz?

- `getElementById` - search element by element id
- `getElementByClassName` - search element by class name
- `getElementByTagName` - search element by tag name
- `getElementsByName` - search element by name attribute
- `querySelector` - returns the first element that matches the specified selector
- `querySelectorAll` - returns elements that match the specified selector

# HTML collection va NodeList farqi nima?

**HTML collection** - bu document elementlardan tashkil topgan kolleksiya

**NodeList** esa document nodes (element nodes, attribute nodes, text nodes)lardan tashkil topgan kolleksiya.

# innerHTML va textContent farqi nima?

- **innerHTML** - gets and sets the HTML content of an element
- **textContent** - gets and sets the text content of a node

# append va prepend nima?

- **append()** - inserts a node after the last child node of a parent node
- **prepend()** - inserts a node before the first child node of a parent node

# Qanday qilib bir nechta elementlarni qo'shishimiz mumkin, masalan 100 ta `p` tegi?

`DocumentFragnent()` orqali, quyidagicha misol orqali:

```javascript
let langs = ["JavaScript", "TypeScript", "Rust", "C", "C#", "C++"];
let langEl = document.querySelector("#lang");

let fragment = new DocumentFragment();

langs.forEach((lang) => {
	const li = document.createElement("li");

	li.append(lang);
	fragment.appendChild(li);
});

langEl.appendChild(fragment);
```

# Qanday qilib elementga yangi class qo'shish yoki o'chirish mumkin?

`element.classList` orqali:

- `element.classList.add('newClass')` - adds 'newClass' to the classlist
- `element.classList.remove('newClass')` - removes 'newClass' from the classlist

# event bubling va capturing nima?

**Event bubling** - is the event starts from the target element to the top element.

**Event capturing** - is the event starts from top element to the target element. It is the oppiste of Event bubling, which starts from target element to the top element

# Event delegation nima?

Event delegation is basically a pattern to handle events efficiently.
Isnted of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the target property of the event object.
