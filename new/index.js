//parent element
var itemlist=document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='grey';
console.log(itemlist.parentElement.parentElement);
//childnodes
console.log(itemlist.children);
//lastelementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.style.backgroundColor='yellow';
//lastchild
console.log(itemlist.lastChild);

//firstchild
console.log(itemlist.firstChild);
//firstelementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.style.backgroundColor='yellow';
//sibling
console.log(itemlist.nextSibling);
//nextElementsibling
console.log(itemlist.nextElementSibling);
//previoussibling
console.log(itemlist.previousSibling);
//previouselementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='green'
//create element
//create div
var newdiv=document.createElement('div');
//add class
newdiv.className='hello';
//add id
newdiv.id='hello1';
//set attribute
newdiv.setAttribute('title','hello div');
//create text node
var newdivtext=document.createTextNode('Hello World');
//add text to div
newdiv.appendChild(newdivtext);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newdiv);
container.insertBefore(newdiv,h1);