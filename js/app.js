// let box1 = document.body.firstElementChild.firstElementChild
let box1 = document.querySelector("div");
console.log(box1);
// let box2 = document.body.firstElementChild.children[1];
let box2 = box1.nextElementSibling;
console.log(box2);
// let box3 = document.body.firstElementChild.children[2];
let box3 = box2.nextElementSibling;
console.log(box3);

box1.classList.add("dark");
box1.classList.remove("dark");
box2.classList.add("dark");
console.log(box3.classList.contains("dark"));
box3.classList.toggle("dark");
box3.classList.toggle("dark");
box3.classList.toggle("dark");
// Atributo dataset
let number = box3.dataset.boxNumber;
console.log(number);
console.log(box3.dataset.month);
// document.body.firstElementChild.innerHTML = "<h1>Wow!</h1>";
// document.querySelector("section");
// console.log(document.querySelector("section").innerHTML);
// console.log(document.querySelector("section").outerHTML);
// document.querySelector("section").outerHTML = "<h1>Wow!</h1>";

document.querySelector("section");
//sacamos el html que hay dentro//
// console.log(document.querySelector("section").innerHTML);
// //cuando estamos dentro del html//
// console.log(document.querySelector("section").outerHTML);
// document.querySelector("section").outerHTML="<h1>Wow!</h1>"
//modify content
// document.body.insertAdjacentHTML("afterbegin",
// "<nav>navigation</nav>");
// document.querySelector("nav").insertAdjacentHTML("beforebegin", 
// "<h1>Main Header</h1>");
// document.querySelector("nav").insertAdjacentHTML("beforeend", '<a href="htpp://google.com"> Ir a google</a>');
// document.querySelector("nav").insertAdjacentHTML
// ("afterend", "<p>This is a paragraph</p>");


let header = document.createElement("h1");
header.append ("Hello wordl!");
document.body.append(header);
header.prepend("¡");
document.querySelector("h1").firstChild.before("¡¡")
let paragraph = document.createElement("p");
paragraph.textContent="writting a paragraph";
document.body.append(paragraph);
document.querySelector("h1").replaceWith(paragraph);
/*paragraph.remove();*/
/*document.body.remove();*/
paragraph.style.textAlign = "center";
paragraph.style.textTransform = "capitalize";
paragraph.style.backgroundColor = "black";
paragraph.style.color = "white";
paragraph.style.padding = "2em";
paragraph.setAttribute = ("class", "light");
paragraph.setAttribute = ("class", "main");
console.log(paragraph.getAttribute("class"));
paragraph.classList.add("light");
console.log(paragraph.style.cssText);











// // Elemento padre
// document.body.parentNode
// // Total elementos hijos
// document.body.children.length
// document.body.childElementCount
// // Primer elemento hijo
// document.body.children[]
// // Primer y ultimo nodos hijo
// document.body.firstElementChild
// document.body.lastElementChild
// // Siguiente y anterior hermano
// document.body.nextElementSibling
// document.body.previousElementSibling