const e=document.querySelector(".gallery"),s=[{url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"White and Black Long Fur Cat"},{url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Orange and White Koi Fish Near Yellow Koi Fish"},{url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Group of Horses Running"}].map((e=>{const s=document.createElement("li");s.classList.add("grid__item");const t=document.createElement("img");return t.src=e.url,t.alt=e.alt,t.classList.add("img"),s.append(t),s}));e.append(...s),e.classList.add("grid");
//# sourceMappingURL=task-03.41cfe182.js.map