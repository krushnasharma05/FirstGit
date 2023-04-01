// var items = document.getElementsByClassName('list-group-item');
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';
// for (var i= 0;i < items.length; i++){
//     items[i].style.fontWeight='bold';
// }

//  var it = document.getElementsByClassName('list-item');
//  console.log(it);
//  it[0].style.fontWeight= 'bold';
//  var it = document.getElementsByTagName('li2');
//  console.log(it);
//  it[0].style.color='green';


  var lastit= document.querySelector('.list-group-item:nth-child(2)');
  lastit.style.backgroundColor='green';
  var threeit= document.querySelector('.list-group-item:nth-child(3)');
  threeit.style.display='none';
  var it = document.querySelectorAll('li:nth-child(1)');
for (var i = 0; i < it.length; i++) {
  it[i].style.color = 'green';
}
 var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'green';
}
