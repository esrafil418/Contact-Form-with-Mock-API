## Mini Project: Contact Form with Mock API

This is a **mini JavaScript project** built using **Tailwind CSS** and **Vanilla JS**.  
It takes a **name** and **phone number** from a simple form and stores the data in a **Mock API**.  
The saved contacts are also displayed dynamically on the page.

> ⚠️ Note: The project is currently **not responsive**.

---

### 🛠️ Tech Stack

- **Tailwind CSS** – for styling  
- **Vanilla JavaScript (ES6)** – for logic and DOM manipulation  
- **Mock API** – for temporary backend simulation  

---

### 📁 Project Overview

1. User fills out a form with **name** and **phone number**  
2. Data is sent to the **Mock API**  
3. The API response is rendered dynamically on the page  
4. The form performs **full CRUD operations** (Create, Read, Update, Delete)  
5. The code is **modular**, allowing easy expansion and maintenance  

---

### 🧩 The `El()` Function – Core Element Builder

A key part of this project is the custom `El()` function, which helps create DOM elements in a **clean and reusable** way — instead of writing repetitive `document.createElement` and `appendChild` lines.

### Function Definition
```js
export function El({
  element,
  children,
  eventListener,
  dataset,
  restAttrs = {},
  ...rest
}) {
  const elem = document.createElement(element);
  // Create the element => <div></div>

  for (const attr in rest) {
    elem[attr] = rest[attr];
  }
  // Add direct attributes like innerText, className, src, etc.

  if (children) {
    for (const child of children) {
      elem.append(child);
    }
  }
  // Append child elements => <div>{children}</div>

  if (eventListener) {
    eventListener.map((el) => elem.addEventListener(el.event, el.callback));
  }
  // Add event listeners (e.g. onClick handlers)

  if (dataset) {
    for (const key in dataset) {
      elem.dataset[key] = dataset[key];
    }
  }
  // Add data-* attributes => <div data-id=""></div>

  for (const key in restAttrs) {
    elem.setAttribute(key, restAttrs[key]);
  }
  // Add any remaining custom attributes

  return elem;
}
```

### 🔍 How It Works
- `element` → defines which HTML tag to create (e.g., `"div"`, `"button"`, `"input"`)  
- `children` → array of elements or text nodes to be appended  
- `eventListener` → attaches events like `click`, `submit`, etc.  
- `dataset` → sets `data-*` attributes easily  
- `rest` → allows passing native JS element properties such as `className`, `innerText`, `src`, etc.  
- `restAttrs` → for additional attributes like `id`, `placeholder`, `type`, etc.

### ✅ Example Usage
```js
const btn = El({
  element: "button",
  innerText: "Add Contact",
  className: "bg-blue-500 text-white px-4 py-2 rounded",
  eventListener: [
    {
      event: "click",
      callback: () => console.log("Contact added!"),
    },
  ],
});
```

This would create:
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">Add Contact</button>
```

---

## 🚀 How to Run

1. Clone this repository  
2. Install dependencies (npm install)  
3. Put your **mock api** link in the base.js file 
4. Open the `index.html` file in your browser  

---

## 🧠 Future Improvements

- Make the project **responsive** for mobile and tablet  
- Add **form validation**  
- Implement **edit / delete** functionality  
- Enhance UI with animations and transitions  

---

**Author:** [Your Name]  
**License:** MIT  
