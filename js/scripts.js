function checkOnclickEvent(param) {
  console.log(param);
}
var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
  checkOnclickEvent('button został kliknięty')
});

list.addEventListener('list', function() {
  list.innerHTML += '<li>item</li>';
});
console.log(list);

var number = document.getElementsByTagName('item');
for (var i = 0; i < number.length; i++) {
	var numbr = number[i].innerText;
	console.log('Item: ' + numbr);
}