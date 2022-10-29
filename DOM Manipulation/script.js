document.getElementById("demo2").innerHTML = "My First JavaScript";

function myFunction() {
    document.getElementById("demo3").innerHTML = "Paragraph changed.";
}

let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4

document.getElementById("demo").innerHTML =
"The value of z is " + z + "."; 


var xy = myFunction(4, 5);

function myFunction(a, b) {
return a * b;
}

document.getElementById("demo4").innerHTML = xy;

document.querySelector("h2").style.color="red";


// getAttribute()

// setAttribute()

// href, src

// parentElement

// children

// nextSibling or nextElementSibling

// previousSibling or previousElementSibling

// getComputedStyle()

// classList

let h2 = document.querySelector("h2");
h2.style.color="green"
h2.getAttribute("id");
h2.setAttribute("id","amidd");
h2.setAttribute("class","className");

h2.setAttribute("class", h2.getAttribute("class") + " newClass");

const link = document.querySelector("a");
link.style.color = "red";
link.href = "itnuthosting";

let items = document.querySelector("li")
// items.parentElement.childElementCount.nextElementSibling.style.color = "red";

// items.parentElement.childElementCount.children[2];

let steeed = getComputedStyle(items);
steeed;
steeed.width;
steeed.color;

// classList
items.classList
items.classList.add("test")
items.classList.remove('test')
items.classList.toggle('test')


// DOM Manipulation (Part 3/3)

// • createElement()
// • appendChild()
// • insertBefore()
// • insertAdjacentElement()
// • append()
// • prepend()
// • removeChild()
// • remove()


const newElement = document.createElement("li");
newElement;
// console.dir(newElement);
newElement.innerHTML = "item five";

const ul = document.querySelector('ul');

ul.appendChild(newElement);
ul.append(newElement);
ul.prepend(newElement);

const li = document.createElement("li");
li.innerText = "item six";
const lis = document.querySelectorAll('li')
ul.insertBefore(li, lis[2])


// JavaScript HTML DOM Examples

 const elementvar = document.getElementById("demo666");
// elementvar.innerHTML = "Cookies associated with this document: " + document.cookie;
// elementvar.innerHTML = document.domain;
 elementvar.innerHTML = document.lastModified;
 elementvar.innerHTML = "The title of this document is: " + document.title;
 
 elementvar.innerHTML = document.URL;

 var w = window.open();
 w.document.open();
 w.document.write("<h2>Hello World!</h2>");
 w.document.close();




//insertAdjacentElement 

// afterbegin
// afterend
// beforebegin
// beforeend

 const bold = document.createElement("b");
bold.innerHTML = 'bold text hear'
const firstHeading = document.querySelector('.package_name h3')
firstHeading.insertAdjacentElement('beforebegin', bold);
​