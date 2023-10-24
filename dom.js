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
var items = document.getElementsByClassName('list-group-item');
items[1].textContent = 'Hello 2';
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';
for (var i = 0; i < items; i++) {
    items[i].style.fontWeight = 'bold';
}