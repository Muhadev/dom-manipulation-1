// DOM MANIPULATION


// GetElementById()

// const title = document.getElementById('main-heading');

// console.log(title);

// GetElementByClass()

// const list = document.getElementsByClassName('list-items');

// console.log (list);

// GetElementsByTagName()

// const list = document.getElementsByTagName('li');

// console.log (list);


// querySelector()

// const  container = document.querySelector('div');

// console.log(container);

// querySelectorAll()

// const  container = document.querySelectorAll('div');

// console.log(container);


// style element

// const title = document.querySelector('#main-heading');

// title.style.color = 'red'


// const list = document.querySelectorAll('.list-items');



// for( i = 0; i < list.length; i++) {


//     list[i] .style.fontSize = '5rem';
// }

// creating element

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// Adding the element

// ul.append(li)

// modifying the text

// const firstListItems = document.querySelector('.list-items');


// console.log(firstListItems.innerText);
// console.log(firstListItems.textContent);
// console.log(firstListItems.innerHTML);

// li.innerText = 'X-men';

// modifying attributes & classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));


// li.classList.add('list-items')

// console.log(li.classList.contains('list-items'));

// Remove Element 

// li.remove();


// Traverse the DOM


// Parent node  Traversal

// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

// Child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'red';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal

let ul = document.querySelector('ul');
const div = document.querySelector('div');

// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);