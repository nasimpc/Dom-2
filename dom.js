// console.dir (document) ;
// console.log(document.domain) ;
// console.log(document.URL);
// console.log(document.title);
////document.title

// console.log(document. doctype);
// console.log(document.head) ;
// console.log(document.body) ;
// console.log (document.all);
// console.log(document.all[10]);
// // document.all[10]. textcontent = 'Hello';
// console.log(document. forms[0]);
// console.log(document.links);
// console. log (document.images);
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
// headerTitle.style.borderBottom = 'solid 3px #000'
// var addItem1 = document.getElementById('additems1');
// addItem1.style.color = 'green';
// addItem1.style.fontWeight = 'bold'; 
//var items = document.getElementsByTagName('li');
//var items = document.getElementsByClassName('list-group-item');
//items[1].textContent = 'Hello 2';
//items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'green';
//for (var i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = 'bold';
//}
// items[2].style.color = 'white';
// var temp = document.querySelectorAll('li');
// temp[1].style.backgroundColor = 'green';
// var temp = document.querySelectorAll('li:nth-child(odd');
// for (var i = 0; i < items.length; i++) {
//     temp[i].style.backgroundColor = 'green';
// }
//Traversing the Dom
//var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundcolor='grey'
// console.log(itemList.parentNode.parentNode.parentNode);
// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundcolor='grey'
// console.log(itemList.parentElement.parentElement.parentElement)
// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundcolor
// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'
// //next sibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);

//create element

//create a div

var newDiv1 = document.createElement('div');
// Add class
newDiv1.className = 'hello';
// Add id
newDiv1.id = "hello1";
// Add attr
newDiv1.setAttribute('title', 'Hello Div');
// Create text node
var newDiv1Text = document.createTextNode('HEllo');
// Add text to div
newDiv1.appendChild(newDiv1Text);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
//console.log(newDiv1);
newDiv1.style.fontSize = "30px";
container.insertBefore(newDiv1, h1);

//create second div
var newDiv = document.createElement('div');
// Add class
newDiv1.className = 'hello2';
// Add id
newDiv.id = "hello2";
// Add attr
newDiv.setAttribute('title2', 'Hello Div2');
// Create text node
var newDivText = document.createTextNode('HEllo');
// Add text to div
newDiv.appendChild(newDivText);
var a = document.querySelector('#items');
var b = document.querySelector('#cat');
console.log(a);
console.log(b);
a.insertBefore(newDiv, b);


