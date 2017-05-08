function checkOnclickEvent(param) {
  console.log(param);
}
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var number = document.getElementsByTagName('li');
  list.innerHTML += '<li>item ' + number.length +'</li>'
});
