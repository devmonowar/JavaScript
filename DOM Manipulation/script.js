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
console.dir(newElement);
newElement.innerHTML = "item five";

const ul = document.querySelector('ul');

ul.appendChild(newElement);
ul.append(newElement);
ul.prepend(newElement);