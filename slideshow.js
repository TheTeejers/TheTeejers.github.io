var items, length, deg, z, move = 0;
var time = 3000;

function rotate(direction){
  move += direction;
  var items = document.getElementsByClassName('item');
  for(var i = 0; i < length; i++){
    items[i].style.transform = 'rotateY('+(deg*(i+move))+'deg) translateZ('+z+'px)';
  }
}


function load(){
  var items = document.getElementsByClassName('item');
  length = items.length;
  deg = 360 / length;

  z = (items[0].offsetWidth / 2) / Math.tan((deg / 2) * (Math.PI / 180));

  for(var i = 0; i < length; i++){
    items[i].style.transform = 'rotateY('+(deg*i)+'deg) translateZ('+z+'px)';
  }
}


window.addEventListener('load', load);
